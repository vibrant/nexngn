<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="markets" class="frame bg-ink-900/40 grid-bg">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.markets.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">
          {$t.markets.title}
        </h2>
        <div class="rule-accent mt-8"></div>
      </div>
      <div class="md:col-span-7">
        <p class="text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.markets.body}</p>
      </div>
    </div>

    <div class="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
      {#each $t.markets.framings as f, i}
        <article class="border border-ink-800 bg-ink-950 p-6 sm:p-7 md:p-8">
          <div class="font-mono text-[11px] uppercase tracking-cad {i === 0 ? 'text-accent-400' : 'text-ink-200'}">
            {f.tag}
          </div>
          <h3 class="mt-4 font-display text-2xl text-ink-50 leading-tight md:text-3xl">{f.h}</h3>
          <div class="rule mt-5"></div>
          <p class="mt-5 text-sm leading-relaxed text-ink-100">{f.p}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
