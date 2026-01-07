import { Metadata } from 'next';
import Link from 'next/link';
import { Smile, Sparkles, Crown, Layers, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Services Asaba | Braces, Whitening & Veneers | Vivic Dental Clinic',
  description: 'Comprehensive dental services in Asaba: Orthodontics, braces, teeth whitening, veneers, smile makeovers, composite bonding, crowns & bridges. Expert care at Vivic Dental.',
  keywords: 'dental services asaba, braces asaba, teeth whitening asaba, veneers delta state, orthodontics asaba',
  openGraph: {
    title: 'Dental Services Asaba - Vivic Dental Clinic',
    description: 'Expert orthodontics, aesthetic dentistry and comprehensive dental care in Asaba',
    url: 'https://vivicdentalclinic.com/services',
  },
};

const services = [
  {
    icon: Smile,
    title: 'Orthodontics & Braces',
    shortDesc: 'Straighten your teeth with modern braces solutions',
    description: 'Transform your smile with our comprehensive orthodontic treatments. We offer traditional metal braces, ceramic braces, and clear aligners to suit your lifestyle and preferences. Our expert orthodontists use advanced techniques to ensure efficient, comfortable treatment that delivers stunning results. Whether you\'re dealing with crowding, gaps, overbites, or underbites, we create personalized treatment plans that gradually shift your teeth into perfect alignment. Experience the confidence that comes with a beautifully straight smile.',
    benefits: [
      'Improved bite function and oral health',
      'Enhanced facial aesthetics',
      'Boost in self-confidence',
      'Prevention of future dental problems',
      'Multiple treatment options available'
    ],
    href: '/services/orthodontics-braces',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    shortDesc: 'Professional whitening for a brighter smile',
    description: 'Achieve a dazzling white smile with our professional teeth whitening services. Using advanced whitening technology and medical-grade bleaching agents, we can lighten your teeth by several shades in just one visit. Our treatments are safe, effective, and customized to your needs. Whether you prefer in-office whitening for immediate results or take-home kits for gradual whitening, we have the perfect solution. Say goodbye to stains from coffee, tea, wine, or aging, and hello to a radiant, confident smile.',
    benefits: [
      'Immediate visible results',
      'Safe and professionally supervised',
      'Long-lasting effects with proper care',
      'Customized treatment intensity',
      'Boosts confidence instantly'
    ],
    href: '/services/teeth-whitening',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Crown,
    title: 'Veneers & Smile Makeover',
    shortDesc: 'Complete smile transformation with veneers',
    description: 'Transform your entire smile with custom porcelain veneers and comprehensive smile makeovers. Veneers are thin shells of medical-grade ceramic that cover the front surface of your teeth, correcting imperfections like chips, cracks, severe stains, gaps, and misshapen teeth. Our smile makeover process involves detailed planning using digital smile design technology to ensure your new smile perfectly complements your facial features. The result is a natural-looking, stunning smile that can last for many years with proper care.',
    benefits: [
      'Complete aesthetic transformation',
      'Natural-looking results',
      'Durable and stain-resistant',
      'Minimally invasive procedure',
      'Customized to your face shape'
    ],
    href: '/services/veneers-smile-makeover',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Layers,
    title: 'Composite Bonding',
    shortDesc: 'Fix chips, gaps, and discoloration',
    description: 'Composite bonding is a versatile, cost-effective solution for minor dental imperfections. Using tooth-colored composite resin material, we can repair chipped teeth, close small gaps, reshape uneven teeth, and cover discoloration. The procedure is quick, typically completed in one visit, and requires minimal tooth preparation. The composite material is carefully color-matched to your natural teeth and sculpted to achieve optimal aesthetics. Bonding is an excellent option for those seeking immediate improvements without the commitment of veneers.',
    benefits: [
      'Quick single-visit treatment',
      'Conservative approach',
      'Immediate results',
      'Cost-effective solution',
      'Natural appearance'
    ],
    href: '/services/composite-bonding',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Crown,
    title: 'Crowns & Bridges',
    shortDesc: 'Restore damaged or missing teeth',
    description: 'Restore the function and appearance of damaged or missing teeth with our custom crowns and bridges. Dental crowns are caps that cover and protect weakened, cracked, or severely decayed teeth, restoring their strength and appearance. Bridges are used to replace one or more missing teeth by anchoring artificial teeth to adjacent natural teeth. We use high-quality materials including porcelain and ceramic to create restorations that look and feel like natural teeth. Our precise fitting process ensures comfort and longevity.',
    benefits: [
      'Restores full chewing function',
      'Prevents adjacent teeth shifting',
      'Natural appearance and feel',
      'Long-lasting durability',
      'Protects remaining tooth structure'
    ],
    href: '/services/crowns-bridges',
    color: 'from-red-400 to-red-600'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Specialized Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental solutions combining expertise, technology, and care to transform your smile
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-orange mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-orange font-semibold hover:text-primary-green transition group"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className={`aspect-square bg-linear-to-br ${service.color} rounded-3xl opacity-20 absolute inset-0 blur-3xl`}></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                      <img
                        src={`/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}.jpg`}
                        alt={service.title}
                        className="rounded-2xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vivic */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vivic for Your Dental Care?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our orthodontists and aesthetic specialists have extensive training and years of experience in delivering exceptional results.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                We use state-of-the-art equipment and the latest treatment techniques to ensure optimal outcomes and patient comfort.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                Every treatment plan is customized to your unique needs, goals, and budget, ensuring you get the best possible results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-orange to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Smile Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a consultation to discuss which treatment is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-orange transition font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}