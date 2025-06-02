class ThemeManager {
  constructor() {
    this.themes = {
      light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8f9fa',
        '--text-primary': '#212529',
        '--text-secondary': '#6c757d',
        '--accent-primary': '#0d6efd',
        '--accent-secondary': '#6610f2',
        '--code-bg': '#f8f9fa',
        '--blockquote-bg': '#f8f9fa',
        '--border-color': '#dee2e6'
      },
      dark: {
        '--bg-primary': '#282a36',
        '--bg-secondary': '#44475a',
        '--text-primary': '#f8f8f2',
        '--text-secondary': '#bd93f9',
        '--accent-primary': '#ff79c6',
        '--accent-secondary': '#50fa7b',
        '--code-bg': '#44475a',
        '--blockquote-bg': '#44475a',
        '--border-color': '#6272a4'
      },
      dracula: {
        '--bg-primary': '#282a36',
        '--bg-secondary': '#44475a',
        '--text-primary': '#f8f8f2',
        '--text-secondary': '#6272a4',
        '--accent-primary': '#ff79c6',
        '--accent-secondary': '#50fa7b',
        '--code-bg': '#44475a',
        '--blockquote-bg': '#44475a',
        '--border-color': '#6272a4'
      },
      nord: {
        '--bg-primary': '#2e3440',
        '--bg-secondary': '#3b4252',
        '--text-primary': '#eceff4',
        '--text-secondary': '#81a1c1',
        '--accent-primary': '#88c0d0',
        '--accent-secondary': '#a3be8c',
        '--code-bg': '#3b4252',
        '--blockquote-bg': '#3b4252',
        '--border-color': '#4c566a'
      }
    };

    this.initializeTheme();
    this.createThemeToggle();
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.applyTheme(savedTheme);
  }

  createThemeToggle() {
    const toggle = document.createElement('div');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = `
      <button class="theme-toggle-btn">
        <i class="fas fa-adjust"></i>
      </button>
      <div class="theme-menu">
        <button data-theme="light">
          <i class="fas fa-sun"></i> Light
        </button>
        <button data-theme="dark">
          <i class="fas fa-moon"></i> Dark
        </button>
        <button data-theme="dracula">
          <i class="fas fa-ghost"></i> Dracula
        </button>
        <button data-theme="nord">
          <i class="fas fa-snowflake"></i> Nord
        </button>
      </div>
    `;

    document.body.appendChild(toggle);

    // Event listeners
    const toggleBtn = toggle.querySelector('.theme-toggle-btn');
    const menu = toggle.querySelector('.theme-menu');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        this.applyTheme(theme);
        menu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }

  applyTheme(themeName) {
    const theme = this.themes[themeName];
    if (!theme) return;

    Object.entries(theme).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });

    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);

    // Dispatch event for other components to react
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: themeName } }));
  }
}

// Initialize theme manager when document is ready
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
}); 