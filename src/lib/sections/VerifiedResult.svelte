<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="verified" class="frame">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.verified.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">
          {$t.verified.title}
        </h2>
        <div class="rule-accent mt-8"></div>
      </div>

      <div class="md:col-span-7 prose-nex max-w-prose">
        <p class="text-lg">{$t.verified.body}</p>
        <p>{$t.verified.body2}</p>
      </div>
    </div>

    <!-- Stat boxes — dimensional callouts -->
    <div class="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink-800 bg-ink-800 grid-cols-2 lg:grid-cols-4 md:mt-16">
      {#each $t.verified.statBoxes as s, i}
        <div class="bg-ink-950 p-5 sm:p-6 md:p-8">
          <div class="font-display text-4xl leading-[0.95] {i === 0 ? 'text-accent-400' : 'text-ink-50'} sm:text-5xl md:text-6xl">
            {s.num}
          </div>
          <div class="mt-3 font-mono text-[11px] uppercase tracking-cad text-ink-200">{s.label}</div>
          <div class="mt-2 text-sm leading-snug text-ink-300">{s.sub}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
