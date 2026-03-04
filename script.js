// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Year auto-update in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
});

// Performance optimization: Lazy load images (for future image integration)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Mobile menu toggle (if needed in the future)
console.log('Clínica Dental Gabriel Dorta - Web loaded successfully');

// Toggle review expansion
function toggleReview(reviewId) {
  const textElement = document.getElementById(`text-${reviewId}`);
  const expandBtn = document.getElementById(`btn-expand-${reviewId}`);
  const collapseBtn = document.getElementById(`btn-collapse-${reviewId}`);
  
  if (textElement.style.maxHeight === '120px' || !textElement.style.maxHeight) {
    // Expand
    textElement.style.maxHeight = '9999px';
    expandBtn.classList.add('hidden');
    collapseBtn.classList.remove('hidden');
  } else {
    // Collapse
    textElement.style.maxHeight = '120px';
    expandBtn.classList.remove('hidden');
    collapseBtn.classList.add('hidden');
  }
}

