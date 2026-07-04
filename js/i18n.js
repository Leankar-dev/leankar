const TRANSLATIONS = {
  // ── NAVBAR ────────────────────────────────────────────────
  'nav.sobre':        { pt: 'Sobre',        en: 'About',   es: 'Sobre mí' },
  'nav.apps':         { pt: 'Aplicativos',  en: 'Apps',    es: 'Apps' },
  'nav.contato':      { pt: 'Contato',      en: 'Contact', es: 'Contacto' },
  'nav.menu-label':   { pt: 'Abrir menu',   en: 'Open menu', es: 'Abrir menú' },

  // ── HERO ──────────────────────────────────────────────────
  'hero.badge': { pt: 'Flutter Developer', en: 'Flutter Developer', es: 'Flutter Developer' },
  'hero.title': {
    pt: 'Criando apps que<br /><span class="gradient-text">fazem a diferença</span>',
    en: 'Building apps that<br /><span class="gradient-text">make a difference</span>',
    es: 'Creando apps que<br /><span class="gradient-text">marcan la diferencia</span>',
  },
  'hero.subtitle': {
    pt: 'Desenvolvedor mobile especializado em Flutter &amp; Dart.<br />Aplicativos modernos, intuitivos e disponíveis no Google Play.',
    en: 'Mobile developer specialized in Flutter &amp; Dart.<br />Modern, intuitive apps available on Google Play.',
    es: 'Desarrollador mobile especializado en Flutter &amp; Dart.<br />Apps modernas e intuitivas disponibles en Google Play.',
  },
  'hero.cta-apps':    { pt: 'Ver Aplicativos',     en: 'View Apps',        es: 'Ver Apps' },
  'hero.cta-contato': { pt: 'Entrar em Contato',   en: 'Get in Touch',     es: 'Contactar' },

  // ── SOBRE ─────────────────────────────────────────────────
  'sobre.label': { pt: 'Quem sou eu', en: 'Who I am', es: 'Quién soy' },
  'sobre.title': {
    pt: 'Sobre <span class="gradient-text">mim</span>',
    en: 'About <span class="gradient-text">me</span>',
    es: 'Sobre <span class="gradient-text">mí</span>',
  },
  'sobre.p1': {
    pt: 'O que começou como curiosidade — entender como os aplicativos que uso diariamente são construídos — se transformou em uma paixão pelo desenvolvimento de Apps mobile. Sou desenvolvedor <strong>autodidata</strong>: aprendi Flutter na prática, transformando cada projeto publicado em um laboratório de evolução técnica e pessoal.',
    en: "What began as curiosity — understanding how the apps I use every day are built — turned into a passion for mobile app development. I'm a <strong>self-taught</strong> developer: I learned Flutter hands-on, turning every shipped project into a lab for technical and personal growth.",
    es: 'Lo que empezó como curiosidad — entender cómo se construyen las apps que uso a diario — se convirtió en una pasión por el desarrollo de apps móviles. Soy desarrollador <strong>autodidacta</strong>: aprendí Flutter en la práctica, convirtiendo cada proyecto publicado en un laboratorio de evolución técnica y personal.',
  },
  'sobre.p2': {
    pt: 'Em pouco mais de dois anos com <strong>Flutter e Dart</strong>, construí seis projetos — quatro apps Android no Google Play, um jogo web e dois apps em desenvolvimento ativo. Cada um nasceu de uma necessidade concreta: uma calculadora estilo neumórfico, um buscador de CEP ágil, um organizador de compras intuitivo, um campo minado reinventado. Problemas simples, resolvidos com capricho e atenção ao detalhe.',
    en: "In just over two years with <strong>Flutter and Dart</strong>, I've built six projects — four Android apps on Google Play, a web game, and two apps in active development. Each one came from a real need: a neumorphic-style calculator, a fast CEP lookup tool, an intuitive shopping list organizer, a reinvented minesweeper. Simple problems, solved with care and attention to detail.",
    es: 'En poco más de dos años con <strong>Flutter y Dart</strong>, construí seis proyectos — cuatro apps Android en Google Play, un juego web y dos apps en desarrollo activo. Cada uno nació de una necesidad concreta: una calculadora estilo neumórfico, un buscador de CEP ágil, un organizador de compras intuitivo, un buscaminas reinventado. Problemas simples, resueltos con esmero y atención al detalle.',
  },
  'sobre.p3': {
    pt: 'Tecnicamente, trabalho com arquitetura <strong>MVVM</strong>, gerenciamento de estado com <strong>Riverpod</strong>, persistência local com <strong>Drift (SQLite)</strong> e integração com <strong>Firebase</strong> quando a nuvem agrega valor real à experiência. A preocupação com código limpo e separação de responsabilidades guia cada decisão — da estrutura de pastas ao design da interface.',
    en: 'Technically, I work with <strong>MVVM</strong> architecture, state management with <strong>Riverpod</strong>, local persistence with <strong>Drift (SQLite)</strong>, and <strong>Firebase</strong> integration when the cloud adds real value to the experience. A focus on clean code and separation of concerns guides every decision — from folder structure to interface design.',
    es: 'Técnicamente, trabajo con arquitectura <strong>MVVM</strong>, gestión de estado con <strong>Riverpod</strong>, persistencia local con <strong>Drift (SQLite)</strong> e integración con <strong>Firebase</strong> cuando la nube aporta valor real a la experiencia. La preocupación por el código limpio y la separación de responsabilidades guía cada decisión — desde la estructura de carpetas hasta el diseño de la interfaz.',
  },
  'sobre.p4': {
    pt: 'Minha missão é criar produtos que as pessoas realmente queiram usar: sem bloatware, sem atrito desnecessário, sem interfaces confusas. Se um app precisa de tutorial para ser usado, ele ainda não está pronto. Esse compromisso com a simplicidade define cada linha de código que escrevo.',
    en: "My mission is to build products people actually want to use: no bloatware, no unnecessary friction, no confusing interfaces. If an app needs a tutorial to be used, it isn't ready yet. That commitment to simplicity defines every line of code I write.",
    es: 'Mi misión es crear productos que la gente realmente quiera usar: sin bloatware, sin fricción innecesaria, sin interfaces confusas. Si una app necesita un tutorial para usarse, todavía no está lista. Ese compromiso con la simplicidad define cada línea de código que escribo.',
  },
  'sobre.stat-projetos':  { pt: 'Projetos',   en: 'Projects',    es: 'Proyectos' },
  'sobre.stat-flutter':   { pt: 'Flutter',    en: 'Flutter',     es: 'Flutter' },
  'sobre.stat-dedicacao': { pt: 'Dedicação',  en: 'Dedication',  es: 'Dedicación' },
  'sobre.skill1-title': { pt: 'Mobile First',      en: 'Mobile First',     es: 'Mobile First' },
  'sobre.skill1-desc':  { pt: 'UI/UX pensada para telas móveis desde o início', en: 'UI/UX designed for mobile screens from the start', es: 'UI/UX pensada para pantallas móviles desde el inicio' },
  'sobre.skill2-title': { pt: 'Alta Performance',  en: 'High Performance', es: 'Alto Rendimiento' },
  'sobre.skill2-desc':  { pt: 'Apps fluidos com 60fps e carregamento rápido', en: 'Smooth apps with 60fps and fast loading', es: 'Apps fluidas con 60fps y carga rápida' },
  'sobre.skill3-title': { pt: 'Design Moderno',    en: 'Modern Design',    es: 'Diseño Moderno' },
  'sobre.skill3-desc':  { pt: 'Material Design 3 e interfaces personalizadas', en: 'Material Design 3 and custom interfaces', es: 'Material Design 3 e interfaces personalizadas' },
  'sobre.skill4-title': { pt: 'Código Limpo',      en: 'Clean Code',       es: 'Código Limpio' },
  'sobre.skill4-desc':  { pt: 'Arquitetura sólida e boas práticas de desenvolvimento', en: 'Solid architecture and development best practices', es: 'Arquitectura sólida y buenas prácticas de desarrollo' },

  // ── STACK ─────────────────────────────────────────────────
  'stack.label': { pt: 'Como construo',  en: 'How I build',  es: 'Cómo construyo' },
  'stack.title': {
    pt: 'Stack <span class="gradient-text">Técnica</span>',
    en: 'Tech <span class="gradient-text">Stack</span>',
    es: 'Stack <span class="gradient-text">Técnico</span>',
  },
  'stack.desc': {
    pt: 'Ferramentas, padrões e práticas que uso em cada projeto',
    en: 'Tools, patterns and practices I use in every project',
    es: 'Herramientas, patrones y prácticas que uso en cada proyecto',
  },
  'stack.card1-title': { pt: 'Flutter & Dart', en: 'Flutter & Dart', es: 'Flutter & Dart' },
  'stack.card1-desc': {
    pt: 'Framework principal de todos os projetos. Escolhi Flutter pela capacidade de entregar interfaces nativas de alta qualidade com uma única base de código, ciclo de desenvolvimento ágil com hot reload e um ecossistema de packages maduro. Dart compila direto para código nativo, garantindo performance real — não interpretada.',
    en: 'The main framework behind every project. I chose Flutter for its ability to deliver high-quality native interfaces from a single codebase, an agile development cycle with hot reload, and a mature package ecosystem. Dart compiles straight to native code, delivering real — not interpreted — performance.',
    es: 'El framework principal de todos los proyectos. Elegí Flutter por su capacidad de entregar interfaces nativas de alta calidad con una única base de código, un ciclo de desarrollo ágil con hot reload y un ecosistema de paquetes maduro. Dart compila directo a código nativo, garantizando un rendimiento real — no interpretado.',
  },
  'stack.card2-title': { pt: 'MVVM & Riverpod', en: 'MVVM & Riverpod', es: 'MVVM & Riverpod' },
  'stack.card2-desc': {
    pt: 'Arquitetura MVVM para separar lógica de negócio da camada de apresentação. O Riverpod gerencia o estado de forma reativa e testável, eliminando dependências implícitas entre componentes. Essa combinação mantém o código organizado conforme o app cresce, sem acumular dívida técnica.',
    en: 'MVVM architecture to separate business logic from the presentation layer. Riverpod manages state reactively and testably, eliminating implicit dependencies between components. This combination keeps the code organized as the app grows, without piling up technical debt.',
    es: 'Arquitectura MVVM para separar la lógica de negocio de la capa de presentación. Riverpod gestiona el estado de forma reactiva y testeable, eliminando dependencias implícitas entre componentes. Esta combinación mantiene el código organizado a medida que la app crece, sin acumular deuda técnica.',
  },
  'stack.card3-title': { pt: 'Drift & SQLite', en: 'Drift & SQLite', es: 'Drift & SQLite' },
  'stack.card3-desc': {
    pt: 'Para persistência local, uso o Drift — uma camada segura e tipada sobre SQLite. Permite definir tabelas como classes Dart, escrever queries com verificação em tempo de compilação e receber streams reativos automaticamente. Ideal para apps que precisam funcionar offline sem abrir mão de confiabilidade.',
    en: 'For local persistence, I use Drift — a type-safe layer on top of SQLite. It lets me define tables as Dart classes, write queries with compile-time verification, and get reactive streams automatically. Ideal for apps that need to work offline without giving up reliability.',
    es: 'Para la persistencia local, uso Drift — una capa segura y tipada sobre SQLite. Permite definir tablas como clases Dart, escribir queries con verificación en tiempo de compilación y recibir streams reactivos automáticamente. Ideal para apps que necesitan funcionar offline sin renunciar a la confiabilidad.',
  },
  'stack.card4-title': { pt: 'Firebase', en: 'Firebase', es: 'Firebase' },
  'stack.card4-desc': {
    pt: 'Integro Firebase quando a nuvem agrega valor real: Analytics para entender como os usuários interagem com os apps, Firestore para dados sincronizados em tempo real e Auth para autenticação sem servidor próprio. A integração via FlutterFire é madura e reduz o tempo de implementação.',
    en: 'I integrate Firebase when the cloud adds real value: Analytics to understand how users interact with the apps, Firestore for real-time synced data, and Auth for authentication without running my own server. The FlutterFire integration is mature and cuts down implementation time.',
    es: 'Integro Firebase cuando la nube aporta valor real: Analytics para entender cómo interactúan los usuarios con las apps, Firestore para datos sincronizados en tiempo real y Auth para autenticación sin servidor propio. La integración vía FlutterFire es madura y reduce el tiempo de implementación.',
  },
  'stack.card5-title': { pt: 'Testes & Qualidade', en: 'Testing & Quality', es: 'Pruebas y Calidad' },
  'stack.card5-desc': {
    pt: 'Cobertura com testes unitários para lógica de negócio e testes de widget para componentes de interface. Uso flutter_test e mockito para isolar dependências e garantir que refatorações não quebrem comportamentos existentes. Checagem estática com flutter analyze mantém o padrão consistente.',
    en: "Coverage with unit tests for business logic and widget tests for UI components. I use flutter_test and mockito to isolate dependencies and make sure refactors don't break existing behavior. Static checking with flutter analyze keeps the standard consistent.",
    es: 'Cobertura con pruebas unitarias para la lógica de negocio y pruebas de widgets para los componentes de interfaz. Uso flutter_test y mockito para aislar dependencias y garantizar que las refactorizaciones no rompan comportamientos existentes. La verificación estática con flutter analyze mantiene el estándar consistente.',
  },
  'stack.card6-title': { pt: 'Play Store & ASO', en: 'Play Store & ASO', es: 'Play Store & ASO' },
  'stack.card6-desc': {
    pt: 'Processo completo de publicação: geração de AAB assinado, configuração de ProGuard, criação de assets da loja (ícones, screenshots, banner), descrições otimizadas para ASO (App Store Optimization) e monitoramento de avaliações via Google Play Console e Firebase Crashlytics.',
    en: 'The full publishing process: generating a signed AAB, configuring ProGuard, creating store assets (icons, screenshots, banner), ASO-optimized (App Store Optimization) descriptions, and monitoring reviews via Google Play Console and Firebase Crashlytics.',
    es: 'Proceso completo de publicación: generación de AAB firmado, configuración de ProGuard, creación de assets de la tienda (íconos, capturas, banner), descripciones optimizadas para ASO (App Store Optimization) y monitoreo de reseñas vía Google Play Console y Firebase Crashlytics.',
  },

  // ── APPS (grid da home) ───────────────────────────────────
  'apps.label': { pt: 'Apps & Web',     en: 'Apps & Web',   es: 'Apps & Web' },
  'apps.title': {
    pt: 'Meus <span class="gradient-text">Projetos</span>',
    en: 'My <span class="gradient-text">Projects</span>',
    es: 'Mis <span class="gradient-text">Proyectos</span>',
  },
  'apps.section-desc': {
    pt: '4 apps Flutter no Google Play · 2 em breve · 1 site web',
    en: '4 Flutter apps on Google Play · 2 coming soon · 1 web site',
    es: '4 apps Flutter en Google Play · 2 próximamente · 1 sitio web',
  },
  'apps.cat-produtividade':  { pt: 'Produtividade', en: 'Productivity', es: 'Productividad' },
  'apps.cat-utilidades':     { pt: 'Utilidades',     en: 'Utilities',    es: 'Utilidades' },
  'apps.cat-organizacao':    { pt: 'Organização',    en: 'Organization', es: 'Organización' },
  'apps.cat-jogos':          { pt: 'Jogos',          en: 'Games',        es: 'Juegos' },
  'apps.cat-jogos-mentais':  { pt: 'Jogos Mentais',  en: 'Brain Games',  es: 'Juegos Mentales' },
  'apps.badge-free':  { pt: 'Gratuito',   en: 'Free',         es: 'Gratis' },
  'apps.badge-wip':   { pt: 'Em breve',   en: 'Coming soon',  es: 'Próximamente' },
  'apps.badge-web':   { pt: 'Web',        en: 'Web',          es: 'Web' },
  'apps.tag-wip':     { pt: 'Em desenvolvimento', en: 'In development', es: 'En desarrollo' },
  'apps.link-details': { pt: 'Ver detalhes →', en: 'See details →', es: 'Ver detalles →' },
  'apps.link-site':   { pt: 'Visitar Site',   en: 'Visit Site',    es: 'Visitar Sitio' },
  'apps.play-badge-alt': { pt: 'Disponível no Google Play', en: 'Available on Google Play', es: 'Disponible en Google Play' },
  'apps.calc-desc': {
    pt: 'Desenvolvida com Flutter e design Neumórfico, nasceu da insatisfação com calculadoras sobrecarregadas de anúncios e funções que ninguém usa. Suporta as quatro operações básicas, porcentagem, IMC com faixa de peso ideal e histórico persistente de cálculos para consulta rápida. Temas claro, escuro e automático se adaptam ao ambiente, enquanto os botões foram dimensionados com área de toque generosa e tipografia de alto contraste para máxima legibilidade em qualquer tela. Disponível em cinco idiomas, sem permissões desnecessárias, compatível com Android 6.0+. Para quem quer uma calculadora que simplesmente funciona, sem surpresas.',
    en: 'Built with Flutter and a neumorphic design, it was born out of frustration with calculators bloated with ads and features nobody uses. It supports the four basic operations, percentages, BMI with ideal weight range, and a persistent calculation history for quick reference. Light, dark, and automatic themes adapt to your environment, while buttons are sized with generous tap areas and high-contrast typography for maximum legibility on any screen. Available in five languages, with no unnecessary permissions, compatible with Android 6.0+. For anyone who wants a calculator that just works, no surprises.',
    es: 'Desarrollada con Flutter y diseño neumórfico, nació de la insatisfacción con calculadoras sobrecargadas de anuncios y funciones que nadie usa. Soporta las cuatro operaciones básicas, porcentaje, IMC con rango de peso ideal e historial persistente de cálculos para consulta rápida. Los temas claro, oscuro y automático se adaptan al entorno, mientras que los botones fueron dimensionados con un área de toque generosa y tipografía de alto contraste para máxima legibilidad en cualquier pantalla. Disponible en cinco idiomas, sin permisos innecesarios, compatible con Android 6.0+. Para quien quiere una calculadora que simplemente funciona, sin sorpresas.',
  },
  'apps.cep-desc': {
    pt: 'Consultar um CEP brasileiro não deveria ser complicado. O BuscaCep integra a API pública ViaCEP para retornar logradouro, bairro, cidade, estado, DDD e complemento em segundos. Ideal para validar endereços em compras online, preencher formulários ou localizar qualquer CEP do Brasil. Oferece duas formas de busca: por CEP direto ou por endereço completo (UF, cidade e logradouro), com resultados formatados com clareza. Interface neumórfica, intuitiva e sem poluição visual. Desenvolvido com Flutter, Riverpod e Dio, com tratamento completo de erros de conexão, timeout e CEPs inválidos. Gratuito, sem anúncios e sem coleta de dados.',
    en: 'Looking up a Brazilian postal code (CEP) shouldn\'t be complicated. BuscaCep integrates the public ViaCEP API to return street, neighborhood, city, state, area code, and complement in seconds. Ideal for validating addresses during online shopping, filling out forms, or finding any CEP in Brazil. It offers two search modes: by direct CEP or by full address (state, city, and street), with clearly formatted results. A neumorphic, intuitive interface free of visual clutter. Built with Flutter, Riverpod, and Dio, with full error handling for connection issues, timeouts, and invalid CEPs. Free, ad-free, and collects no data.',
    es: 'Consultar un código postal brasileño (CEP) no debería ser complicado. BuscaCep integra la API pública ViaCEP para devolver calle, barrio, ciudad, estado, código de área y complemento en segundos. Ideal para validar direcciones en compras online, completar formularios o localizar cualquier CEP de Brasil. Ofrece dos formas de búsqueda: por CEP directo o por dirección completa (estado, ciudad y calle), con resultados formateados con claridad. Interfaz neumórfica, intuitiva y sin ruido visual. Desarrollado con Flutter, Riverpod y Dio, con manejo completo de errores de conexión, timeout y CEPs inválidos. Gratuito, sin anuncios y sin recolección de datos.',
  },
  'apps.lista-desc': {
    pt: 'Esquecer o papel de compras ficou no passado. A Lista da Casa é um app minimalista para gerenciar listas de compras diretamente no Telefone. Adicione itens com categoria, quantidade e preço, marque o que já foi pego e acompanhe o progresso em tempo real. Suporta múltiplas listas simultâneas para organizar compras de mercado, farmácia e outros estabelecimentos. O histórico completo das compras finalizadas e os gráficos de gastos mensais por categoria ajudam a acompanhar o orçamento doméstico ao longo do tempo. Todos os dados são salvos localmente com SQLite — sem internet, sem cadastro, totalmente offline. Interface neumórfica projetada para uso com uma mão só, ideal para o corredor do supermercado. Disponível em português, inglês e espanhol. Gratuito.',
    en: "Forgetting the paper shopping list is a thing of the past. Lista da Casa is a minimalist app for managing shopping lists right on your phone. Add items with category, quantity, and price, check off what's already in the cart, and track progress in real time. It supports multiple simultaneous lists to organize shopping for the grocery store, pharmacy, and other places. The full history of completed purchases and monthly spending charts by category help you track your household budget over time. All data is saved locally with SQLite — no internet, no sign-up, fully offline. A neumorphic interface designed for one-handed use, ideal for the supermarket aisle. Available in Portuguese, English, and Spanish. Free.",
    es: 'Olvidar el papel de la lista de compras quedó en el pasado. Lista da Casa es una app minimalista para gestionar listas de compras directamente en el teléfono. Agrega ítems con categoría, cantidad y precio, marca lo que ya recogiste y sigue el progreso en tiempo real. Soporta múltiples listas simultáneas para organizar compras del mercado, la farmacia y otros lugares. El historial completo de compras finalizadas y los gráficos de gastos mensuales por categoría ayudan a seguir el presupuesto doméstico a lo largo del tiempo. Todos los datos se guardan localmente con SQLite — sin internet, sin registro, totalmente offline. Interfaz neumórfica diseñada para uso con una sola mano, ideal para el pasillo del supermercado. Disponible en portugués, inglés y español. Gratis.',
  },
  'apps.campo-desc': {
    pt: 'O Campo Minado clássico, reescrito do zero para mobile com Flutter. A mecânica que você já conhece — revelar células, marcar minas, raciocinar cada toque — ganhou visuais em Material Design, efeitos sonoros, vibração tátil e animações que elevam a experiência sem trair a essência do original. Três dificuldades com tabuleiros adaptativos: Fácil (9×9), Médio (16×16) e Difícil (16×30), onde o layout se ajusta automaticamente ao tamanho da tela. Estatísticas por dificuldade, melhor tempo e taxa de vitória ficam salvos localmente, incentivando a superação. Tutorial interativo para quem está chegando agora e suporte a cinco idiomas. Para quem cresceu jogando no Windows e quer redescobrir o clássico com qualidade moderna no Telefone.',
    en: "The classic Minesweeper, rewritten from scratch for mobile with Flutter. The mechanics you already know — reveal cells, flag mines, think through every tap — now come with Material Design visuals, sound effects, haptic feedback, and animations that elevate the experience without betraying the original's essence. Three difficulties with adaptive boards: Easy (9×9), Medium (16×16), and Hard (16×30), where the layout automatically adjusts to screen size. Stats per difficulty, best time, and win rate are saved locally, encouraging improvement. An interactive tutorial for newcomers and support for five languages. For anyone who grew up playing on Windows and wants to rediscover the classic with modern quality on their phone.",
    es: 'El clásico Buscaminas, reescrito desde cero para móviles con Flutter. La mecánica que ya conoces — revelar celdas, marcar minas, pensar cada toque — ahora tiene visuales en Material Design, efectos de sonido, vibración táctil y animaciones que elevan la experiencia sin traicionar la esencia del original. Tres dificultades con tableros adaptativos: Fácil (9×9), Medio (16×16) y Difícil (16×30), donde el diseño se ajusta automáticamente al tamaño de la pantalla. Las estadísticas por dificultad, mejor tiempo y tasa de victoria se guardan localmente, incentivando la superación. Tutorial interactivo para quien recién llega y soporte para cinco idiomas. Para quienes crecieron jugando en Windows y quieren redescubrir el clásico con calidad moderna en el teléfono.',
  },
  'apps.damas-desc': {
    pt: 'DAMAS Arena é o jogo de Damas brasileiro em versão mobile, construído para quem leva a estratégia a sério. Enfrente uma IA com três níveis de dificuldade — Fácil, Médio e Difícil — e sinta a diferença de cada um: do aprendizado tranquilo até o desafio real contra um adversário que pensa de verdade. Prefere jogar com um amigo? O modo Jogador vs Jogador permite disputas locais sem complicação. Cada partida registra seus movimentos e acompanha sua evolução. Interface limpa, resposta tátil e regras oficiais: capture peças, promova suas damas e vença no tabuleiro.',
    en: 'DAMAS Arena is the Brazilian Checkers game in mobile form, built for those who take strategy seriously. Face an AI with three difficulty levels — Easy, Medium, and Hard — and feel the difference in each one: from a relaxed learning curve to a real challenge against an opponent that actually thinks. Prefer playing with a friend? Player vs Player mode allows local matches with no hassle. Every match logs your moves and tracks your progress. Clean interface, tactile response, and official rules: capture pieces, crown your kings, and win on the board.',
    es: 'DAMAS Arena es el juego de Damas brasileño en versión móvil, hecho para quienes se toman en serio la estrategia. Enfréntate a una IA con tres niveles de dificultad — Fácil, Medio y Difícil — y siente la diferencia de cada uno: desde un aprendizaje tranquilo hasta un desafío real contra un rival que realmente piensa. ¿Prefieres jugar con un amigo? El modo Jugador vs Jugador permite partidas locales sin complicaciones. Cada partida registra tus movimientos y sigue tu evolución. Interfaz limpia, respuesta táctil y reglas oficiales: captura piezas, corona tus damas y gana en el tablero.',
  },
  'apps.memory-desc': {
    pt: 'Plataforma web de jogos cognitivos para exercitar memória, atenção e raciocínio de forma lúdica. Sem instalação: acesse direto pelo navegador e comece a jogar. Os desafios testam a capacidade de memorizar padrões, sequências e posições em partidas rápidas e progressivas que aumentam de dificuldade conforme você avança. Desenvolvido com foco em performance e acessibilidade mobile, funciona bem tanto no desktop quanto no celular. Ideal para pausas rápidas que valem mais do que rolar o feed de redes sociais. Gratuito e sem cadastro.',
    en: 'A web platform of cognitive games to exercise memory, attention, and reasoning in a fun way. No install needed: open it right in your browser and start playing. The challenges test your ability to memorize patterns, sequences, and positions in quick, progressive matches that get harder as you advance. Built with a focus on performance and mobile accessibility, it works well on both desktop and phone. Ideal for quick breaks that are worth more than scrolling social media. Free and no sign-up.',
    es: 'Plataforma web de juegos cognitivos para ejercitar memoria, atención y razonamiento de forma lúdica. Sin instalación: entra directo desde el navegador y empieza a jugar. Los desafíos ponen a prueba la capacidad de memorizar patrones, secuencias y posiciones en partidas rápidas y progresivas que aumentan de dificultad a medida que avanzas. Desarrollado con foco en rendimiento y accesibilidad móvil, funciona bien tanto en escritorio como en celular. Ideal para pausas rápidas que valen más que desplazarte por el feed de redes sociales. Gratis y sin registro.',
  },

  // ── BLOG (preview cards na home) ──────────────────────────
  'blog.label': { pt: 'Blog',            en: 'Blog',          es: 'Blog' },
  'blog.title': {
    pt: 'Artigos <span class="gradient-text">Técnicos</span>',
    en: 'Technical <span class="gradient-text">Articles</span>',
    es: 'Artículos <span class="gradient-text">Técnicos</span>',
  },
  'blog.desc': {
    pt: 'Experiências reais de desenvolvimento Flutter',
    en: 'Real Flutter development experiences',
    es: 'Experiencias reales de desarrollo con Flutter',
  },
  'blog.read-min': { pt: 'min de leitura', en: 'min read', es: 'min de lectura' },

  // ── CONTATO ───────────────────────────────────────────────
  'contato.label': { pt: 'Vamos conversar',    en: "Let's talk",         es: 'Hablemos' },
  'contato.title': {
    pt: 'Tem um projeto<br /><span class="gradient-text">em mente?</span>',
    en: 'Have a project<br /><span class="gradient-text">in mind?</span>',
    es: '¿Tienes un proyecto<br /><span class="gradient-text">en mente?</span>',
  },
  'contato.desc': {
    pt: 'Preencha o formulário e responderei brevemente.',
    en: 'Fill out the form and I will get back to you shortly.',
    es: 'Completa el formulario y te responderé pronto.',
  },
  'contato.placeholder-nome':  { pt: 'Seu nome',     en: 'Your name',    es: 'Tu nombre' },
  'contato.placeholder-email': { pt: 'Seu e-mail',   en: 'Your email',   es: 'Tu correo' },
  'contato.placeholder-msg':   { pt: 'Descreva seu projeto ou tire sua dúvida…', en: 'Describe your project or ask your question…', es: 'Describe tu proyecto o haz tu pregunta…' },
  'contato.btn-submit':  { pt: 'Enviar mensagem',  en: 'Send message',   es: 'Enviar mensaje' },
  'contato.btn-sending': { pt: 'Enviando…',        en: 'Sending…',       es: 'Enviando…' },
  'contato.btn-sent':    { pt: 'Enviado!',         en: 'Sent!',          es: '¡Enviado!' },
  'contato.success':     { pt: '✓ Mensagem enviada! Responderei em breve.', en: '✓ Message sent! I will reply soon.', es: '✓ ¡Mensaje enviado! Te responderé pronto.' },
  'contato.error':       { pt: 'Erro ao enviar. Tente novamente em instantes.', en: 'Failed to send. Please try again.', es: 'Error al enviar. Inténtalo de nuevo.' },

  // ── FOOTER ────────────────────────────────────────────────
  'footer.copy':    { pt: 'Feito com ♥ e Flutter', en: 'Made with ♥ and Flutter', es: 'Hecho con ♥ y Flutter' },
  'footer.privacy': { pt: 'Política de Privacidade', en: 'Privacy Policy', es: 'Política de Privacidad' },

  // ── PÁGINAS DE APPS (padrão comum) ────────────────────────
  'app.back-link':      { pt: '← Todos os aplicativos', en: '← All apps', es: '← Todas las apps' },
  'app.features-title': { pt: 'Funcionalidades', en: 'Features',   es: 'Funcionalidades' },
  'app.about-title':    { pt: 'Sobre o aplicativo', en: 'About the app', es: 'Sobre la app' },
  'app.faq-title':      { pt: 'Perguntas frequentes', en: 'FAQ', es: 'Preguntas frecuentes' },
  'app.cta-btn':        { pt: 'Baixar no Google Play', en: 'Download on Google Play', es: 'Descargar en Google Play' },
  'app.badge-free':     { pt: 'Gratuito', en: 'Free', es: 'Gratis' },
  'app.badge-offline':  { pt: 'Offline',  en: 'Offline', es: 'Sin conexión' },

  // ── CALCULADORA LEANKAR ───────────────────────────────────
  'calc.tagline': {
    pt: 'A calculadora que simplesmente funciona — sem anúncios, sem bloatware, sem distrações. Design neumórfico, histórico persistente de cálculos e calculadora de IMC integrada.',
    en: 'The calculator that just works — no ads, no bloatware, no distractions. Neumorphic design, persistent calculation history, and a built-in BMI calculator.',
    es: 'La calculadora que simplemente funciona — sin anuncios, sin bloatware, sin distracciones. Diseño neumórfico, historial persistente de cálculos y calculadora de IMC integrada.',
  },
  'calc.feature1': { pt: 'Quatro operações básicas: soma, subtração, multiplicação e divisão', en: 'Four basic operations: addition, subtraction, multiplication, and division', es: 'Cuatro operaciones básicas: suma, resta, multiplicación y división' },
  'calc.feature2': { pt: 'Cálculo de porcentagem integrado', en: 'Built-in percentage calculation', es: 'Cálculo de porcentaje integrado' },
  'calc.feature3': { pt: 'Calculadora de IMC com classificação OMS (6 faixas)', en: 'BMI calculator with WHO classification (6 ranges)', es: 'Calculadora de IMC con clasificación de la OMS (6 rangos)' },
  'calc.feature4': { pt: 'Histórico persistente dos últimos 50 cálculos', en: 'Persistent history of the last 50 calculations', es: 'Historial persistente de los últimos 50 cálculos' },
  'calc.feature5': { pt: 'Temas claro, escuro e automático (segue o sistema Android)', en: 'Light, dark, and automatic themes (follows the Android system)', es: 'Temas claro, oscuro y automático (sigue el sistema Android)' },
  'calc.feature6': { pt: 'Design Neumórfico com alto contraste e tipografia legível', en: 'Neumorphic design with high contrast and legible typography', es: 'Diseño neumórfico con alto contraste y tipografía legible' },
  'calc.feature7': { pt: '5 idiomas: português, inglês, espanhol, francês e alemão', en: '5 languages: Portuguese, English, Spanish, French, and German', es: '5 idiomas: portugués, inglés, español, francés y alemán' },
  'calc.feature8': { pt: 'Zero permissões, zero rastreamento, 100% offline', en: 'Zero permissions, zero tracking, 100% offline', es: 'Cero permisos, cero rastreo, 100% offline' },
  'calc.about-p1': {
    pt: 'A Calculadora Leankar nasceu da insatisfação com calculadoras sobrecarregadas de anúncios e funções que ninguém usa. O objetivo foi construir algo simples, funcional e esteticamente honesto: uma ferramenta que ocupa o mínimo de espaço, funciona sem internet e entrega o resultado sem distrações.',
    en: 'Calculadora Leankar was born out of frustration with calculators bloated with ads and features nobody uses. The goal was to build something simple, functional, and aesthetically honest: a tool that takes up minimal space, works without internet, and delivers results without distractions.',
    es: 'Calculadora Leankar nació de la insatisfacción con calculadoras sobrecargadas de anuncios y funciones que nadie usa. El objetivo fue construir algo simple, funcional y estéticamente honesto: una herramienta que ocupa el mínimo espacio, funciona sin internet y entrega el resultado sin distracciones.',
  },
  'calc.about-p2': {
    pt: 'O design segue a linguagem neumórfica — elementos que parecem levemente pressionados na superfície, com sombras suaves e bordas arredondadas. Cada botão foi dimensionado com área de toque generosa para facilitar o uso em situações onde a atenção está dividida: cozinhando, fazendo compras ou convertendo valores em movimento.',
    en: 'The design follows the neumorphic language — elements that look gently pressed into the surface, with soft shadows and rounded corners. Each button was sized with a generous tap area to make it easier to use in situations where attention is divided: cooking, shopping, or converting values on the go.',
    es: 'El diseño sigue el lenguaje neumórfico — elementos que parecen ligeramente presionados en la superficie, con sombras suaves y bordes redondeados. Cada botón fue dimensionado con un área de toque generosa para facilitar el uso en situaciones donde la atención está dividida: cocinando, de compras o convirtiendo valores en movimiento.',
  },
  'calc.about-p3': {
    pt: 'O histórico persistente é implementado com <strong>SharedPreferences</strong>: os últimos 50 cálculos são salvos automaticamente entre sessões, sem sincronização em nuvem, sem conta, sem nenhum dado enviado para servidores externos. Ao fechar e reabrir o app, o histórico está intacto.',
    en: 'The persistent history is implemented with <strong>SharedPreferences</strong>: the last 50 calculations are automatically saved between sessions, with no cloud sync, no account, and no data sent to external servers. Close and reopen the app, and the history is still there.',
    es: 'El historial persistente está implementado con <strong>SharedPreferences</strong>: los últimos 50 cálculos se guardan automáticamente entre sesiones, sin sincronización en la nube, sin cuenta, sin ningún dato enviado a servidores externos. Al cerrar y volver a abrir la app, el historial permanece intacto.',
  },
  'calc.about-p4': {
    pt: 'A função de IMC calcula o Índice de Massa Corporal a partir de altura e peso, exibe o resultado numérico e enquadra nas 6 faixas da tabela da OMS — de "abaixo do peso" a "obesidade grau III". Uma feature prática para quem acompanha saúde sem querer instalar um app específico só para isso.',
    en: 'The BMI feature calculates Body Mass Index from height and weight, shows the numeric result, and classifies it into the WHO table\'s 6 ranges — from "underweight" to "obesity class III." A practical feature for anyone tracking their health without wanting to install a dedicated app just for that.',
    es: 'La función de IMC calcula el Índice de Masa Corporal a partir de altura y peso, muestra el resultado numérico y lo clasifica en los 6 rangos de la tabla de la OMS — desde "bajo peso" hasta "obesidad grado III". Una función práctica para quien controla su salud sin querer instalar una app específica solo para eso.',
  },
  'calc.about-p5': {
    pt: 'Desenvolvida com <strong>Flutter 3</strong> e <strong>Material Design 3</strong>, compatível com Android 6.0 (API 23) e superiores. Nenhuma permissão do sistema é solicitada. O app não coleta, transmite ou vende nenhum dado do usuário.',
    en: "Built with <strong>Flutter 3</strong> and <strong>Material Design 3</strong>, compatible with Android 6.0 (API 23) and above. No system permissions are requested. The app doesn't collect, transmit, or sell any user data.",
    es: 'Desarrollada con <strong>Flutter 3</strong> y <strong>Material Design 3</strong>, compatible con Android 6.0 (API 23) y superiores. No se solicita ningún permiso del sistema. La app no recopila, transmite ni vende ningún dato del usuario.',
  },
  'calc.faq1-q': { pt: 'O app é totalmente gratuito?', en: 'Is the app completely free?', es: '¿La app es totalmente gratuita?' },
  'calc.faq1-a': {
    pt: 'Sim, 100% gratuito. Não há compras dentro do app, assinatura ou versão premium. Todas as funcionalidades estão disponíveis para todos desde o primeiro uso, sem nenhuma trava.',
    en: 'Yes, 100% free. There are no in-app purchases, subscriptions, or premium version. All features are available to everyone from the very first use, with no restrictions.',
    es: 'Sí, 100% gratuita. No hay compras dentro de la app, suscripción ni versión premium. Todas las funciones están disponibles para todos desde el primer uso, sin ninguna restricción.',
  },
  'calc.faq2-q': { pt: 'Funciona sem conexão com a internet?', en: 'Does it work without an internet connection?', es: '¿Funciona sin conexión a internet?' },
  'calc.faq2-a': {
    pt: 'Sim, 100% offline. O app não realiza nenhuma requisição de rede em nenhum momento. Funciona normalmente em modo avião, em áreas sem sinal e em qualquer situação sem internet.',
    en: 'Yes, 100% offline. The app never makes any network requests. It works normally in airplane mode, in areas without signal, and in any situation without internet.',
    es: 'Sí, 100% offline. La app nunca realiza ninguna solicitud de red. Funciona normalmente en modo avión, en zonas sin señal y en cualquier situación sin internet.',
  },
  'calc.faq3-q': { pt: 'Posso apagar o histórico de cálculos?', en: 'Can I clear the calculation history?', es: '¿Puedo borrar el historial de cálculos?' },
  'calc.faq3-a': {
    pt: 'Sim. Na tela de histórico há um botão para limpar todos os registros de uma só vez. O histórico também é apagado ao limpar os dados do app nas configurações do Android.',
    en: "Yes. On the history screen there's a button to clear all records at once. The history is also erased when you clear the app's data in Android's settings.",
    es: 'Sí. En la pantalla de historial hay un botón para borrar todos los registros de una vez. El historial también se borra al limpiar los datos de la app en la configuración de Android.',
  },
  'calc.faq4-q': { pt: 'Está disponível para iOS ou como app web?', en: 'Is it available for iOS or as a web app?', es: '¿Está disponible para iOS o como app web?' },
  'calc.faq4-a': {
    pt: 'Atualmente apenas para Android. A publicação na Apple App Store está nos planos, mas ainda sem data definida. Não há versão web por enquanto.',
    en: "Currently Android only. Publishing on the Apple App Store is planned, but there's no set date yet. There's no web version for now.",
    es: 'Actualmente solo para Android. La publicación en la Apple App Store está en los planes, pero aún sin fecha definida. Por ahora no hay versión web.',
  },
  'calc.faq5-q': { pt: 'O app coleta ou envia meus dados?', en: 'Does the app collect or send my data?', es: '¿La app recopila o envía mis datos?' },
  'calc.faq5-a': {
    pt: 'Não. Nenhum dado pessoal é coletado, armazenado remotamente ou transmitido. O histórico de cálculos fica exclusivamente no armazenamento local do seu dispositivo. O app não solicita nenhuma permissão do sistema operacional.',
    en: "No. No personal data is collected, stored remotely, or transmitted. The calculation history stays exclusively in your device's local storage. The app doesn't request any operating system permissions.",
    es: 'No. No se recopila, almacena remotamente ni transmite ningún dato personal. El historial de cálculos permanece exclusivamente en el almacenamiento local de tu dispositivo. La app no solicita ningún permiso del sistema operativo.',
  },
  'calc.faq6-q': { pt: 'Como funciona o cálculo de IMC?', en: 'How does the BMI calculation work?', es: '¿Cómo funciona el cálculo de IMC?' },
  'calc.faq6-a': {
    pt: 'Informe peso (em kg) e altura (em metros ou centímetros). O app aplica a fórmula padrão da OMS — IMC = peso / altura² — e exibe o resultado com a classificação correspondente: abaixo do peso, peso normal, sobrepeso, obesidade grau I, II ou III.',
    en: 'Enter your weight (in kg) and height (in meters or centimeters). The app applies the standard WHO formula — BMI = weight / height² — and shows the result with the matching classification: underweight, normal weight, overweight, obesity class I, II, or III.',
    es: 'Indica el peso (en kg) y la altura (en metros o centímetros). La app aplica la fórmula estándar de la OMS — IMC = peso / altura² — y muestra el resultado con la clasificación correspondiente: bajo peso, peso normal, sobrepeso, obesidad grado I, II o III.',
  },
  'calc.cta-text': {
    pt: 'Disponível gratuitamente no Google Play. Sem anúncios, sem cadastro, sem surpresas.',
    en: 'Available for free on Google Play. No ads, no sign-up, no surprises.',
    es: 'Disponible gratis en Google Play. Sin anuncios, sin registro, sin sorpresas.',
  },

  // ── BUSCACEP ───────────────────────────────────────────────
  'cep.tagline': {
    pt: 'Consultar um CEP brasileiro não deveria ser complicado. Busque por código ou por endereço completo e receba logradouro, bairro, cidade, estado e DDD em segundos.',
    en: "Looking up a Brazilian postal code (CEP) shouldn't be complicated. Search by code or by full address and get street, neighborhood, city, state, and area code in seconds.",
    es: 'Consultar un código postal brasileño (CEP) no debería ser complicado. Busca por código o por dirección completa y recibe calle, barrio, ciudad, estado y código de área en segundos.',
  },
  'cep.feature1': { pt: 'Busca de CEP por código numérico direto', en: 'CEP lookup by direct numeric code', es: 'Búsqueda de CEP por código numérico directo' },
  'cep.feature2': { pt: 'Busca por endereço: UF + cidade + logradouro', en: 'Search by address: state + city + street', es: 'Búsqueda por dirección: estado + ciudad + calle' },
  'cep.feature3': { pt: 'Retorna logradouro, bairro, cidade, estado, DDD e complemento', en: 'Returns street, neighborhood, city, state, area code, and complement', es: 'Devuelve calle, barrio, ciudad, estado, código de área y complemento' },
  'cep.feature4': { pt: 'Tratamento de erros: CEP inválido, timeout e sem conexão', en: 'Error handling: invalid CEP, timeout, and no connection', es: 'Manejo de errores: CEP inválido, timeout y sin conexión' },
  'cep.feature5': { pt: 'Resultados copiáveis com toque longo', en: 'Results copyable with a long press', es: 'Resultados copiables con toque largo' },
  'cep.feature6': { pt: 'Integração com a API pública ViaCEP', en: 'Integration with the public ViaCEP API', es: 'Integración con la API pública ViaCEP' },
  'cep.feature7': { pt: 'Desenvolvido com Riverpod + Dio (HTTP)', en: 'Built with Riverpod + Dio (HTTP)', es: 'Desarrollado con Riverpod + Dio (HTTP)' },
  'cep.feature8': { pt: 'Interface neumórfica, sem anúncios, sem coleta de dados', en: 'Neumorphic interface, no ads, no data collection', es: 'Interfaz neumórfica, sin anuncios, sin recolección de datos' },
  'cep.about-p1': {
    pt: 'O BuscaCep_las surgiu de uma necessidade concreta: durante compras online, preencher formulários de endereço com CEPs que não estão de cabeça é uma fricção pequena, mas irritante. O app resolve isso com uma interface direta — campo de entrada, botão de busca, resultado com clareza.',
    en: "BuscaCep_las came from a real need: during online shopping, filling out address forms with CEPs you don't have memorized is a small but annoying friction. The app solves this with a straightforward interface — input field, search button, clear result.",
    es: 'BuscaCep_las surgió de una necesidad concreta: durante las compras online, completar formularios de dirección con CEPs que no tienes memorizados es una fricción pequeña pero molesta. La app resuelve esto con una interfaz directa — campo de entrada, botón de búsqueda, resultado claro.',
  },
  'cep.about-p2': {
    pt: 'A integração usa a <strong>API ViaCEP</strong>, serviço público mantido pela comunidade de desenvolvedores brasileiros, que cobre todos os CEPs do Brasil com dados atualizados. As requisições são feitas com <strong>Dio</strong>, com configuração de timeout para evitar telas travadas em conexões lentas.',
    en: 'The integration uses the <strong>ViaCEP API</strong>, a public service maintained by the Brazilian developer community, covering every CEP in Brazil with up-to-date data. Requests are made with <strong>Dio</strong>, with timeout configuration to avoid frozen screens on slow connections.',
    es: 'La integración usa la <strong>API ViaCEP</strong>, un servicio público mantenido por la comunidad de desarrolladores brasileños, que cubre todos los CEPs de Brasil con datos actualizados. Las solicitudes se hacen con <strong>Dio</strong>, con configuración de timeout para evitar pantallas congeladas en conexiones lentas.',
  },
  'cep.about-p3': {
    pt: 'A busca por endereço é especialmente útil quando se conhece a rua mas não o CEP: basta informar o estado (UF), a cidade e o logradouro para receber uma lista com os CEPs correspondentes. Ideal para validar endereços de clientes ou localizar CEPs de bairros específicos.',
    en: "The address search is especially useful when you know the street but not the CEP: just enter the state, city, and street to get a list of matching CEPs. Ideal for validating customer addresses or finding CEPs for specific neighborhoods.",
    es: 'La búsqueda por dirección es especialmente útil cuando conoces la calle pero no el CEP: basta con indicar el estado, la ciudad y la calle para recibir una lista con los CEPs correspondientes. Ideal para validar direcciones de clientes o localizar CEPs de barrios específicos.',
  },
  'cep.about-p4': {
    pt: 'O gerenciamento de estado é feito com <strong>Riverpod</strong>: cada consulta gera um estado reativo (carregando, sucesso, erro) que a UI consome diretamente, sem boilerplate. Isso mantém a interface responsiva e o código organizado conforme a complexidade cresce.',
    en: 'State management is handled with <strong>Riverpod</strong>: each query generates a reactive state (loading, success, error) that the UI consumes directly, with no boilerplate. This keeps the interface responsive and the code organized as complexity grows.',
    es: 'La gestión de estado se hace con <strong>Riverpod</strong>: cada consulta genera un estado reactivo (cargando, éxito, error) que la UI consume directamente, sin boilerplate. Esto mantiene la interfaz responsiva y el código organizado a medida que crece la complejidad.',
  },
  'cep.about-p5': {
    pt: 'O app não armazena nenhum histórico de consultas, não solicita permissões do sistema e não exibe nenhum tipo de anúncio. Gratuito sem asterisco.',
    en: "The app doesn't store any query history, doesn't request system permissions, and doesn't show any kind of ad. Free, no asterisk.",
    es: 'La app no almacena ningún historial de consultas, no solicita permisos del sistema y no muestra ningún tipo de anuncio. Gratis sin letra pequeña.',
  },
  'cep.faq1-q': { pt: 'Que API é usada para consultar os CEPs?', en: 'Which API is used to look up CEPs?', es: '¿Qué API se usa para consultar los CEPs?' },
  'cep.faq1-a': {
    pt: 'O app usa a API pública <strong>ViaCEP</strong> (viacep.com.br), um serviço gratuito e amplamente utilizado no Brasil que cobre todos os CEPs do território nacional com dados atualizados. A requisição é feita diretamente do app para a API sem nenhum intermediário.',
    en: 'The app uses the public <strong>ViaCEP</strong> API (viacep.com.br), a free, widely used service in Brazil that covers every CEP in the country with up-to-date data. The request goes directly from the app to the API with no intermediary.',
    es: 'La app usa la API pública <strong>ViaCEP</strong> (viacep.com.br), un servicio gratuito y ampliamente usado en Brasil que cubre todos los CEPs del territorio nacional con datos actualizados. La solicitud se hace directamente desde la app a la API sin ningún intermediario.',
  },
  'cep.faq2-q': { pt: 'O app funciona sem internet?', en: 'Does the app work without internet?', es: '¿La app funciona sin internet?' },
  'cep.faq2-a': {
    pt: 'Não, é necessária conexão com a internet para consultar os CEPs, pois os dados vêm da API ViaCEP em tempo real. O app detecta a ausência de conexão e exibe uma mensagem de erro adequada sem travar a interface.',
    en: 'No, an internet connection is required to look up CEPs, since the data comes from the ViaCEP API in real time. The app detects the lack of connection and shows an appropriate error message without freezing the interface.',
    es: 'No, se necesita conexión a internet para consultar los CEPs, ya que los datos vienen de la API ViaCEP en tiempo real. La app detecta la ausencia de conexión y muestra un mensaje de error adecuado sin congelar la interfaz.',
  },
  'cep.faq3-q': { pt: 'Consigo buscar CEPs de outros países?', en: 'Can I look up postal codes from other countries?', es: '¿Puedo buscar códigos postales de otros países?' },
  'cep.faq3-a': {
    pt: 'Não, o BuscaCep_las é especializado nos CEPs brasileiros. A API ViaCEP cobre apenas o Brasil. Para outros países seria necessário integrar APIs diferentes, o que não está nos planos atuais do app.',
    en: "No, BuscaCep_las is specialized in Brazilian CEPs. The ViaCEP API only covers Brazil. Other countries would require integrating different APIs, which isn't in the app's current plans.",
    es: 'No, BuscaCep_las está especializado en los CEPs brasileños. La API ViaCEP solo cubre Brasil. Para otros países sería necesario integrar APIs diferentes, algo que no está en los planes actuales de la app.',
  },
  'cep.faq4-q': { pt: 'O app é gratuito?', en: 'Is the app free?', es: '¿La app es gratuita?' },
  'cep.faq4-a': {
    pt: 'Sim, 100% gratuito e sem anúncios. Não há compras dentro do app, não há limitação de consultas e não há nenhuma funcionalidade bloqueada. O app não monetiza o usuário de nenhuma forma.',
    en: "Yes, 100% free and ad-free. There are no in-app purchases, no limit on lookups, and no locked features. The app doesn't monetize users in any way.",
    es: 'Sí, 100% gratuita y sin anuncios. No hay compras dentro de la app, no hay límite de consultas y no hay ninguna función bloqueada. La app no monetiza al usuario de ninguna forma.',
  },
  'cep.faq5-q': { pt: 'Como funciona a busca por endereço?', en: 'How does the address search work?', es: '¿Cómo funciona la búsqueda por dirección?' },
  'cep.faq5-a': {
    pt: 'Na aba de busca por endereço, informe o estado (UF de 2 letras, ex: SP), a cidade e o logradouro (nome da rua, avenida etc.). O app consulta a ViaCEP e retorna uma lista com todos os CEPs que correspondem ao endereço informado.',
    en: 'On the address search tab, enter the state (2-letter code, e.g. SP), the city, and the street name. The app queries ViaCEP and returns a list of every CEP matching the address you entered.',
    es: 'En la pestaña de búsqueda por dirección, indica el estado (código de 2 letras, ej: SP), la ciudad y la calle (nombre de la calle, avenida, etc.). La app consulta ViaCEP y devuelve una lista con todos los CEPs que corresponden a la dirección indicada.',
  },
  'cep.faq6-q': { pt: 'O app coleta ou armazena meus dados?', en: 'Does the app collect or store my data?', es: '¿La app recopila o almacena mis datos?' },
  'cep.faq6-a': {
    pt: 'Não. O app não armazena histórico de consultas, não coleta dados pessoais e não solicita nenhuma permissão do Android. Cada consulta é independente e descartada após exibir o resultado.',
    en: "No. The app doesn't store query history, doesn't collect personal data, and doesn't request any Android permissions. Each query is independent and discarded after showing the result.",
    es: 'No. La app no almacena historial de consultas, no recopila datos personales y no solicita ningún permiso de Android. Cada consulta es independiente y se descarta después de mostrar el resultado.',
  },
  'cep.cta-text': {
    pt: 'Consulte qualquer CEP do Brasil. Gratuito, rápido e sem anúncios.',
    en: 'Look up any CEP in Brazil. Free, fast, and ad-free.',
    es: 'Consulta cualquier CEP de Brasil. Gratis, rápido y sin anuncios.',
  },

  // ── LISTA DA CASA ──────────────────────────────────────────
  'lista.tagline': {
    pt: 'Esquecer o papel de compras ficou no passado. Organize suas compras por categoria, acompanhe o progresso no corredor do mercado e controle o orçamento mensal com gráficos. Sem internet, sem cadastro, sem complicação.',
    en: 'Forgetting the paper shopping list is a thing of the past. Organize your shopping by category, track progress in the store aisle, and control your monthly budget with charts. No internet, no sign-up, no hassle.',
    es: 'Olvidar el papel de la lista de compras quedó en el pasado. Organiza tus compras por categoría, sigue el progreso en el pasillo del supermercado y controla el presupuesto mensual con gráficos. Sin internet, sin registro, sin complicaciones.',
  },
  'lista.feature1': { pt: 'Múltiplas listas simultâneas por estabelecimento', en: 'Multiple simultaneous lists per store', es: 'Múltiples listas simultáneas por establecimiento' },
  'lista.feature2': { pt: 'Itens com categoria, quantidade e preço estimado', en: 'Items with category, quantity, and estimated price', es: 'Ítems con categoría, cantidad y precio estimado' },
  'lista.feature3': { pt: 'Marcação de itens já pegos no carrinho', en: 'Checking off items already in the cart', es: 'Marcado de ítems ya recogidos en el carrito' },
  'lista.feature4': { pt: 'Progresso da lista em tempo real (X de Y itens)', en: 'Real-time list progress (X of Y items)', es: 'Progreso de la lista en tiempo real (X de Y ítems)' },
  'lista.feature5': { pt: 'Histórico completo de compras finalizadas', en: 'Full history of completed purchases', es: 'Historial completo de compras finalizadas' },
  'lista.feature6': { pt: 'Gráficos de gastos mensais por categoria', en: 'Monthly spending charts by category', es: 'Gráficos de gastos mensuales por categoría' },
  'lista.feature7': { pt: '100% offline com Drift (SQLite) — sem internet', en: '100% offline with Drift (SQLite) — no internet', es: '100% offline con Drift (SQLite) — sin internet' },
  'lista.feature8': { pt: 'Interface para uso com uma mão — 3 idiomas', en: 'One-handed interface — 3 languages', es: 'Interfaz para uso con una sola mano — 3 idiomas' },
  'lista.about-p1': {
    pt: 'A Lista da Casa nasceu de um problema genuíno: listas de compras em papel se perdem, listas em aplicativos genéricos de notas são inflexíveis, e apps específicos de compras costumam ser pesados, cheios de anúncios ou exigem cadastro na nuvem. A proposta foi construir algo focado, leve e que funcione sem depender de internet.',
    en: 'Lista da Casa was born from a genuine problem: paper shopping lists get lost, generic notes apps are inflexible, and dedicated shopping apps tend to be heavy, full of ads, or require a cloud account. The goal was to build something focused, lightweight, and that works without depending on internet.',
    es: 'Lista da Casa nació de un problema genuino: las listas de compras en papel se pierden, las listas en apps genéricas de notas son inflexibles, y las apps específicas de compras suelen ser pesadas, llenas de anuncios o requieren registro en la nube. La propuesta fue construir algo enfocado, liviano y que funcione sin depender de internet.',
  },
  'lista.about-p2': {
    pt: 'Toda a persistência é feita com <strong>Drift</strong>, um ORM type-safe para SQLite no Flutter. Drift permite definir tabelas como classes Dart, escrever queries com verificação em tempo de compilação e receber streams reativos automaticamente — cada alteração em um item reflete instantaneamente em toda a interface sem `setState` manual.',
    en: 'All persistence is handled with <strong>Drift</strong>, a type-safe ORM for SQLite in Flutter. Drift lets you define tables as Dart classes, write queries with compile-time verification, and get reactive streams automatically — every change to an item reflects instantly across the whole interface without manual `setState`.',
    es: 'Toda la persistencia se hace con <strong>Drift</strong>, un ORM type-safe para SQLite en Flutter. Drift permite definir tablas como clases Dart, escribir queries con verificación en tiempo de compilación y recibir streams reactivos automáticamente — cada cambio en un ítem se refleja al instante en toda la interfaz sin `setState` manual.',
  },
  'lista.about-p3': {
    pt: 'O sistema de categorias é o diferencial central: cada item pertence a uma categoria (hortifruti, laticínios, limpeza, etc.), o que permite agrupar itens visualmente e gerar gráficos de gastos mensais por categoria. Ao longo do tempo, o usuário consegue ver em quais categorias está gastando mais e ajustar o orçamento doméstico com dados concretos.',
    en: 'The category system is the core differentiator: each item belongs to a category (produce, dairy, cleaning supplies, etc.), which allows grouping items visually and generating monthly spending charts by category. Over time, the user can see which categories they\'re spending the most on and adjust their household budget with concrete data.',
    es: 'El sistema de categorías es el diferencial central: cada ítem pertenece a una categoría (frutas y verduras, lácteos, limpieza, etc.), lo que permite agrupar ítems visualmente y generar gráficos de gastos mensuales por categoría. Con el tiempo, el usuario puede ver en qué categorías está gastando más y ajustar el presupuesto doméstico con datos concretos.',
  },
  'lista.about-p4': {
    pt: 'A interface foi projetada para uso com uma mão no corredor do supermercado: área de toque generosa, deslize para marcar itens, design neumórfico com alto contraste. Nenhuma ação crítica está a mais de dois toques de distância. Disponível em português, inglês e espanhol.',
    en: 'The interface was designed for one-handed use in the store aisle: generous tap areas, swipe to check off items, high-contrast neumorphic design. No critical action is more than two taps away. Available in Portuguese, English, and Spanish.',
    es: 'La interfaz fue diseñada para uso con una sola mano en el pasillo del supermercado: área de toque generosa, deslizar para marcar ítems, diseño neumórfico de alto contraste. Ninguna acción crítica está a más de dos toques de distancia. Disponible en portugués, inglés y español.',
  },
  'lista.about-p5': {
    pt: 'Sem cadastro, sem dados enviados a servidores. O banco de dados fica inteiramente no dispositivo. Gratuito de verdade.',
    en: 'No sign-up, no data sent to servers. The database stays entirely on the device. Truly free.',
    es: 'Sin registro, sin datos enviados a servidores. La base de datos permanece por completo en el dispositivo. Gratis de verdad.',
  },
  'lista.faq1-q': { pt: 'O app precisa de internet para funcionar?', en: 'Does the app need internet to work?', es: '¿La app necesita internet para funcionar?' },
  'lista.faq1-a': {
    pt: 'Não. O app é 100% offline. Todos os dados ficam armazenados localmente com SQLite (via Drift). Funciona normalmente em modo avião, sem Wi-Fi e sem dados móveis.',
    en: 'No. The app is 100% offline. All data is stored locally with SQLite (via Drift). It works normally in airplane mode, without Wi-Fi, and without mobile data.',
    es: 'No. La app es 100% offline. Todos los datos se almacenan localmente con SQLite (vía Drift). Funciona normalmente en modo avión, sin Wi-Fi y sin datos móviles.',
  },
  'lista.faq2-q': { pt: 'Posso ter listas para diferentes estabelecimentos?', en: 'Can I have lists for different stores?', es: '¿Puedo tener listas para diferentes establecimientos?' },
  'lista.faq2-a': {
    pt: 'Sim. É possível criar múltiplas listas simultâneas, cada uma com nome próprio — por exemplo, "Mercado", "Farmácia" e "Feira". As listas ficam salvas e podem ser retomadas a qualquer momento.',
    en: 'Yes. You can create multiple simultaneous lists, each with its own name — for example, "Grocery Store", "Pharmacy", and "Farmers Market". Lists are saved and can be resumed at any time.',
    es: 'Sí. Es posible crear múltiples listas simultáneas, cada una con nombre propio — por ejemplo, "Mercado", "Farmacia" y "Feria". Las listas quedan guardadas y pueden retomarse en cualquier momento.',
  },
  'lista.faq3-q': { pt: 'Como funciona o histórico e os gráficos de gastos?', en: 'How does the history and spending charts work?', es: '¿Cómo funcionan el historial y los gráficos de gastos?' },
  'lista.faq3-a': {
    pt: 'Ao finalizar uma compra, ela é movida para o histórico com a data e o total gasto. Na tela de gastos, gráficos mostram o valor mensal por categoria ao longo do tempo, permitindo identificar onde o orçamento doméstico está sendo mais consumido.',
    en: 'When you finish a purchase, it\'s moved to the history with the date and total spent. On the spending screen, charts show the monthly amount by category over time, letting you identify where the household budget is being consumed the most.',
    es: 'Al finalizar una compra, se mueve al historial con la fecha y el total gastado. En la pantalla de gastos, los gráficos muestran el valor mensual por categoría a lo largo del tiempo, permitiendo identificar dónde se consume más el presupuesto doméstico.',
  },
  'lista.faq4-q': { pt: 'Posso compartilhar a lista com outra pessoa?', en: 'Can I share the list with another person?', es: '¿Puedo compartir la lista con otra persona?' },
  'lista.faq4-a': {
    pt: 'Atualmente não há sincronização entre dispositivos nem compartilhamento direto. O app é focado em uso individual offline. Sincronização colaborativa é um recurso que pode ser adicionado em versões futuras.',
    en: "Currently there's no sync between devices or direct sharing. The app is focused on individual offline use. Collaborative sync is a feature that may be added in future versions.",
    es: 'Actualmente no hay sincronización entre dispositivos ni compartición directa. La app está enfocada en el uso individual offline. La sincronización colaborativa es una función que podría agregarse en versiones futuras.',
  },
  'lista.faq5-q': { pt: 'O app coleta ou envia meus dados?', en: 'Does the app collect or send my data?', es: '¿La app recopila o envía mis datos?' },
  'lista.faq5-a': {
    pt: 'Não. Nenhum dado é coletado, transmitido ou compartilhado. Todas as listas, itens e histórico ficam exclusivamente no banco de dados local do seu dispositivo Android. Não há cadastro, não há conta, não há servidor.',
    en: "No. No data is collected, transmitted, or shared. All lists, items, and history stay exclusively in your Android device's local database. No sign-up, no account, no server.",
    es: 'No. Ningún dato es recopilado, transmitido o compartido. Todas las listas, ítems e historial permanecen exclusivamente en la base de datos local de tu dispositivo Android. No hay registro, no hay cuenta, no hay servidor.',
  },
  'lista.faq6-q': { pt: 'O app é gratuito?', en: 'Is the app free?', es: '¿La app es gratuita?' },
  'lista.faq6-a': {
    pt: 'Sim, completamente gratuito. Sem compras dentro do app, sem assinatura e sem funcionalidades pagas. Todas as features estão disponíveis de imediato, para sempre, sem nenhuma condição.',
    en: 'Yes, completely free. No in-app purchases, no subscription, and no paid features. All features are available immediately, forever, with no strings attached.',
    es: 'Sí, completamente gratuita. Sin compras dentro de la app, sin suscripción y sin funciones de pago. Todas las funciones están disponibles de inmediato, para siempre, sin ninguna condición.',
  },
  'lista.cta-text': {
    pt: 'Organize suas compras de forma simples e offline. Gratuito para Android.',
    en: 'Organize your shopping simply and offline. Free for Android.',
    es: 'Organiza tus compras de forma simple y offline. Gratis para Android.',
  },

  // ── CAMPO MINADO EVOLUTION ─────────────────────────────────
  'campo.tagline': {
    pt: 'A mecânica que você já conhece — revelar células, marcar minas, raciocinar cada toque — com visuais em Material Design 3, efeitos sonoros, vibração tátil e estatísticas salvas por dificuldade.',
    en: 'The mechanics you already know — reveal cells, flag mines, think through every tap — with Material Design 3 visuals, sound effects, haptic feedback, and stats saved per difficulty.',
    es: 'La mecánica que ya conoces — revelar celdas, marcar minas, pensar cada toque — con visuales en Material Design 3, efectos de sonido, vibración táctil y estadísticas guardadas por dificultad.',
  },
  'campo.feature1': { pt: 'Mecânica 100% fiel ao Campo Minado original', en: 'Mechanics 100% faithful to the original Minesweeper', es: 'Mecánica 100% fiel al Buscaminas original' },
  'campo.feature2': { pt: '3 dificuldades: Fácil (9×9), Médio (16×16) e Difícil (16×30)', en: '3 difficulty levels: Easy (9×9), Medium (16×16), and Hard (16×30)', es: '3 dificultades: Fácil (9×9), Medio (16×16) y Difícil (16×30)' },
  'campo.feature3': { pt: 'Tabuleiros adaptativos — se ajustam ao tamanho da tela', en: 'Adaptive boards — adjust to screen size', es: 'Tableros adaptativos — se ajustan al tamaño de la pantalla' },
  'campo.feature4': { pt: 'Efeitos sonoros e vibração tátil configuráveis', en: 'Configurable sound effects and haptic feedback', es: 'Efectos de sonido y vibración táctil configurables' },
  'campo.feature5': { pt: 'Animações de célula reveal e explosão', en: 'Cell reveal and explosion animations', es: 'Animaciones de revelado de celda y explosión' },
  'campo.feature6': { pt: 'Tutorial interativo integrado para novatos', en: 'Built-in interactive tutorial for newcomers', es: 'Tutorial interactivo integrado para principiantes' },
  'campo.feature7': { pt: 'Estatísticas por dificuldade: melhor tempo e taxa de vitória', en: 'Stats per difficulty: best time and win rate', es: 'Estadísticas por dificultad: mejor tiempo y tasa de victoria' },
  'campo.feature8': { pt: 'Material Design 3, 5 idiomas, gratuito e offline', en: 'Material Design 3, 5 languages, free and offline', es: 'Material Design 3, 5 idiomas, gratuito y offline' },
  'campo.about-p1': {
    pt: 'Campo Minado Evolution é uma reescrita completa do Campo Minado clássico do Windows, construída em Flutter do zero para mobile. A premissa era simples: manter a mecânica intacta e elevar tudo ao redor — visual, som, tato e fluxo de jogo.',
    en: 'Campo Minado Evolution is a complete rewrite of the classic Windows Minesweeper, built in Flutter from scratch for mobile. The premise was simple: keep the mechanics intact and elevate everything around it — visuals, sound, touch feedback, and game flow.',
    es: 'Campo Minado Evolution es una reescritura completa del clásico Buscaminas de Windows, construida en Flutter desde cero para móviles. La premisa era simple: mantener la mecánica intacta y elevar todo lo demás — visuales, sonido, tacto y flujo de juego.',
  },
  'campo.about-p2': {
    pt: 'O tabuleiro é gerado algoritmicamente: as minas são distribuídas aleatoriamente após o primeiro clique do usuário, garantindo que a primeira célula revelada nunca seja uma mina. O cálculo de adjacentes percorre as 8 células vizinhas de cada posição, e o algoritmo de flood fill recursivo revela automaticamente as regiões seguras quando uma célula vazia é tocada.',
    en: 'The board is generated algorithmically: mines are randomly distributed after the user\'s first click, guaranteeing that the first revealed cell is never a mine. The adjacency calculation scans the 8 neighboring cells for each position, and a recursive flood fill algorithm automatically reveals safe regions when an empty cell is tapped.',
    es: 'El tablero se genera algorítmicamente: las minas se distribuyen aleatoriamente después del primer clic del usuario, garantizando que la primera celda revelada nunca sea una mina. El cálculo de adyacentes recorre las 8 celdas vecinas de cada posición, y el algoritmo de flood fill recursivo revela automáticamente las regiones seguras cuando se toca una celda vacía.',
  },
  'campo.about-p3': {
    pt: 'Os tabuleiros são adaptativos ao tamanho da tela: em dispositivos menores, as células se redimensionam automaticamente para que o tabuleiro inteiro caiba na tela sem scroll. Em dificuldade Difícil (16×30), o layout é otimizado para orientação paisagem com células menores mas ainda tocáveis.',
    en: 'Boards are adaptive to screen size: on smaller devices, cells automatically resize so the entire board fits on screen without scrolling. On Hard difficulty (16×30), the layout is optimized for landscape orientation with smaller but still tappable cells.',
    es: 'Los tableros se adaptan al tamaño de la pantalla: en dispositivos más pequeños, las celdas se redimensionan automáticamente para que el tablero completo quepa en la pantalla sin desplazamiento. En dificultad Difícil (16×30), el diseño se optimiza para orientación horizontal con celdas más pequeñas pero aún táctiles.',
  },
  'campo.about-p4': {
    pt: 'O sistema de estatísticas persiste localmente com <strong>SharedPreferences</strong>: melhor tempo e taxa de vitória são mantidos por dificuldade entre sessões. O timer da partida é preciso ao centésimo de segundo, e a tela de vitória exibe se o novo recorde foi batido.',
    en: 'The stats system persists locally with <strong>SharedPreferences</strong>: best time and win rate are kept per difficulty between sessions. The match timer is precise to the hundredth of a second, and the victory screen shows whether a new record was set.',
    es: 'El sistema de estadísticas persiste localmente con <strong>SharedPreferences</strong>: el mejor tiempo y la tasa de victoria se mantienen por dificultad entre sesiones. El cronómetro de la partida es preciso al centésimo de segundo, y la pantalla de victoria muestra si se batió un nuevo récord.',
  },
  'campo.about-p5': {
    pt: 'Efeitos sonoros e vibração tátil podem ser ativados ou desativados nas configurações. Desenvolvido com <strong>Flutter 3</strong> e <strong>Material Design 3</strong>, disponível em 5 idiomas e 100% offline.',
    en: 'Sound effects and haptic feedback can be turned on or off in the settings. Built with <strong>Flutter 3</strong> and <strong>Material Design 3</strong>, available in 5 languages and 100% offline.',
    es: 'Los efectos de sonido y la vibración táctil se pueden activar o desactivar en la configuración. Desarrollado con <strong>Flutter 3</strong> y <strong>Material Design 3</strong>, disponible en 5 idiomas y 100% offline.',
  },
  'campo.faq1-q': { pt: 'As regras são iguais ao Campo Minado do Windows?', en: 'Are the rules the same as Windows Minesweeper?', es: '¿Las reglas son iguales al Buscaminas de Windows?' },
  'campo.faq1-a': {
    pt: 'Sim. A mecânica é idêntica: toque para revelar uma célula, toque longo para marcar uma mina suspeita com bandeira. Se revelar uma mina, o jogo termina. Para vencer, é preciso revelar todas as células seguras sem acionar nenhuma mina.',
    en: 'Yes. The mechanics are identical: tap to reveal a cell, long-press to flag a suspected mine. If you reveal a mine, the game ends. To win, you need to reveal every safe cell without triggering a single mine.',
    es: 'Sí. La mecánica es idéntica: toca para revelar una celda, toque largo para marcar una mina sospechosa con bandera. Si revelas una mina, el juego termina. Para ganar, hay que revelar todas las celdas seguras sin activar ninguna mina.',
  },
  'campo.faq2-q': { pt: 'O primeiro clique sempre é seguro?', en: 'Is the first click always safe?', es: '¿El primer clic siempre es seguro?' },
  'campo.faq2-a': {
    pt: 'Sim. O tabuleiro é gerado após o primeiro toque, garantindo que a primeira célula revelada nunca seja uma mina. Esse comportamento é idêntico ao implementado nas versões originais do Windows XP e Vista.',
    en: 'Yes. The board is generated after the first tap, guaranteeing that the first revealed cell is never a mine. This behavior is identical to the original Windows XP and Vista implementations.',
    es: 'Sí. El tablero se genera después del primer toque, garantizando que la primera celda revelada nunca sea una mina. Este comportamiento es idéntico al implementado en las versiones originales de Windows XP y Vista.',
  },
  'campo.faq3-q': { pt: 'Posso desativar os sons e a vibração?', en: 'Can I turn off sounds and vibration?', es: '¿Puedo desactivar los sonidos y la vibración?' },
  'campo.faq3-a': {
    pt: 'Sim. Na tela de configurações é possível ativar ou desativar os efeitos sonoros e a vibração tátil de forma independente. As preferências são salvas entre sessões.',
    en: 'Yes. On the settings screen you can turn sound effects and haptic feedback on or off independently. Preferences are saved between sessions.',
    es: 'Sí. En la pantalla de configuración es posible activar o desactivar los efectos de sonido y la vibración táctil de forma independiente. Las preferencias se guardan entre sesiones.',
  },
  'campo.faq4-q': { pt: 'O app salva meu melhor tempo e histórico de vitórias?', en: 'Does the app save my best time and win history?', es: '¿La app guarda mi mejor tiempo e historial de victorias?' },
  'campo.faq4-a': {
    pt: 'Sim. O melhor tempo e a taxa de vitória (partidas ganhas / total de partidas) são registrados por dificuldade e persistem entre sessões. Na tela de estatísticas você pode ver o histórico de desempenho por nível.',
    en: 'Yes. Best time and win rate (matches won / total matches) are recorded per difficulty and persist between sessions. On the stats screen you can see your performance history per level.',
    es: 'Sí. El mejor tiempo y la tasa de victoria (partidas ganadas / total de partidas) se registran por dificultad y persisten entre sesiones. En la pantalla de estadísticas puedes ver el historial de desempeño por nivel.',
  },
  'campo.faq5-q': { pt: 'O app é gratuito?', en: 'Is the app free?', es: '¿La app es gratuita?' },
  'campo.faq5-a': {
    pt: 'Sim, 100% gratuito. Não há compras dentro do app, não há versão paga e não há funcionalidades bloqueadas. Jogue à vontade sem interrupções.',
    en: 'Yes, 100% free. There are no in-app purchases, no paid version, and no locked features. Play as much as you want, uninterrupted.',
    es: 'Sí, 100% gratuita. No hay compras dentro de la app, no hay versión de pago y no hay funciones bloqueadas. Juega a gusto sin interrupciones.',
  },
  'campo.faq6-q': { pt: 'Funciona offline?', en: 'Does it work offline?', es: '¿Funciona offline?' },
  'campo.faq6-a': {
    pt: 'Sim, completamente offline. O jogo não requer internet em nenhum momento. Funciona normalmente em modo avião, no metrô, em viagens ou em qualquer situação sem conexão.',
    en: 'Yes, completely offline. The game never requires internet. It works normally in airplane mode, on the subway, while traveling, or in any situation without a connection.',
    es: 'Sí, completamente offline. El juego no requiere internet en ningún momento. Funciona normalmente en modo avión, en el metro, de viaje o en cualquier situación sin conexión.',
  },
  'campo.cta-text': {
    pt: 'Redescubra o clássico que cresceu com você, agora com qualidade moderna no Android.',
    en: 'Rediscover the classic you grew up with, now with modern quality on Android.',
    es: 'Redescubre el clásico con el que creciste, ahora con calidad moderna en Android.',
  },

  // ── SELETOR DE IDIOMA (UI) ────────────────────────────────
  'lang.label':   { pt: 'Idioma', en: 'Language', es: 'Idioma' },
  'lang.pt':      { pt: 'Português', en: 'Portuguese', es: 'Portugués' },
  'lang.en':      { pt: 'Inglês',    en: 'English',    es: 'Inglés' },
  'lang.es':      { pt: 'Espanhol',  en: 'Spanish',    es: 'Español' },
  'lang.blog-only-pt': {
    pt: 'Este artigo está disponível apenas em português.',
    en: 'This article is only available in Portuguese.',
    es: 'Este artículo solo está disponible en portugués.',
  },
  'lang.legal-only-pt': {
    pt: 'Este conteúdo legal está disponível apenas em português.',
    en: 'This legal content is only available in Portuguese.',
    es: 'Este contenido legal solo está disponible en portugués.',
  },
};

