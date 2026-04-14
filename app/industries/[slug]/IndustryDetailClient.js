'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Package, Shield, Truck, CheckCircle } from 'lucide-react';

const industryDetails = {
  'oil-gas': {
    title: 'Oil & Gas',
    image: '/images/industry-oil.jpg',
    description: 'Premium electrical components for oil and gas facilities including refineries, drilling platforms, and pipeline operations.',
    products: [
      { name: 'HDG Cable Trays', desc: 'Heavy-duty corrosion-resistant cable management' },
      { name: 'Galvanized Conduits', desc: 'Explosion-proof wiring protection' },
      { name: 'Copper Bond Earth Rods', desc: 'Reliable grounding systems' },
      { name: 'Circuit Breakers', desc: 'ABB, Schneider, Siemens protection devices' },
      { name: 'Lightning Arrestors', desc: 'Indelec surge and lightning protection' },
      { name: 'Inspection Chambers', desc: 'Underground access for cable systems' },
    ],
    benefits: [
      'Corrosion-resistant materials for harsh environments',
      'High-temperature rated components',
      'Explosion-proof conduit systems',
      'Reliable earthing for safety compliance',
      'Complete lightning protection solutions',
    ],
  },
  'telecom': {
    title: 'Telecommunications',
    image: '/images/industry-telecom.jpg',
    description: 'Electrical components for cell towers, data centers, and telecommunications infrastructure.',
    products: [
      { name: 'Cable Trays & Ladders', desc: 'Organized cable routing for tower sites' },
      { name: 'Copper Cable Lugs', desc: 'Secure electrical terminations' },
      { name: 'Earth Rods', desc: 'Lightning protection grounding' },
      { name: 'PVC Conduits', desc: 'Weatherproof cable protection' },
      { name: 'Inspection Chambers', desc: 'Underground cable access points' },
      { name: 'Lightning Arrestors', desc: 'Tower lightning protection' },
    ],
    benefits: [
      'Weather-resistant outdoor components',
      'Easy installation for remote sites',
      'Corrosion-resistant materials',
      'Complete grounding solutions',
      'Reliable surge protection',
    ],
  },
  'manufacturing': {
    title: 'Industrial & Manufacturing',
    image: '/images/industry-manufacturing.jpg',
    description: 'Electrical components for manufacturing facilities, production lines, and industrial plants.',
    products: [
      { name: 'Circuit Breakers', desc: 'MCB, MCCB, ACB from top brands' },
      { name: 'Cable Trays', desc: 'Heavy-duty cable management' },
      { name: 'Copper Lugs', desc: 'High-conductivity terminations' },
      { name: 'Earthing Systems', desc: 'Complete grounding solutions' },
      { name: 'Tinned Copper Busbars', desc: 'Efficient power distribution' },
      { name: 'Wiring Devices', desc: 'Industrial switches and sockets' },
      { name: 'Lightning Arrestors', desc: 'Facility surge protection' },
    ],
    benefits: [
      'High breaking capacity protection',
      'Industrial-grade durability',
      'Easy maintenance access',
      'Compliance with safety standards',
      'Efficient power distribution',
    ],
  },
  'real-estate': {
    title: 'Real Estate & Construction',
    image: '/images/industry-real-estate.jpg',
    description: 'Electrical components for residential, commercial, and mixed-use construction projects.',
    products: [
      { name: 'PVC Conduits', desc: 'Fire-resistant wiring protection' },
      { name: 'Cable Lugs', desc: 'Copper and aluminum terminations' },
      { name: 'Earth Rods', desc: 'Building grounding systems' },
      { name: 'Wiring Devices', desc: 'Switches, sockets, and lighting' },
      { name: 'Distribution Boards', desc: 'Safe power distribution' },
      { name: 'Circuit Breakers', desc: 'Residential MCB protection' },
    ],
    benefits: [
      'Building code compliant components',
      'Cost-effective solutions',
      'Easy installation for contractors',
      'Reliable long-term performance',
      'Modern wiring device designs',
    ],
  },
  'utilities': {
    title: 'Utilities',
    image: '/images/industry-utilities.jpg',
    description: 'Electrical infrastructure components for power generation, transmission, and distribution utilities.',
    products: [
      { name: 'Heavy-Duty Cable Ladders', desc: 'High-capacity cable support' },
      { name: 'ACB & MCCB Breakers', desc: 'Main distribution protection' },
      { name: 'Copper Bond Earth Rods', desc: 'Substation grounding' },
      { name: 'Cable Lugs', desc: 'High-current terminations' },
      { name: 'Tinned Copper Busbars', desc: 'Switchgear power distribution' },
      { name: 'Inspection Chambers', desc: 'Underground cable access' },
      { name: 'Lightning Arrestors', desc: 'Substation surge protection' },
    ],
    benefits: [
      'High-current rated components',
      'Long service life',
      'Low maintenance requirements',
      'Compliance with utility standards',
      'Complete substation solutions',
    ],
  },
  'renewable-energy': {
    title: 'Renewable Energy',
    image: '/images/industry-renewable.jpg',
    description: 'Electrical components for solar farms, wind installations, and alternative energy projects.',
    products: [
      { name: 'Cable Trays', desc: 'Solar farm cable management' },
      { name: 'DC Circuit Breakers', desc: 'Solar array protection' },
      { name: 'Earthing Systems', desc: 'Lightning and fault protection' },
      { name: 'Conduits', desc: 'UV-resistant cable protection' },
      { name: 'Tinned Copper Busbars', desc: 'Inverter power distribution' },
      { name: 'Lightning Arrestors', desc: 'Solar farm surge protection' },
      { name: 'Inspection Chambers', desc: 'Underground cable junctions' },
    ],
    benefits: [
      'UV-resistant materials for outdoor use',
      'High-temperature rated components',
      'Corrosion-resistant for long life',
      'Quick installation for project timelines',
      'Complete renewable energy solutions',
    ],
  },
};

