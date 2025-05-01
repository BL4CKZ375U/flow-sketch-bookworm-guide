
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  BookOpen, 
  Bell, 
  MessageSquare, 
  Menu,
  User as UserIcon,
  LogOut
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-univblue text-white py-3 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-univgold" />
          <span className="text-xl font-serif font-bold">UniBooks</span>
        </Link>

        {!isMobile && (
          <div className="relative flex-1 max-w-lg mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for books, courses, etc..."
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-800 bg-white rounded-full border border-transparent focus:outline-none focus:border-univgold"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {isMobile && (
            <Button variant="ghost" size="icon" className="text-white hover:text-univgold">
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Link to="/post" className="hidden sm:block">
            <Button className="bg-univgold hover:bg-univgold-dark text-univblue">
              Sell a Book
            </Button>
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/messages" className="hidden sm:block">
                <Button variant="ghost" size="icon" className="text-white hover:text-univgold">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 rounded-full p-0 border border-white/20">
                    <Avatar>
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-books" className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>My Books</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/messages" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="text-red-500 flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-white hover:text-univgold">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="hidden sm:block">
                <Button className="bg-univgold hover:bg-univgold-dark text-univblue">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          
          {isMobile && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-univgold">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/post">Sell a Book</Link>
                </DropdownMenuItem>
                {!isAuthenticated && (
                  <DropdownMenuItem asChild>
                    <Link to="/signup">Sign Up</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
