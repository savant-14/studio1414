// Sattva Energies — shared site chrome: premium sticky nav (mega-menu) + footer.
// Tokens only. Exports SiteNav, SiteFooter, Wordmark, LucideIcon, useReveal to window.
const SE_LUCIDE = (n) => `https://unpkg.com/lucide-static@latest/icons/${n}.svg`;
// forest-600 tint for icons on light chips
const SE_GREEN = 'invert(31%) sepia(18%) saturate(1642%) hue-rotate(103deg) brightness(94%)';
const SE_SOLAR = 'invert(72%) sepia(58%) saturate(1200%) hue-rotate(1deg) brightness(102%)';

function LucideIcon({ name, size = 20, filter = SE_GREEN, style }) {
  return <img src={SE_LUCIDE(name)} width={size} height={size} alt="" style={{ filter, display: 'block', ...style }} />;
}

// Scroll-reveal hook — fade+rise once in view, respects reduced motion.
function useReveal() {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return; }
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }); }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, shown];
}
function Reveal({ children, delay = 0, y = 24, as = 'div', style, ...rest }) {
  const [ref, shown] = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} style={{ opacity: shown ? 1 : 0, transform: shown ? 'none' : `translateY(${y}px)`, transition: `opacity .7s var(--ease-emphasized) ${delay}ms, transform .7s var(--ease-emphasized) ${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

// Responsive, lazy, object-fit image with hover-zoom and an onError fallback
// so a failed URL never renders broken. Reads URLs from window.SE_IMG.
function SEImg({ src, alt, style, imgStyle }) {
  const onErr = (e) => { if (e.target.dataset.fb) return; e.target.dataset.fb = '1'; e.target.src = (window.SE_IMG && window.SE_IMG.fallback) || src; };
  return (
    <div className="se-zoom" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}>
      <img className="se-img" src={src} alt={alt || ''} loading="lazy" decoding="async" onError={onErr} style={imgStyle} />
    </div>
  );
}

function Wordmark({ size = 22, light = false }) {
  return (
    <a href="index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
      <span style={{ width: size * 1.15, height: size * 1.15, borderRadius: 8, background: 'var(--gradient-solar-flow)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <img src={SE_LUCIDE('sun')} width={size * 0.68} height={size * 0.68} alt="" style={{ filter: 'invert(1)' }} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, letterSpacing: '-0.03em', color: light ? '#fff' : 'var(--color-text-primary)', lineHeight: 1 }}>
        Sattva<span style={{ color: light ? 'var(--solar-400)' : 'var(--color-brand-primary)' }}> Energies</span>
      </span>
    </a>
  );
}

const SE_MENUS = {
  Products: { href: 'products.html', cols: [['Solar panels', 'Mono-PERC & bifacial modules up to 620W', 'sun'], ['Inverters', 'String, hybrid & micro-inverters', 'plug'], ['Mounting structures', 'Rooftop mounting for every roof type', 'wrench'], ['Solar kits', 'Pre-engineered rooftop bundles', 'package'], ['Accessories', 'Cabling, monitoring & safety', 'cable'], ['Net metering', 'Grid-tie & metering hardware', 'gauge'], ['Downloads', 'Datasheets & certifications', 'file-down'], ['Get a quote', 'Talk to a solar engineer', 'file-check']] },
  Solutions: { href: 'solutions.html', cols: [['Residential rooftop', 'Rooftop solar for homes', 'home'], ['Commercial rooftop', 'Offices, retail & warehouses', 'building-2'], ['Industrial rooftop', 'Factories & large facilities', 'factory'], ['Solar EPC', 'End-to-end rooftop engineering', 'hard-hat'], ['Solar consultation', 'Free site & savings analysis', 'clipboard-list'], ['Solar maintenance', 'Ongoing O&M and monitoring', 'shield-check']] },
  Company: { href: 'index.html#sustainability', cols: [['About', 'Our story & leadership', 'users'], ['Projects', 'Rooftop solar across Gujarat', 'map-pin'], ['Technology', 'How we engineer yield', 'cpu'], ['Solar subsidy', 'PM Surya Ghar assistance', 'badge-indian-rupee'], ['Sustainability', 'ESG & CSR impact', 'leaf'], ['Careers', 'Join the team', 'briefcase'], ['Media', 'News & press', 'newspaper'], ['Blog', 'Insights & guides', 'book-open']] },
};

function SiteNav({ active }) {
  const [open, setOpen] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const floating = scrolled || open;
  const topLinks = [['Products', 'products.html'], ['Solutions', 'solutions.html'], ['Subsidy', 'index.html#subsidy'], ['Projects', 'index.html#projects'], ['Company', 'index.html#sustainability']];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200, fontFamily: 'var(--font-body)' }} onMouseLeave={() => setOpen(null)}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(20px,4vw,44px)', height: 68, background: floating ? 'var(--glass-bg)' : 'transparent', backdropFilter: floating ? 'saturate(180%) blur(14px)' : 'none', WebkitBackdropFilter: floating ? 'saturate(180%) blur(14px)' : 'none', borderBottom: `1px solid ${floating ? 'var(--color-border-subtle)' : 'transparent'}`, transition: 'background .3s var(--ease-standard), border-color .3s var(--ease-standard)' }}>
        <Wordmark size={21} />
        <nav className="se-nav-links" style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {topLinks.map(([label, href]) => {
            const hasMenu = SE_MENUS[label];
            const isActive = active === label || open === label;
            return (
              <a key={label} href={href} onMouseEnter={() => setOpen(hasMenu ? label : null)}
                style={{ padding: '8px 13px', fontSize: 14, fontWeight: 500, borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none', color: isActive ? 'var(--color-brand-primary)' : 'var(--color-text-primary)', background: open === label ? 'var(--color-brand-primary-subtle)' : 'transparent', transition: 'color .15s, background .15s' }}>
                {label}{hasMenu && <span style={{ fontSize: 9, opacity: .55, transform: open === label ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>}
              </a>
            );
          })}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a href="#" className="se-nav-links" style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Dealer login</a>
          <a href="contact.html" style={{ padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none', boxShadow: floating ? 'none' : 'var(--shadow-sm)', transition: 'background .18s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-brand-primary-hover)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-brand-primary)'}>Get a proposal</a>
          <button aria-label="Menu" className="se-nav-burger" onClick={() => setMobile(true)} style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer', padding: 6 }}><LucideIcon name="menu" size={24} filter="none" /></button>
        </div>
      </div>
      {open && SE_MENUS[open] && (
        <div onMouseEnter={() => setOpen(open)} style={{ position: 'absolute', top: 68, left: 0, right: 0, background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-subtle)', boxShadow: 'var(--shadow-lg)', padding: '30px clamp(20px,4vw,44px) 34px', animation: 'seFade .18s var(--ease-standard)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {SE_MENUS[open].cols.map(([t, d, ic]) => (
              <a key={t} href={SE_MENUS[open].href} style={{ display: 'flex', gap: 13, alignItems: 'flex-start', padding: 12, borderRadius: 12, textDecoration: 'none', transition: 'background .15s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg-sunken)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span style={{ width: 38, height: 38, borderRadius: 9, flexShrink: 0, background: 'var(--color-brand-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LucideIcon name={ic} size={18} /></span>
                <span><span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--color-text-primary)', marginBottom: 3 }}>{t}</span><span style={{ display: 'block', fontSize: 12.5, color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>{d}</span></span>
              </a>
            ))}
          </div>
        </div>
      )}
      {mobile && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'var(--color-bg-surface)', padding: '20px clamp(20px,4vw,44px)', display: 'flex', flexDirection: 'column', animation: 'seFade .2s var(--ease-standard)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <Wordmark size={21} />
            <button aria-label="Close" onClick={() => setMobile(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><LucideIcon name="x" size={26} filter="none" /></button>
          </div>
          {[['Products', 'products.html'], ['Solutions', 'solutions.html'], ['Subsidy', 'index.html#subsidy'], ['Projects', 'index.html#projects'], ['Sustainability', 'index.html#sustainability'], ['Contact', 'contact.html']].map(([l, h]) => (
            <a key={l} href={h} style={{ padding: '16px 4px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--color-text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--color-border-subtle)' }}>{l}</a>
          ))}
          <a href="contact.html" style={{ marginTop: 28, textAlign: 'center', padding: '15px', borderRadius: 'var(--radius-pill)', background: 'var(--color-brand-primary)', color: '#fff', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>Get a proposal</a>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  const cols = {
    Products: [['Solar panels', 'products.html'], ['Inverters', 'products.html'], ['Mounting structures', 'products.html'], ['Solar kits', 'products.html'], ['Accessories', 'products.html']],
    Solutions: [['Residential rooftop', 'solutions.html'], ['Commercial rooftop', 'solutions.html'], ['Industrial rooftop', 'solutions.html'], ['Solar EPC', 'solutions.html'], ['Solar maintenance', 'solutions.html']],
    Company: [['About', 'index.html#sustainability'], ['Projects', 'index.html#projects'], ['Solar subsidy', 'index.html#subsidy'], ['CSR & ESG', 'index.html#sustainability'], ['Careers', '#']],
    Resources: [['Blog', 'index.html#resources'], ['Case studies', 'index.html#cases'], ['Downloads', '#'], ['Media', '#'], ['Contact', 'contact.html']],
  };
  const socials = {
    linkedin: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z',
    twitter: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z',
    youtube: 'M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 00.5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 002.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z',
    instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.87 5.87 0 00.63 4.14c-.3.76-.5 1.64-.56 2.9C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 002.12-1.38 5.87 5.87 0 001.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 00-1.38-2.12A5.87 5.87 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z',
    facebook: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z',
  };
  return (
    <footer style={{ background: 'var(--navy-950)', color: '#fff', padding: 'clamp(56px,7vw,80px) clamp(20px,4vw,44px) 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="se-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div>
            <Wordmark size={22} light />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.65, maxWidth: 280, margin: '18px 0 22px' }}>Gujarat's trusted rooftop solar installation partner — from consultation and government subsidy assistance to installation and maintenance, by one certified team.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {Object.entries(socials).map(([s, path]) => (
                <a key={s} href="#" aria-label={s} style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .18s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-brand-primary)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,.07)'}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,.85)" aria-hidden="true"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(cols).map(([h, links]) => (
            <div key={h}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,.4)', marginBottom: 16, textTransform: 'uppercase' }}>{h}</div>
              {links.map(([l, href]) => <a key={l} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,.72)', marginBottom: 11, textDecoration: 'none', transition: 'color .15s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,.72)'}>{l}</a>)}
            </div>
          ))}
        </div>
        <div className="se-footer-legal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, paddingTop: 26, fontSize: 13, color: 'rgba(255,255,255,.5)', flexWrap: 'wrap' }}>
          <span>© 2026 Sattva Energies · Karelibaug, Vadodara, Gujarat · Registered PM Surya Ghar vendor</span>
          <span style={{ display: 'flex', gap: 22 }}><a href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Privacy</a><a href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Terms</a><a href="#" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Dealer login</a></span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, SiteFooter, Wordmark, LucideIcon, Reveal, useReveal, SEImg, SE_LUCIDE, SE_GREEN, SE_SOLAR });
