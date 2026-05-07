<script lang="ts">
  // Hero centerpiece: looped, muted CAD render of the actual NEX all-rotary
  // compressor (transcoded crop of video/engine-best.mp4). Surrounded by the
  // four CAD-style dimensional callouts inherited from the previous SVG
  // schematic to preserve the engineering-document aesthetic.
  //
  // prefers-reduced-motion: pauses the video on the poster frame.
  let videoEl = $state<HTMLVideoElement | null>(null);

  $effect(() => {
    if (!videoEl) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (!videoEl) return;
      if (mq.matches) {
        videoEl.pause();
        videoEl.currentTime = 0;
      } else {
        videoEl.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  });
</script>

<div class="rotor-wrap">
  <div class="video-frame">
    <video
      bind:this={videoEl}
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/engine-loop-poster.jpg"
      aria-hidden="true"
    >
      <source src="/engine-loop.mp4" type="video/mp4" />
      <source src="/engine-loop.webm" type="video/webm" />
    </video>
  </div>

  <!-- dimensional callouts (CAD-style leaders) — same set used previously around the SVG -->
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

  .video-frame {
    position: absolute;
    inset: 12% 12% 12% 12%;
    border: 1px solid #1d2330;
    background: radial-gradient(circle at 50% 50%, #1d2330 0%, #0a0d12 100%);
    overflow: hidden;
  }
  .video-frame video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* CAD callouts — same set used around the PhaseCycleRing for visual consistency */
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
