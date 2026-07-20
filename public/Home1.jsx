// Sattva Energies — homepage part 1: hero, overview, why, products, solutions, projects.
const { LucideIcon, Reveal, SEImg, SE_GREEN, SE_SOLAR } = window;

function useCounter(target, dur = 1700, start) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(target); return; }
    let raf; const t0 = performance.now();
    const tick = (t) => { const p = Math.min((t - t0) / dur, 1); setV(target * (1 - Math.pow(1 - p, 3))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [start]);
  return v;
}
window.useCounter = useCounter;

const fmt = (v, fix) => v.toLocaleString('en-IN', { minimumFractionDigits: fix, maximumFractionDigits: fix });
const WRAP = { maxWidth: 1280, margin: '0 auto' };
const EYEBROW = { fontSize: 13, fontWeight: 600, color: 'var(--color-brand-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' };
const H2 = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,2.75rem)', letterSpacing: '-0.03em', color: 'var(--color-text-primary)', lineHeight: 1.1, margin: 0 };
window.SE_WRAP = WRAP; window.SE_EYEBROW = EYEBROW; window.SE_H2 = H2;

// Real WebGL hero scene (three.js). Mounts the module in hero3d.js into a div;
// the module owns the render loop, lighting, bloom, parallax, and disposal.
function HeroScene() {
  const mountRef = React.useRef(null);
  React.useEffect(() => {
    let dispose;
    const start = () => { if (window.initHero3D && mountRef.current) dispose = window.initHero3D(mountRef.current); };
    if (window.initHero3D) start();
    else window.addEventListener('hero3d-ready', start, { once: true });
    return () => { window.removeEventListener('hero3d-ready', start); if (dispose) dispose(); };
  }, []);
  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} />;
}
window.HeroScene = HeroScene;

