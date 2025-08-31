import React from "react";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
} from "lucide-react";

export default function HealthcareLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-teal-600 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Virtual healthcare for you
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-100">
                  Real benefit for your life
                </h2>
              </div>

              <button className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Make An Appointment ⚕
              </button>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex items-center gap-3 cursor-pointer">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">+91 78608 25182</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">satguruhospital78@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg">View All Locations</span>
                </div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">🚑</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Emergency Services
                </h3>
                <p className="text-sm text-blue-100 mt-2">
                  Get 24/7 quick response from our healthcare team.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="font-medium">+91 9838758130</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="font-medium">+91 8303852114</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Appointment Booking
                </h3>
                <p className="text-sm text-blue-100 mt-2">
                  Book consultations with doctors in just a few clicks.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-white">
                  <Phone className="w-5 h-5 text-teal-300" />
                  <span className="font-medium">+91 9519987446</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Find Us</h3>
                <p className="text-sm text-blue-100 mt-2">
                  Locate our nearest healthcare centers with ease.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Pharmacy Support
                </h3>
                <p className="text-sm text-blue-100 mt-2">
                  Order medicines and health supplies directly online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-teal-500 py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Where Health Meets the Life You Deserve
            </h2>
            <p className="text-blue-300">
              Delivering trusted healthcare with advanced facilities and
              patient-focused care at Satguru Hospital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Useful Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-200">
                Useful Links
              </h3>
              <ul className="space-y-3 text-blue-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services & Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Free Camp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Working Time */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-200">
                Working Time
              </h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" /> Mon – Sun : 10AM –
                  06PM
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-400" /> Emergency: 24/7
                </li>
              </ul>
            </div>

            {/* Our Address */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-200">
                Our Address
              </h3>
              <ul className="space-y-3 text-blue-300">
                <li className="flex items-start gap-2">
                  <MapPin className="w-16 h-16 text-cyan-400" />
                  Nayiganj Prayagraj, Main Road, Nai Bazar Colony, Naiganj,
                  Olandganj, Jaunpur, Uttar Pradesh 222002
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" /> +91 78608 25182
                </li>
              </ul>
            </div>

            {/* Policies & Social */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-200">
                Quick Links
              </h3>
              <ul className="space-y-3 text-blue-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>

              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-600 hover:bg-cyan-400 rounded-full flex items-center justify-center group"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-teal-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-600 hover:bg-cyan-400 rounded-full flex items-center justify-center group"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:text-teal-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandan-prajapati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-600 hover:bg-cyan-400 rounded-full flex items-center justify-center group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-teal-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-600 hover:bg-cyan-400 rounded-full flex items-center justify-center group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-teal-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Line */}
        <div className="mt-12 border-t border-teal-500 pt-6 text-center text-blue-300 text-sm">
          © {new Date().getFullYear()} Designed by
          <a
            href="https://www.linkedin.com/in/chandan-prajapati/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-cyan-400 font-semibold hover:underline"
          >
            Chandan Prajapati
          </a>
        </div>
      </footer>
    </div>
  );
}
