'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Package, Zap, ShieldCheck, Cable, Lightbulb } from 'lucide-react';

const productDetails = {
  'cable-trays': {
    title: 'Cable Trays & Ladders',
    subtitle: 'Premium cable management systems for industrial and commercial installations',
    image: '/images/cable-tray.png',
    description: 'Our high-quality cable trays and ladders are designed for organized and safe cable management in industrial plants, commercial buildings, and power stations. Available in pre-galvanized and hot-dip galvanized (HDG) finishes, these trays provide excellent corrosion resistance for both indoor and harsh outdoor environments. Complete range of accessories including elbows, tees, reducers, splice plates, covers, and brackets ensures flexible and secure installations.',
    category: 'Cable Management',
    features: [
      'Pre-Galvanized finish for indoor applications',
      'Hot-Dip Galvanized (HDG) for outdoor & harsh environments',
      'Complete accessories: elbows, tees, reducers, splice plates, covers, brackets',
      'Heavy-duty load capacity for industrial use',
      'Easy installation with secure connections',
    ],
    specs: [
      'Material: Pre-Galvanized Steel / Hot-Dip Galvanized (HDG)',
      'Finish Options: Galvanized, HDG, Stainless Steel',
      'Corrosion resistant for long service life',
      'Various widths and heights available',
      'Custom sizes available on request',
    ],
    applications: [
      'Industrial plants & factories',
      'Commercial buildings & offices',
      'Power stations & substations',
      'Data centers & telecom facilities',
      'Oil & gas installations',
    ],
  },

  'cable-lugs': {
    title: 'Cable Lugs',
    subtitle: 'High-conductivity cable lugs for secure electrical terminations',
    image: '/images/cablelugs.jpeg',
    description: 'Our premium cable lugs are essential components for securely terminating and connecting electrical cables to equipment, terminals, and busbars. Made from high-quality copper and aluminum, these lugs provide excellent electrical conductivity, mechanical strength, and safe power transfer. Designed for industrial, commercial, and residential installations, they ensure reliable connections that stand the test of time.',
    category: 'Electrical Accessories',
    features: [
      'Copper and aluminum options available',
      'High electrical conductivity for efficient power transfer',
      'Corrosion-resistant for long-lasting performance',
      'Wide range of sizes for different cable gauges',
      'Easy crimping and installation',
    ],
    specs: [
      'Material: High-grade Copper / Aluminum',
      'Corrosion-resistant surface treatment',
      'Available in various stud hole sizes',
      'Compatible with standard crimping tools',
      'Meets international quality standards',
    ],
    applications: [
      'Panel and switchgear connections',
      'Power distribution systems',
      'Industrial machinery wiring',
      'Transformer terminations',
      'Residential electrical installations',
    ],
  },

  'earth-rods': {
    title: 'Earth Rods & Earthing Materials',
    subtitle: 'Complete grounding solutions for electrical safety and protection',
    image: '/images/earthing-systems.jpg',
    description: 'Ensure safe and reliable grounding with our high-quality earthing solutions. Our range includes galvanized earth rods, pure copper rods, and complete earthing systems designed for industrial, commercial, and residential installations. These rods efficiently dissipate fault currents, protecting equipment and personnel from electrical hazards. Available with compatible accessories including earth clamps, inspection pits, and couplers for rod extension.',
    category: 'Earthing & Protection',
    features: [
      'Galvanized earth rods with thick zinc coating',
      'Pure copper rods for superior conductivity',
      'Copper-bonded rods for corrosion resistance',
      'Complete accessories: clamps, couplers, inspection pits',
      'Earthing mats for substations and power plants',
    ],
    specs: [
      'Diameter: 16mm, 20mm, 25mm (Galvanized)',
      'Diameter: 8mm, 10mm, 12mm, 16mm, 20mm (Copper)',
      'Length: 1.2m, 1.8m, 3m (Standard)',
      'Custom lengths available on request',
      'High mechanical strength for driving into soil',
    ],
    applications: [
      'Industrial facilities & power plants',
      'Telecommunication towers',
      'Residential buildings',
      'Substations & transformer stations',
      'Solar farms & renewable energy sites',
    ],
  },

  'circuit-breakers': {
    title: 'Circuit Breakers',
    subtitle: 'Reliable protection devices from trusted global brands',
    image: '/images/breakers.jpg',
    description: 'Protect your electrical systems with high-quality circuit breakers from leading brands including ABB, Schneider Electric, Siemens, and Chint. Designed for switchgear, distribution boards, and control panels, these breakers provide reliable overcurrent, short-circuit, and fault protection. Available in miniature circuit breakers (MCB), molded case circuit breakers (MCCB), and residual current breakers (RCB/ELCB) to suit residential, commercial, and industrial applications.',
    category: 'Protection Devices',
    features: [
      'Trusted brands: ABB, Schneider, Siemens, Chint',
      'MCB, MCCB, and RCB/ELCB types available',
      'Fast and accurate fault protection',
      'Easy installation in standard panels',
      'IEC and international standards compliant',
    ],
    specs: [
      'Current Ratings: 6A – 630A (depending on type)',
      'Poles: 1P, 2P, 3P, 4P options',
      'Voltage: AC 230V – 415V, DC options available',
      'High breaking capacity for safety',
      'Standards: IEC, BS, or local regulatory standards',
    ],
    applications: [
      'Distribution panels and switchgear',
      'Industrial control panels',
      'Commercial building electrical systems',
      'Residential consumer units',
      'Motor protection circuits',
    ],
  },

  'conduits': {
    title: 'Conduit Pipes & Fittings',
    subtitle: 'Complete wiring protection systems for safe cable routing',
    image: '/images/conduit-pipe.jpg',
    description: 'Our comprehensive range of conduit pipes and fittings provides complete protection for electrical wiring installations. Available in pre-galvanized steel for indoor applications, hot-dip galvanized (HDG) for harsh outdoor environments, and flexible conduit options for dynamic installations. PVC-coated flexible conduits offer additional protection in corrosive environments. All products are manufactured to high standards for durability, fire resistance, and easy installation.',
    category: 'Wiring Systems',
    features: [
      'Pre-Galvanized for indoor and light industrial use',
      'Hot-Dip Galvanized (HDG) for outdoor and harsh environments',
      'Flexible conduits for dynamic or tight installations',
      'PVC-coated options for corrosion resistance',
      'Complete range of fittings and accessories',
    ],
    specs: [
      'Materials: Pre-Galvanized Steel, HDG, PVC-coated, Flexible',
      'Various diameters available for different cable sizes',
      'Fire-resistant materials for safety',
      'Smooth internal finish for easy cable pulling',
      'Compatible with standard conduit fittings',
    ],
    applications: [
      'Residential and commercial wiring',
      'Industrial plant installations',
      'Outdoor electrical systems',
      'Telecommunications cabling',
      'Underground cable protection',
    ],
  },

  'busbars': {
    title: 'Tinned Copper Busbars',
    subtitle: 'High-conductivity power distribution bars for electrical systems',
    image: '/images/plated-copper-busbar.jpg',
    description: 'Our tinned copper busbars are designed for efficient electrical power distribution in industrial and commercial applications. Made from high-quality copper with a protective tin coating, these busbars offer excellent conductivity while preventing oxidation and corrosion. The tin coating makes them ideal for humid, coastal, or corrosive environments. Easy to connect to switchgear, distribution panels, transformers, and control equipment, these busbars provide maintenance-free performance with long-lasting durability.',
    category: 'Power Distribution',
    features: [
      'High-quality copper with protective tin coating',
      'Prevents oxidation and corrosion',
      'Low-resistance power transfer',
      'Maintenance-free operation',
      'Custom lengths available on request',
    ],
    specs: [
      'Width: 20mm, 30mm, 50mm, 100mm',
      'Thickness: 3mm, 5mm, 6mm, 10mm',
      'Length: Standard 1m, 2m, 3m',
      'Custom sizes available on request',
      'Compatible with busbar end caps and insulation covers',
    ],
    applications: [
      'Switchgear and distribution panels',
      'Transformer connections',
      'Industrial control panels',
      'Power factor correction systems',
      'Generator and UPS systems',
    ],
  },

  'lightning-arrestors': {
    title: 'Lightning Arrestors',
    subtitle: 'Superior lightning and surge protection for electrical systems',
    image: '/images/surge-arresters.png',
    description: 'Protect your valuable electrical equipment and structures with our Indelec thunder arrestors, designed to provide superior protection against lightning strikes and power surges. These high-quality arrestors efficiently divert lightning currents and transient surges safely to the ground, preventing costly damage to electrical systems. Manufactured from corrosion-resistant materials with IEC compliance, they are ideal for industrial, commercial, and residential installations in high-risk lightning zones.',
    category: 'Surge Protection',
    features: [
      'Indelec brand - trusted lightning protection',
      'IEC and international standards compliant',
      'Corrosion-resistant materials for durability',
      'Efficient surge current diversion to ground',
      'Easy installation on rooftops and towers',
    ],
    specs: [
      'Compatible with IEC lightning protection standards',
      'Custom sizes available on request',
      'Works with earthing systems for complete protection',
      'Suitable for all building types',
      'Mounting brackets and bases included',
    ],
    applications: [
      'Industrial plants and factories',
      'Commercial buildings and offices',
      'Telecommunication towers',
      'Residential buildings',
      'Solar farms and renewable energy sites',
    ],
  },

  'wiring-devices': {
    title: 'Wiring Devices',
    subtitle: 'Premium switches, sockets, and lighting fixtures for all installations',
    image: '/images/wiring-device.png',
    description: 'Upgrade your electrical installations with our premium wiring devices, including sockets, switches, lighting fixtures, and related accessories. Designed for residential, commercial, and industrial applications, these devices provide reliable performance, safety, and convenience. Our range includes modular switches and sockets for modern interiors, weatherproof options for outdoor installations, and industrial-grade devices for heavy-duty applications. Complete your installation with our LED lighting solutions including panels, surface lights, floodlights, and tube lights.',
    category: 'Wiring Accessories',
    features: [
      'Single, double, and three-way switches',
      'Universal and industrial socket outlets',
      'LED lighting: panels, floodlights, tube lights',
      'Weatherproof and industrial-grade options',
      'Complete accessories: faceplates, covers, mounting brackets',
    ],
    specs: [
      'Modular and standard switch designs',
      'Weatherproof rating for outdoor use',
      'Industrial-grade for heavy-duty applications',
      'LED lighting: various wattages and color temperatures',
      'Compatible with standard mounting boxes',
    ],
    applications: [
      'Residential homes and apartments',
      'Commercial offices and retail spaces',
      'Industrial facilities and workshops',
      'Hotels and hospitality venues',
      'Outdoor lighting installations',
    ],
  },

  'inspection-chambers': {
    title: 'Inspection Chambers',
    subtitle: 'Durable access points for underground cable and drainage systems',
    image: '/images/inspection.png',
    description: 'Our high-quality inspection chambers are essential components for underground cable systems and drainage networks, providing easy access for maintenance, inspection, and cleaning. Manufactured from durable galvanized steel, HDPE, or concrete, these chambers ensure the smooth operation of cable trays, conduits, and earthing systems while protecting the network from environmental damage. Designed to resist soil pressure, corrosion, and environmental stress, they are suitable for both indoor and outdoor installations in industrial, commercial, and residential projects.',
    category: 'Underground Infrastructure',
    features: [
      'Galvanized steel, HDPE, or concrete options',
      'Resists soil pressure and environmental stress',
      'Easy access for maintenance and inspection',
      'Corrosion-resistant for long service life',
      'Complete with covers and accessories',
    ],
    specs: [
      'Diameter: 300mm, 450mm, 600mm',
      'Depth: 600mm, 900mm, 1200mm',
      'Custom sizes available on request',
      'Covers: Galvanized or HDPE',
      'Accessories: Ladder rungs, sealing gaskets',
    ],
    applications: [
      'Underground cable systems',
      'Drainage and sewage networks',
      'Telecommunications infrastructure',
      'Street lighting installations',
      'Industrial facility grounds',
    ],
  },

  'solar-materials': {
    title: 'Solar Materials & Components',
    subtitle: 'Complete solar power solutions for residential, commercial, and industrial applications',
    image: '/images/sola.jpg',
    description: 'Our solar materials and components provide complete solutions for solar power systems, including lithium batteries, inverters, solar panels, and essential accessories. Designed for efficiency, durability, and long-term performance, our products support reliable energy generation, storage, and distribution. Suitable for homes, businesses, and large-scale solar installations, we supply high-quality components that meet international standards and ensure optimal system performance.',
    category: 'Renewable Energy Solutions',
    features: [
      'High-efficiency solar panels with long lifespan',
      'Lithium batteries for reliable energy storage',
      'Hybrid and pure sine wave inverters',
      'Complete accessories: MC4 connectors, cables, mounting kits',
      'Weather-resistant and durable components',
      'Energy-saving and eco-friendly solutions',
    ],
    specs: [
      'Solar Panels: Mono/Polycrystalline (300W – 700W)',
      'Batteries: Lithium-ion, Deep Cycle (12V, 24V, 48V)',
      'Inverters: 1kVA – 10kVA+ (Hybrid & Off-grid)',
      'Charge Controllers: MPPT & PWM types',
      'Mounting Structures: Roof & ground-mounted systems',
    ],
    applications: [
      'Residential solar power systems',
      'Commercial and office buildings',
      'Industrial solar installations',
      'Telecommunication sites',
      'Rural electrification projects',
      'Backup power and energy storage systems',
    ],
  },
};

