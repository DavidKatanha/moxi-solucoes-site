// Componente de título reutilizado
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

export function Cases() {
    const cases = [
        { title: "Implantação de Cloud híbrida", result: "+42% de desempenho e -30% de custos" },
        { title: "Portal do Cliente com SSO", result: "Aumento de 3x no autoatendimento" },
        { title: "Automação de processos", result: "Redução de 55% no tempo operacional" },
    ];
    return (
        <section id="cases" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle eyebrow="Resultados" title="Alguns cases e impactos" />
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    {cases.map((c) => (
                        <div key={c.title} className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                            <h4 className="font-bold text-slate-900">{c.title}</h4>
                            <p className="mt-2 text-slate-600">{c.result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}