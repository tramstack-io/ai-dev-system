/* Minimal enhancements:
   - Adds a subtle reveal-on-scroll (optional).
   - Improves in-page anchor scrolling without hijacking navigation.
   - Respects prefers-reduced-motion.
*/

(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const themeToggleBtn = document.querySelector("[data-theme-toggle]");
  const themeToggleLabel = document.querySelector("[data-theme-toggle-label]");
  const THEME_KEY = "aios.theme";

  const getSystemTheme = () => {
    if (!window.matchMedia) return "dark";
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const getStoredTheme = () => {
    try {
      const v = localStorage.getItem(THEME_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;

    if (themeToggleBtn) {
      const next = theme === "dark" ? "light" : "dark";
      themeToggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      themeToggleBtn.setAttribute(
        "aria-label",
        `Switch to ${next === "light" ? "light" : "dark"} mode`
      );
    }

    if (themeToggleLabel) themeToggleLabel.textContent = theme === "light" ? "Light" : "Dark";
  };

  const bootTheme = () => {
    const stored = getStoredTheme();
    // Light is the default unless a user choice exists.
    applyTheme(stored ?? "light");
  };

  bootTheme();

  if (!prefersReduced) {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (els.length) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
      );

      for (const el of els) io.observe(el);
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = root.dataset.theme === "light" ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";

      if (!prefersReduced) {
        root.classList.add("theme-transition");
        window.setTimeout(() => root.classList.remove("theme-transition"), 220);
      }

      applyTheme(next);
      setStoredTheme(next);
    });
  }

  document.addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href^='#']") : null;
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    if (prefersReduced) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  });
})();
