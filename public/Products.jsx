// Products page content.
const { LucideIcon, Reveal, SEImg } = window;
const PW = window.SE_WRAP, PEB = window.SE_EYEBROW, PH2 = window.SE_H2;

const CATS = [
  { id: 'Panels', icon: 'sun', items: [
    { t: 'Sattva Vega 620', d: 'Bifacial n-type TOPCon module for large commercial and industrial rooftops.', specs: [['Power', '620 W'], ['Efficiency', '22.8%'], ['Warranty', '30 yr']], badge: 'Flagship' },
    { t: 'Sattva Solis 450', d: 'Mono-PERC all-black module engineered for residential rooftops.', specs: [['Power', '450 W'], ['Efficiency', '21.4%'], ['Warranty', '30 yr']], badge: 'Residential' },
    { t: 'Sattva Terra 550', d: 'Half-cut mono module balancing cost and yield for commercial roofs.', specs: [['Power', '550 W'], ['Efficiency', '21.9%'], ['Warranty', '25 yr']] },
  ]},
  { id: 'Inverters', icon: 'plug', items: [
    { t: 'Sattva Grid X10', d: 'Single-phase grid-tie inverter for residential rooftop systems.', specs: [['Rated', '10 kW'], ['MPPT', '2'], ['Efficiency', '97.6%']], badge: 'Popular' },
    { t: 'Sattva String 60', d: 'Three-phase string inverter for large commercial rooftop arrays.', specs: [['Rated', '60 kW'], ['MPPT', '6'], ['Efficiency', '98.4%']] },
    { t: 'Sattva Micro 800', d: 'Module-level micro-inverter maximising yield on shaded roofs.', specs: [['Rated', '800 W'], ['MPPT', '1/panel'], ['Efficiency', '96.7%']] },
  ]},
  { id: 'Mounting', icon: 'wrench', items: [
    { t: 'MountRail Pro', d: 'Anodised aluminium mounting system for tile, metal, and RCC roofs.', specs: [['Wind load', '2.4 kPa'], ['Warranty', '25 yr'], ['Roofs', 'All types']], badge: 'All roofs' },
    { t: 'Sattva TinShield', d: 'Non-penetrative clamp mounting for metal sheet industrial roofs.', specs: [['Fixing', 'Clamp-on'], ['Leak-proof', 'Yes'], ['Roofs', 'Metal']] },
    { t: 'Sattva FlatFrame', d: 'Ballasted tilt frames for flat RCC rooftops, no roof penetration.', specs: [['Tilt', '10–15°'], ['Fixing', 'Ballast'], ['Roofs', 'Flat RCC']] },
  ]},
  { id: 'Kits', icon: 'package', items: [
    { t: 'Home Kit 5 kW', d: 'Turnkey residential rooftop bundle: panels, inverter, mounting, cabling.', specs: [['Size', '5 kW'], ['Roof', '~330 sq ft'], ['Install', '3–5 wk']] },
    { t: 'Shop Kit 15 kW', d: 'Pre-engineered rooftop set for retail and small commercial buildings.', specs: [['Size', '15 kW'], ['Roof', '~1000 sq ft'], ['Payback', '~4 yr']] },
    { t: 'Factory Kit 50 kW', d: 'Rooftop bundle for industrial sheds, engineered to your roof.', specs: [['Size', '50 kW'], ['Roof', '~3300 sq ft'], ['Phase', '3-phase']] },
  ]},
  { id: 'Accessories', icon: 'cable', items: [
    { t: 'Sattva Sense', d: 'Whole-home energy monitor with panel-level telemetry and app.', specs: [['Sampling', '1 s'], ['Channels', '16'], ['App', 'iOS/Android']] },
    { t: 'Sattva NetMeter', d: 'Bidirectional net-metering hardware for grid export credit.', specs: [['Type', 'Bi-directional'], ['Comms', 'RS-485'], ['Approved', 'DISCOM']] },
    { t: 'Sattva DC Guard', d: 'Rapid shutdown and DC isolation safety kit, IEC compliant.', specs: [['Standard', 'IEC'], ['Response', '<30 s'], ['Rating', 'IP68']] },
  ]},
];

