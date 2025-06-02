class SearchOverlay {
  constructor() {
    this.searchIndex = [];
    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    this.recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    this.searchAnalytics = JSON.parse(localStorage.getItem('searchAnalytics') || '{}');
    this.createSearchOverlay();
    this.bindEvents();
    this.indexContent();
  }

  createSearchOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.innerHTML = `
      <div class="search-container">
        <div class="search-header">
          <div class="search-input-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input type="text" class="search-input" placeholder="Search pages... (Press 'Esc' to close)">
            <button class="search-filter-toggle" title="Show filters">
              <i class="fas fa-filter"></i>
            </button>
          </div>
          <button class="search-close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="search-filters">
          <div class="filter-group">
            <label>Content Type</label>
            <div class="filter-options">
              <label><input type="checkbox" value="heading" checked> Headings</label>
              <label><input type="checkbox" value="paragraph" checked> Paragraphs</label>
              <label><input type="checkbox" value="code" checked> Code</label>
            </div>
          </div>
          <div class="filter-group">
            <label>Sort By</label>
            <select class="sort-select">
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="type">Type</option>
            </select>
          </div>
          <div class="filter-tags"></div>
        </div>

        <div class="search-suggestions"></div>
        <div class="search-results"></div>
        
        <div class="search-history">
          <div class="history-header">
            <h3>Recent Searches</h3>
            <button class="clear-history">Clear</button>
          </div>
          <div class="history-list"></div>
        </div>

        <div class="search-analytics">
          <div class="analytics-header">
            <h3>Search Insights</h3>
            <select class="analytics-period">
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          <div class="analytics-content">
            <div class="analytics-item">
              <span class="analytics-label">Top Searches</span>
              <div class="analytics-top-searches"></div>
            </div>
            <div class="analytics-item">
              <span class="analytics-label">Search Trends</span>
              <canvas class="analytics-chart"></canvas>
            </div>
          </div>
        </div>

        <div class="search-shortcuts">
          <div class="shortcut">
            <kbd>↑</kbd><kbd>↓</kbd>
            <span>Navigate</span>
          </div>
          <div class="shortcut">
            <kbd>Enter</kbd>
            <span>Select</span>
          </div>
          <div class="shortcut">
            <kbd>Tab</kbd>
            <span>Next Filter</span>
          </div>
          <div class="shortcut">
            <kbd>Ctrl</kbd> + <kbd>F</kbd>
            <span>Toggle Filters</span>
          </div>
          <div class="shortcut">
            <kbd>Ctrl</kbd> + <kbd>H</kbd>
            <span>Toggle History</span>
          </div>
          <div class="shortcut">
            <kbd>Esc</kbd>
            <span>Close</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.overlay = overlay;
    this.input = overlay.querySelector('.search-input');
    this.results = overlay.querySelector('.search-results');
    this.closeBtn = overlay.querySelector('.search-close');
    this.filterToggle = overlay.querySelector('.search-filter-toggle');
    this.filters = overlay.querySelector('.search-filters');
    this.suggestions = overlay.querySelector('.search-suggestions');
    this.history = overlay.querySelector('.search-history');
    this.historyList = overlay.querySelector('.history-list');
    this.clearHistoryBtn = overlay.querySelector('.clear-history');
    this.analyticsContent = overlay.querySelector('.analytics-content');
    this.analyticsChart = overlay.querySelector('.analytics-chart');
  }

  bindEvents() {
    // Existing keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        this.open();
      } else if (e.ctrlKey && e.key === 'f' && this.overlay.classList.contains('active')) {
        e.preventDefault();
        this.toggleFilters();
      } else if (e.ctrlKey && e.key === 'h' && this.overlay.classList.contains('active')) {
        e.preventDefault();
        this.toggleHistory();
      } else if (e.key === 'Escape') {
        this.close();
      }
    });

    // Filter toggle
    this.filterToggle.addEventListener('click', () => this.toggleFilters());

    // Filter changes
    this.filters.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => this.performSearch());
    });

    this.filters.querySelector('.sort-select').addEventListener('change', () => this.performSearch());

    // Clear history
    this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());

    // Analytics period change
    this.overlay.querySelector('.analytics-period').addEventListener('change', (e) => {
      this.updateAnalytics(e.target.value);
    });

    // Existing event bindings
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Enhanced search input handling with debounce
    let debounceTimeout;
    this.input.addEventListener('input', () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        this.updateSuggestions();
        this.performSearch();
      }, 200);
    });

    // Keyboard navigation
    let selectedIndex = -1;
    this.input.addEventListener('keydown', (e) => {
      const results = this.results.querySelectorAll('.search-result');
      const suggestions = this.suggestions.querySelectorAll('.search-suggestion');
      const activeElements = suggestions.length > 0 ? suggestions : results;
      
      if (!activeElements.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, activeElements.length - 1);
        this.updateSelection(activeElements, selectedIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        this.updateSelection(activeElements, selectedIndex);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0) {
          if (suggestions.length > 0) {
            this.input.value = suggestions[selectedIndex].textContent;
            this.performSearch();
          } else {
            results[selectedIndex].click();
          }
        }
      }
    });
  }

  toggleFilters() {
    this.filters.classList.toggle('active');
    this.filterToggle.classList.toggle('active');
  }

  toggleHistory() {
    this.history.classList.toggle('active');
  }

  updateSuggestions() {
    const query = this.input.value.toLowerCase();
    if (!query) {
      this.suggestions.innerHTML = '';
      return;
    }

    // Combine history and content-based suggestions
    const historySuggestions = this.searchHistory
      .filter(item => item.toLowerCase().includes(query))
      .slice(0, 3);

    const contentSuggestions = this.searchIndex
      .map(item => item.text)
      .filter(text => text.toLowerCase().includes(query))
      .slice(0, 3);

    const allSuggestions = [...new Set([...historySuggestions, ...contentSuggestions])].slice(0, 5);

    if (allSuggestions.length === 0) {
      this.suggestions.innerHTML = '';
      return;
    }

    this.suggestions.innerHTML = allSuggestions
      .map(suggestion => `
        <button class="search-suggestion">
          <i class="fas fa-search"></i>
          ${this.highlightMatches(suggestion, query)}
        </button>
      `)
      .join('');

    // Add click handlers
    this.suggestions.querySelectorAll('.search-suggestion').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        this.input.value = allSuggestions[i];
        this.performSearch();
      });
    });
  }

  updateAnalytics(period = 'day') {
    const analytics = this.searchAnalytics;
    const topSearches = Object.entries(analytics)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    this.overlay.querySelector('.analytics-top-searches').innerHTML = topSearches
      .map(([term, count]) => `
        <div class="top-search-item">
          <span>${term}</span>
          <span class="search-count">${count}</span>
        </div>
      `)
      .join('');

    // Simple chart using HTML/CSS
    const maxCount = Math.max(...topSearches.map(([, count]) => count));
    const chart = this.analyticsChart.getContext('2d');
    chart.clearRect(0, 0, this.analyticsChart.width, this.analyticsChart.height);
    
    // Draw simple bar chart
    const barWidth = this.analyticsChart.width / topSearches.length;
    topSearches.forEach(([term, count], i) => {
      const height = (count / maxCount) * this.analyticsChart.height;
      chart.fillStyle = 'var(--accent-primary)';
      chart.fillRect(
        i * barWidth,
        this.analyticsChart.height - height,
        barWidth - 2,
        height
      );
    });
  }

  clearHistory() {
    this.searchHistory = [];
    this.recentSearches = [];
    localStorage.setItem('searchHistory', '[]');
    localStorage.setItem('recentSearches', '[]');
    this.updateHistoryDisplay();
  }

  updateHistoryDisplay() {
    if (this.recentSearches.length === 0) {
      this.historyList.innerHTML = `
        <div class="history-empty">
          <i class="fas fa-history"></i>
          <p>No recent searches</p>
        </div>
      `;
      return;
    }

    this.historyList.innerHTML = this.recentSearches
      .map(search => `
        <button class="history-item">
          <i class="fas fa-history"></i>
          <span>${search}</span>
          <button class="remove-history" data-term="${search}">
            <i class="fas fa-times"></i>
          </button>
        </button>
      `)
      .join('');

    // Add click handlers
    this.historyList.querySelectorAll('.history-item').forEach(item => {
      const term = item.querySelector('span').textContent;
      item.addEventListener('click', () => {
        this.input.value = term;
        this.performSearch();
      });
    });

    this.historyList.querySelectorAll('.remove-history').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const term = btn.dataset.term;
        this.removeFromHistory(term);
      });
    });
  }

  removeFromHistory(term) {
    this.searchHistory = this.searchHistory.filter(item => item !== term);
    this.recentSearches = this.recentSearches.filter(item => item !== term);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
    this.updateHistoryDisplay();
  }

  async indexContent() {
    // Enhanced content indexing
    const contentElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, pre code');
    contentElements.forEach(element => {
      const text = element.textContent;
      const url = window.location.pathname;
      const type = element.tagName.toLowerCase();
      const title = document.title;
      const date = element.dataset.date || document.querySelector('meta[name="date"]')?.content;
      const tags = element.dataset.tags?.split(',') || [];
      
      this.searchIndex.push({
        text,
        url,
        type,
        title,
        date,
        tags,
        element
      });
    });
  }

  performSearch() {
    const query = this.input.value.toLowerCase();
    if (!query) {
      this.results.innerHTML = `
        <div class="search-placeholder">
          <i class="fas fa-search"></i>
          <p>Type to start searching...</p>
        </div>
      `;
      return;
    }

    // Get active filters
    const activeFilters = Array.from(this.filters.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    // Filter and sort results
    const matches = this.searchIndex
      .filter(item => {
        const typeMatch = activeFilters.includes(this.getFilterType(item.type));
        return typeMatch;
      })
      .map(item => {
        const score = this.calculateRelevance(query, item);
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => {
        const sortBy = this.filters.querySelector('.sort-select').value;
        if (sortBy === 'date') {
          return new Date(b.date || 0) - new Date(a.date || 0);
        } else if (sortBy === 'type') {
          return a.type.localeCompare(b.type);
        }
        return b.score - a.score;
      })
      .slice(0, 10);

    if (matches.length === 0) {
      this.results.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-ghost"></i>
          <p>No results found for "${query}"</p>
        </div>
      `;
      return;
    }

    // Update results
    this.results.innerHTML = matches
      .map(item => {
        const highlightedText = this.highlightMatches(item.text, query);
        const tags = item.tags.length > 0
          ? `<div class="result-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`
          : '';
        
        return `
          <a href="${item.url}" class="search-result" data-type="${item.type}">
            <div class="result-title">
              <i class="fas ${this.getIconForType(item.type)}"></i>
              <span>${item.title}</span>
              ${item.date ? `<span class="result-date">${new Date(item.date).toLocaleDateString()}</span>` : ''}
            </div>
            <div class="result-preview">${highlightedText}</div>
            ${tags}
          </a>
        `;
      })
      .join('');

    // Update search history and analytics
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.push(query);
      this.searchHistory = this.searchHistory.slice(-20); // Keep last 20 searches
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }

    this.recentSearches = [query, ...this.recentSearches.filter(item => item !== query)].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));

    // Update analytics
    this.searchAnalytics[query] = (this.searchAnalytics[query] || 0) + 1;
    localStorage.setItem('searchAnalytics', JSON.stringify(this.searchAnalytics));

    this.updateHistoryDisplay();
    this.updateAnalytics();
  }

  getFilterType(type) {
    if (type.startsWith('h')) return 'heading';
    if (type === 'p') return 'paragraph';
    if (type === 'code') return 'code';
    return type;
  }

  calculateRelevance(query, item) {
    const text = item.text.toLowerCase();
    const title = item.title.toLowerCase();
    let score = 0;

    // Direct matches
    if (text.includes(query)) score += 1;
    if (title.includes(query)) score += 2;

    // Word boundary matches
    if (text.includes(` ${query} `)) score += 0.5;
    if (title.includes(` ${query} `)) score += 1;

    // Tag matches
    if (item.tags.some(tag => tag.toLowerCase().includes(query))) {
      score += 1.5;
    }

    // Heading matches
    if (item.type.startsWith('h')) {
      score *= 1.5;
    }

    // Date boost for recent content
    if (item.date) {
      const age = Date.now() - new Date(item.date).getTime();
      const dayAge = age / (1000 * 60 * 60 * 24);
      if (dayAge < 7) score *= 1.2;
      else if (dayAge < 30) score *= 1.1;
    }

    return score;
  }

  highlightMatches(text, query) {
    const words = query.split(' ').filter(word => word.length > 0);
    let result = text;
    words.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<mark>$1</mark>');
    });
    return result;
  }

  getIconForType(type) {
    const icons = {
      h1: 'fa-heading',
      h2: 'fa-heading',
      h3: 'fa-heading',
      h4: 'fa-heading',
      h5: 'fa-heading',
      h6: 'fa-heading',
      p: 'fa-paragraph',
      code: 'fa-code'
    };
    return icons[type] || 'fa-file-alt';
  }

  updateSelection(elements, index) {
    elements.forEach((element, i) => {
      element.classList.toggle('selected', i === index);
      if (i === index) {
        element.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  open() {
    this.overlay.classList.add('active');
    this.input.focus();
    this.updateHistoryDisplay();
    this.updateAnalytics();
  }

  close() {
    this.overlay.classList.remove('active');
    this.input.value = '';
    this.results.innerHTML = '';
    this.suggestions.innerHTML = '';
    this.filters.classList.remove('active');
    this.history.classList.remove('active');
  }
}

// Initialize search overlay when document is ready
document.addEventListener('DOMContentLoaded', () => {
  window.searchOverlay = new SearchOverlay();
}); 