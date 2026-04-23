import { Folder, Terminal, Globe, Mail, Trash2 } from "lucide-react";
import type { AppId } from "./store";
import type { LucideIcon } from "lucide-react";

export interface AppConfig {
  id: AppId;
  label: string;
  /** Titre affiché dans la titlebar */
  windowTitle: string;
  icon: LucideIcon;
  /** Classes Tailwind pour l'arrière-plan de l'icône dans le dock */
  iconBgClass: string;
  /** Taille de la fenêtre en desktop */
  width: number;
  height: number;
  /** Titlebar sombre (Terminal) */
  darkTitlebar?: boolean;
}

export const APPS: AppConfig[] = [
  {
    id: "files",
    label: "Fichiers — À propos",
    windowTitle: "Home",
    icon: Folder,
    iconBgClass: "bg-[#E95420]",
    width: 900,
    height: 560,
  },
  {
    id: "terminal",
    label: "Terminal — Skills",
    windowTitle: "johan@portfolio: ~",
    icon: Terminal,
    iconBgClass: "bg-[#2C001E]",
    width: 760,
    height: 480,
    darkTitlebar: true,
  },
  {
    id: "firefox",
    label: "Firefox — Projets",
    windowTitle: "Projets — Mozilla Firefox",
    icon: Globe,
    iconBgClass: "bg-gradient-to-br from-orange-500 to-red-600",
    width: 960,
    height: 600,
  },
  {
    id: "mail",
    label: "Thunderbird — Contact",
    windowTitle: "Écrire un message — Thunderbird",
    icon: Mail,
    iconBgClass: "bg-blue-600",
    width: 880,
    height: 560,
  },
    {
    id: "trash",
    label: "Corbeille — Anciens projets",
    windowTitle: "Corbeille",
    icon: Trash2,
    iconBgClass: "bg-[#E95420]",
    width: 860,
    height: 580,
  },
];

/** Helper : récupère la config d'une app par son id */
export const getAppConfig = (id: AppId): AppConfig | undefined =>
  APPS.find((a) => a.id === id);

/** ---------- Contenu perso : édite ici ton portfolio ---------- */

export const PERSONAL_INFO = {
  name: "Johan",
  role: "Développeur front-end",
  location: "Abidjan, Côte d'Ivoire",
  email: "johan@example.com",
  social: {
    github: "https://github.com/ton-pseudo",
    linkedin: "https://linkedin.com/in/ton-pseudo",
    twitter: "https://twitter.com/ton-pseudo",
  },
};

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  tools: ["Git", "Figma", "Vercel"],
  languages: ["Français", "Anglais"],
};

export interface Project {
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  tags: string[];
  description: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Babi-Services",
    emoji: "🔨",
    color: "from-orange-500 to-amber-600",
    tagline: "Marketplace d'artisans pour Abidjan",
    tags: ["React Native", "IA Matching", "GPS", "Freemium"],
    description:
      "Application mobile de services à domicile avec matching par IA, suivi GPS en temps réel, système de badges/réputation, négociation de prix in-app (style InDrive), et boutique de fournitures intégrée.",
  },
  {
    name: "VTC Control",
    emoji: "🚗",
    color: "from-blue-600 to-indigo-700",
    tagline: "Gestion de flotte VTC en Afrique",
    tags: ["Fleet", "Tracking", "B2B"],
    description:
      "Solution de gestion et tracking pour opérateurs de véhicules VTC. Cible : flottes existantes comme Africab, Yango CI, Heetch CI.",
  },
  {
    name: "Fondation AULINE",
    emoji: "💜",
    color: "from-purple-600 to-pink-600",
    tagline: "Communication digitale — ONG",
    tags: ["Content", "Design", "Social Media"],
    description:
      "Support de la communication de la fondation sur les thèmes santé maternelle/infantile, éducation et autonomisation des jeunes filles vulnérables. Contenus basés sur le rapport OECD 2026.",
  },
];