
import React from "react";
import { Book } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        {book.image ? (
          <img 
            src={book.image} 
            alt={book.title} 
            className="object-cover h-full w-full"
          />
        ) : (
          <div className="h-full w-full bg-slate-200 flex items-center justify-center text-slate-400">
            No Image
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="font-serif font-bold text-white text-lg truncate">
            {book.title}
          </h3>
          <p className="text-white/80 text-sm">{book.author}</p>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-univteal hover:bg-univteal-dark">
            {book.condition}
          </Badge>
          {book.course && (
            <Badge variant="outline" className="border-univred text-univred">
              {book.course}
            </Badge>
          )}
        </div>
        
        <div className="mt-2">
          <span className="font-bold text-xl text-univblue">${book.price.toFixed(2)}</span>
          {book.department && (
            <p className="text-xs text-gray-500 mt-1">{book.department}</p>
          )}
        </div>
        
        <div className="flex items-center mt-3">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={book.seller.avatar} />
            <AvatarFallback>{book.seller.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-gray-600">{book.seller.name}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link 
          to={`/book/${book.id}`}
          className="w-full text-center text-univblue hover:text-univblue-dark text-sm font-semibold"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
