// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.hero-content, .section-header, .about-text, .stat-card, .product-card, .footer-grid, .timeline-item, .timeline-quote');

// Add reveal class initially
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// Product Data
const products = {
  'tanks-vessels': {
    title: 'Tanks & Vessels',
    image: '/assets/images/product-tank.png',
    description: 'Our Industrial FRP Tanks and Vessels are engineered for superior chemical resistance and durability. Manufactured using high-grade FRP (Fiber Reinforced Plastic), PP-FRP, PVC-FRP, and PVDF-FRP, these vessels are the ideal solution for storing corrosive chemicals, acids, and alkalis. Designed to withstand high temperatures and harsh industrial environments, they offer a lightweight yet robust alternative to traditional metal tanks. We utilize advanced filament winding and hand lay-up techniques to ensure structural integrity and leak-proof performance.',
    specs: [
      'Material: FRP, PP-FRP, PVC-FRP, PVDF-FRP',
      'Capacity: Custom sizes from 500L to 100KL+',
      'Types: Vertical, Horizontal, Rectangular, Cylindrical',
      'Application: Chemical Storage, Reaction Vessels, Acid Pickling',
      'Features: High corrosion resistance, UV stabilized, Long service life'
    ]
  },
  'pultrusion': {
    title: 'Pultrusion Products',
    image: '/assets/images/product-tank.png',
    description: 'Our Pultrusion Products represent the pinnacle of composite engineering, offering exceptional strength-to-weight ratios. Produced through a continuous molding process, these FRP profiles—including angles, channels, beams, and rods—are designed to replace traditional steel and aluminum in structural applications. They are non-conductive, electromagnetically transparent, and highly resistant to corrosion, making them perfect for use in chemical plants, electrical substations, and coastal infrastructure.',
    specs: [
      'Products: Angles, Channels, I-Beams, Rods, Tubes',
      'Material: FRP / GRP (Glass Reinforced Plastic)',
      'Features: High load bearing, Non-conductive, Lightweight',
      'Application: Structural supports, Walkways, Ladders, Handrails'
    ]
  },
  'fume-exhaust': {
    title: 'Fume Exhaust Systems',
    image: '/assets/images/product-blower.png',
    description: 'Our Industrial Fume Exhaust Systems are critical for maintaining a safe and compliant working environment. These comprehensive systems are designed to effectively capture, transport, and treat toxic fumes, gases, and dust generated during industrial processes. The system includes high-efficiency capture hoods, corrosion-resistant FRP ducting, dampers, and wet scrubbers to neutralize harmful pollutants before release. Essential for chemical processing, plating, and pickling industries.',
    specs: [
      'Components: Hoods, Ducts, Dampers, Scrubbers, Centrifugal Blowers',
      'Material: FRP, PP-FRP, PVC-FRP for corrosion resistance',
      'Design: Custom engineered for specific airflow (CFM) and static pressure',
      'Efficiency: 99%+ removal of toxic fumes and particulate matter'
    ]
  },
  'metallic-storage': {
    title: 'Metallic Bulk Storage Solutions',
    image: '/assets/images/product-tank.png',
    description: 'We provide large-scale Metallic Bulk Storage Solutions fabricated with precision for the storage of bulk chemicals, petroleum products, and water. Constructed from high-quality Mild Steel (MS) and Stainless Steel (SS), these tanks are designed to meet rigorous international standards like API 650. Our fabrication process includes rigorous quality checks, including radiography and hydro-testing, ensuring safety and reliability for high-volume storage needs.',
    specs: [
      'Material: Mild Steel (MS), Stainless Steel (SS 304/316)',
      'Capacity: High volume bulk storage (up to 500KL)',
      'Standards: API 650 / IS Standards compliant',
      'Testing: Radiography, Hydro testing, Ultrasonic testing'
    ]
  },
  'waste-water': {
    title: 'Effluent Treatment Plant',
    image: '/assets/images/product-treatment.png',
    description: 'Our Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP) are advanced environmental solutions designed to purify industrial wastewater. We employ multi-stage treatment processes including physical, chemical, and biological methods (MBBR, SBR, MBR) to remove toxic contaminants, heavy metals, and organic pollutants. Our systems ensure zero liquid discharge (ZLD) compliance and allow for the recycling of treated water for non-potable uses.',
    specs: [
      'Types: ETP, STP, WTP (Water Treatment Plant)',
      'Technologies: MBBR, SBR, MBR, UASB, Activated Sludge',
      'Capacity: 5 KLD to 1 MLD+ custom designed',
      'Automation: Fully automated PLC / SCADA based operation'
    ]
  },
  'toilet-cleaner': {
    title: 'Toilet Cleaner Plants',
    image: '/assets/images/product-treatment.png',
    description: 'We offer turnkey manufacturing plant setups for the production of toilet cleaners, floor cleaners, and home care products. Our plants are designed for efficiency and hygiene, featuring high-grade Stainless Steel (SS 316) or Polypropylene (PP) mixing vessels, storage tanks, and automated filling lines. The system ensures consistent product quality, precise mixing ratios, and safe handling of corrosive ingredients like hydrochloric acid.',
    specs: [
      'Capacity: 500 Ltr to 5000 Ltr per batch',
      'Material: Contact parts in SS 316 / PP for chemical resistance',
      'Includes: High-speed Mixer, Storage Tanks, Filling Machine',
      'Operation: Semi-automatic or Fully Automatic options'
    ]
  },
  'pickling-lines': {
    title: 'Continuous Pickling Lines',
    image: '/assets/images/product-tank.png',
    description: 'Our Automated Continuous Pickling Lines are designed for the steel wire, tube, and strip industries to efficiently remove surface impurities and scale. These lines feature corrosion-resistant PP/FRP pickling tanks, fume extraction systems, and acid heating units. We offer both push-pull and continuous loop designs that optimize acid consumption and ensure a uniform, high-quality surface finish on metal products.',
    specs: [
      'Type: Push-pull, Continuous Wire/Strip Pickling',
      'Material: Heavy-duty PP / FRP Tanks',
      'Features: Integrated fume extraction, Acid heating & recirculation',
      'Application: Steel wire, Tube, and Strip processing'
    ]
  },
  'frp-moulded': {
    title: 'FRP Moulded Equipments',
    image: '/assets/images/product-tank.png',
    description: 'We specialize in custom FRP Moulded Equipments, delivering tailored solutions for complex industrial needs. From intricate pipe fittings and flanges to specialized covers and machine guards, our moulded products offer superior finish and dimensional accuracy. Utilizing processes like Resin Transfer Moulding (RTM) and Compression Moulding, we produce components that are lightweight, high-strength, and resistant to chemical attack.',
    specs: [
      'Process: Hand Layup, RTM, Compression Moulding',
      'Products: Pipes, Flanges, Bends, Custom shapes, Machine Guards',
      'Resin: Polyester, Vinyl Ester, Epoxy based on application',
      'Finish: Smooth internal and external surface, Gel-coated'
    ]
  },
  'roofing-sheets': {
    title: 'FRP Roofing Sheets',
    image: '/assets/images/product-tank.png',
    description: 'Our FRP Roofing Sheets are the preferred choice for industrial roofing and cladding, offering excellent light transmission and weather resistance. Unlike metal sheets, they do not rust or corrode in humid or chemical environments. Available in various profiles (corrugated, trapezoidal) and colors, they are UV stabilized to prevent yellowing and provide a long service life with minimal maintenance.',
    specs: [
      'Profile: Corrugated, Trapezoidal, Plain to match metal profiles',
      'Thickness: 1.5mm to 4mm standard',
      'Features: UV Stabilized, Translucent (for skylights) / Opaque',
      'Life: 15-20 years service life, Hail and impact resistant'
    ]
  },
  'blowers': {
    title: 'Centrifugal Blowers',
    image: '/assets/images/product-blower.png',
    description: 'High-performance Industrial Centrifugal Blowers designed for demanding air handling applications. Constructed from corrosion-resistant materials like PP, FRP, and SS, these blowers are ideal for exhausting corrosive fumes and gases. They feature dynamically balanced impellers for vibration-free operation and are available in various pressure and volume configurations to suit specific ventilation needs.',
    specs: [
      'Type: SISW (Single Inlet Single Width), DIDW',
      'Material: PP, FRP, MS-FRP, Stainless Steel',
      'Pressure: Low to High pressure (up to 1000 mmWG)',
      'Drive: Direct drive or V-Belt drive configurations'
    ]
  },
  'moulded-pultruded-gratings': {
    title: 'Machine Moulded and Pultruded Gratings',
    image: '/assets/images/product-tank.png',
    description: 'We offer a premium range of FRP Gratings, available in both Machine Moulded and Pultruded variants. Our Moulded Gratings offer bi-directional strength and excellent impact resistance, making them perfect for platforms and walkways. Pultruded Gratings provide superior unidirectional strength for heavy load-bearing applications over longer spans. Both types are non-conductive, fire-retardant, and corrosion-resistant, offering a safe and durable alternative to steel gratings.',
    specs: [
      'Types: Machine Moulded (Bi-directional), Pultruded (Unidirectional)',
      'Surface: Anti-skid grit, Meniscus, or Chequered plate top',
      'Features: Fire retardant, Non-sparking, UV resistant',
      'Application: Walkways, Platforms, Trench covers, Stair treads'
    ]
  }
};

// Check for Product Page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId && products[productId]) {
  const product = products[productId];
  const pTitle = document.getElementById('p-title');
  const pImage = document.getElementById('p-image');
  const pDesc = document.getElementById('p-desc');
  const pSpecs = document.getElementById('p-specs');

  if (pTitle) {
    pTitle.textContent = product.title;
    document.title = `${product.title} | Ghaziabad Polymers`;
    pImage.src = product.image;
    pImage.alt = product.title;
    pDesc.textContent = product.description;

    product.specs.forEach(spec => {
      const li = document.createElement('li');
      li.textContent = spec;
      li.style.marginBottom = '0.5rem';
      pSpecs.appendChild(li);
    });
  }
}

// 3D Tilt Effect for Product Cards
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });
});
