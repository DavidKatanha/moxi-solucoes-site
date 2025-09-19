import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserRound,
  UserCog,
  CalendarCheck2,
  BookOpen,
  ClipboardList,
  NotebookPen,
  CalendarDays,
  CreditCard,
  Library,
  LogOut,
  Bell,
  Search,
  CalendarRange,
  School,
  Check,
} from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 shadow-sm focus:border-moxiGreen focus:outline-none focus:ring-2 focus:ring-moxiGreen/30";
const labelClasses = "text-xs font-semibold uppercase tracking-wide text-slate-500";

const navSections = [
  {
    title: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Visão geral", active: true },
      { icon: GraduationCap, label: "Acadêmico" },
      { icon: Users, label: "Estudantes" },
      { icon: UserRound, label: "Responsáveis" },
    ],
  },
  {
    title: "Gestão",
    items: [
      { icon: UserCog, label: "Professores" },
      { icon: CalendarCheck2, label: "Presenças" },
      { icon: BookOpen, label: "Syllabus" },
      { icon: ClipboardList, label: "Avaliações" },
      { icon: NotebookPen, label: "Rotina" },
      { icon: CalendarDays, label: "Eventos" },
      { icon: CreditCard, label: "Pagamentos" },
      { icon: Library, label: "Biblioteca" },
    ],
  },
];

const academicYears = [
  "2024 - 2025",
  "2023 - 2024",
  "2022 - 2023",
];

const sessions = [
  "1º Trimestre",
  "2º Trimestre",
  "3º Trimestre",
];

const courses = [
  "Ensino Fundamental",
  "Ensino Médio",
  "Técnico em Informática",
];

const classGroups = [
  "6º Ano A",
  "6º Ano B",
  "9º Ano",
  "1ª Série",
];

const teachers = [
  "Carla Souza",
  "Eduardo Pires",
  "Viviane Lima",
  "Rogério Mota",
];

const semesters = [
  "Semestre 1",
  "Semestre 2",
  "Recuperação",
];

function NavSection({ title, items }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>
      <ul className="mt-3 space-y-1">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.label}>
              <button
                type="button"
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-moxiGreen/10 text-moxiGreen"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Panel({ title, description, children, accent }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {description ? (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        ) : null}
      </div>
      <div className="mt-4 flex-1 space-y-4 text-sm text-slate-600">
        {children}
      </div>
      {accent ? <div className="mt-6 text-xs text-slate-400">{accent}</div> : null}
    </div>
  );
}

