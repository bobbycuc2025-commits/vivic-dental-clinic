import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-blue-50 to-white p-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="inline-block p-4 bg-amber-100 rounded-full">
            <svg className="w-16 h-16 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3">You&apos;re Offline</h1>
        
        <p className="text-gray-600 mb-6">
          It looks like you&apos;re not connected to the internet. Some features may be unavailable.
        </p>
        
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Available offline:</span> Basic information, contact details, and appointment booking.
            </p>
          </div>
          
          <div className="p-3 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-700">
              <span className="font-semibold">Requires connection:</span> Live updates, recent blog posts, and form submissions.
            </p>
          </div>
        </div>
        
        <div className="mt-8 space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 bg-linear-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            Try Again
          </button>
          
          <Link 
            href="/"
            className="block w-full py-3 bg-white text-orange-600 font-medium rounded-lg border-2 border-orange-200 hover:border-orange-300 transition-all duration-200"
          >
            Go to Homepage
          </Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need immediate assistance? 
            <a href="tel:+2348100670347" className="text-orange-600 font-medium ml-1 hover:underline">
              Call +234 810 067 0347
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}