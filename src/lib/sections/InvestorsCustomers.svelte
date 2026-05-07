<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section class="frame bg-ink-900/40 grid-bg">
  <div class="mx-auto max-w-page px-6 py-20 md:py-24">
    <div class="eyebrow text-center">{$t.cta.eyebrow}</div>

    <div class="mt-10 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 md:grid-cols-2">
      <article class="bg-ink-950 p-7 sm:p-8 md:p-12">
        <h3 class="font-display text-2xl text-ink-50 sm:text-3xl md:text-4xl">{$t.cta.titleLeft}</h3>
        <div class="rule-accent mt-5"></div>
        <p class="mt-6 leading-relaxed text-ink-100">{$t.cta.bodyLeft}</p>
        <a class="btn-primary mt-8" href={$t.contact.vdrHref} target="_blank" rel="noopener noreferrer">
          {$t.cta.btnLeft} <span aria-hidden="true">→</span>
        </a>
      </article>

      <article class="bg-ink-950 p-7 sm:p-8 md:p-12">
        <h3 class="font-display text-2xl text-ink-50 sm:text-3xl md:text-4xl">{$t.cta.titleRight}</h3>
        <div class="rule-accent mt-5"></div>
        <p class="mt-6 leading-relaxed text-ink-100">{$t.cta.bodyRight}</p>
        <a class="btn-secondary mt-8" href="#contact">
          {$t.cta.btnRight} <span aria-hidden="true">→</span>
        </a>
      </article>
    </div>
  </div>
</section>
