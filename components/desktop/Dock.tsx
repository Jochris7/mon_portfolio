"use client";

import { useWindowStore } from "@/lib/store";
import { APPS } from "@/lib/apps-config";
import { Grid3x3 } from "lucide-react";

export default function Dock() {
  const { openApp, openApps, activeApp } = useWindowStore();

  return (
    <div className="absolute left-0 top-8 bottom-0 w-16 bg-black/70 backdrop-blur flex flex-col items-center py-3 gap-2 z-40">
      {APPS.map((app) => {
        const Icon = app.icon;
        const isOpen = openApps.includes(app.id);
        const isActive = activeApp === app.id;
        return (
          <button
            key={app.id}
            onClick={() => openApp(app.id)}
            title={app.label}
            className={`group relative w-12 h-12 rounded-lg ${app.iconBgClass} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
          >
            <Icon size={28} color="white" />
            {isOpen && (
              <span
                className={`absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full ${
                  isActive ? "bg-white" : "bg-white/50"
                }`}
              />
            )}
            <span className="absolute left-full ml-3 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition">
              {app.label}
            </span>
          </button>
        );
      })}

      <div className="w-8 h-px bg-white/20 my-2" />

      <button
        title="Show Applications"
        className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition mt-auto mb-2"
      >
        <Grid3x3 size={22} color="white" />
      </button>
    </div>
  );
}