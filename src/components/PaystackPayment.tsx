'use client';

import { useState } from 'react';
import { CreditCard, CheckCircle, XCircle } from 'lucide-react';

interface PaystackPaymentProps {
  amount: number;
  email: string;
  name: string;
  phone: string;
  service: string;
  onSuccess?: (reference: string) => void;
  onClose?: () => void;
}

export default function PaystackPayment({
  amount,
  email,
  name,
  phone,
  service,
  onSuccess,
  onClose
}: PaystackPaymentProps) {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [reference, setReference] = useState<string>('');

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxx';

  const initiatePayment = () => {
    setPaymentStatus('processing');

    // Generate unique reference
    const paymentReference = `VDC-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setReference(paymentReference);

    // @ts-ignore - Paystack is loaded via script
    const handler = PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: amount * 100, // Convert to kobo
      currency: 'NGN',
      ref: paymentReference,
      metadata: {
        custom_fields: [
          {
            display_name: 'Patient Name',
            variable_name: 'patient_name',
            value: name
          },
          {
            display_name: 'Phone Number',
            variable_name: 'phone',
            value: phone
          },
          {
            display_name: 'Service',
            variable_name: 'service',
            value: service
          }
        ]
      },
      callback: function(response: any) {
        setPaymentStatus('success');
        // Verify payment on server
        verifyPayment(response.reference);
        if (onSuccess) {
          onSuccess(response.reference);
        }
      },
      onClose: function() {
        if (paymentStatus === 'processing') {
          setPaymentStatus('failed');
        }
        if (onClose) {
          onClose();
        }
      }
    });

    handler.openIframe();
  };

  const verifyPayment = async (ref: string) => {
    try {
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reference: ref })
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        console.log('Payment verified successfully');
      }
    } catch (error) {
      console.error('Payment verification error:', error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Summary */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Service:</span>
            <span className="font-medium text-gray-900">{service}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Patient:</span>
            <span className="font-medium text-gray-900">{name}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Email:</span>
            <span className="font-medium text-gray-900">{email}</span>
          </div>
          <div className="border-t border-gray-300 pt-3 mt-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold text-gray-900">Deposit Amount:</span>
              <span className="text-2xl font-bold text-primary-orange">
                ₦{amount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Status */}
      {paymentStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-green-900 mb-2">Payment Successful!</h4>
          <p className="text-green-800 mb-4">
            Your appointment deposit has been confirmed.
          </p>
          <p className="text-sm text-green-700">
            Reference: <span className="font-mono font-semibold">{reference}</span>
          </p>
        </div>
      )}

      {paymentStatus === 'failed' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-red-900 mb-2">Payment Failed</h4>
          <p className="text-red-800 mb-4">
            Your payment was not completed. Please try again.
          </p>
        </div>
      )}

      {/* Payment Button */}
      {paymentStatus !== 'success' && (
        <button
          onClick={initiatePayment}
          disabled={paymentStatus === 'processing'}
          className="w-full bg-primary-orange text-white py-4 rounded-xl hover:bg-primary-green transition font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {paymentStatus === 'processing' ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 mr-2" />
              Pay ₦{amount.toLocaleString()} Deposit
            </>
          )}
        </button>
      )}

      {/* Security Note */}
      <div className="text-center text-sm text-gray-500">
        <p className="mb-2">🔒 Secure payment powered by Paystack</p>
        <p>Your payment information is encrypted and secure</p>
      </div>

      {/* Payment Info */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">About Appointment Deposits:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Deposit confirms your appointment slot</li>
          <li>• Deducted from your total treatment cost</li>
          <li>• Refundable if cancelled 24 hours in advance</li>
          <li>• Receipt sent to your email immediately</li>
        </ul>
      </div>
    </div>
  );
}