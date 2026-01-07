import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/icon-512.png" alt="Vivic Dental Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white">Vivic Dental</span>
            </div>
            <p className="text-sm mb-4">
              Modern dental care with warm hearts. Your trusted partner for beautiful, healthy smiles in Asaba.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-orange transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-orange transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary-orange transition">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-orange transition">Gallery</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary-orange transition">Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-primary-orange transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-orange transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/orthodontics-braces" className="hover:text-primary-orange transition">Orthodontics & Braces</Link></li>
              <li><Link href="/services/teeth-whitening" className="hover:text-primary-orange transition">Teeth Whitening</Link></li>
              <li><Link href="/services/veneers-smile-makeover" className="hover:text-primary-orange transition">Smile Makeover</Link></li>
              <li><Link href="/services/composite-bonding" className="hover:text-primary-orange transition">Composite Bonding</Link></li>
              <li><Link href="/services/crowns-bridges" className="hover:text-primary-orange transition">Crowns & Bridges</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 shrink-0 text-primary-orange" />
                <span>No. 1 Obi Link Drive, off Okpanam Road, opposite 5 Star Restaurant, Asaba, Delta State</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 shrink-0 text-primary-orange" />
                <a href="tel:+2348100670347" className="hover:text-primary-orange transition">08100670347</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 shrink-0 text-primary-orange" />
                <a href="mailto:info@vivicdentalclinic.com" className="hover:text-primary-orange transition">info@vivicdentalclinic.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 mt-0.5 shrink-0 text-primary-orange" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Vivic Dental Clinic. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-primary-orange transition">Privacy Policy</Link>
            {' | '}
            <Link href="/terms" className="hover:text-primary-orange transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}