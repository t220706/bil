import React from 'react';
import { User, Settings, Award, Shield, Book, History, Heart, Share2, Edit3, Trash2, BookOpen, Star, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { useUser } from '../store/useUser';

export default function Profile() {
  const { xp, level, badges } = useUser();
  const progress = (xp % 1000) / 10;

  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      {/* Profile Header */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 bento-card p-10 flex flex-col items-center text-center">
           <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-blue-500 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-indigo-600 p-1 relative z-10">
                 <div className="w-full h-full rounded-[2.2rem] bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=htuyen220706@gmail.com" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 p-2 rounded-xl shadow-lg border-2 border-slate-900 z-20">
                 <Trophy className="w-4 h-4 text-black fill-black" />
              </div>
           </div>
           
           <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">Ngọc Lan</h2>
           <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6">Đạo sứ Tri thức - LVL {level}</p>
           
           <div className="w-full space-y-2 mb-8">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                 <span>Tiến trình cấp độ</span>
                 <span>{xp % 1000} / 1000 XP</span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                 <div 
                   className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" 
                   style={{ width: `${progress}%` }} 
                 />
              </div>
           </div>

           <div className="flex gap-4 w-full">
              <button className="flex-1 bg-white text-black py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">Chỉnh sửa</button>
              <button className="bg-slate-800 border border-slate-700 p-3 rounded-2xl hover:bg-slate-700 transition-colors">
                 <Settings className="w-4 h-4 text-slate-400" />
              </button>
           </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bento-card p-10 flex flex-col justify-between hover:border-blue-500/30 transition-all bg-blue-600/5">
              <div>
                 <Book className="w-8 h-8 text-blue-500 mb-6" />
                 <h4 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none mb-2">24 cuốn</h4>
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Sách đã hoàn thành</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-lg bg-slate-800 border-2 border-slate-900 overflow-hidden">
                          <img src={`https://images.unsplash.com/photo-${1544947950 + i}-fa07a98d237f?w=100&h=100&fit=crop`} alt="book" className="w-full h-full object-cover" />
                       </div>
                    ))}
                 </div>
                 <span className="text-[10px] font-black text-blue-400 uppercase">+20 cuốn khác</span>
              </div>
           </div>

           <div className="bento-card p-10 flex flex-col justify-between border-none bg-indigo-600 shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
              <div>
                 <Shield className="w-8 h-8 text-white mb-6" />
                 <h4 className="text-4xl font-black italic tracking-tighter text-white uppercase leading-none mb-2">Top 5%</h4>
                 <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest">Xếp hạng toàn quốc</p>
              </div>
              <div className="mt-8">
                 <p className="text-indigo-100/70 text-[10px] font-medium leading-relaxed italic">Bạn đang dẫn đầu trong cộng đồng Reviewer tháng này. Hãy tiếp tục chia sẻ!</p>
              </div>
           </div>

           <div className="col-span-1 md:col-span-2 bento-card p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-8">
                 <div className="bg-slate-800/50 p-6 rounded-[2rem] border border-slate-700/50">
                    <Award className="w-12 h-12 text-yellow-500 fill-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]" />
                 </div>
                 <div>
                    <h5 className="text-xl font-black text-white uppercase italic tracking-tighter mb-1">Huy hiệu đạt được</h5>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Đã mở khóa {badges.length} danh hiệu cao quý</p>
                 </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                 {badges.map((badge, i) => (
                    <div key={i} className="bg-slate-800/40 border border-slate-700/50 px-6 py-2.5 rounded-full whitespace-nowrap">
                       <span className="text-[10px] font-black text-white uppercase tracking-widest italic">{badge.name}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="grid grid-cols-12 gap-6 pb-12">
        <div className="col-span-12 lg:col-span-8 space-y-6">
           <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3 ml-2">
             <History className="w-5 h-5 text-blue-500" /> Nhật ký hoạt động
           </h3>
           {[
             { action: 'Hoàn thành chương 4', target: 'Sapiens: Lược sử loài người', time: '2 giờ trước', icon: BookOpen, color: 'text-blue-400' },
             { action: 'Review mới cho', target: 'Mắt Biếc - Nguyễn Nhật Ánh', time: 'Hôm qua', icon: Star, color: 'text-yellow-400' },
             { action: 'Tham gia cuộc thi', target: 'Cảm nhận Mùa Hè', time: '2 ngày trước', icon: Trophy, color: 'text-purple-400' }
           ].map((log, i) => (
              <div key={i} className="bento-card p-8 flex items-center justify-between border-slate-700/30 bg-slate-900/20 hover:bg-slate-800/20 transition-all">
                 <div className="flex items-center gap-6">
                    <div className="bg-slate-800 p-4 rounded-2xl">
                       <log.icon className={`w-5 h-5 ${log.color}`} />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{log.time}</div>
                       <h6 className="text-sm font-black text-white uppercase italic tracking-tight">
                          {log.action} <span className="text-blue-500">— {log.target}</span>
                       </h6>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Heart className="w-4 h-4 text-slate-700 hover:text-red-500 cursor-pointer" />
                    <Share2 className="w-4 h-4 text-slate-700 hover:text-blue-500 cursor-pointer" />
                 </div>
              </div>
           ))}
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
           <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3 ml-2">
             <User className="w-5 h-5 text-indigo-500" /> Đang theo dõi
           </h3>
           <div className="bento-card p-8 bg-slate-800/20 border-slate-700/30">
              <div className="space-y-6">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-700 overflow-hidden border border-slate-600">
                             <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                          </div>
                          <div>
                             <div className="text-xs font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">Reviewer {i}</div>
                             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LVL {10 + i}</div>
                          </div>
                       </div>
                       <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Nhắn tin</button>
                    </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-700 transition-all">Xem tất cả</button>
           </div>
        </div>
      </div>
    </div>
  );
}
