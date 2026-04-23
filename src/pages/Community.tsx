import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Send, Plus, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useUser } from '../store/useUser';

const INITIAL_POSTS = [
  {
    id: '1',
    userName: 'Lan Anh',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'Đại sứ đọc sách',
    content: 'Vừa đọc xong cuốn "Mắt biếc". Thực sự là một câu chuyện cảm động về tình yêu đơn phương và sự hoài niệm. Những đoạn miêu tả về làng Đo Đo làm mình nhớ quê da diết...',
    book: 'Mắt biếc',
    rating: 5,
    likes: 124,
    comments: 23,
    time: '2 giờ trước'
  },
  {
    id: '2',
    userName: 'Minh Khoa',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'Top Reviewer',
    content: 'Review nhanh cuốn Sapiens: Lược sử loài người. Một cái nhìn cực kỳ mới mẻ và sâu sắc về lịch sử tiến hóa của chúng ta. Rất đáng đọc cho những ai muốn mở mang kiến thức về nhân loại.',
    book: 'Sapiens',
    rating: 4.5,
    likes: 89,
    comments: 12,
    time: '5 giờ trước'
  }
];

export default function Community() {
  const { addXp, addReview } = useUser();
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [newPostContent, setNewPostContent] = useState('');

  const handlePostReview = () => {
    if (!newPostContent.trim()) return;
    
    const newPost = {
      id: Date.now().toString(),
      userName: 'Minh Anh',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      role: 'Người đọc chăm chỉ',
      content: newPostContent,
      book: 'Dế Mèn phiêu lưu ký',
      rating: 5,
      likes: 0,
      comments: 0,
      time: 'Vừa xong'
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    addXp(20); // Award XP for review
    addReview();
  };

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-white mb-2">Cộng đồng BookVerse</h1>
          <p className="text-slate-400 text-sm">Nơi kết nối đam mê, chia sẻ tri thức và cùng nhau tỏa sáng.</p>
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-end">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-[2rem] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 uppercase text-xs tracking-widest active:scale-95">
            <Plus className="w-5 h-5" /> Tạo nhóm đọc
          </button>
        </div>
      </div>

      {/* Post Interface */}
      <div className="bento-card p-8 group">
        <div className="flex gap-6">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-700" alt="Me" />
          <div className="flex-1">
            <textarea
              placeholder="Bạn muốn chia sẻ điều gì về những cuốn sách đã đọc?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="w-full h-32 bg-slate-800/50 border border-slate-700 rounded-[2rem] p-6 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-white placeholder:text-slate-500 shadow-inner"
            />
            <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
              <div className="flex gap-2">
                 <button className="text-[10px] uppercase tracking-widest bg-slate-800 text-slate-400 px-4 py-2 rounded-full font-bold hover:bg-slate-700 transition-colors border border-slate-700"># Sách</button>
                 <button className="text-[10px] uppercase tracking-widest bg-slate-800 text-slate-400 px-4 py-2 rounded-full font-bold hover:bg-slate-700 transition-colors border border-slate-700 translate-y-[-1px]">Video</button>
              </div>
              <button 
                onClick={handlePostReview}
                className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg active:scale-95"
              >
                <Send className="w-4 h-4" /> ĐĂNG BÀI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="grid gap-6">
        {posts.map((post) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={post.id} 
            className="bento-card p-8 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={post.userAvatar} className="w-12 h-12 rounded-2xl object-cover border border-slate-700" alt={post.userName} />
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  {post.userName}
                  <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-bold tracking-widest uppercase">{post.role}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{post.time}</div>
              </div>
              <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-xl border border-yellow-500/20">
                <Star className="w-3.5 h-3.5 fill-yellow-500" />
                <span className="text-xs font-black">{post.rating}.0</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {post.content}
            </p>

            {post.book && (
              <div className="bg-slate-800/40 rounded-2xl p-4 flex items-center gap-4 mb-8 border border-slate-700/50 hover:bg-slate-700/50 transition-all cursor-pointer group/book">
                <div className="w-12 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover/book:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                   <div className="text-xs font-bold text-white uppercase tracking-tight">{post.book}</div>
                   <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Click để xem chi tiết</div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
              <div className="flex items-center gap-10">
                 <button className="flex items-center gap-2.5 text-slate-500 hover:text-red-500 transition-colors group/btn">
                   <div className="p-2 rounded-lg bg-slate-800 group-hover/btn:bg-red-500/10 transition-colors">
                     <Heart className="w-5 h-5 group-active/btn:scale-125 transition-transform" />
                   </div>
                   <span className="text-xs font-bold">{post.likes}</span>
                 </button>
                 <button className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors group/btn">
                   <div className="p-2 rounded-lg bg-slate-800 group-hover/btn:bg-blue-500/10 transition-colors">
                     <MessageSquare className="w-5 h-5 group-active/btn:scale-125 transition-transform" />
                   </div>
                   <span className="text-xs font-bold">{post.comments}</span>
                 </button>
              </div>
              <button className="p-2 rounded-lg bg-slate-800 text-slate-500 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
