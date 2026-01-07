import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Sun, Moon, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ultimate Guide to Perfect Oral Hygiene in Nigeria 2026 | Vivic Dental',
  description: 'Master your dental routine with expert tips on brushing, flossing, and choosing products available in Nigeria. Achieve optimal oral health.',
  keywords: 'oral hygiene nigeria, dental care tips, brushing technique, dental products nigeria, oral health routine',
};

export default function OralHygieneGuidePost() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary-orange hover:text-primary-green transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate Guide to Perfect Oral Hygiene in Nigeria
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>November 20, 2025</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Dr. Sarah Eze</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Great oral health starts with a solid daily routine. Whether you're in Lagos, Asaba, or anywhere in Nigeria, this comprehensive guide will transform your dental care habits and help you achieve the healthy, beautiful smile you deserve. Let's break down exactly what you need to know and do.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Sun, title: 'Morning', time: '5 minutes', color: 'from-yellow-400 to-orange-500' },
                { icon: Coffee, title: 'During Day', time: 'As needed', color: 'from-blue-400 to-purple-500' },
                { icon: Moon, title: 'Evening', time: '10 minutes', color: 'from-indigo-400 to-purple-600' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Perfect Morning Routine (5 Minutes)</h2>

            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 my-8 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Step-by-Step Morning Care:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rinse Your Mouth (30 seconds)</h4>
                    <p className="text-gray-700">
                      Start by rinsing with plain water to remove bacteria and debris that accumulated overnight. Swish vigorously for 30 seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Brush Your Teeth (2 minutes minimum)</h4>
                    <p className="text-gray-700 mb-3">Use the proper brushing technique:</p>
                    <ul className="space-y-2 text-gray-700 text-sm ml-4">
                      <li>• Hold brush at 45-degree angle to gums</li>
                      <li>• Use gentle circular motions (not sawing back-and-forth)</li>
                      <li>• Brush outer surfaces, inner surfaces, and chewing surfaces</li>
                      <li>• Don't forget behind your back molars</li>
                      <li>• Brush your tongue from back to front</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rinse with Mouthwash (30 seconds)</h4>
                    <p className="text-gray-700">
                      Use an antiseptic or fluoride mouthwash. Swish for 30 seconds, reaching all areas. Don't eat or drink for 30 minutes after.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clean Your Toothbrush</h4>
                    <p className="text-gray-700">
                      Rinse thoroughly under running water, shake off excess water, and store upright in open air (not in a closed container where bacteria can grow).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Crucial Evening Routine (10 Minutes)</h2>

            <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 my-8 border border-purple-200">
              <p className="text-gray-800 mb-6 font-semibold">
                Your evening routine is MORE important than morning because bacteria multiply rapidly overnight. Don't skip this!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Floss First (3-5 minutes)</h4>
                    <p className="text-gray-700 mb-3">
                      Yes, floss BEFORE brushing. This loosens debris that brushing can then remove. Here's how:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm ml-4">
                      <li>• Use 18 inches of floss (wrap around middle fingers)</li>
                      <li>• Guide floss between teeth using gentle rubbing motion</li>
                      <li>• Curve floss into C-shape against tooth</li>
                      <li>• Slide floss up and down against tooth surface and under gumline</li>
                      <li>• Use clean section of floss for each tooth</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Brush Thoroughly (2-3 minutes)</h4>
                    <p className="text-gray-700">
                      Follow the same technique as morning, but take extra time. Set a timer if needed. Many electric toothbrushes have built-in 2-minute timers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clean Your Tongue (1 minute)</h4>
                    <p className="text-gray-700">
                      Use a tongue scraper or your toothbrush. Scrape or brush from back to front gently. This removes bacteria and prevents bad breath.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Mouthwash (30 seconds)</h4>
                    <p className="text-gray-700">
                      Final rinse to kill bacteria. Spit out but don't rinse with water after - let the fluoride work overnight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center shrink-0 mr-4 text-white font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Optional: Water Flosser</h4>
                    <p className="text-gray-700">
                      If you have braces, implants, or just want extra cleaning, use a water flosser as a final step.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Choosing the Right Products in Nigeria</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Toothbrushes</h3>

            <div className="bg-gray-50 rounded-2xl p-8 my-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Manual Toothbrushes</h4>
                  <p className="text-gray-700 mb-3"><strong>Best brands in Nigeria:</strong></p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Oral-B Pro-Health (₦500-800)</li>
                    <li>• Colgate 360° (₦400-600)</li>
                    <li>• Sensodyne Soft (₦800-1,200)</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>Choose:</strong> Soft bristles always! Medium and hard damage gums and enamel.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Electric Toothbrushes (Recommended)</h4>
                  <p className="text-gray-700 mb-3"><strong>Available in Nigeria:</strong></p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Oral-B Vitality (₦8,000-12,000)</li>
                    <li>• Colgate 360 Battery (₦3,000-5,000)</li>
                    <li>• Philips Sonicare (₦15,000-25,000)</li>
                  </ul>
                  <p className="text-gray-700 mt-4"><strong>Worth it?</strong> Yes! Studies show electric brushes remove 21% more plaque.</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <p className="text-gray-800 font-semibold mb-2">⏰ Replace Every 3 Months</p>
                <p className="text-gray-700 text-sm">Or sooner if bristles are frayed. Worn brushes are ineffective and can harbor bacteria.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Toothpaste</h3>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 my-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For General Use:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Colgate Total (₦800-1,200):</strong> Excellent all-around protection, fights plaque</li>
                    <li>• <strong>Oral-B Pro-Expert (₦900-1,400):</strong> Multi-action formula, good for families</li>
                    <li>• <strong>Close-Up (₦300-500):</strong> Budget-friendly option with fluoride</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Sensitive Teeth:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Sensodyne Repair & Protect (₦1,500-2,200):</strong> Best for sensitivity</li>
                    <li>• <strong>Colgate Sensitive Pro-Relief (₦1,200-1,800):</strong> Fast-acting relief</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">For Whitening (Maintenance Only):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Colgate Optic White (₦1,000-1,500):</strong> Removes surface stains</li>
                    <li>• <strong>Oral-B 3D White (₦1,200-1,800):</strong> Gentle whitening</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-800 font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-gray-700 text-sm">
                  Always choose toothpaste with fluoride (1,000-1,500 ppm). This strengthens enamel and prevents cavities. All recommended brands above contain fluoride.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dental Floss & Alternatives</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Traditional Floss:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Oral-B Essential Floss (₦600-900)</li>
                  <li>• Colgate Total Floss (₦500-800)</li>
                  <li>• Johnson & Johnson Reach (₦700-1,000)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3"><strong>Choose:</strong> Waxed if teeth are tight, unwaxed for wider spaces.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Water Flossers (Advanced):</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Waterpik (₦20,000-35,000)</li>
                  <li>• Philips Sonicare AirFloss (₦25,000-40,000)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-3"><strong>Ideal for:</strong> Braces, implants, bridges, or those who hate traditional flossing.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mouthwash</h3>

            <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-8 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-4">Top Picks Available in Nigeria:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Listerine Total Care (₦2,000-3,000):</strong> 6-in-1 protection, kills 99% of germs</li>
                <li>• <strong>Oral-B Pro-Health (₦1,500-2,500):</strong> Alcohol-free, gentle but effective</li>
                <li>• <strong>Colgate Plax (₦800-1,200):</strong> Budget-friendly, fresh breath</li>
                <li>• <strong>Corsodyl (₦3,000-4,500):</strong> For gum problems (use short-term only)</li>
              </ul>

              <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-800 font-semibold mb-2">Important Notes:</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Alcohol-free mouthwashes are better for daily use (less drying)</li>
                  <li>• Don't use mouthwash immediately after brushing - wait 30+ minutes</li>
                  <li>• Look for fluoride-containing mouthwash for extra protection</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes to Avoid</h2>

            <div className="space-y-6 my-8">
              {[
                {
                  mistake: 'Brushing Too Hard',
                  why: 'Damages enamel and causes gum recession',
                  fix: 'Use gentle circular motions, let the brush do the work'
                },
                {
                  mistake: 'Brushing Immediately After Eating',
                  why: 'Acid from food softens enamel temporarily',
                  fix: 'Wait 30 minutes, or rinse with water and chew sugarfree gum instead'
                },
                {
                  mistake: 'Only Brushing Once Daily',
                  why: 'Plaque hardens into tartar within 24-48 hours',
                  fix: 'Brush minimum twice daily, preferably after every meal'
                },
                {
                  mistake: 'Skipping Flossing',
                  why: 'Brush reaches only 60% of tooth surfaces',
                  fix: 'Floss daily, preferably before bed'
                },
                {
                  mistake: 'Using Same Toothbrush Too Long',
                  why: 'Worn bristles don\'t clean effectively, harbor bacteria',
                  fix: 'Replace every 3 months or when bristles fray'
                },
                {
                  mistake: 'Rinsing Immediately After Brushing',
                  why: 'Washes away protective fluoride',
                  fix: 'Spit out toothpaste but don\'t rinse, or wait 30 minutes'
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">❌ {item.mistake}</h4>
                  <p className="text-gray-700 text-sm mb-3"><strong>Why it's bad:</strong> {item.why}</p>
                  <p className="text-green-800 text-sm"><strong>✓ Fix:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diet and Lifestyle Tips</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-4">✓ DO Consume:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Dairy products (calcium for strong teeth)</li>
                  <li>• Crunchy vegetables (natural teeth cleaners)</li>
                  <li>• Water (rinses away food particles)</li>
                  <li>• Green tea (antibacterial properties)</li>
                  <li>• Cheese (neutralizes acids)</li>
                  <li>• Sugarfree gum (stimulates saliva)</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-4">✗ LIMIT or AVOID:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Sugary drinks (soda, juice)</li>
                  <li>• Sticky candies and sweets</li>
                  <li>• Acidic foods (excess citrus)</li>
                  <li>• Ice (never chew ice!)</li>
                  <li>• Tobacco (stains and disease)</li>
                  <li>• Excessive alcohol</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to See Your Dentist</h2>

            <div className="bg-primary-orange/10 rounded-2xl p-8 my-8 border border-primary-orange/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Schedule:</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• <strong>Every 6 months:</strong> Professional cleaning and check-up</li>
                <li>• <strong>Annual X-rays:</strong> Detect problems early</li>
                <li>• <strong>Immediate visit if you notice:</strong> Bleeding gums, persistent pain, loose teeth, bad breath that won't go away, visible cavities, or sensitivity</li>
              </ul>

              <p className="text-gray-800 font-semibold">
                Remember: Prevention is always cheaper and easier than treatment!
              </p>
            </div>

            <div className="bg-linear-to-br from-primary-orange to-primary-green rounded-2xl p-8 text-white text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Next Check-Up?</h3>
              <p className="mb-6 opacity-90">
                Visit Vivic Dental Clinic in Asaba for comprehensive dental care and personalized oral hygiene advice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+2348100670347"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary-orange transition font-semibold"
                >
                  Call: 08100670347
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-500">
                <strong>About the Author:</strong> Dr. Sarah Eze is a general and restorative dentist at Vivic Dental Clinic with a passion for preventive care and patient education. She believes that proper oral hygiene is the foundation of lifelong dental health.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}