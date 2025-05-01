
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { User } from "@/types";
import { mockUsers } from "@/services/mockData";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

interface MessagePanelProps {
  recipient: User;
  bookTitle?: string;
}

const MessagePanel = ({ recipient, bookTitle }: MessagePanelProps) => {
  const { toast } = useToast();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "1", // current user id
      content: messageText.trim(),
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessageText("");
    
    toast({
      description: "Message sent!",
      duration: 3000,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentUser = mockUsers[0]; // Assume first user is the current user

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50 flex items-center">
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={recipient.avatar} alt={recipient.name} />
          <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium">{recipient.name}</h3>
          {bookTitle && (
            <p className="text-xs text-gray-500">Re: {bookTitle}</p>
          )}
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px]">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <p className="text-gray-500">No messages yet</p>
            <p className="text-sm text-gray-400 mt-1">Send a message to start the conversation</p>
          </div>
        ) : (
          messages.map((message) => {
            const isCurrentUser = message.senderId === currentUser.id;
            
            return (
              <div 
                key={message.id} 
                className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    isCurrentUser 
                      ? 'bg-univblue text-white rounded-tr-none' 
                      : 'bg-gray-100 rounded-tl-none'
                  }`}
                >
                  <p>{message.content}</p>
                  <p 
                    className={`text-xs mt-1 ${
                      isCurrentUser ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex">
          <Input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            className="ml-2 bg-univblue hover:bg-univblue-dark"
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;
