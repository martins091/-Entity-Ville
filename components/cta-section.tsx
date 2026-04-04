'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full -ml-40 -mb-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
          Need Premium Electrical Components?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
          Get competitive quotes for cable trays, circuit breakers, busbars, earthing systems, lightning arrestors, wiring devices, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base shadow-lg hover:shadow-xl">
            Request a Quote
          </Link>
          <Link href="/products" className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition font-bold text-base">
            Browse Products
          </Link>
        </div>

        {/* Contact Info Grid - Updated with real information */}
        <div className="grid md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="border-r border-white/20 last:border-r-0">
            <p className="text-white/75 text-xs mb-2 font-bold uppercase tracking-widest">Call Us</p>
            <a href="tel:+2348082538803" className="text-lg font-black text-white hover:text-white/80 transition">
              +234 808 253 8803
            </a>
          </div>
          <div className="border-r border-white/20 last:border-r-0">
            <p className="text-white/75 text-xs mb-2 font-bold uppercase tracking-widest">Email Us</p>
            <a href="mailto:sales@entityville.com" className="text-base font-black text-white hover:text-white/80 transition break-all">
              sales@entityville.com
            </a>
          </div>
          <div>
            <p className="text-white/75 text-xs mb-2 font-bold uppercase tracking-widest">Visit Us</p>
            <p className="text-sm font-bold text-white leading-relaxed">
              37, Adeniran Ogunsanya Mall, <br />
              Surulere, Lagos State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}