import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Trophy, Star, MessageSquare, Play, FileText, ChevronRight, BookOpen, Quote, Sparkles, Loader2, Award, Flame } from 'lucide-react';
import { useUser } from '../store/useUser';
import { getBookRecommendations } from '../services/geminiService';

const AIRecommendation = () => {
  const [interest, setInterest] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [recommendations, setRecommendations] = React.useState<any[] | null>(null);

  const handleAskAI = async () => {
    if (!interest) return;
    setLoading(true);
    const res = await getBookRecommendations(interest);
    setRecommendations(res);
    setLoading(false);
  };

  return (
    <div className="bento-card p-6 h-full flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
        <Sparkles className="w-4 h-4" />
        AI Tư vấn sách
      </div>
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Bạn đang quan tâm điều gì?"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <button 
             onClick={handleAskAI}
             disabled={loading}
             className="absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-3 rounded-lg text-[10px] font-bold hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center min-w-[60px]"
          >
            {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Hỏi AI'}
          </button>
        </div>

        {recommendations && Array.isArray(recommendations) && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {recommendations.map((rec, i) => (
              <div key={i} className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                <div className="text-[10px] font-bold text-blue-400 mb-1">{rec.author}</div>
                <div className="text-xs font-bold text-white line-clamp-1">{rec.title}</div>
                <div className="text-[9px] text-slate-400 mt-1 line-clamp-2 italic">"{rec.reason}"</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const FEATURED_BOOKS = [
  { id: '1', title: 'Nhà Giả Kim', author: 'Paulo Coelho', category: 'Tiểu thuyết', rating: 4.8, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop' },
  { id: '2', title: 'Sapiens: Lược sử', author: 'Yuval Noah Harari', category: 'Khoa học', rating: 4.9, cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop' },
  { id: '3', title: 'Mắt biếc', author: 'Nguyễn Nhật Ánh', category: 'Văn học', rating: 4.8, cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop' },
  { id: '4', title: 'Dế Mèn phiêu lưu', author: 'Tô Hoài', category: 'Văn học', rating: 4.7, cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop' },
];

const TOP_READERS = [
  { name: 'Minh Khoa', xp: 1200, avatar: 'https://i.pravatar.cc/100?u=1' },
  { name: 'Lan Anh', xp: 980, avatar: 'https://i.pravatar.cc/100?u=2' },
  { name: 'Gia Huy', xp: 870, avatar: 'https://i.pravatar.cc/100?u=3' },
];

export default function Home() {
  const { xp, level, badges, booksRead, reviewsWritten, addXp } = useUser();
  const navigate = useNavigate();

  return (
    <div className="p-6 grid grid-cols-12 auto-rows-min gap-6 max-w-[1600px] mx-auto">
      {level === 0 && xp === 0 && (
        <section className="col-span-12 bento-gradient rounded-[2.5rem] p-8 border border-blue-500/30 flex items-center justify-between">
           <div>
              <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">Chào mừng Tân đạo sứ! 🌟</h2>
              <p className="text-sm text-slate-300">Hoàn thành nhiệm vụ đầu tiên: Đọc cuốn sách ưa thích của bạn để nhận 100 XP và đạt Cấp độ 1.</p>
           </div>
           <button onClick={() => { addXp(1000); navigate('/library'); }} className="bg-white text-black font-black py-4 px-8 rounded-2xl hover:scale-105 transition-all shadow-xl active:scale-95 text-[10px] uppercase tracking-widest flex items-center gap-2">
             <Trophy className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Bắt đầu ngay
           </button>
        </section>
      )}

      {/* Hero Banner */}
      <section className="col-span-12 lg:col-span-7 min-h-[400px] bento-gradient rounded-[2.5rem] p-8 border border-blue-500/30 relative overflow-hidden flex flex-col justify-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Sách Hay Mỗi Ngày</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 leading-tight text-white mb-4 italic uppercase tracking-tighter">NHÀ GIẢ KIM <br /><span className="text-blue-500 not-italic">PAULO COELHO</span></h1>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-sm italic">Hành trình theo đuổi vận mệnh của cậu bé chăn cừu Santiago sẽ truyền cảm hứng mạnh mẽ cho khát vọng của bạn.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/library" className="bg-white text-black font-black py-4 px-10 rounded-2xl hover:scale-105 transition-all shadow-xl active:scale-95 text-[10px] uppercase tracking-widest">
                Đọc ngay
              </Link>
              <Link to="/multimedia" className="bg-slate-800/80 backdrop-blur-md text-white font-black py-4 px-10 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-3 text-[10px] uppercase tracking-widest">
                <Play className="w-4 h-4 fill-white" /> Nghe Podcast
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute right-[-20px] top-[-20px] w-64 h-80 bg-blue-500/10 blur-[80px] rounded-full"></div>
        <div className="absolute right-12 bottom-0 w-48 h-64 bg-slate-800 rounded-3xl shadow-2xl rotate-6 border-4 border-slate-700 overflow-hidden hidden md:block">
          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop" className="w-full h-full object-cover" alt="Book" />
        </div>
      </section>

      {/* User Status Card */}
      <section className="col-span-12 lg:col-span-5 bento-card p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Cấp độ {level}</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Cần {1000 - xp % 1000} XP để lên cấp</p>
          </div>
          <div className="bg-yellow-500/20 text-yellow-500 p-3 rounded-2xl border border-yellow-500/30 shadow-inner">
            <Trophy className="w-6 h-6 fill-yellow-500" />
          </div>
        </div>
        
        <div className="mt-8">
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(xp % 1000) / 10}%` }}
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="bg-slate-800/30 p-4 rounded-2xl text-center border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
            <div className="text-[10px] text-slate-500 mb-1 uppercase font-bold">Chuỗi</div>
            <div className="text-lg font-bold text-white">{level === 0 ? 0 : 15} Ngày</div>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl text-center border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
            <div className="text-[10px] text-slate-500 mb-1 uppercase font-bold">Sách đọc</div>
            <div className="text-lg font-bold text-blue-400">{booksRead}</div>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl text-center border border-slate-700/50 hover:bg-slate-700/50 transition-colors">
            <div className="text-[10px] text-slate-500 mb-1 uppercase font-bold">Huy hiệu</div>
            <div className="text-lg font-bold text-white">{badges.length}</div>
          </div>
        </div>
      </section>

      {/* Sách Hôm Nay Grid */}
      <section className="col-span-12 bento-card p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-blue-500 w-5 h-5" />
            Đọc tiếp hôm nay
          </h2>
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest cursor-pointer hover:underline">Thư viện của bạn</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {FEATURED_BOOKS.map((book) => (
            <div 
              key={book.id} 
              className="group cursor-pointer"
              onClick={() => navigate('/library')}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 mb-3 relative">
                 <img src={book.cover} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={book.title} />
                 <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-lg text-[10px] font-bold text-yellow-500 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500" /> {book.rating}
                 </div>
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full scale-0 group-hover:scale-100 transition-transform">
                       <BookOpen className="w-4 h-4 text-black" />
                    </div>
                 </div>
              </div>
              <h4 className="text-xs font-black text-white italic uppercase tracking-tighter line-clamp-1 group-hover:text-blue-400 transition-colors">{book.title}</h4>
              <p className="text-[10px] text-slate-500 mt-0.5 font-bold uppercase tracking-widest">{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Advice */}
      <section className="col-span-12 lg:col-span-4 min-h-[200px]">
        <AIRecommendation />
      </section>

      {/* Leaderboard & Arena */}
      <section className="col-span-12 lg:col-span-8 bento-card p-8 relative overflow-hidden">
        {level === 0 && (
          <div className="absolute inset-0 z-20 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center border border-slate-700/50 rounded-[2.5rem]">
             <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 text-center max-w-sm shadow-2xl">
                <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-600">
                   <Trophy className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-black text-white italic uppercase tracking-tighter mb-2">Đấu trường đang rèn luyện</h3>
                <p className="text-xs text-slate-400 mb-6 italic">Tính năng cạnh tranh và Bảng xếp hạng sẽ mở khóa khi bạn đạt <strong>Cấp độ 1</strong>. Hãy đọc sách để tích lũy XP!</p>
                <button onClick={() => navigate('/library')} className="bg-blue-600 text-white font-black py-3 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-[10px] uppercase tracking-widest w-full">
                   Đến thư viện ngay
                </button>
             </div>
          </div>
        )}
        <div className={`transition-opacity duration-300 ${level === 0 ? 'opacity-30 pointer-events-none blur-sm' : ''}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-orange-500">🔥</span> Đấu trường Tri thức
            </h3>
            <button className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:underline">Bảng xếp hạng</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
               {TOP_READERS.map((reader, i) => (
                  <div key={i} className={`flex items-center gap-4 p-3 rounded-2xl border transition-all ${
                    i === 0 ? 'bg-blue-600/10 border-blue-500/20' : 'bg-slate-800/40 border-slate-700/50 opacity-70'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {i + 1}
                    </div>
                    <img src={reader.avatar} className="w-10 h-10 rounded-full border border-slate-700" alt={reader.name} />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">{reader.name}</div>
                      <div className="text-[11px] font-mono text-blue-400">{reader.xp} XP</div>
                    </div>
                  </div>
               ))}
            </div>
            <div className="flex flex-col justify-between">
               <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Hoạt động mới nhất</h4>
                  <div className="space-y-4">
                     <div className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <p className="text-[11px] text-white"><strong>Lan Anh</strong> vừa review "Nhà giả kim"</p>
                     </div>
                     <div className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <p className="text-[11px] text-white">Bạn vừa nhận huy hiệu mới!</p>
                     </div>
                  </div>
               </div>
               <button className="w-full mt-4 py-3 bg-blue-600 text-white text-xs font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                 Tham gia ngay
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
