"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
}

// Initial AI messages
const INITIAL_MESSAGES: Message[] = [
  { id: 0, type: "ai", text: "👋 Hi! I’m Brilligo AI. How can I help you today?" },
  { id: 1, type: "ai", text: "You can ask about learning paths, career guidance, finance tips, productivity." },
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize from localStorage if available
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("brilligo_ai_messages");
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    }
    return INITIAL_MESSAGES;
  });
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // Save messages & scroll to bottom
  useEffect(() => {
    localStorage.setItem("brilligo_ai_messages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), type: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: "ai",
        text: "💡 Thanks for your message! I’m here to guide you. (Simulated AI response)",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleClearChat = () => {
    if (confirm("Are you sure you want to clear the chat?")) {
      setMessages(INITIAL_MESSAGES); // Reset to initial messages
      localStorage.removeItem("brilligo_ai_messages");
    }
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-linear-to-r from-indigo-600 to-blue-600 shadow-2xl flex items-center justify-center text-white font-bold"
        aria-label="Open Brilligo AI"
      >
        AI
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        key="ai-assistant"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className={`fixed z-50 flex flex-col overflow-hidden
          ${isMaximized ? "inset-4 rounded-2xl" : "bottom-6 right-6 w-90 h-115 rounded-2xl"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl z-10">
          <span className="font-semibold">Brilligo AI</span>
          <div className="flex items-center gap-3 text-sm">
            <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white/80">
              {isMaximized ? "🗗" : "🗖"}
            </button>
            <Link href="/ai" className="hover:text-white/80">↗</Link>
            <button onClick={handleClearChat} className="hover:text-white/80" title="Clear Chat">
              🗑
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsMaximized(false);
              }}
              className="hover:text-white/80"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 space-y-3 text-sm bg-slate-50 text-slate-800 overflow-y-auto relative flex flex-col"
        >
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.type === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`p-3 rounded-xl border shadow-sm max-w-[80%] ${
                msg.type === "user" ? "bg-blue-600 text-white self-end" : "bg-white text-slate-800 self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              className="p-3 rounded-xl border shadow-sm max-w-[40%] bg-blue-50 text-slate-700 self-start flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.8 }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-400" />
              Typing...
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 border-t bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 text-sm border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
