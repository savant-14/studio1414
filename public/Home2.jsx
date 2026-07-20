// Sattva Energies — homepage part 2: technology, sustainability, calculator, certs, testimonials, cases, blog, faq, contact.
const { LucideIcon: LI2, Reveal: Rev2, SEImg } = window;
const W2 = window.SE_WRAP, EB2 = window.SE_EYEBROW, HH2 = window.SE_H2;

function Technology() {
  const feats = [
    { icon: 'sun', t: 'HTAR anti-reflective glass', d: 'High-transmission coated front glass captures light that ordinary panels reflect away.' },
    { icon: 'layers', t: 'Bifacial cell architecture', d: 'Rear-side generation adds meaningful extra yield on bright, high-albedo rooftops.' },
    { icon: 'radar', t: 'Live yield modelling', d: 'Every rooftop array is simulated against 20 years of local irradiance before a bolt is turned.' },
    { icon: 'cpu', t: 'Panel-level monitoring', d: 'Per-module telemetry flags underperformance before it shows on your bill.' },
  ];
  return (
    <section id="technology" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--gradient-navy-depth)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -80, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,166,0,.16), transparent 68%)', pointerEvents: 'none' }} />
      <Rev2 style={{ ...W2, position: 'relative' }}>
        <div style={{ maxWidth: 640, marginBottom: 48 }}>
          <div style={{ ...EB2, color: 'var(--solar-400)' }}>Technology</div>
          <h2 style={{ ...HH2, color: '#fff', margin: '13px 0 16px' }}>Yield is an engineering outcome, not luck.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,.72)', margin: 0 }}>We design your rooftop for the kilowatt-hours you'll actually harvest over 25 years — accounting for shading, soiling, temperature, and degradation from day one.</p>
        </div>
        <div className="se-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {feats.map((f) => (
            <div key={f.t} style={{ padding: 26, borderRadius: 16, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 11, background: 'rgba(242,166,0,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><LI2 name={f.icon} size={21} filter={window.SE_SOLAR} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: '#fff', marginBottom: 8 }}>{f.t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.65)' }}>{f.d}</div>
            </div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function Industries() {
  const items = [['warehouse', 'Logistics & warehousing'], ['building', 'Real estate & housing'], ['hospital', 'Healthcare'], ['graduation-cap', 'Education'], ['hotel', 'Hospitality'], ['store', 'Retail & showrooms'], ['fuel', 'Manufacturing'], ['landmark', 'Institutions']];
  return (
    <section id="industries" style={{ padding: 'clamp(56px,7vw,88px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Rev2 style={W2}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}><div style={EB2}>Industries we serve</div><h2 style={{ ...HH2, margin: '12px 0 0' }}>Rooftop solar for every kind of building</h2></div>
        <div className="se-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {items.map(([ic, t]) => (
            <div key={t} className="se-card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '18px 20px', borderRadius: 14, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><LI2 name={ic} size={19} /></span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)' }}>{t}</span>
            </div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function CalculatorBand() {
  const [bill, setBill] = React.useState(8000);
  const savings = Math.round(bill * 12 * 22 * 0.82 / 100000 * 10) / 10;
  const payback = Math.max(3.4, Math.round((60 / (bill / 1000)) * 10) / 10);
  return (
    <section id="calculator" style={{ padding: 'clamp(40px,5vw,56px) clamp(20px,4vw,44px)' }}>
      <Rev2 style={{ ...W2, borderRadius: 28, background: 'var(--gradient-navy-depth)', padding: 'clamp(40px,5vw,64px) clamp(28px,4vw,56px)', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 40, alignItems: 'center' }} className="se-2col">
        <div style={{ position: 'absolute', top: -80, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,166,0,.2), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ ...EB2, color: 'var(--solar-400)' }}>Savings calculator</div>
          <h2 style={{ ...HH2, color: '#fff', margin: '13px 0 12px' }}>See what rooftop solar saves you.</h2>
          <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.72)', margin: '0 0 26px', maxWidth: 420 }}>Drag your average monthly electricity bill — we'll model a 25-year rooftop savings estimate instantly.</p>
          <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,.85)', fontSize: 14 }}><span>Monthly bill</span><span style={{ fontFamily: 'var(--font-mono)' }}>₹{bill.toLocaleString('en-IN')}</span></div>
          <input type="range" min="2000" max="50000" step="500" value={bill} onChange={(e) => setBill(+e.target.value)} className="se-range" style={{ width: '100%', accentColor: 'var(--solar-400)' }} />
          <a href="contact.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginTop: 24, padding: '14px 28px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-accent)', color: 'var(--navy-900)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>Get a detailed proposal <LI2 name="arrow-right" size={18} filter="none" /></a>
        </div>
        <div style={{ position: 'relative', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 20, padding: 28, backdropFilter: 'blur(8px)' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 6 }}>Estimated 25-year savings</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'clamp(2.2rem,4vw,2.9rem)', color: 'var(--solar-400)', letterSpacing: '-0.02em' }}>₹{savings}L</div>
          <div style={{ height: 1, background: 'rgba(255,255,255,.12)', margin: '18px 0' }} />
          {[['Payback period', `${payback} yrs`], ['CO₂ avoided / yr', `${(bill / 1300).toFixed(1)} t`], ['System size', `${(bill / 1000 * 0.9).toFixed(1)} kW`]].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'rgba(255,255,255,.8)', marginBottom: 10 }}><span>{l}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span></div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function Sustainability() {
  const kpis = [['3,500+', 'Rooftops solarised in Gujarat'], ['13,000+ kW', 'Clean capacity installed'], ['92%', 'Customers subsidy-assisted'], ['25 yrs', 'Free energy per rooftop']];
  return (
    <section id="sustainability" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <Rev2 style={{ ...W2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'center' }} className="se-2col">
        <div>
          <div style={EB2}>Sustainability · ESG &amp; CSR</div>
          <h2 style={{ ...HH2, margin: '13px 0 16px' }}>Empowering communities. Preserving the planet.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--color-text-secondary)', margin: '0 0 28px' }}>Our ESG framework and CSR programmes turn every rooftop into measurable impact — cleaner grids across Gujarat, lower bills for families, and a workforce trained for the solar transition.</p>
          <div className="se-grid-2b" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 30 }}>
            {kpis.map(([v, l]) => <div key={l}><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'clamp(1.5rem,2.4vw,1.9rem)', color: 'var(--color-brand-primary)' }}>{v}</div><div style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', marginTop: 2 }}>{l}</div></div>)}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" className="se-btn-primary" style={{ padding: '13px 26px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>Learn about ESG</a>
            <a href="#" className="se-btn-ghost" style={{ padding: '13px 26px', borderRadius: 'var(--radius-pill)', background: 'transparent', color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 15, border: '1px solid var(--color-border-default)', textDecoration: 'none' }}>Learn about CSR</a>
          </div>
        </div>
        <div style={{ height: 'clamp(340px,40vw,480px)', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <SEImg src={window.SE_IMG.sustainability.url} alt={window.SE_IMG.sustainability.alt} />
        </div>
      </Rev2>
    </section>
  );
}

function Certifications() {
  const certs = [['IEC 61215', 'shield-check'], ['IEC 61730', 'shield-check'], ['ISO 9001', 'award'], ['BIS Certified', 'badge-check'], ['Tier-1 Bloomberg', 'star'], ['MNRE Approved', 'landmark'], ['ISO 14001', 'leaf'], ['ALMM Listed', 'list-checks']];
  return (
    <section style={{ padding: 'clamp(48px,6vw,68px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <Rev2 style={{ ...W2, textAlign: 'center' }}>
        <div style={{ ...EB2, color: 'var(--color-text-tertiary)', marginBottom: 24 }}>Awards, certifications &amp; compliance</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          {certs.map(([c, ic]) => (
            <div key={c} style={{ padding: '12px 20px', borderRadius: 12, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)', fontWeight: 600, fontSize: 14, color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 9 }}><LI2 name={ic} size={16} />{c}</div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: 'Sattva handled our entire rooftop — site survey, the PM Surya Ghar subsidy paperwork, and installation. Our monthly bill dropped by nearly 80%.', n: 'Rajesh Patel', r: 'Homeowner, Ahmedabad' },
    { q: 'The one-team model is real. Consultation, install, and maintenance were the same people — nothing fell through the cracks.', n: 'Priya Shah', r: 'Homeowner, Surat' },
    { q: 'Their maintenance crew catches issues before we see them on our own dashboards. Two years in, the rooftop still performs above the estimate.', n: 'Anil Kumar', r: 'Plant Head, Vadodara Textiles' },
  ];
  return (
    <section style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <Rev2 style={W2}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}><div style={EB2}>Testimonials</div><h2 style={{ ...HH2, margin: '12px 0 0' }}>Trusted across Gujarat</h2></div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {quotes.map((t) => (
            <div key={t.n} style={{ padding: 28, borderRadius: 16, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', gap: 2 }}>{[0, 1, 2, 3, 4].map((i) => <LI2 key={i} name="star" size={16} filter={window.SE_SOLAR} />)}</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-text-primary)', margin: 0, flex: 1 }}>“{t.q}”</p>
              <div><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--color-text-primary)' }}>{t.n}</div><div style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{t.r}</div></div>
            </div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { tag: 'Industrial rooftop', t: 'Cutting a Surat textile unit\'s daytime grid draw by 68%', m: '185 kW · ~4-yr payback', ic: 'factory' },
    { tag: 'Commercial rooftop', t: '540 kW rooftop across 40 Ahmedabad buildings', m: '40 buildings energised', ic: 'building-2' },
    { tag: 'Residential rooftop', t: '1,200 Vadodara homes solarised with subsidy', m: '₹78,000 subsidy assistance', ic: 'home' },
  ];
  return (
    <section id="cases" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Rev2 style={W2}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div><div style={EB2}>Case studies</div><h2 style={{ ...HH2, margin: '12px 0 0' }}>Proof, in kilowatt-hours</h2></div>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {cases.map((c, i) => (
            <a key={i} href="#" className="se-card" style={{ display: 'block', textDecoration: 'none', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <div style={{ height: 190, position: 'relative' }}><SEImg src={window.SE_IMG.cases[i].url} alt={window.SE_IMG.cases[i].alt} /><span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--glass-bg)', backdropFilter: 'blur(8px)', fontSize: 12, fontWeight: 600, color: 'var(--color-brand-primary)' }}>{c.tag}</span></div>
              <div style={{ padding: 22 }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, lineHeight: 1.3, color: 'var(--color-text-primary)', marginBottom: 12 }}>{c.t}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', gap: 8 }}><LI2 name={c.ic} size={15} />{c.m}</div></div>
            </a>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function Blogs() {
  const posts = [
    { tag: 'Guide', t: 'PM Surya Ghar: how the ₹78,000 rooftop solar subsidy works', d: '12 Jul 2026' },
    { tag: 'Insight', t: 'How much can a Gujarat home save with rooftop solar?', d: '04 Jul 2026' },
    { tag: 'Guide', t: 'How to read a rooftop solar proposal without getting fooled', d: '28 Jun 2026' },
  ];
  return (
    <section id="resources" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <Rev2 style={W2}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div><div style={EB2}>Resources</div><h2 style={{ ...HH2, margin: '12px 0 0' }}>Latest from Sattva</h2></div>
          <a href="#" className="se-btn-ghost" style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--color-border-default)', background: 'transparent', fontWeight: 600, fontSize: 14, textDecoration: 'none', color: 'var(--color-text-primary)' }}>View all resources</a>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" className="se-card" style={{ display: 'block', textDecoration: 'none', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <div style={{ height: 180, position: 'relative' }}><SEImg src={window.SE_IMG.blog[i].url} alt={window.SE_IMG.blog[i].alt} /></div>
              <div style={{ padding: 22 }}><div style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: 'var(--color-brand-primary)', background: 'var(--color-brand-primary-subtle)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', marginBottom: 12 }}>{p.tag}</div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, lineHeight: 1.3, color: 'var(--color-text-primary)', marginBottom: 12 }}>{p.t}</div><div style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{p.d}</div></div>
            </a>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ['How long does a rooftop solar install take?', 'Most rooftop systems are surveyed, designed, permitted, and installed within 3–5 weeks. Grid tie-in timing depends on your local DISCOM.'],
    ['What warranty do the panels carry?', '30-year linear performance warranty on modules and a 10-year product warranty on inverters, plus our ongoing maintenance option.'],
    ['How much government subsidy can I get?', 'Eligible residential customers can receive a subsidy of up to ₹78,000 under the PM Surya Ghar Muft Bijli Yojana. Sattva assists with the full application — documentation, approvals, and guidance — though the final subsidy is granted by the government.'],
    ['Do you handle subsidy and net metering paperwork?', 'Yes — we assist with the PM Surya Ghar subsidy application and file the net-metering paperwork with your DISCOM on your behalf.'],
    ['Which buildings do you install rooftop solar on?', 'We install rooftop solar for residential, commercial, and industrial buildings across Gujarat — from a single home to large factory rooftops.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Rev2 style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}><div style={EB2}>FAQ</div><h2 style={{ ...HH2, margin: '12px 0 0' }}>Questions, answered</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ borderRadius: 14, border: `1px solid ${open === i ? 'var(--color-brand-primary)' : 'var(--color-border-subtle)'}`, background: 'var(--color-bg-surface)', overflow: 'hidden', transition: 'border-color .2s' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--color-text-primary)', textAlign: 'left' }}>
                {q}<span style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform .25s', fontSize: 24, color: 'var(--color-brand-primary)', fontWeight: 300, lineHeight: 1, flexShrink: 0 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height .3s var(--ease-standard)' }}><div style={{ padding: '0 24px 22px', fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{a}</div></div>
            </div>
          ))}
        </div>
      </Rev2>
    </section>
  );
}

function SubsidyBand() {
  const steps = [
    ['Registration', 'We register your rooftop and confirm your home category and DISCOM qualify under the scheme.', 'clipboard-check'],
    ['Documentation', 'We prepare and file your application, KYC, and supporting paperwork.', 'file-text'],
    ['Government approval', 'We track your application through DISCOM and MNRE approval.', 'landmark'],
    ['Net metering', 'We file the net-metering paperwork so every extra unit earns credit.', 'gauge'],
    ['Installation', 'Certified crews install your rooftop system to IEC and BIS standards.', 'hard-hat'],
    ['Subsidy support', 'We guide you through inspection and the subsidy disbursement process.', 'badge-indian-rupee'],
  ];
  return (
    <section id="subsidy" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <Rev2 style={{ ...W2, borderRadius: 28, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', boxShadow: 'var(--shadow-md)' }}>
        <div className="se-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: 'var(--gradient-solar-flow)', padding: 'clamp(32px,4vw,52px)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: -70, left: -50, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,.14)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.18)', fontSize: 12.5, fontWeight: 600, marginBottom: 22 }}>
                <LI2 name="landmark" size={14} filter="invert(1)" />Government of India scheme
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.4rem)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 14px', color: '#fff' }}>Get up to ₹78,000 rooftop solar subsidy</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, color: 'rgba(255,255,255,.92)', margin: '0 0 26px' }}>Eligible residential customers can receive a government subsidy of up to ₹78,000 under the <strong>PM Surya Ghar Muft Bijli Yojana</strong>. Sattva Energies assists you through the entire process — documentation, approvals, installation, and subsidy guidance.</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(255,255,255,.85)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><LI2 name="shield-check" size={15} filter="invert(1)" />Registered to support customers through the subsidy process</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,.7)' }}>Subsidy is granted by the government; approval is subject to eligibility.</div>
            </div>
          </div>
          <div style={{ padding: 'clamp(32px,4vw,52px)' }}>
            <div style={EB2}>How Sattva helps</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--color-text-primary)', margin: '12px 0 24px' }}>From eligibility to disbursement</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 30 }}>
              {steps.map(([t, d, ic], i) => (
                <div key={t} style={{ display: 'flex', gap: 14, padding: '11px 0', borderTop: i ? '1px solid var(--color-border-subtle)' : 'none' }}>
                  <span style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LI2 name={ic} size={18} /></span>
                  <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--color-text-primary)', marginBottom: 2 }}>{t}</div><div style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--color-text-secondary)' }}>{d}</div></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="contact.html" className="se-btn-primary" style={{ padding: '14px 26px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Check your subsidy eligibility <LI2 name="arrow-right" size={17} filter="invert(1)" /></a>
              <a href="contact.html" className="se-btn-ghost" style={{ padding: '14px 26px', borderRadius: 'var(--radius-pill)', background: 'transparent', color: 'var(--color-text-primary)', fontWeight: 600, fontSize: 15, border: '1px solid var(--color-border-default)', textDecoration: 'none' }}>Apply for solar subsidy</a>
            </div>
          </div>
        </div>
      </Rev2>
    </section>
  );
}

Object.assign(window, { Technology, Industries, CalculatorBand, Sustainability, Certifications, Testimonials, CaseStudies, Blogs, FAQ, SubsidyBand });
