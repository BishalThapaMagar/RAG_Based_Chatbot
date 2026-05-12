const TypingIndicator = () => {
  return (
    <div className="mt-4 flex justify-start">
      <div className="flex items-center gap-1 rounded-2xl bg-zinc-800 px-4 py-3">
        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />

        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.15s]" />

        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.3s]" />
      </div>
    </div>
  );
};

export default TypingIndicator;