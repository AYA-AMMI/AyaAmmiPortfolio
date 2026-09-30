const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const navLinks = [
    {
        name: "Projects",
        link: "#projects ",
    },
    {
        name: "Journey ",
        link: "#journey ",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];


const counterItems = [
    { value: 5, suffix: "+", label: "Years of Study" },
    { value: 15, suffix: "+", label: "Projects Built" },
    { value: 10, suffix: "+", label: "Technologies Used" },
    { value: 2, suffix: "", label: "Internship Experiences" },
];

const logoIconsList = [
    { imgPath: "/images/logos/git.png" },
    { imgPath: "/images/logos/java.png" },
    { imgPath: "/images/logos/java-script.png" },
    { imgPath: "/images/logos/node.png" },
    { imgPath: "/images/logos/php.png" },
    { imgPath: "/images/logos/python.png" },
    { imgPath: "/images/logos/react.png" },
    { imgPath: "/images/logos/sql.png" },
    { imgPath: "/images/logos/three.png" }
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Clean Code",
        desc: "Writing maintainable, modular code with attention to architecture and best practices.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Team Collaboration",
        desc: "Working effectively in teams using Git, agile methods, and open communication.",
    },
    {
        imgPath: "/images/time.png",
        title: "Fast Learner",
        desc: "Continuously picking up new technologies and applying them to real-world projects.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
    {
        name: "Java Developer",
        imgPath: "/images/logos/java.png",
    },
    {
        name: "Web Developer",
        imgPath: "/images/logos/symfony.png",
    },
    {
        name: "Frontend Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Version Control",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "A self-driven student with a strong passion for building real software. My academic projects show a solid grasp of both backend and desktop development.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo1.png",
        title: "Software Engineering Student",
        date: "September 2022 – Present (graduating 2027)",
        responsibilities: [
            "Pursuing an Engineer's Degree in Computer Engineering at ENSA Oujda, now in my 5th year, specializing in Software Engineering and AI.",
            "Building full-stack web apps, desktop applications, and REST APIs as part of coursework.",
            "Completed two internships and joined the Maison des Sciences alongside my studies (see below).",
        ],
    },
    {
        review: "Sharing science and technology with students and the public: mentoring, workshops, and live demos of projects built with my team.",
        imgPath: "/images/foia-logo.png",
        logoPath: "/images/logo2.png",
        title: "Science Educator — Maison des Sciences",
        date: "September 2025 – Present",
        responsibilities: [
            "Member of the Maison des Sciences (Fondation Omar Ibn Abdelaziz), helping supervise and run the pedagogical program: guiding students from discovering scientific fields to orientation, project building, and competitions.",
            "Organizer and facilitator at the 13th Science Festival of the Oriental (Oujda, February 12–14, 2026), presenting to the public a Python-based plant-disease detection prototype built with my team.",
        ],
    },
    {
        review: "During my internship, I demonstrated both strong initiative and technical skills. I made a meaningful contribution to the Aladilemma platform and consistently delivered clean, well-thought-out code.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/maison-d-ia.png",
        title: "Web Developer Intern — La Maison de l'Intelligence Artificielle",
        date: "July 2025 – August 2025",
        responsibilities: [
            "Analyzed the existing 'Aladilemma' platform, a multilingual ethical-dilemma research platform inspired by the Moral Machine Experiment, and rebuilt it from scratch with Symfony, PHP, MySQL, JavaScript, and CSS.",
            "Designed and implemented an admin dashboard and interactive UI components, with GDPR-compliant data collection.",
            "Collaborated using Git for version control and issue tracking.",
        ],
    },
    {
        review: "Two months on a live platform: shipping features end to end, keeping the API reliable, and catching issues before production.",
        imgPath: "/images/Afriqu-IA.png",
        logoPath: "/images/logo4.png",
        title: "Software Engineering Intern — Afriq'AI Institute",
        date: "2026 · 2 months",
        responsibilities: [
            "Took over and maintained an existing platform for Africa's AI ecosystem (members, events, publications, country rankings) with Spring Boot 3 / Java 21, PostgreSQL, React and TypeScript.",
            "Worked in a team of 6 and delivered 6 end-to-end business features; managed 50+ API endpoints secured with JWT.",
            "Identified 8 anomalies before production through API testing with Bruno and code reviews; deployed with Docker and GitLab CI/CD.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/maison-d-ia.png",
    },
    {
        name: "logo2",
        imgPath: "/images/foia-logo.png",
    },
    {
        name: "logo3",
        imgPath: "/images/exp2.png",
    },
    {
        name: "logo4",
        imgPath: "/images/Afriqu-IA.png",
    },
];

const projects  = [
    {
        name: "InternMatch",
        mentions: "@AYA-AMMI/InternMatch",
        review:
            "A smart student-business networking platform that automates internship matching using an intelligent algorithm. Built with Symfony, PHP, Bootstrap, and Chart.js.",
        imgPath: "/images/projects/internmatch.png",
    },
    {
        name: "Engineer Management API",
        mentions: "@AYA-AMMI/engineer-management-api",
        review:
            "A RESTful API built with Spring Boot, PostgreSQL, and Docker, featuring AI integration via Ollama to generate personalized learning path recommendations for engineers.",
        imgPath: "/images/projects/api.png",
    },
    {
        name: "MedecinApp",
        mentions: "@AYA-AMMI/medecin_app",
        review:
            "A desktop app for managing patients and medical treatments with full CRUD functionality, statistical visualizations, and JavaFX — built to support clinical decision-making.",
        imgPath: "/images/projects/medecinapp.png",
    },
    {
        name: "Library Management System",
        mentions: "@AYA-AMMI/Library-Management-System",
        review:
            "A complete Python desktop app to manage books, members, and borrow/return operations — built with OOP principles, Tkinter, and Matplotlib for a clean, modular codebase.",
        imgPath: "/images/projects/LMS.png",
    },
    {
        name: "AI for Inclusion — Bias Detection Auditor",
        mentions: "Private repository",
        review:
            "An AI-powered auditor that scores job postings for gender bias in text and images, combining NLP (spaCy, mDeBERTa) and Computer Vision (DeepFace) into a single inclusivity score. Final Year Project (PFA) at ENSAO — source code is private, available on request.",
    },
    {
        name: "E-commerce Microservices",
        mentions: "@AYA-AMMI",
        review:
            "An e-commerce application designed as a microservices architecture with Java 17 and Spring Boot: Spring Data JPA with MySQL and MongoDB, asynchronous messaging with RabbitMQ/Kafka, authentication with Keycloak, Docker containers, and automated tests with JUnit and Testcontainers.",
        // imgPath: "/images/projects/ecommerce.png", // optionnel : ajoute une capture puis decommente
    },
    {
        name: "Todo List App",
        mentions: "@AYA-AMMI/todo-list",
        review:
            "A full-stack Todo List application built with React (Vite), Express.js, and MongoDB. Users create, update, complete, and delete tasks through a responsive interface backed by a REST API, with a Dockerized MongoDB environment.",
        // imgPath: "/images/projects/todolist.png", // optionnel : ex. une capture du dossier screenshots du depot
    },
];

const socialImgs = [

    {
        name: "github",
        imgPath: "/images/github.png",
        url: "https://github.com/AYA-AMMI",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url: "https://linkedin.com/in/ammi-aya",
    },
    {
        name: "email",
        imgPath: "/images/email.png",
        url: "mailto:ammiaya1502@gmail.com",
    },
    {
        name: "insta",
        imgPath: "/images/insta.png",
        url: "https://www.instagram.com/ammi.aya/",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    projects ,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};