import { create } from 'zustand';
import { UserStats, Badge } from '../types';

interface UserState extends UserStats {
  addXp: (amount: number) => void;
  markBookAsRead: () => void;
  addReview: () => void;
  awardBadge: (badge: Badge) => void;
}

export const useUser = create<UserState>((set) => ({
  xp: 720,
  level: 8,
  booksRead: 32,
  reviewsWritten: 15,
  badges: [
    { id: '1', name: 'Độc giả chăm chỉ', icon: 'Book', description: 'Đã đọc 10 cuốn sách' },
    { id: '2', name: 'Reviewer tâm huyết', icon: 'Pen', description: 'Đã viết 5 bài review' },
  ],
  addXp: (amount) => set((state) => {
    const newXp = state.xp + amount;
    const newLevel = Math.floor(newXp / 1000) + 1; // Simple level logic
    return { xp: newXp, level: newLevel };
  }),
  markBookAsRead: () => set((state) => ({ booksRead: state.booksRead + 1 })),
  addReview: () => set((state) => ({ reviewsWritten: state.reviewsWritten + 1 })),
  awardBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
}));
