const TypingIndicator = () => {
  return (
    <div className="mt-3 flex justify-start">
      <div className="flex items-center gap-1 px-1 py-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />

        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0.15s]" />

        <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:0.3s]" />
      </div>
    </div>
  );
};

export default TypingIndicator;