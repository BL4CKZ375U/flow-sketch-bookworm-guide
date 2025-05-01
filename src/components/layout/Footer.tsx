
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-univblue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-univgold" />
              <span className="text-xl font-serif font-bold">UniBooks</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              The easiest way for university students to buy and sell textbooks.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-univgold">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-univgold">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-univgold">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-univgold">Home</Link>
              </li>
              <li>
                <Link to="/browse" className="text-gray-300 hover:text-univgold">Browse Books</Link>
              </li>
              <li>
                <Link to="/post" className="text-gray-300 hover:text-univgold">Sell a Book</Link>
              </li>
              <li>
                <Link to="/external" className="text-gray-300 hover:text-univgold">External Stores</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-univgold">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-univgold">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-univgold">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-univgold">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Campus Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Main Library</li>
              <li className="text-gray-300">Student Union</li>
              <li className="text-gray-300">Science Building</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UniBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
