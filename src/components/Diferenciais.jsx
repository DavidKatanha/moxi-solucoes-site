import { ShieldCheck } from "lucide-react";

// Este é um componente de título que você pode mover para o próprio arquivo depois
function SectionTitle({ eyebrow, title }) {
    return (
        <div className="text-center max-w-3xl mx-auto">
            {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-600">
                    {eyebrow}
                </p>
            )}
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{title}</h2>
        </div>
    );
}


export function Diferenciais() {
    const difs = [
        { title: "Soluções sob medida", desc: "Nada de pacotes engessados. Desenhamos o que seu negócio precisa." },
        { title: "Time sênior", desc: "Especialistas com track record comprovado e foco em resultado." },
        { title: "Segurança by design", desc: "Privacidade, criptografia e governança em todas as camadas." },
        { title: "Parceria transparente", desc: "Comunicação clara, indicadores e retorno de valor constante." },
    ];
    return (
        <section id="diferenciais" className="py-20" style={{ background: "#fafaf9" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle eyebrow="Por que a Moxi" title="Confiança que se constrói no dia a dia" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {difs.map((d) => (
                        <div key={d.title} className="p-6 rounded-3xl border border-slate-200 bg-white">
                            <ShieldCheck className="w-6 h-6 text-slate-900" />
                            <h4 className="mt-3 font-bold text-slate-900">{d.title}</h4>
                            <p className="mt-1 text-slate-600 text-sm">{d.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}