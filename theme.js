// theme.js (use this on ALL pages)
const body  = document.body;

// 1) Apply saved theme on load (works on any page)
const saved = localStorage.getItem('theme');
if (saved === 'dark') body.classList.add('darkback');

// 2) Only wire up the button if this page has one (index)
const btn   = document.querySelector('#themeToggle');
const icon  = btn?.querySelector('.theme-icon');
const label = btn?.querySelector('.theme-label');

function syncUI() {
  const isDark = body.classList.contains('darkback');
  if (icon)  icon.textContent  = isDark ? '☀️' : '🌙';
  if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
}
syncUI();

btn?.addEventListener('click', () => {
  const isDark = body.classList.toggle('darkback');
  localStorage.setItem('theme', isDark ? 'dark' : 'light'); // ← save choice
  syncUI();
});
