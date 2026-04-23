"use client";

import Window from "@/components/window/Window";
import { useState } from "react";
import { Mail, Send, Inbox, Star, FileEdit, Trash2,} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MailApp() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Construit un mailto avec les infos
    const body = `De : ${form.name} <${form.email}>\n\n${form.message}`;
    window.location.href = `mailto:johan@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Window id="mail" title="Écrire un message — Thunderbird" width={880} height={560}>
      <div className="flex h-full bg-white">
        {/* Sidebar */}
        <aside className="w-48 bg-[#F6F5F4] border-r border-[#D4D0CD] py-2 shrink-0">
          <div className="px-3 py-2 text-xs text-gray-500 uppercase font-semibold">Dossiers</div>
          {[
            { icon: Inbox, label: "Boîte de réception", count: 0 },
            { icon: FileEdit, label: "Nouveau", active: true },
            { icon: Send, label: "Envoyés" },
            { icon: Star, label: "Favoris" },
            { icon: Trash2, label: "Corbeille" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={i}
                className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm ${
                  item.active ? "bg-blue-600 text-white" : "text-[#333] hover:bg-[#E5E5E5]"
                }`}
              >
                <Icon size={14} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="text-xs">{item.count}</span>
                )}
              </button>
            );
          })}

          <div className="px-3 py-2 mt-4 text-xs text-gray-500 uppercase font-semibold">Réseaux</div>
            <a href="#" className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-[#333] hover:bg-[#E5E5E5]">
              <FaGithub size={14} /> GitHub
            </a>
            <a href="#" className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-[#333] hover:bg-[#E5E5E5]">
              <FaLinkedin size={14} /> LinkedIn
            </a>
            <a href="#" className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-[#333] hover:bg-[#E5E5E5]">
              <FaXTwitter size={14} /> Twitter
            </a>
        </aside>

        {/* Compose */}
        <main className="flex-1 flex flex-col">
          <div className="border-b border-[#D4D0CD] px-4 py-2 flex items-center gap-2">
            <Mail size={18} className="text-blue-600" />
            <h2 className="font-semibold">Me contacter</h2>
          </div>

          <form onSubmit={handleSend} className="flex-1 flex flex-col overflow-y-auto">
            <div className="border-b border-[#D4D0CD] px-4 py-2 text-sm">
              <span className="text-gray-500 w-16 inline-block">De :</span>
              <input
                required
                type="email"
                placeholder="votre.email@exemple.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-transparent outline-none flex-1 min-w-0 w-[calc(100%-5rem)]"
              />
            </div>
            <div className="border-b border-[#D4D0CD] px-4 py-2 text-sm">
              <span className="text-gray-500 w-16 inline-block">Nom :</span>
              <input
                required
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-transparent outline-none flex-1 w-[calc(100%-5rem)]"
              />
            </div>
            <div className="border-b border-[#D4D0CD] px-4 py-2 text-sm">
              <span className="text-gray-500 w-16 inline-block">À :</span>
              <span className="text-[#333]">johan@example.com</span>
            </div>
            <div className="border-b border-[#D4D0CD] px-4 py-2 text-sm">
              <span className="text-gray-500 w-16 inline-block">Objet :</span>
              <input
                required
                type="text"
                placeholder="Sujet du message"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="bg-transparent outline-none flex-1 w-[calc(100%-5rem)]"
              />
            </div>

            <textarea
              required
              placeholder="Votre message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="flex-1 p-4 outline-none resize-none text-sm min-h-45"
            />

            <div className="border-t border-[#D4D0CD] px-4 py-3 flex items-center justify-between bg-[#FAFAFA]">
              <span className="text-xs text-gray-500">
                {sent ? "✓ Votre client mail va s'ouvrir..." : "Ouvrira votre client mail par défaut"}
              </span>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded flex items-center gap-2 text-sm font-medium"
              >
                <Send size={14} /> Envoyer
              </button>
            </div>
          </form>
        </main>
      </div>
    </Window>
  );
}