import Link from 'next/link';
import { Award, Package, Truck, Headphones, Shield, Clock } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Genuine Products',
    description: '100% certified electrical components from trusted brands including ABB, Schneider, Siemens, Chint, and Indelec',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Reliable logistics network ensuring on-time delivery across Nigeria and West Africa for all your project needs',
    icon: Truck,
  },
  {
    id: 3,
    title: 'Complete Range',
    description: 'One-stop supplier for all electrical components - cable trays, lugs, breakers, busbars, earthing, conduits, and more',
    icon: Package,
  },
  {
    id: 4,
    title: 'Expert Support',
    description: 'Technical assistance to help you select the right products and specifications for your specific application',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-block mb-3">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-black text-foreground mb-4">The <span className="text-accent">Advantage</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Trusted by leading companies across Africa for premium electrical components and reliable supply chain solutions.
          </p>
          <div className="h-1 w-20 bg-accent mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20 rounded-xl hover:border-primary hover:shadow-xl transition duration-300 group"
              >
                <div className="mb-4 inline-flex p-3 bg-primary/15 rounded-xl group-hover:bg-primary group-hover:text-white transition">
                  <Icon className="text-primary group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground mb-5">Need premium electrical components for your next project?</p>
          <Link href="/contact" className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base shadow-lg hover:shadow-xl inline-block">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}