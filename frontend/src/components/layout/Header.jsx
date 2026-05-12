import { Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-[60px] items-center justify-between border-b border-zinc-800 bg-[#212121] px-6">
      {/* LEFT */}
      <div>
        {/* <h3 className="text-lg font-semibold">
          AI Assistant
        </h3> */}

        <p className="text-sm text-zinc-400">
          Here to help you, Bishal!
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 transition hover:bg-zinc-800">
          <Bell size={18} />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-zinc-800">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;