export function AcademicDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-slate-200 bg-white px-6 py-8 lg:flex lg:flex-col">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <School className="h-6 w-6 text-moxiGreen" />
            <span>TransformaEdu</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Painel administrativo
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ano letivo
              </p>
              <p className="text-sm font-semibold text-slate-900">2024 - 2025</p>
            </div>
            <CalendarRange className="ml-auto h-5 w-5 text-slate-400" />
          </div>
          <nav className="mt-10 flex-1 space-y-8">
            {navSections.map((section) => (
              <NavSection key={section.title} {...section} />
            ))}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Outro
              </p>
              <button
                type="button"
                className="mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
              >
                <LogOut className="h-4 w-4" />
                Sair da conta
              </button>
            </div>
          </nav>
          <div className="mt-auto rounded-2xl bg-moxiGreen/10 p-4 text-sm text-moxiGreen">
            <p className="font-semibold">Precisa de ajuda?</p>
            <p className="mt-1 text-xs text-moxiGreen/80">
              Fale com o time pedagógico para apoiar as configurações iniciais.
            </p>
          </div>
        </aside>
        <div className="flex flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Dashboard · Acadêmico
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-slate-900">
                Criar sessão acadêmica
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Pesquisar no painel"
                  className="w-64 rounded-full border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-sm text-slate-600 focus:border-moxiGreen focus:bg-white focus:outline-none focus:ring-2 focus:ring-moxiGreen/20"
                />
              </div>
              <button
                type="button"
                className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-500 hover:text-slate-700"
                aria-label="Notificações"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-rose-500" />
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right text-sm">
                  <p className="font-semibold text-slate-900">Admin</p>
                  <p className="text-xs text-slate-500">Helena Martins</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-moxiGreen to-moxiYellow" />
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                  Início
                </span>
                <span className="text-slate-400">/</span>
                <span>Acadêmico</span>
                <span className="text-slate-400">/</span>
                <span className="font-semibold text-slate-700">
                  Sessões acadêmicas
                </span>
              </div>

              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">
                      Configurações Acadêmicas
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-500">
                      Configure períodos, semestres, cursos e equipes docentes para garantir um calendário
                      acadêmico organizado e pronto para o início das aulas.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-moxiGreen hover:text-moxiGreen"
                  >
                    <Check className="h-4 w-4" />
                    Checklist de implantação
                  </button>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  <Panel
                    title="Criar período letivo"
                    description="Selecione o intervalo do ano escolar para gerar uma nova sessão."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="academicYear">
                        Ano letivo
                      </label>
                      <select id="academicYear" className={inputClasses} defaultValue="2024 - 2025">
                        {academicYears.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="sessionName">
                        Nome da sessão
                      </label>
                      <input id="sessionName" type="text" className={inputClasses} placeholder="Ex.: Ano letivo 2024" />
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-moxiGreen px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Salvar período
                    </button>
                  </Panel>

                  <Panel
                    title="Consultar por sessão"
                    description="Veja turmas e disciplinas cadastradas para cada sessão ativa."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="sessionSelect">
                        Selecionar sessão
                      </label>
                      <select id="sessionSelect" className={inputClasses} defaultValue="1º Trimestre">
                        {sessions.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="sessionSummary">
                        Resumo
                      </label>
                      <textarea
                        id="sessionSummary"
                        rows={3}
                        className={`${inputClasses} resize-none`}
                        placeholder="Notas gerais, eventos importantes ou decisões pedagógicas."
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-moxiGreen hover:text-moxiGreen"
                    >
                      Ver detalhes
                    </button>
                  </Panel>

                  <Panel
                    title="Criar semestre para a sessão atual"
                    description="Defina a duração do semestre vigente e vincule-o ao calendário."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="semesterName">
                        Nome do semestre
                      </label>
                      <select id="semesterName" className={inputClasses} defaultValue="Semestre 1">
                        {semesters.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClasses} htmlFor="startDate">
                          Início
                        </label>
                        <input id="startDate" type="date" className={inputClasses} defaultValue="2024-02-05" />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClasses} htmlFor="endDate">
                          Término
                        </label>
                        <input id="endDate" type="date" className={inputClasses} defaultValue="2024-06-30" />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Criar semestre
                    </button>
                  </Panel>

                  <Panel
                    title="Tipo de frequência"
                    description="Escolha como a presença será registrada ao longo da sessão."
                  >
                    <div className="space-y-3 text-sm">
                      <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <input type="radio" name="attendance" defaultChecked className="mt-1" />
                        <span>
                          <span className="block font-semibold text-slate-900">Chamada diária</span>
                          <span className="text-xs text-slate-500">
                            Registro único por dia, indicado para educação infantil e anos iniciais.
                          </span>
                        </span>
                      </label>
                      <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3">
                        <input type="radio" name="attendance" className="mt-1" />
                        <span>
                          <span className="block font-semibold text-slate-900">Por aula</span>
                          <span className="text-xs text-slate-500">
                            Marcação a cada disciplina, garantindo detalhamento por professor.
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                      <strong className="font-semibold text-slate-700">Dica:</strong> defina a metodologia alinhada ao planejamento
                      pedagógico da escola.
                    </div>
                  </Panel>

                  <Panel
                    title="Criar turma"
                    description="Organize a estrutura de turmas para o período vigente."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="className">
                        Nome da turma
                      </label>
                      <input id="className" type="text" className={inputClasses} placeholder="Ex.: 9º Ano A" />
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="classCourse">
                        Curso vinculado
                      </label>
                      <select id="classCourse" className={inputClasses} defaultValue="Ensino Fundamental">
                        {courses.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-moxiGreen px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Adicionar turma
                    </button>
                  </Panel>

                  <Panel
                    title="Criar seção"
                    description="Divida turmas extensas em seções menores para acompanhar o progresso."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="sectionName">
                        Nome da seção
                      </label>
                      <input id="sectionName" type="text" className={inputClasses} placeholder="Ex.: Seção Azul" />
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="sectionClass">
                        Turma
                      </label>
                      <select id="sectionClass" className={inputClasses} defaultValue="6º Ano A">
                        {classGroups.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-moxiGreen hover:text-moxiGreen"
                    >
                      Criar seção
                    </button>
                  </Panel>

                  <Panel
                    title="Atribuir professor"
                    description="Vincule docentes às turmas confirmadas para a sessão."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="teacherSelect">
                        Professor responsável
                      </label>
                      <select id="teacherSelect" className={inputClasses} defaultValue="Carla Souza">
                        {teachers.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="teacherClass">
                        Turma
                      </label>
                      <select id="teacherClass" className={inputClasses} defaultValue="9º Ano">
                        {classGroups.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Atribuir docente
                    </button>
                  </Panel>

                  <Panel
                    title="Criar curso"
                    description="Cadastre novas trilhas de ensino e personalize seus componentes."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="courseType">
                        Tipo de curso
                      </label>
                      <select id="courseType" className={inputClasses} defaultValue="Ensino Fundamental">
                        {courses.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="courseName">
                        Nome
                      </label>
                      <input id="courseName" type="text" className={inputClasses} placeholder="Ex.: Integral Bilíngue" />
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-moxiGreen hover:text-moxiGreen"
                    >
                      Salvar curso
                    </button>
                  </Panel>

                  <Panel
                    title="Vincular seção ao semestre"
                    description="Controle a lotação e a disponibilidade de vagas por turma."
                  >
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="semesterSelect">
                        Semestre
                      </label>
                      <select id="semesterSelect" className={inputClasses} defaultValue="Semestre 1">
                        {semesters.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={labelClasses} htmlFor="capacity">
                        Vagas disponíveis
                      </label>
                      <input id="capacity" type="number" className={inputClasses} placeholder="Ex.: 35" />
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-xl bg-moxiGreen px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Atualizar vínculo
                    </button>
                  </Panel>
                </div>

                <div className="mt-8 grid gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Entregas finais e consolidação de notas
                    </h3>
                    <p className="mt-2 text-xs text-slate-500">
                      Defina regras para o fechamento das notas e comunique aos professores eventuais bloqueios.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Permitir envio de notas finais
                        </p>
                        <p className="text-xs text-slate-500">
                          Professores podem encerrar o diário e enviar notas para a secretaria.
                        </p>
                      </div>
                      <div className="inline-flex h-6 w-11 items-center rounded-full bg-moxiGreen">
                        <span className="ml-6 inline-block h-5 w-5 rounded-full bg-white shadow" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Bloquear alterações após revisão
                        </p>
                        <p className="text-xs text-slate-500">
                          Garante que apenas a coordenação faça ajustes depois do fechamento.
                        </p>
                      </div>
                      <div className="inline-flex h-6 w-11 items-center rounded-full bg-slate-300">
                        <span className="ml-1 inline-block h-5 w-5 rounded-full bg-white shadow" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AcademicDashboard;
