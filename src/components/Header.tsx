import React from 'react';
import { Search, Flame, Bell, ChevronDown } from 'lucide-react';
import { useUser } from '../store/useUser';

export default function Header() {
  const { level } = useUser();

  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-bento-surface p-6 rounded-[2.5rem] border border-bento-border m-6 mb-0 sticky top-6 z-40 gap-6 backdrop-blur-xl bg-bento-surface/80">
      <div className="flex items-center gap-6 w-full md:w-auto">
        <div className="hidden lg:flex items-center gap-4 bg-slate-800/50 pl-5 pr-2 py-2 rounded-2xl border border-slate-700/50 group focus-within:border-blue-500/50 transition-all">
           <Search className="w-4 h-4 text-slate-500 group-focus-within:text-blue-400" />
           <input 
             type="text" 
             placeholder="Tìm kiếm tri thức..." 
             className="bg-transparent border-none outline-none text-xs font-medium text-white placeholder:text-slate-600 w-48"
           />
           <div className="bg-slate-700 px-2.5 py-1 rounded-lg text-[9px] font-black text-slate-400 uppercase tracking-widest border border-white/5">
              ⌘ K
           </div>
        </div>
        <div>
          <h1 className="text-xl font-black text-white italic tracking-tighter uppercase leading-none mb-1">Chào, Chu Thị Ngọc Lan 👋</h1>
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest opacity-80">{level === 0 ? "Cùng bắt đầu hành trình ngay hôm nay!" : "Ghi chú: Bạn còn 25 trang nữa để đạt mục tiêu!"}</p>
        </div>
      </div>

      
      <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center gap-2 bg-slate-800/40 px-4 py-2 rounded-xl border border-slate-700/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span> 
           1.2k Online
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-slate-700/50 pr-6">
            <div className="bg-orange-500/10 text-orange-500 px-3.5 py-1.5 rounded-xl flex items-center gap-2 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
              <Flame className="w-4 h-4 fill-orange-500" />
              <span className="text-xs font-black italic tracking-tighter">12</span>
            </div>
            
            <div className="relative cursor-pointer">
               <Bell className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
               <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-bento-surface"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <h4 className="text-xs font-black text-white uppercase italic tracking-tighter leading-none mb-1">Chu Thị Ngọc Lan</h4>
              <div className="text-[9px] text-blue-400 font-black uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">LVL {level}</div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-blue-500 blur-[15px] opacity-0 group-hover:opacity-30 transition-opacity rounded-full"></div>
              <img 
                src="https://i.pravatar.cc/100?u=htuyen220706@gmail.com" 
                alt="Avatar" 
                className="w-10 h-10 rounded-xl border-2 border-slate-800 group-hover:border-blue-500/50 transition-all relative z-10 shadow-xl"
              />
              <ChevronDown className="absolute -bottom-1 -right-1 w-4 h-4 text-white bg-slate-800 rounded-full p-0.5 border border-slate-700 z-20" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
