// Lógica de la página: idioma, listas pintadas desde content.js y copiar correo.

const STORAGE_KEY = "lang";
let lang = "es";

// Traduce una clave; si falta en el idioma, usa el español
function t(key) {
  return TEXT[lang][key] ?? TEXT.es[key] ?? key;
}

// localStorage puede fallar (modo privado, cookies bloqueadas): por eso el try/catch
function loadLang() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function saveLang(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* sin almacenamiento: el idioma solo dura esta visita */
  }
}

// Crea un elemento con clase y texto en una sola línea
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

const ARROW =
  '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

function renderFeatures() {
  const list = document.getElementById("features-list");
  list.replaceChildren(...FEATURES.map((id) => el("li", "", t("feature." + id))));
}

// Datos clave: una lista de definiciones <dl> con pares <dt> (clave) y <dd> (valor)
function renderSpecs() {
  const list = document.getElementById("specs-list");
  list.replaceChildren(
    ...SPECS.flatMap((id) => {
      const value = el("dd", id === "status" ? "specs__status" : "", t(`spec.${id}.v`));
      return [el("dt", "", t(`spec.${id}.k`)), value];
    })
  );
}

// Especificaciones: una fila de tabla por categoría
function renderStack() {
  const body = document.getElementById("stack-list");
  body.replaceChildren(
    ...STACK.map((group) => {
      const row = el("tr", group.learning ? "is-learning" : "");
      const category = el("th", "", t("stack." + group.id));
      category.scope = "row";
      const status = el("td", "status", t(group.learning ? "stack.learningNow" : "stack.inUse"));
      row.append(category, el("td", "", group.items.join(" · ")), status);
      return row;
    })
  );
}

function renderProjects() {
  const list = document.getElementById("projects-list");
  list.replaceChildren(
    ...PROJECTS.map((p) => {
      const item = el("li", "project" + (p.featured ? " project--featured" : ""));

      const ref = el("span", "project__ref", p.ref);
      if (p.featured) ref.append(el("span", "project__badge", t("projects.featured")));

      const head = el("div", "project__head");
      head.append(el("h3", "", p.name), el("p", "project__kind", t(`projects.${p.id}.kind`)));

      const body = el("div", "project__body");
      const role = el("p", "project__role");
      role.append(el("strong", "", t("projects.role") + ": "), t(`projects.${p.id}.role`));
      const tech = el("ul", "project__tech");
      tech.setAttribute("aria-label", lang === "es" ? "Tecnologías" : "Technologies");
      p.tech.forEach((name) => tech.append(el("li", "", name)));
      const link = el("a", "project__link");
      link.href = p.repo;
      link.target = "_blank";
      link.rel = "noopener";
      link.innerHTML = `<span>${t("projects.repo")}</span>${ARROW}`;
      link.setAttribute("aria-label", `${t("projects.repo")}: ${p.name} (GitHub)`);

      body.append(el("p", "", t(`projects.${p.id}.desc`)), role, tech, link);
      item.append(ref, head, body);
      return item;
    })
  );
}

// Historial de revisiones: una fila por etapa; la siguiente aún está pendiente
function renderPath() {
  const body = document.getElementById("path-list");
  body.replaceChildren(
    ...PATH.map(({ id, rev }) => {
      const row = el("tr", id === "next" ? "is-pending" : "");
      const desc = el("td");
      desc.append(el("strong", "", t(`path.${id}.what`)), el("p", "", t(`path.${id}.desc`)));
      row.append(el("td", "rev", rev), el("td", "date", t(`path.${id}.when`)), desc);
      return row;
    })
  );
}

function applyLang(value) {
  lang = value;
  document.documentElement.lang = lang;
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    node.alt = t(node.dataset.i18nAlt);
  });

  // El botón muestra el OTRO idioma, así que su atributo lang es el contrario
  document.getElementById("lang-toggle").lang = lang === "es" ? "en" : "es";

  renderFeatures();
  renderSpecs();
  renderStack();
  renderProjects();
  renderPath();
  updateThemeButton(); // su etiqueta también depende del idioma
}

// ---------- Tema claro / oscuro ----------
// El script del <head> ya aplicó el tema guardado. Si no hay ninguno
// guardado, manda el del sistema (prefers-color-scheme) vía CSS.
const themeButton = document.getElementById("theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function updateThemeButton() {
  const dark = currentTheme() === "dark";
  // El botón dice lo que VA a hacer: si está oscuro, "activar modo claro"
  themeButton.setAttribute("aria-label", t(dark ? "nav.themeLight" : "nav.themeDark"));
  document.querySelector('meta[name="theme-color"]').content = dark ? "#121417" : "#f6f6f4";
}

function themeChanged() {
  updateThemeButton();
}

themeButton.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* sin almacenamiento: el tema solo dura esta visita */
  }
  themeChanged();
});

// Si cambia el tema del sistema y la persona no eligió uno, se repinta
systemDark.addEventListener("change", () => {
  if (!document.documentElement.dataset.theme) themeChanged();
});

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = lang === "es" ? "en" : "es";
  saveLang(next);
  applyLang(next);
});

// Copiar el correo al portapapeles y avisar (role="status" lo lee el lector de pantalla)
const copyButton = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");
let copyTimer;

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONTACT.email);
    copyStatus.textContent = t("contact.copied");
  } catch {
    // Si el navegador no deja copiar, el correo sigue visible para copiarlo a mano
    copyStatus.textContent = CONTACT.email;
  }
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copyStatus.textContent = ""), 2500);
});

applyLang(loadLang());
