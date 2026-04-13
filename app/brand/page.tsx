'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';

const brands = [
  { name: 'Schneider Electric', image: '/images/brands/schneider.png' },
  { name: 'CHINT', image: '/images/brands/chint.png' },
  { name: 'OSRAM', image: '/images/brands/osram.png' },
  { name: 'Legrand', image: '/images/brands/legrand.png' },
  { name: 'Havells', image: '/images/brands/havells.png' },
  { name: 'Siemens', image: '/images/brands/siemens.png' },
  { name: 'Hager', image: '/images/brands/hager.png' },
  { name: 'Philips', image: '/images/brands/philips.png' },
  { name: 'Luceco', image: '/images/brands/luceco.png' },
  { name: 'British General', image: '/images/brands/british-general.png' },
  { name: 'Eaton', image: '/images/brands/eaton.png' },
  { name: 'ABB', image: '/images/brands/abb.png' },
  { name: 'Ledvance', image: '/images/brands/ledvance.png' },
  { name: 'Nigerchin', image: '/images/brands/nigerchin.png' },
  { name: 'Coleman Cables', image: '/images/brands/coleman.png' },
  { name: 'Kabelmetal Nigeria', image: '/images/brands/kabelmetal.png' },
  { name: 'Cometstar', image: '/images/brands/cometstar.png' },
  { name: 'Delta', image: '/images/brands/delta.png' },
  { name: 'OBO', image: '/images/brands/obo.png' },
  { name: 'Weidmuller', image: '/images/brands/weidmuller.png' },
  { name: 'Omron', image: '/images/brands/omron.png' },
  { name: 'L&T (Larsen & Toubro)', image: '/images/brands/lt.png' }, // from "L T M production"
  { name: '3M', image: '/images/brands/3m.png' },
  { name: 'Feco', image: '/images/brands/feco.png' },
  { name: 'Brico', image: '/images/brands/brico.png' },
  { name: 'General Electric', image: '/images/brands/ge.png' },
];

export default function BrandsPage() {
    return (
        <main className="bg-white text-foreground">
            <Header />

            {/* HERO */}
            <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-black mb-4">Our Trusted Brands</h1>
                <p className="text-lg max-w-2xl mx-auto text-white/90">
                    We partner with leading global manufacturers to deliver high-quality electrical and solar solutions.
                </p>
            </section>

            {/* BRANDS GRID */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {brands.map((brand, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition group text-center"
                        >
                            {/* LOGO */}
                            <div className="relative w-full h-16 mb-4">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition"
                                />
                            </div>

                            {/* BRAND NAME */}
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition">
                                {brand.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}