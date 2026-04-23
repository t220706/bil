import React from 'react';
import { Award, Star, Trophy, Medal, Target, Shield, Heart, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const AWARDS = [
  { id: 1, title: 'Đạo sứ Tri thức', category: 'Cống hiến', icon: Shield, color: 'text-blue-400', date: 'Mở khóa 20/04/2026', rarity: 'Huyền thoại' },
  { id: 2, title: 'Mọt sách Ưu tú', category: 'Đọc tập trung', icon: Trophy, color: 'text-yellow-400', date: 'Mở khóa 15/04/2026', rarity: 'Hiếm' },
  { id: 3, title: 'Reviewer Tài ba', category: 'Cộng đồng', icon: Star, color: 'text-purple-400', date: 'Mở khóa 10/04/2026', rarity: 'Sử thi' },
];

export default function Awards() {
  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bento-gradient rounded-[3rem] p-12 text-white relative overflow-hidden flex items-center justify-between min-h-[300px]">
           <div className="relative z-10 max-w-lg">
              <span className="bg-white/10 text-yellow-400 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest border border-white/10">Sưu tập danh hiệu</span>
              <h1 className="text-5xl font-black mt-6 mb-4 italic tracking-tighter uppercase leading-none">BỆ PHÓNG <br /> VINH DANH</h1>
              <p className="text-slate-300 text-sm mb-10 leading-relaxed italic border-l-2 border-yellow-500/50 pl-6">
                Nơi lưu giữ những thành tựu rực rỡ nhất trên hành trình chinh phục tri thức của bạn.
              </p>
           </div>
           <div className="hidden lg:flex relative mr-12">
              <div className="absolute inset-0 bg-yellow-500/10 blur-[80px] rounded-full animate-pulse"></div>
              <Award className="w-56 h-56 text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)] relative z-10" />
           </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bento-card p-10 flex flex-col justify-center items-center text-center bg-yellow-500 text-black border-none">
           <Medal className="w-16 h-16 mb-6" />
           <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none mb-4">Điểm Vinh Danh</h3>
           <div className="text-5xl font-black italic tracking-tighter uppercase">2,450</div>
           <p className="mt-6 text-[10px] font-black uppercase tracking-widest opacity-60">Sử dụng để đổi quà cao cấp</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS.map((award, i) => (
           <motion.div 
             key={award.id}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="bento-card p-10 flex flex-col items-center text-center group hover:border-yellow-500/30 cursor-pointer"
           >
              <div className="relative mb-8">
                 <div className="absolute inset-0 bg-white/5 blur-[30px] rounded-full group-hover:bg-yellow-500/10 transition-all"></div>
                 <award.icon className={`w-16 h-16 ${award.color} relative z-10 group-hover:scale-110 transition-transform`} />
              </div>
              <h4 className="text-xl font-black text-white uppercase italic tracking-tighter mb-1">{award.title}</h4>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">{award.category}</p>
              <div className="mt-auto pt-6 border-t border-slate-700/30 w-full flex flex-col gap-2">
                 <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{award.date}</div>
                 <div className="text-[9px] font-black py-1 px-3 bg-slate-800 text-blue-400 rounded-full w-fit mx-auto uppercase tracking-widest border border-blue-400/20">{award.rarity}</div>
              </div>
           </motion.div>
        ))}
      </div>
    </div>
  );
}
