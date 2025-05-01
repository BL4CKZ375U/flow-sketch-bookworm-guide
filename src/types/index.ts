
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  course?: string;
  price: number;
  condition: 'New' | 'Like New' | 'Very Good' | 'Good' | 'Fair' | 'Poor';
  description?: string;
  image?: string;
  seller: User;
  createdAt: Date;
  department?: string;
  isbn?: string;
}

export type BookFilters = {
  department?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  searchTerm?: string;
};

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  createdAt: Date;
  bookId?: string;
}
