import React from 'react';
import { 
  Mail, 
  LinkedIn, 
  Globe, 
  FileText, 
  MapPin, 
  BarChart3, 
  Truck, 
  Globe2, 
  TrendingUp, 
  PackageSearch, 
  GanttChart,
  ChevronRight
} from 'lucide-react';

// --- INTERFACES (Para que Vercel no dé error de TypeScript) ---
interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface SkillTagProps {
  name: string;
}

// --- COMPONENTES AUXILIARES ---
const ExperienceItem = ({ company, role, period, description }: ExperienceProps) => (
  <div className="mb-8 border-l-2 border-emerald-500 pl-4">
    <h3 className="text-xl font-bold text-slate-800">{role}</h3>
    <p className="text-emerald-600 font-medium">{company} | {period}</p>
    <p className="text-slate-600 mt-2">{description}</p>
  </div>
);

const SkillTag = ({ name }: SkillTagProps) => (
  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
    {name}
  </span>
);

// --- PÁGINA PRINCIPAL ---
export default function CVMarcela() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header / Hero */}
        
        <div className="bg-slate-900 text-white p-8 md:p-12 text-center md:text-left md:flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Marcela [Apellido]</h1>
            <p className="text-emerald-400 text-xl mt-2 font-medium">Título Profesional / Especialidad</p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start text-slate-300">
              <span className="flex items-center gap-2"><Mail size={18}/> correo@ejemplo.com</span>
              <span className="flex items-center gap-2"><MapPin size={18}/> Ciudad, País</span>
            </div>
          </div>
          <div className="mt-8 md:mt-0"> 
            <a 
              href="/cv-marcela.pdf" 
              download 
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              <FileText size={20}/> Descargar CV
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
          {/* Columna Izquierda: Perfil y Skills */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-500 pb-1 w-fit">Perfil</h2>
              <p className="text-slate-600 leading-relaxed">
                Breve descripción profesional de Marcela. Destaca sus años de experiencia, 
                habilidades clave y lo que busca aportar a una empresa.
              </p>
            </section>

<section>
  <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-cyan-600 pb-1 w-fit text-sm uppercase tracking-tighter">Áreas de Expertise</h2>
  <div className="space-y-4">
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <h3 className="font-bold text-cyan-700 flex items-center gap-2"><BarChart3 size={18}/> Planning & S&OP</h3>
      <p className="text-sm text-slate-600">Gestión de demanda, balance de carga y capacidad, procesos IBP.</p>
    </div>
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <h3 className="font-bold text-cyan-700 flex items-center gap-2"><Truck size={18}/> Supply Chain Ops</h3>
      <p className="text-sm text-slate-600">Logística de última milla, gestión de almacenes y distribución nacional.</p>
    </div>
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <h3 className="font-bold text-cyan-700 flex items-center gap-2"><Globe2 size={18}/> Comercio Exterior</h3>
      <p className="text-sm text-slate-600">Import/Export, gestión de agentes de aduana, Incoterms 2020.</p>
    </div>
  </div>
</section>
          </div>

          {/* Columna Derecha: Experiencia */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-emerald-500 pb-1 w-fit">Experiencia Laboral</h2>
              
              <ExperienceItem 
                company="Empresa Actual"
                role="Cargo Senior"
                period="2022 - Presente"
                description="Descripción de logros y responsabilidades principales de Marcela en este rol."
              />

              <ExperienceItem 
                company="Empresa Anterior"
                role="Cargo Intermedio"
                period="2018 - 2021"
                description="Resumen de tareas y proyectos liderados durante este periodo."
              />
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-50 p-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          © 2026 Marcela [Apellido] - CV Profesional
        </footer>
      </div>
    </main>
  );
}