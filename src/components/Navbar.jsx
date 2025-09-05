import React from "react";
import { ArrowRight, Menu, X } from "lucide-react";

// Componente Logo (pode ficar aqui ou em seu próprio arquivo se preferir)
function Logo() {
    const colors = { brandGreen: "#80C342", brandGray: "#495D47" };
    return (
        <div className="flex items-end gap-2 select-none">
            <div className="flex items-center">
                <span className="text-4xl font-black tracking-tight" style={{ color: colors.brandGray }}>m</span>
                <span className="text-4xl font-black tracking-tight" style={{ color: colors.brandGreen }}>S</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-base font-semibold">
                <span className="px-2 rounded-md" style={{ background: colors.brandGreen, color: colors.brandGray }}>moxi</span>
                <span className="text-slate-700">soluções</span>
            </div>
        </div>
    );
}

export function Navbar() {
    const [open, setOpen] = React.useState(false);
    const links = [
        { href: "#sobre", label: "Sobre" },
        { href: "#servicos", label: "Serviços" },
        { href: "#diferenciais", label: "Diferenciais" },
        { href: "#cases", label: "Cases" },
        { href: "#contato", label: "Contato" },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center"><Logo /></a>
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map(l => (
                            <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">{l.label}</a>
                        ))}
                        <a href="#contato" className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            Fale conosco <ArrowRight className="w-4 h-4" />
                        </a>
                    </nav>
                    <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl border border-slate-200">
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                {open && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col gap-2">
                            {links.map(l => (
                                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">{l.label}</a>
                            ))}
                            <a href="#contato" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold px-4 py-2 rounded-xl">
                                Fale conosco <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}