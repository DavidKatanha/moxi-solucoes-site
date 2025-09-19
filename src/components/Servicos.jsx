import { motion as Motion } from 'framer-motion';
import { BadgeCheck, Sparkles } from "lucide-react";

// Você pode mover este componente para seu próprio arquivo: src/components/SectionTitle.jsx
function SectionTitle({ eyebrow, title, subtitle }) {
    return (
        <div className="text-center max-w-3xl mx-auto">
            {eyebrow && (
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600">
                    <Sparkles className="w-4 h-4" /> {eyebrow}
                </p>
            )}
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
        </div>
    );
}

export function Servicos() {
    const items = [
        { title: "Consultoria & Descoberta", desc: "Mapeamos necessidades, riscos e oportunidades para orientar decisões com dados." },
        { title: "Desenvolvimento de Sistemas", desc: "Aplicações web e mobile escaláveis, com UX amigável e foco em desempenho." },
        { title: "Cloud & DevOps", desc: "Arquitetura, automação de pipelines, observabilidade e alta disponibilidade." },
        { title: "Cibersegurança", desc: "Políticas, conformidade, SSO, backups, testes de intrusão e resposta a incidentes." },
        { title: "Dados & IA", desc: "Dashboards, análise preditiva, RPA e assistentes inteligentes para times." },
        { title: "Suporte Gerenciado 24/7", desc: "SLA claro, comunicação transparente e métricas de qualidade em tempo real." },
    ];
    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle eyebrow="O que fazemos" title="Serviços que geram valor" subtitle="Entrega excelente com seriedade, segurança e proximidade." />
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((it) => (
                        <Motion.div key={it.title} whileHover={{ y: -4 }} className="p-6 rounded-3xl border border-slate-200 shadow-sm bg-white">
                            <h3 className="text-lg font-bold text-slate-900">{it.title}</h3>
                            <p className="mt-2 text-slate-600">{it.desc}</p>
                            <div className="mt-4 inline-flex items-center gap-2 text-slate-900 font-semibold">
                                <BadgeCheck className="w-4 h-4" /> Confiança garantida
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
