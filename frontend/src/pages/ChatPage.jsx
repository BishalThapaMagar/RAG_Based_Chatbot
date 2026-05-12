import Chat from "../components/chat/Chat";

const ChatPage = () => {
  return <Chat />;
};

export default ChatPage;


// const ChatPage = () => {
//   return (
//     <div className="flex h-full flex-col">
//       {/* CHAT AREA */}
//       <div className="flex-1 overflow-y-auto px-6 py-6">
//         <div className="mx-auto flex max-w-4xl flex-col gap-5">
//           {/* AI MESSAGE */}
//           <div className="flex justify-start">
//             <div className="max-w-[85%] text-sm leading-relaxed text-zinc-200">
//               Hello 👋 Upload your PDFs and ask me anything
//               about them.
//             </div>
//           </div>

//           {/* USER MESSAGE */}
//           <div className="flex justify-end">
//             <div className="max-w-[80%] rounded-2xl bg-blue-600 px-4 py-3 text-sm leading-relaxed text-white">
//               Explain transformers architecture
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* INPUT */}
//       <div className="border-t border-zinc-800 bg-[#212121] px-5 py-3">
//         <div className="mx-auto max-w-4xl">
//           <div className="flex items-end gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-3 py-2">
//             <textarea
//               rows={1}
//               placeholder="Ask anything..."
//               className="max-h-[200px] h-6 flex-1 resize-none bg-transparent text-sm leading-3 text-white outline-none placeholder:text-zinc-500"
//             />

//             <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-black"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 19V5m0 0-6 6m6-6 6 6"
//                 />
//               </svg>
//             </button>
//           </div>

//           <p className="mt-2 text-center text-[11px] text-zinc-500">
//             AI can make mistakes. Verify important
//             information.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;