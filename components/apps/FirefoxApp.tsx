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
    name: "Linux Sysadmin Labs",
    emoji: "🐧",
    color: "from-gray-800 to-gray-950",
    tagline: "Série de labs d'administration système Linux",
    tags: ["Bash", "Linux", "ACL", "Scripting", "Sysadmin"],
    description:
      "Série de 4 labs couvrant l'administration système Linux : création d'utilisateurs en masse via CSV, toolkit de support interactif (monitoring CPU/RAM, services, backups), gestion des permissions Unix et ACL avec simulation d'un environnement d'entreprise multi-groupes.",
    link: "https://github.com/Jochris7/linux-sysadmin-labs-2",
  },
  {
    name: "Chatbot Gemini",
    emoji: "🤖",
    color: "from-blue-500 to-indigo-600",
    tagline: "Chatbot IA via l'API Gemini — Nest.js",
    tags: ["Nest.js", "TypeScript", "Gemini API", "IA"],
    description:
      "Chatbot conversationnel intégrant l'API Gemini de Google. Backend construit avec Nest.js et TypeScript, gestion du contexte de conversation, endpoints REST pour l'échange de messages.",
    link: "https://github.com/Jochris7/chatbotBackend",
  },
  {
    name: "Colonie de Vacances",
    emoji: "🏕️",
    color: "from-emerald-500 to-teal-600",
    tagline: "Plateforme de réservation en ligne",
    tags: ["Next.js", "TypeScript", "Paiement", "En cours 🚧"],
    description:
      "Plateforme web pour une agence de colonies de vacances : présentation des séjours, réservation en ligne, paiement intégré, et dashboard admin pour gérer les voyages, réservations et clients.",
    link: "https://github.com/Jochris7/SunCamp",
  },
  {
    name: "Agrofields",
    emoji: "🌾",
    color: "from-green-600 to-lime-500",
    tagline: "App mobile AgriTech — Stage",
    tags: ["React Native", "Expo", "Socket.IO", "PayDunya"],
    description:
      "Stage chez Agrofields (Mai–Juillet 2025) : développement frontend mobile en React Native/Expo, intégration d'appels API REST, temps réel avec Socket.IO et paiement mobile via PayDunya.",
  },
  {
    name: "Orange Summer Challenge",
    emoji: "🏆",
    color: "from-orange-400 to-orange-600",
    tagline: "IoT Mobile + CTF AWS · 4ème / 20 pays",
    tags: ["React Native", "IoT", "AWS", "CTF", "WebSocket"],
    description:
      "Stage Orange (Août–Novembre 2025) : conception d'une app mobile IoT pour visualiser des données capteurs en temps réel. Participation au CTF AWS — classé 4ème sur 20 pays participants sur des défis EC2, S3 et RDS.",
    link: "https://www.figma.com/proto/0We8nBJfCcmtDNpiH88bLP/Fermen-innov?node-id=26-1423&t=4xhF2J58D6y9sbbb-1",
  },
  {
    name: "ML Foodtruck",
    emoji: "📊",
    color: "from-yellow-400 to-amber-500",
    tagline: "Régression linéaire — Machine Learning",
    tags: ["Python", "Pandas", "Matplotlib", "Jupyter", "ML"],
    description:
      "Premier modèle ML : régression linéaire pour prédire les bénéfices d'un food truck selon la population d'une ville. Exercice fondateur en Data Science avec visualisation des résultats.",
    link: "https://github.com/Jochris7/ML-foodtruck",
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