<script lang="ts">
  import { lang, setLang, type Lang } from '$lib/i18n/store';

  let open = $state(false);
  let root: HTMLDivElement;

  const labels: Record<Lang, string> = { en: 'EN', pl: 'PL' };
  const longLabels: Record<Lang, string> = { en: 'English', pl: 'Polski' };
  const options: Lang[] = ['en', 'pl'];

  function pick(next: Lang) {
    setLang(next);
    open = false;
  }

  function onDocClick(e: MouseEvent) {
    if (!root) return;
    if (!root.contains(e.target as Node)) open = false;
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') open = false;
  }

  $effect(() => {
    if (typeof window === 'undefined') return;
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  });
</script>

<div class="relative" bind:this={root}>
  <button
    type="button"
    aria-haspopup="listbox"
    aria-expanded={open}
    class="inline-flex items-center gap-1.5 rounded-sm border border-ink-700 bg-ink-900/60 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-cad text-ink-100 transition-colors hover:border-accent-500/60 hover:text-accent-300"
    onclick={() => (open = !open)}
  >
    <span>{labels[$lang]}</span>
    <svg
      width="8" height="6" viewBox="0 0 8 6" fill="none"
      class="transition-transform" class:rotate-180={open}
      aria-hidden="true"
    >
      <path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>

  {#if open}
    <ul
      role="listbox"
      class="absolute right-0 top-[calc(100%+4px)] z-50 min-w-[7rem] overflow-hidden rounded-sm border border-ink-700 bg-ink-950 shadow-lg shadow-black/40"
    >
      {#each options as opt}
        <li>
          <button
            type="button"
            role="option"
            aria-selected={$lang === opt}
            onclick={() => pick(opt)}
            class="flex w-full items-center justify-between gap-3 px-3 py-2 font-mono text-[11px] uppercase tracking-cad transition-colors hover:bg-ink-900 {$lang === opt ? 'text-accent-300' : 'text-ink-200'}"
          >
            <span>{labels[opt]}</span>
            <span class="text-[10px] tracking-normal normal-case text-ink-300">{longLabels[opt]}</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
