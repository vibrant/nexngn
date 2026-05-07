<script lang="ts">
  import { t } from '$lib/i18n/store';
</script>

<footer class="border-t border-ink-800 bg-ink-950">
  <div class="mx-auto max-w-page px-6 py-10">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div class="flex items-center gap-3">
        <span class="font-mono text-[11px] uppercase tracking-cad text-accent-400">NEX</span>
        <span class="font-display text-lg text-ink-100">Engineering</span>
      </div>
      <div class="font-mono text-[10px] uppercase tracking-cad text-ink-300">{$t.footer.rights}</div>
    </div>
    <div class="mt-6 max-w-prose-wide text-xs leading-relaxed text-ink-300">
      {$t.footer.legal}
    </div>
  </div>
</footer>
