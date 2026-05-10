<template>
  <div>
    <Navbar />
    <Sidebar />
    <main class="pt-16 md:pl-64">
      <section class="wrapper py-12 pt-20">

        <!-- Hero -->
        <div class="mb-16 pt-10">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between">
            <div class="mb-8 md:mb-0">
              <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-indigo-100 bg-indigo-700 rounded-full mb-5">
                🥚 Easter Egg Unlocked
              </span>
              <h1 class="text-4xl md:text-6xl font-bold mb-3">Half Marathon Plan</h1>
              <p class="opacity-60 text-lg">12 weeks · Run · Cycle · Strength</p>
              <p class="opacity-40 text-sm mt-2">{{ plan.meta.athlete }} · {{ plan.meta.generatedBy }}</p>
            </div>
            <div class="flex-shrink-0">
              <div class="race-card p-6 rounded-2xl text-center min-w-40">
                <p class="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Race Day</p>
                <p class="text-3xl font-bold">Aug 2</p>
                <p class="text-xl font-bold opacity-80">2026</p>
                <p class="text-sm opacity-50 mt-2">🏁 21.1 km</p>
                <p class="text-xs opacity-40 mt-1">{{ daysToRace }} days away</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Assessment -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Athlete Assessment</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div class="stat-card p-4 rounded-xl text-center">
              <p class="text-2xl font-bold">{{ plan.assessment.currentForm.weeklyRunKm }}</p>
              <p class="text-xs opacity-50 mt-1">km/week running</p>
            </div>
            <div class="stat-card p-4 rounded-xl text-center">
              <p class="text-2xl font-bold">{{ plan.assessment.currentForm.longestSessions.runKm }}</p>
              <p class="text-xs opacity-50 mt-1">km longest run</p>
            </div>
            <div class="stat-card p-4 rounded-xl text-center">
              <p class="text-2xl font-bold">{{ plan.assessment.currentForm.weeklyVolume.totalHours }}h</p>
              <p class="text-xs opacity-50 mt-1">weekly volume</p>
            </div>
            <div class="stat-card p-4 rounded-xl text-center">
              <p class="text-2xl font-bold">{{ plan.assessment.currentForm.consistency }}</p>
              <p class="text-xs opacity-50 mt-1">weeks consistent</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest opacity-40 mb-3">Strengths</h3>
              <div class="space-y-2">
                <div
                  v-for="s in plan.assessment.strengths"
                  :key="s.area"
                  class="stat-card p-3 rounded-xl flex items-start gap-3"
                >
                  <span class="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <p class="font-semibold text-sm">{{ s.area }}</p>
                    <p class="text-xs opacity-50 mt-0.5">{{ s.evidence }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest opacity-40 mb-3">Limiters</h3>
              <div class="space-y-2">
                <div
                  v-for="l in plan.assessment.limiters"
                  :key="l.area"
                  class="stat-card p-3 rounded-xl flex items-start gap-3"
                >
                  <span class="text-amber-400 mt-0.5 flex-shrink-0">△</span>
                  <div>
                    <p class="font-semibold text-sm">{{ l.area }}</p>
                    <p class="text-xs opacity-50 mt-0.5">{{ l.evidence }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Weekly Rhythm -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Weekly Rhythm</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            <div
              v-for="item in weekTemplate"
              :key="item.day"
              :class="['p-4 rounded-xl text-center', item.key ? 'bg-indigo-700 text-indigo-100' : 'template-card']"
            >
              <p class="text-xl mb-2">{{ item.icon }}</p>
              <p class="font-bold text-sm">{{ item.day }}</p>
              <p class="text-xs opacity-75 mt-1 leading-tight">{{ item.session }}</p>
            </div>
          </div>
        </div>

        <!-- HR Zones -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-2">Heart Rate Zones</h2>
          <p class="opacity-40 text-xs mb-5">Max HR {{ plan.zones.run.hr.maxHR }} bpm · {{ plan.zones.run.hr.note }}</p>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div
              v-for="z in plan.zones.run.hr.zones"
              :key="z.zone"
              :class="['stat-card p-4 rounded-xl', zoneCardClass(z.zone)]"
            >
              <p class="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">Z{{ z.zone }}</p>
              <p class="font-bold text-sm mb-1">{{ z.name }}</p>
              <p class="text-xs opacity-60 font-mono">{{ z.hrLow }}–{{ z.hrHigh }} bpm</p>
            </div>
          </div>
        </div>

        <!-- Run-Walk Progression -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-2">Run-Walk Progression</h2>
          <p class="opacity-50 text-sm mb-6 leading-relaxed max-w-2xl">{{ plan.runWalkProgression.note }}</p>
          <div class="stat-card rounded-2xl overflow-hidden">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-current border-opacity-10">
                  <th class="text-left p-4 text-xs font-bold uppercase tracking-widest opacity-40">Weeks</th>
                  <th class="text-left p-4 text-xs font-bold uppercase tracking-widest opacity-40">Long Run</th>
                  <th class="text-left p-4 text-xs font-bold uppercase tracking-widest opacity-40 hidden sm:table-cell">Easy Runs</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(p, i) in plan.runWalkProgression.phases"
                  :key="i"
                  class="border-b border-current border-opacity-5 last:border-0"
                >
                  <td class="p-4 font-semibold text-xs">{{ p.weeks }}</td>
                  <td class="p-4 opacity-75 text-xs">{{ p.longRun || p.note }}</td>
                  <td class="p-4 opacity-75 text-xs hidden sm:table-cell">{{ p.easyRun || '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Training Phases -->
        <div v-for="phase in computedPhases" :key="phase.name" class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
            <div class="flex items-center space-x-3">
              <span :class="['w-3 h-3 rounded-full flex-shrink-0', phaseDot(phase.color)]"></span>
              <h2 class="text-2xl font-bold">{{ phase.displayName }}</h2>
            </div>
            <span class="text-sm opacity-50 font-medium">🚴 {{ phase.cycling }}</span>
          </div>
          <p class="opacity-50 text-sm mb-2 ml-6">{{ phase.focus }}</p>
          <div class="ml-6 mb-6 flex flex-wrap gap-2">
            <span
              v-for="kw in phase.keyWorkouts"
              :key="kw"
              :class="['text-xs px-2 py-0.5 rounded-full', phaseBadge(phase.color)]"
            >{{ kw }}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="week in phase.weeks"
              :key="week.weekNumber"
              :class="['week-card rounded-2xl border-2 relative', week.taper ? 'border-indigo-400' : week.cutback ? 'border-dashed opacity-90 ' + phaseBorder(phase.color) : phaseBorder(phase.color)]"
            >
              <!-- Week card header -->
              <div class="p-5">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider opacity-40">Week {{ week.weekNumber }}</span>
                  <span
                    v-if="week.cutback && !week.taper"
                    :class="['text-xs px-2 py-0.5 rounded-full font-semibold', phaseBadge(phase.color)]"
                  >Cutback</span>
                  <span
                    v-if="week.taper"
                    class="text-xs px-2 py-0.5 rounded-full font-semibold bg-indigo-100 text-indigo-700"
                  >Taper</span>
                </div>
                <p class="text-xs opacity-40 mb-4 font-medium">{{ formatDateRange(week.startDate, week.endDate) }}</p>

                <!-- Long run highlight -->
                <div v-if="weekLongRun(week)" class="long-run-tile rounded-xl p-3 mb-3">
                  <p class="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">Sat — Long Run</p>
                  <p :class="['font-bold leading-none', weekLongRun(week).km >= 20 ? 'text-3xl text-green-500' : 'text-2xl']">
                    {{ weekLongRun(week).km }} km
                    <span v-if="weekLongRun(week).km >= 20" class="ml-1 text-2xl">🎯</span>
                  </p>
                  <p class="text-xs opacity-40 mt-1">{{ weekLongRun(week).date }}</p>
                </div>

                <!-- Weekly totals grid -->
                <div class="grid grid-cols-3 gap-2 mb-4">
                  <div class="week-stat-tile rounded-lg p-2 text-center">
                    <p class="text-xs font-bold uppercase tracking-wider opacity-40 mb-0.5">Run</p>
                    <p class="font-bold text-sm">{{ week.summary.bySport.run ? week.summary.bySport.run.km : 0 }} km</p>
                  </div>
                  <div class="week-stat-tile rounded-lg p-2 text-center">
                    <p class="text-xs font-bold uppercase tracking-wider opacity-40 mb-0.5">Bike</p>
                    <p class="font-bold text-sm">{{ (week.summary.bySport.bike && week.summary.bySport.bike.km) ? week.summary.bySport.bike.km : 0 }} km</p>
                  </div>
                  <div class="week-stat-tile rounded-lg p-2 text-center">
                    <p class="text-xs font-bold uppercase tracking-wider opacity-40 mb-0.5">Time</p>
                    <p class="font-bold text-sm">{{ week.summary.totalHours }}h</p>
                  </div>
                </div>

                <!-- Toggle button -->
                <button
                  class="schedule-btn w-full text-xs font-semibold py-2 rounded-lg transition-colors"
                  @click="toggleWeek(week.weekNumber)"
                >
                  {{ isWeekExpanded(week.weekNumber) ? '↑ Hide Schedule' : '↓ View Schedule' }}
                </button>
              </div>

              <!-- Expanded day-by-day schedule -->
              <div v-if="isWeekExpanded(week.weekNumber)" class="border-t border-current border-opacity-10">
                <div
                  v-for="day in week.days"
                  :key="day.date"
                  class="border-b border-current border-opacity-5 last:border-0"
                >
                  <div class="px-5 py-3">
                    <p class="text-xs font-bold uppercase tracking-widest opacity-30 mb-2">
                      {{ day.dayOfWeek.slice(0, 3) }} · {{ formatShortDate(day.date) }}
                    </p>
                    <div class="space-y-2">
                      <div v-for="wo in day.workouts" :key="wo.id">
                        <button
                          class="w-full text-left"
                          @click="toggleWorkout(wo.id)"
                        >
                          <div class="flex items-center gap-2">
                            <span class="text-base flex-shrink-0">{{ sportIcon(wo.sport) }}</span>
                            <div class="flex-1 min-w-0">
                              <p class="text-xs font-semibold leading-tight truncate">{{ wo.name }}</p>
                              <div class="flex items-center gap-2 mt-0.5">
                                <span v-if="wo.distanceKm" class="text-xs opacity-40">{{ wo.distanceKm }} km</span>
                                <span v-if="wo.durationMinutes" class="text-xs opacity-40">{{ wo.durationMinutes }} min</span>
                                <span
                                  v-if="wo.primaryZone"
                                  :class="['text-xs px-1.5 py-0 rounded font-mono leading-5', zoneClass(wo.primaryZone)]"
                                >{{ wo.primaryZone }}</span>
                              </div>
                            </div>
                            <span class="text-xs opacity-30 flex-shrink-0">{{ isWorkoutExpanded(wo.id) ? '▲' : '▼' }}</span>
                          </div>
                        </button>
                        <p
                          v-if="isWorkoutExpanded(wo.id) && (wo.humanReadable || wo.description)"
                          class="text-xs opacity-60 mt-2 pl-7 leading-relaxed"
                        >{{ wo.humanReadable || wo.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Race Day -->
        <div class="mb-16">
          <div class="bg-indigo-700 text-indigo-100 p-10 rounded-2xl text-center">
            <p class="text-6xl mb-4">🏁</p>
            <p class="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Finish Line</p>
            <h2 class="text-4xl font-bold mb-2">Race Day</h2>
            <p class="text-xl opacity-80 mb-6">Sunday, August 2, 2026</p>
            <p class="text-7xl font-bold">21.1 km</p>
          </div>
        </div>

        <!-- Race Strategy -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Race Strategy</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div
              v-for="(seg, key) in plan.raceStrategy.pacing"
              :key="key"
              class="stat-card p-5 rounded-2xl"
            >
              <p class="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">{{ formatPacingKey(key) }}</p>
              <p class="font-bold text-lg mb-1">{{ seg.effort }}</p>
              <p class="font-mono text-sm opacity-60 mb-3">{{ seg.targetHR }}</p>
              <p class="text-xs opacity-50 leading-relaxed">{{ seg.notes }}</p>
            </div>
          </div>

          <!-- Nutrition -->
          <h3 class="text-lg font-bold mb-4">Race Nutrition</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div class="stat-card p-4 rounded-xl">
              <p class="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Pre-Race</p>
              <p class="text-xs opacity-70 leading-relaxed">{{ plan.raceStrategy.nutrition.preRace }}</p>
            </div>
            <div class="stat-card p-4 rounded-xl">
              <p class="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">During</p>
              <p class="text-xs opacity-70 leading-relaxed">{{ plan.raceStrategy.nutrition.during.carbsPerHour }}g carbs/hr · {{ plan.raceStrategy.nutrition.during.fluidStrategy }}</p>
              <p class="text-xs opacity-50 mt-2 leading-relaxed">{{ plan.raceStrategy.nutrition.during.fuel }}</p>
            </div>
            <div class="stat-card p-4 rounded-xl flex items-center">
              <p class="text-sm font-bold opacity-80 leading-relaxed">{{ plan.raceStrategy.nutrition.notes }}</p>
            </div>
          </div>

          <!-- Taper note -->
          <div class="stat-card p-5 rounded-xl border border-indigo-400 border-opacity-30">
            <p class="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Taper · {{ plan.raceStrategy.taper.volumeReduction }}% volume reduction from {{ formatShortDate(plan.raceStrategy.taper.startDate) }}</p>
            <p class="text-sm opacity-70 leading-relaxed">{{ plan.raceStrategy.taper.notes }}</p>
          </div>
        </div>

        <!-- Kit Checklist -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Race Day Kit</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="(item, i) in plan.raceStrategy.kitChecklist"
              :key="i"
              class="rule-card flex items-center gap-3 p-4 rounded-xl"
            >
              <span class="w-5 h-5 rounded-full border-2 border-current opacity-30 flex-shrink-0"></span>
              <p class="text-sm opacity-75">{{ item }}</p>
            </div>
          </div>
        </div>

        <!-- Key Rules -->
        <div class="mb-16">
          <h2 class="text-2xl font-bold mb-6">Key Rules</h2>
          <div class="space-y-3">
            <div
              v-for="(rule, i) in rules"
              :key="i"
              class="rule-card flex items-start space-x-4 p-4 rounded-xl"
            >
              <span class="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-700 text-indigo-100 flex items-center justify-center text-sm font-bold">
                {{ i + 1 }}
              </span>
              <p class="opacity-75 pt-0.5 leading-relaxed">{{ rule }}</p>
            </div>
          </div>
        </div>

      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import planData from '~/static/half-marathon-2026-08-02.json'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default {
  components: { Navbar, Sidebar, Footer },

  data() {
    return {
      plan: planData,
      expandedWeeks: [],
      expandedWorkouts: [],
      weekTemplate: [
        { day: 'Mon', session: 'Zone 2 cycling', icon: '🚴', key: false },
        { day: 'Tue', session: 'Run A', icon: '🏃', key: true },
        { day: 'Wed', session: 'Ride + Strength', icon: '💪', key: false },
        { day: 'Thu', session: 'Short run', icon: '🏃', key: true },
        { day: 'Fri', session: 'Rest', icon: '😴', key: false },
        { day: 'Sat', session: 'Long run', icon: '🏃', key: true },
        { day: 'Sun', session: 'Zone 2 cycling', icon: '🚴', key: false },
      ],
      rules: [
        'Saturday long run is sacred — everything else bends around it.',
        'Use run-walk ratios: start at 5:1 and loosen each phase. HR over 152? Start the walk break early.',
        'Never skip cutback weeks (4 and 8), even if you feel great.',
        'Any shin or knee pain → swap the run for easy cycling that week.',
        "Missed long run → don't make it up, continue from where the plan says next week.",
        'Nothing new on race day — shoes, socks, and fuel all tested in training.',
      ],
    }
  },

  computed: {
    daysToRace() {
      const race = new Date('2026-08-02')
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return Math.max(0, Math.round((race - today) / 86400000))
    },

    computedPhases() {
      const meta = {
        Base:  { color: 'blue',   cycling: '2 × 45–60 min' },
        Build: { color: 'amber',  cycling: '2 × 60–90 min' },
        Peak:  { color: 'green',  cycling: '2 × 45–75 min' },
        Taper: { color: 'indigo', cycling: '1–2 × 30–45 min' },
      }
      return this.plan.phases.map((p, i) => ({
        ...p,
        ...(meta[p.name] || {}),
        displayName: `Phase ${i + 1} — ${p.name}`,
        weeks: this.plan.weeks
          .filter(w => w.phase === p.name)
          .map(w => ({ ...w, taper: p.name === 'Taper', cutback: w.isRecoveryWeek })),
      }))
    },
  },

  methods: {
    toggleWeek(num) {
      const idx = this.expandedWeeks.indexOf(num)
      if (idx === -1) this.expandedWeeks.push(num)
      else this.expandedWeeks.splice(idx, 1)
    },
    isWeekExpanded(num) {
      return this.expandedWeeks.includes(num)
    },
    toggleWorkout(id) {
      const idx = this.expandedWorkouts.indexOf(id)
      if (idx === -1) this.expandedWorkouts.push(id)
      else this.expandedWorkouts.splice(idx, 1)
    },
    isWorkoutExpanded(id) {
      return this.expandedWorkouts.includes(id)
    },

    formatShortDate(str) {
      const [, m, d] = str.split('-').map(Number)
      return `${MONTHS[m - 1]} ${d}`
    },
    formatDateRange(start, end) {
      const [, sm, sd] = start.split('-').map(Number)
      const [, em, ed] = end.split('-').map(Number)
      if (sm === em) return `${MONTHS[sm - 1]} ${sd}–${ed}`
      return `${MONTHS[sm - 1]} ${sd}–${MONTHS[em - 1]} ${ed}`
    },
    formatPacingKey(key) {
      return key.replace('km', 'km ').replace(/(\d+)to(\d+)/, '$1–$2')
    },

    weekLongRun(week) {
      const day = week.days.find(d => d.dayOfWeek === 'Saturday')
      if (!day) return null
      const wo = day.workouts.find(w => w.sport === 'run')
      if (!wo) return null
      return { date: this.formatShortDate(day.date), km: wo.distanceKm }
    },
    weekTuesdayRun(week) {
      const day = week.days.find(d => d.dayOfWeek === 'Tuesday')
      if (!day) return null
      const wo = day.workouts.find(w => w.sport === 'run')
      if (!wo) return null
      return { date: this.formatShortDate(day.date), km: wo.distanceKm }
    },

    sportIcon(sport) {
      return { run: '🏃', ride: '🚴', strength: '💪', rest: '😴', race: '🏆' }[sport] || '📋'
    },
    zoneClass(zone) {
      if (!zone) return ''
      const z = zone.toLowerCase()
      if (z.includes('z5')) return 'bg-red-500 bg-opacity-20 text-red-400'
      if (z.includes('z4')) return 'bg-orange-500 bg-opacity-20 text-orange-400'
      if (z.includes('z3')) return 'bg-yellow-500 bg-opacity-20 text-yellow-400'
      if (z.includes('z2')) return 'bg-blue-500 bg-opacity-20 text-blue-400'
      return 'bg-gray-500 bg-opacity-20 text-gray-400'
    },
    zoneCardClass(zone) {
      const map = { 1: 'border-l-2 border-gray-400', 2: 'border-l-2 border-blue-400', 3: 'border-l-2 border-yellow-400', 4: 'border-l-2 border-orange-400', 5: 'border-l-2 border-red-400' }
      return map[zone] || ''
    },

    phaseDot(color) {
      return { blue: 'bg-blue-400', amber: 'bg-amber-400', green: 'bg-green-400', indigo: 'bg-indigo-400' }[color] || 'bg-indigo-400'
    },
    phaseBorder(color) {
      return { blue: 'border-blue-400', amber: 'border-amber-400', green: 'border-green-400', indigo: 'border-indigo-400' }[color] || 'border-indigo-400'
    },
    phaseBadge(color) {
      return {
        blue: 'bg-blue-100 text-blue-700',
        amber: 'bg-amber-100 text-amber-700',
        green: 'bg-green-100 text-green-700',
        indigo: 'bg-indigo-100 text-indigo-700',
      }[color] || 'bg-indigo-100 text-indigo-700'
    },
  },
}
</script>

<style scoped>
.template-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
}
.week-card {
  background-color: var(--bg-secondary);
}
.rule-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
}
.race-card {
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 1rem;
}
.stat-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
}
.long-run-tile {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
}
.week-stat-tile {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
}
.schedule-btn {
  background-color: var(--bg-primary);
  color: var(--text-color);
  opacity: 0.6;
}
.schedule-btn:hover {
  opacity: 1;
}
</style>
