import React from 'react';
import { Trophy, Clock, Users, Play, FileText, Gift, Star, Award } from 'lucide-react';
import { motion } from 'motion/react';

const CONTESTS = [
  {
    id: '1',
    title: 'Cảm nhận Mùa Hè',
    description: 'Viết về cuốn sách mang lại cảm giác mùa hè rực rỡ nhất cho bạn.',
    participants: 124,
    deadline: '10/05/2026',
    reward: 'Sách tặng & 500 XP',
    type: 'essay',
    image: 'https://images.unsplash.com/photo-1521056787327-165dc2a32836?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Tóm tắt Sapiens qua Video',
    description: 'Tạo video ngắn (under 3 min) chia sẻ bài học tâm đắc từ Sapiens.',
    participants: 45,
    deadline: '15/05/2026',
    reward: 'Tai nghe Bluetooth & 800 XP',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Quiz Master: Văn học VN',
    description: 'Bạn hiểu bao nhiêu về các tác phẩm văn học Việt Nam kinh điển?',
    participants: 890,
    deadline: 'Mỗi ngày',
    reward: 'Huy hiệu Quiz Master',
    type: 'quiz',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop'
  }
];

export default function Competitions() {
  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Đấu trường trí tuệ</h1>
          <p className="text-slate-400 text-sm">Thử thách bản thân, nhận phần quà giá trị và khẳng định tri thức.</p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
           <div className="bento-card bg-slate-800/40 p-4 border border-slate-700/50 flex items-center gap-4">
              <div className="bg-yellow-500/20 text-yellow-500 p-2 rounded-xl border border-yellow-500/20">
                <Trophy className="w-5 h-5 fill-yellow-500" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Mùa giải 4</div>
                <div className="text-xs font-bold text-white leading-none">12 ngày còn lại</div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CONTESTS.map((contest, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={contest.id} 
            className="bento-card overflow-hidden group flex flex-col md:flex-row hover:border-blue-500/30 transition-all p-0"
          >
            <div className="md:w-2/5 relative overflow-hidden h-48 md:h-auto">
               <img src={contest.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={contest.title} />
               <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10">
                  {contest.type === 'video' ? <Play className="w-4 h-4 text-red-500 fill-red-500" /> : <FileText className="w-4 h-4 text-blue-400" />}
               </div>
            </div>
            <div className="flex-1 p-8 flex flex-col">
               <div className="flex justify-between items-start mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{contest.title}</h3>
                   <div className="mt-1 flex items-center gap-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Đang diễn ra</span>
                   </div>
                 </div>
               </div>
               <p className="text-xs text-slate-400 mb-8 flex-1 leading-relaxed line-clamp-2 italic">{contest.description}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-500">
                     <Users className="w-3.5 h-3.5" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">{contest.participants} tham gia</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-400/80">
                     <Clock className="w-3.5 h-3.5" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">{contest.deadline}</span>
                  </div>
               </div>

               <div className="bg-slate-800/40 rounded-2xl p-4 flex items-center justify-between mb-6 border border-slate-700/30">
                  <div className="flex items-center gap-3">
                     <div className="bg-purple-500/20 p-2 rounded-lg">
                        <Gift className="w-4 h-4 text-purple-400" />
                     </div>
                     <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{contest.reward}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
               </div>

               <button className="w-full bg-white text-black font-bold py-3.5 rounded-2xl hover:scale-105 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest">
                 THAM GIA NGAY
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="col-span-12 bento-gradient rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 min-h-[300px]">
         <div className="relative z-10 lg:w-2/3">
            <span className="bg-white/10 text-blue-300 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.2em] border border-white/10">Vinh danh tri thức</span>
            <h2 className="text-4xl font-extrabold mt-6 mb-4 italic tracking-tight">ĐẠI SỨ ĐỌC SÁCH</h2>
            <p className="text-slate-300 text-sm mb-10 max-w-xl leading-relaxed italic pr-8 border-l-2 border-blue-500/30 pl-6">
              Đọc sách không chỉ là tiếp nhận kiến thức, mà là hành trình tỏa sáng cá nhân. Những cá nhân xuất sắc có cơ hội nhận danh hiệu danh giá từ Hệ sinh thái tri thức.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Người đọc xuất sắc', icon: Star },
                { label: 'Reviewer nổi bật', icon: Award },
                { label: 'Đại sứ tri thức', icon: Trophy },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
                   <badge.icon className="w-4 h-4 text-yellow-500 fill-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">{badge.label}</span>
                </div>
              ))}
            </div>
         </div>
         <div className="lg:w-1/3 flex justify-center items-center">
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/40 transition-all duration-500"></div>
               <Award className="relative w-48 h-48 text-white/90 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" />
            </div>
         </div>
      </section>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
