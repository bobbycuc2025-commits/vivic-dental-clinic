import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Teeth Whitening Options in Nigeria 2026: Professional vs At-Home',
  description: 'Complete guide to teeth whitening in Nigeria. Compare professional in-office whitening, take-home kits, and over-the-counter options. Safety, costs & results.',
  keywords: 'teeth whitening nigeria, professional whitening asaba, teeth bleaching cost, whitening options',
};

export default function TeethWhiteningPost() {
  return (
    <>
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary-orange hover:text-primary-green transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Teeth Whitening Options in Nigeria 2026: What Works Best?
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>December 10, 2025</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Dr. Michael Okonkwo</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              A bright, white smile can transform your appearance and boost your confidence dramatically. But with so many teeth whitening options available in Nigeria today, how do you choose the right one? This comprehensive guide breaks down every option, helping you make an informed decision.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Teeth Discoloration</h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Before exploring whitening options, it's important to understand why teeth become discolored. There are two main types of tooth staining:
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 my-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Extrinsic Stains (Surface Stains)</h3>
              <p className="text-gray-600 mb-4">
                These affect the outer layer of your teeth (enamel) and are caused by food, drinks, and lifestyle habits. Common culprits include coffee, tea, red wine, cola, tobacco, and certain fruits like berries. These stains respond very well to whitening treatments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Intrinsic Stains (Internal Stains)</h3>
              <p className="text-gray-600">
                These occur within the tooth structure and can be caused by medications (like tetracycline), excessive fluoride exposure during childhood, trauma, or natural aging. These are more challenging to whiten but can still be improved with professional treatments.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Professional Whitening Options in Nigeria</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. In-Office Professional Whitening (Best Results)</h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              This is the gold standard for teeth whitening, offering the most dramatic and immediate results. At Vivic Dental Clinic, we use advanced LED whitening technology combined with professional-grade bleaching gel (typically 25-40% hydrogen peroxide).
            </p>

            <div className="my-8">
              <h4 className="font-semibold text-gray-900 mb-3">The Process:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Initial consultation and shade matching to track your progress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Professional cleaning to remove surface debris and tartar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Protective barriers applied to gums and soft tissues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>High-concentration whitening gel applied to teeth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>LED light activation for 15-20 minutes (repeated 2-3 times)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Fluoride treatment to reduce sensitivity</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-orange/10 rounded-2xl p-6 my-8 border border-primary-orange/20">
              <h4 className="font-semibold text-gray-900 mb-3">Pros:</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Immediate, dramatic results (up to 8 shades lighter)</li>
                <li>• Completed in just 60-90 minutes</li>
                <li>• Professionally supervised for safety</li>
                <li>• Most effective method available</li>
                <li>• Longer-lasting results (1-3 years with good care)</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Cons:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Higher upfront cost than other methods</li>
                <li>• May cause temporary sensitivity (usually resolves within 24-48 hours)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Professional Take-Home Whitening Kits</h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              These are custom-fitted trays and professional-grade bleaching gel (typically 10-20% carbamide peroxide) that you use at home under your dentist's supervision.
            </p>

            <div className="my-8">
              <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Dentist takes impressions of your teeth to create custom trays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>You receive trays and professional whitening gel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Apply gel to trays and wear for 30 minutes to 2 hours daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-orange mt-0.5 mr-3 shrink-0" />
                  <span>Treatment typically lasts 1-2 weeks for full results</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 my-8 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Pros:</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• More affordable than in-office treatment</li>
                <li>• Custom-fitted for comfort and effectiveness</li>
                <li>• Professional-grade results at home</li>
                <li>• Convenient - whiten on your schedule</li>
                <li>• Trays can be reused with additional gel</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Cons:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Takes longer to see results (1-2 weeks)</li>
                <li>• Requires discipline and consistency</li>
                <li>• Slightly less dramatic than in-office whitening</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Over-the-Counter Options Available in Nigeria</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Whitening Strips</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Popular brands like Crest 3D White Strips are available in Nigeria. These thin, flexible strips are coated with hydrogen peroxide gel and applied directly to teeth.
            </p>

            <div className="bg-yellow-50 rounded-2xl p-6 my-8 border border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-3">Important Note:</h4>
              <p className="text-gray-700">
                While convenient, over-the-counter strips contain lower concentrations of bleaching agents and may not fit your teeth perfectly, leading to uneven whitening. Always consult your dentist first, especially if you have dental work like crowns or veneers.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Whitening Toothpastes</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Brands like Colgate Optic White, Oral-B 3D White, and Sensodyne Whitening are widely available in Nigeria. These contain mild abrasives and chemical agents that help remove surface stains.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 my-8">
              <p className="text-gray-700 mb-4">
                <strong>Reality Check:</strong> Whitening toothpastes can only lighten teeth by about one shade and mainly remove surface stains. They won't change the natural color of your teeth or work on intrinsic stains. They're best used for maintaining whiteness after professional treatment.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What About Natural Remedies?</h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              You've probably seen social media posts claiming that baking soda, activated charcoal, coconut oil pulling, or turmeric can whiten teeth. Here's the truth from a dental professional's perspective:
            </p>

            <div className="bg-red-50 rounded-2xl p-6 my-8 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-3">⚠️ Warning About DIY Methods:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Baking soda:</strong> Too abrasive - can damage enamel over time</li>
                <li>• <strong>Activated charcoal:</strong> No scientific evidence of effectiveness, may scratch enamel</li>
                <li>• <strong>Lemon juice:</strong> Highly acidic - will erode enamel and cause sensitivity</li>
                <li>• <strong>Hydrogen peroxide (DIY):</strong> Dangerous without proper concentration and supervision</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Our advice: Stick to proven methods supervised by dental professionals. The risks of DIY whitening far outweigh any potential benefits.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Safety and Side Effects</h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional whitening is safe when done correctly, but temporary side effects can include:
            </p>

            <ul className="list-none space-y-3 text-gray-600 mb-8">
              <li className="flex items-start">
                <span className="text-primary-orange font-bold mr-3 mt-1">•</span>
                <div>
                  <strong>Tooth Sensitivity:</strong> Most common side effect, usually mild and temporary (24-48 hours). Using toothpaste for sensitive teeth before treatment can help.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-orange font-bold mr-3 mt-1">•</span>
                <div>
                  <strong>Gum Irritation:</strong> Can occur if gel contacts gums. Professional application minimizes this risk.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-orange font-bold mr-3 mt-1">•</span>
                <div>
                  <strong>Uneven Results:</strong> Dental work (crowns, veneers, fillings) won't whiten. Discuss with your dentist.
                </div>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Making Your Results Last</h2>
            
            <div className="bg-primary-green/10 rounded-2xl p-8 my-8 border border-primary-green/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Tips for Maintaining White Teeth:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Avoid staining foods and drinks</strong> for 48 hours after treatment (the "white diet")</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Use a straw</strong> when drinking coffee, tea, or red wine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Rinse your mouth</strong> immediately after consuming staining foods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Quit smoking</strong> - tobacco is the worst staining culprit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Maintain excellent oral hygiene</strong> - brush twice daily, floss, use mouthwash</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 mr-3 shrink-0" />
                  <span><strong>Schedule touch-ups</strong> every 6-12 months as needed</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Recommendation</h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              For the best, safest, and most dramatic results, we recommend professional in-office whitening followed by take-home maintenance kits. This combination gives you immediate transformation and allows you to maintain your bright smile long-term.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              At Vivic Dental Clinic in Asaba, we customize every whitening treatment to your specific needs, ensuring beautiful, natural-looking results that complement your unique smile. Our advanced LED whitening system is safe, comfortable, and delivers stunning results in just one visit.
            </p>

            <div className="bg-linear-to-br from-primary-orange to-primary-green rounded-2xl p-8 text-white text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Ready for a Brighter Smile?</h3>
              <p className="mb-6 opacity-90">
                Book your professional teeth whitening consultation today and discover what your best smile looks like
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
                >
                  Book Consultation
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
                <strong>About the Author:</strong> Dr. Michael Okonkwo is an aesthetic dentist at Vivic Dental Clinic specializing in cosmetic dentistry, teeth whitening, and smile makeovers. With years of experience, he has helped hundreds of patients in Asaba achieve their dream smiles.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/best-braces-asaba" className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Choose the Best Braces in Asaba</h3>
                <p className="text-gray-600 mb-4">Complete guide to selecting the right braces and orthodontist for your smile transformation.</p>
                <span className="text-primary-orange font-semibold">Read More →</span>
              </div>
            </Link>
            <Link href="/blog/maintaining-smile-makeover" className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintaining Your Smile Makeover</h3>
                <p className="text-gray-600 mb-4">Expert tips on protecting your investment and keeping your smile beautiful for years.</p>
                <span className="text-primary-orange font-semibold">Read More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}