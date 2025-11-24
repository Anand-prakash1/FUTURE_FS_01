// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileMenuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Image Modal functionality
const logo = document.querySelector('.logo img');
const imageModal = document.createElement('div');
const modalContent = document.createElement('img');
const modalClose = document.createElement('span');
const modalCaption = document.createElement('div');

// Setup modal
imageModal.className = 'image-modal';
modalContent.className = 'modal-content';
modalClose.className = 'modal-close';
modalClose.innerHTML = '&times;';
modalCaption.className = 'modal-caption';
modalCaption.textContent = 'Anand';

// Build modal structure
imageModal.appendChild(modalClose);
imageModal.appendChild(modalContent);
imageModal.appendChild(modalCaption);
document.body.appendChild(imageModal);

// Open modal when logo is clicked
logo.addEventListener('click', () => {
  modalContent.src = logo.src;
  modalContent.alt = logo.alt;
  imageModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close modal functions
function closeModal() {
  imageModal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when X is clicked
modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside image
imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && imageModal.classList.contains('active')) {
    closeModal();
  }
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  
  function initializeTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcons(currentTheme);
  }
  
  function updateThemeIcons(theme) {
    const icons = document.querySelectorAll('.theme-toggle i, .theme-toggle-mobile i');
    icons.forEach(icon => {
      icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    });
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
  }
  
  // Initialize theme
  initializeTheme();
  
  // Add event listeners to both toggle buttons
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
});
