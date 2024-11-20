import React from 'react';
import { Heart, Users, Newspaper, Phone } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About PawfectMatch</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're on a mission to find loving homes for every stray dog and make
              the world a better place for our furry friends.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                PawfectMatch was founded with a simple yet powerful mission: to create
                meaningful connections between stray dogs and loving families.
              </p>
              <p className="text-gray-600">
                We believe every dog deserves a chance at happiness, and every
                family deserves the joy that comes from giving a home to a
                four-legged friend in need.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
                alt="Happy dog with owner"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Dogs Adopted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Shelters</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about adoption? Want to become a volunteer? We'd love
              to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center p-6">
              <Newspaper className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">help@pawfectmatch.com</p>
            </div>

            <div className="text-center p-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}