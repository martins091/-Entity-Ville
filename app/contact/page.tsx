'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="bg-white text-foreground">
      <Header />

      {/* Hero Section - Reduced height */}
      <section className="relative py-16 bg-gradient-to-br from-primary via-blue-600 to-blue-700 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full -ml-40 -mb-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Let's discuss your electrical component needs
            </p>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="p-6 bg-white border-2 border-primary/10 rounded-2xl hover:border-accent hover:shadow-xl transition">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground mb-3">Call us during business hours</p>
                <a href="tel:+2348082538803" className="text-primary font-bold text-base hover:text-accent transition">
                  +234 808 253 8803
                </a>
              </div>

              {/* Email */}
              <div className="p-6 bg-white border-2 border-primary/10 rounded-2xl hover:border-accent hover:shadow-xl transition">
                <div className="inline-flex p-3 bg-accent/10 rounded-xl mb-4">
                  <Mail size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">Send us an email anytime</p>
                <a href="mailto:sales@entityville.com" className="text-accent font-bold text-base hover:text-primary transition break-all">
                  sales@entityville.com
                </a>
              </div>

              {/* Address */}
              <div className="p-6 bg-white border-2 border-primary/10 rounded-2xl hover:border-accent hover:shadow-xl transition">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">Office</h3>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                  37, Adeniran Ogunsanya Mall, <br />
                  Surulere, Lagos State, Nigeria
                </p>
              </div>

              {/* Hours */}
              <div className="p-6 bg-white border-2 border-primary/10 rounded-2xl hover:border-accent hover:shadow-xl transition">
                <div className="inline-flex p-3 bg-accent/10 rounded-xl mb-4">
                  <Clock size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">Hours</h3>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p className="font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="font-semibold">Sat: 10:00 AM - 2:00 PM</p>
                  <p className="font-semibold">Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-primary/20 shadow-xl">
                <h3 className="text-2xl font-black text-foreground mb-6">Send us a Message</h3>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white text-sm"
                      placeholder="+234 808 253 8803"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white text-sm"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-sm font-bold text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white text-sm"
                    placeholder="Product inquiry, quote request, etc."
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition bg-white resize-none text-sm"
                    placeholder="Tell us about your project or product requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-red-600 transition font-bold text-base shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-center text-muted-foreground text-xs mt-5">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>

          {/* Products Inquiry Note */}
          <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-primary/20 text-center">
            <p className="text-foreground font-semibold mb-2">Looking for specific products?</p>
            <p className="text-sm text-muted-foreground mb-3">
              Browse our complete range of cable trays, circuit breakers, earthing systems, busbars, lightning arrestors, wiring devices, and more.
            </p>
            <Link href="/" className="inline-block px-5 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition font-bold text-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-foreground mb-2">Visit Our <span className="text-accent">Location</span></h3>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.3752926!3d6.5246413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2e3f8b2e2b%3A0x2e3f8b2e3f8b2e2b!2sAdeniran%20Ogunsanya%20Shopping%20Mall!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Entity Ville Location"
              className="rounded-xl"
            ></iframe>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            📍 37, Adeniran Ogunsanya Mall, Surulere, Lagos State, Nigeria
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}