
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-univblue to-univblue-dark text-white py-14 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-in">
            Find & Sell Textbooks <br /> 
            <span className="text-univgold">for Your Courses</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-slide-in">
            Save money on textbooks by connecting with other students 
            at your university. Buy, sell, or exchange easily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-slide-in" style={{ animationDelay: "150ms" }}>
            <div className="relative flex-1 max-w-lg">
              <Input
                type="text"
                placeholder="Search for books, courses, etc..."
                className="w-full pl-10 py-6 rounded-full text-gray-800 border-2 border-transparent focus:border-univgold focus:ring-0"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            
            <Button 
              size="lg" 
              className="bg-univgold hover:bg-univgold-dark text-univblue font-medium"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Books
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-slide-in" style={{ animationDelay: "300ms" }}>
            <Link to="/browse" className="text-univgold hover:underline">
              Browse All Books
            </Link>
            <span className="text-white/50">•</span>
            <Link to="/post" className="text-univgold hover:underline">
              Sell Your Books
            </Link>
            <span className="text-white/50">•</span>
            <Link to="/external" className="text-univgold hover:underline">
              Compare with Online Stores
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-univgold"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-univteal"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-univred"></div>
      </div>
    </div>
  );
};

export default Hero;
