
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { mockBooks } from "@/services/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ArrowLeft, BookOpen } from "lucide-react";
import MessagePanel from "@/components/messages/MessagePanel";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import NotFound from "./NotFound";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [showContactForm, setShowContactForm] = React.useState(false);
  
  const book = mockBooks.find(book => book.id === id);
  
  if (!book) {
    return <NotFound />;
  }
  
  const handleContactClick = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to contact the seller.",
        variant: "destructive",
      });
      return;
    }
    
    setShowContactForm(true);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book Details */}
          <div className="md:w-3/5 lg:w-2/3">
            <Link 
              to="/browse" 
              className="inline-flex items-center text-univblue hover:text-univblue-dark mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Link>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Book Header */}
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-serif font-bold text-univblue">{book.title}</h1>
                    <p className="text-lg text-gray-700">{book.author}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-univteal hover:bg-univteal-dark">
                      {book.condition}
                    </Badge>
                    {book.course && (
                      <Badge variant="outline" className="border-univred text-univred">
                        {book.course}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Book Content */}
              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Book Image */}
                <div className="md:w-1/3">
                  {book.image ? (
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-10 w-10 text-gray-400" />
                    </div>
                  )}
                  
                  <div className="mt-4 bg-univblue/5 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-univblue">${book.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">
                      Posted on {book.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                {/* Book Details */}
                <div className="md:w-2/3">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-medium mb-2">About this book</h2>
                      <p className="text-gray-600">
                        {book.description || "No description provided."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {book.department && (
                        <div>
                          <p className="text-sm text-gray-500">Department</p>
                          <p className="font-medium">{book.department}</p>
                        </div>
                      )}
                      {book.course && (
                        <div>
                          <p className="text-sm text-gray-500">Course</p>
                          <p className="font-medium">{book.course}</p>
                        </div>
                      )}
                      {book.isbn && (
                        <div>
                          <p className="text-sm text-gray-500">ISBN</p>
                          <p className="font-medium">{book.isbn}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-gray-500">Condition</p>
                        <p className="font-medium">{book.condition}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        onClick={handleContactClick} 
                        className="bg-univblue hover:bg-univblue-dark"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact Seller
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seller Info & Contact Form */}
          <div className="md:w-2/5 lg:w-1/3">
            {/* Seller Card */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-lg font-medium mb-4">Seller Information</h2>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={book.seller.avatar} />
                    <AvatarFallback>{book.seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-medium">{book.seller.name}</p>
                    <p className="text-sm text-gray-500">{book.seller.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form */}
            {showContactForm && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium mb-4">Contact Seller</h2>
                  <MessagePanel recipient={book.seller} bookTitle={book.title} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
