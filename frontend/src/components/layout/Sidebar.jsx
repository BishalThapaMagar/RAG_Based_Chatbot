import { useState } from "react";

import {
  PanelLeftClose,
  PanelLeftOpen,
  SquarePen,
  Search,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const recentChats = [
    "RAG architecture ideas",
    "FastAPI streaming",
    "pgvector setup",
    "React markdown renderer",
    "Chunking strategies",
  ];

  return (
    <aside
      className={`hidden border-r border-zinc-800 bg-[#171717] transition-all duration-300 md:flex md:flex-col ${
        collapsed ? "w-[78px]" : "w-[280px]"
      }`}
    >
      {/* TOP */}
      <div className="p-1.5">
        {/* LOGO + TOGGLE */}
        <div className="mb-2 flex items-center justify-between">
          {!collapsed && (
            <h1 className="px-2 text-base font-semibold tracking-tight">
              WingmanAI
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-lg p-2 transition hover:bg-zinc-800"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>
        </div>

        {/* NEW CHAT */}
        <button className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-zinc-200 transition hover:bg-zinc-800">
          <SquarePen size={17} />

          {!collapsed && <span>New Chat</span>}
        </button>

        {/* SEARCH */}
        {!collapsed && (
          <div className="relative mt-1">
            <Search
              size={16}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search chats..."
              className="w-full rounded-lg bg-[#212121] py-2 pl-8 pr-2 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:bg-zinc-800"
            />
          </div>
        )}
      </div>

      {/* RECENT CHATS */}
      <div className="flex-1 overflow-y-auto px-1 py-1">
        {!collapsed && (
          <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Recent Chats
          </p>
        )}

        <div className="space-y-0.5">
          {recentChats.map((chat, index) => (
            <button
              key={index}
              className="w-full truncate rounded-lg px-2.5 py-2 text-left text-[13px] text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              {collapsed ? "💬" : chat}
            </button>
          ))}
        </div>
      </div>

      {/* PROFILE */}
      <div className="border-t border-zinc-800 p-0">
        <button className="flex w-full items-center gap-3 rounded-lg p-2 transition hover:bg-zinc-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 text-sm font-semibold">
            B
          </div>

          {!collapsed && (
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">
                Bishal
              </span>

              <span className="text-[11px] text-zinc-400">
                Free Plan
              </span>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;