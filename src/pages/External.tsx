
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ExternalSearchResults from "@/components/external/ExternalSearchResults";
import { externalStores, mockExternalResults } from "@/services/mockData";

const External = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState(mockExternalResults);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we're using the mock data
      // In a real app, this would fetch from actual stores
      setResults(mockExternalResults);
      setIsSearching(false);
    }, 1000);
  };
  
  return (
    <Layout>
      <div className="bg-gradient-to-br from-univblue to-univblue-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Compare with Online Stores</h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Search multiple online bookstores at once to find the best deal for your textbooks
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Enter book title, author, or ISBN"
                  className="w-full pl-10 py-6 rounded-md text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                type="submit"
                className="bg-univgold hover:bg-univgold-dark text-univblue font-medium py-6"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-medium mb-4">Online Stores</h2>
                <ul className="space-y-3">
                  {externalStores.map((store) => (
                    <li key={store.name} className="flex items-center">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                        {store.icon === 'shopping-cart' && <Search className="h-4 w-4 text-gray-500" />}
                        {store.icon === 'book' && <Search className="h-4 w-4 text-gray-500" />}
                        {store.icon === 'book-open' && <Search className="h-4 w-4 text-gray-500" />}
                        {store.icon === 'bookmark' && <Search className="h-4 w-4 text-gray-500" />}
                      </div>
                      <span>{store.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t text-sm text-gray-500">
                  <p>Looking for the best deals on textbooks? Compare prices across multiple online retailers.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Results */}
          <div className="md:col-span-2 lg:col-span-3">
            {!hasSearched ? (
              <Card>
                <CardContent className="p-10 text-center">
                  <h2 className="text-xl font-medium mb-4">Search for a Book</h2>
                  <p className="text-gray-600">
                    Enter a book title, author, or ISBN to search across online bookstores.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-univblue mb-6">
                  Results for "{searchTerm}"
                </h2>
                <ExternalSearchResults 
                  results={results}
                  isLoading={isSearching}
                  searchTerm={searchTerm}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default External;
