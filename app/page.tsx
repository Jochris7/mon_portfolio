"use client";

import TopBar from "@/components/desktop/TopBar";
import Dock from "@/components/desktop/Dock";
import DesktopIcons from "@/components/desktop/DesktopIcons";
import FilesApp from "@/components/apps/FilesApp";
import TerminalApp from "@/components/apps/TerminalApp";
import FirefoxApp from "@/components/apps/FirefoxApp";
import MailApp from "@/components/apps/MailApp";
import TrashApp from "@/components/apps/TrashApp";
import { useWindowStore } from "@/lib/store";
import { useEffect } from "react";

export default function Home() {
  const { openApps, openApp } = useWindowStore();

  // Ouvre Files par défaut au chargement
  useEffect(() => {
    const timer = setTimeout(() => openApp("files"), 400);
    return () => clearTimeout(timer);
  }, [openApp]);

  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(ellipse at center, #77216F 0%, #2C001E 70%)`,
      }}
    >
      {/* Ubuntu-style pattern overlay (léger) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px)`,
        }}
      />

      <TopBar />
      <DesktopIcons />
      <Dock />

      {/* Windows */}
      {openApps.includes("files") && <FilesApp />}
      {openApps.includes("terminal") && <TerminalApp />}
      {openApps.includes("firefox") && <FirefoxApp />}
      {openApps.includes("mail") && <MailApp />}
      {openApps.includes("trash") && <TrashApp />}
    </main>
  );
}