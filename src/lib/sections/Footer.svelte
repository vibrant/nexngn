<script lang="ts">
  import { t } from '$lib/i18n/store';
  import Logo from '$lib/components/Logo.svelte';
</script>

<footer class="border-t border-ink-800 bg-ink-950">
  <div class="mx-auto max-w-page px-6 py-10">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div class="flex items-center gap-3">
        <Logo size={20} class="text-accent-400" />
        <span class="font-display text-lg text-ink-100">NEX Engineering</span>
      </div>
      <div class="font-mono text-[10px] uppercase tracking-cad text-ink-300">{$t.footer.rights}</div>
    </div>
  </div>
</footer>
