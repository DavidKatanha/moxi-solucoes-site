import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Servicos } from './components/Servicos';
import { Diferenciais } from './components/Diferenciais';
import { Cases } from './components/Cases';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen antialiased bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Cases />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;