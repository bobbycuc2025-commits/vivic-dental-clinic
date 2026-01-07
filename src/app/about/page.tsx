import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Heart, Users, Sparkles, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Vivic Dental Clinic | Expert Dentists in Asaba, Delta State',
  description: 'Learn about Vivic Dental Clinic - modern dental care with warm hearts. Meet our expert orthodontists and aesthetic specialists serving Asaba and Delta State.',
  keywords: 'about vivic dental, dentist asaba team, orthodontist delta state, dental clinic asaba',
  openGraph: {
    title: 'About Vivic Dental Clinic - Expert Dentists in Asaba',
    description: 'Modern dental care with warm hearts. Meet our team of expert orthodontists.',
    url: 'https://vivicdentalclinic.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Vivic Dental Clinic</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern care with warm hearts - where expertise meets compassion
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vivic Dental Clinic was founded with a simple yet powerful vision: to bring world-class dental care to the heart of Asaba, Delta State. What started as a dream to transform smiles has grown into one of the region's most trusted dental practices.
                </p>
                <p>
                  Our journey began with a commitment to combining advanced orthodontic techniques with genuine compassionate care. We believe that every patient deserves not just treatment, but an experience that makes them feel valued, comfortable, and confident.
                </p>
                <p>
                  Today, Vivic Dental Clinic stands as a beacon of excellence in aesthetic and orthodontic dentistry. Our state-of-the-art facility, equipped with the latest technology, serves hundreds of satisfied patients who trust us with their most precious asset - their smile.
                </p>
                <p>
                  We're more than just a dental clinic; we're a family dedicated to transforming lives one smile at a time. Every member of our team shares the same passion: helping you achieve the confident, beautiful smile you've always dreamed of.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 bg-linear-to-br from-primary-orange to-primary-green rounded-3xl opacity-20 absolute inset-0 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                <img
                  src="/clinic-exterior.jpg"
                  alt="Vivic Dental Clinic exterior in Asaba"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-linear-to-br from-primary-orange to-primary-green rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional dental care that transforms smiles and changes lives. We are committed to delivering personalized, pain-free treatments using cutting-edge technology while maintaining the highest standards of safety, ethics, and patient comfort. Our mission is to make quality orthodontic and aesthetic dentistry accessible to every family in Asaba and beyond.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-linear-to-br from-primary-green to-primary-orange rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental clinic in Delta State and Nigeria, recognized for excellence in orthodontics and aesthetic dentistry. We envision a future where everyone has access to beautiful, healthy smiles and where dental care is a positive, transformative experience. Through innovation, education, and compassion, we aim to set new standards in dental healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We treat every patient with empathy, kindness, and respect'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We pursue the highest standards in every aspect of care'
              },
              {
                icon: Users,
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical practices'
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'We embrace the latest technology and treatment methods'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-linear-to-br from-primary-orange to-primary-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified professionals dedicated to your smile
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Vivian Chukwuma',
                role: 'Lead Orthodontist & Aesthetic Specialist',
                qualifications: 'BDS, MDS (Orthodontics)',
                image: '/images/team/dr-vivian.jpg',
                bio: 'With over 10 years of experience, Dr. Vivian specializes in advanced orthodontics and smile makeovers.'
              },
              {
                name: 'Dr. Michael Okonkwo',
                role: 'Aesthetic Dentist',
                qualifications: 'BDS, Cert. Aesthetic Dentistry',
                image: '/images/team/dr-michael.jpg',
                bio: 'Expert in cosmetic dentistry, veneers, and teeth whitening with a passion for creating perfect smiles.'
              },
              {
                name: 'Dr. Sarah Eze',
                role: 'General & Restorative Dentist',
                qualifications: 'BDS, FMCDS',
                image: '/images/team/dr-sarah.jpg',
                bio: 'Specializes in crowns, bridges, and comprehensive dental restoration with gentle care.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                <div className="aspect-square bg-linear-to-br from-primary-orange/20 to-primary-green/20 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-orange font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.qualifications}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary-orange to-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience the Vivic Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied patients who have transformed their smiles with us.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold text-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}