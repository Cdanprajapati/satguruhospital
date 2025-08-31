import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "../../assets/brand.png";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Home", "About", "Services", "Contact", "Feedback"];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-teal-600 text-white px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2 animate-fade-in">
        <p className="flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-500">
          <a
            href="tel:+917860825182"
            className="flex items-center gap-2 hover:text-cyan-200 transition-colors"
          >
            <div className="border border-slate-50 rounded-full p-2">
              <Phone className="w-4 h-4 text-white" />
            </div>
            +91 78608 25182
          </a>
        </p>

        <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-base font-light transition-all duration-500">
          <MapPin className="w-4 h-4 text-white cursor-pointer" />
          <span>
            Welcome to{" "}
            <span className="font-semibold">Satguru Hospital</span> –
            Caring with Compassion
          </span>
        </div>

        <div className="flex gap-3 mt-2 md:mt-0">
          {[
            { Icon: Facebook, link: "#" },
            { Icon: Twitter, link: "#" },
            { Icon: Linkedin, link: "#" },
            { Icon: Instagram, link: "#" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              className="border border-slate-200 w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-cyan-400 hover:scale-110 group shadow-md"
            >
              <Icon className="w-4 h-4 text-white group-hover:text-teal-600 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-2">
          <img src={Brand} alt="brand" className="w-[60px] h-[60px]" />
          <span className="text-2xl font-bold text-teal-700">
            Satguru Hospital
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={`#${tab.toLowerCase()}`}
              className="hover:text-teal-600 transition-colors"
            >
              {tab}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#appointment"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg transition"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 rounded-b-xl
               animate-slide-down"
        >
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={`#${tab.toLowerCase()}`}
              className="block text-gray-700 hover:text-teal-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {tab}
            </a>
          ))}

          <a
            href="#appointment"
            className="block bg-teal-600 hover:bg-teal-700 text-white text-center px-4 py-2 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
