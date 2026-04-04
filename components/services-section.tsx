import { CheckCircle, Clipboard, Wrench, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Engineering & Design',
    description: 'Custom-designed electrical systems tailored to your specific operational requirements and regulatory standards',
    icon: Clipboard,
    features: [
      'Load analysis & calculation',
      'System design optimization',
      'CAD documentation',
      'Compliance verification',
    ],
  },
  {
    id: 2,
    title: 'Installation & Implementation',
    description: 'Full-scale project execution with precision installation and seamless integration of all electrical components',
    icon: Wrench,
    features: [
      'Professional installation',
      'Quality assurance checks',
      'Timeline management',
      'Minimal downtime approach',
    ],
  },
  {
    id: 3,
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing protocols ensuring all systems meet international standards before going live',
    icon: CheckCircle,
    features: [
      'Performance testing',
      'Safety validation',
      'Load testing',
      'Certification documentation',
    ],
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    description: 'Preventive and corrective maintenance programs keeping your systems operating at peak efficiency',
    icon: TrendingUp,
    features: [
      '24/7 emergency support',
      'Scheduled maintenance',
      'Performance monitoring',
      'Spare parts availability',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end electrical engineering services with uncompromising quality standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary transition"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
