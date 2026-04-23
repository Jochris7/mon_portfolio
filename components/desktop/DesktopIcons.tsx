"use client";

import { useWindowStore } from "@/lib/store";
import { Folder, Trash2 } from "lucide-react";

export default function DesktopIcons() {
  const { openApp } = useWindowStore();

  return (
    <div className="absolute top-12 left-20 flex flex-col gap-5 z-10">
      <button
        onDoubleClick={() => openApp("files")}
        onClick={() => openApp("files")}
        className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 transition w-20"
      >
        <Folder size={44} fill="#E95420" color="#E95420" />
        <span className="text-white text-xs text-center drop-shadow">Johan</span>
      </button>

      <button
        onDoubleClick={() => openApp("trash")}
        onClick={() => openApp("trash")}
        className="flex flex-col items-center gap-1 p-2 rounded hover:bg-white/10 transition w-20"
      >
        <div className="w-11 h-11 rounded-full bg-[#E95420] flex items-center justify-center">
          <Trash2 size={24} color="white" />
        </div>
        <span className="text-white text-xs text-center drop-shadow">Corbeille</span>
      </button>
    </div>
  );
}