export default function ProductDetailClient({ slug }) {
  const product = productDetails[slug];

  if (!product) {
    return (
      <main className="bg-white text-foreground">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find this product.</p>
            <Link href="/products" className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white text-foreground">
      <Header />

      {/* HERO - Reduced height */}
      <section className="relative h-64 flex items-center">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill 
          className="object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link href="/" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
            ← Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-black">{product.title}</h1>
          <p className="text-lg mt-2 text-white/90">{product.subtitle}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
          <Image 
            src={product.image} 
            alt={product.title} 
            fill 
            className="object-cover" 
          />
        </div>

        <div>
          <h2 className="text-3xl font-black text-foreground mb-4">Product Overview</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-1">Category:</p>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              {product.category}
            </span>
          </div>

          <Link href="/contact" className="inline-flex bg-accent text-white px-6 py-3 rounded-lg hover:bg-red-600 transition font-bold items-center gap-2">
            Request Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-8">Key <span className="text-accent">Features</span></h2>

          <div className="grid md:grid-cols-2 gap-4">
            {product.features.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-primary/10">
                <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-foreground mb-8">Technical <span className="text-accent">Specifications</span></h2>

        <div className="grid md:grid-cols-2 gap-4">
          {product.specs.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-primary/10">
              <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-foreground mb-8">Common <span className="text-accent">Applications</span></h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-primary/20 text-center hover:border-accent hover:shadow-md transition">
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary via-blue-600 to-primary py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full -ml-40 -mb-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need This Product?</h2>
          <p className="text-white/90 mb-8 text-lg">Contact us for competitive pricing, technical specifications, and bulk order discounts.</p>

          <Link href="/contact" className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-red-600 transition font-bold text-lg shadow-lg">
            Contact Sales Team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}