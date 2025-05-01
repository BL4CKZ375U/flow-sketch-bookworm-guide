
import React from "react";
import Layout from "@/components/layout/Layout";
import PostBookForm from "@/components/books/PostBookForm";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Post = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-serif font-bold text-univblue mb-2">
            Sell Your Book
          </h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below to list your textbook for sale
          </p>
          
          {isAuthenticated ? (
            <Card>
              <CardContent className="p-6 md:p-8">
                <PostBookForm />
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-medium mb-4">
                  Please login to post a book
                </h2>
                <p className="text-gray-600 mb-6">
                  You need to be logged in to sell books on our platform.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/login">
                    <Button className="bg-univblue hover:bg-univblue-dark">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
          
        </div>
      </div>
    </Layout>
  );
};

export default Post;
