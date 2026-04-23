"use client";

import Window from "@/components/window/Window";
import { Star, Clock, Home, FileText, Download, Music, Image as ImageIcon, Video, Trash2 } from "lucide-react";
import { useState } from "react";

const SIDEBAR = [
  { icon: Clock, label: "Recent" },
  { icon: Star, label: "Starred" },
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "Documents" },
  { icon: Download, label: "Downloads" },
  { icon: Music, label: "Music" },
  { icon: ImageIcon, label: "Pictures" },
  { icon: Video, label: "Videos" },
];

const FILES = [
  { name: "à_propos.md", emoji: "📄", key: "about" },
  { name: "parcours.md", emoji: "🎓", key: "parcours" },
  { name: "experience.md", emoji: "💼", key: "experience" },
  { name: "interets.md", emoji: "🎯", key: "interets" },
];

const CONTENT: Record<string, { title: string; body: React.ReactNode }> = {
  about: {
    title: "à_propos.md",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold text-[#77216F] mb-4"># Salut ! 👋</h2>
        <p>
          Moi c’est <strong>Johan Chris Junior Kpoulede</strong> (aka Ledjo Johan), étudiant en 3e année d’ingénierie informatique à l’ENSIT, basé à Abidjan.
        </p>
        <p>
          Je ne me contente pas de "pisser du code" : ce qui m'anime, c'est l'<strong>architecture logicielle et le System Design</strong>. Je cherche constamment à passer du statut de simple codeur à celui de concepteur de systèmes robustes, scalables et modulaires.
        </p>
        <p>
          Mon écosystème de prédilection tourne autour du monde <strong>JavaScript/TypeScript</strong> (Next.js, React, NestJS) couplé à des bases de données relationnelles (PostgreSQL), sans oublier <strong>Python</strong> pour la donnée.
        </p>
        <p>
          Mon objectif ? Devenir un ingénieur d'élite capable de transformer des problèmes métiers complexes en solutions techniques élégantes.
        </p>
      </div>
    ),
  },
  parcours: {
    title: "parcours.md",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold text-[#77216F] mb-4"># Mon Parcours</h2>
        
        <div className="relative border-l-2 border-[#E95420] pl-4 ml-2 space-y-6">
          <div className="relative">
            <div className="absolute -left-5.25 top-1 h-3 w-3 rounded-full bg-[#E95420]"></div>
            <h3 className="font-bold text-gray-900">🎓 Cycle Ingénieur (ING3) - ENSIT</h3>
            <span className="text-xs text-[#E95420] font-medium">En cours</span>
            <p className="mt-1">Spécialisation en ingénierie informatique, développement full-stack , conception d'architectures SI et data engineering</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-5.25 top-1 h-3 w-3 rounded-full bg-gray-300"></div>
            <h3 className="font-bold text-gray-900">📚 Classes Préparatoires Scientifiques - ENSIT</h3>
            <span className="text-xs text-gray-500">2021 - 2023</span>
            <p className="mt-1">Deux années intenses axées sur les mathématiques et les fondamentaux de la science informatique (Analyse, Algèbre, Algorithmique, Langage C, Systèmes Linux/MS-DOS, Réseaux, Électronique, Physique, etc.) </p>
          </div>
        </div>
      </div>
    ),
  },
  experience: {
    title: "experience.md",
    body: (
      <div className="space-y-5 text-sm leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold text-[#77216F] mb-4"># Projets & Expérience</h2>
        
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900">🚀 Freelance Squad</h3>
          <p className="mt-1">Équipe de développeurs formée avec des camarades de promotion. Nous concevons et livrons des solutions web, mobiles et desktop sur mesure de bout en bout.</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900">📰 Actu Scientifique</h3>
          <p className="mt-1">Création d'une plateforme web à fort trafic et de son dashboard d'administration sur mesure pour un média scientifique africain.</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900">🏫 SmartCampus</h3>
          <p className="mt-1">SmartCampus est une solution logicielle robuste conçue pour centraliser et automatiser l'écosystème d'un établissement scolaire. Le projet répond au défi de la fluidité de l'information entre les différents acteurs de la vie académique. Conception d'un système de permissions granulaire gérant trois interfaces distinctes (Étudiant, Professeur, Administration) garantissant la sécurité et la confidentialité des données.</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900">🌱 Cocoma </h3>
          <p className="mt-1">Projets d'innovation agricole. Conception d’une solution IoT dédiée à l’automatisation de la fermentation et du séchage du cacao. Le dispositif intègre des capteurs (température, humidité, pH, poids) pour assurer un suivi en temps réel et un contrôle précis des parametres. Le système est couplé à une application mobile permettant le pilotage à distance, la visualisation des données, la gestion des cycles et la traçabilité des lots.</p>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="font-bold text-gray-900">🌱 Agriconnect</h3>
          <p className="mt-1"> Une solution technologique (marketplace) conçue pour moderniser et optimiser le secteur agricole en connectant les acteurs (agriculteurs, acheteurs, fournisseurs, experts) à travers une plateforme numérique intelligente. </p>
        </div>

      </div>
    ),
  },
  interets: {
    title: "interets.md",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        <h2 className="text-2xl font-bold text-[#77216F] mb-4"># Centres d'intérêt</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-lg">⚙️</span>
            <div>
              <strong className="text-gray-900">System Design :</strong>
              <p>Penser l'architecture globale, la modularité et la gestion des données avant d'écrire la première ligne de code.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">🔐</span>
            <div>
              <strong className="text-gray-900">Cybersécurité & Réseaux :</strong>
              <p>Passion pour le pentesting (Nmap, Metasploit) et les environnements Linux (Kali, Ubuntu).</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">📊</span>
            <div>
              <strong className="text-gray-900">Data Science & ML :</strong>
              <p>Exploration de données avec Python (Pandas, Matplotlib) pour intégrer progressivement de l'intelligence artificielle dans mes projets.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">🌍</span>
            <div>
              <strong className="text-gray-900">Tech for Africa :</strong>
              <p>Développer des solutions locales, comme dans l'AgriTech, qui ont un impact réel sur l'écosystème africain.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">📚</span>
            <div>
              <strong className="text-gray-900">Lecture :</strong>
              <p>Passionné par les livres de développement personnel et d'entrepreneuriat — <em>Atomic Habits</em> m'a notamment aidé à ancrer de bonnes habitudes et à me défaire des anciennes, renforçant ainsi ma discipline au quotidien.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">🏀</span>
            <div>
              <strong className="text-gray-900">Basketball :</strong>
              <p>Le basket est mon sport de prédilection : il me permet de rester en forme, de développer l'esprit d'équipe et de décompresser après de longues sessions de code.</p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
};

export default function FilesApp() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Window id="files" title={selected ? CONTENT[selected].title : "Home"} width={900} height={560}>
      <div className="flex h-full bg-white">
        {/* Sidebar */}
        <aside className="w-52 bg-[#F6F5F4] border-r border-[#D4D0CD] py-2 overflow-y-auto shrink-0">
          {SIDEBAR.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-1.5 text-sm hover:bg-[#E5E5E5] transition ${
                  item.active ? "bg-[#E95420] text-white hover:bg-[#E95420]" : "text-[#333]"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-y-auto">
          {!selected ? (
            <div className="p-6 grid grid-cols-4 gap-4">
              {FILES.map((f) => (
                <button
                  key={f.key}
                  onDoubleClick={() => setSelected(f.key)}
                  onClick={() => setSelected(f.key)}
                  className="flex flex-col items-center gap-1 p-3 rounded hover:bg-[#E5E5E5] transition"
                >
                  <div className="text-4xl">{f.emoji}</div>
                  <span className="text-xs text-center text-[#333]">{f.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 max-w-2xl">
              <button
                onClick={() => setSelected(null)}
                className="text-xs text-[#77216F] hover:underline mb-4"
              >
                ← Retour
              </button>
              {CONTENT[selected].body}
            </div>
          )}
        </main>
      </div>
    </Window>
  );
}