<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="evidence" class="frame">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.evidence.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">
          {$t.evidence.title}
        </h2>
        <div class="rule-accent mt-8"></div>
        <p class="mt-8 text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.evidence.body}</p>
      </div>

      <div class="md:col-span-7">
        <dl class="grid grid-cols-2 gap-px overflow-hidden border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {#each $t.evidence.items as it, i}
            <div class="bg-ink-950 p-5">
              <dt class="font-display text-2xl leading-none {i === 0 ? 'text-accent-400' : 'text-ink-50'} sm:text-3xl">
                {it.k}
              </dt>
              <dd class="mt-2 text-xs text-ink-200 leading-snug">{it.v}</dd>
            </div>
          {/each}
        </dl>

        <div class="mt-12">
          <h3 class="font-mono text-xs uppercase tracking-cad text-accent-400">{$t.evidence.measured.h}</h3>
          <table class="spec-table mt-4">
            <thead>
              <tr>
                <th>Claim</th>
                <th class="text-right">State</th>
              </tr>
            </thead>
            <tbody>
              {#each $t.evidence.measured.rows as r}
                <tr>
                  <td>{r.claim}</td>
                  <td class="text-right num">{r.state}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
