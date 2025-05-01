
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { mockUsers } from "@/services/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MessagePanel from "@/components/messages/MessagePanel";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft } from "lucide-react";

const Messages = () => {
  const { isAuthenticated } = useAuth();
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const isMobile = useIsMobile();
  
  // Filter out current user from contacts
  const contacts = mockUsers.filter((user) => user.id !== "1");
  
  const showMessagePanel = selectedUser !== null;
  const showContactList = !isMobile || (isMobile && !showMessagePanel);
  
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-medium mb-4">
                Please login to view your messages
              </h2>
              <p className="text-gray-600 mb-6">
                You need to be logged in to access your messages.
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
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-univblue mb-6">
          Messages
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Contacts List */}
          {showContactList && (
            <div className="md:col-span-1">
              <Card className="overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h2 className="font-medium">Contacts</h2>
                </div>
                <CardContent className="p-0">
                  {contacts.length > 0 ? (
                    <ul>
                      {contacts.map((user) => (
                        <li key={user.id}>
                          <button
                            onClick={() => setSelectedUser(user)}
                            className={`w-full text-left p-4 flex items-center hover:bg-gray-50 border-b ${
                              selectedUser?.id === user.id ? 'bg-gray-50' : ''
                            }`}
                          >
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      No contacts yet
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Message Panel */}
          <div className="md:col-span-2 lg:col-span-3">
            {isMobile && showMessagePanel && (
              <Button 
                variant="ghost"
                className="mb-4"
                onClick={() => setSelectedUser(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to contacts
              </Button>
            )}
            
            {showMessagePanel ? (
              <MessagePanel recipient={selectedUser} />
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="mb-2">Select a contact to start messaging</p>
                  <p className="text-sm">Your conversations will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