// ── ENGINE ────────────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['pt', 'en', 'es'];
const DEFAULT_LANG = 'pt';

function detectLang() {
  let stored = null;
  try {
    stored = localStorage.getItem('lang');
  } catch { /* localStorage bloqueado (ex.: navegação privada) — segue sem persistência */ }
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
  if (browser === 'es') return 'es';
  if (browser === 'en') return 'en';
  return DEFAULT_LANG;
}

const OG_LOCALES = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };

function applyLang(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  window.currentLang = lang; // exposto para o script inline do form de contato em index.html
  try {
    localStorage.setItem('lang', lang);
  } catch { /* localStorage bloqueado — idioma não persiste entre páginas, mas a troca ainda funciona */ }

  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', OG_LOCALES[lang]);

  // Textos (innerHTML — algumas chaves carregam markup como <strong> ou <span>)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.innerHTML = translation;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.placeholder = translation;
  });

  // aria-label
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.setAttribute('aria-label', translation);
  });

  // alt (usado no badge "Disponível no Google Play")
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.dataset.i18nAlt;
    const translation = TRANSLATIONS[key]?.[lang];
    if (translation !== undefined) el.alt = translation;
  });

  // Atualizar estado visual do seletor
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });

  // Aviso de conteúdo apenas em PT (artigos do blog e política de privacidade)
  const blogNotice = document.getElementById('blog-lang-notice');
  if (blogNotice) blogNotice.style.display = lang !== 'pt' ? 'block' : 'none';

  const legalNotice = document.getElementById('legal-lang-notice');
  if (legalNotice) legalNotice.style.display = lang !== 'pt' ? 'block' : 'none';
}

function initI18n() {
  const lang = detectLang();
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
