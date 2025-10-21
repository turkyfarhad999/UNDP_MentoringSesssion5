// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navlist = document.getElementById("navlist");
if (menuBtn && navlist) {
  menuBtn.addEventListener("click", () => {
    const nowOpen = !navlist.classList.contains("open");
    navlist.classList.toggle("open", nowOpen);
    menuBtn.setAttribute("aria-expanded", String(nowOpen));
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle (light/dark)
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") root.classList.add("light");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light");
    localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
  });
}
