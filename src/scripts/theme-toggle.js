document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLink = document.getElementById('theme-link');
  const icon = themeToggle.querySelector('.theme-toggle__icon');

  themeToggle.addEventListener('click', () => {
    const isLight = themeLink.getAttribute('href').includes('light.css');
    themeLink.setAttribute('href', isLight ? '/src/styles/colors/dark.css' : '/src/styles/colors/light.css');
    icon.textContent = isLight ? '☀️' : '🌙';
  });
});
