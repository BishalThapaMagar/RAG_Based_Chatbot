import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({
  content,
}) => {
  return (
    <div className="prose prose-invert max-w-none prose-p:leading-7 prose-pre:rounded-xl prose-pre:border prose-pre:border-zinc-700 prose-pre:bg-zinc-900 prose-code:text-blue-300 prose-strong:text-white prose-headings:text-white prose-li:text-zinc-200 prose-p:text-zinc-200">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;