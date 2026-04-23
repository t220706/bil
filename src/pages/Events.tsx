import React from 'react';
import { Calendar, MapPin, Users, Ticket, Bell, ExternalLink, Clock, Flame, Award } from 'lucide-react';
import { motion } from 'motion/react';

const EVENTS = [
  { id: 1, title: 'Ngày hội Sách 2026', date: 'Cả ngày 15/05', location: 'Công viên Thống Nhất', category: 'Lễ hội', type: 'offline', image: 'https://images.unsplash.com/photo-1521056787327-165dc2a32836?w=600&h=400&fit=crop' },
  { id: 2, title: 'Webinar: Bí kíp ôn thi Văn', date: '19:00 - 21/05', location: 'Phòng Zoom 02', category: 'Học tập', type: 'online', image: 'https://images.unsplash.com/photo-1589998059171-dd8918c81c4d?w=600&h=400&fit=crop' },
  { id: 3, title: 'Talkshow cùng tác giả Tô Hoài', date: '09:00 - 25/05', location: 'Hệ sinh thái tri thức Studio', category: 'Talkshow', type: 'online', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop' },
];

export default function Events() {
  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
         <div>
            <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">Hành trình Sự kiện</h1>
            <p className="text-slate-400 text-sm">Khám phá các buổi talkshow, hội sách và lớp học trực tuyến sắp tới.</p>
         </div>
         <button className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center gap-3">
            <Bell className="w-4 h-4" /> Nhận thông báo
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {EVENTS.map((event, i) => (
            <motion.div 
               key={event.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bento-card group overflow-hidden border-slate-700/30 p-0"
            >
               <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                     <span className={`w-2 h-2 rounded-full ${event.type === 'online' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                     <span className="text-[10px] font-black text-white uppercase tracking-widest">{event.type}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-xl text-white shadow-xl">
                     <Calendar className="w-4 h-4" />
                  </div>
               </div>
               <div className="p-8">
                  <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">{event.category}</div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-6 group-hover:text-blue-400 transition-colors leading-tight">{event.title}</h3>
                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3 text-slate-500">
                        <Clock className="w-4 h-4 text-blue-500/50" />
                        <span className="text-[11px] font-bold uppercase tracking-widest italic">{event.date}</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-500">
                        <MapPin className="w-4 h-4 text-red-500/50" />
                        <span className="text-[11px] font-bold uppercase tracking-widest italic line-clamp-1">{event.location}</span>
                     </div>
                  </div>
                  <button className="w-full bg-slate-800 border border-slate-700 text-white font-black py-3.5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-700 transition-all text-[10px] uppercase tracking-widest group/btn border-slate-700/50">
                     <Ticket className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" /> Đăng ký vé
                  </button>
               </div>
            </motion.div>
         ))}
      </div>

      {/* Featured Big Banner */}
      <div className="bento-gradient rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
         <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center gap-3 bg-red-500/20 text-red-400 px-4 py-1 rounded-full border border-red-500/20 mb-6">
               <Flame className="w-4 h-4 fill-red-400" />
               <span className="text-[10px] font-black uppercase tracking-widest">Sắp diễn ra - 24H còn lại</span>
            </div>
            <h2 className="text-4xl font-black italic tracking-tighter uppercase leading-none mb-6">CUỘC THI: SÁNG TÁC TÁC PHẨM NHÍ</h2>
            <p className="text-slate-300 text-sm italic mb-10 max-w-lg leading-relaxed border-l-2 border-red-500/30 pl-6">
               Giải thưởng lên đến 10.000.000 VNĐ cùng cơ hội xuất bản chính thức tại NXB Kim Đồng. Tham gia ngay để khẳng định tài năng của bạn!
            </p>
            <div className="flex gap-4">
               <button className="bg-white text-black px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">Chi tiết</button>
               <button className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] hover:underline px-4">
                  <ExternalLink className="w-4 h-4 text-slate-500" /> Chia sẻ
               </button>
            </div>
         </div>
         <div className="md:w-1/3 flex justify-center">
            <div className="relative scale-125">
               <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full animate-pulse"></div>
               <Calendar className="w-48 h-48 text-white/5 relative z-10" />
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
               >
                  <Award className="w-32 h-32 text-red-500/40 drop-shadow-2xl" />
               </motion.div>
            </div>
         </div>
      </div>
    </div>
  );
}
