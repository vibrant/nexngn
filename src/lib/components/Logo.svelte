<script lang="ts">
  let { size = 20, class: className = '' }: { size?: number; class?: string } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width={size}
  height={size}
  class={className}
  aria-hidden="true"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.61 10.79 L19.27 10.79 L53.21 44.73 L53.21 50.39 L50.39 53.21 L44.73 53.21 L10.79 19.27 L10.79 13.61 Z M10.79 50.39 L10.79 44.73 L44.73 10.79 L50.39 10.79 L53.21 13.61 L53.21 19.27 L19.27 53.21 L13.61 53.21 Z M35.5 32 A3.5 3.5 0 1 0 28.5 32 A3.5 3.5 0 1 0 35.5 32 Z"
  />
</svg>
