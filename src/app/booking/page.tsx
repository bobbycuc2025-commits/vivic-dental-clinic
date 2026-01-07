import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book Appointment | Vivic Dental Clinic Asaba - Schedule Online',
  description: 'Book your dental appointment online at Vivic Dental Clinic, Asaba. Expert orthodontics, teeth whitening, and smile makeovers. Call 08100670347 or book now.',
  keywords: 'book dentist asaba, dental appointment asaba, orthodontist booking delta state',
};

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-orange/10 via-white to-primary-green/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Book Your <span className="gradient-text">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards your perfect smile. Schedule a consultation with our expert team today.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the booking form and we'll contact you within 24 hours to confirm your appointment. Alternatively, you can reach us directly through phone, email, or WhatsApp.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+2348100670347" className="text-gray-600 hover:text-primary-orange transition">
                      08100670347
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@vivicdentalclinic.com" className="text-gray-600 hover:text-primary-orange transition">
                      info@vivicdentalclinic.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      No. 1 Obi Link Drive, off Okpanam Road,<br />
                      opposite 5 Star Restaurant,<br />
                      Asaba, Delta State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/2348100670347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition text-center font-semibold"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+2348100670347"
                    className="block w-full bg-primary-orange text-white px-6 py-3 rounded-lg hover:bg-primary-green transition text-center font-semibold"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Online</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Located in the heart of Asaba, easily accessible from all parts of the city</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3097234567890!2d6.7009!3d6.2054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMTkuNCJOIDbCsDQyJzAzLjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vivic Dental Clinic Location"
            />
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-orange/10 rounded-2xl p-8 border border-primary-orange/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Before Your Appointment</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Please arrive 10 minutes before your scheduled appointment</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bring any previous dental records or X-rays if available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Let us know if you have any medical conditions or allergies</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>If you need to cancel or reschedule, please give us 24 hours notice</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}