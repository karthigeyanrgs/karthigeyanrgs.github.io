class MarkdownEnhancements {
  constructor() {
    this.initializeCodeBlocks();
    this.initializeImages();
    this.initializeTables();
    this.initializeHeadings();
    this.initializeQuotes();
    this.initializeLinks();
    this.initializeKeyboardShortcuts();
    this.initializeProgressBars();
    this.initializeTimelines();
    this.initializeTooltips();
  }

  initializeCodeBlocks() {
    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach(block => {
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-code-button';
      copyButton.innerHTML = '<i class="fas fa-copy"></i>';
      copyButton.title = 'Copy code';
      
      copyButton.addEventListener('click', async () => {
        await navigator.clipboard.writeText(block.textContent);
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        }, 2000);
      });

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);
      wrapper.appendChild(copyButton);
    });
  }

  initializeImages() {
    // Add lightbox effect to images
    document.querySelectorAll('.post-content img').forEach(img => {
      img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <img src="${img.src}" alt="${img.alt}">
            <button class="lightbox-close">&times;</button>
          </div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', e => {
          if (e.target === lightbox || e.target.className === 'lightbox-close') {
            lightbox.remove();
          }
        });
      });
      img.style.cursor = 'zoom-in';
    });
  }

  initializeTables() {
    // Add sorting and filtering to tables
    document.querySelectorAll('table').forEach(table => {
      if (!table.classList.contains('no-enhance')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);

        const filterInput = document.createElement('input');
        filterInput.className = 'table-filter';
        filterInput.placeholder = 'Filter table...';
        wrapper.insertBefore(filterInput, table);

        filterInput.addEventListener('input', () => {
          const searchTerm = filterInput.value.toLowerCase();
          table.querySelectorAll('tbody tr').forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
          });
        });

        table.querySelectorAll('th').forEach((th, index) => {
          th.style.cursor = 'pointer';
          th.addEventListener('click', () => this.sortTable(table, index));
        });
      }
    });
  }

  sortTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumeric = rows.every(row => 
      !isNaN(row.children[column].textContent.trim())
    );

    rows.sort((a, b) => {
      const aValue = a.children[column].textContent.trim();
      const bValue = b.children[column].textContent.trim();
      
      if (isNumeric) {
        return parseFloat(aValue) - parseFloat(bValue);
      }
      return aValue.localeCompare(bValue);
    });

    if (table.dataset.sortOrder === 'asc') {
      rows.reverse();
      table.dataset.sortOrder = 'desc';
    } else {
      table.dataset.sortOrder = 'asc';
    }

    tbody.append(...rows);
  }

  initializeHeadings() {
    // Add anchor links and collapsible sections to headings
    document.querySelectorAll('h2, h3').forEach(heading => {
      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${heading.id}`;
      anchor.innerHTML = '<i class="fas fa-link"></i>';
      heading.appendChild(anchor);

      if (heading.nextElementSibling) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'section-toggle';
        toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
        heading.appendChild(toggleButton);

        const section = document.createElement('div');
        section.className = 'collapsible-section';
        let nextEl = heading.nextElementSibling;
        while (nextEl && !['H2', 'H3'].includes(nextEl.tagName)) {
          const temp = nextEl.nextElementSibling;
          section.appendChild(nextEl);
          nextEl = temp;
        }
        heading.parentNode.insertBefore(section, nextEl);

        toggleButton.addEventListener('click', () => {
          section.classList.toggle('collapsed');
          toggleButton.querySelector('i').classList.toggle('fa-chevron-down');
          toggleButton.querySelector('i').classList.toggle('fa-chevron-right');
        });
      }
    });
  }

  initializeQuotes() {
    // Add style variations to blockquotes
    document.querySelectorAll('blockquote').forEach(quote => {
      const text = quote.textContent.toLowerCase();
      if (text.includes('note:')) {
        quote.classList.add('note');
      } else if (text.includes('warning:')) {
        quote.classList.add('warning');
      } else if (text.includes('tip:')) {
        quote.classList.add('tip');
      }
    });
  }

  initializeLinks() {
    // Add external link indicators and preview cards
    document.querySelectorAll('a').forEach(link => {
      if (link.hostname !== window.location.hostname && !link.classList.contains('no-external')) {
        link.classList.add('external-link');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.innerHTML += ' <i class="fas fa-external-link-alt"></i>';
      }
    });
  }

  initializeKeyboardShortcuts() {
    // Add keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.querySelector('.table-filter')?.focus();
      }
    });
  }

  initializeProgressBars() {
    // Add animated progress bars
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const value = parseFloat(bar.dataset.value) || 0;
      const max = parseFloat(bar.dataset.max) || 100;
      const percentage = (value / max) * 100;
      
      const progress = document.createElement('div');
      progress.className = 'progress';
      progress.style.width = `${percentage}%`;
      bar.appendChild(progress);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progress.style.width = `${percentage}%`;
          }
        });
      });
      observer.observe(bar);
    });
  }

  initializeTimelines() {
    // Add animated timelines
    document.querySelectorAll('.timeline').forEach(timeline => {
      const items = timeline.querySelectorAll('.timeline-item');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.5 });

      items.forEach(item => observer.observe(item));
    });
  }

  initializeTooltips() {
    // Add tooltips to elements with data-tooltip attribute
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      element.addEventListener('mouseenter', e => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = element.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = element.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;

        element.addEventListener('mouseleave', () => tooltip.remove());
      });
    });
  }
}

// Initialize enhancements when document is ready
document.addEventListener('DOMContentLoaded', () => {
  new MarkdownEnhancements();
}); 