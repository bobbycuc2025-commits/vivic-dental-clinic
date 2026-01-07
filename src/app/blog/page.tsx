import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dental Health Blog | Expert Tips & Advice - Vivic Dental Clinic Asaba',
  description: 'Expert dental advice, tips, and insights from Vivic Dental Clinic in Asaba. Learn about orthodontics, teeth whitening, oral health, and smile transformations.',
  keywords: 'dental blog, oral health tips, teeth care, orthodontics advice, dental clinic asaba',
  openGraph: {
    title: 'Dental Health Blog - Vivic Dental Clinic',
    description: 'Expert dental advice and tips from Asaba\'s leading dental clinic',
    url: 'https://vivicdentalclinic.com/blog',
  },
};

const blogPosts = [
  {
    title: 'How to Choose the Best Braces in Asaba: Complete 2026 Guide',
    slug: 'best-braces-asaba',
    excerpt: 'Everything you need to know about selecting the right braces and orthodontist in Asaba. Compare types, costs, and treatment options.',
    author: 'Dr. Vivian Chukwuma',
    date: 'December 15, 2025',
    readTime: '8 min read',
    category: 'Orthodontics',
    image: '/images/blog/braces-guide.jpg',
    featured: true
  },
  {
    title: 'Teeth Whitening Options in Nigeria 2026: What Works Best?',
    slug: 'teeth-whitening-nigeria-2026',
    excerpt: 'Professional vs. at-home whitening: Compare methods, costs, safety, and results. Find the best whitening solution for your smile.',
    author: 'Dr. Michael Okonkwo',
    date: 'December 10, 2025',
    readTime: '6 min read',
    category: 'Cosmetic Dentistry',
    image: 'teeth-whitening.jpg',
    featured: true
  },
  {
    title: 'Maintaining Your Smile Makeover: Long-Term Care Guide',
    slug: 'maintaining-smile-makeover',
    excerpt: 'Learn how to protect your investment with proper care for veneers, whitening, and orthodontic results. Expert maintenance tips.',
    author: 'Dr. Sarah Eze',
    date: 'December 5, 2025',
    readTime: '7 min read',
    category: 'Smile Care',
    image: '/images/blog/smile-maintenance.jpg',
    featured: false
  },
  {
    title: '10 Signs You Need to See an Orthodontist Today',
    slug: 'signs-need-orthodontist',
    excerpt: 'From jaw pain to crooked teeth, discover the warning signs that indicate you should book an orthodontic consultation immediately.',
    author: 'Dr. Vivian Chukwuma',
    date: 'November 28, 2025',
    readTime: '5 min read',
    category: 'Orthodontics',
    image: '/images/blog/orthodontist-signs.jpg',
    featured: false
  },
  {
    title: 'The Ultimate Guide to Perfect Oral Hygiene in Nigeria',
    slug: 'oral-hygiene-guide-nigeria',
    excerpt: 'Master your daily dental routine with expert tips on brushing, flossing, and choosing the right products available in Nigeria.',
    author: 'Dr. Sarah Eze',
    date: 'November 20, 2025',
    readTime: '9 min read',
    category: 'Oral Health',
    image: '/blog-oral-hygiene.jpg',
    featured: false
  }
];

const categories = ['All', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Health', 'Smile Care'];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dental Health <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert advice, tips, and insights to help you achieve and maintain a healthy, beautiful smile
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  index === 0
                    ? 'bg-primary-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                <div className="aspect-video bg-linear-to-br from-primary-orange/20 to-primary-green/20 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-orange transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <span className="text-primary-orange font-semibold inline-flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                <div className="aspect-video bg-linear-to-br from-primary-orange/20 to-primary-green/20 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-primary-orange px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-orange transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-linear-to-br from-primary-orange to-primary-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Dental Health Tips
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for expert advice, special offers, and the latest dental trends
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-primary-orange px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-sm mt-4 opacity-75">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-primary-orange/10 to-primary-green/10 rounded-3xl p-8 lg:p-12 text-center border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a consultation with our expert team and start your journey to a healthier, more confident smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center bg-primary-orange text-white px-8 py-4 rounded-full hover:bg-primary-green transition font-semibold text-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+2348100670347"
                className="inline-flex items-center justify-center border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-full hover:bg-primary-orange hover:text-white transition font-semibold text-lg"
              >
                Call: 08100670347
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}