/* Sattva Energies — central image configuration.
 * All site imagery lives here. Replace the photo IDs / URLs below with your own
 * assets later — every page reads from window.SE_IMG, so this is the only file
 * you need to touch. URLs are royalty-free Unsplash photos, delivered responsively
 * (auto-format, cropped, quality 80) and lazy-loaded via the SEImg component.
 */
(function () {
  // Unsplash delivery helper: stable photo id -> responsive, cropped URL.
  const U = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

  // Curated, verified royalty-free photo IDs (Unsplash).
  const ID = {
    solarField:      '1509391366360-2e959784a276', // utility solar array
    solarRows:       '1466611653911-95081537e5b7', // solar farm rows
    solarSky:        '1454789548928-9efd52dc4031', // panel against sky
    solarClose:      '1508514177221-188b1cf16e9d', // panels close-up
    residentialRoof: '1613665813446-82a78c468a1d', // rooftop solar on home
    officeTower:     '1560472354-b33ff0c44a43',    // corporate glass tower
    officeInterior:  '1497215728101-856f4ea42174', // modern office
    forestRoad:      '1497436072909-60f360e1d4b1', // green landscape
    greenHills:      '1473341304170-971dccb5ac1e', // rolling green hills
    team:            '1521737604893-d14cc237f11d', // team / customers
    engineer:        '1581092160607-ee22621dd758', // engineer with tech
    windTurbine:     '1466611653911-95081537e5b7', // (reuse) energy scene
  };

  // Real Sattva Energies rooftop project photographs (local assets).
  const REAL = {
    carport:     'assets/project-carport.jpg',     // commercial solar carport
    village:     'assets/project-village.jpg',     // panels on metal-sheet factory roof
    residential: 'assets/project-residential.jpg', // elevated residential rooftop array
    twotier:     'assets/project-twotier.jpg',     // two-tier rooftop terrace system
    howwework:   'assets/project-howwework.jpg',   // rooftop carport array
  };

  window.SE_IMG = {
    U, ID, REAL,
    fallback: U(ID.solarField, 1200), // shown if any image fails to load

    // Homepage — featured projects carousel (3) — real Sattva project photos
    projects: [
      { url: REAL.carport, alt: 'Rooftop solar carport across commercial buildings in Gujarat' },
      { url: REAL.village, alt: 'Rooftop solar array on a factory metal-sheet roof in Gujarat' },
      { url: REAL.residential, alt: 'Elevated residential rooftop solar array in Vadodara' },
    ],

    // Homepage — sustainability / ESG-CSR
    sustainability: { url: U(ID.forestRoad), alt: 'Sunlight through a green forest, symbolising clean-energy impact' },

    // Homepage — case studies (3)
    cases: [
      { url: REAL.village, alt: 'Industrial rooftop solar reducing a Surat textile plant\u2019s grid draw' },
      { url: REAL.carport, alt: 'Rooftop solar carport across commercial buildings in Ahmedabad' },
      { url: REAL.twotier, alt: 'Residential rooftops solarised with government subsidy in Vadodara' },
    ],

    // Homepage — blog / resources (3)
    blog: [
      { url: U(ID.solarClose), alt: 'Close-up of solar modules for a proposal-reading guide' },
      { url: U(ID.solarSky),   alt: 'Bifacial solar panels under a clear sky' },
      { url: U(ID.team),       alt: 'Sattva team celebrating 2.4 GW of deployed capacity' },
    ],

    // Products page — three product shots per category
    products: {
      Panels:      [{ url: U(ID.solarSky), alt: 'Sattva bifacial rooftop solar module' }, { url: U(ID.solarClose), alt: 'All-black mono-PERC residential rooftop module' }, { url: U(ID.solarField), alt: 'Half-cut commercial rooftop solar module' }],
      Inverters:   [{ url: U(ID.engineer), alt: 'Rooftop solar grid-tie inverter installation' }, { url: U(ID.officeInterior), alt: 'Three-phase string inverter for commercial rooftops' }, { url: U(ID.solarClose), alt: 'Module-level micro-inverter on a roof' }],
      Mounting:    [{ url: U(ID.solarClose), alt: 'Aluminium rooftop solar mounting rail system' }, { url: U(ID.solarRows), alt: 'Clamp mounting on an industrial metal roof' }, { url: U(ID.residentialRoof), alt: 'Ballasted tilt frames on a flat RCC rooftop' }],
      Kits:        [{ url: U(ID.residentialRoof), alt: 'Turnkey residential rooftop solar kit installed' }, { url: U(ID.solarRows), alt: 'Pre-engineered commercial rooftop solar kit' }, { url: U(ID.solarField), alt: 'Industrial rooftop solar kit for factory sheds' }],
      Accessories: [{ url: U(ID.engineer), alt: 'Home energy monitor with panel-level telemetry' }, { url: U(ID.officeInterior), alt: 'Bidirectional net-metering hardware' }, { url: U(ID.solarClose), alt: 'DC isolation and rapid-shutdown safety kit' }],
    },

    // Solutions page — six segment images
    segments: [
      { url: REAL.residential, alt: 'Rooftop solar on a residential home in Gujarat' },
      { url: REAL.carport,     alt: 'Commercial rooftop solar carport on a building in Gujarat' },
      { url: REAL.village,     alt: 'Industrial rooftop solar on a factory roof' },
      { url: REAL.twotier,     alt: 'Solar EPC two-tier rooftop array commissioned in Gujarat' },
      { url: REAL.howwework,   alt: 'Solar consultant assessing a rooftop installation' },
      { url: REAL.village,     alt: 'Technician maintaining a rooftop solar array' },
    ],

    // Contact page — map / office band
    contactMap: { url: U(ID.officeTower, 1600), alt: 'Sattva Energies corporate offices' },
  };
})();
