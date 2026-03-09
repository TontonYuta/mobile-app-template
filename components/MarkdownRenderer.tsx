import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  // Pre-process content to ensure LaTeX renders correctly
  const processedContent = useMemo(() => {
    if (!content) return "";
    return content
      // Remove backslashes before dollar signs (common LLM artifact) - only if followed by a non-space char to avoid unescaping currency
      .replace(/\\\$(\S)/g, '$$$1') 
      // Replace \[ \] with $$ for block math (safe replacement using callback)
      .replace(/\\\[/g, () => '$$')
      .replace(/\\\]/g, () => '$$')
      // Replace \( \) with $ for inline math
      .replace(/\\\(/g, () => '$')
      .replace(/\\\)/g, () => '$');
  }, [content]);

  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[[rehypeKatex, { strict: false, throwOnError: false, output: 'html' }]]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-3xl font-serif font-bold mt-8 mb-4 border-b pb-2 border-slate-200" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold mt-6 mb-3" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-serif font-semibold mt-5 mb-2" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-outside ml-5 mb-4 space-y-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-5 mb-4 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 italic bg-indigo-50/50 rounded-r-lg my-6" {...props} />
          ),
          code: ({node, inline, className, children, ...props}: any) => {
             const match = /language-(\w+)/.exec(className || '');
             return !inline && match ? (
               <div className="bg-slate-800 text-slate-100 p-4 rounded-xl overflow-x-auto my-4 shadow-sm">
                 <code className={className} {...props}>{children}</code>
               </div>
             ) : (
               <code className="bg-slate-100 text-indigo-600 px-1.5 py-0.5 rounded font-mono text-sm border border-slate-200" {...props}>{children}</code>
             );
          },
          table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="min-w-full border-collapse border border-slate-200" {...props} /></div>,
          thead: ({node, ...props}) => <thead className="bg-slate-50 text-slate-900" {...props} />,
          th: ({node, ...props}) => <th className="border border-slate-200 px-4 py-2 text-left font-semibold" {...props} />,
          td: ({node, ...props}) => <td className="border border-slate-200 px-4 py-2" {...props} />,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;