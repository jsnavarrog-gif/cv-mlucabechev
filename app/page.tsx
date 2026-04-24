import React from 'react';
import { 
  Mail, 
  Link, 
  MapPin, 
  BarChart3, 
  Truck, 
  Globe2, 
  TrendingUp, 
  PackageSearch, 
  GanttChart,
  ChevronRight,
  FileText,
  Boxes, MessageCircle
} from 'lucide-react';

// --- INTERFACES ---
interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface SkillTagProps {
  name: string;
}

// --- COMPONENTES ---
const ExperienceItem = ({ company, role, period, description }: ExperienceProps) => (
  <div className="mb-10 relative pl-8 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors group">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-cyan-500 transition-colors" />
    <h3 className="text-xl font-bold text-slate-800 leading-none">{role}</h3>
    <p className="text-cyan-600 font-semibold text-sm mt-2 mb-3 uppercase tracking-wider">{company} | {period}</p>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const SkillTag = ({ name }: SkillTagProps) => (
  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-[10px] font-bold border border-slate-200 uppercase tracking-tighter">
    {name}
  </span>
);

export default function CVMarcela() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200">
        
        {/* HEADER ESTRATÉGICO */}
        <div className="bg-slate-900 text-white p-10 md:flex justify-between items-start">
          <div className="space-y-4">
            <div className="inline-block bg-cyan-500 text-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] mb-2">
              Senior Supply Chain & Demand Planning
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              Marcela <span className="text-cyan-500">Lucabeche V.</span>
            </h1>
            <p className="text-slate-400 text-lg font-light max-w-2xl leading-relaxed">
              Especialista con más de <span className="text-white font-medium">10 años de trayectoria</span> en industrias críticas.<br/>Actúo como puente estratégico entre Comercial, Operaciones y Finanzas.
            </p>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-400">
              <a href="mailto:marce.lucabeche@gmail.com" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition border border-slate-700">
                <Mail size={18} /> marce.lucabeche@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/marcelalucabechev" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition border border-slate-700">
                <Link size={18} /> LinkedIn
              </a>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-cyan-500"/> Santiago, Chile</span>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="/MLV202604.jpeg" 
              alt="Foto de Marcela Lucabeche" 
              className="w-48 h-48 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
            /><br/>
            <a 
              href="/CV_MarcelaLucabecheV.pdf" 
              download
              className="group flex items-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-none font-black uppercase text-xs hover:bg-cyan-500 transition-all shadow-[6px_6px_0px_0px_rgba(6,182,212,1)]"
            >
              <FileText size={20}/> Descargar CV<ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
        </div>

        {/* MÉTRICAS Y VALOR AGREGADO (KPIs) */}
        <div className="bg-cyan-500 grid grid-cols-2 md:grid-cols-4 divide-x divide-cyan-600">
          <div className="p-6 text-center">
            <p className="text-3xl font-black text-slate-900">S&OP 2.0</p>
            <p className="text-[10px] text-slate-800 uppercase font-bold tracking-widest">Liderazgo Regional </p>
          </div>
          <div className="p-6 text-center">
            <p className="text-3xl font-black text-slate-900">10+ Años</p>
            <p className="text-[10px] text-slate-800 uppercase font-bold tracking-widest">Industria Crítica</p>
          </div>
          <div className="p-6 text-center">
            <p className="text-3xl font-black text-slate-900">6 Países</p>
            <p className="text-[10px] text-slate-800 uppercase font-bold tracking-widest">Gestión de Clúster </p>
          </div>
          <div className="p-6 text-center">
            <p className="text-3xl font-black text-slate-900">E2E</p>
            <p className="text-[10px] text-slate-800 uppercase font-bold tracking-widest">Visión de Negocio</p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-0">
          {/* BARRA LATERAL: DOMINIO TÉCNICO */}
          <div className="md:col-span-4 bg-slate-50 p-10 border-r border-slate-100">
            <section className="mb-12">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Core Expertise</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded shadow-sm"><BarChart3 size={18} className="text-cyan-600"/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">S&OP / IBP</h4>
                    <p className="text-xs text-slate-500 leading-tight">Gobernanza regional y toma de decisiones críticas basadas en datos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded shadow-sm"><TrendingUp size={18} className="text-cyan-600"/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Demand Planning</h4>
                    <p className="text-xs text-slate-500 leading-tight">Optimización del capital de trabajo y forecast de alta precisión.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white p-2 rounded shadow-sm"><Globe2 size={18} className="text-cyan-600"/></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Foreign Trade</h4>
                    <p className="text-xs text-slate-500 leading-tight">Sourcing internacional y cumplimiento normativo aduanero.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Herramientas Clave</h2>
              <div className="flex flex-wrap gap-2">
                <SkillTag name="SAP (APO/SCM)" />
                <SkillTag name="OMP" />
                <SkillTag name="Power BI" />
                <SkillTag name="Machine Learning" />
                <SkillTag name="Excel Expert" />
                <SkillTag name="SAC" />
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Educación </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-[12px] font-bold text-cyan-600 uppercase">Diplomado 2024</p>
                  <p className="text-[12px] font-bold text-slate-800">Product Management</p>
                  <p className="text-[12px] text-slate-500 uppercase">U. de Chile</p>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-cyan-600 uppercase">Ingeniería Comercial</p>
                  <p className="text-[12px] font-bold text-slate-800">Mención Administración</p>
                  <p className="text-[12px] text-slate-500 uppercase">USACH</p>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-cyan-600 uppercase">Técnico Superior</p>
                  <p className="text-[12px] font-bold text-slate-800">Comercio Exterior</p>
                  <p className="text-[12px] text-slate-500 uppercase">INACAP</p>
                </div>
              </div>
            </section>
          </div>

          {/* COLUMNA PRINCIPAL: TRAYECTORIA IMPACTANTE */}
          <div className="md:col-span-8 p-10 md:p-14">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
                <GanttChart className="text-cyan-500" size={28}/> 
                Trayectoria Destacada
              </h2>
              
              <ExperienceItem 
                role="Consultora Senior Supply Chain"
                company="Freelance Autónomo"
                period="2025 — Actualidad"
                description="Consultoría estratégica enfocada en precisión del forecast e integración comercial-operativa. Gestión técnica superior en sourcing internacional y reducción de costos logísticos."
              />

              <ExperienceItem 
                role="Gestor de Abastecimiento & Forecast"
                company="Empack S.A."
                period="2024 — 2025"
                description="Integración de modelos B2B y B2C, reduciendo la incertidumbre operativa y alineando la operación logística con la necesidad del cliente final."
              />
              
              <ExperienceItem 
                role="Senior Planning Analyst / Cluster Lead"
                company="Roche Chile / Ecolab"
                period="2016 — 2024"
                description="Liderazgo regional del proyecto S&OP 2.0 para el clúster sur (6 países). Optimización de forecasting mediante Machine Learning y SAP/APO, garantizando la salud financiera de inventarios críticos."
              />

              <ExperienceItem 
                role="Encargada de Comercio Exterior"
                company="Novaverde (Guallarauco)"
                period="2011 — 2016"
                description="Negociación global con proveedores internacionales y optimización integral de presupuestos anuales del departamento de importaciones."
              />
            </section>

            {/* CALL TO ACTION FINAL */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 text-center">
              <Boxes className="mx-auto text-cyan-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Buscas optimizar tu Cadena de Suministro?</h3>
              <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                Especialista en transformar datos complejos en decisiones de negocio rentables y procesos operativos fluidos.
              </p>
              <div className="flex justify-center gap-4">
                <a href="mailto:marce.lucabeche@gmail.com" className="text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-cyan-700 underline">Agendar Reunión</a>
                <span className="text-slate-300">|</span>
                <a href="/CV_MarcelaLucabecheV.pdf" className="text-xs font-black uppercase tracking-widest text-slate-800 hover:text-cyan-600">Ver Detalles Técnicos</a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-slate-900 p-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] font-bold">
            © 2026 Marcela Lucabeche — Estrategia, Operaciones & S&OP 
          </p>
        </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/56949347209?text=Hola%20Marcela,%20vi%20tu%20sitio%20y%20me%20gustaria%20conversar"
        target="_blank"
        className="fixed bottom-6 right-6 z-[110] bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl border-2 border-white flex items-center justify-center group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          ¿Hablamos?
        </span>
      </a>
      </div>
    </main>
  );
}