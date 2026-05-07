<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<section id="products" class="frame">
  <div class="mx-auto max-w-page px-6 py-20 md:py-28">
    <div class="grid gap-10 md:grid-cols-12 md:gap-12">
      <div class="md:col-span-5">
        <div class="eyebrow">{$t.products.eyebrow}</div>
        <h2 class="mt-4 font-display text-3xl text-ink-50 leading-[1.05] sm:text-4xl md:text-5xl">
          {$t.products.title}
        </h2>
        <div class="rule-accent mt-8"></div>
      </div>
      <div class="md:col-span-7">
        <p class="text-base leading-relaxed text-ink-100 max-w-prose sm:text-lg">{$t.products.body}</p>
      </div>
    </div>

    <div class="mt-12 grid gap-px overflow-hidden border border-ink-800 bg-ink-800 md:mt-16 md:grid-cols-2">
      {#each $t.products.products as prod, i}
        <article class="bg-ink-950 p-6 sm:p-8 md:p-10">
          <div class="flex items-baseline gap-3">
            <span class="font-mono text-xs uppercase tracking-cad {i === 0 ? 'text-accent-400' : 'text-ink-200'}">
              {prod.tag}
            </span>
            <span class="text-ink-500">·</span>
            <span class="font-mono text-xs uppercase tracking-cad text-ink-300">0{i + 1}</span>
          </div>

          <h3 class="mt-4 font-display text-2xl text-ink-50 leading-tight sm:text-3xl md:text-4xl">{prod.name}</h3>
          <div class="mt-2 font-mono text-xs uppercase tracking-cad text-ink-300">{prod.trl}</div>

          <ul class="mt-7 space-y-3">
            {#each prod.bullets as b}
              <li class="grid grid-cols-[auto_1fr] gap-3 text-sm text-ink-100 leading-relaxed">
                <span class="font-mono text-accent-500 text-xs mt-1.5">——</span>
                <span>{b}</span>
              </li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </div>
</section>