function ProductsHero() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,44px) clamp(40px,5vw,60px)', overflow: 'hidden', background: 'var(--color-bg-canvas)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh-subtle)', pointerEvents: 'none' }} />
      <div style={{ ...PW, position: 'relative', maxWidth: 780 }}>
        <div style={PEB}>Products &amp; services</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', color: 'var(--color-text-primary)', margin: '14px 0 18px' }}>High-quality solar panels, built for the rooftop.</h1>
        <p style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0, maxWidth: 620 }}>Every panel, inverter, and mounting system we install is Tier-1 rated and specified in-house — so the datasheet and your rooftop's real performance actually agree.</p>
      </div>
    </section>
  );
}

function ProductCatalog() {
  const [cat, setCat] = React.useState('Panels');
  const active = CATS.find((c) => c.id === cat);
  return (
    <section style={{ padding: '0 clamp(20px,4vw,44px) clamp(64px,8vw,100px)', background: 'var(--color-bg-canvas)' }}>
      <div style={PW}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40, position: 'sticky', top: 68, zIndex: 50, padding: '14px 0', background: 'var(--color-bg-canvas)' }}>
          {CATS.map((c) => (
            <button key={c.id} onClick={() => setCat(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 'var(--radius-pill)', border: `1px solid ${cat === c.id ? 'var(--color-brand-primary)' : 'var(--color-border-default)'}`, cursor: 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-body)', background: cat === c.id ? 'var(--color-brand-primary)' : 'var(--color-bg-surface)', color: cat === c.id ? '#fff' : 'var(--color-text-secondary)', transition: 'all .18s' }}>
              <LucideIcon name={c.icon} size={16} filter={cat === c.id ? 'invert(1)' : window.SE_GREEN} />{c.id}
            </button>
          ))}
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {active.items.map((p, i) => (
            <div key={p.t} className="se-card" style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', display: 'flex', flexDirection: 'column', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)', animation: `seFade .4s var(--ease-standard) ${i * 70}ms both` }}>
              <div style={{ height: 200, position: 'relative', background: 'var(--color-bg-sunken)' }}>
                <SEImg src={window.SE_IMG.products[cat][i].url} alt={window.SE_IMG.products[cat][i].alt} />
                {p.badge && <span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-accent)', color: 'var(--navy-900)', fontSize: 12, fontWeight: 700 }}>{p.badge}</span>}
              </div>
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--color-text-primary)', marginBottom: 8 }}>{p.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--color-text-secondary)', marginBottom: 20, flex: 1 }}>{p.d}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, borderTop: '1px solid var(--color-border-subtle)', paddingTop: 18, marginBottom: 20 }}>
                  {p.specs.map(([l, v]) => <div key={l}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 500, color: 'var(--color-text-primary)' }}>{v}</div><div style={{ fontSize: 11.5, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{l}</div></div>)}
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href="contact.html" className="se-btn-primary" style={{ flex: 1, textAlign: 'center', padding: '11px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>Get quote</a>
                  <a href="#" className="se-btn-ghost" style={{ padding: '11px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}><LucideIcon name="file-down" size={15} filter="none" />Spec</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsCTA() {
  return (
    <section style={{ padding: 'clamp(40px,5vw,64px) clamp(20px,4vw,44px) clamp(72px,9vw,110px)', background: 'var(--color-bg-canvas)' }}>
      <Reveal style={{ ...PW, borderRadius: 28, background: 'var(--gradient-solar-flow)', padding: 'clamp(40px,6vw,72px)', textAlign: 'center', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.4vw,2.7rem)', letterSpacing: '-0.03em', margin: '0 0 14px', color: '#fff' }}>Not sure which system fits?</h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.9)', maxWidth: 520, margin: '0 auto 30px' }}>Send us your roof, load, or monthly bill. An engineer will match the right products and model your generation.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="contact.html" style={{ padding: '15px 30px', borderRadius: 'var(--radius-pill)', background: '#fff', color: 'var(--forest-700)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Request a proposal</a>
          <a href="solutions.html" style={{ padding: '15px 30px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.4)', color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>Explore solutions</a>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { ProductsHero, ProductCatalog, ProductsCTA });
