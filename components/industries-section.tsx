import Image from 'next/image';
import Link from 'next/link';
import { Zap, Radio, Factory, Building2, Wind, Lightbulb, Package, Shield } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Oil & Gas',
    description: 'Heavy-duty cable trays, explosion-proof conduits, reliable earthing systems, and lightning protection for refinery and extraction facilities',
    icon: Radio,
    image: '/images/industry-oil.jpg',
    slug: 'oil-gas',
    products: ['Cable Trays', 'Conduits', 'Earthing Systems', 'Lightning Arrestors'],
  },
  {
    id: 2,
    name: 'Telecommunications',
    description: 'Cable management systems, copper lugs, grounding solutions, and inspection chambers for cell towers and data centers',
    icon: Radio,
    image: '/images/industry-telecom.jpg',
    slug: 'telecom',
    products: ['Cable Lugs', 'Earth Rods', 'Conduits', 'Inspection Chambers'],
  },
  {
    id: 3,
    name: 'Manufacturing',
    description: 'Circuit breakers from ABB, Schneider, and Siemens, plus busbars, cable management, and wiring devices for production lines',
    icon: Factory,
    image: '/images/industry-manufacturing.jpg',
    slug: 'manufacturing',
    products: ['Circuit Breakers', 'Cable Trays', 'Cable Lugs', 'Busbars', 'Wiring Devices'],
  },
  {
    id: 4,
    name: 'Real Estate',
    description: 'Residential and commercial electrical components including conduits, wiring devices, cable lugs, and earthing systems',
    icon: Building2,
    image: '/images/industry-real-estate.jpg',
    slug: 'real-estate',
    products: ['Conduits', 'Wiring Devices', 'Cable Lugs', 'Earthing Systems'],
  },
  {
    id: 5,
    name: 'Renewable Energy',
    description: 'Solar farm infrastructure components including heavy-duty cable trays, breakers, busbars, and complete earthing solutions',
    icon: Wind,
    image: '/images/industry-renewable.jpg',
    slug: 'renewable-energy',
    products: ['Cable Trays', 'Circuit Breakers', 'Busbars', 'Earth Rods'],
  },
  {
    id: 6,
    name: 'Utilities & Distribution',
    description: 'High-capacity cable ladders, distribution breakers, busbars, grounding systems, and inspection chambers for power utility companies',
    icon: Lightbulb,
    image: '/images/industry-utilities.jpg',
    slug: 'utilities',
    products: ['Cable Ladders', 'Circuit Breakers', 'Busbars', 'Earthing Systems', 'Inspection Chambers'],
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block mb-3">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-4xl font-black text-foreground mb-4">Markets We <span className="text-accent">Supply</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Premium electrical components for critical industries across Africa - from cable management to circuit protection, busbars, and earthing systems.
          </p>
          <div className="h-1 w-20 bg-accent mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="group bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl transition duration-300 cursor-pointer block"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition">
                      <Icon className="text-primary group-hover:text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {industry.description}
                  </p>
                  
                  {/* Products tags - Show up to 4 tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {industry.products.slice(0, 4).map((product, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-primary px-2 py-0.5 rounded">
                        {product}
                      </span>
                    ))}
                    {industry.products.length > 4 && (
                      <span className="text-xs bg-blue-50 text-primary px-2 py-0.5 rounded">
                        +{industry.products.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition">
                    View Products <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}