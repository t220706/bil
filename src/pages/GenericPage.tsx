import React from 'react';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="bg-blue-50 p-6 rounded-full mb-6">
        <h2 className="text-4xl font-black text-blue-600 opacity-20 uppercase tracking-widest">{title}</h2>
      </div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Tính năng đang phát triển</h1>
      <p className="text-slate-500 max-w-md">Chúng mình đang nỗ lực hoàn thiện "{title}" để mang lại trải nghiệm tốt nhất cho các bạn độc giả.</p>
    </div>
  );
}
