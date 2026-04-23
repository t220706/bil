import React from 'react';
import { Trophy, TrendingUp, Star, Award, Search, Filter, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const RANKINGS = [
  { rank: 1, name: 'Nguyễn Văn A', xp: '45.2k', books: 124, streak: 45, level: 82, avatar: '1' },
  { rank: 2, name: 'Lê Thị B', xp: '42.1k', books: 98, streak: 30, level: 75, avatar: '2' },
  { rank: 3, name: 'Trần Văn C', xp: '39.8k', books: 110, streak: 120, level: 71, avatar: '3' },
  { rank: 4, name: 'Phạm Thị D', xp: '35.5k', books: 85, streak: 15, level: 64, avatar: '4' },
  { rank: 5, name: 'Hoàng Văn E', xp: '32.9k', books: 72, streak: 22, level: 59, avatar: '5' },
  { rank: 6, name: 'Đỗ Thị F', xp: '28.4k', books: 64, streak: 8, level: 52, avatar: '6' },
  { rank: 7, name: 'Bùi Văn G', xp: '25.1k', books: 55, streak: 4, level: 48, avatar: '7' },
];

export default function Leaderboard() {
  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Top 3 Spotlight */}
        <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row gap-6 items-end justify-center py-10">
           {/* Rank 2 */}
           <div className="flex-1 order-2 md:order-1 flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl bg-slate-800 border-2 border-slate-700 p-2 mb-4 relative">
                 <img src="https://i.pravatar.cc/100?u=2" alt="2" className="w-full h-full object-cover rounded-2xl" />
                 <div className="absolute -top-3 -right-3 bg-slate-600 px-3 py-1 rounded-xl text-xs font-bold text-white border-2 border-slate-900 shadow-xl">#2</div>
              </div>
              <h3 className="text-sm font-black text-white uppercase italic tracking-tight mb-1">{RANKINGS[1].name}</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{RANKINGS[1].xp} XP</p>
           </div>

           {/* Rank 1 */}
           <div className="flex-1 order-1 md:order-2 flex flex-col items-center scale-110 mb-6">
              <div className="relative group">
                 <div className="absolute inset-0 bg-yellow-500/20 blur-[50px] rounded-full"></div>
                 <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-tr from-yellow-500 to-orange-500 p-1 mb-6 relative z-10 shadow-2xl">
                    <div className="w-full h-full rounded-[2.2rem] bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-slate-900">
                       <img src="https://i.pravatar.cc/150?u=1" alt="1" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div className="absolute -top-4 -right-4 bg-yellow-500 p-3 rounded-2xl shadow-xl border-4 border-slate-900 z-20 animate-bounce">
                    <Trophy className="w-6 h-6 text-black fill-black" />
                 </div>
              </div>
              <h3 className="text-lg font-black text-white uppercase italic tracking-tighter mb-1">{RANKINGS[0].name}</h3>
              <p className="text-yellow-500 text-xs font-black uppercase tracking-[0.2em]">{RANKINGS[0].xp} XP</p>
           </div>

           {/* Rank 3 */}
           <div className="flex-1 order-3 flex flex-col items-center">
              <div className="w-24 h-24 rounded-3xl bg-slate-800 border-2 border-slate-700 p-2 mb-4 relative">
                 <img src="https://i.pravatar.cc/100?u=3" alt="3" className="w-full h-full object-cover rounded-2xl" />
                 <div className="absolute -top-3 -right-3 bg-orange-800/80 px-3 py-1 rounded-xl text-xs font-bold text-white border-2 border-slate-900 shadow-xl">#3</div>
              </div>
              <h3 className="text-sm font-black text-white uppercase italic tracking-tight mb-1">{RANKINGS[2].name}</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{RANKINGS[2].xp} XP</p>
           </div>
        </div>

        {/* Global Stats */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
           <div className="bento-card p-10 bg-slate-800/30 flex flex-col justify-center min-h-[300px]">
              <ShieldCheck className="w-12 h-12 text-blue-500 mb-6" />
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">Danh dự tối cao</h2>
              <p className="text-slate-400 text-sm leading-relaxed italic mb-8">Hệ thống xếp hạng dựa trên sự đóng góp tri thức, thời gian đọc và thành tích thi đấu.</p>
              <div className="flex gap-4">
                 <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-white/5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Mùa giải</div>
                    <div className="text-sm font-black text-white uppercase italic">Q2 2026</div>
                 </div>
                 <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-white/5 text-right">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Cập nhật</div>
                    <div className="text-sm font-black text-blue-400 uppercase italic">Lúc 09:00</div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Main Ranking Table */}
      <div className="bento-card p-0 overflow-hidden border-slate-700/50">
         <div className="p-8 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/20">
            <h4 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
               <TrendingUp className="w-5 h-5 text-green-500" /> Bảng xếp hạng thế giới
            </h4>
            <div className="flex gap-3">
               <button className="px-5 py-2 bg-blue-600 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">Tuần này</button>
               <button className="px-5 py-2 bg-slate-800/50 rounded-xl text-[10px] font-black text-slate-400 border border-slate-700 uppercase tracking-widest hover:text-white transition-all">Tháng này</button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-slate-900/40 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <tr>
                     <th className="px-8 py-5">Thứ hạng</th>
                     <th className="px-8 py-5">Thành viên</th>
                     <th className="px-8 py-5">Cấp độ</th>
                     <th className="px-8 py-5">Kinh nghiệm (XP)</th>
                     <th className="px-8 py-5">Số sách</th>
                     <th className="px-8 py-5">Chuỗi (Streak)</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-700/30">
                  {RANKINGS.map((row) => (
                     <tr key={row.rank} className="hover:bg-blue-500/5 transition-colors cursor-pointer group">
                        <td className="px-8 py-6 font-black italic text-slate-400 group-hover:text-blue-400 group-hover:pl-10 transition-all text-xl tracking-tighter">#{row.rank}</td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-slate-800 overflow-hidden border border-slate-700 p-1 group-hover:border-blue-500/50 transition-all">
                                 <img src={`https://i.pravatar.cc/100?u=${row.avatar}`} alt={row.name} className="w-full h-full object-cover rounded-lg" />
                              </div>
                              <span className="text-sm font-black text-white uppercase tracking-tight italic group-hover:text-blue-400">{row.name}</span>
                              {row.streak > 100 && <Zap className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />}
                           </div>
                        </td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 uppercase">LVL {row.level}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 font-black text-white tabular-nums tracking-tighter text-lg">{row.xp}</td>
                        <td className="px-8 py-6 text-xs font-bold text-slate-500 uppercase tracking-widest">{row.books} tác phẩm</td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-1.5 rounded-xl border border-orange-500/20 w-fit">
                              <Zap className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                              <span className="text-xs font-black text-orange-500 tracking-tighter">{row.streak} NGÀY</span>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-8 text-center bg-slate-900/20 border-t border-slate-700/50">
            <button className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-blue-400 transition-colors">Tải thêm thành viên</button>
         </div>
      </div>
    </div>
  );
}
