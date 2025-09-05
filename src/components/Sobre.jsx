import { CheckCircle2, Sparkles } from "lucide-react";

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

export function Sobre() {
    return (
        <section id="sobre" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle eyebrow="Quem somos" title="Tecnologia com proximidade humana" subtitle="Unimos estratégia, design e engenharia para acelerar negócios com segurança e qualidade." />
                <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">Nossa missão</h3>
                        <p className="mt-2 text-slate-600">Gerar valor sustentável por meio de soluções digitais confiáveis, escaláveis e fáceis de usar.</p>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                            {[
                                "Atendimento consultivo",
                                "Processo claro e transparente",
                                "Qualidade mensurada por métricas",
                                "Parcerias de longo prazo",
                            ].map((b) => (
                                <div key={b} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span className="text-slate-700">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900">Setores atendidos</h3>
                        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                            {[
                                "Indústria & Logística",
                                "Serviços Financeiros",
                                "Varejo & E‑commerce",
                                "Educação & Saúde",
                            ].map((s) => (
                                <div key={s} className="p-3 rounded-xl border border-slate-200">{s}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}