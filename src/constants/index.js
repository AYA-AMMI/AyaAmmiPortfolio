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
    { value: 3, suffix: "+", label: "Years of Study" },
    { value: 15, suffix: "+", label: "Projects Built" },
    { value: 10, suffix: "+", label: "Technologies Used" },
    { value: 1, suffix: "", label: "Internship Experience" },
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
        review: "During my internship, I demonstrated both strong initiative and technical skills. I made a meaningful contribution to the Aladilemma platform and consistently delivered clean, well-thought-out code.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Software Engineering Intern",
        date: "July 2025 – August 2025",
        responsibilities: [
            "Developed features for the 'Aladilemma' web platform using Symfony, PHP, JavaScript, and CSS.",
            "Designed and implemented interactive UI components to enhance the user experience.",
            "Optimized backend logic and collaborated using Git for version control and issue tracking.",
        ],
    },
    {
        review: "A self-driven student with a strong passion for building real software. My academic projects show a solid grasp of both backend and desktop development.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Software Engineering Student",
        date: "September 2022 – Present",
        responsibilities: [
            "Pursuing an Engineer's Degree in Computer Science at ENSA Oujda (ENSAO).",
            "Building full-stack web apps, desktop applications, and REST APIs as part of coursework.",
            "Actively learning Data & AI technologies to apply in real-world projects.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
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
        name: "CiviTrack",
        mentions: "@AYA-AMMI/CiviTrack",
        review:
            "A mobile app that empowers citizens to report urban issues with photos and automatic geolocation. A real-world civic tech solution built for impact.",
        imgPath: "/images/projects/civitrack.png",
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
        name: "Image Classification System",
        mentions: "@AYA-AMMI",
        review:
            "An ML pipeline combining color, shape, and texture features (HOG, LBP, RGB histograms) with a Random Forest classifier achieving 89.47% accuracy, served via a Streamlit web interface.",
        imgPath: "/images/projects/ICS.png",
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