"use client";

import Window from "@/components/window/Window";
import { Trash2, Play, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface OldProject {
  key: string;
  emoji: string;
  name: string;
  level: string;        // ex: "1ère année prépa" ou "ING1"
  year: string;         // ex: "2022"
  stack: string[];
  story: string;        // l'histoire accrocheuse
  description: string;
  videoUrl?: string;    // lien vidéo ou chemin local — à remplir
  githubUrl?: string;   // lien github — à remplir
  liveUrl?: string;     // lien démo — à remplir
}

// ─── Données — AJOUTE / MODIFIE ICI ──────────────────────────────────────────
const OLD_PROJECTS: OldProject[] = [
  {
    key: "proj1",
    emoji: "🎮",
    name: "Jeu de Dames",
    level: "ING1",
    year: "2024",
    stack: ["React.js", "JavaScript"],
    story:
      "Mon premier vrai projet React. J'avais aucune idée de ce que je faisais — mais j'ai tenu jusqu'au bout.",
    description:
      "Application web interactive permettant à deux joueurs de s'affronter sur un plateau de dames. Gestion des règles, des déplacements et des captures.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/jeu-dame",
  },
  {
    key: "proj2",
    emoji: "📚",
    name: "CRUD Bibliothèque",
    level: "ING1",
    year: "2024",
    stack: ["React.js", "Node.js", "MongoDB", "Express"],
    story:
      "Ma première fois avec la stack MERN. J'ai compris ce que voulait dire 'full-stack' pour de vrai — et c'était douloureux.",
    description:
      "Application de gestion de bibliothèque numérique : ajout, modification, suppression et consultation de livres. Premier contact sérieux avec une API REST.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/CRUD-bibliotheque",
  },
  {
    key: "proj3",
    emoji: "📊",
    name: "Dashboard Statique",
    level: "ING1",
    year: "2024",
    stack: ["React.js", "Chart.js", "JavaScript"],
    story:
      "J'avais découvert Chart.js et je voulais mettre des graphiques partout. Résultat : un dashboard avec trop de couleurs et trop de données.",
    description:
      "Dashboard de visualisation de données avec graphiques interactifs (barres, lignes, camemberts). Présentation visuelle de KPIs fictifs.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/dashborad-1-static-",
  },
  {
    key: "proj4",
    emoji: "🃏",
    name: "Jeu de Baccalauréat",
    level: "ING1",
    year: "2024",
    stack: ["PHP", "MySQL", "JavaScript"],
    story:
      "PHP, MySQL, et DOM vanilla — l'ancienne école. Aujourd'hui je frissonne en relisant ce code. Mais ça fonctionnait.",
    description:
      "Jeu interactif du Baccalauréat : les joueurs remplissent des catégories (noms, villes, animaux…) selon une lettre tirée au hasard. Gestion des scores et du timer.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/jeu-baccalaur-at",
  },
  {
    key: "proj5",
    emoji: "📱",
    name: "Clone WhatsApp Mobile",
    level: "ING1",
    year: "2025",
    stack: ["React.js", "JavaScript"],
    story:
      "Tout dev mobile a cloné WhatsApp au moins une fois. C'était mon tour. Je voulais comprendre comment ils gèrent l'UI des chats.",
    description:
      "Réplique de l'interface utilisateur de WhatsApp : liste de conversations, bulles de messages, barre de navigation. Front-end uniquement.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/clone-WhatsApp-front-end-mobile",
  },
  {
    key: "proj6",
    emoji: "🤖",
    name: "ML Foodtruck",
    level: "ING2",
    year: "2025",
    stack: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    story:
      "Mon premier modèle ML. Une régression linéaire pour prédire les bénéfices d'un food truck. Simple — mais c'est là que j'ai chopé le virus du Machine Learning.",
    description:
      "Implémentation d'une régression linéaire pour prédire les bénéfices d'un Food Truck selon la population d'une ville. Exercice fondateur en Data Science.",
    videoUrl: "", // ← colle ton lien vidéo ici
    githubUrl: "https://github.com/Jochris7/ML-foodtruck",
  },
];

// ─── Composant carte projet ───────────────────────────────────────────────────
function ProjectCard({ project }: { project: OldProject }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Vidéo placeholder */}
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center group">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          // ← Remplace ce bloc par ta vidéo quand tu l'as
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={20} className="text-white/50 ml-1" />
            </div>
            <span className="text-xs text-white/30">Vidéo à ajouter</span>
          </div>
        )}
        {/* Badge niveau */}
        <div className="absolute top-2 left-2 bg-[#E95420] text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {project.level} · {project.year}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-3 space-y-2">
        {/* Titre */}
        <div className="flex items-center gap-2">
          <span className="text-xl">{project.emoji}</span>
          <h3 className="font-bold text-gray-900 text-sm">{project.name}</h3>
        </div>

        {/* Histoire accrocheuse */}
        <p className="text-xs text-[#77216F] italic leading-relaxed border-l-2 border-[#E95420] pl-2">
          "{project.story}"
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description (expandable) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 transition"
        >
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {expanded ? "Réduire" : "En savoir plus"}
        </button>

        {expanded && (
          <p className="text-xs text-gray-600 leading-relaxed">{project.description}</p>
        )}

        {/* Liens */}
        <div className="flex gap-2 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-900 transition"
            >
              <FaGithub size={11} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-[#E95420] hover:underline transition"
            >
              <ExternalLink size={11} />
              Démo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Fenêtre principale Corbeille ─────────────────────────────────────────────
export default function TrashApp() {
  return (
    <Window id="trash" title="Corbeille" width={860} height={580}>
      <div className="flex flex-col h-full bg-[#F6F5F4]">

        {/* Header */}
        <div className="bg-white border-b border-[#D4D0CD] px-6 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#E95420] flex items-center justify-center shrink-0">
            <Trash2 size={16} color="white" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Mes anciens projets</p>
            <p className="text-[11px] text-gray-500">
              Ce n'est pas de la corbeille — c'est d'où je viens. Chaque projet ici m'a appris quelque chose.
            </p>
          </div>
        </div>

        {/* Grille projets */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {OLD_PROJECTS.map((project) => (
              <ProjectCard key={project.key} project={project} />
            ))}
          </div>
        </div>

      </div>
    </Window>
  );
}