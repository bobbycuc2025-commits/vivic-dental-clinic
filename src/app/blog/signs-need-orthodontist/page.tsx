import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 Signs You Need to See an Orthodontist Today | Vivic Dental Asaba',
  description: 'Discover the warning signs that you need orthodontic treatment. From jaw pain to crooked teeth, learn when to book your consultation in Asaba.',
  keywords: 'orthodontist signs, need braces, jaw pain, crooked teeth, orthodontic consultation asaba',
};

export default function OrthodontistSignsPost() {
  const signs = [
    {
      title: 'Crowded or Overlapping Teeth',
      description: 'When your teeth are competing for space, they overlap, twist, or crowd together. This not only affects your smile aesthetics but makes proper cleaning extremely difficult.',
      warning: 'Crowded teeth trap food and bacteria, significantly increasing your risk of cavities and gum disease.',
      solution: 'Braces or clear aligners can gradually create space and properly align your teeth.'
    },
    {
      title: 'Visible Gaps or Spaces Between Teeth',
      description: 'Large spaces between teeth (diastema) can be genetic, caused by missing teeth, or result from habits like thumb sucking.',
      warning: 'Gaps allow food to get stuck and can lead to gum problems. They may also indicate jaw size discrepancies.',
      solution: 'Orthodontic treatment can close gaps while maintaining proper spacing and bite alignment.'
    },
    {
      title: 'Difficulty Chewing or Biting',
      description: 'If you struggle to bite into apples, chew tough foods, or notice you can only chew on one side of your mouth comfortably.',
      warning: 'This indicates a malocclusion (bad bite) that can lead to uneven tooth wear, TMJ problems, and digestive issues.',
      solution: 'Orthodontic treatment corrects bite alignment, restoring proper function.'
    },
    {
      title: 'Jaw Pain or TMJ Disorders',
      description: 'Persistent jaw pain, clicking, popping sounds when opening/closing your mouth, or difficulty opening wide are red flags.',
      warning: 'Untreated jaw problems can lead to chronic headaches, ear pain, and permanent joint damage.',
      solution: 'Orthodontics can realign your bite to relieve pressure on the temporomandibular joint (TMJ).'
    },
    {
      title: 'Speech Difficulties or Lisping',
      description: 'If you struggle with certain sounds (especially S, T, or TH), have a persistent lisp, or notice changes in your speech.',
      warning: 'Speech problems can affect confidence and communication, especially in professional settings.',
      solution: 'Correcting tooth and jaw position often improves or eliminates speech impediments.'
    },
    {
      title: 'Mouth Breathing or Snoring',
      description: 'Constantly breathing through your mouth instead of your nose, or loud snoring that disrupts sleep.',
      warning: 'Mouth breathing can indicate airway obstruction and lead to dry mouth, bad breath, and sleep apnea.',
      solution: 'Orthodontic treatment, sometimes with palatal expansion, can improve airway space.'
    },
    {
      title: 'Excessive Wear on Certain Teeth',
      description: 'Some teeth appear shorter, flatter, or more worn than others, or you notice sensitivity from worn enamel.',
      warning: 'Uneven wear indicates improper bite alignment and can lead to tooth damage requiring extensive dental work.',
      solution: 'Braces redistribute biting forces evenly across all teeth, preventing further damage.'
    },
    {
      title: 'Facial Asymmetry',
      description: 'Your face appears uneven, with one side looking different from the other, especially noticeable in your jaw or chin.',
      warning: 'Severe cases can indicate skeletal jaw problems requiring combined orthodontic and surgical treatment.',
      solution: 'Early intervention can guide jaw growth and correct asymmetry non-surgically in many cases.'
    },
    {
      title: 'Frequent Cheek Biting or Tongue Injuries',
      description: 'You regularly bite your cheeks, lips, or tongue, often developing painful sores.',
      warning: 'Chronic trauma can lead to scarring and increase risk of oral cancer in affected areas.',
      solution: 'Proper tooth alignment eliminates these accidental injuries.'
    },
    {
      title: 'Low Self-Confidence About Your Smile',
      description: 'You hide your teeth when smiling, laughing, or talking, avoid photos, or feel embarrassed about your dental appearance.',
      warning: 'Poor self-confidence affects relationships, career opportunities, and overall quality of life.',
      solution: 'A beautiful, straight smile can be life-changing for your confidence and success.'
    }
  ];

  return (
    <>
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-primary-orange hover:text-primary-green transition mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            10 Warning Signs You Need to See an Orthodontist Today
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>November 28, 2025</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Dr. Vivian Chukwuma</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>5 min read</span>
            </div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Are you experiencing any dental issues but unsure if you need orthodontic treatment? These 10 warning signs indicate it's time to book a consultation with an orthodontist in Asaba.
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-linear-to-br from-primary-orange/10 to-primary-green/10 rounded-2xl p-8 mb-12 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Early Intervention Matters</h2>
              <p className="text-gray-700 mb-0">
                Many people think orthodontic problems are just cosmetic, but they can significantly impact your oral health, overall well-being, and quality of life. The earlier you address these issues, the easier and more cost-effective the treatment typically is. Let's explore the key warning signs that shouldn't be ignored.
              </p>
            </div>

            {signs.map((sign, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-primary-orange to-primary-green rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{sign.title}</h2>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4 ml-16">
                  {sign.description}
                </p>

                <div className="ml-16 bg-red-50 rounded-xl p-6 mb-4 border border-red-200">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2">Why It Matters:</h4>
                      <p className="text-red-800 text-sm">{sign.warning}</p>
                    </div>
                  </div>
                </div>

                <div className="ml-16 bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">The Solution:</h4>
                  <p className="text-green-800 text-sm">{sign.solution}</p>
                </div>
              </div>
            ))}

            <div className="bg-linear-to-br from-primary-orange to-primary-green rounded-2xl p-8 text-white my-12">
              <h2 className="text-2xl font-bold mb-4">Take the First Step Today</h2>
              <p className="mb-6 opacity-90">
                If you identified with any of these signs, don't wait. Early consultation can prevent more complex problems and expensive treatments later. At Vivic Dental Clinic in Asaba, we offer comprehensive orthodontic evaluations to assess your specific needs and create a personalized treatment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-white text-primary-orange px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold text-center"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="tel:+2348100670347"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary-orange transition font-semibold text-center"
                >
                  Call: 08100670347
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}