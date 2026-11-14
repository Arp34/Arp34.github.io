// Todo el texto del sitio vive aquí, en español (es) y en inglés (en).
// Para cambiar un texto o añadir un proyecto, se edita este archivo y nada más:
// main.js lee estos datos y los pinta en el HTML.

const CONTACT = {
  email: "axelpolo3477@gmail.com",
  github: "https://github.com/Arp34",
  linkedin: "https://www.linkedin.com/in/axel-ruiz-polo/",
  cv: "assets/cv/CV-Axel-Ruiz-Polo.pdf",
};

// Lista de características (la primera sección de un datasheet)
const FEATURES = ["api", "auth", "db", "tooling"];

// Datos clave bajo la foto
const SPECS = ["role", "focus", "location", "status", "languages"];

// Especificaciones: el stack por categorías. "learning" = aún aprendiendo.
const STACK = [
  { id: "backend", items: ["Node.js", "Express", "NestJS", "TypeScript"] },
  { id: "data", items: ["PostgreSQL", "MySQL", "TypeORM", "Sequelize"] },
  { id: "tools", items: ["Docker", "Git", "GitHub Actions", "Swagger", "Jest", "Vitest"] },
  { id: "frontend", items: ["HTML", "CSS", "JavaScript", "Tailwind"] },
  { id: "learning", items: ["Angular", "Spark"], learning: true },
];

// Del proyecto más completo al más sencillo; "ref" es su código en la tabla
const PROJECTS = [
  {
    id: "restaurant",
    ref: "P-04",
    name: "Restaurant API",
    repo: "https://github.com/Arp34/Proyecto-NestJS",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "Passport + JWT", "Jest", "GitHub Actions"],
    featured: true,
  },
  {
    id: "fleetcore",
    ref: "P-03",
    name: "FleetCore API",
    repo: "https://github.com/Arp34/fleetcore-api",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger", "Docker", "Vitest"],
  },
  {
    id: "template",
    ref: "P-02",
    name: "API Template",
    repo: "https://github.com/Arp34/api-template",
    tech: ["Express", "TypeScript", "Sequelize", "PostgreSQL", "Docker"],
  },
  {
    id: "taskflow",
    ref: "P-01",
    name: "TaskFlow SPA",
    repo: "https://github.com/Arp34/TaskFlow_Arp",
    tech: ["JavaScript", "HTML", "CSS", "Tailwind", "json-server"],
  },
];

// Historial de revisiones (la trayectoria), de la más antigua a la siguiente
const PATH = [
  { id: "incatec", rev: "A" },
  { id: "petromil", rev: "B" },
  { id: "riwi", rev: "C" },
  { id: "next", rev: "D" },
];

