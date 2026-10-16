const projects=[
 {id:'03',short:'RB Esportivo',title:'RB Gerenciamento Esportivo',label:'Gestão de competições',image:'assets/rb.png',url:'https://rbgerenciamentoesportivo.com.br/',color:'#4eaf57',challenge:'Organizar campeonatos, equipes, atletas e partidas sem depender de planilhas e informações espalhadas.',solution:'Uma operação centralizada para inscrições, confrontos, resultados, classificações e súmulas digitais.',result:'Mais agilidade na organização e uma experiência clara para administrar cada competição.'},
 {id:'04',short:'PCH Lajeado',title:'PCH Lajeado',label:'Informação & transparência',image:'assets/pch.png',url:'https://pchlajeado.com.br/',color:'#3c94d6',challenge:'Comunicar a atuação da central hidrelétrica e tornar informações institucionais acessíveis.',solution:'Um portal organizado que aproxima a empresa de comunidades, parceiros e interessados.',result:'Presença confiável e um canal permanente de transparência e comunicação.'},
 {id:'05',short:'SOS Pneus',title:'SOS Pneus',label:'Auto center & presença comercial',image:'assets/case-sos-pneus.png',url:'https://sospneus-c5925.web.app/',color:'#ef4333',challenge:'Transformar uma presença digital antiga em uma vitrine moderna para pneus, serviços automotivos e atendimento local.',solution:'Uma experiência de alto impacto com fotografia automotiva própria, navegação direta, catálogo integrado e contato rápido pelo WhatsApp.',result:'Uma marca mais profissional, serviços fáceis de entender e um caminho mais curto entre a visita e o orçamento.'},
 {id:'06',short:'Dra. Lovaine',title:'Dra. Lovaine Carriel',label:'Advocacia & presença profissional',image:'assets/case-dra-lovaine.png',url:'https://dralovainecarriel.com.br/',color:'#b98a52',challenge:'Comunicar autoridade jurídica sem perder proximidade, clareza e acolhimento no primeiro contato.',solution:'Um site editorial e elegante, organizado por áreas de atuação, escritórios e agendamento, com identidade visual coerente em todos os detalhes.',result:'Mais confiança antes da conversa, melhor apresentação profissional e acesso simples ao atendimento em Turvo e Guarapuava.'}
];
projects.push(
  {title:'Na Trave',label:'Sistema de gestão esportiva',image:'assets/na-trave-dashboard-v2.jpg',url:'https://na-trave-fut-2026.web.app/',challenge:'Organizar o futebol entre amigos sem espalhar partidas, escalações, estatísticas e pagamentos em controles separados.',solution:'Um sistema com gestão de jogadores, sorteio equilibrado de times, escalações em campo, placar, lances, rankings, mensalidades e exportação de artes.',result:'Reunir a rotina esportiva e o caixa do grupo em uma aplicação com acesso por organização. As telas apresentadas usam os dados de demonstração do projeto.'},
  {title:'Planejamento financeiro',label:'Aplicação web e Android',image:'assets/financeiro-despesas.png',url:'https://controle-financeiro-rafael.web.app/',challenge:'Dar uma visão clara de receitas, despesas, compromissos e objetivos financeiros sem depender de controles dispersos.',solution:'Aplicações em React e Flutter conectadas ao mesmo Firebase, com lançamentos, categorias, recorrências, previsão, planejamento, dívidas, metas e reserva.',result:'Acompanhar o orçamento no computador ou no Android, consultar relatórios e exportar dados em PDF e CSV. As telas apresentadas pertencem a uma conta de teste.'},
  {title:'Manuela Lima Pereira',label:'Site para advocacia previdenciária',image:'assets/manuela-previdenciario.jpg',url:'https://manuela-previdenciario-rafar.web.app/',challenge:'Apresentar os serviços previdenciários com clareza para pessoas que chegam com dúvidas sobre benefícios e atendimento.',solution:'Site com identidade institucional, navegação por situação do visitante, áreas de atuação, informações profissionais e formulário para organizar uma solicitação de consulta.',result:'Facilitar a compreensão dos serviços e preparar um contato com contexto, respeitando o caráter informativo da comunicação jurídica.'},
  {title:'Hermes Radar',label:'Automação e central operacional',image:'assets/hermes-radar.jpg',url:null,challenge:'Acompanhar tarefas de automação e etapas comerciais com visibilidade sobre filas, execução e pontos de revisão.',solution:'Central de agentes com tarefas, Kanban, leads, aprovações e acompanhamento da execução, integrada ao Hermes local e ao fluxo comercial por WhatsApp.',result:'Centralizar o acompanhamento e manter mensagens e resultados sujeitos à revisão. A imagem usa exemplos fictícios, sem sessão de WhatsApp ou dados de clientes.'}
);

