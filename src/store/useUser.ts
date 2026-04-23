import { create } from 'zustand';
import { UserStats, Badge } from '../types';

interface UserState extends UserStats {
  addXp: (amount: number) => void;
  markBookAsRead: () => void;
  addReview: () => void;
  awardBadge: (badge: Badge) => void;
}

export const useUser = create<UserState>((set) => ({
  xp: 0,
  level: 0,
  booksRead: 0,
  reviewsWritten: 0,
  badges: [],
  addXp: (amount) => set((state) => {
    const newXp = state.xp + amount;
    const newLevel = Math.floor(newXp / 1000); // 0-999 is Level 0, 1000 is Level 1
    return { xp: newXp, level: newLevel };
  }),
  markBookAsRead: () => set((state) => ({ booksRead: state.booksRead + 1 })),
  addReview: () => set((state) => ({ reviewsWritten: state.reviewsWritten + 1 })),
  awardBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
}));
