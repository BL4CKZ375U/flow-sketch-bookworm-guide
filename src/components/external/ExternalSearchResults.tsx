
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Book, BookOpen, Bookmark } from "lucide-react";
import { externalStores, mockExternalResults } from "@/services/mockData";

interface ExternalResult {
  id: string;
  title: string;
  author: string;
  price: number;
  store: string;
  link: string;
}

interface ExternalSearchResultsProps {
  results?: ExternalResult[];
  isLoading?: boolean;
  searchTerm?: string;
}

const getStoreIcon = (store: string) => {
  const storeInfo = externalStores.find(s => s.name === store);
  switch (storeInfo?.icon) {
    case 'shopping-cart': return <ShoppingCart className="h-4 w-4 text-gray-500" />;
    case 'book': return <Book className="h-4 w-4 text-gray-500" />;
    case 'book-open': return <BookOpen className="h-4 w-4 text-gray-500" />;
    case 'bookmark': return <Bookmark className="h-4 w-4 text-gray-500" />;
    default: return <ShoppingCart className="h-4 w-4 text-gray-500" />;
  }
};

const ExternalSearchResults = ({ 
  results = mockExternalResults, 
  isLoading = false,
  searchTerm = "The Great Gatsby"
}: ExternalSearchResultsProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, idx) => (
          <Card key={idx} className="animate-pulse">
            <CardContent className="p-6 flex">
              <div className="w-16 h-16 bg-slate-200 rounded"></div>
              <div className="flex-1 ml-4 space-y-2">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                <div className="h-3 bg-slate-200 rounded w-1/4"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-lg text-gray-500">No external results found for "{searchTerm}"</p>
          <p className="text-sm text-gray-400 mt-2">Try a different search term</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <a 
          href={result.link} 
          target="_blank" 
          rel="noopener noreferrer"
          key={result.id}
          className="block"
        >
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="mr-4 flex-shrink-0">
                  {getStoreIcon(result.store)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{result.title}</h4>
                  <p className="text-sm text-gray-500">{result.author}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-univblue font-bold">${result.price.toFixed(2)}</span>
                    <span className="text-xs text-gray-500">{result.store}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ExternalSearchResults;