function HeroBrands({ rise }) {
  const brands = [
    ['Adani Solar', '30-year performance warranty'],
    ['Waaree', 'Tier-1 manufacturer'],
    ['Rayzon Solar', 'High-efficiency modules'],
  ];
  const pills = ['Genuine products', 'Manufacturer warranty', 'MNRE compliant'];
  return (
    <div style={{ ...rise(420), paddingTop: 'clamp(28px,4vw,40px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 22 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)' }}><LucideIcon name="badge-check" size={17} />We install trusted solar brands</div>
          <div style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginTop: 4 }}>We install genuine products from India's leading solar manufacturers.</div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {pills.map((p) => (
            <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 13px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary-subtle)', color: 'var(--color-brand-primary)', fontSize: 12.5, fontWeight: 600 }}><LucideIcon name="check" size={13} />{p}</span>
          ))}
        </div>
      </div>
      <div className="se-brand-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {brands.map(([n, cap]) => (
          <div key={n} className="se-brand-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '22px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', textAlign: 'center', transition: 'transform .25s var(--ease-emphasized), box-shadow .25s var(--ease-emphasized), filter .25s var(--ease-standard)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.1rem,1.7vw,1.35rem)', letterSpacing: '-0.02em', color: 'var(--color-text-primary)', lineHeight: 1 }}>{n}</span>
            <span style={{ fontSize: 12.5, color: 'var(--color-text-tertiary)' }}>{cap}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setSeen(true), 250); return () => clearTimeout(t); }, []);
  const stats = [
    { v: useCounter(3500, 1700, seen), suf: '+', fix: 0, label: 'Projects installed' },
    { v: useCounter(13000, 1900, seen), suf: '+', fix: 0, label: 'kW installed' },
    { v: useCounter(25, 1500, seen), suf: ' yrs', fix: 0, label: 'Panel performance warranty' },
    { v: useCounter(99, 1600, seen), suf: '%', fix: 0, label: 'Customer satisfaction' },
  ];
  const rise = (d) => ({ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(20px)', transition: `opacity .8s var(--ease-emphasized) ${d}ms, transform .8s var(--ease-emphasized) ${d}ms` });
  return (
    <section style={{ position: 'relative', padding: 'clamp(56px,7vw,92px) clamp(20px,4vw,44px) clamp(48px,5vw,68px)', overflow: 'hidden', background: 'var(--color-bg-canvas)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh-subtle)', pointerEvents: 'none' }} />
      <div className="se-hero-grid" style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: '1.06fr 0.94fr', gap: 'clamp(32px,4vw,60px)', alignItems: 'start' }}>
        <div>
          <div style={{ ...rise(0), display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary-subtle)', color: 'var(--color-brand-primary)', fontSize: 13, fontWeight: 600, marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-brand-primary)' }} />Certified installers · rooftop solar across Gujarat
          </div>
          <h1 style={{ ...rise(80), fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.6rem,5.2vw,4.15rem)', lineHeight: 1.02, letterSpacing: '-0.04em', color: 'var(--color-text-primary)', margin: '0 0 20px' }}>
            Rooftop solar,<br /><span style={{ color: 'var(--color-brand-primary)' }}>engineered properly.</span>
          </h1>
          <p style={{ ...rise(160), fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-secondary)', maxWidth: 510, margin: '0 0 32px' }}>
            Reduce your electricity bills with rooftop solar. Sattva Energies is Gujarat's trusted rooftop solar installation partner — with government subsidy assistance from consultation to installation.
          </p>
          <div style={{ ...rise(240), display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="solutions.html" className="se-btn-primary" style={{ padding: '15px 30px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}>Explore our solutions <LucideIcon name="arrow-right" size={18} filter="invert(1)" /></a>
            <a href="contact.html" className="se-btn-ghost" style={{ padding: '15px 30px', borderRadius: 'var(--radius-pill)', background: 'transparent', color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 16, border: '1px solid var(--color-border-default)', textDecoration: 'none' }}>Calculate savings</a>
          </div>
          <div style={{ ...rise(300), marginTop: 'clamp(24px,3vw,32px)' }}>
            <a href="index.html#subsidy" className="se-subsidy-card" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.15fr 1fr 1.2fr', alignItems: 'stretch', textDecoration: 'none', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(255,255,255,.86), rgba(255,255,255,.62))', WebkitBackdropFilter: 'blur(14px) saturate(1.4)', backdropFilter: 'blur(14px) saturate(1.4)', border: '1px solid rgba(255,255,255,.75)', boxShadow: '0 1px 0 rgba(255,255,255,.9) inset, 0 12px 30px -12px rgba(22,45,32,.22), 0 2px 6px rgba(22,45,32,.06)', overflow: 'hidden' }}>
              <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--color-brand-primary), var(--solar-400))' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '20px 22px' }}>
                <span style={{ width: 46, height: 46, borderRadius: 13, flexShrink: 0, background: 'linear-gradient(150deg, var(--color-brand-primary), var(--forest-700, #1f5c3f))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px -5px rgba(38,116,78,.55)' }}><LucideIcon name="shield-check" size={23} filter="invert(1)" /></span>
                <span><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)', lineHeight: 1.25 }}>Government Solar Subsidy</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8, padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary-subtle)', border: '1px solid var(--solar-200)', fontSize: 11, fontWeight: 600, letterSpacing: '.02em', color: 'var(--color-brand-primary)' }}><LucideIcon name="sun" size={12} />PM Surya Ghar</span></span>
              </div>
              <div style={{ padding: '20px 22px', borderLeft: '1px solid rgba(38,116,78,.12)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 6 }}>Up to</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 'clamp(1.9rem,2.9vw,2.5rem)', color: 'var(--solar-600)', letterSpacing: '-0.03em', lineHeight: .95 }}>₹78,000<span style={{ fontSize: 15, verticalAlign: 'top', color: 'var(--color-text-tertiary)' }}>*</span></span>
                <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 10, lineHeight: 1.4 }}>Subsidy for eligible residential rooftop solar.</span>
              </div>
              <div style={{ padding: '20px 22px', borderLeft: '1px solid rgba(38,116,78,.12)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ width: 30, height: 30, borderRadius: '50%', flexShrink: 0, background: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1, boxShadow: '0 4px 10px -4px rgba(38,116,78,.6)' }}><LucideIcon name="check" size={16} filter="invert(1)" /></span>
                <span><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--color-text-primary)', marginBottom: 4 }}>Complete subsidy assistance</span><span style={{ display: 'block', fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>Registration, documentation, approvals, and installation support.</span></span>
              </div>
            </a>
            <p style={{ fontSize: 11.5, color: 'var(--color-text-tertiary)', margin: '10px 2px 0', lineHeight: 1.5 }}>*Subsidy is available for eligible customers under the PM Surya Ghar Muft Bijli Yojana and is subject to Government rules and approval.</p>
          </div>
        </div>
        <div style={{ ...rise(200), position: 'relative' }}>
          <div style={{ height: 'clamp(340px,44vw,520px)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 28px 64px rgba(22,32,28,.18)' }}>
            <HeroScene />
          </div>
          <div style={{ position: 'absolute', bottom: 20, left: -22, background: 'var(--color-bg-surface)', borderRadius: 16, padding: '16px 20px', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 13, zIndex: 3 }} className="se-hero-chip">
            <span style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LucideIcon name="activity" size={20} /></span>
            <div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 20, color: 'var(--color-text-primary)' }}>+6.1%</div><div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>above modelled yield</div></div>
          </div>
        </div>
      </div>
      <div style={{ ...WRAP, position: 'relative', marginTop: 'clamp(40px,5vw,64px)' }}>
        <div className="se-hero-stats" style={{ ...rise(340), display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(20px,3vw,40px)', paddingBottom: 'clamp(32px,4vw,44px)', borderBottom: '1px solid var(--color-border-subtle)' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'clamp(1.6rem,2.2vw,2rem)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>{s.pre || ''}{fmt(s.v, s.fix)}{s.suf}</div>
              <div style={{ fontSize: 12.5, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <HeroBrands rise={rise} />
      </div>
    </section>
  );
}

function Overview() {
  const rows = [
    ['Consult', 'A free rooftop site assessment and savings analysis sized to your roof geometry and real load profile — never a spreadsheet estimate.'],
    ['Install', 'In-house certified crews and Tier-1 solar panels, installed to IEC and BIS standards with full documentation.'],
    ['Maintain', 'Live performance monitoring and ongoing maintenance keep every kilowatt-hour on your rooftop accountable.'],
  ];
  return (
    <section id="about" style={{ padding: '32px clamp(20px,4vw,44px)', borderTop: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)' }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-tertiary)', letterSpacing: '0.06em' }}>TIER-1 BRANDS &amp; GOVERNMENT PROGRAMMES WE WORK WITH</span>
        <div className="se-logos" style={{ display: 'flex', gap: 'clamp(20px,2.6vw,40px)', opacity: .55, flexWrap: 'wrap', alignItems: 'center' }}>
          {['Adani Solar', 'Waaree', 'Rayzon Solar', 'MNRE', 'PM Surya Ghar'].map((n) => <span key={n} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(14px,1.4vw,18px)', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{n}</span>)}
        </div>
      </div>
      <Reveal style={{ ...WRAP, marginTop: 64, marginBottom: 24, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }} className="se-2col">
        <div>
          <div style={EYEBROW}>The company</div>
          <h2 style={{ ...H2, margin: '14px 0 18px' }}>One certified team for your entire rooftop.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: 0 }}>Most rooftop solar goes wrong at the seams — where the surveyor, installer, and maintenance vendor hand off to each other. Sattva owns all three. From your first site visit and subsidy paperwork to years of maintenance, one company answers for your rooftop's generation.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 18, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)' }}>
          {rows.map(([t, d], i) => (
            <div key={t} style={{ display: 'flex', gap: 18, padding: '22px 24px', borderTop: i ? '1px solid var(--color-border-subtle)' : 'none' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-brand-primary)', fontWeight: 500, paddingTop: 3 }}>0{i + 1}</span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 5 }}>{t}</div><div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{d}</div></div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const PRODUCTS = {
  Residential: [
    { icon: 'sun', t: 'Solar panels', d: 'Mono-PERC & bifacial modules up to 620W with a 30-year performance warranty.' },
    { icon: 'wrench', t: 'Mounting structures', d: 'Corrosion-resistant rooftop mounting engineered for tile, metal, and RCC roofs.' },
    { icon: 'package', t: 'Rooftop solar kits', d: 'Pre-engineered turnkey bundles — panels, inverter, mounting, and wiring.' },
    { icon: 'gauge', t: 'Net metering', d: 'Grid-tie setup and net-metering filing so every extra unit earns credit.' },
  ],
  Commercial: [
    { icon: 'building-2', t: 'Rooftop C&I solar', d: 'Optimised rooftop arrays for warehouses, offices, and retail buildings.' },
    { icon: 'clipboard-list', t: 'Solar consultation', d: 'Free feasibility, savings analysis, and payback modelling for your rooftop.' },
    { icon: 'file-check', t: 'Solar EPC', d: 'End-to-end rooftop engineering, procurement, and construction.' },
    { icon: 'shield-check', t: 'Solar maintenance', d: 'Ongoing cleaning, inspection, and performance monitoring.' },
  ],
  Industrial: [
    { icon: 'factory', t: 'Industrial rooftop EPC', d: 'Large rooftop arrays engineered for factories and process facilities.' },
    { icon: 'ruler', t: 'Structural engineering', d: 'Load and wind analysis so your roof carries the array safely for decades.' },
    { icon: 'activity', t: 'Performance monitoring', d: 'Panel-level telemetry that flags underperformance before your bill does.' },
    { icon: 'trending-up', t: 'Yield assurance', d: 'Generation backed by ongoing maintenance and performance reporting.' },
  ],
};
function Products() {
  const [tab, setTab] = React.useState('Residential');
  return (
    <section id="products" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Reveal style={WRAP}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={EYEBROW}>Products &amp; services</div>
          <h2 style={{ ...H2, margin: '12px 0 0' }}>Everything under one roof</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 40, flexWrap: 'wrap' }}>
          {Object.keys(PRODUCTS).map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '10px 24px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-body)', background: tab === t ? 'var(--color-brand-primary)' : 'var(--color-bg-sunken)', color: tab === t ? '#fff' : 'var(--color-text-secondary)', transition: 'all .2s var(--ease-standard)' }}>{t}</button>
          ))}
        </div>
        <div className="se-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {PRODUCTS[tab].map((p, i) => (
            <a key={p.t} href="products.html" className="se-card" style={{ display: 'block', textDecoration: 'none', padding: 26, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)', animation: `seFade .4s var(--ease-standard) ${i * 60}ms both` }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><LucideIcon name={p.icon} size={22} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 8 }}>{p.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{p.d}</div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const SOLUTIONS = [
  { icon: 'home', t: 'Residential rooftop', d: 'Rooftop solar sized to your household load, with full subsidy assistance.', k: '12,000+ homes' },
  { icon: 'building-2', t: 'Commercial rooftop', d: 'Rooftop arrays for offices, showrooms, warehouses, and retail.', k: '1,200+ sites' },
  { icon: 'factory', t: 'Industrial rooftop', d: 'Large rooftop installations engineered for factories and facilities.', k: '340 facilities' },
  { icon: 'hard-hat', t: 'Solar EPC', d: 'End-to-end rooftop engineering, procurement, and construction.', k: '210 MW+ built' },
  { icon: 'clipboard-list', t: 'Solar consultation', d: 'Free site assessment, savings analysis, and payback modelling.', k: 'No-cost survey' },
  { icon: 'shield-check', t: 'Solar maintenance', d: 'Cleaning, inspection, and monitoring that protects your yield.', k: '99.2% uptime' },
];
function Solutions() {
  return (
    <section id="solutions" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <Reveal style={WRAP}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div><div style={EYEBROW}>Solutions by segment</div><h2 style={{ ...H2, margin: '12px 0 0' }}>Rooftop solar for every building</h2></div>
          <a href="solutions.html" className="se-link" style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-interactive-link)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>All solutions <LucideIcon name="arrow-right" size={16} filter="invert(38%) sepia(93%) saturate(560%) hue-rotate(165deg) brightness(90%)" /></a>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {SOLUTIONS.map((s) => (
            <a key={s.t} href="solutions.html" className="se-card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start', textDecoration: 'none', padding: 26, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 11, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LucideIcon name={s.icon} size={21} /></div>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 6 }}>{s.t}</div><div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--color-text-secondary)', marginBottom: 10 }}>{s.d}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--color-brand-primary)', fontWeight: 500 }}>{s.k}</div></div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  const [i, setI] = React.useState(0);
  const list = [
    { t: '540 kW rooftop portfolio, Ahmedabad', seg: 'Commercial rooftop', d: 'Rooftop solar across 40 commercial buildings in Ahmedabad, delivered building-by-building with full PM Surya Ghar subsidy and net-metering paperwork handled by Sattva.', stats: [['540 kW', 'Rooftop capacity'], ['40', 'Buildings'], ['~4 yrs', 'Payback']] },
    { t: '185 kW rooftop, Surat textile unit', seg: 'Industrial rooftop', d: 'A distributed rooftop array across factory sheds cut the unit\'s daytime grid draw substantially and shaved peak demand charges.', stats: [['185 kW', 'Capacity'], ['68%', 'Daytime grid cut'], ['~4 yrs', 'Payback']] },
    { t: '1,200 home rooftops, Vadodara', seg: 'Residential rooftop', d: 'Standardised residential rooftop systems installed across Vadodara neighbourhoods, each with government subsidy assistance and app-based monitoring.', stats: [['1,200', 'Homes'], ['₹78,000', 'Subsidy up to'], ['25 yrs', 'Free energy']] },
  ];
  const p = list[i];
  return (
    <section id="projects" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Reveal style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }} className="se-2col">
        <div style={{ position: 'relative', height: 'clamp(320px,38vw,440px)', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <SEImg src={window.SE_IMG.projects[i].url} alt={window.SE_IMG.projects[i].alt} />
          <span style={{ position: 'absolute', top: 18, left: 18, padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', fontSize: 12.5, fontWeight: 600, color: 'var(--color-brand-primary)' }}>{p.seg}</span>
        </div>
        <div>
          <div style={EYEBROW}>Featured projects</div>
          <h2 style={{ ...H2, fontSize: 'clamp(1.7rem,3vw,2.4rem)', margin: '13px 0 16px' }}>{p.t}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: '0 0 30px' }}>{p.d}</p>
          <div style={{ display: 'flex', gap: 'clamp(24px,3vw,44px)', marginBottom: 32, flexWrap: 'wrap' }}>
            {p.stats.map(([v, l]) => <div key={l}><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 26, color: 'var(--color-text-primary)' }}>{v}</div><div style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{l}</div></div>)}
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button aria-label="Previous" onClick={() => setI((i - 1 + list.length) % list.length)} className="se-arrow"><LucideIcon name="arrow-left" size={18} filter="none" /></button>
            <button aria-label="Next" onClick={() => setI((i + 1) % list.length)} className="se-arrow"><LucideIcon name="arrow-right" size={18} filter="none" /></button>
            <div style={{ display: 'flex', gap: 6, marginLeft: 10 }}>{list.map((_, j) => <span key={j} onClick={() => setI(j)} style={{ width: j === i ? 24 : 8, height: 8, borderRadius: 999, background: j === i ? 'var(--color-brand-primary)' : 'var(--color-border-default)', cursor: 'pointer', transition: 'width .25s, background .25s' }} />)}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { Hero, Overview, Products, Solutions, Projects });
