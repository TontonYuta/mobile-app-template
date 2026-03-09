import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (userAnswers[questionIndex] !== null) return; // Prevent changing answer
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
    
    // Auto show explanation
    const newShowExp = [...showExplanation];
    newShowExp[questionIndex] = true;
    setShowExplanation(newShowExp);
  };

  return (
    <div className="space-y-8">
      {questions.map((q, qIdx) => {
        const isAnswered = userAnswers[qIdx] !== null;
        const isCorrect = userAnswers[qIdx] === q.correctAnswerIndex;
        
        return (
          <div key={qIdx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 ring-1 ring-slate-100">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm">
                {qIdx + 1}
              </span>
              <div className="flex-grow">
                <MarkdownRenderer content={q.question} className="font-medium text-slate-900 text-lg" />
              </div>
            </div>

            <div className="space-y-3 pl-0 md:pl-12">
              {q.options.map((option, oIdx) => {
                let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group relative overflow-hidden ";
                
                if (!isAnswered) {
                  optionClass += "border-slate-100 bg-slate-50/50 hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer hover:shadow-sm";
                } else {
                  if (oIdx === q.correctAnswerIndex) {
                    optionClass += "border-green-500 bg-green-50/50 text-green-900";
                  } else if (oIdx === userAnswers[qIdx]) {
                    optionClass += "border-red-500 bg-red-50/50 text-red-900";
                  } else {
                    optionClass += "border-slate-100 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(qIdx, oIdx)}
                    disabled={isAnswered}
                    className={optionClass}
                  >
                    <div className="flex items-center gap-4 w-full relative z-10">
                       <span className={`w-8 h-8 flex items-center justify-center rounded-lg border text-sm font-bold transition-colors ${
                         isAnswered && oIdx === q.correctAnswerIndex ? 'border-green-600 bg-green-600 text-white' :
                         isAnswered && oIdx === userAnswers[qIdx] ? 'border-red-600 bg-red-600 text-white' :
                         'border-slate-200 bg-white text-slate-500 group-hover:border-indigo-300 group-hover:text-indigo-600'
                       }`}>
                         {String.fromCharCode(65 + oIdx)}
                       </span>
                       <div className="flex-grow text-left">
                          <MarkdownRenderer content={option} />
                       </div>
                    </div>
                    
                    {isAnswered && oIdx === q.correctAnswerIndex && <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 relative z-10" />}
                    {isAnswered && oIdx === userAnswers[qIdx] && oIdx !== q.correctAnswerIndex && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 relative z-10" />}
                  </button>
                );
              })}
            </div>

            {showExplanation[qIdx] && (
              <div className="mt-6 md:ml-12 p-5 bg-blue-50/50 rounded-xl border border-blue-100 text-slate-700 animate-fadeIn">
                <div className="flex items-center gap-2 font-bold text-blue-900 mb-2 text-sm uppercase tracking-wide">
                  <HelpCircle className="w-4 h-4" /> Giải thích:
                </div>
                <MarkdownRenderer content={q.explanation} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;