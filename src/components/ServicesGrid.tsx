import Link from 'next/link';
import { Smile, Sparkles, Crown, Layers } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Orthodontics & Braces',
    description: 'Straighten your teeth with modern braces solutions including metal, ceramic, and clear aligners.',
    href: '/services/orthodontics-braces',
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile in just one visit.',
    href: '/services/teeth-whitening',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Crown,
    title: 'Veneers & Smile Makeover',
    description: 'Transform your smile completely with custom porcelain veneers and comprehensive makeovers.',
    href: '/services/veneers-smile-makeover',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Layers,
    title: 'Composite Bonding',
    description: 'Repair chips, gaps, and discoloration with tooth-colored composite resin bonding.',
    href: '/services/composite-bonding',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Crown,
    title: 'Crowns & Bridges',
    description: 'Restore damaged teeth or replace missing ones with durable, natural-looking crowns and bridges.',
    href: '/services/crowns-bridges',
    color: 'from-red-400 to-red-600'
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.href}
          className="group bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100"
        >
          <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-orange transition">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {service.description}
          </p>
          <span className="text-primary-orange font-semibold inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}