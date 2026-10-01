// ============ terminal: um shell de mentira pra quem gosta de digitar ============
// Os comandos respondem no idioma atual. Nada aqui executa coisa nenhuma de verdade.

const TXT = {
  pt: {
    hello: 'bem-vindo. digite <b>help</b> pra ver os comandos.',
    help: [
      '<b>whoami</b>     quem é o enzo',
      '<b>ls</b>         lista os projetos',
      '<b>open</b> n     abre o projeto n',
      '<b>stack</b>      com o que eu trabalho',
      '<b>contato</b>    como falar comigo',
      '<b>sudo contratar</b>',
      '<b>clear</b>      limpa a tela',
    ],
    whoami: 'enzo brandão · dev full-stack · praia grande, sp<br>estudante de ADS na FIAP · freelance · inglês fluente',
    stack: 'front: html, css, tailwind, javascript, typescript, three.js, glsl<br>back: node.js, java, python, sql/oracle<br>outros: wordpress/elementor, git, linux',
    lsHead: 'projetos/',
    openUsage: 'uso: open 1',
    opening: n => `abrindo ${n}…`,
    contato: 'e-mail: enzobtsimoes@gmail.com<br>linkedin: linkedin.com/in/enzo-brandao-simoes<br>github: github.com/enzoka27',
    hire: 'senha do sudo: ********<br><span class="ok">permissão concedida.</span> e-mail copiado. me manda uma mensagem :)',
    hireFail: 'permissão concedida. e-mail: enzobtsimoes@gmail.com',
    passwd: 'boa tentativa. o OWASP A01 mandou um abraço.',
    nmap: 'PORT     STATE   SERVICE<br>443/tcp  open    portfolio<br>22/tcp   closed  ssh (boa tentativa)',
    rm: 'nada é apagado aqui. isso é coisa do <b>vigia</b>.',
    exit: 'não tem saída. mas tem contato: digite <b>contato</b>.',
    notFound: c => `comando não encontrado: ${c}. tenta <b>help</b>.`,
    pwd: '/home/enzo/praia-grande',
  },
  en: {
    hello: 'welcome. type <b>help</b> to see the commands.',
    help: [
      '<b>whoami</b>     who enzo is',
      '<b>ls</b>         list projects',
      '<b>open</b> n     open project n',
      '<b>stack</b>      what I work with',
      '<b>contact</b>    how to reach me',
      '<b>sudo hire</b>',
      '<b>clear</b>      clear the screen',
    ],
    whoami: 'enzo brandão · full-stack dev · praia grande, brazil<br>Systems Dev student at FIAP · freelance · fluent English',
    stack: 'front: html, css, tailwind, javascript, typescript, three.js, glsl<br>back: node.js, java, python, sql/oracle<br>other: wordpress/elementor, git, linux',
    lsHead: 'projects/',
    openUsage: 'usage: open 1',
    opening: n => `opening ${n}…`,
    contato: 'e-mail: enzobtsimoes@gmail.com<br>linkedin: linkedin.com/in/enzo-brandao-simoes<br>github: github.com/enzoka27',
    hire: 'sudo password: ********<br><span class="ok">permission granted.</span> e-mail copied. send me a message :)',
    hireFail: 'permission granted. e-mail: enzobtsimoes@gmail.com',
    passwd: 'nice try. OWASP A01 says hi.',
    nmap: 'PORT     STATE   SERVICE<br>443/tcp  open    portfolio<br>22/tcp   closed  ssh (nice try)',
    rm: 'nothing gets deleted here. that’s <b>vigia</b>’s job.',
    exit: 'there’s no exit. there’s a contact though: type <b>contact</b>.',
    notFound: c => `command not found: ${c}. try <b>help</b>.`,
    pwd: '/home/enzo/praia-grande',
  },
};

/**
 * @param root    elemento .term
 * @param o.lang  () => 'pt' | 'en'
 * @param o.projects [{ name, href?, target? }]  href abre em nova aba, target rola até a seção
 */
export function createTerminal(root, { lang, projects, onCmd = () => {} }) {
  const out = root.querySelector('.term-out'), input = root.querySelector('.term-in');
  const hist = []; let hi = 0;
  const T = () => TXT[lang()] || TXT.pt;
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const print = (html, cls = '') => { const p = document.createElement('p'); p.className = cls; p.innerHTML = html; out.append(p); out.scrollTop = out.scrollHeight; };
  const scrollTo = sel => { const el = document.querySelector(sel); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  function run(raw) {
    const line = raw.trim(); if (!line) return;
    print(`<span class="pr">enzo@pg:~$</span> ${esc(line)}`, 'cmd');
    hist.push(line); hi = hist.length;
    const [c, ...args] = line.toLowerCase().split(/\s+/);
    const t = T();
    onCmd(c);
    switch (c) {
      case 'help': case 'ajuda': case '?': t.help.forEach(l => print(l)); break;
      case 'whoami': case 'sobre': case 'about': print(t.whoami); break;
      case 'stack': print(t.stack); break;
      case 'ls': case 'projetos': case 'projects':
        print(t.lsHead); projects.forEach((p, i) => print(`  ${i + 1}  ${esc(p.name)}`)); break;
      case 'open': case 'abrir': case 'cd': {
        const n = parseInt(args[0], 10), p = projects[n - 1];
        if (!p) { print(t.openUsage); break; }
        print(t.opening(esc(p.name)));
        setTimeout(() => { if (p.href) window.open(p.href, '_blank', 'noopener'); else if (p.target) scrollTo(p.target); }, 350);
        break;
      }
      case 'contato': case 'contact': print(t.contato); break;
      case 'sudo':
        if (/contratar|hire/.test(args.join(' '))) {
          navigator.clipboard ? navigator.clipboard.writeText('enzobtsimoes@gmail.com').then(() => print(t.hire), () => print(t.hireFail)) : print(t.hireFail);
        } else print(t.notFound('sudo ' + esc(args.join(' '))));
        break;
      case 'cat': print(args.join(' ').includes('passwd') ? t.passwd : t.notFound('cat ' + esc(args.join(' ')))); break;
      case 'nmap': print(t.nmap); break;
      case 'rm': print(t.rm); break;
      case 'exit': case 'sair': case 'quit': print(t.exit); break;
      case 'pwd': print(t.pwd); break;
      case 'date': print(new Date().toLocaleString(lang() === 'en' ? 'en-US' : 'pt-BR')); break;
      case 'echo': print(esc(line.slice(5))); break;
      case 'clear': case 'cls': out.innerHTML = ''; break;
      default: print(t.notFound(esc(c)));
    }
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { run(input.value); input.value = ''; }
    else if (e.key === 'ArrowUp') { if (hi > 0) input.value = hist[--hi]; e.preventDefault(); }
    else if (e.key === 'ArrowDown') { input.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ''); e.preventDefault(); }
  });
  root.addEventListener('pointerdown', () => setTimeout(() => input.focus({ preventScroll: true }), 0));

  // abertura: digita "whoami" sozinho a primeira vez que aparece
  let intro = false;
  function boot() {
    if (intro) return; intro = true;
    print(T().hello, 'dim');
    const cmd = 'whoami'; let i = 0;
    const type = () => { input.value = cmd.slice(0, ++i); if (i < cmd.length) setTimeout(type, 110); else setTimeout(() => { run(cmd); input.value = ''; }, 300); };
    setTimeout(type, 700);
  }
  return { boot, reset() { if (!intro) return; out.innerHTML = ''; intro = false; boot(); } };
}
