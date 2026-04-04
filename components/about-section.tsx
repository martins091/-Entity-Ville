import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              About Entity Ville Ltd
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over two decades of excellence, Entity Ville Ltd has been at the forefront of electrical engineering solutions across Nigeria and West Africa. Our commitment to innovation, quality, and customer satisfaction has made us the trusted partner for major corporations in oil & gas, telecommunications, and manufacturing sectors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in designing, installing, and maintaining complex electrical systems that power Africa&apos;s most critical infrastructure. Our team of certified engineers brings world-class expertise and local knowledge to every project.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <p className="text-muted-foreground">Professional Staff</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Entity Ville Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
