import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Shield, Star, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maintaining Your Smile Makeover: Long-Term Care Guide | Vivic Dental',
  description: 'Expert guide to protecting your smile makeover investment. Care tips for veneers, whitening, orthodontics, and cosmetic dental work.',
  keywords: 'smile makeover care, veneer maintenance, dental care tips, cosmetic dentistry aftercare',
};

export default function SmileMaintenancePost() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary-orange hover:text-primary-green transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Maintaining Your Smile Makeover: The Ultimate Long-Term Care Guide
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>December 5, 2025</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Dr. Sarah Eze</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Congratulations on your smile makeover! You've invested time, money, and trust into creating a beautiful new smile. Now comes the important part: keeping it that way. This comprehensive guide will show you exactly how to protect your investment and enjoy your stunning smile for decades to come.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Shield, title: 'Protect', desc: 'Shield your investment' },
                { icon: Star, title: 'Maintain', desc: 'Keep it beautiful' },
                { icon: Heart, title: 'Preserve', desc: 'Long-lasting results' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-linear-to-br from-primary-orange to-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Daily Care Essentials</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Morning Routine (5 Minutes)</h3>
            
            <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 my-8 border border-orange-100">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary-orange text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">1</span>
                  <div>
                    <strong>Rinse with water</strong> to remove bacteria accumulated overnight
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-orange text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">2</span>
                  <div>
                    <strong>Brush for 2 minutes</strong> using a soft-bristled electric toothbrush at a 45-degree angle
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-orange text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">3</span>
                  <div>
                    <strong>Gentle circular motions</strong> - never scrub aggressively, especially if you have veneers
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-orange text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">4</span>
                  <div>
                    <strong>Use fluoride toothpaste</strong> (non-whitening to avoid abrasion on veneers)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-orange text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">5</span>
                  <div>
                    <strong>Rinse with antiseptic mouthwash</strong> (alcohol-free to prevent drying)
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evening Routine (10 Minutes - Most Important!)</h3>
            
            <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8 my-8 border border-blue-100">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary-green text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">1</span>
                  <div>
                    <strong>Floss thoroughly</strong> - use unwaxed floss or water flosser between all teeth, especially around veneers and crowns
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-green text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">2</span>
                  <div>
                    <strong>Brush for 2 minutes</strong> paying extra attention to gum line where veneers meet natural teeth
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-green text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">3</span>
                  <div>
                    <strong>Clean your tongue</strong> with a tongue scraper to remove bacteria
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-green text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">4</span>
                  <div>
                    <strong>Use mouthwash</strong> for 30 seconds minimum
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-green text-white rounded-full w-7 h-7 flex items-center justify-center shrink-0 mr-3 font-semibold">5</span>
                  <div>
                    <strong>Wear your retainer</strong> (if you had orthodontic work) EVERY NIGHT - no exceptions!
                  </div>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Specific Care by Treatment Type</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Caring for Veneers</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Veneers are incredibly durable but require specific care to maintain their beauty and longevity. With proper maintenance, they can last 10-15 years or more.
            </p>

            <div className="bg-white border-2 border-primary-orange/20 rounded-2xl p-8 my-8">
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">DO's for Veneers:</h4>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ Use a soft-bristled toothbrush (hard bristles can scratch)</li>
                <li>✓ Choose non-abrasive toothpaste (avoid whitening formulas)</li>
                <li>✓ Floss daily with care around veneer margins</li>
                <li>✓ Rinse after consuming staining foods and drinks</li>
                <li>✓ Visit your dentist every 6 months for professional cleaning</li>
                <li>✓ Wear a night guard if you grind your teeth</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-4 text-lg">DON'Ts for Veneers:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✗ Never bite directly into hard foods (apples, carrots, ice)</li>
                <li>✗ Don't use your teeth as tools (opening packages, bottles)</li>
                <li>✗ Avoid excessive alcohol consumption (can weaken bonding)</li>
                <li>✗ Never skip dental check-ups</li>
                <li>✗ Don't ignore chips or cracks - seek immediate repair</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Maintaining Teeth Whitening Results</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional whitening can last 1-3 years with proper care. Here's how to keep your teeth brilliantly white:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">The 48-Hour Rule</h4>
              <p className="text-gray-700 mb-4">
                After any whitening treatment, your teeth are more porous and susceptible to staining for 48 hours. Follow the "white diet":
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-green-700 mb-3">✓ SAFE TO EAT/DRINK:</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• White fish, chicken, turkey</li>
                    <li>• White rice, pasta (no sauce)</li>
                    <li>• Egg whites, white cheese</li>
                    <li>• Bananas, white grapes</li>
                    <li>• Cauliflower, potatoes</li>
                    <li>• Water, white wine, milk</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">✗ AVOID:</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Coffee, tea, cola</li>
                    <li>• Red wine, dark beer</li>
                    <li>• Tomato sauce, soy sauce</li>
                    <li>• Berries, beets</li>
                    <li>• Dark chocolate</li>
                    <li>• Tobacco (always!)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-4 mt-8">Long-Term Whitening Maintenance:</h4>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• <strong>Touch-up treatments:</strong> Every 6-12 months as needed</li>
              <li>• <strong>Straw method:</strong> Always use a straw for staining beverages</li>
              <li>• <strong>Immediate rinsing:</strong> Swish with water after consuming staining foods</li>
              <li>• <strong>Professional cleaning:</strong> Every 6 months to remove surface stains</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Post-Orthodontic Care (Retainer Rules)</h3>
            
            <div className="bg-red-50 rounded-2xl p-8 my-8 border-2 border-red-200">
              <h4 className="font-semibold text-red-900 mb-4 text-lg">⚠️ CRITICAL: Wear Your Retainer!</h4>
              <p className="text-gray-800 mb-4">
                This is the #1 most important rule after braces or aligners. Teeth have "memory" and will try to shift back to their original positions.
              </p>
              
              <div className="space-y-4 text-gray-800">
                <p><strong>First 3 months:</strong> Wear 24/7 (except when eating/brushing)</p>
                <p><strong>3-6 months:</strong> Wear every night while sleeping</p>
                <p><strong>6 months+:</strong> Wear 3-5 nights per week minimum</p>
                <p><strong>Long-term:</strong> Many orthodontists recommend nightly wear forever</p>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900 mb-4 mt-8">Retainer Care Tips:</h4>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>• Clean daily with mild soap and cool water (never hot water - it warps plastic)</li>
              <li>• Soak weekly in retainer cleaning solution</li>
              <li>• Store in protective case when not wearing</li>
              <li>• Keep away from pets (dogs love to chew retainers!)</li>
              <li>• Bring to all dental appointments for check-ups</li>
              <li>• Replace every 1-2 years or if damaged</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dietary Guidelines for Smile Longevity</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Foods That Strengthen Teeth</h3>
            
            <div className="bg-green-50 rounded-2xl p-8 my-8 border border-green-200">
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Dairy products:</strong> Cheese, yogurt, milk (rich in calcium and phosphorus)</li>
                <li>• <strong>Crunchy vegetables:</strong> Celery, carrots, bell peppers (natural teeth cleaners)</li>
                <li>• <strong>Leafy greens:</strong> Spinach, kale (high in calcium and folic acid)</li>
                <li>• <strong>Lean proteins:</strong> Chicken, fish, eggs (phosphorus for strong enamel)</li>
                <li>• <strong>Nuts and seeds:</strong> Almonds, sesame seeds (calcium and healthy fats)</li>
                <li>• <strong>Water:</strong> Rinses away food particles and bacteria</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Foods to Limit or Avoid</h3>
            
            <div className="bg-orange-50 rounded-2xl p-8 my-8 border border-orange-200">
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Sticky/Chewy foods:</strong> Caramels, gummies, dried fruits (can dislodge veneers/crowns)</li>
                <li>• <strong>Very hard foods:</strong> Ice, hard candy, popcorn kernels (risk of chipping)</li>
                <li>• <strong>Acidic foods:</strong> Citrus, pickles, vinegar (erodes enamel over time)</li>
                <li>• <strong>Staining beverages:</strong> Coffee, tea, red wine, dark sodas</li>
                <li>• <strong>Sugary snacks:</strong> Candy, cookies, cake (feeds cavity-causing bacteria)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Maintenance Schedule</h2>

            <div className="bg-linear-to-br from-primary-orange/10 to-primary-green/10 rounded-2xl p-8 my-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your 12-Month Maintenance Calendar</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Every 6 Months (Essential)</h4>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Professional dental cleaning and examination</li>
                    <li>• Veneer and crown inspection</li>
                    <li>• Retainer check and adjustment</li>
                    <li>• X-rays (as needed)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Every 12 Months (Recommended)</h4>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Comprehensive oral health evaluation</li>
                    <li>• Whitening touch-up treatment (if desired)</li>
                    <li>• Polishing for veneers and natural teeth</li>
                    <li>• Professional fluoride treatment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ As Needed</h4>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Emergency repairs (chips, cracks, loose veneers)</li>
                    <li>• Night guard fitting (if you grind teeth)</li>
                    <li>• Orthodontic adjustments (first year post-braces)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Warning Signs: When to Call Your Dentist</h2>
            
            <div className="bg-red-50 rounded-2xl p-8 my-8 border-2 border-red-300">
              <p className="text-gray-800 font-semibold mb-4">Contact Vivic Dental Clinic immediately if you experience:</p>
              <ul className="space-y-3 text-gray-800">
                <li>⚠️ Persistent pain or sensitivity around veneers/crowns</li>
                <li>⚠️ Visible chips, cracks, or damage to dental work</li>
                <li>⚠️ Loose or wobbly veneers or crowns</li>
                <li>⚠️ Gum swelling, redness, or bleeding around dental work</li>
                <li>⚠️ Changes in bite or teeth alignment</li>
                <li>⚠️ Dark lines appearing at gum line of veneers</li>
                <li>⚠️ Unusual taste or odor that persists</li>
              </ul>
              <p className="text-gray-800 mt-4 font-semibold">
                Early intervention prevents small problems from becoming costly repairs!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Investment Protection: The Bottom Line</h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Your smile makeover represents a significant investment in your health, appearance, and confidence. With proper care, your veneers can last 10-20 years, your whitening results 1-3 years, and your orthodontic results a lifetime. The key is consistency.
            </p>

            <div className="bg-primary-green/10 rounded-2xl p-8 my-8 border border-primary-green/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Tips from Our Team:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>🦷 <strong>Never skip brushing:</strong> Make it non-negotiable, like sleeping</li>
                <li>🦷 <strong>Invest in quality tools:</strong> Electric toothbrush, water flosser, good toothpaste</li>
                <li>🦷 <strong>Set reminders:</strong> For dental appointments, retainer wearing, touch-ups</li>
                <li>🦷 <strong>Take photos:</strong> Document your smile journey to stay motivated</li>
                <li>🦷 <strong>Ask questions:</strong> We're here to help - never hesitate to call</li>
              </ul>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Remember, maintaining your smile makeover isn't just about protecting a cosmetic investment - it's about preserving your oral health, your confidence, and your quality of life. At Vivic Dental Clinic, we're committed to supporting you every step of the way.
            </p>

            <div className="bg-linear-to-br from-primary-orange to-primary-green rounded-2xl p-8 text-white text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Schedule Your Maintenance Check-Up</h3>
              <p className="mb-6 opacity-90">
                Keep your smile looking its absolute best with regular professional care
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
                <strong>About the Author:</strong> Dr. Sarah Eze is a general and restorative dentist at Vivic Dental Clinic specializing in post-treatment care and long-term smile maintenance. She believes that proper aftercare is just as important as the treatment itself.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}