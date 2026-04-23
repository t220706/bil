import React from 'react';
import { BookOpen, Brain, PenTool, GraduationCap, ChevronRight, Star, FileText, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const TOPICS = [
  { id: '1', title: 'Tóm tắt tác phẩm 12', category: 'Thi THPTQG', level: 'Nâng cao', students: '1.2k', rating: 4.9, icon: BookOpen, color: 'text-orange-500' },
  { id: '2', title: 'Phân tích tâm lý nhân vật', category: 'Lý luận VH', level: 'Cơ bản', students: '850', rating: 4.7, icon: Brain, color: 'text-blue-500' },
  { id: '3', title: 'Kỹ năng viết Essay triết học', category: 'Kỹ năng', level: 'Trung bình', students: '2.5k', rating: 4.8, icon: PenTool, color: 'text-purple-500' },
  { id: '4', title: 'Lịch sử văn minh thế giới', category: 'Kiến thức', level: 'Cơ bản', students: '5.2k', rating: 4.9, icon: GraduationCap, color: 'text-green-500' }
];

export default function Learning() {
  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Banner Section */}
        <div className="col-span-12 lg:col-span-8 bento-gradient rounded-[3rem] p-12 text-white relative overflow-hidden flex items-center justify-between min-h-[300px]">
           <div className="relative z-10 max-w-lg">
              <span className="bg-white/10 text-orange-400 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest border border-white/10">Trung tâm học tập</span>
              <h1 className="text-5xl font-black mt-6 mb-4 italic tracking-tighter uppercase leading-none">Chinh phục <br /> tri thức</h1>
              <p className="text-slate-300 text-sm mb-10 leading-relaxed italic border-l-2 border-orange-500/50 pl-6">
                Hệ thống tóm tắt tác phẩm, phân tích nhân vật và ngân hàng câu hỏi ôn thi được biên soạn bởi các chuyên gia.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white px-8 py-3.5 rounded-2xl font-bold hover:scale-105 transition-all text-xs uppercase tracking-widest shadow-lg shadow-orange-500/20">Bắt đầu ngay</button>
                <button className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-white/10 transition-all text-xs uppercase tracking-widest">Xem lộ trình</button>
              </div>
           </div>
           <div className="hidden lg:flex relative mr-10 group">
              <div className="absolute inset-0 bg-orange-500/20 blur-[80px] rounded-full animate-pulse transition-all group-hover:bg-orange-500/30"></div>
              <Brain className="w-48 h-48 text-white/90 drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-700" />
           </div>
        </div>

        {/* Stats Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
           <div className="bento-card p-8 bg-slate-800/40 border-slate-700 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                 <div className="bg-blue-600/20 p-3 rounded-2xl">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Mục tiêu ngày</div>
                    <div className="text-xs font-bold text-white uppercase italic">3/5 Chủ đề</div>
                 </div>
              </div>
              <div className="mt-10">
                 <div className="flex justify-between items-end mb-4">
                    <div className="text-4xl font-black italic tracking-tighter uppercase">65%</div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Tiến trình</div>
                 </div>
                 <div className="w-full bg-slate-700/50 h-3 rounded-full overflow-hidden border border-slate-700">
                    <div className="bg-blue-600 h-full w-[65%] rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                 </div>
              </div>
              <p className="mt-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest italic leading-relaxed">Bạn cần hoàn thành thêm 2 bài tóm tắt để duy trì chuỗi 7 ngày học tập.</p>
           </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
           <h2 className="text-xl font-black text-white tracking-tight uppercase italic flex items-center gap-3">
             <FileText className="w-5 h-5 text-orange-500" /> Chủ đề tiêu biểu
           </h2>
           <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:underline">Xem tất cả</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPICS.map((topic, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={topic.id} 
              className="bento-card p-6 group hover:border-orange-500/30 cursor-pointer border-slate-700/30 bg-slate-800/20"
            >
              <div className="flex items-center justify-between mb-8">
                 <div className={`p-4 rounded-2xl bg-white/5 ${topic.color}`}>
                    <topic.icon className="w-6 h-6" />
                 </div>
                 <div className="flex items-center gap-1.5 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-black text-white">{topic.rating}</span>
                 </div>
              </div>
              <div className="space-y-1 mb-8">
                 <div className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{topic.category}</div>
                 <h3 className="text-lg font-black text-white group-hover:text-orange-500 transition-colors uppercase tracking-tight italic leading-tight">{topic.title}</h3>
              </div>
              <div className="flex items-center justify-between border-t border-slate-700/30 pt-6">
                 <div className="flex items-center gap-2 text-slate-500">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{topic.students}</span>
                 </div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-700/30 px-3 py-1 rounded-full">{topic.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Exam Prep Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
         <div className="bento-card p-10 bg-indigo-600/10 border-indigo-500/20 relative overflow-hidden group">
            <div className="relative z-10">
               <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Ngân hàng câu hỏi</h4>
               <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed italic">Hơn 5000+ câu hỏi trắc nghiệm văn học và phân tích chiều sâu.</p>
               <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500 transition-all">Luyện tập ngay</button>
            </div>
            <FileText className="absolute -right-6 -bottom-6 w-40 h-40 text-indigo-500/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
         </div>
         <div className="bento-card p-10 bg-pink-600/10 border-pink-500/20 relative overflow-hidden group">
            <div className="relative z-10">
               <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Lộ trình 30 ngày</h4>
               <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed italic">Chiến thuật ôn thi cấp tốc cho kỳ thi quan trọng.</p>
               <button className="bg-pink-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 transition-all">Khám phá lộ trình</button>
            </div>
            <Clock className="absolute -right-6 -bottom-6 w-40 h-40 text-pink-500/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
         </div>
      </div>
    </div>
  );
}
