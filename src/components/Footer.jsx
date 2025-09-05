import { Phone, Mail, Globe2 } from "lucide-react";

// Componente Logo reutilizado
function Logo() {
    const colors = { brandGreen: "#80C342", brandGray: "#495D47" };
    return (
        <div className="flex items-end gap-2 select-none">
            <div className="flex items-center">
                <span className="text-4xl font-black tracking-tight" style={{ color: "#FFFFFF" }}>m</span>
                <span className="text-4xl font-black tracking-tight" style={{ color: colors.brandGreen }}>S</span>
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Logo />
                        <p className="mt-3 text-sm text-slate-300">Moxi Soluções — a primeira solução. Tecnologia com confiança, seriedade e segurança.</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Empresa</h5>
                        <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
                            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
                            <li><a href="#cases" className="hover:underline">Cases</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold">Contato</h5>
                        <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +244 939 696 286</li>
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@moxisolucoes.co.ao</li>
                            <li className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> moxisolucoes.co.ao</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold">Legal</h5>
                        <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                            <li>Termos de uso</li>
                            <li>Privacidade</li>
                            <li>© {new Date().getFullYear()} Moxi Soluções</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}