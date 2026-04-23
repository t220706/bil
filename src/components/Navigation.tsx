import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Library, Users, Podcast, GraduationCap, Trophy, LayoutGrid, Award, Calendar, User } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: Home, label: 'Trang chủ', path: '/' },
  { icon: Library, label: 'Thư viện', path: '/library' },
  { icon: Users, label: 'Cộng đồng', path: '/community' },
  { icon: Podcast, label: 'Podcast & Video', path: '/multimedia' },
  { icon: GraduationCap, label: 'Học tập', path: '/learning' },
  { icon: Trophy, label: 'Thi đấu', path: '/competitions' },
  { icon: LayoutGrid, label: 'Bảng xếp hạng', path: '/leaderboard' },
  { icon: Award, label: 'Vinh danh', path: '/awards' },
  { icon: Calendar, label: 'Sự kiện', path: '/events' },
  { icon: User, label: 'Cá nhân', path: '/profile' },
];

export default function Navigation() {
  return (
    <aside className="w-20 bg-bento-surface border-r border-bento-border h-screen sticky top-0 flex flex-col items-center py-10 gap-10 overflow-y-auto scrollbar-none z-50">
      <div className="w-12 h-12 bg-blue-600 rounded-[1.2rem] flex items-center justify-center text-2xl font-black shadow-[0_10px_30px_rgba(37,99,235,0.4)] text-white italic tracking-tighter">
        B
      </div>

      <nav className="flex-1 w-full flex flex-col items-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "p-3 rounded-[1.2rem] transition-all duration-300 relative group",
                isActive 
                  ? "text-blue-400 bg-blue-500/15 shadow-[inset_0_0_10px_rgba(37,99,235,0.1)]" 
                  : "text-slate-500 hover:text-white hover:bg-slate-800/50"
              )
            }
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <div className="absolute left-[110%] top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-2xl z-50">
               {item.label}
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-2 bg-slate-700/50 rounded-xl mb-4 cursor-pointer">
        <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full"></div>
      </div>
    </aside>
  );
}
