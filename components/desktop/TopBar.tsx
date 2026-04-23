"use client";

import { useEffect, useState } from "react";
import { Volume2, Wifi, Battery } from "lucide-react";

export default function TopBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const day = now.toLocaleDateString("fr-FR", { weekday: "short", day: "2-digit", month: "short" });
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setTime(`${day.charAt(0).toUpperCase() + day.slice(1)} ${hh}:${mm}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 backdrop-blur text-white flex items-center justify-between px-3 text-sm z-50">
      <div className="flex items-center gap-4">
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition">Activities</button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 font-medium">
        {time}
      </div>

      <div className="flex items-center gap-3">
        <Wifi size={14} />
        <Volume2 size={14} />
        <Battery size={16} />
      </div>
    </div>
  );
}