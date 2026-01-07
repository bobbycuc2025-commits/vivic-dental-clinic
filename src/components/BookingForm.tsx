'use client';

import { useState } from 'react';
import { Calendar, User, Phone, Mail, MessageSquare, Send, CreditCard } from 'lucide-react';
import PaystackPayment from './PaystackPayment';

export default function EnhancedBookingForm() {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
    paymentOption: 'pay-later' // 'pay-now' or 'pay-later'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    { name: 'Orthodontics & Braces', deposit: 50000 },
    { name: 'Teeth Whitening', deposit: 20000 },
    { name: 'Veneers & Smile Makeover', deposit: 100000 },
    { name: 'Composite Bonding', deposit: 30000 },
    { name: 'Crowns & Bridges', deposit: 40000 },
    { name: 'General Consultation', deposit: 5000 }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getServiceDeposit = () => {
    const service = services.find(s => s.name === formData.service);
    return service ? service.deposit : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      if (formData.paymentOption === 'pay-now') {
        // Proceed to payment
        setStep('payment');
      } else {
        // Just confirm booking
        const whatsappMessage = `New Appointment Request:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AMessage: ${formData.message}%0APayment: ${formData.paymentOption}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/2348100670347?text=${whatsappMessage}`, '_blank');
        
        setSubmitStatus('success');
        setStep('success');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = (reference: string) => {
    setStep('success');
    setSubmitStatus('success');
    
    // Send confirmation via WhatsApp
    const whatsappMessage = `Appointment Confirmed (PAID):%0A%0AName: ${formData.name}%0AReference: ${reference}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}`;
    window.open(`https://wa.me/2348100670347?text=${whatsappMessage}`, '_blank');
  };

  if (step === 'payment') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Payment</h2>
          <p className="text-gray-600">Secure your appointment with a deposit</p>
        </div>
        
        <PaystackPayment
          amount={getServiceDeposit()}
          email={formData.email}
          name={formData.name}
          phone={formData.phone}
          service={formData.service}
          onSuccess={handlePaymentSuccess}
          onClose={() => setStep('form')}
        />

        <button
          onClick={() => setStep('form')}
          className="w-full text-gray-600 hover:text-gray-900 transition text-center py-2"
        >
          ← Back to Form
        </button>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-8">
          {formData.paymentOption === 'pay-now' 
            ? 'Your payment has been received and your appointment is confirmed.'
            : 'We\'ve received your booking request. We\'ll contact you shortly to confirm.'}
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
          <div className="space-y-2 text-left">
            <p className="flex justify-between"><span className="text-gray-600">Service:</span> <span className="font-medium">{formData.service}</span></p>
            <p className="flex justify-between"><span className="text-gray-600">Date:</span> <span className="font-medium">{formData.date}</span></p>
            <p className="flex justify-between"><span className="text-gray-600">Time:</span> <span className="font-medium">{formData.time}</span></p>
            <p className="flex justify-between"><span className="text-gray-600">Status:</span> <span className="font-medium text-green-600">Confirmed</span></p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setStep('form');
              setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                date: '',
                time: '',
                message: '',
                paymentOption: 'pay-later'
              });
            }}
            className="bg-primary-orange text-white px-8 py-3 rounded-full hover:bg-primary-green transition font-semibold"
          >
            Book Another Appointment
          </button>
          <a
            href="/"
            className="border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-full hover:bg-primary-orange hover:text-white transition font-semibold text-center"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
            placeholder="08012345678"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name} (Deposit: ₦{service.deposit.toLocaleString()})
            </option>
          ))}
        </select>
      </div>

      {/* Date and Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
            />
          </div>
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Time *
          </label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition"
          >
            <option value="">Select time</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Payment Option */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Payment Option *
        </label>
        <div className="space-y-3">
          <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-orange transition">
            <input
              type="radio"
              name="paymentOption"
              value="pay-now"
              checked={formData.paymentOption === 'pay-now'}
              onChange={handleChange}
              className="mt-1 mr-3"
            />
            <div>
              <div className="font-semibold text-gray-900 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-primary-orange" />
                Pay Deposit Now (Recommended)
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Secure your appointment immediately with {formData.service && `₦${getServiceDeposit().toLocaleString()}`} deposit
              </p>
            </div>
          </label>
          
          <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-orange transition">
            <input
              type="radio"
              name="paymentOption"
              value="pay-later"
              checked={formData.paymentOption === 'pay-later'}
              onChange={handleChange}
              className="mt-1 mr-3"
            />
            <div>
              <div className="font-semibold text-gray-900">Pay at Clinic</div>
              <p className="text-sm text-gray-600 mt-1">
                We'll confirm your appointment and you pay when you visit
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent outline-none transition resize-none"
            placeholder="Tell us about any specific concerns or questions..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-orange text-white py-4 rounded-lg hover:bg-primary-green transition font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            {formData.paymentOption === 'pay-now' ? (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Booking Request
              </>
            )}
          </>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      {/* Note */}
      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy. We'll contact you to confirm your appointment within 24 hours.
      </p>
    </form>
  );
}