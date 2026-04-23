import React from 'react';
import { Hammer, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WithComingSoon({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-[calc(100vh-8rem)]">
      {/* Locked Content */}
      <div className="pointer-events-none select-none blur-md opacity-30 h-full overflow-hidden">
        {children}
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 mt-10">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center max-w-md shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
           <div className="bg-slate-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-slate-600 relative z-10 shadow-inner">
              <Hammer className="w-10 h-10 text-slate-400" />
           </div>
           <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">Tính năng đang <br/> được phát triển</h2>
           <p className="text-sm text-slate-400 mb-8 italic leading-relaxed">
             Với nguyên mẫu (Prototype) này, chúng tôi đang tập trung nguồn lực tối đa vào trải nghiệm <strong>Thư viện</strong> và <strong>Đọc Sách</strong> cốt lõi. Tính năng này sẽ được mở khóa ở bản cập nhật sau!
           </p>
           <button onClick={() => navigate('/library')} className="bg-blue-600 text-white font-black py-4 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-95 text-xs uppercase tracking-widest w-full flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4" /> Trải nghiệm Thư viện
           </button>
        </div>
      </div>
    </div>
  );
}
