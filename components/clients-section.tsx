import Image from 'next/image';

const clients = [
  { name: 'TechCorp Nigeria', logo: '/images/client1.png' },
  { name: 'Energy Solutions Africa', logo: '/images/client2.png' },
  { name: 'Industrial Leaders', logo: '/images/client3.png' },
  { name: 'Global Manufacturing', logo: '/images/client4.png' },
  // { name: 'Power Systems Ltd', logo: '/images/client5.png' },
  // { name: 'Telecom Infrastructure', logo: '/images/client6.png' },
  // { name: 'Renewable Energy Corp', logo: '/images/client7.jpg' },
  // { name: 'Strategic Builders', logo: '/images/client8.jpg' },
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-primary font-black text-sm tracking-widest uppercase">Trusted by Leaders</span>
          </div>
          <h2 className="text-5xl font-black text-foreground mb-6">Clients We Empower</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Africa&apos;s most innovative and demanding companies rely on Entity Ville for critical electrical infrastructure
          </p>
          
          {/* Red divider line */}
          <div className="h-1 w-20 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-8 bg-white border-2 border-primary/10 rounded-2xl hover:border-accent hover:shadow-2xl transition duration-300 group"
            >
              <div className="relative w-full h-24 group-hover:scale-110 transition duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20">
            <p className="text-5xl font-black text-accent mb-3">500+</p>
            <p className="text-xl font-bold text-foreground">Projects Delivered</p>
            <div className="h-1 w-12 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20">
            <p className="text-5xl font-black text-primary mb-3">50+</p>
            <p className="text-xl font-bold text-foreground">Enterprise Clients</p>
            <div className="h-1 w-12 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20">
            <p className="text-5xl font-black text-accent mb-3">15+</p>
            <p className="text-xl font-bold text-foreground">Years of Excellence</p>
            <div className="h-1 w-12 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
