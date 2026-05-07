<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="contact" class="frame">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.contact.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">{$t.contact.name}</h2>
        <div class="mt-2 font-mono text-xs uppercase tracking-cad text-accent-400">{$t.contact.role}</div>
        <div class="rule-accent mt-8"></div>
      </div>

      <div class="md:col-span-7 space-y-4">
        <a
          href={`mailto:${$t.contact.email}`}
          class="flex flex-col gap-2 border-b border-ink-800 pb-4 transition-colors hover:text-accent-300 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <span class="font-mono text-[11px] uppercase tracking-cad text-ink-300">Email</span>
          <span class="font-display text-2xl text-ink-50 sm:text-right md:text-3xl break-all">{$t.contact.email}</span>
        </a>
        <a
          href={$t.contact.vdrHref}
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col gap-2 border-b border-ink-800 pb-4 transition-colors hover:text-accent-300 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
        >
          <span class="font-mono text-[11px] uppercase tracking-cad text-ink-300">VDR</span>
          <span class="font-display text-xl text-ink-100 sm:text-right md:text-2xl">{$t.contact.vdrLabel} →</span>
        </a>
      </div>
    </div>
  </div>
</section>
