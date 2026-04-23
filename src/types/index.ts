export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl: string;
  rating: number;
  xpValue: number;
}

export interface UserStats {
  xp: number;
  level: number;
  booksRead: number;
  reviewsWritten: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likes: number;
  timestamp: string;
  bookId?: string;
}

export interface Competition {
  id: string;
  title: string;
  description: string;
  deadline: string;
  participants: number;
  type: 'review' | 'quiz' | 'video' | 'essay';
}
