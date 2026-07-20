// Contact page content.
const { LucideIcon, Reveal, SEImg } = window;
const CW = window.SE_WRAP, CEB = window.SE_EYEBROW, CH2 = window.SE_H2;

function ContactHero() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(56px,7vw,90px) clamp(20px,4vw,44px) clamp(32px,4vw,44px)', overflow: 'hidden', background: 'var(--color-bg-canvas)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh-subtle)', pointerEvents: 'none' }} />
      <div style={{ ...CW, position: 'relative', maxWidth: 760 }}>
        <div style={CEB}>Contact</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', lineHeight: 1.05, letterSpacing: '-0.04em', color: 'var(--color-text-primary)', margin: '14px 0 18px' }}>Let's build your energy system.</h1>
        <p style={{ fontSize: 'clamp(1rem,1.4vw,1.2rem)', lineHeight: 1.6, color: 'var(--color-text-secondary)', margin: 0, maxWidth: 600 }}>Tell us about your site and we'll respond with a modelled proposal within two working days. Prefer to talk? Our engineers are a phone call away.</p>
      </div>
    </section>
  );
}

function ContactMain() {
  const [sent, setSent] = React.useState(false);
  const [tab, setTab] = React.useState('Customer');
  return (
    <section style={{ padding: '0 clamp(20px,4vw,44px) clamp(56px,7vw,88px)', background: 'var(--color-bg-canvas)' }}>
      <div style={{ ...CW, display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }} className="se-2col">
        <div>
          {[['phone', 'Call or WhatsApp', '+91 88664 26625', 'Akash Bhai · Mon–Sat, 9am–7pm'], ['mail', 'Email', 'hello@sattvaenergies.in', 'We reply within 2 working days'], ['handshake', 'Dealer & partnerships', 'partners@sattvaenergies.in', 'Become a Sattva channel partner'], ['badge-indian-rupee', 'Subsidy help desk', 'PM Surya Ghar assistance', 'We handle your full application']].map(([ic, t, v, sub]) => (
            <div key={t} style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LucideIcon name={ic} size={20} /></span>
              <div><div style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginBottom: 3 }}>{t}</div><div style={{ fontWeight: 600, fontSize: 16, color: 'var(--color-text-primary)' }}>{v}</div><div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 2 }}>{sub}</div></div>
            </div>
          ))}
          <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[['Vadodara', 'HQ · A/9 Karelibaug Industrial Estate, Nr Jalaram Temple, Karelibaug – 390018'], ['Ahmedabad', 'Rooftop projects across the city'], ['Surat', 'Rooftop projects across the city']].map(([c, a]) => (
              <div key={c} style={{ padding: 16, borderRadius: 14, background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
                <LucideIcon name="map-pin" size={17} style={{ marginBottom: 8 }} /><div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--color-text-primary)' }}>{c}</div><div style={{ fontSize: 12.5, color: 'var(--color-text-tertiary)', marginTop: 2, lineHeight: 1.4 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--color-bg-surface)', borderRadius: 22, padding: 'clamp(24px,3vw,40px)', border: '1px solid var(--color-border-subtle)', boxShadow: 'var(--shadow-md)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}><LucideIcon name="check" size={32} /></div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--color-text-primary)', marginBottom: 10 }}>Enquiry received.</div>
              <p style={{ fontSize: 15.5, color: 'var(--color-text-secondary)', margin: '0 auto', maxWidth: 340 }}>Thank you. A Sattva engineer will reach out within two working days with next steps.</p>
            </div>
          ) : (<>
            <div style={{ display: 'flex', gap: 6, marginBottom: 26, background: 'var(--color-bg-sunken)', padding: 5, borderRadius: 'var(--radius-pill)' }}>
              {['Customer', 'Dealer'].map((t) => (
                <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'var(--font-body)', background: tab === t ? 'var(--color-bg-surface)' : 'transparent', color: tab === t ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)', boxShadow: tab === t ? 'var(--shadow-sm)' : 'none', transition: 'all .18s' }}>{t === 'Customer' ? 'I need solar' : 'I want to be a dealer'}</button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div><label style={lbl}>Full name</label><input className="se-input" required /></div>
                <div><label style={lbl}>Phone</label><input className="se-input" required /></div>
              </div>
              <div style={{ marginBottom: 14 }}><label style={lbl}>{tab === 'Dealer' ? 'Company name' : 'Work / personal email'}</label><input className="se-input" type={tab === 'Dealer' ? 'text' : 'email'} required /></div>
              {tab === 'Customer' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <div><label style={lbl}>Segment</label><select className="se-input" style={{ appearance: 'none' }} defaultValue=""><option value="" disabled>Select…</option><option>Residential rooftop</option><option>Commercial rooftop</option><option>Industrial rooftop</option><option>Solar consultation</option><option>Solar maintenance</option></select></div>
                  <div><label style={lbl}>Avg monthly bill</label><select className="se-input" style={{ appearance: 'none' }} defaultValue=""><option value="" disabled>Select…</option><option>Under ₹5,000</option><option>₹5,000–15,000</option><option>₹15,000–50,000</option><option>Over ₹50,000</option></select></div>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <div><label style={lbl}>City / region</label><input className="se-input" required /></div>
                  <div><label style={lbl}>Business type</label><select className="se-input" style={{ appearance: 'none' }} defaultValue=""><option value="" disabled>Select…</option><option>EPC contractor</option><option>Electrical retailer</option><option>System integrator</option><option>New to solar</option></select></div>
                </div>
              )}
              <div style={{ marginBottom: 18 }}><label style={lbl}>Message</label><textarea className="se-input" rows="4" placeholder={tab === 'Dealer' ? 'Tell us about your business and target market' : 'Tell us about your site, roof, or requirements'} style={{ resize: 'vertical' }}></textarea></div>
              <button type="submit" className="se-btn-primary" style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', border: 'none', fontWeight: 600, fontSize: 16, fontFamily: 'var(--font-body)', cursor: 'pointer' }}>{tab === 'Dealer' ? 'Submit dealer enquiry' : 'Request my proposal'}</button>
              <p style={{ fontSize: 12.5, color: 'var(--color-text-tertiary)', textAlign: 'center', margin: '14px 0 0' }}>By submitting you agree to our privacy policy. No spam, ever.</p>
            </form>
          </>)}
        </div>
      </div>
    </section>
  );
}
const lbl = { display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 7 };

function ContactMap() {
  return (
    <section style={{ padding: '0 clamp(20px,4vw,44px) clamp(64px,8vw,100px)', background: 'var(--color-bg-canvas)' }}>
      <Reveal style={{ ...CW, height: 'clamp(280px,34vw,420px)', borderRadius: 24, overflow: 'hidden', border: '1px solid var(--color-border-subtle)', boxShadow: 'var(--shadow-md)' }}>
        <SEImg src={window.SE_IMG.contactMap.url} alt={window.SE_IMG.contactMap.alt} />
      </Reveal>
    </section>
  );
}

Object.assign(window, { ContactHero, ContactMain, ContactMap });
