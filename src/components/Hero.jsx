import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Building2, Users, Bot, Globe2, Lock, ArrowRight } from "lucide-react"; // <--- CORREÇÃO AQUI

export function Hero() {
    const colors = { brandGreen: "#80C342", brandYellow: "#FFD976" };
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${colors.brandYellow} 0%, #fff 60%)` }} />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600">
                            <ShieldCheck className="w-4 h-4" /> Confiança • Seriedade • Segurança
                        </p>
                        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                            Moxi Soluções — <span className="text-slate-800">a primeira solução</span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-700 max-w-2xl">
                            Somos uma empresa de tecnologia e serviços focada em entregar resultados com qualidade, transparência e proximidade. Projetamos soluções modernas, amigáveis e escaláveis para o seu negócio.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#contato" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:shadow-md transition-shadow" style={{ background: colors.brandGreen }}>
                                Solicitar proposta <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#servicos" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 text-slate-800 font-semibold bg-white hover:bg-slate-50">
                                Ver serviços
                            </a>
                        </div>
                        <div className="mt-10 grid grid-cols-3 sm:flex sm:flex-wrap sm:gap-6 text-slate-600">
                            {["SLA garantido", "Equipe sênior", "Atendimento 24/7"].map((t) => (
                                <div key={t} className="flex items-center gap-2 mr-6 mt-3">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <span className="text-sm font-medium">{t}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-black/5">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl" style={{ background: colors.brandGreen }}>
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Plataformas seguras</h3>
                                    <p className="text-slate-600">Arquiteturas resilientes com foco em governança e compliance.</p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                                {[
                                    { icon: <Building2 className="w-5 h-5" />, title: "Infra & Cloud" },
                                    { icon: <Users className="w-5 h-5" />, title: "Outsourcing" },
                                    { icon: <Bot className="w-5 h-5" />, title: "Automação & IA" },
                                    { icon: <Globe2 className="w-5 h-5" />, title: "Web & Apps" },
                                ].map((i) => (
                                    <div key={i.title} className="flex items-center gap-2 p-3 rounded-xl border border-slate-200">
                                        {i.icon}
                                        <span className="font-semibold text-slate-800">{i.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}