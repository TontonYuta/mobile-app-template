import React, { useState, useEffect } from 'react';
import { SYLLABUS } from './constants';
import { LessonContent, LoadingState } from './types';
import { generateLessonContent } from './services/geminiService';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import { Menu, Sparkles, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<string>(SYLLABUS[0].id);
  const [lessonData, setLessonData] = useState<Record<string, LessonContent>>({});
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Tự động tải chương đầu tiên khi mở app
  useEffect(() => {
    handleSelectChapter(SYLLABUS[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChapter = async (id: string) => {
    setActiveChapterId(id);
    setSidebarOpen(false);
    
    // Nếu đã có dữ liệu thì không cần tải lại
    if (lessonData[id]) {
      return;
    }

    setLoadingState(LoadingState.LOADING);
    setErrorMsg(null);

    try {
      const syllabusItem = SYLLABUS.find(s => s.id === id);
      if (!syllabusItem) throw new Error("Chapter not found");

      const content = await generateLessonContent(syllabusItem);
      
      setLessonData(prev => ({
        ...prev,
        [id]: content
      }));
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setLoadingState(LoadingState.ERROR);
      setErrorMsg("Không thể tải nội dung bài học. Vui lòng thử lại sau.");
    }
  };

  const currentContent = lessonData[activeChapterId];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          bg-white shadow-xl lg:shadow-none
        `}
      >
        <Sidebar 
          syllabus={SYLLABUS}
          activeChapterId={activeChapterId}
          onSelectChapter={handleSelectChapter}
          loadingState={loadingState}
          completedChapters={Object.keys(lessonData)}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Top Bar (Mobile Only) */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
           <div className="font-bold text-slate-800">Toán Cao Cấp - TontonYuta (AOF)</div>
           <button onClick={() => setSidebarOpen(true)} className="p-2 text-slate-600">
             <Menu className="w-6 h-6" />
           </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {loadingState === LoadingState.LOADING ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="relative w-20 h-20 mb-6">
                 <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                 <Sparkles className="absolute inset-0 m-auto text-blue-500 animate-pulse w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">Đang tải bài học...</h2>
              <p className="text-slate-500 max-w-md">
                Hệ thống đang chuẩn bị tài liệu cho chương {SYLLABUS.find(s => s.id === activeChapterId)?.chapter}.
              </p>
            </div>
          ) : loadingState === LoadingState.ERROR ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Đã có lỗi xảy ra</h3>
              <p className="text-slate-500 mb-6">{errorMsg}</p>
              <button 
                onClick={() => handleSelectChapter(activeChapterId)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                Thử lại
              </button>
            </div>
          ) : currentContent ? (
            <LessonView content={currentContent} />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Chọn một bài học để bắt đầu
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;