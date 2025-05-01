
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import BookGrid from "@/components/books/BookGrid";
import BookFiltersPanel from "@/components/books/BookFilters";
import { mockBooks } from "@/services/mockData";
import { Book, BookFilters } from "@/types";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Browse = () => {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filters, setFilters] = useState<BookFilters>({});
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const handleFilterChange = (newFilters: BookFilters) => {
    setIsLoading(true);
    
    // Simulate API call with delay
    setTimeout(() => {
      let filteredBooks = [...mockBooks];
      
      // Apply search term filter
      if (newFilters.searchTerm) {
        const term = newFilters.searchTerm.toLowerCase();
        filteredBooks = filteredBooks.filter((book) => 
          book.title.toLowerCase().includes(term) || 
          book.author.toLowerCase().includes(term) ||
          (book.isbn && book.isbn.includes(term))
        );
      }
      
      // Apply department filter
      if (newFilters.department) {
        filteredBooks = filteredBooks.filter((book) => 
          book.department === newFilters.department
        );
      }
      
      // Apply condition filter
      if (newFilters.condition) {
        filteredBooks = filteredBooks.filter((book) => 
          book.condition === newFilters.condition
        );
      }
      
      // Apply price range filter
      if (newFilters.minPrice !== undefined || newFilters.maxPrice !== undefined) {
        filteredBooks = filteredBooks.filter((book) => {
          const min = newFilters.minPrice ?? 0;
          const max = newFilters.maxPrice ?? Infinity;
          return book.price >= min && book.price <= max;
        });
      }
      
      setBooks(filteredBooks);
      setFilters(newFilters);
      setIsLoading(false);
    }, 500);
  };

  const FiltersPanel = () => (
    <BookFiltersPanel onFilterChange={handleFilterChange} initialFilters={filters} />
  );

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-serif font-bold text-univblue">Browse Books</h1>
            <p className="text-gray-600 mt-2">
              Find textbooks from students across campus
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters - Desktop */}
            {!isMobile && (
              <div className="md:w-1/4 lg:w-1/5">
                <FiltersPanel />
              </div>
            )}
            
            {/* Filters - Mobile */}
            {isMobile && (
              <div className="w-full mb-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full flex justify-between">
                      <span>Filters</span>
                      <SlidersHorizontal className="h-4 w-4 ml-2" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <div className="py-6">
                      <h2 className="text-lg font-medium mb-6">Filters</h2>
                      <FiltersPanel />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            )}
            
            {/* Results */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing <span className="font-medium">{books.length}</span> results
                  </p>
                </div>
              </div>
              
              <BookGrid books={books} loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Browse;
