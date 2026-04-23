"use client";

import Window from "@/components/window/Window";
import { useEffect, useRef, useState } from "react";

type Line = { type: "cmd" | "out"; content: React.ReactNode };

const PROMPT = (
  <span>
    <span className="text-[#26A269]">johan@portfolio</span>
    <span className="text-white">:</span>
    <span className="text-[#2A7BDE]">~</span>
    <span className="text-white">$ </span>
  </span>
);

const COMMANDS: Record<string, () => React.ReactNode> = {
  help: () => (
    <div>
      <p className="text-[#F9F06B]">Commandes disponibles :</p>
      <ul className="ml-2">
        <li><span className="text-[#26A269]">whoami</span>       — qui suis-je</li>
        <li><span className="text-[#26A269]">skills</span>       — compétences techniques</li>
        <li><span className="text-[#26A269]">stack</span>        — stack technique</li>
        <li><span className="text-[#26A269]">projects</span>     — mes projets</li>
        <li><span className="text-[#26A269]">contact</span>      — comment me joindre</li>
        <li><span className="text-[#26A269]">clear</span>        — efface le terminal</li>
        <li><span className="text-[#26A269]">neofetch</span>     — infos système</li>
      </ul>
    </div>
  ),
  whoami: () => <p>Johan — Développeur front-end basé à Abidjan 🇨🇮</p>,
  skills: () => (
    <div>
      <p className="text-[#F9F06B]">▓▓▓ Compétences ▓▓▓</p>
      <p>Front : <span className="text-[#2A7BDE]">React · Next.js · TypeScript · Tailwind</span></p>
      <p>Tools : <span className="text-[#2A7BDE]">Git · Figma · Vercel</span></p>
      <p>Langues : <span className="text-[#2A7BDE]">Français · Anglais</span></p>
    </div>
  ),
  stack: () => (
    <pre className="text-[#2A7BDE]">{`┌─ Front-end  → React, Next.js 15, TypeScript
├─ Styling   → Tailwind CSS, Framer Motion
├─ State     → Zustand, React Query
└─ Backend   → Node.js, Supabase (en apprentissage)`}</pre>
  ),
  projects: () => (
    <div>
      <p className="text-[#F9F06B]">📂 Projets récents :</p>
      <p>• <strong>Babi-Services</strong> — Marketplace d'artisans (Abidjan)</p>
      <p>• <strong>VTC Control</strong> — Gestion de flotte VTC</p>
      <p>• <strong>Fondation AULINE</strong> — Communication digitale</p>
      <p className="text-gray-400 italic">→ Ouvre Firefox pour voir les détails</p>
    </div>
  ),
  contact: () => (
    <div>
      <p>📧 Ouvre Thunderbird depuis le dock pour m'envoyer un message !</p>
    </div>
  ),
  neofetch: () => (
    <pre className="text-[#E95420]">{`          ..'           johan@portfolio
      ,xNMM.           ---------------
    .OMMMMo            OS: Ubuntu 24.04 LTS
    lMM"               Host: Portfolio Web
  .;loddo:.  ....      Shell: bash
cKMMMMMMMMMMk;.       Resolution: responsive
.KMMMMMMMMMMMMMMo    DE: GNOME (fake)
 XMMMMMMMMMMMMMMW    Terminal: portfolio-term
 .XMMMMMMMMMMMMM.    CPU: Cerveau v.2026
  kMMMMMMMMMMMMk     Memory: caféiné ☕
   .XMMMMMMMMMMMMMMMMd`}</pre>
  ),
};

export default function TerminalApp() {
  const [lines, setLines] = useState<Line[]>([
    { type: "out", content: <p className="text-[#26A269]">Welcome to johan-portfolio 🐧</p> },
    { type: "out", content: <p>Tape <span className="text-[#F9F06B]">help</span> pour voir les commandes disponibles.</p> },
    { type: "out", content: <p> </p> },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "cmd", content: <p>{PROMPT}{raw}</p> }];
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "") {
      setLines(newLines);
      return;
    }
    if (COMMANDS[cmd]) {
      newLines.push({ type: "out", content: COMMANDS[cmd]() });
    } else {
      newLines.push({
        type: "out",
        content: <p className="text-red-400">bash: {cmd}: command not found (essaye <span className="text-[#F9F06B]">help</span>)</p>,
      });
    }
    setLines(newLines);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) {
        setHistory([...history, input]);
      }
      setInput("");
      setHistIdx(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === -1) return;
      const next = histIdx + 1;
      if (next >= history.length) {
        setHistIdx(-1);
        setInput("");
      } else {
        setHistIdx(next);
        setInput(history[next]);
      }
    }
  };

  return (
    <Window id="terminal" title="johan@portfolio: ~" width={760} height={480} darkTitlebar>
      <div
        className="w-full h-full bg-[#300A24] text-white font-mono-terminal text-sm p-3 overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">{l.content}</div>
        ))}
        <div className="flex items-center">
          {PROMPT}
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 bg-transparent outline-none text-white caret-white ml-0"
            spellCheck={false}
          />
        </div>
        <div ref={endRef} />
      </div>
    </Window>
  );
}