"use client";

import { useWindowStore, type AppId } from "@/lib/store";
import { X, Minus, Square } from "lucide-react";
import { useEffect, useState } from "react";

interface WindowProps {
  id: AppId;
  title: string;
  children: React.ReactNode;
  width?: number;
  height?: number;
  darkTitlebar?: boolean;
}

export default function Window({ id, title, children, width = 900, height = 560, darkTitlebar = false }: WindowProps) {
  const { closeApp, focusApp, zOrder } = useWindowStore();
  const zIndex = 20 + zOrder.indexOf(id);
  const [isMobile, setIsMobile] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const style: React.CSSProperties = isMaximized
    ? { top: 32, left: 64, right: 0, bottom: 0, zIndex }
    : isMobile
    ? { top: 40, left: 8, right: 8, bottom: 8, zIndex }
    : {
        width,
        height,
        top: "50%",
        left: "calc(50% + 32px)",
        transform: "translate(-50%, -50%)",
        zIndex,
      };

  return (
    <div
      onMouseDown={() => focusApp(id)}
      style={style}
      className="absolute window-open rounded-xl overflow-hidden shadow-2xl flex flex-col bg-white transition-all duration-200"
    >
      {/* Titlebar */}
      <div
        className={`h-10 flex items-center justify-between px-3 shrink-0 ${
          darkTitlebar ? "bg-[#303030] text-white" : "bg-[#EBEBEB] text-[#333]"
        } border-b ${darkTitlebar ? "border-black/30" : "border-[#D4D0CD]"}`}
      >
        <div className="w-20" />
        <div
          className="text-sm font-medium truncate cursor-pointer select-none"
          onDoubleClick={() => setIsMaximized((v) => !v)}
        >
          {title}
        </div>
        <div className="flex items-center gap-2">
          <button
            title="Minimize"
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              darkTitlebar ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
            }`}
          >
            <Minus size={12} />
          </button>
          <button
            title="Maximize"
            onClick={() => setIsMaximized((v) => !v)}
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              darkTitlebar ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
            }`}
          >
            <Square size={10} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeApp(id);
            }}
            title="Close"
            className="w-6 h-6 rounded-full flex items-center justify-center bg-[#E95420] hover:bg-[#C7411B] text-white"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}