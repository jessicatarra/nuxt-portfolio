<template>
  <div>
    <Navbar />
    <Sidebar />
    <main class="pt-16 md:pl-64">
      <section class="wrapper py-12">

        <!-- Hero -->
        <div class="mb-16">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between">
            <div class="mb-8 md:mb-0">
              <span class="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-indigo-100 bg-indigo-700 rounded-full mb-5">
                🥚 Easter Egg Unlocked
              </span>
              <h1 class="text-4xl md:text-6xl font-bold mb-3">21K Training Plan</h1>
              <p class="opacity-60 text-lg">12 weeks · Run · Cycle · Strength</p>
            </div>
            <div class="flex-shrink-0">
              <div class="race-card p-6 rounded-2xl text-center min-w-40">
                <p class="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Race Day</p>
                <p class="text-3xl font-bold">Aug 2</p>
                <p class="text-xl font-bold opacity-80">2026</p>
                <p class="text-sm opacity-50 mt-2">🏁 21 km</p>
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

        <!-- Phases -->
        <div v-for="phase in phases" :key="phase.name" class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
            <div class="flex items-center space-x-3">
              <span :class="['w-3 h-3 rounded-full flex-shrink-0', phaseDot(phase.color)]"></span>
              <h2 class="text-2xl font-bold">{{ phase.name }}</h2>
            </div>
            <span class="text-sm opacity-50 font-medium">🚴 {{ phase.cycling }}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="week in phase.weeks"
              :key="week.num"
              :class="['week-card p-5 rounded-2xl border-2 relative', week.taper ? 'border-indigo-400' : week.cutback ? 'border-dashed opacity-90 ' + phaseBorder(phase.color) : phaseBorder(phase.color)]"
            >
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase tracking-wider opacity-40">Week {{ week.num }}</span>
                <span
                  v-if="week.cutback && !week.taper"
                  :class="['text-xs px-2 py-0.5 rounded-full font-semibold', phaseBadge(phase.color)]"
                >Cutback</span>
                <span
                  v-if="week.taper"
                  class="text-xs px-2 py-0.5 rounded-full font-semibold bg-indigo-100 text-indigo-700"
                >Taper</span>
              </div>
              <p class="text-xs opacity-40 mb-5 font-medium">{{ week.dates }}</p>

              <div class="space-y-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider opacity-40 mb-1">Sat — Long Run</p>
                  <p :class="['font-bold', week.longRun.km === 21 ? 'text-3xl text-green-500' : 'text-2xl']">
                    {{ week.longRun.km }} km
                    <span v-if="week.longRun.km === 21" class="ml-1">🎯</span>
                  </p>
                  <p class="text-xs opacity-40 mt-0.5">{{ week.longRun.date }}</p>
                </div>
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wider opacity-40 mb-1">Tue — Run A</p>
                  <p class="font-bold text-lg">{{ week.runA.km }} km</p>
                  <p class="text-xs opacity-40 mt-0.5">{{ week.runA.date }}</p>
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
            <p class="text-7xl font-bold">21 km</p>
          </div>
        </div>

        <!-- Rules -->
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
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Sidebar, Footer },

  data() {
    return {
      weekTemplate: [
        { day: 'Thu', session: 'Strength', icon: '💪', key: false },
        { day: 'Fri', session: 'Optional run or cycling', icon: '🔄', key: false },
        { day: 'Sat', session: 'Long run', icon: '🏃', key: true },
        { day: 'Sun', session: 'Zone 2 cycling', icon: '🚴', key: false },
        { day: 'Mon', session: 'Rest', icon: '😴', key: false },
        { day: 'Tue', session: 'Run A', icon: '🏃', key: true },
        { day: 'Wed', session: 'Zone 2 cycling', icon: '🚴', key: false },
      ],
      phases: [
        {
          name: 'Phase 1 — Base',
          color: 'blue',
          cycling: '2 × 45–60 min',
          weeks: [
            { num: 1, dates: 'May 8–14', longRun: { date: 'May 10', km: 9 }, runA: { date: 'May 13', km: 5 }, cutback: false },
            { num: 2, dates: 'May 15–21', longRun: { date: 'May 17', km: 10 }, runA: { date: 'May 20', km: 5 }, cutback: false },
            { num: 3, dates: 'May 22–28', longRun: { date: 'May 24', km: 11 }, runA: { date: 'May 27', km: 6 }, cutback: false },
            { num: 4, dates: 'May 29–Jun 4', longRun: { date: 'May 31', km: 8 }, runA: { date: 'Jun 3', km: 4 }, cutback: true },
          ],
        },
        {
          name: 'Phase 2 — Build',
          color: 'amber',
          cycling: '2 × 60–90 min',
          weeks: [
            { num: 5, dates: 'Jun 5–11', longRun: { date: 'Jun 7', km: 13 }, runA: { date: 'Jun 10', km: 6 }, cutback: false },
            { num: 6, dates: 'Jun 12–18', longRun: { date: 'Jun 14', km: 14.5 }, runA: { date: 'Jun 17', km: 7 }, cutback: false },
            { num: 7, dates: 'Jun 19–25', longRun: { date: 'Jun 21', km: 16 }, runA: { date: 'Jun 24', km: 7 }, cutback: false },
            { num: 8, dates: 'Jun 26–Jul 2', longRun: { date: 'Jun 28', km: 12 }, runA: { date: 'Jul 1', km: 5 }, cutback: true },
          ],
        },
        {
          name: 'Phase 3 — Peak + Taper',
          color: 'green',
          cycling: '2 × 45–75 min',
          weeks: [
            { num: 9, dates: 'Jul 3–9', longRun: { date: 'Jul 5', km: 17.5 }, runA: { date: 'Jul 8', km: 7 }, cutback: false },
            { num: 10, dates: 'Jul 10–16', longRun: { date: 'Jul 12', km: 19 }, runA: { date: 'Jul 15', km: 6 }, cutback: false },
            { num: 11, dates: 'Jul 17–23', longRun: { date: 'Jul 19', km: 21 }, runA: { date: 'Jul 22', km: 5 }, cutback: false },
            { num: 12, dates: 'Jul 24–30', longRun: { date: 'Jul 26', km: 10 }, runA: { date: 'Jul 29', km: 4 }, cutback: true, taper: true },
          ],
        },
      ],
      rules: [
        'Saturday long run is non-negotiable — everything else bends around it.',
        'Never skip cutback weeks (4 and 8), even if you feel great.',
        'Friday optional — ride instead of run if legs are heavy from Thursday strength.',
        'Any shin or knee pain → swap Run A for easy cycling that week.',
        "Missed long run → don't make it up, continue from where the plan says next week.",
      ],
    }
  },

  methods: {
    phaseDot(color) {
      return { blue: 'bg-blue-400', amber: 'bg-amber-400', green: 'bg-green-400' }[color] || 'bg-indigo-400'
    },
    phaseBorder(color) {
      return { blue: 'border-blue-400', amber: 'border-amber-400', green: 'border-green-400' }[color] || 'border-indigo-400'
    },
    phaseBadge(color) {
      return {
        blue: 'bg-blue-100 text-blue-700',
        amber: 'bg-amber-100 text-amber-700',
        green: 'bg-green-100 text-green-700',
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
</style>
