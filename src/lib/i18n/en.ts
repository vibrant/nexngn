// English copy — single source of truth for the public site.
// Pulled from vdr/src/routes/**/+page.svelte and funding/shared/00-narrative-framings.md.
// Keep wording aligned with the VDR; investors will cross-link.

export const en = {
  meta: {
    title: 'NEX Engineering — A new rotary architecture for compressed air',
    desc: 'Working all-rotary compressor at TRL 5/6 with verified 30% electricity savings. License-ready into the world\'s largest compressor manufacturers. Hydrogen-ready engine as second product line.'
  },

  nav: {
    sections: [
      { id: 'how',       label: 'How it works' },
      { id: 'markets',   label: 'Markets' },
      { id: 'evidence',  label: 'Evidence' },
      { id: 'team',      label: 'Team' },
      { id: 'roadmap',   label: 'Roadmap' },
      { id: 'contact',   label: 'Contact' }
    ],
    cta: 'Investor data room'
  },

  hero: {
    headlineLead: 'A new rotary architecture',
    headlineMid: 'for compressed air',
    headlineTail: '— and the engines that follow.',
    sub:
      'A working all-rotary compressor delivering a verified 30% electricity reduction versus the rotary-screw industry standard, on a load that consumes roughly 10% of global electricity. The same architecture, with combustion staging, runs as a multi-fuel hydrogen-ready engine — at 104 kW per litre and 4.71 HP per kilogram.',
    ctaPrimary: 'Open the investor data room',
    ctaSecondary: 'Talk to the team',
    callouts: [
      { num: 'TRL 5/6', unit: 'Compressor readiness',  label: 'Working prototype on the bench in relevant operating regime' },
      { num: '30%',     unit: 'electricity vs. screw baseline', label: 'Lab-verified at matched CFM and pressure — savings measured at the motor terminals', delta: 'less' },
      { num: '4',       unit: 'Sub-chambers per revolution',     label: 'Spherical chamber partitioned by two co-rotating rotors' },
      { num: '6',       unit: 'Patent families · post-PCT',      label: 'Post-PCT examination · national-phase entry in progress · core, valveless timing, working-volume, multi-fuel, compressor mode, sealing' }
    ]
  },

  verified: {
    eyebrow: 'Verified result',
    title: 'A measured number, not a simulation.',
    body:
      'On a working compressor prototype — 550 L/min, 8 bar discharge, 3.5 kW drive at 1,400 RPM — electricity input was metered at the motor terminals against a rotary-screw baseline of matched CFM and pressure. Steady-state, after thermal stabilisation. Result: a 30% reduction in electricity consumption.',
    body2:
      'For a 100 HP industrial compressor running at typical industrial duty, that is roughly $14,400 per year saved on the meter — payback in months, not years. The third-party ISO 1217 retest at TÜV SÜD / DEKRA / Bureau Veritas / Intertek / SGS is Gate G0 of the seed plan: the single highest-leverage credibility unlock.',
    statBoxes: [
      { num: '$14.4K', label: 'Saved per 100 HP unit / yr', sub: '~$48K typical annual electricity at 100 HP industrial duty' },
      { num: '$144K+', label: '10-year savings', sub: 'Per unit at industrial duty cycles' },
      { num: '<12 mo', label: 'Customer payback', sub: 'On premium price vs. rotary-screw incumbent' },
      { num: '~10%', label: 'Of global electricity', sub: 'Industrial compressed air; 70–80% of compressor lifetime cost is the meter' }
    ]
  },

  how: {
    eyebrow: 'How it works',
    title: 'Spherical chamber, two co-rotating rotors, four working sub-chambers per revolution.',
    pitch:
      'Every moving element rotates. There are no reciprocating pistons. No apex seals. No crankshaft. No valve train. Two rotors share a spherical working volume and partition it into four sub-chambers; each chamber completes a full thermodynamic cycle once per revolution. Phase timing is geometric — there is nothing to wear out, nothing to belt, nothing to retime.',
    points: [
      {
        h: 'Valveless timing',
        p: 'Intake, compression, expansion, exhaust — controlled by rotor-stator geometry alone. Eliminates valves, camshafts, timing belts, and the parasitic-loss budget that goes with them. (Patent family: P.450073)'
      },
      {
        h: '4× working volume per revolution',
        p: 'Four sub-chambers per rev versus a single piston of equivalent displacement. Drives 104 kW/L power density and 4.71 HP/kg power-to-weight in the engine variant. (Patent family: P.451815)'
      },
      {
        h: 'Sealing decoupled from the load path',
        p: 'Force is transmitted through bearing-supported axles, not the seal interface. Underpins ≥30% lower friction and ≥20% longer service intervals — and oil-free operation for clean-room, food-grade, and pharma compressed air. (Patent family: P.451818)'
      },
      {
        h: 'Multi-fuel by design',
        p: 'Same combustion-chamber profile runs petrol, diesel, or hydrogen. No head swap, no piston redesign. The civilian range-extender and the JP-8-tolerant defense UAV share hardware. (Patent family: P.451816)'
      }
    ],
    notWankel:
      'Not a Wankel. The apex-seal class of failure that has constrained Wankel architectures for fifty years is structurally absent — NEX seals are decoupled from the primary working forces.'
  },

  products: {
    eyebrow: 'Two product lines',
    title: 'Compressor today funds engine tomorrow.',
    body:
      'One platform, two product lines — and they ship in order. The compressor is the immediate revenue line and the licensing wedge into incumbent OEMs. The engine is the Series-B optionality, drafted on simulation that has been benchmarked against the compressor prototype at <5% error.',
    products: [
      {
        tag: 'Lead product',
        name: 'Rotary compressor',
        trl: 'TRL 5/6 — working prototype on the bench',
        bullets: [
          '550 L/min theoretical capacity, 8 bar discharge, 3.5 kW drive at 1,400 RPM',
          '30% electricity savings vs. rotary-screw baseline (lab-verified, ISO 1217 retest at G0)',
          '~60% lighter; ~100× lower acoustic power vs piston (~5–6× quieter to a human ear); oil-free or minimal-oil operation',
          'License-ready into Atlas Copco, Ingersoll Rand, Kaeser, Howden, Doosan, MHI'
        ]
      },
      {
        tag: 'Series-B optionality',
        name: 'Multi-fuel rotary engine',
        trl: 'TRL 3/4 — design complete, prototype 4–6 weeks once Series A funds the build',
        bullets: [
          '104 kW/L power density · 4.71 HP/kg power-to-weight',
          'Petrol, diesel, hydrogen on the same hardware — no head swap',
          '~5–6× quieter perceptually vs piston (~100× lower radiated acoustic power); 10,000+ RPM headroom',
          'CFD + thermodynamic-cycle model benchmarked against compressor measurements at <5% error'
        ]
      }
    ]
  },

  markets: {
    eyebrow: 'Where it lands',
    title: 'Industrial primary. Climate as the consequence. Defense as optionality.',
    body:
      'The investment thesis is industrial efficiency that decarbonises by displacing on price-and-performance — the customer adopts on ROI, the climate impact is the by-product. Industrial decarbonisation capital has hardened around exactly this pattern in the last five years: Rondo ($107–162M, Aramco/Microsoft), Aeroseal ($119M, BEV/Aramco/Climate Investment), Antora ($230M, Decarbonization Partners), Mainspring ($800M+). NEX fits the same playbook.',
    framings: [
      {
        tag: 'Primary',
        h: 'Industrial · $45B',
        p: 'Industrial compressors. License-ready into Atlas Copco (~25%), Ingersoll Rand (~15%), Kaeser, Howden, Sullair, Hitachi. 5–8% royalty math on global compressor unit volume; ~95% gross margin on the licensing book.'
      },
      {
        tag: 'Secondary',
        h: 'Climate · Gt-scale',
        p: 'Compressed air ≈10% of global electricity (≈2,900 TWh/yr). At 8% global market share by 2040, ~32 Mt CO₂/yr avoided; cumulative 2025–2050 base case ≈550 Mt. Defensible unit economics — adopters do not need a subsidy.'
      },
      {
        tag: 'Optionality',
        h: 'Defense · multi-fuel',
        p: 'Hydrogen-ready engine variant: UAV propulsion, armoured-vehicle APUs, naval patrol acoustic profile, expeditionary field power. Civilian compressor revenue de-risks the engine timeline. Series-B story.'
      }
    ]
  },

  evidence: {
    eyebrow: 'Evidence',
    title: '€1.1M deployed. Six patent families post-PCT. A working machine on the bench.',
    body:
      'Twenty years of Prof. Henryk Sobczuk\'s simulation and iteration, plus founder cash for a precision build, instrumented test rig, and six patent families — Polish priority filings, all post-PCT examination, national-phase entry in progress. The implied burn multiple is well below hardware-deep-tech norms — a deliberate single-instrumented-prototype choice rather than a multi-iteration build.',
    items: [
      { k: '€1.1M+', v: 'Founder investment to date — un-billed inventor R&D plus prototype build' },
      { k: '20 yrs', v: 'Design, simulation, iteration on the rotary architecture by Prof. Henryk Sobczuk' },
      { k: '6',     v: 'Patent families · post-PCT examination, national-phase entry in progress · core, valveless timing, working-volume, multi-fuel, compressor mode, sealing' },
      { k: 'TRL 5/6', v: 'Working compressor prototype validated in relevant operating regime' },
      { k: '<5%',  v: 'Engine simulation error vs. compressor measurements — basis for engine-mode predictions' },
      { k: '8 bar', v: 'Discharge pressure on the prototype at 550 L/min, 1,400 RPM, 3.5 kW drive' }
    ],
    measured: {
      h: 'Measured vs. modelled',
      rows: [
        { claim: '30% electricity savings (vs. rotary-screw, matched CFM/pressure)', state: 'Measured' },
        { claim: '550 L/min @ 8 bar, 3.5 kW, 1,400 RPM', state: 'Measured' },
        { claim: '≥6 dB acoustic reduction', state: 'Bench in progress' },
        { claim: '≥60% mass reduction', state: 'As built · validated' },
        { claim: '≥30% friction loss reduction; ≥20% service-life extension', state: 'Modelled · bench at A' },
        { claim: '104 kW/L power density · 4.71 HP/kg (engine)', state: 'Simulation · validated at A' },
        { claim: 'Multi-fuel petrol / diesel / H₂', state: 'Architectural · qualified at A' }
      ]
    }
  },

  team: {
    eyebrow: 'Team',
    title: 'Three founders, structurally aligned against the three ways deep-tech hardware fails.',
    body:
      'Science with the inventor. Commercialisation with the operator. Capital strategy with the investor. Henryk and Wojciech are family — the cost of mis-aligned co-founder incentives, which kills many pairs at this stage, is materially lower across the science / commercialisation seam.',
    founders: [
      {
        monogram: 'HS',
        name: 'Prof. Henryk Sobczuk',
        role: 'Inventor & CTO',
        bio:
          'PhD Physics, Professor of Technical Sciences at the Lublin University of Technology. 200+ scientific publications. 10+ prior patents in addition to the six NEX filings. Awarded the Golden Cross of Merit by the President of the Republic of Poland (2010) for contributions to science and engineering. Co-creator of high-frequency measuring equipment and Time Domain Reflectometry devices used in soil physics and industrial sensing — the instrumentation work that made the prototype\'s electricity-savings number defensible. Twenty years of design, simulation, and iteration on the NEX rotary machine.',
        owns: 'Owns the science, the architecture, the simulation, the patent estate, and the engineering programme.'
      },
      {
        monogram: 'WS',
        name: 'Wojciech Sobczuk',
        role: 'Co-founder & CEO',
        bio:
          'Serial deep-tech entrepreneur, twenty-plus years across Europe, Israel, and the United States. Built an encrypted messenger for the Israeli military. Launched a 2-million-user social network with Intel Capital investment (2004). Built billing infrastructure for Google-backed Egnyte. Co-founder & CTO of VentureDevs (Silicon Valley product engineering). Forbes Technology Council member. Mentor at MassChallenge, ReaktorX, and the MIT Enterprise Forum (MITEF). Strategic advisor on digital security to government and private-sector clients.',
        owns: 'Owns commercialisation, fund-raising, strategic partnerships, manufacturing strategy, and go-to-market.'
      },
      {
        monogram: 'PG',
        name: 'Patrick Gajda',
        role: 'Investor & Strategic Advisor',
        bio:
          'Ten-plus years restructuring, modernising, and scaling companies across multiple sectors. Member of the European Business Angel Network (EBAN). Founder of Incidium.Space and SC Space & Data Inc. (lunar datacenter infrastructure). Active investor across Space, Fintech, IT, and blockchain. Co-invested with the founding team — capital alongside advisory. Cross-industry background that maps directly onto the dual-use surface of the NEX platform.',
        owns: 'Owns investor relations, capital structure, fund-raising strategy, and long-horizon value creation.'
      }
    ]
  },

  roadmap: {
    eyebrow: 'Roadmap',
    title: 'Eight gates from working prototype to operating cash-flow break-even.',
    body:
      '€3.5M seed → €22M Series A → €55M Series B. Cumulative ~€80M to operating cash-flow break-even at ~450 units/yr blended (own-manufacturing + OEM-channel). Benchmarked against Aeroseal ($119M / 13-yr arc) and Antora ($230M); below Mainspring ($800M+) and Sunfire ($487M+).',
    gates: [
      { id: 'G0', label: 'Third-party ISO 1217 retest', when: 'Months 3–5', why: 'The single highest-leverage credibility unlock — confirms the 30% on an accredited bench.' },
      { id: 'G1', label: 'First Article Inspection · commercial Rev A', when: 'Months 6–10', why: 'Design freeze; ±5% nameplate; CMM scans archived.' },
      { id: 'G2', label: 'CE technical file', when: 'Months 8–14', why: 'Machinery Directive 2006/42/EC + dual-compliant with Regulation 2023/1230.' },
      { id: 'G4', label: 'First paid pilot at customer site', when: 'Months 18–28', why: 'PO at full ASP; 3+ months under customer\'s own measurement.' },
      { id: 'G5', label: 'Three reference customers · 30% replicated', when: 'Months 28–40', why: 'Three end-use segments, signed case studies, named-reference rights.' },
      { id: 'G7', label: 'First OEM-as-CM or licensing deal', when: 'Months 42–60', why: 'Atlas Copco / Ingersoll Rand / Kaeser / Howden — non-exclusive by segment.' },
      { id: 'G8', label: 'Serial production · 350–1,050 units/yr blended', when: 'Months 54–78', why: 'Operating cash-flow break-even at ~450 units/yr; ≥30% blended gross margin.' }
    ]
  },

  cta: {
    eyebrow: 'Two doors',
    titleLeft: 'For investors',
    bodyLeft:
      'The investor data room contains the full technology brief, six patent families (post-PCT, national-phase in progress), capital path with use-of-funds at each gate, five-year P&L, comparable-deal benchmarking, and a 4-minute inventor pitch. Password-gated.',
    btnLeft: 'Open the data room',
    titleRight: 'For OEM corp-dev & customers',
    bodyRight:
      'Atlas Copco, Ingersoll Rand, Kaeser, Howden, Sullair, MHI, Doosan, Hitachi — and industrial-air buyers in bottling, automotive paint, food processing, electronics fab, hospital medical air. Direct conversation, NDA on request.',
    btnRight: 'Talk to the team'
  },

  contact: {
    eyebrow: 'Contact',
    name: 'Wojciech Sobczuk',
    role: 'Co-founder & CEO',
    email: 'wojtek@nexngn.com',
    vdrLabel: 'Investor data room',
    vdrHref: 'https://vdr.nexngn.com'
  },

  footer: {
    rights: '© 2026 NEX Engineering. All rights reserved.'
  }
};

export type Copy = typeof en;
export default en;
