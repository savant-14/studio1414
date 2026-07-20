// Solutions page content.
const { LucideIcon, Reveal, SEImg } = window;
const SW = window.SE_WRAP, SEB = window.SE_EYEBROW, SH2 = window.SE_H2;

const SEGMENTS = [
  { icon: 'home', t: 'Residential rooftop', tag: 'Homes & villas', d: 'Rooftop solar sized to your household load and roof geometry, with full government subsidy assistance from consultation to installation.', points: ['Site-modelled 3–12 kW rooftop systems', 'PM Surya Ghar subsidy assistance', 'Net-metering filing handled for you', '30-year module performance warranty'], k: [['12,000+', 'Homes powered'], ['3–5 wk', 'Typical install'], ['₹78,000', 'Subsidy up to']] },
  { icon: 'building-2', t: 'Commercial rooftop', tag: 'Offices, retail & warehouses', d: 'Rooftop solar for commercial buildings — cut your electricity bills and generate clean energy from your own roof.', points: ['Rooftop arrays for any building', 'Free feasibility & savings analysis', 'Net-metering & DISCOM liaison', 'Ongoing performance monitoring'], k: [['1,200+', 'Sites live'], ['~4 yr', 'Typical payback'], ['68%', 'Peak grid cut']] },
  { icon: 'factory', t: 'Industrial rooftop', tag: 'Factories & facilities', d: 'Large rooftop solar engineered for industrial facilities, integrated with your existing electrical infrastructure.', points: ['MW-scale rooftop installations', 'Structural & wind-load engineering', 'Captive consumption optimisation', 'Guaranteed generation reporting'], k: [['340', 'Facilities served'], ['8.4 MW', 'Largest rooftop'], ['99.2%', 'Uptime']] },
  { icon: 'hard-hat', t: 'Solar EPC', tag: 'Engineering, procurement & construction', d: 'End-to-end rooftop solar EPC — from structural design and procurement to installation and commissioning.', points: ['In-house certified EPC crews', 'Tier-1 panels & components only', 'IEC & BIS standard installation', 'Full documentation & handover'], k: [['210 MW+', 'Rooftop built'], ['1,500+', 'Projects delivered'], ['33', 'Gujarat districts']] },
  { icon: 'clipboard-list', t: 'Solar consultation', tag: 'Free site & savings analysis', d: 'A no-cost rooftop assessment and honest savings model before you commit — no pressure, just the real numbers.', points: ['Free on-site rooftop survey', 'Shading & load analysis', 'Payback & savings modelling', 'Subsidy eligibility guidance'], k: [['No-cost', 'Site survey'], ['2 days', 'Proposal turnaround'], ['100%', 'Transparent pricing']] },
  { icon: 'shield-check', t: 'Solar maintenance', tag: 'Operations & maintenance', d: 'Keep your rooftop performing for decades with scheduled cleaning, inspection, and live performance monitoring.', points: ['Scheduled panel cleaning', 'Inverter & wiring inspection', 'Panel-level performance monitoring', 'Rapid fault response'], k: [['99.2%', 'Uptime'], ['+6.1%', 'Above modelled yield'], ['25 yr', 'Support horizon']] },
];

function SolutionsHero() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,44px) clamp(40px,5vw,60px)', overflow: 'hidden', background: 'var(--color-bg-canvas)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh-subtle)', pointerEvents: 'none' }} />
      <div style={{ ...SW, position: 'relative', maxWidth: 800 }}>
        <div style={SEB}>Solutions by segment</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', color: 'var(--color-text-primary)', margin: '14px 0 18px' }}>One engineering standard for every rooftop.</h1>
        <p style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0, maxWidth: 640 }}>From a single home to a large factory rooftop, the same certified team consults, installs, and maintains your rooftop solar — with the same accountability for the kilowatt-hours it produces across Gujarat.</p>
      </div>
    </section>
  );
}

