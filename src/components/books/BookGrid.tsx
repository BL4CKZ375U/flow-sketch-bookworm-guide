
import React from "react";
import { Book } from "@/types";
import BookCard from "./BookCard";

interface BookGridProps {
  books: Book[];
  loading?: boolean;
}

const BookGrid = ({ books, loading = false }: BookGridProps) => {
  if (loading) {
    return (
      <div className="book-grid">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="bg-slate-100 animate-pulse h-[300px] rounded-md"
          />
        ))}
      </div>
    );
  }
  
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500">No books found.</p>
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookGrid;
