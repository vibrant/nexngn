<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { initLang, t } from '$lib/i18n/store';
  import Nav from '$lib/components/Nav.svelte';

  let { children } = $props();

  onMount(() => {
    initLang();
  });
</script>

<svelte:head>
  <title>{$t.meta.title}</title>
  <meta name="description" content={$t.meta.desc} />
</svelte:head>

<div id="top" class="min-h-screen bg-ink-950">
  <Nav />
  <main class="pt-14">
    {@render children()}
  </main>
</div>
