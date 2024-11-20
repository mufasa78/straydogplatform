import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Shield } from 'lucide-react';

export function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
          alt="Happy dogs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Perfect
              <br />
              Furry Companion
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Give a loving home to a stray dog. Our platform connects you with
              adorable dogs waiting for their forever families.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dogs"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Adopt Now
              </Link>
              <Link
                to="/report"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Report a Stray
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PawfectMatch?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make the adoption process simple, transparent, and rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loving Matches</h3>
              <p className="text-gray-600">
                We carefully match dogs with potential adopters to ensure the perfect fit.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Support</h3>
              <p className="text-gray-600">
                Connect with nearby shelters and get support throughout the adoption journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                All our adoption processes are verified and secure for both dogs and adopters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}