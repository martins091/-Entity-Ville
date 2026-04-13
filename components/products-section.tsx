'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Package, Cable, ShieldCheck, Zap, Lightbulb } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cable Trays & Ladders',
    description:
      'High-performance cable management systems designed for safe, organized, and efficient routing in industrial and commercial environments.',
    features: [
      'Pre-Galvanized & HDG Finishes',
      'Complete Accessories System',
      'Heavy-Duty Load Capacity',
      'Corrosion Resistant Design',
    ],
    icon: Package,
    image: '/images/cable-tray.png',
    slug: 'cable-trays',
  },

  {
    id: 2,
    name: 'Cable Lugs',
    description:
      'Durable and high-conductivity cable lugs engineered for secure electrical terminations and efficient power transmission.',
    features: [
      'Copper & Aluminum Types',
      'High Conductivity',
      'Corrosion Resistant Finish',
      'Wide Size Range',
    ],
    icon: Cable,
    image: '/images/cablelugs.jpeg',
    slug: 'cable-lugs',
  },

  {
    id: 3,
    name: 'Circuit Breakers',
    description:
      'Advanced electrical protection devices designed to safeguard systems against overloads, short circuits, and faults.',
    features: [
      'MCB / MCCB / RCD Types',
      '6A – 630A Ratings',
      'Multi-Pole Configurations',
      'High Breaking Capacity',
    ],
    icon: Zap,
    image: '/images/breakers.jpg',
    slug: 'circuit-breakers',
  },

  {
    id: 4,
    name: 'Earthing Materials',
    description:
      'Complete grounding materials including earth rods, clamps, and accessories for reliable electrical safety and protection.',
    features: [
      'Copper & Galvanized Rods',
      'High Conductivity',
      'Complete Accessories',
      'Long Service Life',
    ],
    icon: ShieldCheck,
    image: '/images/earthing-systems.jpg',
    slug: 'earth-rods',
  },

  {
    id: 5,
    name: 'Conduit Pipes & Fittings',
    description:
      'Robust conduit systems designed to protect electrical wiring from mechanical damage and environmental conditions.',
    features: [
      'Steel & PVC Options',
      'Flexible & Rigid Types',
      'Corrosion Resistant',
      'Full Fittings Range',
    ],
    icon: Package,
    image: '/images/conduit-pipe.jpg',
    slug: 'conduits',
  },

  {
    id: 6,
    name: 'Tinned Copper Busbars',
    description:
      'High-efficiency copper busbars with protective tin coating for reliable and low-loss power distribution.',
    features: [
      'High Conductivity Copper',
      'Anti-Corrosion Coating',
      'Custom Sizes Available',
      'Low Power Loss',
    ],
    icon: Zap,
    image: '/images/plated-copper-busbar.jpg',
    slug: 'busbars',
  },

  {
    id: 7,
    name: 'Lightning Arrestors',
    description:
      'Reliable surge and lightning protection systems designed to safeguard electrical installations and infrastructure.',
    features: [
      'High Surge Protection',
      'IEC Compliant',
      'Durable Construction',
      'Easy Installation',
    ],
    icon: ShieldCheck,
    image: '/images/surge-arresters.png',
    slug: 'lightning-arrestors',
  },

  {
    id: 8,
    name: 'Wiring Devices',
    description:
      'Modern switches, sockets, and lighting solutions built for safety, durability, and aesthetic installations.',
    features: [
      'Switches & Socket Outlets',
      'LED Lighting Solutions',
      'Weatherproof Options',
      'Industrial Grade Designs',
    ],
    icon: Lightbulb,
    image: '/images/wiring-device.png',
    slug: 'wiring-devices',
  },

  {
    id: 9,
    name: 'Inspection Chambers',
    description:
      'Durable underground access systems designed for easy inspection and maintenance of cable and drainage networks.',
    features: [
      'Concrete / HDPE / Steel Options',
      'Multiple Size Variants',
      'High Strength Build',
      'Corrosion Resistant',
    ],
    icon: Package,
    image: '/images/inspection.png',
    slug: 'inspection-chambers',
  },

  {
    id: 10,
    name: 'Solar Materials',
    description:
      'Complete solar energy components including panels, lithium batteries, inverters, and accessories for reliable power solutions.',
    features: [
      'Solar Panels (300W – 700W)',
      'Lithium & Deep Cycle Batteries',
      'Hybrid & Off-Grid Inverters',
      'Full Installation Accessories',
    ],
    icon: Zap,
    image: '/images/sola.jpg',
    slug: 'solar-materials',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="inline-block mb-3">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Our Products
            </span>
          </div>

          <h2 className="text-4xl font-black text-foreground mb-4">
            Premium Electrical <span className="text-accent">Components</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl">
            We supply high-quality electrical materials and components for industrial,
            commercial, and residential projects across Africa.
          </p>

          <div className="h-1 w-20 bg-accent mt-6 rounded-full"></div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.id}
                className="bg-white border-2 border-primary/10 rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl transition duration-300 group"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  {/* ICON & TITLE */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition">
                      <Icon className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* FEATURES - Show first 3 features only */}
                  <ul className="space-y-1.5 mb-5">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-xs text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 w-full py-2.5 border-2 border-primary text-primary font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition flex items-center justify-center gap-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-lg text-base"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
}