function SolutionSegments() {
  return (
    <section style={{ padding: '0 clamp(20px,4vw,44px) clamp(48px,6vw,72px)', background: 'var(--color-bg-canvas)' }}>
      <div style={{ ...SW, display: 'flex', flexDirection: 'column', gap: 'clamp(20px,3vw,32px)' }}>
        {SEGMENTS.map((s, i) => (
          <Reveal key={s.t} id={s.t.toLowerCase().replace(' ', '-')} style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 1.05fr' : '1.05fr 1fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'center', padding: 'clamp(28px,4vw,44px)', borderRadius: 24, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)' }} className="se-2col">
            <div style={{ order: i % 2 ? 2 : 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LucideIcon name={s.icon} size={22} /></span>
                <span><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>{s.t}</span><span style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{s.tag}</span></span>
              </div>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 22px' }}>{s.d}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: 26 }}>
                {s.points.map((pt) => <div key={pt} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--color-text-primary)', lineHeight: 1.4 }}><LucideIcon name="check" size={17} style={{ marginTop: 1, flexShrink: 0 }} />{pt}</div>)}
              </div>
              <div style={{ display: 'flex', gap: 'clamp(20px,3vw,40px)', paddingTop: 22, borderTop: '1px solid var(--color-border-subtle)' }}>
                {s.k.map(([v, l]) => <div key={l}><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 22, color: 'var(--color-brand-primary)' }}>{v}</div><div style={{ fontSize: 12.5, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{l}</div></div>)}
              </div>
            </div>
            <div style={{ order: i % 2 ? 1 : 2, height: 'clamp(280px,32vw,380px)', borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <SEImg src={window.SE_IMG.segments[i].url} alt={window.SE_IMG.segments[i].alt} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SolutionProcess() {
  const steps = [
    ['Survey & model', 'We map your rooftop, load profile, and 20 years of local irradiance data.', 'radar'],
    ['Design & propose', 'You get a modelled rooftop system with generation, savings, and payback — no guesswork.', 'ruler'],
    ['Build & connect', 'In-house certified crews install to IEC/BIS standards and handle subsidy & net-metering.', 'hard-hat'],
    ['Monitor & maintain', 'Panel-level telemetry and ongoing maintenance keep every kWh accountable.', 'activity'],
  ];
  return (
    <section style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <Reveal style={SW}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}><div style={SEB}>How we deliver</div><h2 style={{ ...SH2, margin: '12px 0 0' }}>Four steps, one accountable team</h2></div>
        <div className="se-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {steps.map(([t, d, ic], i) => (
            <div key={t} style={{ position: 'relative', padding: 28, borderRadius: 16, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-brand-primary)', fontWeight: 500, marginBottom: 16 }}>STEP 0{i + 1}</div>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><LucideIcon name={ic} size={22} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{d}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function SolutionsCTA() {
  return (
    <section style={{ padding: 'clamp(40px,5vw,64px) clamp(20px,4vw,44px) clamp(72px,9vw,110px)', background: 'var(--color-bg-sunken)' }}>
      <Reveal style={{ ...SW, borderRadius: 28, background: 'var(--gradient-navy-depth)', padding: 'clamp(40px,6vw,72px)', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,166,0,.2), transparent 70%)' }} />
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.4vw,2.7rem)', letterSpacing: '-0.03em', margin: '0 0 14px', color: '#fff', position: 'relative' }}>Ready to model your project?</h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', maxWidth: 520, margin: '0 auto 30px', position: 'relative' }}>Whichever segment you're in, it starts the same way — with a site model and an honest number.</p>
        <a href="contact.html" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-accent)', color: 'var(--navy-900)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Get a proposal <LucideIcon name="arrow-right" size={18} filter="none" /></a>
      </Reveal>
    </section>
  );
}

Object.assign(window, { SolutionsHero, SolutionSegments, SolutionProcess, SolutionsCTA });
