
import React from "react";
import { CheckCircle2, Search, Banknote, MessageSquare } from "lucide-react";

interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: number;
}

const Step = ({ title, description, icon, number }: StepProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 rounded-full bg-univteal/10 text-univteal flex items-center justify-center mb-4 relative">
      {icon}
      <div className="absolute -top-2 -right-2 bg-univteal text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
        {number}
      </div>
    </div>
    <h3 className="text-lg font-serif font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <Step 
            number={1}
            title="Find Your Books" 
            description="Search or browse by department, course, or title to find the books you need."
            icon={<Search className="h-7 w-7" />}
          />
          
          <Step 
            number={2}
            title="Compare Prices" 
            description="Compare prices with other students and online retailers to get the best deal."
            icon={<Banknote className="h-7 w-7" />}
          />
          
          <Step 
            number={3}
            title="Contact Seller" 
            description="Message the seller directly to arrange pickup or delivery on campus."
            icon={<MessageSquare className="h-7 w-7" />}
          />
          
          <Step 
            number={4}
            title="Save Money" 
            description="Get your textbooks for less and sell them when you're done with your course."
            icon={<CheckCircle2 className="h-7 w-7" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
