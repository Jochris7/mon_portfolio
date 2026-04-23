"use client";

import Window from "@/components/window/Window";
import { ArrowLeft, ArrowRight, RotateCw, Home, Star, Menu } from "lucide-react";
import { useState } from "react";

interface Project {
  name: string;
  tagline: string;
  tags: string[];
  description: string;
  link?: string;
  emoji: string;
  color: string;
}

const PROJECTS: Project[] = [
  {
    name: "Babi-Services",
    emoji: "🔨",
    color: "from-orange-500 to-amber-600",
    tagline: "Marketplace d'artisans pour Abidjan",
    tags: ["React Native", "IA Matching", "GPS", "Freemium"],
    description: "Application mobile de services à domicile avec matching par IA, suivi GPS en temps réel, système de badges/réputation, négociation de prix in-app (style InDrive), et boutique de fournitures intégrée.",
  },
  {
    name: "VTC Control",
    emoji: "🚗",
    color: "from-blue-600 to-indigo-700",
    tagline: "Gestion de flotte VTC en Afrique",
    tags: ["Fleet", "Tracking", "B2B"],
    description: "Solution de gestion et tracking pour opérateurs de véhicules VTC. Cible : flottes existantes comme Africab, Yango CI, Heetch CI.",
  },
  {
    name: "Fondation AULINE",
    emoji: "💜",
    color: "from-purple-600 to-pink-600",
    tagline: "Communication digitale — ONG",
    tags: ["Content", "Design", "Social Media"],
    description: "Support de la communication de la fondation sur les thèmes santé maternelle/infantile, éducation et autonomisation des jeunes filles vulnérables. Contenus basés sur le rapport OECD 2026.",
  },
];

export default function FirefoxApp() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Window id="firefox" title={selected ? `${selected.name} — Mozilla Firefox` : "Projets — Mozilla Firefox"} width={960} height={600}>
      <div className="flex flex-col h-full bg-white">
        {/* Toolbar */}
        <div className="bg-[#F9F9FB] border-b border-[#D4D0CD] px-3 py-2 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setSelected(null)}
            className="p-1.5 rounded hover:bg-black/5 disabled:opacity-30"
            disabled={!selected}
          >
            <ArrowLeft size={16} />
          </button>
          <button className="p-1.5 rounded hover:bg-black/5 opacity-30" disabled><ArrowRight size={16} /></button>
          <button className="p-1.5 rounded hover:bg-black/5"><RotateCw size={16} /></button>
          <button onClick={() => setSelected(null)} className="p-1.5 rounded hover:bg-black/5"><Home size={16} /></button>
          <div className="flex-1 mx-2 bg-white border border-[#D4D0CD] rounded-full px-3 py-1 text-sm flex items-center gap-2">
            <span className="text-green-600">🔒</span>
            <span className="text-gray-600 truncate">
              portfolio.johan/projects{selected ? `/${selected.name.toLowerCase().replace(/\s+/g, "-")}` : ""}
            </span>
          </div>
          <button className="p-1.5 rounded hover:bg-black/5"><Star size={16} /></button>
          <button className="p-1.5 rounded hover:bg-black/5"><Menu size={16} /></button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {!selected ? (
            <div className="p-8 max-w-5xl mx-auto">
              <h1 className="text-3xl font-bold text-[#2C001E] mb-2">Mes projets</h1>
              <p className="text-gray-600 mb-8">Quelques projets sur lesquels j'ai travaillé récemment.</p>

              <div className="grid md:grid-cols-2 gap-5">
                {PROJECTS.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setSelected(p)}
                    className="text-left rounded-xl border border-[#D4D0CD] overflow-hidden hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className={`h-32 bg-linear-to-br ${p.color} flex items-center justify-center text-5xl`}>
                      {p.emoji}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-[#2C001E]">{p.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{p.tagline}</p>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[#E95420]/10 text-[#E95420]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 max-w-3xl mx-auto">
              <div className={`h-40 rounded-xl bg-linear-to-br ${selected.color} flex items-center justify-center text-7xl mb-6`}>
                {selected.emoji}
              </div>
              <h1 className="text-4xl font-bold text-[#2C001E] mb-2">{selected.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{selected.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#E95420]/10 text-[#E95420] font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed">{selected.description}</p>
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}