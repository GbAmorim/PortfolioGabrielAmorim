// Dicionário de traduções
const translations = {
    pt: {
        sobre: "Sobre",
        skills: "Skills",
        projetos: "Projetos",
        contatos: "Contatos",
        heroText:
            "Olá, me chamo Gabriel Amorim de Ceia, sou desenvolvedor frontend com formação em Ciência da Computação. Antes de mergulhar no mundo da programação, atuei como artista 3D em projetos voltados para o metaverso e NFTs. Hoje, aplico minha criatividade no desenvolvimento de interfaces web, buscando unir design, usabilidade e performance em cada projeto.",
        skillsTitle: "Minhas habilidades",
        skillsLang: "Linguagens",
        skillsEstudando: "(Estudando)",
        skillsFerramentas: "Ferramentas",
        skillsSobre:
            "Ao longo da minha jornada como desenvolvedor frontend, tenho mergulhado nessas tecnologias, buscando sempre evoluir com cada projeto. A lista está sempre crescendo conforme novos desafios surgem.",
        skillsComunicacao: "Comunicação",
        skillsColaboracao: "Colaboração",
        skillsResolucao: "Resolução",
        skillsAdaptabilidade: "Adaptabilidade",
        skillsPontualidade: "Pontualidade",
        skillsDetalhismo: "Detalhismo",
        skillsCritica: "Crítica",
        skillsCriatividade: "Criatividade",
        projectsTitle: "Projetos",

        projetoPessoal: "PROJETO PESSOAL",
        projetoBreve: "EM BREVE",
        projetoPrimeirotitulo: "Réplica do Sistema de pedidos do MCDonald's",
        projetoPrimeirotexto:
            "Sistema de autoatendimento, como aqueles do Mc Donald 's e Burger King, onde você chega e faz o seu pedido sem falar com o atendente.",
        projetoButao: "Ver Projeto",

        projetoSegundotitulo: "Site de pesquisa de filmes",
        projetoSegundotexto:
            "Esse site possibilita o usuário a pesquisar filmes através de uma API e salva-los utilizando localstorage.",

        projetoTerceirotitulo: "Landing Page Bootstrap",
        projetoTerceirotexto:
            "Landing page desenvolvida através do curso de programação frontend da hashtag treinamentos.",

        projetoQuartotitulo: "Site - Portal Hashtag treinamentos",
        projetoQuartotexto:
            "Site desenvolvido no curso de programação da Hashtag Treinamentos, feito apenas em Css e Html.",

        projetoQuintotitulo: "Imersão Dev com Google Gemini (Alura)",
        projetoQuintotexto:
            "Essa aplicação te ajuda a encontrar as informações mais relevantes sobre cada carta, desde a descrição até o motivo de ela ser tão icônica.",

        projetoSextotitulo: "Sistema de Agendamento de barbearia",
        projetoSextotexto:
            "Esse sistema visa o agendamento de barbeiros pelos clientes, de forma simples e prática.",

        projetoSetimotitulo: "Landing page - Sass",
        projetoSetimotexto:
            "Landing page desenvolvido em Sass com responsividade mobile.",

        projetoButaovermais: "Veja mais projetos",

        contactTitle: "Entre em contato",
        contactText:
            "Estou aqui para ajudar você a criar soluções digitais que impulsionam o crescimento do seu negócio. Entre em contato e vamos conversar sobre suas necessidades e como podemos alcançar seus objetivos juntos.",

        contactLocalizacao: "Localização: Méier, Rio de Janeiro - RJ",
        contactClique: "Clique aqui para conversar",
        contactMensagem: "Envie sua mensagem",
        placeholderNome: "Seu nome",
        placeholderEmail: "Seu e-mail",
        placeholderMensagem: "Sua mensagem",
        contactEnviar: "Enviar",
    },
    en: {
        sobre: "About",
        skills: "Skills",
        projetos: "Projects",
        contatos: "Contacts",
        heroText:
            "Hello, my name is Gabriel Amorim de Ceia, I am a frontend developer with a degree in Computer Science. Before diving into the world of programming, I worked as a 3D artist on projects focused on the metaverse and NFTs. Today, I apply my creativity to web interface development, aiming to combine design, usability, and performance in every project.",
        skillsTitle: "My skills",
        skillsLang: "Languages",
        skillsEstudando: "(Studying)",
        skillsFerramentas: "Tools",
        skillsSobre:
            "Throughout my journey as a frontend developer, I have been diving into these technologies, always seeking to improve with each project. The list keeps growing as new challenges arise.",

        skillsComunicacao: "Communication",
        skillsColaboracao: "Collaboration",
        skillsResolucao: "Problem-solving",
        skillsAdaptabilidade: "Adaptability",
        skillsPontualidade: "Punctuality",
        skillsDetalhismo: "Detail-oriented",
        skillsCritica: "Critical Thinking",
        skillsCriatividade: "Creativity",

        projectsTitle: "Projects",

        projetoPessoal: "PERSONAL PROJECT",
        projetoBreve: "COMING SOON",
        projetoPrimeirotitulo: "Replica of McDonald's Ordering System",
        projetoPrimeirotexto:
            "Self-service system, like those at McDonald's and Burger King, where you can place your order without talking to the attendant.",
        projetoButao: "View Project",

        projetoSegundotitulo: "Movie Search Website",
        projetoSegundotexto:
            "This website allows the user to search for movies through an API and save them using localStorage.",

        projetoTerceirotitulo: "Bootstrap Landing Page",
        projetoTerceirotexto:
            "Landing page developed during the frontend programming course at Hashtag Treinamentos.",

        projetoQuartotitulo: "Website - Hashtag Treinamentos Portal",
        projetoQuartotexto:
            "Website developed in the Hashtag Treinamentos programming course, made only with CSS and HTML.",

        projetoQuintotitulo: "Dev Immersion with Google Gemini (Alura)",
        projetoQuintotexto:
            "This application helps you find the most relevant information about each card, from the description to the reason why it is so iconic.",

        projetoSextotitulo: "Barbershop Scheduling System",
        projetoSextotexto:
            "This system allows customers to schedule barbers in a simple and practical way.",

        projetoSetimotitulo: "Landing Page - Sass",
        projetoSetimotexto:
            "Landing page developed with Sass and mobile responsiveness.",

        projetoButaovermais: "See more projects",

        contactTitle: "Get in touch",
        contactText:
            "I am here to help you create digital solutions that drive your business growth. Get in touch and let’s talk about your needs and how we can achieve your goals together.",

        contactLocalizacao: "Location: Méier, Rio de Janeiro - RJ",
        contactClique: "Click here to chat",
        contactMensagem: "Send your message",
        placeholderNome: "Your name",
        placeholderEmail: "Your email",
        placeholderMensagem: "Your message",
        contactEnviar: "Send",
    },
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.setAttribute("placeholder", translations[lang][key]);
        } else {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem("lang", lang);
}

const brasilBtn = document.getElementById("brasil");
const usaBtn = document.getElementById("estadosunidos");

brasilBtn.addEventListener("click", () => changeLanguage("pt"));
usaBtn.addEventListener("click", () => changeLanguage("en"));

const savedLang = localStorage.getItem("lang") || "pt";
changeLanguage(savedLang);
