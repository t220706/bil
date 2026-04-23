import React from 'react';
import { Play, Podcast, Headphones, Video, Clock, Share2, Heart, Search, Users } from 'lucide-react';
import { motion } from 'motion/react';

const MEDIA_CONTENT = [
  {
    id: '1',
    title: 'Tóm tắt Sapiens: Lược sử loài người',
    author: 'BookVerse Studio',
    duration: '15:20',
    type: 'podcast',
    category: 'Lịch sử',
    thumbnail: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=400&fit=crop',
    plays: '12k'
  },
  {
    id: '2',
    title: 'Phân tích tâm lý nhân vật Chí Phèo',
    author: 'Văn học Review',
    duration: '22:45',
    type: 'video',
    category: 'Văn học VN',
    thumbnail: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop',
    plays: '8.5k'
  },
  {
    id: '3',
    title: 'Kỹ năng đọc nhanh & ghi nhớ sâu',
    author: 'LevelUp Reading',
    duration: '10:15',
    type: 'video',
    category: 'Kỹ năng',
    thumbnail: 'https://images.unsplash.com/photo-1521056787327-165dc2a32836?w=600&h=400&fit=crop',
    plays: '25k'
  },
  {
    id: '4',
    title: 'Bí mật của hạnh phúc - The Little Book of Hygge',
    author: 'Chill with Books',
    duration: '45:00',
    type: 'podcast',
    category: 'Lối sống',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop',
    plays: '5.2k'
  }
];

export default function Multimedia() {
  return (
    <div className="p-6 space-y-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Hero Segment */}
        <div className="col-span-12 lg:col-span-9 bento-gradient rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
           <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
           <img 
             src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&h=600&fit=crop" 
             className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-[-1]" 
             alt="Audio backdrop" 
           />
           
           <div className="relative z-10">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Đang phát nhiều nhất</span>
              <h1 className="text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">Podcast: Nghệ thuật sống tối giản</h1>
              <p className="text-slate-300 max-w-xl mb-8 leading-relaxed italic text-sm border-l-4 border-blue-500 pl-6">
                Làm sao để tìm thấy bình yên trong thế giới ồn ào? Cùng lắng nghe chia sẻ từ những đạo sứ tri thức về lối sống Less is More.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all text-xs uppercase tracking-widest">
                  <Play className="w-4 h-4 fill-black" /> Nghe ngay
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-2xl font-bold hover:bg-white/20 transition-all text-xs uppercase tracking-widest">
                   Thông tin thêm
                </button>
              </div>
           </div>
        </div>

        {/* Featured Card */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
           <div className="bento-card p-8 bg-blue-600 flex flex-col justify-between h-full border-none">
              <div>
                <Headphones className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Thời gian nghe tuần này</h3>
                <p className="text-blue-100 text-sm italic">Bạn đã nghe 4.5 giờ podcast.</p>
              </div>
              <div className="mt-8">
                 <div className="text-4xl font-black text-white italic">4H 30M</div>
                 <div className="w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-white h-full w-[70%]" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Discovery Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <h2 className="text-2xl font-bold text-white tracking-tight uppercase italic flex items-center gap-3">
             <Video className="w-6 h-6 text-blue-500" /> Khám phá đa phương tiện
           </h2>
           <div className="flex gap-2">
              {['Tất cả', 'Podcast', 'Video', 'Tóm tắt'].map(tab => (
                <button key={tab} className="px-5 py-2 rounded-xl text-[10px] font-bold bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all uppercase tracking-widest text-slate-400 hover:text-white">
                  {tab}
                </button>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_CONTENT.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={item.id} 
              className="bento-card group overflow-hidden border-slate-700/30 hover:border-blue-500/30 p-0"
            >
              <div className="relative aspect-video overflow-hidden">
                 <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full scale-75 group-hover:scale-100 transition-transform">
                       <Play className="w-6 h-6 text-black fill-black" />
                    </div>
                 </div>
                 <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-white">
                    {item.duration}
                 </div>
                 <div className="absolute top-2 left-2 bg-blue-600 px-2 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
                    {item.type}
                 </div>
              </div>
              <div className="p-6">
                 <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">{item.category}</div>
                 <h4 className="text-sm font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors uppercase tracking-tight italic">{item.title}</h4>
                 <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-slate-700 rounded-full" />
                       <span className="text-[10px] text-slate-500 font-bold uppercase">{item.author}</span>
                    </div>
                    <div className="flex gap-4">
                       <Heart className="w-4 h-4 text-slate-500 hover:text-red-500 cursor-pointer transition-colors" />
                       <Share2 className="w-4 h-4 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { title: 'Bản tin sách', icon: Podcast, color: 'bg-indigo-600', desc: 'Cập nhật tin tức văn học hàng tuần.' },
           { title: 'Tác giả lên tiếng', icon: Users, color: 'bg-purple-600', desc: 'Phỏng vấn các tác giả nổi tiếng.' },
           { title: 'Thư viện âm thanh', icon: Headphones, color: 'bg-pink-600', desc: 'Kho sách nói đồ sộ hơn 1000 tập.' }
         ].map((cat, i) => (
           <div key={i} className="bento-card p-6 bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 cursor-pointer transition-all flex items-center gap-6">
              <div className={`${cat.color} p-4 rounded-2xl`}>
                 <cat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                 <h5 className="text-sm font-bold text-white uppercase tracking-widest mb-1 italic">{cat.title}</h5>
                 <p className="text-[10px] text-slate-500 font-medium">{cat.desc}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
