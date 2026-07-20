// Sattva Energies — brochure-driven marketing sections (no pricing shown).
// Content extracted from the company brochure, rewritten as premium web copy.
const { LucideIcon: LB, Reveal: RevB, SEImg: ImgB } = window;
const WB = window.SE_WRAP, EBB = window.SE_EYEBROW, HB = window.SE_H2;

// ── Why choose Sattva ──────────────────────────────────────────────────────
function WhyChoose() {
  const items = [
    ['award', '3,500+ rooftops installed', 'A decade of hands-on rooftop experience across Gujarat — 13,000+ kW commissioned and counting.'],
    ['badge-indian-rupee', 'Government subsidy assistance', 'We manage your PM Surya Ghar application end to end so you receive every rupee you\u2019re entitled to.'],
    ['layers', 'Tier-1 solar brands only', 'Adani, Waaree, and Rayzon modules with brand-backed 30-year performance warranties.'],
    ['users', 'One accountable team', 'Consultation, installation, and 5 years of O&M handled by Team Sattva \u2014 never handed off.'],
    ['trending-up', '3\u20134 year payback', 'A sound investment with 25\u201330% ROI and free rooftop energy for up to 25 years.'],
    ['shield-check', 'Built to last', 'Chemical-maintenance-free earthing and hot-dip galvanised structures engineered for decades.'],
  ];
  return (
    <section id="why" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <RevB style={WB}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={EBB}>Why choose Sattva</div>
          <h2 style={{ ...HB, margin: '12px auto 0', maxWidth: 720 }}>Gujarat’s trusted rooftop solar partner</h2>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {items.map(([ic, t, d]) => (
            <div key={t} className="se-card" style={{ padding: 28, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><LB name={ic} size={23} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{d}</div>
            </div>
          ))}
        </div>
      </RevB>
    </section>
  );
}

// ── Installation process / journey ─────────────────────────────────────────
function InstallProcess() {
  const steps = [
    ['Free consultation', 'Share your latest electricity bill. We assess your rooftop, load, and savings potential at no cost.', 'clipboard-list'],
    ['Proposal & booking', 'You receive a modelled proposal with generation, savings, and subsidy eligibility \u2014 then reserve your slot.', 'file-check'],
    ['Subsidy & paperwork', 'We register your PM Surya Ghar application and file net-metering with your DISCOM on your behalf.', 'badge-indian-rupee'],
    ['Installation', 'Certified crews install Tier-1 panels on galvanised structures to IEC and BIS standards.', 'hard-hat'],
    ['Meter & commissioning', 'Net meter is installed and your system is commissioned and connected to the grid.', 'gauge'],
    ['Support & subsidy credit', 'Subsidy is credited to your account per MNRE terms, backed by 5 years of Team Sattva O&M.', 'shield-check'],
  ];
  return (
    <section id="process" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <RevB style={WB}>
        <div style={{ marginBottom: 44, maxWidth: 640 }}>
          <div style={EBB}>Our installation process</div>
          <h2 style={{ ...HB, margin: '12px 0 14px' }}>From your first bill to free energy</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>A transparent, six-step journey — you always know exactly where your rooftop project stands.</p>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {steps.map(([t, d, ic], i) => (
            <div key={t} style={{ position: 'relative', padding: 28, borderRadius: 16, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LB name={ic} size={22} /></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 500, color: 'var(--color-border-default)' }}>0{i + 1}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--color-text-primary)', marginBottom: 8 }}>{t}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{d}</div>
            </div>
          ))}
        </div>
      </RevB>
    </section>
  );
}

// ── Trusted solar brands ───────────────────────────────────────────────────
function TrustedBrands() {
  const brands = [
    ['Adani Solar', 'TOPCon modules up to 620 Wp', 'Tier-1 · 30-yr performance'],
    ['Waaree', 'TOPCon 580 Wp modules', 'Tier-1 · 30-yr performance'],
    ['Rayzon Solar', 'Mono bifacial 545 Wp', 'High-efficiency bifacial'],
  ];
  return (
    <section id="brands" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <RevB style={WB}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={EBB}>Trusted solar brands</div>
          <h2 style={{ ...HB, margin: '12px auto 14px', maxWidth: 720 }}>We install only Tier-1 modules</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 auto', maxWidth: 600 }}>Your rooftop deserves modules that still perform in year 25. We fit market-leading panels, each backed by a 30-year brand performance warranty.</p>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {brands.map(([n, spec, tag]) => (
            <div key={n} style={{ padding: 30, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><LB name="sun" size={26} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--color-text-primary)', marginBottom: 6 }}>{n}</div>
              <div style={{ fontSize: 14.5, color: 'var(--color-text-secondary)', marginBottom: 12 }}>{spec}</div>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-brand-primary)', background: 'var(--color-brand-primary-subtle)', padding: '5px 12px', borderRadius: 'var(--radius-pill)' }}>{tag}</div>
            </div>
          ))}
        </div>
      </RevB>
    </section>
  );
}

