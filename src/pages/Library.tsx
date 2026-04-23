import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Star, Bookmark, PlayCircle, HardDrive, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

const ALL_BOOKS = [
  { id: '1', title: 'Dế Mèn phiêu lưu ký', author: 'Tô Hoài', category: 'Văn học', rating: 4.8, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop', description: 'Câu chuyện về chú dế mèn dũng cảm...' },
  { id: '2', title: 'Những tấm lòng cao cả', author: 'Edmondo De Amicis', category: 'Văn học', rating: 4.7, cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop', description: 'Cuốn nhật ký của một cậu bé người Ý...' },
  { id: '3', title: 'Tuổi thơ dữ dội', author: 'Phùng Quán', category: 'Văn học', rating: 4.6, cover: 'https://images.unsplash.com/photo-1589998059171-dd8918c81c4d?w=300&h=400&fit=crop', description: 'Về các chiến sĩ nhỏ tuổi trong kháng chiến...' },
  { id: '4', title: 'Mắt biếc', author: 'Nguyễn Nhật Ánh', category: 'Tiểu thuyết', rating: 4.9, cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop', description: 'Câu chuyện tình buồn giữa Ngạn và Hà Lan...' },
  { id: '5', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Khoa học', rating: 4.8, cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=400&fit=crop', description: 'Lược sử loài người từ thời kỳ đồ đá...' },
  { id: '6', title: 'Tâm lý học tội phạm', author: 'Diệp Hồng Vũ', category: 'Tâm lý', rating: 4.5, cover: 'https://images.unsplash.com/photo-1543004218-271d7d025178?w=300&h=400&fit=crop', description: 'Phân tích tâm lý đằng sau những vụ án...' },
];

const CATEGORIES = ['Tất cả', 'Văn học', 'Tiểu thuyết', 'Khoa học', 'Tâm lý', 'Kỹ năng'];

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'digital' | 'drive'>('digital');
  const [driveFiles, setDriveFiles] = useState<any[]>([]);
  const [isDriveConnected, setIsDriveConnected] = useState(false);
  const [isLoadingDrive, setIsLoadingDrive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkDriveStatus();
    
    const handleOAuthMessage = (event: MessageEvent) => {
      // ORIGIN VALIDATION
      const origin = event.origin;
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS' && event.data?.provider === 'google') {
        checkDriveStatus();
        fetchDriveFiles();
      }
    };

    window.addEventListener('message', handleOAuthMessage);
    return () => window.removeEventListener('message', handleOAuthMessage);
  }, []);

  useEffect(() => {
    if (activeTab === 'drive' && isDriveConnected) {
      fetchDriveFiles();
    }
  }, [activeTab, isDriveConnected]);

  const checkDriveStatus = async () => {
    try {
      const res = await fetch('/api/drive/status');
      const data = await res.json();
      setIsDriveConnected(data.connected);
    } catch (err) {
      console.error("Failed to check Drive status:", err);
    }
  };

  const fetchDriveFiles = async () => {
    setIsLoadingDrive(true);
    setError(null);
    try {
      const res = await fetch('/api/drive/files');
      if (!res.ok) {
        if (res.status === 401) {
          setIsDriveConnected(false);
          return;
        }
        throw new Error('Chưa tìm thấy file PDF. Vui lòng kiểm tra lại Google Drive của bạn.');
      }
      const data = await res.json();
      setDriveFiles(data.files || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoadingDrive(false);
    }
  };

  const handleConnectDrive = async () => {
    try {
      const res = await fetch('/api/auth/google/url');
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Không thể khởi tạo kết nối");
      }
      const { url } = await res.json();
      
      // Popup must open the OAuth provider's authorization URL directly
      window.open(url, 'google_auth', 'width=600,height=700');
    } catch (err: any) {
      console.error("Connect Drive Error:", err);
      alert(err.message || "Đã có lỗi xảy ra");
    }
  };

  const filteredBooks = ALL_BOOKS.filter(book => {
    const matchesCategory = selectedCategory === 'Tất cả' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredDriveFiles = driveFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bento-card p-8 flex flex-col justify-center min-h-[200px] bento-gradient !bg-none bg-slate-900/40">
           <h1 className="text-3xl font-extrabold text-white mb-2">Thư viện của bạn</h1>
           <p className="text-slate-400 text-sm max-w-md">Khám phá sách từ hệ thống hoặc kết nối với Google Drive để đọc file PDF cá nhân.</p>
           
           <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setActiveTab('digital')}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-widest border ${
                  activeTab === 'digital' 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                }`}
              >
                Thư viện số
              </button>
              <button 
                onClick={() => setActiveTab('drive')}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-widest border flex items-center gap-2 ${
                  activeTab === 'drive' 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-600'
                }`}
              >
                <HardDrive className="w-4 h-4" /> Google Drive
              </button>
           </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bento-card p-8 flex flex-col justify-center gap-4">
           <div className="relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
             <input 
               type="text" 
               placeholder="Tìm kiếm nhanh..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white"
             />
           </div>
           <div className="flex gap-2">
             <button className="flex-1 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-slate-400 text-xs font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest">
               <Filter className="w-4 h-4" /> Lọc
             </button>
           </div>
        </div>
      </div>

      {activeTab === 'digital' && (
        <>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-700">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-widest border ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-800/40 text-slate-400 border-slate-700/50 hover:border-blue-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {filteredBooks.map((book) => (
              <motion.div 
                layout
                key={book.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 mb-3 relative">
                   <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-2">
                     <button className="w-full bg-white text-black py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95">
                       <BookOpen className="w-3 h-3" /> Đọc ngay
                     </button>
                     <button className="w-full bg-blue-600 text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95">
                       <PlayCircle className="w-3 h-3" /> Nghe tóm tắt
                     </button>
                   </div>
                   <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-lg text-[10px] font-bold text-yellow-500 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-500" /> {book.rating}
                   </div>
                </div>
                <div className="px-1">
                  <h3 className="text-xs font-bold text-white mb-0.5 line-clamp-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{book.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-slate-500 italic line-clamp-1 flex-1 pr-2">{book.author}</p>
                    <Bookmark className="w-3.5 h-3.5 text-slate-600 cursor-pointer hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'drive' && (
        <div className="space-y-6">
          {!isDriveConnected ? (
            <div className="bento-card p-12 text-center flex flex-col items-center gap-6">
              <div className="bg-blue-600/10 p-6 rounded-full border border-blue-500/20">
                <HardDrive className="w-12 h-12 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Kết nối Google Drive</h2>
                <p className="text-slate-400 max-w-md mx-auto">Kết nối tài khoản của bạn để truy cập trực tiếp các file PDF trong thư mục cá nhân.</p>
              </div>
              <button 
                onClick={handleConnectDrive}
                className="bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs"
              >
                Kết nối ngay
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Đã kết nối Google Drive</span>
                </div>
                <button 
                  onClick={fetchDriveFiles}
                  className="text-[10px] text-blue-400 font-bold hover:underline uppercase tracking-widest"
                >
                  Làm mới danh sách
                </button>
              </div>

              {isLoadingDrive ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                  <p className="text-slate-500 text-xs uppercase tracking-widest">Đang quét file PDF...</p>
                </div>
              ) : error ? (
                <div className="bento-card p-8 border-red-500/20 flex flex-col items-center gap-4 text-center">
                  <AlertCircle className="w-10 h-10 text-red-500 opacity-50" />
                  <p className="text-sm text-slate-400">{error}</p>
                  <button onClick={fetchDriveFiles} className="text-xs text-blue-400 font-bold hover:underline">Thử lại</button>
                </div>
              ) : driveFiles.length === 0 ? (
                <div className="bento-card p-20 text-center">
                  <p className="text-slate-500 italic text-sm">Không tìm thấy file PDF nào trên Drive của bạn.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {filteredDriveFiles.map((file) => (
                    <motion.div 
                      layout
                      key={file.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="group"
                    >
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 mb-3 relative">
                        {file.thumbnailLink ? (
                          <img src={file.thumbnailLink.replace('=s220', '=s600')} alt={file.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800/40 text-slate-700 gap-2">
                             <BookOpen className="w-12 h-12 opacity-10" />
                             <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">PDF</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-2">
                          <a 
                            href={file.webContentLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full bg-white text-black py-2.5 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95 text-center"
                          >
                            <BookOpen className="w-3.5 h-3.5" /> MỞ FILE
                          </a>
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="text-xs font-bold text-white mb-0.5 line-clamp-1 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{file.name}</h3>
                        <p className="text-[10px] text-slate-500 italic line-clamp-1">{(parseInt(file.size || "0") / (1024 * 1024)).toFixed(1)} MB</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
