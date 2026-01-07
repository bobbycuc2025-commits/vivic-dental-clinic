'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-primary-green text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+2348100670347" className="flex items-center hover:text-primary-orange transition">
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">08100670347</span>
            </a>
            <span className="hidden md:inline">Mon - Fri: 9AM - 6PM | Sat: 10AM - 4PM</span>
          </div>
          <Link 
            href="/booking"
            className="flex items-center hover:text-primary-orange transition font-medium"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
           <img src="/icon-512.png" alt="Vivic Dental Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Vivic Dental</span>
              <span className="text-xs text-gray-600">Your Smile, Our Priority</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-orange transition font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-primary-orange text-white px-6 py-2.5 rounded-full hover:bg-primary-green transition font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-orange hover:bg-gray-100 transition"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-orange transition font-medium px-4 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary-orange text-white px-6 py-3 rounded-full hover:bg-primary-green transition font-semibold text-center mx-4"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}