// ── Quality components (BOS) ───────────────────────────────────────────────
function QualityComponents() {
  const parts = [
    ['cpu', 'Inverters', 'Service-oriented brands like Solaryaan and Polycab, with 8\u201310 year brand warranties.'],
    ['toggle-right', 'Protection & switchgear', 'IP65-rated ACDB/DCDB boxes with MCB & SPD from Schneider, Havells, C&S, Elmex, and Finder.'],
    ['cable', 'Cabling', 'Polycab AC and DC solar cables rated for decades of UV and weather exposure.'],
    ['wrench', 'Mounting structure', 'Hot-dip galvanised HDGI pipe structures engineered for high wind loads.'],
    ['zap', 'Earthing & safety', 'Chemical-maintenance-free triple earthing with certified earthing kits and LA protection.'],
    ['activity', 'Monitoring', 'App-based generation monitoring so you can see your rooftop performing every day.'],
  ];
  return (
    <section id="components" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <RevB style={WB}>
        <div style={{ marginBottom: 44, maxWidth: 640 }}>
          <div style={EBB}>Quality components</div>
          <h2 style={{ ...HB, margin: '12px 0 14px' }}>Every part is a brand you can trust</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0 }}>A rooftop system is only as reliable as its weakest component. We specify reputed brands end to end — from the inverter to the last cable clip.</p>
        </div>
        <div className="se-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {parts.map(([ic, t, d]) => (
            <div key={t} className="se-card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 24, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)', transition: 'transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 11, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LB name={ic} size={21} /></span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--color-text-primary)', marginBottom: 5 }}>{t}</div><div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{d}</div></div>
            </div>
          ))}
        </div>
      </RevB>
    </section>
  );
}

// ── Documents required + EMI/financing (two-up band) ───────────────────────
function DocumentsFinancing() {
  const docs = ['Copy of your latest electricity bill', 'Cancelled cheque or bank passbook copy', 'Copy of your Aadhaar card', 'Active mobile number'];
  return (
    <section id="documents" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-canvas)' }}>
      <RevB style={{ ...WB, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px,3vw,28px)' }} className="se-2col">
        <div style={{ padding: 'clamp(28px,3vw,40px)', borderRadius: 20, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)' }}>
          <div style={EBB}>Documents required</div>
          <h2 style={{ ...HB, fontSize: 'clamp(1.6rem,2.6vw,2rem)', margin: '12px 0 10px' }}>What you’ll need to start</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: '0 0 24px' }}>Just four simple documents — and the name on your electricity bill and bank account should match.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {docs.map((d) => (
              <div key={d} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 16px', borderRadius: 12, background: 'var(--color-bg-sunken)' }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LB name="check" size={16} /></span>
                <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-text-primary)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: 'clamp(28px,3vw,40px)', borderRadius: 20, background: 'var(--gradient-navy-depth)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -70, right: -50, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,166,0,.2), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ ...EBB, color: 'var(--solar-400)' }}>EMI &amp; financing</div>
            <h2 style={{ ...HB, color: '#fff', fontSize: 'clamp(1.6rem,2.6vw,2rem)', margin: '12px 0 10px' }}>Go solar on easy EMIs</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', margin: '0 0 22px' }}>Spread the cost of your rooftop with flexible EMI options through our financing partner — and let your electricity savings help cover the instalments.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 26 }}>
              {[['landmark', 'Bajaj Finserv financing partner'], ['calendar', 'Flexible EMI tenures'], ['piggy-bank', 'Savings that offset your instalments']].map(([ic, t]) => (
                <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: 'rgba(255,255,255,.9)' }}><span style={{ width: 34, height: 34, borderRadius: 9, flexShrink: 0, background: 'rgba(242,166,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LB name={ic} size={17} filter={window.SE_SOLAR} /></span>{t}</div>
              ))}
            </div>
            <a href="contact.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '13px 26px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-accent)', color: 'var(--navy-900)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Ask about EMI options <LB name="arrow-right" size={17} filter="none" /></a>
          </div>
        </div>
      </RevB>
    </section>
  );
}

// ── Warranty & support ─────────────────────────────────────────────────────
function WarrantySupport() {
  const cards = [
    ['sun', '30 years', 'Solar module performance warranty', 'Brand-backed by Adani, Waaree, and Rayzon.'],
    ['cpu', '8\u201310 years', 'Inverter warranty', 'From service-oriented brands like Solaryaan and Polycab.'],
    ['shield-check', '5 years', 'O&M support from Team Sattva', 'Scheduled maintenance and rapid fault response.'],
    ['infinity', '25 years', 'Of free rooftop energy', 'With a payback of just 3\u20134 years and 25\u201330% ROI.'],
  ];
  return (
    <section id="warranty" style={{ padding: 'clamp(64px,8vw,100px) clamp(20px,4vw,44px)', background: 'var(--color-bg-sunken)' }}>
      <RevB style={WB}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={EBB}>Warranty &amp; support</div>
          <h2 style={{ ...HB, margin: '12px auto 0', maxWidth: 720 }}>Cover that lasts as long as your roof</h2>
        </div>
        <div className="se-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {cards.map(([ic, big, t, d]) => (
            <div key={t} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--color-border-subtle)', background: 'var(--color-bg-surface)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 11, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><LB name={ic} size={21} /></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 'clamp(1.6rem,2.2vw,2rem)', color: 'var(--color-brand-primary)', letterSpacing: '-0.02em', marginBottom: 6 }}>{big}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5, color: 'var(--color-text-primary)', marginBottom: 6, lineHeight: 1.3 }}>{t}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{d}</div>
            </div>
          ))}
        </div>
      </RevB>
    </section>
  );
}

Object.assign(window, { WhyChoose, InstallProcess, TrustedBrands, QualityComponents, DocumentsFinancing, WarrantySupport });
