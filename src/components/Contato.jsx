import { Phone, Mail, MapPin, ArrowRight, Globe2 } from "lucide-react";

export function Contato() {
    const colors = { brandGreen: "#80C342", brandYellow: "#FFD976" };
    return (
        <section id="contato" className="py-20" style={{ background: colors.brandYellow }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Vamos conversar</h2>
                        <p className="mt-3 text-slate-800">Conte sobre o seu desafio e retornaremos com um diagnóstico inicial gratuito.</p>
                        <div className="mt-6 space-y-3 text-slate-900">
                            <div className="flex items-center gap-3"><Phone className="w-5 h-5" /> +244 939 696 286</div>
                            <div className="flex items-center gap-3"><Mail className="w-5 h-5" /> contato@moxisolucoes.co.ao</div>
                            <div className="flex items-center gap-3"><Globe2 className="w-5 h-5" /> moxisolucoes.co.ao</div>
                            <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Angola • Atendimento internacional</div>
                        </div>
                    </div>

                    <form className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-black/5">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700">Nome</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Empresa</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="Sua empresa" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">E‑mail</label>
                                <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="voce@dominio.com" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Telefone</label>
                                <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="(+244) ..." />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium text-slate-700">Mensagem</label>
                                <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="Nos conte um pouco do projeto..." />
                            </div>
                        </div>
                        <button type="button" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold shadow-sm hover:shadow-md" style={{ background: colors.brandGreen }}>
                            Enviar mensagem <ArrowRight className="w-4 h-4" />
                        </button>
                        <p className="mt-3 text-xs text-slate-500">*Este formulário é demonstrativo.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}