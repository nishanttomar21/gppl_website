const header = document.querySelector('header');

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
    category: 'storage',
    shortDescription: 'Advanced FRP/PP-FRP chemical storage solutions.',
    image: '/assets/images/frp-tank-new.png',
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
    category: 'structural',
    shortDescription: 'High-strength composite profiles and gratings.',
    image: '/assets/images/pultrusion-products.png',
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
    category: 'pollution',
    shortDescription: 'Industrial toxicity control and air purification.',
    image: '/assets/images/fume-exhaust-system.png',
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
    category: 'storage',
    shortDescription: 'Heavy-duty MS and SS bulk storage tanks.',
    image: '/assets/images/metallic-storage-tank.png',
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
    category: 'pollution',
    shortDescription: 'Zero Liquid Discharge (ZLD) water systems.',
    image: '/assets/images/etp-plant.png',
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
    category: 'machinery',
    shortDescription: 'Automated manufacturing setups for home care.',
    image: '/assets/images/toilet-cleaner-plant.png',
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
    category: 'machinery',
    shortDescription: 'Continuous steel wire and strip processing.',
    image: '/assets/images/pickling-line.png',
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
    category: 'structural',
    shortDescription: 'Tailored composite components and guards.',
    image: '/assets/images/frp-moulded-parts.png',
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
    category: 'structural',
    shortDescription: 'Weather-resistant industrial roofing.',
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
    category: 'pollution',
    shortDescription: 'High-pressure ventilation and exhaust units.',
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
    category: 'structural',
    shortDescription: 'Heavy-duty industrial walkways and platforms.',
    image: '/assets/images/product-tank.png',
    description: 'We offer a premium range of FRP Gratings, available in both Machine Moulded and Pultruded variants. Our Moulded Gratings offer bi-directional strength and excellent impact resistance, making them perfect for platforms and walkways. Pultruded Gratings provide superior unidirectional strength for heavy load-bearing applications over longer spans. Both types are non-conductive, fire-retardant, and corrosion-resistant, offering a safe and durable alternative to steel gratings.',
    specs: [
      'Types: Machine Moulded (Bi-directional), Pultruded (Unidirectional)',
      'Surface: Anti-skid grit, Meniscus, or Chequered plate top',
      'Features: Fire retardant, Non-sparking, UV resistant',
      'Application: Walkways, Platforms, Trench covers, Stair treads'
    ]
  },
  'ventilation': {
    title: 'Turbo Ventilation',
    hidden: true,
    image: '/assets/images/product-blower.png',
    description: 'Our Turbo Ventilation Systems provide eco-friendly, zero-energy ventilation for industrial sheds and warehouses. These wind-driven roof extractors utilize natural wind energy to exhaust hot air, fumes, and humidity, creating a cooler and healthier work environment. Made from high-quality aluminum or stainless steel with sealed bearings, they operate silently and require no electricity or maintenance.',
    specs: [
      'Material: Aluminum / Stainless Steel',
      'Size: 21 inch / 24 inch throat diameter',
      'Operation: Wind driven (Zero power cost)',
      'Features: Weatherproof, Maintenance free, Silent operation',
      'Benefits: Reduces indoor temperature, Removes stale air'
    ]
  },
  'lining': {
    title: 'Protective FRP Lining',
    hidden: true,
    image: '/assets/images/frp-tank-new.png',
    description: 'We offer specialized Protective FRP Lining services for concrete and metal surfaces to prevent corrosion and leakage. Our expert application of chemical-resistant resins and glass fiber reinforcement creates a seamless, impermeable barrier that extends the life of your existing tanks, pits, and floors. Ideal for acid storage areas, ETP tanks, and chemical processing floors.',
    specs: [
      'Surfaces: Concrete tanks, MS tanks, Floors, Gutters',
      'Resins: Isophthalic, Bisphenol, Vinyl Ester, Epoxy',
      'Thickness: 3mm to 10mm as per requirement',
      'Features: Monolithic (joint-free), Chemical resistant, Repairable'
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

// Modern Infinite 3D Carousel Logic (3-Set Buffer)
const carouselContainer = document.querySelector('.carousel-container');
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Generate Product Cards Dynamically
const generateProductCards = () => {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  track.innerHTML = ''; // Clear existing content

  Object.entries(products).forEach(([id, product]) => {
    if (product.hidden) return; // Skip hidden products

    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.dataset.category = product.category || 'all';

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="card-content">
          <h3>${product.title}</h3>
          <p>${product.shortDescription || product.description.split('.')[0] + '.'}</p>
          <a href="product.html?id=${id}" class="style-btn">View Details</a>
        </div>
      </div>
    `;
    track.appendChild(card);
  });
};

// Call generation before carousel init
generateProductCards();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });
}


// 1. Setup 3 Sets: [Clone 1] [Original] [Clone 2]
const originalCards = Array.from(document.querySelectorAll('.carousel-card'));
const cardWidth = 300; // From CSS
const gap = 32; // 2rem gap
const singleSetWidth = (cardWidth + gap) * originalCards.length;

// Create clones
const clonesHead = originalCards.map(card => card.cloneNode(true));
const clonesTail = originalCards.map(card => card.cloneNode(true));

// Clear and rebuild track
carouselTrack.innerHTML = '';
clonesHead.forEach(c => carouselTrack.appendChild(c));
originalCards.forEach(c => carouselTrack.appendChild(c));
clonesTail.forEach(c => carouselTrack.appendChild(c));

// Re-select all cards
const allCards = document.querySelectorAll('.carousel-card');

// 2. Initial Scroll Position (Start of Middle Set or Saved Position)
const initializeScroll = () => {
  const savedPos = sessionStorage.getItem('carouselScrollPos');
  if (savedPos) {
    carouselContainer.scrollLeft = parseInt(savedPos, 10);
  } else {
    carouselContainer.scrollLeft = singleSetWidth;
  }
};

// 3. Center Highlighting Logic
const highlightCenterCard = () => {
  const containerRect = carouselContainer.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  let closestCard = null;
  let minDistance = Infinity;

  allCards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
    }
  });

  // Optimization: Only update DOM if the active card changes
  const currentActive = document.querySelector('.carousel-card.active');
  if (currentActive !== closestCard) {
    allCards.forEach(c => c.classList.remove('active'));
    if (closestCard) {
      closestCard.classList.add('active');
    }
  }
};

// 4. Infinite Scroll Logic
const handleInfiniteScroll = () => {
  // Jump logic
  if (carouselContainer.scrollLeft >= 2 * singleSetWidth - 50) {
    carouselContainer.style.scrollBehavior = 'auto';
    carouselContainer.scrollLeft -= singleSetWidth;
    carouselContainer.style.scrollBehavior = 'smooth';
  } else if (carouselContainer.scrollLeft <= 50) {
    carouselContainer.style.scrollBehavior = 'auto';
    carouselContainer.scrollLeft += singleSetWidth;
    carouselContainer.style.scrollBehavior = 'smooth';
  }

  highlightCenterCard();
};

carouselContainer.addEventListener('scroll', handleInfiniteScroll);
window.addEventListener('resize', () => {
  initializeScroll();
  highlightCenterCard();
});

// 5. Navigation Buttons
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    resetAutoScroll();
  });

  nextBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
    resetAutoScroll();
  });
}

// 6. Auto-Scroll Logic
let autoScrollInterval;
const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    carouselContainer.scrollBy({ left: (cardWidth + gap), behavior: 'smooth' });
  }, 3000);
};

const stopAutoScroll = () => {
  clearInterval(autoScrollInterval);
};

const resetAutoScroll = () => {
  stopAutoScroll();
  startAutoScroll();
};

// Initialize
// Wait for layout to be stable
setTimeout(() => {
  initializeScroll();
  highlightCenterCard();
  startAutoScroll();
}, 100);

// Pause on hover
// Pause ONLY when hovering the active center card
carouselContainer.addEventListener('mouseover', (e) => {
  if (e.target.closest('.carousel-card.active')) {
    stopAutoScroll();
  }
});

carouselContainer.addEventListener('mouseout', (e) => {
  if (e.target.closest('.carousel-card.active')) {
    startAutoScroll();
  }
});

// Save scroll position on "View Details" click
// We need to attach this to all buttons including clones
document.querySelectorAll('.style-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sessionStorage.setItem('carouselScrollPos', carouselContainer.scrollLeft);
  });
});
