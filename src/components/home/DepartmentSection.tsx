
import React from "react";
import { departments } from "@/services/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, Computer, Beaker, Pi, 
  Microscope, LineChart, Brain, BookMarked,
  Clock, Atom, DollarSign
} from "lucide-react";

// Department icons mapping
const departmentIcons: Record<string, React.ReactNode> = {
  "Computer Science": <Computer className="h-6 w-6" />,
  "Mathematics": <Pi className="h-6 w-6" />,
  "Biology": <Microscope className="h-6 w-6" />,
  "Chemistry": <Beaker className="h-6 w-6" />,
  "Engineering": <Atom className="h-6 w-6" />,
  "Business": <DollarSign className="h-6 w-6" />,
  "Psychology": <Brain className="h-6 w-6" />,
  "Literature": <BookMarked className="h-6 w-6" />,
  "History": <Clock className="h-6 w-6" />,
  "Physics": <Atom className="h-6 w-6" />,
  "Economics": <LineChart className="h-6 w-6" />,
};

const DepartmentSection = () => {
  const getIcon = (department: string) => {
    return departmentIcons[department] || <BookOpen className="h-6 w-6" />;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-10">Browse by Department</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {departments.slice(0, 10).map((department) => (
            <Link to={`/browse?department=${encodeURIComponent(department)}`} key={department}>
              <Card className="h-full card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-univblue/10 flex items-center justify-center mb-3 text-univblue">
                    {getIcon(department)}
                  </div>
                  <h3 className="font-medium">{department}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
