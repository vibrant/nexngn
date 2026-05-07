<script lang="ts">
  // Schematic of the all-rotary spherical chamber:
  //   - Outer circle = spherical chamber boundary, edge-on view
  //   - Two rotor "blades" (orthogonal) co-rotating, partitioning the chamber into 4 sub-chambers
  //   - Sub-chamber regions cyclically pulse opacity to represent the compression cycle
  //   - Dimensional callouts in monospace mimic CAD annotations
  //
  // No JS animation; pure CSS keyframes (defined in app.css) so it's cheap and respects
  // prefers-reduced-motion.
  let { compact = false } = $props<{ compact?: boolean }>();
</script>

<div class="rotor-wrap" class:compact>
  <svg
    viewBox="-200 -200 400 400"
    class="rotor-svg"
    role="img"
    aria-label="Schematic of NEX rotary architecture: spherical chamber partitioned into four sub-chambers by two co-rotating rotors"
  >
    <!-- gridded backdrop ticks -->
    <g class="ticks" stroke="#1d2330" stroke-width="0.5">
      <line x1="-180" y1="0" x2="180" y2="0" />
      <line x1="0" y1="-180" x2="0" y2="180" />
      <circle cx="0" cy="0" r="40"  fill="none" />
      <circle cx="0" cy="0" r="80"  fill="none" />
      <circle cx="0" cy="0" r="120" fill="none" />
    </g>

    <!-- spherical chamber boundary -->
    <circle
      cx="0" cy="0" r="160"
      fill="none"
      stroke="#5b657c"
      stroke-width="1.5"
    />
    <circle
      cx="0" cy="0" r="160"
      fill="url(#chamberGrad)"
      opacity="0.35"
    />

    <!-- four sub-chamber wedges (pulse to show cycle) -->
    <g class="chambers">
      <path class="chamber-region region-1" d="M 0 0 L 160 0 A 160 160 0 0 1 0 160 Z" fill="#d97706" opacity="0.18" />
      <path class="chamber-region region-2" d="M 0 0 L 0 160 A 160 160 0 0 1 -160 0 Z" fill="#f59e0b" opacity="0.18" />
      <path class="chamber-region region-3" d="M 0 0 L -160 0 A 160 160 0 0 1 0 -160 Z" fill="#d97706" opacity="0.18" />
      <path class="chamber-region region-4" d="M 0 0 L 0 -160 A 160 160 0 0 1 160 0 Z" fill="#f59e0b" opacity="0.18" />
    </g>

    <!-- rotor A: lobed body across the X axis -->
    <g class="rotor rotor-blade-a">
      <path
        d="M -150 0
           C -120 -55, -55 -55, 0 -8
           C 55 -55, 120 -55, 150 0
           C 120 55, 55 55, 0 8
           C -55 55, -120 55, -150 0 Z"
        fill="#0f1319"
        stroke="#dde1ea"
        stroke-width="1.4"
      />
      <circle cx="0" cy="0" r="8" fill="#dde1ea" />
      <line x1="-160" y1="0" x2="160" y2="0" stroke="#5b657c" stroke-width="0.5" stroke-dasharray="2 3" />
    </g>

    <!-- rotor B: identical but offset 90deg, slightly thinner -->
    <g class="rotor rotor-blade-b">
      <path
        d="M 0 -150
           C 45 -120, 45 -55, 8 0
           C 45 55, 45 120, 0 150
           C -45 120, -45 55, -8 0
           C -45 -55, -45 -120, 0 -150 Z"
        fill="#0a0d12"
        stroke="#f59e0b"
        stroke-width="1.4"
        opacity="0.95"
      />
      <circle cx="0" cy="0" r="5" fill="#f59e0b" />
    </g>

    <!-- center pivot -->
    <circle cx="0" cy="0" r="3" fill="#dde1ea" />

    <defs>
      <radialGradient id="chamberGrad" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%"  stop-color="#1d2330" />
        <stop offset="100%" stop-color="#0a0d12" />
      </radialGradient>
    </defs>
  </svg>

  <!-- dimensional callouts (CAD-style leaders) -->
  {#if !compact}
    <div class="callout-d top">
      <div class="text">
        <div class="num">⌀ 146.25</div>
        <div class="unit">mm · spherical chamber</div>
      </div>
      <div class="line-v"></div>
    </div>
    <div class="callout-d right">
      <div class="line-h"></div>
      <div class="text">
        <div class="num">4</div>
        <div class="unit">sub-chambers / rev</div>
      </div>
    </div>
    <div class="callout-d bottom">
      <div class="line-v"></div>
      <div class="text">
        <div class="num">1,400</div>
        <div class="unit">RPM · 3.5 kW drive</div>
      </div>
    </div>
    <div class="callout-d left">
      <div class="text">
        <div class="num">550</div>
        <div class="unit">L/min @ 8 bar</div>
      </div>
      <div class="line-h"></div>
    </div>
  {/if}
</div>

<style>
  .rotor-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 560px;
    margin: 0 auto;
  }
  .rotor-wrap.compact {
    max-width: 340px;
  }
  .rotor-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .rotor {
    transform-origin: 0 0;
    transform-box: fill-box;
  }
  .rotor-blade-a {
    animation: rotor-spin 14s linear infinite;
    transform-origin: center;
  }
  .rotor-blade-b {
    animation: rotor-spin 14s linear infinite;
    transform-origin: center;
  }
  .chamber-region {
    transform-origin: center;
  }
  .region-1 { animation: chamber-pulse 14s ease-in-out infinite; }
  .region-2 { animation: chamber-pulse 14s ease-in-out infinite -3.5s; }
  .region-3 { animation: chamber-pulse 14s ease-in-out infinite -7s; }
  .region-4 { animation: chamber-pulse 14s ease-in-out infinite -10.5s; }

  /* CAD callouts */
  .callout-d {
    position: absolute;
    display: flex;
    align-items: center;
    color: #b9c0cf;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    pointer-events: none;
  }
  .callout-d .text { white-space: nowrap; }
  .callout-d .num {
    font-size: 0.95rem;
    color: #f1f3f8;
    line-height: 1;
  }
  .callout-d .unit {
    font-size: 0.6rem;
    color: #8a93a6;
    margin-top: 2px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
  }

  .line-h { width: 36px; height: 1px; background: #5b657c; }
  .line-v { width: 1px; height: 36px; background: #5b657c; }

  .callout-d.top    { top: 2%;    left: 50%; transform: translateX(-50%); flex-direction: column; gap: 6px; align-items: center; text-align: center; }
  .callout-d.bottom { bottom: 2%; left: 50%; transform: translateX(-50%); flex-direction: column-reverse; gap: 6px; align-items: center; text-align: center; }
  .callout-d.left   { left: 0;    top: 50%;  transform: translateY(-50%); flex-direction: row; gap: 8px; }
  .callout-d.left .text  { text-align: right; }
  .callout-d.right  { right: 0;   top: 50%;  transform: translateY(-50%); flex-direction: row; gap: 8px; }

  @media (max-width: 640px) {
    .callout-d .num  { font-size: 0.78rem; }
    .callout-d .unit { font-size: 0.55rem; }
    .line-h          { width: 22px; }
    .line-v          { height: 22px; }
  }
</style>
