
import React from "react";
import { Button } from "@/components/ui/button";
import BookGrid from "../books/BookGrid";
import { mockBooks } from "@/services/mockData";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const RecentBooks = () => {
  // Take most recent 6 books
  const recentBooks = [...mockBooks]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Recent Listings</h2>
          <Link to="/browse">
            <Button variant="outline" className="group">
              View All
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <BookGrid books={recentBooks} />
      </div>
    </section>
  );
};

export default RecentBooks;
