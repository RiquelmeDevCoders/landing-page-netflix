🎬 Netflix Landing Page

Ver projeto: https://estudo-page.netlify.app/

📋 Sobre o Projeto
Esta é uma landing page fictícia da Netflix, desenvolvida completamente à mão como projeto de estudo e demonstração de habilidades em desenvolvimento front-end. O objetivo foi recriar a experiência visual premium da Netflix, implementando animações complexas e um design moderno totalmente responsivo.

⚠️ Aviso: Este projeto é apenas para fins educacionais e de portfólio. Não possui qualquer afiliação oficial com a Netflix Inc.

✨ Características Principais
🎨 Design Profissional

Interface fiel à identidade visual da Netflix
Paleta de cores oficial (#E50914)
Tipografia Poppins em todos os pesos
Layout moderno e clean

🚀 Animações Avançadas
Todas as animações foram criadas manualmente usando CSS puro, sem bibliotecas externas:
Keyframes Animations

pulse - Efeito pulsante no hero com scale e opacity
float - Elementos flutuantes com rotação e translação
fadeInUp - Entrada suave dos elementos com fade e slide
logoGlow - Brilho animado no logotipo
screenPulse - Pulsação da tela da TV
phoneGlow - Efeito glow no mockup do celular
bounce - Animação de salto nos perfis infantis
shine - Efeito de brilho deslizante nos cards

Transições CSS

cubic-bezier(0.4, 0, 0.2, 1) - Curva de aceleração suave e profissional
Hover effects com transformações 3D
Ripple effect nos botões (efeito de ondulação ao clicar)
Border animations nos cards de planos

Técnicas Utilizadas

Transform: translateY, scale, rotate para movimentos fluidos
Backdrop-filter: blur para efeitos de vidro fosco
Gradients: linear e radial para profundidade visual
Box-shadow: múltiplas camadas para profundidade realista
Clip-path: para efeitos de revelação
CSS Variables: para cores reutilizáveis
Pseudo-elementos (::before, ::after): para efeitos adicionais sem marcação HTML extra

📱 Responsividade Total
Sistema de breakpoints profissional:
css/* Desktop Large */
@media (max-width: 1200px) { }

/* Tablets & Mobile Large */
@media (max-width: 968px) { }

/* Mobile */
@media (max-width: 600px) { }
Técnicas Responsivas:

Grid layouts com auto-fit e minmax()
Flexbox para alinhamentos dinâmicos
clamp() para tipografia fluida
Imagens e vídeos com aspect-ratio
Touch-friendly em dispositivos móveis
Suporte para prefers-reduced-motion (acessibilidade)

⚡ JavaScript Interativo
Funcionalidades implementadas sem frameworks:

Scroll Animation: Navbar muda ao rolar a página
Intersection Observer API: Animações ao entrar na viewport
FAQ Accordion: Expansão/colapso suave
Form Validation: Validação de email em tempo real
Smooth Scroll: Rolagem suave para âncoras
Parallax Effect: Elementos flutuantes com parallax no scroll
Hover Interactions: Estados interativos nos cards

🛠️ Tecnologias Utilizadas
Front-end Puro

HTML5 Semântico: Estrutura clara e acessível
CSS3 Avançado: Animações, Grid, Flexbox, Custom Properties
JavaScript Vanilla: Sem dependências de frameworks

Recursos Externos

Google Fonts: Fonte Poppins
SVG: Ícones e elementos gráficos inline

📂 Estrutura de Arquivos
netflix-landing-page/
│
├── index.html          # Estrutura HTML
├── style.css           # Estilos e animações CSS
├── script.js           # Interatividade JavaScript
└── README.md           # Documentação
🎯 Conceitos de Animação Aplicados
1. Timing Functions (Curvas de Animação)

ease-in-out: Aceleração suave no início e fim
cubic-bezier(): Controle preciso da curva de aceleração
linear: Velocidade constante para loops infinitos

2. Performance

Uso de transform e opacity (GPU-accelerated)
Evita animações em propriedades que causam reflow (width, height, etc)
will-change implícito para otimização

3. Animações Compostas

Múltiplas propriedades animadas simultaneamente
Delays escalonados para efeitos em cascata
Infinite loops com alternating direction

4. Estados Interativos

:hover, :active, :focus com transições
Estados de loading nos botões
Feedback visual imediato

5. Acessibilidade

@media (prefers-reduced-motion) para usuários sensíveis
Animações podem ser desabilitadas pelo sistema

🎨 Paleta de Cores
css--netflix-red: #E50914;
--netflix-dark: #141414;
--netflix-hover: #f40612;

/* Transparências */
rgba(229, 9, 20, 0.1) a rgba(229, 9, 20, 0.8)
🚀 Como Usar

Clone ou baixe os arquivos

bashgit clone https://github.com/RiquelmeDevCoders/landing-page-netflix.git

Abra o arquivo index.html

Não requer servidor local
Funciona diretamente no navegador


Personalize

Edite as cores no CSS (variáveis CSS)
Modifique textos no HTML
Ajuste animações no CSS



💡 Aprendizados e Técnicas
CSS Grid & Flexbox

Layout responsivo sem media queries complexas
Auto-fit e minmax para grids adaptativos
Flex-wrap para reorganização automática

Gradientes Avançados
css/* Gradiente radial com transparência */
background: radial-gradient(circle at center, 
    rgba(229, 9, 20, 0.2) 0%, 
    transparent 70%
);

/* Gradiente em texto */
background: linear-gradient(135deg, #fff, rgba(255,255,255,0.8));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
Intersection Observer
javascript// Animações ao entrar na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
Ripple Effect
css/* Efeito de ondulação nos botões */
.button::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: width 0.6s, height 0.6s;
}

.button:hover::before {
    width: 300px;
    height: 300px;
}
📱 Compatibilidade

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Opera (Latest)
✅ Mobile Browsers (iOS/Android)

🎓 Conceitos Demonstrados

HTML Semântico: Uso correto de tags (section, nav, article)
CSS BEM-like: Nomenclatura clara de classes
Mobile-First: Design pensado para mobile primeiro
Progressive Enhancement: Funciona sem JavaScript
Performance: Animações GPU-accelerated
Acessibilidade: Contraste, foco, reduced-motion
Clean Code: Código organizado e comentado
Vanilla JS: Sem dependências de bibliotecas

🔮 Futuras Melhorias

 Adicionar mais seções (depoimentos, parceiros)
 Implementar dark/light mode toggle
 Criar versão com React/Vue
 Adicionar testes automatizados
 Implementar PWA (Progressive Web App)
 Adicionar mais micro-interações
 Integrar com API fictícia de filmes

👨‍💻 Desenvolvedor
Criado por: @riquelme.dev
Este projeto foi desenvolvido completamente à mão, linha por linha, sem uso de IA ou geradores de código. Cada animação, cada transição e cada detalhe foi pensado e implementado manualmente para demonstrar habilidades reais de front-end development.
📄 Licença
Este é um projeto educacional e de portfólio. Sinta-se livre para estudar o código e usar como referência para aprendizado.
Nota: Netflix e seu logotipo são marcas registradas da Netflix Inc. Este projeto não possui afiliação oficial.

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela no repositório!

Desenvolvido com ❤️ e muito ☕, pois foi demorado!
