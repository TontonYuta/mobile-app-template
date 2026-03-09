import React, { useState } from 'react';
import { LessonContent } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import Quiz from './Quiz';
import { BookOpen, Target, Lightbulb, PenTool, BrainCircuit, ChevronDown, GraduationCap } from 'lucide-react';

interface LessonViewProps {
  content: LessonContent;
}

const LessonView: React.FC<LessonViewProps> = ({ content }) => {
  const [expandedEssay, setExpandedEssay] = useState<number | null>(null);

  const toggleEssay = (idx: number) => {
    setExpandedEssay(expandedEssay === idx ? null : idx);
  };

  return (
    <div className="max-w-5xl mx-auto pb-24">
      {/* Hero Header */}
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative px-8 py-12 md:px-12 md:py-16">
          <div className="flex items-center gap-3 text-indigo-200 font-bold mb-4 uppercase tracking-wider text-xs md:text-sm">
            <GraduationCap className="w-5 h-5" />
            <span>Toán Cao Cấp - TontonYuta</span>
          </div>
          
          {/* Title - Using MarkdownRenderer to support math symbols */}
          <div className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-white [&_p]:inline [&_p]:mb-0">
            <MarkdownRenderer content={content.title} />
          </div>
          
          {/* Objectives Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-indigo-200 font-bold mb-4">
              <Target className="w-5 h-5" />
              <h3 className="uppercase tracking-wide text-xs">Mục tiêu bài học</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {content.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5"></span>
                  <div className="text-indigo-50 leading-relaxed font-light flex-1">
                    <MarkdownRenderer content={obj} className="[&_p]:mb-0" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Theory Section */}
      <section className="mb-14 scroll-mt-20" id="theory">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-xl text-indigo-700">
             <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">1. Lý thuyết</h2>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 ring-1 ring-slate-100 text-slate-700">
          <MarkdownRenderer content={content.theory} />
        </div>
      </section>

      {/* Examples Section */}
      <section className="mb-14 scroll-mt-20" id="examples">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-teal-100 rounded-xl text-teal-700">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">2. Ví dụ minh họa</h2>
        </div>
        <div className="grid gap-8">
          {content.examples.map((ex, idx) => (
            <div key={idx} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
              <div className="p-6 md:p-8">
                <div className="mb-2 text-teal-600 font-bold text-sm tracking-wider uppercase">Ví dụ {idx + 1}</div>
                <div className="font-medium text-slate-900 text-lg mb-6">
                   <MarkdownRenderer content={ex.problem} />
                </div>
                
                <div className="relative bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Lời giải
                  </div>
                  <MarkdownRenderer content={ex.solution} className="text-slate-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="mb-14 scroll-mt-20" id="quiz">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 rounded-xl text-amber-700">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">3. Trắc nghiệm tự luyện</h2>
        </div>
        <Quiz questions={content.quiz} />
      </section>

      {/* Essay Section */}
      <section className="mb-14 scroll-mt-20" id="essay">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-rose-100 rounded-xl text-rose-700">
             <PenTool className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">4. Bài tập tự luận</h2>
        </div>
        <div className="space-y-6">
          {content.essay.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm text-slate-700">
              <div className="p-6 md:p-8">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">Bài tập {idx + 1}</span>
                 </div>
                 <div className="text-lg">
                    <MarkdownRenderer content={item.question} />
                 </div>
              </div>
              <div className="bg-slate-50 border-t border-slate-100">
                <button 
                  onClick={() => toggleEssay(idx)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-100 transition-colors text-slate-600 font-medium group"
                >
                  <span className="group-hover:text-indigo-600 transition-colors">
                    {expandedEssay === idx ? 'Ẩn hướng dẫn giải' : 'Xem hướng dẫn giải chi tiết'}
                  </span>
                  <div className={`p-1 rounded-full bg-white border border-slate-200 shadow-sm transition-transform duration-300 ${expandedEssay === idx ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </div>
                </button>
                {expandedEssay === idx && (
                   <div className="px-6 py-8 md:px-8 border-t border-slate-200 bg-white animate-fadeIn">
                      <MarkdownRenderer content={item.answer} />
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mt-20">
        <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 transform translate-x-10 -translate-y-10">
            <BrainCircuit className="w-64 h-64" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
               <Lightbulb className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4 text-white font-serif tracking-wide">GHI NHỚ NHANH</h3>
              <div className="text-lg text-slate-300 font-light">
                 <MarkdownRenderer content={content.keyTakeaways} className="leading-relaxed" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonView;