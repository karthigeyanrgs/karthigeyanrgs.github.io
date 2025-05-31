class TableOfContents {
  constructor() {
    this.createTOC();
    this.initializeScrollSpy();
    this.initializeKeyboardNavigation();
  }

  createTOC() {
    const headings = document.querySelectorAll('h2, h3, h4');
    if (headings.length < 3) return; // Only create TOC if there are enough headings

    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = `
      <div class="toc-header">
        <h2>Table of Contents</h2>
        <button class="toc-toggle">
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
      <nav class="toc-nav"></nav>
    `;

    const nav = toc.querySelector('.toc-nav');
    const currentLevel = [0, 0, 0]; // h2, h3, h4
    let currentList = nav;
    let previousLevel = 2;

    headings.forEach(heading => {
      const level = parseInt(heading.tagName[1]);
      const levelIndex = level - 2;
      
      // Create unique ID if not exists
      if (!heading.id) {
        heading.id = this.generateId(heading.textContent);
      }

      // Update counters
      currentLevel[levelIndex]++;
      for (let i = levelIndex + 1; i < currentLevel.length; i++) {
        currentLevel[i] = 0;
      }

      // Create number prefix
      const prefix = currentLevel.slice(0, levelIndex + 1).join('.');

      // Create list item
      const item = document.createElement('a');
      item.href = `#${heading.id}`;
      item.className = 'toc-item';
      item.dataset.level = level;
      item.innerHTML = `
        <span class="toc-number">${prefix}</span>
        <span class="toc-text">${heading.textContent}</span>
      `;

      // Handle nesting
      if (level > previousLevel) {
        const subList = document.createElement('div');
        subList.className = 'toc-sublist';
        currentList.appendChild(subList);
        currentList = subList;
      } else if (level < previousLevel) {
        currentList = nav;
      }

      currentList.appendChild(item);
      previousLevel = level;
    });

    // Add TOC to page
    document.body.appendChild(toc);

    // Toggle functionality
    const toggle = toc.querySelector('.toc-toggle');
    toggle.addEventListener('click', () => {
      toc.classList.toggle('collapsed');
      toggle.querySelector('i').classList.toggle('fa-chevron-left');
      toggle.querySelector('i').classList.toggle('fa-chevron-right');
    });

    // Smooth scroll to sections
    toc.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, `#${targetId}`);
        }
      });
    });
  }

  generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  initializeScrollSpy() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.toc-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${id}`) {
              item.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('h2, h3, h4').forEach(heading => {
      observer.observe(heading);
    });
  }

  initializeKeyboardNavigation() {
    let currentIndex = -1;
    const items = document.querySelectorAll('.toc-item');

    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'n') { // Alt+N for next section
        e.preventDefault();
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        items[currentIndex].click();
      } else if (e.altKey && e.key === 'p') { // Alt+P for previous section
        e.preventDefault();
        currentIndex = Math.max(currentIndex - 1, 0);
        items[currentIndex].click();
      }
    });
  }
}

// Initialize table of contents when document is ready
document.addEventListener('DOMContentLoaded', () => {
  new TableOfContents();
}); 