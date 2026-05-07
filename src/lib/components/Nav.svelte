<script lang="ts">
  import { t } from '$lib/i18n/store';
  import LangToggle from './LangToggle.svelte';
  import Logo from './Logo.svelte';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  function onScroll() {
    scrolled = window.scrollY > 32;
  }

  $effect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() {
    mobileOpen = false;
  }
</script>

<header
  class="fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300"
  class:border-ink-800={scrolled}
  class:border-transparent={!scrolled}
  class:bg-ink-950={scrolled}
  class:backdrop-blur-md={scrolled}
>
  <div class="mx-auto flex h-14 max-w-page items-center justify-between px-6">
    <a href="#top" onclick={close} class="flex items-center gap-2 font-display text-xl text-ink-50 leading-none">
      <Logo size={22} class="text-accent-400" />
      <span>NEX</span>
      <span class="hidden sm:inline">Engineering</span>
    </a>

    <nav class="hidden items-center gap-1 lg:flex">
      {#each $t.nav.sections as s}
        <a
          href={`#${s.id}`}
          class="px-3 py-2 font-mono text-[11px] uppercase tracking-cad text-ink-300 transition-colors hover:text-accent-300"
        >{s.label}</a>
      {/each}
    </nav>

    <div class="flex items-center gap-4">
      <LangToggle />
      <a
        href={$t.contact.vdrHref}
        target="_blank"
        rel="noopener noreferrer"
        class="hidden sm:inline-flex btn-secondary !py-2 !px-3 text-[11px]"
      >
        {$t.nav.cta}
        <span aria-hidden="true">→</span>
      </a>
      <button
        type="button"
        class="lg:hidden font-mono text-[11px] uppercase tracking-cad text-ink-200 hover:text-accent-300"
        aria-expanded={mobileOpen}
        onclick={() => (mobileOpen = !mobileOpen)}
      >{mobileOpen ? 'Close' : 'Menu'}</button>
    </div>
  </div>

  {#if mobileOpen}
    <div class="lg:hidden border-t border-ink-800 bg-ink-950">
      <nav class="mx-auto flex max-w-page flex-col gap-1 px-6 py-4">
        {#each $t.nav.sections as s}
          <a
            href={`#${s.id}`}
            onclick={close}
            class="px-2 py-2 font-mono text-xs uppercase tracking-cad text-ink-200 hover:text-accent-300"
          >{s.label}</a>
        {/each}
        <a
          href={$t.contact.vdrHref}
          target="_blank"
          rel="noopener noreferrer"
          onclick={close}
          class="mt-2 inline-flex w-fit btn-primary !py-2 !px-3 text-[11px]"
        >
          {$t.nav.cta} →
        </a>
      </nav>
    </div>
  {/if}
</header>
