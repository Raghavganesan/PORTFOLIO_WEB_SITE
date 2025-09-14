
const body  = document.body;


const saved = localStorage.getItem('theme');
if (saved === 'dark') body.classList.add('darkback');


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