'use strict';
projects.push({title:'Central WhatsApp',label:'Atendimento compartilhado para empresas',image:'assets/central-atendimento-v2.jpg',url:null,challenge:'Organizar várias pessoas atendendo pelo WhatsApp, com distribuição de conversas, contexto e responsabilidades definidos.',solution:'Plataforma multiempresa com autenticação, isolamento de dados, filas, responsáveis, transferências, contatos, setores, mídia, respostas rápidas e indicadores.',result:'Acompanhar atendimentos e a operação da equipe em uma aplicação React com Supabase e Evolution API. As telas usam exclusivamente as contas e os dados de teste do projeto.'});
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

// Navigation remains usable without JavaScript; enhance it only after initialization.
document.documentElement.classList.add('js');
const menuButton = $('#menu-button');
const mainNav = $('#main-nav');
function setMenu(open, restoreFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mainNav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
matchMedia('(min-width:901px)').addEventListener('change', () => setMenu(false));

// Case details use a native dialog: keyboard focus is contained and Escape closes it.
const dialog = $('#project-dialog');
$$('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[Number(button.dataset.project)];
  $('#dialog-label').textContent = project.label;
  $('#dialog-title').textContent = project.title;
  $('#dialog-image').src = project.image;
  $('#dialog-image').alt = `Página inicial de ${project.title}`;
  $('#dialog-link').href = project.url || `https://wa.me/5542988369870?text=${encodeURIComponent('Olá, Rafael! Quero conversar sobre o projeto '+project.title+'.')}`;
  $('#dialog-link').innerHTML = project.url ? 'Visitar projeto <span>↗</span>' : 'Conversar sobre o projeto <span>↗</span>';
  $('#dialog-story').replaceChildren();
  [['DESAFIO',project.challenge],['SOLUÇÃO',project.solution],['OBJETIVO',project.result]].forEach(([label,text]) => {
    const paragraph = document.createElement('p');
    const small = document.createElement('small');
    small.textContent = label;
    paragraph.append(small,document.createTextNode(text));
    $('#dialog-story').append(paragraph);
  });
  setMenu(false);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
}));
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});

// Hide the mobile shortcut when its full contact section is on screen.
if ('IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle('contact-visible',entry.isIntersecting);
  },{threshold:0});
  contactObserver.observe($('#contato'));
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      $$('#main-nav a').forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active',current);
        if (current) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    });
  },{rootMargin:'-15% 0px -60% 0px'});
  $$('section[id]').forEach(section => sectionObserver.observe(section));
}

// Each featured system has its own independent, keyboard-accessible screenshot gallery.
$$('.system-gallery').forEach(gallery => {
  const tabs = [...gallery.querySelectorAll('[role="tab"]')];
  const panel = gallery.querySelector('[role="tabpanel"]');
  const image = gallery.querySelector('.screen-image');
  const caption = gallery.querySelector('figcaption');
  const enlarge = gallery.querySelector('.screen-enlarge');
  function selectScreen(tab,focus = false) {
    tabs.forEach(button => {
      const selected = button === tab;
      button.setAttribute('aria-selected',String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    image.src = tab.dataset.screen;
    image.alt = tab.dataset.alt;
    // Dimensions follow the selected source to prevent distortion.
    image.removeAttribute('width');
    image.removeAttribute('height');
    enlarge.href = tab.dataset.screen;
    caption.textContent = tab.dataset.caption;
    panel.setAttribute('aria-labelledby',tab.id);
    if(focus) tab.focus();
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',()=>selectScreen(tab));
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      if(event.key==='Home')next=0;
      if(event.key==='End')next=tabs.length-1;
      if(next!==undefined){event.preventDefault();selectScreen(tabs[next],true);}
    });
  });
});

