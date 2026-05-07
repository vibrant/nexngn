<script lang="ts">
  import { t } from '$lib/i18n/store';
  import PhaseCycleRing from '$lib/components/PhaseCycleRing.svelte';
</script>

<section id="how" class="frame bg-ink-900/40">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.how.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">
          {$t.how.title}
        </h2>
        <div class="rule-accent mt-8"></div>
        <p class="mt-8 text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.how.pitch}</p>

        <div class="mt-10 border-l-2 border-accent-500/40 pl-5 italic text-ink-100">
          {$t.how.notWankel}
        </div>
      </div>

      <div class="md:col-span-7">
        <div class="mb-12 hidden md:block">
          <PhaseCycleRing />
        </div>

        <ul class="space-y-8">
          {#each $t.how.points as p, i}
            <li class="grid grid-cols-[auto_1fr] gap-5 border-t border-ink-800 pt-6">
              <div class="font-mono text-xs uppercase tracking-cad text-accent-400">
                0{i + 1}
              </div>
              <div>
                <h3 class="font-display text-xl text-ink-50 leading-tight sm:text-2xl">{p.h}</h3>
                <p class="mt-3 text-ink-100 leading-relaxed">{p.p}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