export default function IndustryDetailClient({ slug }) {
  const industry = industryDetails[slug];

  if (!industry) {
    return (
      <main className="bg-white text-foreground">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">Industry Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find this industry segment.</p>
            <Link href="/" className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700">
              Back to Home
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

      {/* Hero Section */}
      <section className="relative w-full h-80 bg-gradient-to-r from-primary via-blue-600 to-primary overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-blue-600/90 to-primary/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{industry.title} Industry</h1>
          <p className="text-lg text-white/90 font-semibold max-w-2xl">Premium electrical components for {industry.title.toLowerCase()} applications</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4">
                {industry.title} Industry Components
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Premium Quality</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Genuine Products</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Fast Delivery</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Technical Support</span>
              </div>
              <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base items-center gap-2 shadow-lg">
                Request Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products We Supply */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-3">Products We <span className="text-accent">Supply</span></h2>
          <p className="text-base text-muted-foreground mb-8">For {industry.title} industry applications</p>
          <div className="h-1 w-16 bg-accent mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-5">
            {industry.products.map((product, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-primary/20 hover:border-primary hover:shadow-md transition">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Package className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-3">Key <span className="text-accent">Benefits</span></h2>
          <p className="text-base text-muted-foreground mb-8">Why industry professionals choose our components</p>
          <div className="h-1 w-16 bg-accent mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-primary/20 hover:border-primary transition">
                <CheckCircle className="text-accent flex-shrink-0" size={20} />
                <p className="text-sm text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-3">Why Choose <span className="text-accent">Us</span></h2>
          <p className="text-base text-muted-foreground mb-8">For your {industry.title} electrical component needs</p>
          <div className="h-1 w-16 bg-accent mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Genuine Products', desc: '100% certified components from trusted brands' },
              { icon: Truck, title: 'Reliable Delivery', desc: 'On-time shipping across Africa' },
              { icon: Package, title: 'Complete Range', desc: 'All components from one trusted supplier' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-xl transition text-center">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full -ml-40 -mb-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Need Components for Your {industry.title} Project?</h2>
          <p className="text-base text-white/90 mb-5 font-semibold">
            Contact us for competitive quotes and technical specifications.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base shadow-lg hover:shadow-xl">
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}