$$('.system-gallery').forEach(gallery=>{
 const src=gallery.querySelector('.screen-image').getAttribute('src');
 gallery.querySelectorAll('.screen-tabs button').forEach(tab=>{const selected=tab.dataset.screen===src;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
});
const imageViewer=$('#image-viewer');
const viewerImage=$('#viewer-image');
const viewerFit=$('#viewer-fit');
function resetImageZoom(){imageViewer.classList.remove('original-size');viewerFit.textContent='Tamanho original';viewerFit.setAttribute('aria-pressed','false');}
$$('.screen-enlarge').forEach(link=>link.addEventListener('click',event=>{
 event.preventDefault();const image=link.querySelector('img');const gallery=link.closest('.system-gallery');
 viewerImage.src=link.getAttribute('href');viewerImage.alt=image.alt;$('#viewer-title').textContent=link.closest('.system-case').querySelector('h3').textContent;$('#viewer-caption').textContent=gallery.querySelector('figcaption').textContent;
 const viewerTabs=$('#viewer-tabs');viewerTabs.replaceChildren();
 gallery.querySelectorAll('.screen-tabs button').forEach(source=>{
  const button=document.createElement('button');button.type='button';button.textContent=source.textContent;
  button.setAttribute('aria-pressed',String(source.dataset.screen===viewerImage.getAttribute('src')));
  button.addEventListener('click',()=>{source.click();viewerImage.src=source.dataset.screen;viewerImage.alt=source.dataset.alt;$('#viewer-caption').textContent=source.dataset.caption;resetImageZoom();[...viewerTabs.children].forEach(b=>b.setAttribute('aria-pressed',String(b===button)));});
  viewerTabs.append(button);
 });
 resetImageZoom();imageViewer.showModal();document.body.classList.add('modal-open');
}));
$('#viewer-close').addEventListener('click',()=>imageViewer.close());
imageViewer.addEventListener('close',()=>{document.body.classList.remove('modal-open');resetImageZoom();});
viewerFit.addEventListener('click',()=>{const original=imageViewer.classList.toggle('original-size');viewerFit.textContent=original?'Ajustar à tela':'Tamanho original';viewerFit.setAttribute('aria-pressed',String(original));});

// Motion is decorative: content remains visible without JavaScript or with reduced motion.
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const revealTargets = $$('.system-gallery, .project-card, .service, .process-grid li');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, {threshold: 0.08, rootMargin: '0px 0px 30px 0px'});
  revealTargets.forEach((element,index) => {
    element.setAttribute('data-reveal','');
    element.style.setProperty('--reveal-delay',`${index < 3 ? index*60 : 0}ms`);
    revealObserver.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
}
if (!reduceMotion.matches && matchMedia('(hover: hover) and (pointer: fine)').matches) {
  $$('.system-case').forEach(card => {
    const surface=card.querySelector('.screen-enlarge');
    let frame=0;
    card.addEventListener('pointermove',event=>{
      if (frame) cancelAnimationFrame(frame);
      const x=event.clientX,y=event.clientY;
      frame=requestAnimationFrame(()=>{
        const bounds=surface.getBoundingClientRect();
        surface.style.setProperty('--light-x',`${x-bounds.left}px`);
        surface.style.setProperty('--light-y',`${y-bounds.top}px`);
        frame=0;
      });
    },{passive:true});
    card.addEventListener('pointerleave',()=>{
      if(frame)cancelAnimationFrame(frame);
      frame=0;
      surface.style.removeProperty('--light-x');
      surface.style.removeProperty('--light-y');
    });
  });
}

// Sparse ambient particles: no interactions, capped resolution and paused offscreen.
if (!reduceMotion.matches) {
  const canvas=document.createElement('canvas');
  canvas.id='ambient-canvas';canvas.setAttribute('aria-hidden','true');
  document.body.prepend(canvas);
  const ctx=canvas.getContext('2d');
  if(ctx){
    let w=0,h=0,particles=[],animation=0,lastFrame=0;
    const compact=matchMedia('(max-width:650px)').matches;
    function resizeAtmosphere(){
      w=innerWidth;h=innerHeight;
      const ratio=Math.min(devicePixelRatio||1,1.5);
      canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);
      ctx.setTransform(ratio,0,0,ratio,0,0);
      particles=Array.from({length:compact?18:36},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.5,s:Math.random()*.18+.07,a:Math.random()*.3+.15}));
    }
    function paintAtmosphere(time){
      if(document.hidden||reduceMotion.matches){animation=0;return;}
      animation=requestAnimationFrame(paintAtmosphere);
      if(time-lastFrame<33)return;
      lastFrame=time;ctx.clearRect(0,0,w,h);
      particles.forEach((p,i)=>{
        p.y-=p.s;if(p.y< -8){p.y=h+8;p.x=Math.random()*w;}
        const shimmer=.75+Math.sin(time*.0007+i)*.25;
        ctx.beginPath();ctx.fillStyle=`rgba(171,218,155,${p.a*shimmer})`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
        if(!compact){for(let j=i+1;j<particles.length;j++){
          const q=particles[j],distance=Math.hypot(p.x-q.x,p.y-q.y);
          if(distance<110){ctx.beginPath();ctx.strokeStyle=`rgba(147,201,176,${(1-distance/110)*.065})`;ctx.lineWidth=.6;ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}
        }}
      });
    }
    function startAtmosphere(){if(!animation&&!document.hidden&&!reduceMotion.matches)animation=requestAnimationFrame(paintAtmosphere);}
    resizeAtmosphere();startAtmosphere();
    addEventListener('resize',resizeAtmosphere,{passive:true});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(animation);animation=0;}else startAtmosphere();});
    reduceMotion.addEventListener('change',()=>{if(reduceMotion.matches){cancelAnimationFrame(animation);animation=0;ctx.clearRect(0,0,w,h);}else startAtmosphere();});
  }
}
