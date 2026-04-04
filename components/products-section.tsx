'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Package, Cable, ShieldCheck, Zap, Lightbulb } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Cable Trays & Ladders',
    description: 'Premium cable management systems for organized and safe cable routing in industrial and commercial installations.',
    features: ['Pre-Galvanized Steel', 'Hot-Dip Galvanized (HDG)', 'Complete Accessories', 'Heavy-Duty Load Capacity'],
    icon: Package,
    image: '/images/cable-tray.png',
    slug: 'cable-trays',
  },
  {
    id: 2,
    name: 'Cable Lugs',
    description: 'High-quality copper and aluminum cable lugs for secure electrical terminations and reliable power transfer.',
    features: ['High Conductivity', 'Corrosion Resistant', 'Copper & Aluminum Types', 'Multiple Sizes Available'],
    icon: Cable,
    image: '/images/cablelugs.jpeg',
    slug: 'cable-lugs',
  },
  {
    id: 3,
    name: 'Circuit Breakers',
    description: 'Reliable protection devices from ABB, Schneider, Siemens, and Chint for electrical safety and system protection.',
    features: ['MCB / MCCB / RCB', '6A - 630A Ratings', '1P,2P,3P,4P Options', 'Trusted Global Brands'],
    icon: Zap,
    image: '/images/breakers.jpg',
    slug: 'circuit-breakers',
  },
  {
    id: 4,
    name: 'Earthing Systems',
    description: 'Complete grounding solutions including earth rods, copper rods, and earthing mats for electrical safety.',
    features: ['Galvanized Earth Rods', 'Pure Copper Rods', 'Earthing Mats', 'Complete Accessories'],
    icon: ShieldCheck,
    image: '/images/earthing-systems.jpg',
    slug: 'earth-rods',
  },
  {
    id: 5,
    name: 'Conduit Pipes & Fittings',
    description: 'Complete wiring protection systems including rigid and flexible conduits for safe cable installation.',
    features: ['Pre-Galvanized', 'Hot-Dip Galvanized (HDG)', 'Flexible Conduits', 'PVC-Coated Options'],
    icon: Package,
    image: '/images/conduit-pipe.jpg',
    slug: 'conduits',
  },
  {
    id: 6,
    name: 'Tinned Copper Busbars',
    description: 'High-conductivity tinned copper busbars for efficient power distribution in electrical panels and switchgear.',
    features: ['Tinned Copper', 'Corrosion Resistant', '20mm-100mm Width', '3mm-10mm Thickness'],
    icon: Zap,
    image: '/images/plated-copper-busbar.jpg',
    slug: 'busbars',
  },
  {
    id: 7,
    name: 'Lightning Arrestors',
    description: 'Superior lightning and surge protection with Indelec thunder arrestors for industrial and commercial installations.',
    features: ['Indelec Brand', 'IEC Compliant', 'Surge Protection', 'Easy Installation'],
    icon: ShieldCheck,
    image: '/images/surge-arresters.png',
    slug: 'lightning-arrestors',
  },
  {
    id: 8,
    name: 'Wiring Devices',
    description: 'Premium switches, sockets, and LED lighting fixtures for residential, commercial, and industrial applications.',
    features: ['Switches & Sockets', 'LED Lighting', 'Weatherproof Options', 'Industrial Grade'],
    icon: Lightbulb,
    image: '/images/wiring-device.png',
    slug: 'wiring-devices',
  },
  {
    id: 9,
    name: 'Inspection Chambers',
    description: 'Durable underground access points for cable systems, drainage, and maintenance of electrical networks.',
    features: ['Galvanized / HDPE / Concrete', '300mm-600mm Diameter', 'Easy Access', 'Corrosion Resistant'],
    icon: Package,
    image: '/images/inspection.png',
    slug: 'inspection-chambers',
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