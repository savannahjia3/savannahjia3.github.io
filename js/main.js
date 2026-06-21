(() => {
  // --- State ---
  let currentSection = 'home';
  let currentMedium = null;
  let currentYear = null;
  let lightboxItems = [];
  let lightboxIndex = 0;

  // --- DOM refs ---
  const mainContent = document.getElementById('main-content');
  const navList = document.getElementById('nav-list');
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbFilmstrip = document.getElementById('lb-filmstrip');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  const worksGrid = document.getElementById('works-grid');
  const sectionHeading = document.getElementById('section-heading');

  // --- Helpers ---
  function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    const el = document.getElementById('section-' + id);
    if (el) el.classList.remove('hidden');
    currentSection = id;
    // Close sidebar on mobile
    closeSidebar();
  }

  function getYearsForMedium(medium) {
    const works = artworks[medium] || [];
    const years = [...new Set(works.map(w => w.year))].sort((a, b) => b - a);
    return years;
  }

  function mediumLabel(medium) {
    return { paintings: 'Paintings', 'works-on-paper': 'Works on Paper', sculpture: 'Sculpture' }[medium] || medium;
  }

  // --- Build nav year lists ---
  function buildNav() {
    const mediums = ['paintings', 'works-on-paper', 'sculpture'];
    mediums.forEach(medium => {
      const ul = document.getElementById('years-' + medium);
      if (!ul) return;
      const years = getYearsForMedium(medium);
      ul.innerHTML = years.map(year =>
        `<li><a href="#" class="year-link" data-medium="${medium}" data-year="${year}">${year}</a></li>`
      ).join('');
    });
  }

  // --- Render works grid ---
  function renderGrid(medium, year) {
    const works = (artworks[medium] || []).filter(w => w.year === year);
    sectionHeading.textContent = `${mediumLabel(medium)}, ${year}`;
    worksGrid.innerHTML = works.map((w, i) =>
      `<div class="grid-item" data-index="${i}" data-medium="${medium}" data-year="${year}">
        <img src="${w.thumb}" alt="${w.title}" loading="lazy">
      </div>`
    ).join('');
    lightboxItems = works;
    showSection('works');
  }

  // --- Lightbox ---
  function openLightbox(index) {
    lightboxIndex = index;
    renderLightboxImage();
    renderFilmstrip();
    lightbox.classList.remove('hidden');
    document.body.classList.add('lb-open');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.classList.remove('lb-open');
  }

  function renderLightboxImage() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return;
    lbImg.src = item.img;
    lbImg.alt = item.title;
    lbCaption.innerHTML = `<span class="lb-title">${item.title}</span><span class="lb-dims">${item.dims}</span>`;
    // Update filmstrip active state
    document.querySelectorAll('.lb-thumb').forEach((el, i) => {
      el.classList.toggle('active', i === lightboxIndex);
      if (i === lightboxIndex) el.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
  }

  function renderFilmstrip() {
    lbFilmstrip.innerHTML = lightboxItems.map((item, i) =>
      `<img class="lb-thumb${i === lightboxIndex ? ' active' : ''}" src="${item.thumb}" alt="${item.title}" data-index="${i}">`
    ).join('');
  }

  function prevImage() {
    lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    renderLightboxImage();
  }

  function nextImage() {
    lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
    renderLightboxImage();
  }

  // --- Sidebar accordion ---
  function toggleSection(medium) {
    const navSection = document.getElementById('nav-' + medium);
    const isOpen = navSection.classList.contains('open');
    // Close all
    document.querySelectorAll('.nav-section').forEach(s => s.classList.remove('open'));
    if (!isOpen) navSection.classList.add('open');
  }

  // --- Mobile sidebar ---
  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('visible');
    hamburger.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    hamburger.classList.remove('active');
  }

  // --- Event listeners ---

  // Hamburger
  hamburger.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  sidebarOverlay.addEventListener('click', closeSidebar);

  // Site name → about
  document.querySelectorAll('[data-section="about"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showSection('about');
    });
  });

  // Nav section titles → accordion toggle
  document.querySelectorAll('.nav-section-title').forEach(el => {
    el.addEventListener('click', () => {
      const medium = el.dataset.medium;
      toggleSection(medium);
    });
  });

  // Year links → render grid
  navList.addEventListener('click', e => {
    const link = e.target.closest('.year-link');
    if (!link) return;
    e.preventDefault();
    const medium = link.dataset.medium;
    const year = parseInt(link.dataset.year, 10);
    // Mark active
    document.querySelectorAll('.year-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    currentMedium = medium;
    currentYear = year;
    renderGrid(medium, year);
  });

  // Works grid → open lightbox
  worksGrid.addEventListener('click', e => {
    const item = e.target.closest('.grid-item');
    if (!item) return;
    openLightbox(parseInt(item.dataset.index, 10));
  });

  // Lightbox controls
  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', prevImage);
  lbNext.addEventListener('click', nextImage);

  lbFilmstrip.addEventListener('click', e => {
    const thumb = e.target.closest('.lb-thumb');
    if (!thumb) return;
    lightboxIndex = parseInt(thumb.dataset.index, 10);
    renderLightboxImage();
  });

  // Click outside image to close
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });

  // --- Init ---
  buildNav();
  showSection('home');
})();
