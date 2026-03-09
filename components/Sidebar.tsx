import React from 'react';
import { SyllabusItem, LoadingState } from '../types';
import { Book, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react';

interface SidebarProps {
  syllabus: SyllabusItem[];
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
  loadingState: LoadingState;
  completedChapters: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  syllabus, 
  activeChapterId, 
  onSelectChapter, 
  loadingState,
  completedChapters 
}) => {
  return (
    <div className="h-full flex flex-col bg-white border-r border-slate-200 font-sans">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-200">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-slate-900 leading-tight text-lg">Toán Cao Cấp - TontonYuta</h1>
            <p className="text-xs text-indigo-600 font-semibold mt-0.5 tracking-wide uppercase">Học viện Tài chính (AOF)</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
        <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          Nội dung học tập
        </div>
        {syllabus.map((item) => {
          const isActive = activeChapterId === item.id;
          const isCompleted = completedChapters.includes(item.id);
          const isLoading = isActive && loadingState === LoadingState.LOADING;

          return (
            <button
              key={item.id}
              onClick={() => onSelectChapter(item.id)}
              disabled={loadingState === LoadingState.LOADING && !isActive}
              className={`w-full text-left p-3.5 rounded-xl transition-all border group relative
                ${isActive 
                  ? 'bg-indigo-50 border-indigo-100 shadow-sm z-10' 
                  : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100'
                }
              `}
            >
              <div className="flex items-start gap-3.5">
                <div className="flex-shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : isActive ? (
                    isLoading ? (
                      <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-[5px] border-indigo-600 bg-white" />
                    )
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200 text-[10px] flex items-center justify-center font-bold text-slate-400 group-hover:border-slate-300 group-hover:text-slate-500">
                      {item.chapter}
                    </div>
                  )}
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className={`text-sm font-bold mb-0.5 truncate ${isActive ? 'text-indigo-900' : 'text-slate-700'}`}>
                    Chương {item.chapter}
                  </div>
                  <div className={`text-xs leading-relaxed line-clamp-2 ${isActive ? 'text-indigo-700 font-medium' : 'text-slate-500'}`}>
                    {item.title}
                  </div>
                </div>
                
                {isActive && (
                  <ChevronRight className="w-4 h-4 text-indigo-400 self-center" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-xs text-center text-slate-400 font-medium">
        © 2024 AI Tutor System
      </div>
    </div>
  );
};

export default Sidebar;