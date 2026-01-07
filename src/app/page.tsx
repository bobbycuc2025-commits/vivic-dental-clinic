import Link from 'next/link';
import { ArrowRight, Award, Users, Clock, Star, Shield, Heart } from 'lucide-react';
import ServicesGrid from '@/components/ServicesGrid';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Smile,
                <span className="gradient-text"> Our Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to Vivic Dental Clinic, where modern dentistry meets compassionate care. Located in the heart of Asaba, we specialize in transforming smiles through expert orthodontics, aesthetic dentistry, and comprehensive dental services. Our state-of-the-art facility and experienced team are dedicated to making your dental journey comfortable, efficient, and rewarding. Whether you're seeking braces, teeth whitening, or a complete smile makeover, we're here to help you achieve the confident, radiant smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-primary-orange text-white px-8 py-4 rounded-full hover:bg-primary-green transition font-semibold text-lg group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-full hover:bg-primary-orange hover:text-white transition font-semibold text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-primary-orange to-primary-green rounded-3xl opacity-20 absolute inset-0 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/hero-smiling-patient.jpg"
                  alt="Happy patient with beautiful smile at Vivic Dental Clinic"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vivic Dental Clinic?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of expertise, technology, and care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Orthodontists',
                description: 'Highly qualified specialists with years of experience in orthodontics and aesthetic dentistry'
              },
              {
                icon: Shield,
                title: 'Modern Technology',
                description: 'State-of-the-art equipment and latest treatment techniques for optimal results'
              },
              {
                icon: Heart,
                title: 'Compassionate Care',
                description: 'Warm, friendly environment where your comfort and wellbeing come first'
              },
              {
                icon: Users,
                title: 'Family-Friendly',
                description: 'Comprehensive dental care for patients of all ages in a welcoming atmosphere'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Convenient appointment times to fit your busy lifestyle, including Saturdays'
              },
              {
                icon: Star,
                title: 'Proven Results',
                description: 'Hundreds of satisfied patients with transformed smiles and improved confidence'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100"
              >
                <div className="w-14 h-14 bg-linear-to-br from-primary-orange to-primary-green rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs
            </p>
          </div>
          <ServicesGrid />
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary-orange text-white px-8 py-4 rounded-full hover:bg-primary-green transition font-semibold text-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real people who trust us with their smiles
            </p>
          </div>
          <GoogleReviews />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-orange to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your consultation today and take the first step towards the confident, beautiful smile you've always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg"
            >
              Book Appointment Now
            </Link>
            <a
              href="tel:+2348100670347"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-orange transition font-semibold text-lg"
            >
              Call: 08100670347
            </a>
          </div>
        </div>
      </section>
    </>
  );
}