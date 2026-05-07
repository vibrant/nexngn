<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="team" class="frame bg-ink-900/40">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.team.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">{$t.team.title}</h2>
        <div class="rule-accent mt-8"></div>
        <p class="mt-8 text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.team.body}</p>
      </div>

      <div class="md:col-span-7 space-y-12">
        {#each $t.team.founders as f}
          <article class="border-t border-ink-800 pt-8 first:border-t-0 first:pt-0">
            <div class="grid grid-cols-[auto_1fr] gap-5 sm:gap-6 md:gap-8">
              <div class="flex h-14 w-14 items-center justify-center rounded-sm border border-ink-700 bg-ink-950 sm:h-16 sm:w-16">
                <span class="founder-monogram">{f.monogram}</span>
              </div>
              <div class="min-w-0">
                <div class="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <h3 class="font-display text-2xl text-ink-50 md:text-3xl">{f.name}</h3>
                  <span class="font-mono text-[11px] uppercase tracking-cad text-accent-400">{f.role}</span>
                </div>
                <p class="mt-3 text-ink-100 leading-relaxed">{f.bio}</p>
                <p class="mt-3 text-sm italic text-ink-300">{f.owns}</p>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
