'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Package } from 'lucide-react';

const caseStudies = {
  'telecom-upgrade': {
    title: 'Telecommunications Infrastructure Project',
    client: 'Leading Telecom Provider',
    image: '/images/industry-telecom.jpg',
    industry: 'Telecommunications',
    challenge: 'A major telecommunications provider needed reliable cable management, grounding, and surge protection for 200+ cell tower sites across Nigeria to support their network expansion.',
    solution: 'We supplied HDG cable trays, copper cable lugs, earth rods, weatherproof conduits, lightning arrestors, and inspection chambers for complete infrastructure protection. Our team provided technical specifications and delivery coordination to ensure seamless installation.',
    results: [
      '40% faster installation time',
      'Zero cable failures after 18 months',
      'Enhanced lightning protection across all sites',
      '99.9% tower uptime maintained',
    ],
    products: ['HDG Cable Trays', 'Copper Cable Lugs', 'Earth Rods', 'Weatherproof Conduits', 'Lightning Arrestors', 'Inspection Chambers'],
  },
  'industrial-automation': {
    title: 'Factory Electrical Systems Upgrade',
    client: 'Manufacturing Excellence Corp',
    image: '/images/industry-manufacturing.jpg',
    industry: 'Manufacturing',
    challenge: 'A manufacturing facility required complete circuit protection, reliable earthing, and efficient power distribution for their new automated production line to ensure worker safety and equipment protection.',
    solution: 'We provided ABB and Schneider circuit breakers (MCB/MCCB), complete earthing system with copper bond rods, tinned copper busbars for power distribution, heavy-duty cable trays, copper lugs, and industrial wiring devices. All products were delivered with technical datasheets and installation support.',
    results: [
      '100% uptime maintained for 12+ months',
      'Improved safety compliance certification',
      '35% reduced maintenance costs',
      '20% better power distribution efficiency',
    ],
    products: ['Circuit Breakers (ABB/Schneider)', 'Earthing Systems', 'Tinned Copper Busbars', 'Cable Trays', 'Copper Lugs', 'Industrial Wiring Devices'],
  },
  'renewable-energy': {
    title: 'Solar Farm Electrical Infrastructure',
    client: 'Green Energy Initiative',
    image: '/images/industry-renewable.jpg',
    industry: 'Renewable Energy',
    challenge: 'A 50MW solar farm project needed robust cable protection, surge protection, and grounding systems to ensure reliable operation and protection against lightning strikes.',
    solution: 'We supplied Schneider breakers, heavy-duty cable trays, copper lugs, earthing rods, PVC conduits, DC-rated lightning arrestors, tinned copper busbars for inverter connections, and inspection chambers for underground cable junctions. All components met international quality standards.',
    results: [
      'Seamless installation with zero delays',
      'Reliable operation for 24+ months',
      '25% reduced project timeline',
      'Zero surge-related equipment failures',
    ],
    products: ['Schneider Circuit Breakers', 'Heavy-Duty Cable Trays', 'Copper Lugs', 'Earthing Rods', 'PVC Conduits', 'DC Lightning Arrestors', 'Busbars', 'Inspection Chambers'],
  },
  'commercial-building': {
    title: 'Commercial Building Electrical Installation',
    client: 'Heritage Heights Developers',
    image: '/images/industry-real-estate.jpg',
    industry: 'Real Estate',
    challenge: 'A new 20-story commercial building required complete electrical infrastructure including wiring, circuit protection, and power distribution for offices, retail spaces, and common areas.',
    solution: 'We supplied PVC conduits, premium wiring devices (switches and sockets), circuit breakers, cable lugs, earthing rods, tinned copper busbars for distribution boards, and inspection chambers for underground cable access. All products were delivered on schedule to meet construction deadlines.',
    results: [
      'On-time project completion',
      'Full building code compliance',
      'Zero post-installation electrical issues',
      'Contractor satisfaction with product quality',
    ],
    products: ['PVC Conduits', 'Wiring Devices', 'Circuit Breakers', 'Cable Lugs', 'Earthing Rods', 'Busbars', 'Inspection Chambers'],
  },
  'utility-substation': {
    title: 'Utility Substation Upgrade',
    client: 'National Power Authority',
    image: '/images/industry-utilities.jpg',
    industry: 'Utilities',
    challenge: 'A power utility needed to upgrade an aging substation with modern protection and distribution components to improve grid reliability and reduce outage frequency.',
    solution: 'We provided ACB and MCCB circuit breakers, heavy-duty cable ladders, copper bond earth rods, tinned copper busbars, lightning arrestors for surge protection, and inspection chambers for underground cable access. All components were delivered with certification and technical documentation.',
    results: [
      'Improved grid reliability by 40%',
      'Reduced outage frequency by 60%',
      'Enhanced worker safety at substation',
      'Extended equipment lifespan by 10+ years',
    ],
    products: ['ACB/MCCB Breakers', 'Cable Ladders', 'Copper Bond Earth Rods', 'Busbars', 'Lightning Arrestors', 'Inspection Chambers'],
  },
};

export default function CaseStudyDetailClient({ slug }) {
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <main className="bg-white text-foreground">
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black text-foreground mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find this case study.</p>
            <Link href="/case-studies" className="px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700">
              Back to Case Studies
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

      {/* Hero Section - Reduced height */}
      <section className="relative w-full h-80 bg-gradient-to-r from-primary via-blue-600 to-primary overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-blue-600/90 to-primary/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-2">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{caseStudy.title}</h1>
          <p className="text-lg text-white/90 font-semibold">Client: {caseStudy.client}</p>
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div>
              <div className="inline-block mb-4 px-3 py-1.5 bg-primary/10 border-l-4 border-primary rounded">
                <span className="text-primary font-black text-sm">{caseStudy.industry}</span>
              </div>
              <h2 className="text-3xl font-black text-foreground mb-4">Project Overview</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                This project demonstrates our capability to supply high-quality electrical components for {caseStudy.industry.toLowerCase()} applications. We provided comprehensive product solutions that met all technical requirements and project deadlines.
              </p>
              <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base items-center gap-2 shadow-lg">
                Request Similar Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-6">The <span className="text-accent">Challenge</span></h2>
          <div className="bg-white p-8 rounded-xl border-2 border-accent/20">
            <p className="text-base text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-6">Our <span className="text-accent">Solution</span></h2>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-primary/20">
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {caseStudy.solution}
            </p>
            
            {/* Products Supplied */}
            <div>
              <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <Package size={16} className="text-accent" />
                Products Supplied:
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.products.map((product, idx) => (
                  <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-foreground mb-6">Key <span className="text-accent">Results</span></h2>
          <div className="h-1 w-16 bg-accent mb-10 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-5">
            {caseStudy.results.map((result, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition flex items-center gap-4">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <p className="text-base font-bold text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full -ml-40 -mb-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">Need Similar Components for Your Project?</h2>
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