const TEXT = {
  es: {
    "meta.title": "Axel Ruiz Polo · Desarrollador Full Stack Junior",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.path": "Trayectoria",
    "nav.contact": "Contacto",
    "nav.lang": "English",
    "nav.themeDark": "Activar modo oscuro",
    "nav.themeLight": "Activar modo claro",
    "nav.sections": "Secciones",
    "nav.menuOpen": "Abrir menú",
    "nav.menuClose": "Cerrar menú",

    "doc.type": "Ficha técnica",
    "doc.rev": "Rev. 2026.11",
    "doc.page": "Pág. 1/1",

    "hero.role": "Desarrollador Full Stack Junior",
    "hero.featuresTitle": "Características",
    "hero.descTitle": "Descripción",
    "hero.lead":
      "Construyo APIs con Node.js y NestJS: TypeScript, bases de datos SQL, autenticación y Docker. Ahora aprendo Angular para cubrir también el frontend.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaCv": "Descargar CV",
    "hero.photoAlt": "Foto de Axel Ruiz Polo",
    "hero.figure": "Fig. 1 — Axel Ruiz Polo, Barranquilla",

    "feature.api": "APIs REST con NestJS y Express en TypeScript",
    "feature.auth": "Autenticación con JWT, roles y API keys",
    "feature.db": "PostgreSQL y MySQL con TypeORM y Sequelize",
    "feature.tooling": "Docker, Swagger, tests con Jest y Vitest, y CI con GitHub Actions",

    "spec.role.k": "Rol",
    "spec.role.v": "Full Stack Junior",
    "spec.focus.k": "Enfoque",
    "spec.focus.v": "Backend · Node.js · NestJS",
    "spec.location.k": "Ubicación",
    "spec.location.v": "Barranquilla, CO · remoto",
    "spec.status.k": "Estado",
    "spec.status.v": "Disponible para trabajar",
    "spec.languages.k": "Idiomas",
    "spec.languages.v": "Español nativo · Inglés A2",

    "stack.title": "Especificaciones",
    "stack.intro": "Tecnologías con las que he construido proyectos.",
    "stack.colCategory": "Categoría",
    "stack.colTech": "Tecnologías",
    "stack.colStatus": "Estado",
    "stack.inUse": "En uso",
    "stack.learningNow": "Aprendiendo",
    "stack.backend": "Backend",
    "stack.data": "Bases de datos",
    "stack.tools": "Herramientas",
    "stack.frontend": "Frontend",
    "stack.learning": "En curso",

    "projects.title": "Proyectos",
    "projects.intro": "Proyectos formativos de Riwi, del más completo al más sencillo.",
    "projects.featured": "Destacado",
    "projects.role": "Mi papel",
    "projects.repo": "Ver código",
    "projects.restaurant.kind": "En equipo · Líder · Backend",
    "projects.restaurant.desc":
      "API para gestionar un restaurante: mesas, reservas, clientes, productos y categorías. Quedó inconclusa porque nos cambiaron de equipo.",
    "projects.restaurant.role":
      "Lideré el proyecto en un equipo de 5 personas: lo inicié, hice la base de autenticación, el manejo global de errores, el módulo de categorías con tests y el CI, y revisé la mayoría de los pull requests.",
    "projects.fleetcore.kind": "Individual · Backend",
    "projects.fleetcore.desc":
      "API REST para el mantenimiento preventivo y correctivo de una flota de vehículos, con historial de cambios de estado.",
    "projects.fleetcore.role":
      "La hice entera yo: autenticación con JWT y API keys, roles, datos de prueba, documentación Swagger, colección de Postman y tests.",
    "projects.template.kind": "Plantilla propia · Backend",
    "projects.template.desc":
      "Base reutilizable para empezar APIs en Express con TypeScript, Sequelize y PostgreSQL en Docker.",
    "projects.template.role":
      "La armé para no repetir la configuración en cada proyecto: estructura, variables de entorno, base de datos y guía de arranque.",
    "projects.taskflow.kind": "Formativo · Frontend",
    "projects.taskflow.desc":
      "Aplicación de una sola página para gestionar tareas, sin frameworks: rutas con History API, sesión, roles y rutas protegidas.",
    "projects.taskflow.role":
      "Organizar el código por capas (router, vistas, componentes, servicios) y proteger rutas según el rol del usuario.",

    "path.title": "Historial de revisiones",
    "path.intro": "Mi trayectoria, como las revisiones de un documento.",
    "path.colRev": "Rev.",
    "path.colDate": "Fecha",
    "path.colDesc": "Descripción",
    "path.incatec.when": "2024 – 2025",
    "path.incatec.what": "Técnico Auxiliar Administrativo · INCATEC",
    "path.incatec.desc": "De ahí vienen mi orden y mi costumbre de documentar todo.",
    "path.petromil.when": "Dic 2024 – May 2025",
    "path.petromil.what": "Practicante · Grupo Petromil",
    "path.petromil.desc": "Gestión documental, solicitudes en SAP, normalización de archivos Excel y atención de PQRS.",
    "path.riwi.when": "Mar 2026 – hoy",
    "path.riwi.what": "Coder en Riwi",
    "path.riwi.desc":
      "Formación intensiva como desarrollador: Node.js, NestJS, bases de datos y trabajo en equipo con metodologías ágiles.",
    "path.next.when": "Pendiente",
    "path.next.what": "Mi primera experiencia como desarrollador",
    "path.next.desc":
      "Prácticas, puesto junior o freelance: busco un equipo donde aportar en backend y seguir creciendo hacia full stack.",

    "contact.title": "Contacto",
    "contact.lead": "Si buscas a alguien para tu equipo o para un proyecto, escríbeme.",
    "contact.copy": "Copiar correo",
    "contact.copied": "Correo copiado",
    "contact.signature": "Axel Ruiz Polo · Ficha técnica · Rev. 2026.11 · Pág. 1/1",
  },

  en: {
    "meta.title": "Axel Ruiz Polo · Junior Full Stack Developer",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.path": "Path",
    "nav.contact": "Contact",
    "nav.lang": "Español",
    "nav.themeDark": "Switch to dark mode",
    "nav.themeLight": "Switch to light mode",
    "nav.sections": "Sections",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",

    "doc.type": "Datasheet",
    "doc.rev": "Rev. 2026.11",
    "doc.page": "Page 1/1",

    "hero.role": "Junior Full Stack Developer",
    "hero.featuresTitle": "Features",
    "hero.descTitle": "Description",
    "hero.lead":
      "I build APIs with Node.js and NestJS: TypeScript, SQL databases, authentication and Docker. Right now I am learning Angular to cover the frontend too.",
    "hero.ctaProjects": "See projects",
    "hero.ctaCv": "Download CV",
    "hero.photoAlt": "Photo of Axel Ruiz Polo",
    "hero.figure": "Fig. 1 — Axel Ruiz Polo, Barranquilla",

    "feature.api": "REST APIs with NestJS and Express in TypeScript",
    "feature.auth": "Authentication with JWT, roles and API keys",
    "feature.db": "PostgreSQL and MySQL with TypeORM and Sequelize",
    "feature.tooling": "Docker, Swagger, tests with Jest and Vitest, and CI with GitHub Actions",

    "spec.role.k": "Role",
    "spec.role.v": "Junior Full Stack",
    "spec.focus.k": "Focus",
    "spec.focus.v": "Backend · Node.js · NestJS",
    "spec.location.k": "Location",
    "spec.location.v": "Barranquilla, CO · remote",
    "spec.status.k": "Status",
    "spec.status.v": "Open to work",
    "spec.languages.k": "Languages",
    "spec.languages.v": "Spanish native · English A2",

    "stack.title": "Specifications",
    "stack.intro": "Technologies I have built projects with.",
    "stack.colCategory": "Category",
    "stack.colTech": "Technologies",
    "stack.colStatus": "Status",
    "stack.inUse": "In use",
    "stack.learningNow": "Learning",
    "stack.backend": "Backend",
    "stack.data": "Databases",
    "stack.tools": "Tools",
    "stack.frontend": "Frontend",
    "stack.learning": "In progress",

    "projects.title": "Projects",
    "projects.intro": "Training projects from Riwi, from the most complete to the simplest.",
    "projects.featured": "Featured",
    "projects.role": "My part",
    "projects.repo": "View code",
    "projects.restaurant.kind": "Team · Lead · Backend",
    "projects.restaurant.desc":
      "API to manage a restaurant: tables, bookings, customers, products and categories. Unfinished because our team was reassigned.",
    "projects.restaurant.role":
      "I led the project in a team of 5: I started it and built the authentication base, global error handling, the categories module with tests and the CI, and reviewed most pull requests.",
    "projects.fleetcore.kind": "Solo · Backend",
    "projects.fleetcore.desc":
      "REST API for preventive and corrective maintenance of a vehicle fleet, with a history of status changes.",
    "projects.fleetcore.role":
      "I built all of it: JWT and API key authentication, roles, seed data, Swagger docs, a Postman collection and tests.",
    "projects.template.kind": "My own template · Backend",
    "projects.template.desc":
      "Reusable starting point for Express APIs with TypeScript, Sequelize and PostgreSQL in Docker.",
    "projects.template.role":
      "I built it so I don't repeat the setup in every project: structure, environment variables, database and a setup guide.",
    "projects.taskflow.kind": "Training · Frontend",
    "projects.taskflow.desc":
      "Single page app to manage tasks, without frameworks: History API routing, session, roles and protected routes.",
    "projects.taskflow.role":
      "Organising the code in layers (router, views, components, services) and protecting routes by user role.",

    "path.title": "Revision history",
    "path.intro": "My path, as the revisions of a document.",
    "path.colRev": "Rev.",
    "path.colDate": "Date",
    "path.colDesc": "Description",
    "path.incatec.when": "2024 – 2025",
    "path.incatec.what": "Administrative Assistant diploma · INCATEC",
    "path.incatec.desc": "Where my habit of keeping things tidy and documented comes from.",
    "path.petromil.when": "Dec 2024 – May 2025",
    "path.petromil.what": "Intern · Grupo Petromil",
    "path.petromil.desc": "Document management, SAP requests, cleaning up Excel files and handling customer requests.",
    "path.riwi.when": "Mar 2026 – now",
    "path.riwi.what": "Coder at Riwi",
    "path.riwi.desc":
      "Intensive developer training: Node.js, NestJS, databases and teamwork with agile methods.",
    "path.next.when": "Pending",
    "path.next.what": "My first developer role",
    "path.next.desc":
      "Internship, junior role or freelance: looking for a team where I can help on the backend and keep growing towards full stack.",

    "contact.title": "Contact",
    "contact.lead": "If you need someone for your team or for a project, write to me.",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied",
    "contact.signature": "Axel Ruiz Polo · Datasheet · Rev. 2026.11 · Page 1/1",
  },
};
