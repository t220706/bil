import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Star, Bookmark, PlayCircle, HardDrive, AlertCircle, Loader2, X, ChevronLeft, Headphones, Share2, Heart, MessageSquare, Settings, Type } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ALL_BOOKS = [
  { 
    id: '1', 
    title: 'Nhà Giả Kim', 
    author: 'Paulo Coelho', 
    category: 'Tiểu thuyết', 
    rating: 4.8, 
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop', 
    description: 'Hành trình theo đuổi vận mệnh của cậu bé chăn cừu Santiago, một tác phẩm kinh điển về khát vọng và ước mơ.',
    content: [
      "Cậu bé tên là Santiago. Trời sẩm tối khi cậu lùa bầy cừu đến một ngôi nhà thờ cổ đã hoang phế. Nơi đó mái đã sập từ lâu và một cây dâu tằm khổng lồ mọc lên ngay chỗ trước kia là phòng thay áo lễ.",
      "Cậu quyết định ngủ qua đêm tại đây. Cậu dồn tất cả cừu qua khung cửa đổ nát rồi lấy mấy thanh gỗ chắn lại để đêm đến chúng khỏi đi lạc. Vùng này không có chó sói, nhưng đã có lần một con cừu đi lạc khiến cậu phải mất trọn sáng hôm sau tìm kiếm.",
      "Cậu trải áo khoác trên nền đất, lấy cuốn sách vừa đọc xong làm gối rồi ngả lưng. Cậu tự bảo rằng từ nay phải tìm những cuốn sách dày hơn, đọc được lâu hơn và dùng làm gối cũng êm hơn.",
      "Cậu thức giấc khi trời còn tối mịt. Nhìn lên trời cao, cậu thấy những vì sao lấp lánh qua trần nhà thờ đổ nát. 'Mình muốn ngủ thêm chút nữa', cậu thầm nghĩ. Cậu lại vừa mơ đúng giấc mơ tuần trước và lần này cũng thức giấc trước khi giấc mơ kịp kết thúc.",
      "Cậu đứng dậy cất tiếng gọi bầy cừu. Phần lớn vẫn đang ngủ say. Cậu có cảm tưởng như thể có một sợi dây liên kết vô hình kỳ diệu giữa cậu và những con vật này. 'Chúng đã quen với mình rồi nên biết cả giờ giấc của mình', cậu lẩm bẩm. Nhưng nghĩ lại một lát, cậu tự đính chính: 'Hay là mình đã quen với giờ giấc của chúng?'."
    ]
  },
  { 
    id: '2', 
    title: 'Sapiens: Lược sử loài người', 
    author: 'Yuval Noah Harari', 
    category: 'Khoa học', 
    rating: 4.9, 
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop', 
    description: 'Khám phá hành trình tiến hóa của Homo sapiens từ một loài vượn bình thường ở châu Phi trở thành thế lực thống trị hành tinh.',
    content: [
      "Khoảng 14 tỷ năm trước, vật chất, năng lượng, thời gian và không gian đã ra đời trong một sự kiện vĩ đại mà chúng ta gọi là Vụ Nổ Lớn - Big Bang. Câu chuyện về những đặc điểm cơ bản này của vũ trụ được gọi là vật lý học.",
      "Sau khi xuất hiện được khoảng 300.000 năm, vật chất và năng lượng bắt đầu liên kết thành những cấu trúc phức tạp, gọi là nguyên tử, rồi từ nguyên tử kết hợp thành phân tử. Câu chuyện về các nguyên tử, phân tử và các phản ứng của chúng được gọi là hóa học.",
      "Và rồi vào khoảng 3,8 tỷ năm trước, trên một hành tinh có tên là Trái Đất, một số phân tử nhất định đã liên kết với nhau để tạo thành những cấu trúc phức tạp và lớn lạ thường mang tên sinh vật. Câu chuyện về các sinh vật được gọi là sinh học.",
      "Chỉ đến khoảng 70.000 năm trước, các sinh vật thuộc loài Homo sapiens mới bắt đầu hình thành nên các cấu trúc thậm chí còn phức tạp hơn gọi là văn hóa. Sự phát triển tiếp theo của các trung tâm văn hóa này được gọi là lịch sử.",
      "Lịch sử của chúng ta được định hình bởi ba cuộc cách mạng lớn. Cách mạng Nhận thức khởi động lịch sử vào khoảng 70.000 năm trước. Cách mạng Nông nghiệp đẩy nhanh tiến trình ấy vào 12.000 năm trước. Và Cách mạng Khoa học, mới chỉ bắt đầu từ 500 năm trước, có lẽ sẽ kết thúc lịch sử và khởi đầu cho một thứ gì đó hoàn toàn khác."
    ]
  },
  { 
    id: '3', 
    title: 'Mắt biếc', 
    author: 'Nguyễn Nhật Ánh', 
    category: 'Văn học', 
    rating: 4.8, 
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop', 
    description: 'Câu chuyện tình đơn phương da diết và hoài niệm của Ngạn dành cho Hà Lan - cô bạn thuở ấu thơ có đôi mắt biếc.',
    content: [
      "Làng tôi tên là làng Đo Đo. Tên cái làng nghe thật hiền, như một tiếng gọi ấu thơ dội về từ một miền ký ức xa thẳm nào đó. Chợ quê tôi cũng mang cái tên ấy. Chợ Đo Đo là một cái chợ lớn, nằm ngay giữa làng.",
      "Tôi sinh ra và lớn lên ở làng Đo Đo, trải qua những năm tháng tuổi thơ êm đềm và khó quên bên cạnh Hà Lan. Hà Lan có đôi mắt đẹp tuyệt vời. Đôi mắt ấy lúc nào cũng mở to, trong veo và xao động.",
      "Nhiều năm sau này, mỗi khi nhớ lại, tôi vẫn thường tự hỏi không biết nếu hồi đó con mắt của Hà Lan không đẹp đến thế, tôi có yêu thương nó nhiều đến vậy không? Có những điều chỉ khi trưởng thành người ta mới hiểu được, nhưng đôi khi sự hiểu ra lại đem về quá nhiều nước mắt.",
      "Những buổi chiều hoàng hôn nhuộm tím những đồi sim, tôi hay chở Hà Lan trên chiếc xe đạp cũ cọc cạch. Chiếc xe đạp lăn bánh chậm rãi qua những con đường đất đỏ, để lại sau lưng những kỷ niệm sẽ mãi mãi không bao giờ nhạt phai.",
      "Tình yêu đầu đời của tôi cất lên như tiếng lá đàn bầu rung rinh trong gió. Nó không vội vã, không ồn ào, chỉ lặng lẽ và tha thiết đến tận cùng."
    ]
  },
  { 
    id: '4', 
    title: 'Dế Mèn phiêu lưu ký', 
    author: 'Tô Hoài', 
    category: 'Văn học', 
    rating: 4.7, 
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop', 
    description: 'Bản anh hùng ca về tuổi trẻ, tình bạn và khát khao đi xa của Dế Mèn, mở ra một thế giới đồng thoại kỳ thú.',
    content: [
      "Tôi sống độc lập từ thuở bé. Ấy là tục lệ lâu đời trong họ dế chúng tôi. Vả lại, mẹ tôi cũng phải đóng chắt mới nuôi nổi ba anh em tôi. Vừa lớn lên, người mẹ nào cũng sợ con mình ỷ lại mà hèn đi, thế là cứ tách bầy dần.",
      "Bởi tôi ăn uống điều độ và làm việc có chừng mực nên tôi chóng lớn lắm. Chẳng bao lâu, tôi đã trở thành một chàng dế thanh niên cường tráng. Đôi càng tôi mẫm bóng. Những cái vuốt ở chân, ở khoeo cứ cứng dần và nhọn hoắt.",
      "Thỉnh thoảng, muốn thử sự lợi hại của những chiếc vuốt, tôi co cẳng lên, đạp phanh phách vào các ngọn cỏ. Những ngọn cỏ gẫy rạp, y như có nhát dao vừa lia qua. Màu nâu bóng mỡ soi gương được và rất ưa nhìn.",
      "Hai cái răng đen nhánh lúc nào cũng nhai ngoàm ngoạp như hai lưỡi liềm máy làm việc. Sợi râu tôi dài và uốn cong một vẻ rất đỗi hùng dũng. Tôi lấy làm hãnh diện với bà con về cặp râu ấy lắm.",
      "Nhưng hỡi ôi, sắc đẹp thể chất chưa chắc đã tỷ lệ thuận với đức độ tinh thần. Lúc ấy, tôi kiêu căng và xốc nổi lắm. Cái bệnh kiêu hãnh của tuổi trẻ đã khiến tôi gây ra không biết bao nhiêu lầm lỗi và phải trả giá bằng cả mồ hôi và nước mắt trong suốt cuộc hành trình dài đằng đẵng phía sau này..."
    ]
  }
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
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Reading Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [readTheme, setReadTheme] = useState<'dark' | 'light' | 'sepia'>('dark');
  const [fontSize, setFontSize] = useState<number>(18);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const totalHeight = element.scrollHeight - element.clientHeight;
    // Calculate progress as a percentage
    const progress = (element.scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
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
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto min-h-screen relative">
      <AnimatePresence>
        {isReading && selectedBook && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] flex flex-col transition-colors duration-500 ${
               readTheme === 'light' ? 'bg-[#f8f9fa]' : 
               readTheme === 'sepia' ? 'bg-[#f4ecd8]' : 
               'bg-slate-900'
            }`}
          >
            {/* Reading Progress Bar */}
            <div className="h-1 w-full bg-black/10 absolute top-0 left-0 z-50">
               <div className="h-full bg-blue-500 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>
            </div>

            <div className={`border-b px-8 py-4 flex items-center justify-between shadow-sm relative z-40 transition-colors duration-500 ${
               readTheme === 'light' ? 'bg-white border-slate-200' : 
               readTheme === 'sepia' ? 'bg-[#eaddc5] border-[#d4c5ab]' : 
               'bg-slate-900 border-slate-800'
            }`}>
              <div className="flex items-center gap-4">
                <button onClick={() => setIsReading(false)} className={`p-2 rounded-xl transition-colors ${readTheme === 'light' ? 'hover:bg-slate-100' : readTheme === 'sepia' ? 'hover:bg-[#d4c5ab]' : 'hover:bg-slate-800'}`}>
                  <ChevronLeft className={`w-5 h-5 ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-600' : 'text-slate-400'}`} />
                </button>
                <div>
                   <h2 className={`text-sm font-bold uppercase tracking-tight italic ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-800' : 'text-white'}`}>{selectedBook.title}</h2>
                   <p className={`text-[10px] italic uppercase ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-500' : 'text-slate-500'}`}>{selectedBook.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 relative">
                <button onClick={() => setShowSettings(!showSettings)} className={`p-2 rounded-xl transition-all ${showSettings ? 'bg-blue-500/10 text-blue-500' : readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-600 hover:bg-black/5' : 'text-slate-400 hover:bg-white/5'}`}>
                  <Settings className="w-5 h-5" />
                </button>
                <button onClick={() => setIsReading(false)} className="p-2 hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-xl transition-all">
                  <X className="w-5 h-5" />
                </button>

                {/* Settings Panel */}
                <AnimatePresence>
                   {showSettings && (
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: 10 }}
                       className={`absolute top-full right-12 mt-4 p-6 rounded-2xl shadow-2xl border w-72 flex flex-col gap-6 ${readTheme === 'light' ? 'bg-white border-slate-200' : readTheme === 'sepia' ? 'bg-[#f4ecd8] border-[#d4c5ab]' : 'bg-slate-800 border-slate-700'}`}
                     >
                        <div>
                           <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-500' : 'text-slate-400'}`}>Cỡ chữ</div>
                           <div className="flex items-center gap-4">
                              <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className={`p-2 rounded-lg flex-1 font-bold ${readTheme === 'light' ? 'bg-slate-100 text-slate-800' : readTheme === 'sepia' ? 'bg-[#eaddc5] text-slate-800' : 'bg-slate-700 text-white'}`}><Type className="w-4 h-4 mx-auto" /></button>
                              <span className={`font-bold tabular-nums ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-800' : 'text-white'}`}>{fontSize}</span>
                              <button onClick={() => setFontSize(Math.min(32, fontSize + 2))} className={`p-2 rounded-lg flex-1 font-bold ${readTheme === 'light' ? 'bg-slate-100 text-slate-800' : readTheme === 'sepia' ? 'bg-[#eaddc5] text-slate-800' : 'bg-slate-700 text-white'}`}><Type className="w-5 h-5 mx-auto" /></button>
                           </div>
                        </div>
                        <div>
                           <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-500' : 'text-slate-400'}`}>Chế độ nền</div>
                           <div className="grid grid-cols-3 gap-2">
                              <button onClick={() => setReadTheme('light')} className={`h-12 rounded-xl bg-white border-2 flex items-center justify-center text-xs font-bold text-slate-800 ${readTheme === 'light' ? 'border-blue-500' : 'border-slate-200'}`}>Sáng</button>
                              <button onClick={() => setReadTheme('sepia')} className={`h-12 rounded-xl bg-[#f4ecd8] border-2 flex items-center justify-center text-xs font-bold text-[#5b4636] ${readTheme === 'sepia' ? 'border-blue-500' : 'border-[#d4c5ab]'}`}>Sepia</button>
                              <button onClick={() => setReadTheme('dark')} className={`h-12 rounded-xl bg-slate-900 border-2 flex items-center justify-center text-xs font-bold text-white ${readTheme === 'dark' ? 'border-blue-500' : 'border-slate-700'}`}>Tối</button>
                           </div>
                        </div>
                     </motion.div>
                   )}
                </AnimatePresence>
              </div>
            </div>
            <div 
               onScroll={handleScroll}
               className="flex-1 overflow-y-auto p-12 max-w-4xl mx-auto w-full space-y-10 scroll-smooth"
            >
               <div className="aspect-[3/4] w-48 mx-auto rounded-2xl overflow-hidden shadow-2xl mt-10">
                  <img src={selectedBook.cover} alt="cover" className="w-full h-full object-cover" />
               </div>
               <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-32">
                  <h1 className={`text-4xl lg:text-5xl font-black italic tracking-tighter text-center uppercase drop-shadow-sm ${readTheme === 'light' || readTheme === 'sepia' ? 'text-slate-900' : 'text-white'}`}>{selectedBook.title}</h1>
                  <div className="max-w-none mx-auto w-full transition-all duration-300" style={{ fontSize: `${fontSize}px` }}>
                     {selectedBook.content ? (
                        selectedBook.content.map((paragraph: string, index: number) => (
                          <p key={index} className={`leading-[1.8] font-medium opacity-90 transition-colors duration-500 ${readTheme === 'light' ? 'text-slate-800' : readTheme === 'sepia' ? 'text-[#5b4636]' : 'text-slate-300'} ${index === 0 ? 'first-letter:text-[3em] first-letter:font-black first-letter:pr-2 first-letter:float-left first-letter:text-blue-500 first-line:uppercase first-line:tracking-widest' : 'mt-8'}`}>
                            {paragraph}
                          </p>
                        ))
                     ) : (
                        <p className={`leading-[1.8] italic opacity-80 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-blue-500 ${readTheme === 'light' ? 'text-slate-800' : readTheme === 'sepia' ? 'text-[#5b4636]' : 'text-slate-300'}`}>
                           {selectedBook.description} Đây là nội dung giả lập để demo tính năng đọc sách. Trong phiên bản chính thức, nội dung đầy đủ sẽ được tải.
                        </p>
                     )}
                  </div>
               </div>
            </div>
            <div className={`border-t px-8 py-4 flex items-center justify-center gap-12 transition-colors duration-500 ${
               readTheme === 'light' ? 'bg-white border-slate-200' : 
               readTheme === 'sepia' ? 'bg-[#eaddc5] border-[#d4c5ab]' : 
               'bg-slate-900 border-slate-800'
            }`}>
               <div className="flex items-center gap-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <button className={`transition-colors ${readTheme === 'light' || readTheme === 'sepia' ? 'hover:text-slate-900' : 'hover:text-white'}`}>Chương trước</button>
                  <span className="text-blue-500">Trang 1 / 240</span>
                  <button className={`transition-colors ${readTheme === 'light' || readTheme === 'sepia' ? 'hover:text-slate-900' : 'hover:text-white'}`}>Chương sau</button>
               </div>
            </div>
          </motion.div>
        )}

        {selectedBook && !isReading && (
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedBook(null)}
               className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative bento-card max-w-4xl w-full bg-slate-900 border-slate-700/50 flex flex-col md:flex-row overflow-hidden shadow-2xl"
            >
               <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-auto bg-slate-800">
                  <img src={selectedBook.cover} alt="cover" className="w-full h-full object-cover" />
               </div>
               <div className="w-full md:w-2/3 p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                       <span className="bg-blue-600/10 text-blue-400 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest border border-blue-500/20">{selectedBook.category}</span>
                       <button onClick={() => setSelectedBook(null)} className="text-slate-500 hover:text-white transition-colors">
                          <X className="w-6 h-6" />
                       </button>
                    </div>
                    <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">{selectedBook.title}</h2>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6 italic">{selectedBook.author}</p>
                    
                    <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                       <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs font-black text-white italic">{selectedBook.rating} / 5</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-black text-white italic">45 Đánh giá</span>
                       </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed italic mb-10 line-clamp-4">
                       {selectedBook.description}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setIsReading(true)}
                      className="flex-1 bg-white text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                    >
                       <BookOpen className="w-4 h-4" /> Đọc ngay
                    </button>
                    <button className="flex-1 bg-slate-800 border border-slate-700 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
                       <PlayCircle className="w-4 h-4" /> Nghe tóm tắt
                    </button>
                    <button className="p-4 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-pink-600/10 group transition-all">
                       <Heart className="w-4 h-4 text-slate-500 group-hover:text-pink-500 transition-colors" />
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
           <button 
             onClick={() => window.location.hash = 'coming-soon'} 
             className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/50 rounded-2xl text-white text-xs font-black transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
             Tải sách lên
           </button>
           <div className="relative mt-2">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
             <input 
               type="text" 
               placeholder="Tìm kiếm nhanh..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white"
             />
           </div>
        </div>
      </div>

      <AnimatePresence>
        {window.location.hash === '#coming-soon' && (
           <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => window.history.back()}
                 className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
                 className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center max-w-md shadow-2xl overflow-hidden"
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                 <button onClick={() => window.history.back()} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                 </button>
                 <div className="bg-slate-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-slate-600 shadow-inner mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                 </div>
                 <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">Tính năng đang <br/> được phát triển</h2>
                 <p className="text-sm text-slate-400 mb-8 italic leading-relaxed">
                   Chức năng Upload định dạng ePUB/PDF đang được chúng tôi tối ưu thuật toán AI trích xuất nội dung. Sẽ sớm ra mắt trong bản cập nhật tới!
                 </p>
              </motion.div>
           </div>
        )}
      </AnimatePresence>

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
                className="group cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 mb-3 relative">
                   <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 gap-2">
                     <button 
                       onClick={(e) => { e.stopPropagation(); setSelectedBook(book); setIsReading(true); }}
                       className="w-full bg-white text-black py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
                     >
                       <BookOpen className="w-3 h-3" /> Đọc ngay
                     </button>
                     <button 
                       onClick={(e) => { e.stopPropagation(); setSelectedBook(book); setIsListening(true); }}
                       className="w-full bg-blue-600 text-white py-2 rounded-xl text-[10px] font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
                     >
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
