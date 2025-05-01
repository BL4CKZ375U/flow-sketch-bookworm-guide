
import { Book, User } from "@/types";

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@university.edu",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "Jamie Smith",
    email: "jamie@university.edu",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: "3",
    name: "Morgan Williams",
    email: "morgan@university.edu",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: "4",
    name: "Taylor Brown",
    email: "taylor@university.edu",
    avatar: "https://i.pravatar.cc/150?img=4"
  }
];

// Mock current user
export const currentUser: User = mockUsers[0];

// Department options
export const departments = [
  "Computer Science",
  "Mathematics",
  "Biology",
  "Chemistry",
  "Engineering",
  "Business",
  "Psychology",
  "Literature",
  "History",
  "Physics",
  "Economics"
];

// Mock Books
export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    course: "CS101",
    price: 45,
    condition: "Good",
    description: "The essential introduction to algorithms. Some highlighting in chapters 5-8.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[1],
    createdAt: new Date(2023, 4, 15),
    department: "Computer Science",
    isbn: "9780262033848"
  },
  {
    id: "2",
    title: "Organic Chemistry",
    author: "Paula Y. Bruice",
    course: "CHEM220",
    price: 60,
    condition: "Like New",
    description: "Barely used, in excellent condition. Includes practice problem sets.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[2],
    createdAt: new Date(2023, 5, 2),
    department: "Chemistry",
    isbn: "9780134042282"
  },
  {
    id: "3",
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    course: "MATH101",
    price: 50,
    condition: "Very Good",
    description: "Minor cover wear, clean pages with no writing.",
    image: "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[3],
    createdAt: new Date(2023, 4, 28),
    department: "Mathematics",
    isbn: "9781285741550"
  },
  {
    id: "4",
    title: "Psychology: An Introduction",
    author: "Benjamin Lahey",
    course: "PSY101",
    price: 30,
    condition: "Good",
    description: "Useful notes in margins. All pages intact.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[0],
    createdAt: new Date(2023, 5, 10),
    department: "Psychology",
    isbn: "9780078035166"
  },
  {
    id: "5",
    title: "Fundamentals of Database Systems",
    author: "Ramez Elmasri",
    course: "CS344",
    price: 55,
    condition: "Fair",
    description: "Some water damage on first few pages. Content readable.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[1],
    createdAt: new Date(2023, 4, 22),
    department: "Computer Science",
    isbn: "9780133970777"
  },
  {
    id: "6",
    title: "Principles of Microeconomics",
    author: "N. Gregory Mankiw",
    course: "ECON101",
    price: 40,
    condition: "New",
    description: "Never used, still in original shrink wrap.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    seller: mockUsers[2],
    createdAt: new Date(2023, 5, 8),
    department: "Economics",
    isbn: "9781305971493"
  }
];

// Book condition options
export const bookConditions = [
  "New", 
  "Like New", 
  "Very Good", 
  "Good", 
  "Fair", 
  "Poor"
];

// Mock external search results
export const mockExternalResults = [
  {
    id: "ext1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    store: "Amazon",
    link: "https://amazon.com"
  },
  {
    id: "ext2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.50,
    store: "Barnes & Noble",
    link: "https://bn.com"
  },
  {
    id: "ext3",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 8.99,
    store: "AbeBooks",
    link: "https://abebooks.com"
  }
];

// Mock external stores
export const externalStores = [
  { name: "Amazon", icon: "shopping-cart" },
  { name: "Barnes & Noble", icon: "book" },
  { name: "Chegg", icon: "book-open" },
  { name: "AbeBooks", icon: "bookmark" }
];
