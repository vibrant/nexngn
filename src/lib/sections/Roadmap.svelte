<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="roadmap" class="frame">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.roadmap.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">{$t.roadmap.title}</h2>
        <div class="rule-accent mt-8"></div>
        <p class="mt-8 text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.roadmap.body}</p>
      </div>

      <div class="md:col-span-7">
        <ol class="relative space-y-0">
          <span class="absolute left-[19px] top-2 bottom-2 w-px bg-ink-800" aria-hidden="true"></span>
          {#each $t.roadmap.gates as g, i}
            <li class="relative grid grid-cols-[auto_1fr] gap-4 py-5 border-b border-ink-800 last:border-b-0 sm:gap-5">
              <div class="relative z-10 flex h-10 w-10 items-center justify-center rounded-sm border bg-ink-950 {i === 0 ? 'border-accent-500/60 text-accent-400' : 'border-ink-600 text-ink-200'}">
                <span class="font-mono text-[11px] uppercase tracking-cad">{g.id}</span>
              </div>
              <div class="pt-1 min-w-0">
                <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 class="font-display text-lg text-ink-50 sm:text-xl md:text-2xl">{g.label}</h3>
                  <span class="font-mono text-[10px] uppercase tracking-cad text-ink-300">{g.when}</span>
                </div>
                <p class="mt-2 text-sm leading-relaxed text-ink-200">{g.why}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</section>
