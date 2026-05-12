import { useState } from "react";

import {
  PanelLeftClose,
  PanelLeftOpen,
  SquarePen,
  Search,
  Trash2,
} from "lucide-react";

import useConversations from "../../features/conversations/useConversations";

const Sidebar = () => {
  const [collapsed, setCollapsed] =
    useState(false);

  const {
    conversations,
    activeConversationId,
    createNewConversation,
    setConversation,
    deleteChat,
  } = useConversations();

  return (
    <aside
      className={`hidden border-r border-zinc-800 bg-[#171717] transition-all duration-300 md:flex md:flex-col ${
        collapsed ? "w-[78px]" : "w-[280px]"
      }`}
    >
      {/* TOP */}
      <div className="p-3">
        {/* LOGO + TOGGLE */}
        <div className="mb-3 flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-base font-semibold tracking-tight">
              BLAZE
            </h1>
          )}

          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
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
        <button
          onClick={createNewConversation}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-200 transition hover:bg-zinc-800"
        >
          <SquarePen size={17} />

          {!collapsed && <span>New Chat</span>}
        </button>

        {/* SEARCH */}
        {!collapsed && (
          <div className="relative mt-2">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search chats..."
              className="w-full rounded-lg bg-[#212121] py-2.5 pl-9 pr-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 focus:bg-zinc-800"
            />
          </div>
        )}
      </div>

      {/* RECENT CHATS */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {!collapsed && (
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            Recent Chats
          </p>
        )}

        <div className="space-y-0.5">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              className={`group flex items-center justify-between rounded-lg transition ${
                activeConversationId ===
                chat.id
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-800"
              }`}
            >
              <button
                onClick={() =>
                  setConversation(chat.id)
                }
                className="flex-1 truncate px-3 py-2.5 text-left text-[13px] text-zinc-300"
              >
                {collapsed
                  ? "💬"
                  : chat.title}
              </button>

              {!collapsed && (
                <button
                  onClick={() =>
                    deleteChat(chat.id)
                  }
                  className="mr-2 opacity-0 transition group-hover:opacity-100"
                >
                  <Trash2
                    size={14}
                    className="text-zinc-500 hover:text-red-400"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PROFILE */}
      <div className="border-t border-zinc-800 p-3">
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