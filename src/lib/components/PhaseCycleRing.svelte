<script lang="ts">
  // Abstract phase-cycle ring. No central hub, no radial blades, no rotating
  // elements — only colour cycling on four static arc segments, so nothing on
  // screen rotates and the visual cannot be misread as a propeller. The four
  // segments share a 14s phase-cycle keyframe with -3.5s offsets, so the
  // active colour walks once around the ring per cycle.
</script>

<div class="rotor-wrap">
  <svg
    viewBox="-200 -200 400 400"
    class="ring-svg"
    role="img"
    aria-label="Abstract four-phase cycle indicator: four static arc segments on a ring whose fill colour cycles in sequence."
  >
    <!-- faint reference grid (engineering-document feel, no motion) -->
    <g class="ticks" stroke="#1d2330" stroke-width="0.5" fill="none" opacity="0.6">
      <circle cx="0" cy="0" r="48" />
      <circle cx="0" cy="0" r="96" />
      <line x1="-148" y1="0" x2="148" y2="0" stroke-dasharray="2 4" />
      <line x1="0" y1="-148" x2="0" y2="148" stroke-dasharray="2 4" />
    </g>

    <!-- ring track (dim, full 360°) -->
    <circle cx="0" cy="0" r="148" fill="none" stroke="#1d2330" stroke-width="14" opacity="0.55" />
    <circle cx="0" cy="0" r="148" fill="none" stroke="#5b657c" stroke-width="0.9" opacity="0.65" />

    <!-- four arc segments — fill cycles via @keyframes phase-cycle in app.css.
         Geometry: 84°-wide arcs centered on the diagonals (NE/SE/SW/NW), 6° gaps
         at the cardinals so the dimensional callouts have visual breathing room. -->
    <g class="phase-arcs" fill="none" stroke-width="14" stroke-linecap="butt">
      <path class="phase-arc arc-ne"
            d="M 147.80 7.75 A 148 148 0 0 1 7.75 147.80" />
      <path class="phase-arc arc-se"
            d="M -7.75 147.80 A 148 148 0 0 1 -147.80 7.75" />
      <path class="phase-arc arc-sw"
            d="M -147.80 -7.75 A 148 148 0 0 1 -7.75 -147.80" />
      <path class="phase-arc arc-nw"
            d="M 7.75 -147.80 A 148 148 0 0 1 147.80 -7.75" />
    </g>

    <!-- outer rim line (defines the boundary) -->
    <circle cx="0" cy="0" r="160" fill="none" stroke="#5b657c" stroke-width="1.4" opacity="0.7" />
  </svg>

  <!-- dimensional callouts (CAD-style leaders) — kept verbatim from the previous component -->
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
</div>

<style>
  .rotor-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 560px;
    margin: 0 auto;
  }
  .ring-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Phase delays — colour walks once around the ring per 14s cycle.
     Each successive segment is offset by 25% of the cycle. */
  .arc-ne { animation-delay: 0s; }
  .arc-se { animation-delay: -3.5s; }
  .arc-sw { animation-delay: -7s; }
  .arc-nw { animation-delay: -10.5s; }

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
