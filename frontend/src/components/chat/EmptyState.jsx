const EmptyState = () => {
  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <div className="flex max-w-xl flex-col items-center text-center">
        <h1 className="mb-3 text-3xl font-semibold text-white">
          Welcome to RAGGPT
        </h1>

        <p className="text-sm leading-relaxed text-zinc-400">
          Upload PDFs, ask questions, summarize
          documents, and chat with your knowledge
          base.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;