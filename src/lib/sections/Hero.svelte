<script lang="ts">
  import { t } from '$lib/i18n/store';
  import PhaseCycleRing from '$lib/components/PhaseCycleRing.svelte';
</script>

<section class="relative grid-bg border-b border-ink-800 overflow-hidden">
  <!-- Top corner ticks — engineering-document feel -->
  <div class="absolute left-6 top-6 hidden md:block font-mono text-[10px] uppercase tracking-cad text-ink-300">
    Sheet 01 / 06 · NEX·CMP·001
  </div>
  <div class="absolute right-6 top-6 hidden md:block font-mono text-[10px] uppercase tracking-cad text-ink-300">
    Rev. A · 2026·05
  </div>

  <div class="mx-auto grid max-w-page items-center gap-10 px-6 pt-20 pb-20 md:grid-cols-12 md:gap-12 md:pt-28 md:pb-28">
    <div class="md:col-span-7">
      <h1 class="font-display text-[2.5rem] leading-[1.05] tracking-tight text-ink-50 sm:text-5xl md:text-7xl">
        {$t.hero.headlineLead}<br />
        <span class="text-ink-100">{$t.hero.headlineMid}</span><br />
        <em class="not-italic font-display italic text-accent-400">{$t.hero.headlineTail}</em>
      </h1>

      <p class="mt-7 max-w-prose text-base leading-relaxed text-ink-100 sm:text-lg">
        {$t.hero.sub}
      </p>

      <div class="mt-9 flex flex-wrap items-center gap-3">
        <a class="btn-primary" href={$t.contact.vdrHref} target="_blank" rel="noopener noreferrer">
          {$t.hero.ctaPrimary} <span aria-hidden="true">→</span>
        </a>
        <a class="btn-secondary" href="#contact">
          {$t.hero.ctaSecondary}
        </a>
      </div>
    </div>

    <div class="md:col-span-5">
      <PhaseCycleRing />
    </div>
  </div>

  <!-- Dimensional callout strip — full bleed; 2-up mobile, 4-up desktop -->
  <div class="border-t border-ink-800">
    <div class="mx-auto grid max-w-page grid-cols-2 gap-px bg-ink-800 md:grid-cols-4">
      {#each $t.hero.callouts as c, i}
        {@const isDelta = 'delta' in c && c.delta}
        <div class="bg-ink-950 px-6 py-7">
          {#if isDelta}
            <div class="mb-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-cad text-accent-400">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                <polygon points="0,1 10,1 5,9" />
              </svg>
              <span>{c.delta}</span>
            </div>
          {/if}
          <div class="font-display leading-none {isDelta ? 'text-accent-400' : 'text-ink-50'} text-3xl sm:text-4xl">
            {c.num}
          </div>
          <div class="mt-3 font-mono text-[10px] uppercase tracking-cad text-ink-200">{c.unit}</div>
          <div class="mt-2 text-xs text-ink-200 leading-snug max-w-[26ch]">{c.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
