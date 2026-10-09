/**
 * ===================================================================
 * PORTOFOLIO KREATIF SISWA XI DKV (DESAIN KOMUNIKASI VISUAL)
 * Author: Raditya Putra Pratama (Radit.DKV)
 * Interactive Engine: Gallery Filtering, Modals, Mockup Studio, Lo-Fi Audio
 * ===================================================================
 */

// Portfolio Data Repository
const portfolioItems = [
  {
    id: 1,
    title: "Kopi Rimba — Visual Identity & Eco Packaging",
    category: "branding",
    categoryName: "Branding & Identity",
    thumbnail: "assets/images/branding-kopi.jpg",
    description: "Perancangan identitas visual lengkap dan kemasan ramah lingkungan untuk roastery kopi artisan single origin khas nusantara.",
    fullDescription: "Proyek tugas akhir semester XI DKV merancang corporate identity untuk brand 'Kopi Rimba'. Meliputi filosofi logo burung endemik nusantara, standarisasi typography, color guidance, business stationary, serta kemasan standing pouch matte foil dengan aksen gold foil emboss.",
    software: ["Adobe Illustrator", "Photoshop", "Dimension"],
    tags: ["Visual Identity", "Packaging Design", "Logo Design", "Eco-Friendly"],
    date: "Agustus 2026",
    client: "Proyek Kurikulum Merdeka XI DKV",
    colors: ["#0D3B2E", "#1A1A1A", "#C8A165", "#4CAF50", "#F8F5EB"],
    likes: 142
  },
  {
    id: 2,
    title: "Nusantara Sound Fest 2026 — Cyberpunk Wayang",
    category: "poster",
    categoryName: "Poster & Typography",
    thumbnail: "assets/images/poster-fest.jpg",
    description: "Eksplorasi poster festival musik futuristik yang memadukan siluet wayang kulit tradisional dengan tipografi brutalist Swiss & neon cyberpunk.",
    fullDescription: "Juara 1 Lomba Desain Poster FLS2N Tingkat Kota. Poster ini mengeksplorasi perpaduan harmonis antara kekayaan budaya wayang kulit Jawa dengan gelombang musik masa depan, menggunakan layout grid asimetris berani dan warna neon holographic yang memukau mata.",
    software: ["Adobe Illustrator", "Photoshop"],
    tags: ["Swiss Typography", "Brutalist Poster", "Cyberpunk", "FLS2N Winner"],
    date: "Juli 2026",
    client: "FLS2N Desain Grafis",
    colors: ["#00F2FE", "#F72585", "#7209B7", "#0A0C10", "#FFFFFF"],
    likes: 289
  },
  {
    id: 3,
    title: "Isometric Cozy Creative Studio — 3D Octane",
    category: "3d",
    categoryName: "3D & Digital Art",
    thumbnail: "assets/images/3d-room.jpg",
    description: "Pemodelan 3D ruang kerja desainer impian bergaya low-poly isometric dengan pencahayaan neon synthwave di Blender 3D.",
    fullDescription: "Eksplorasi 3D modeling dan rendering material menggunakan Blender Cycles. Menampilkan workstation kreatif siswa DKV lengkap dengan curved monitor, pen tablet, rak buku koleksi artbook, tanaman hias monstera, dan ambient LED strip lighting bertema synthwave.",
    software: ["Blender 3D", "Photoshop"],
    tags: ["3D Modeling", "Blender Cycles", "Isometric Art", "Lighting Setup"],
    date: "Juni 2026",
    client: "Eksplorasi Mandiri",
    colors: ["#38BDF8", "#F43F5E", "#818CF8", "#FBBF24", "#1E293B"],
    likes: 310
  },
  {
    id: 4,
    title: "RasaLokal — Kuliner Nusantara Mobile UI/UX",
    category: "uiux",
    categoryName: "UI/UX & Mobile App",
    thumbnail: "assets/images/ui-rasalokal.jpg",
    description: "Desain antarmuka aplikasi eksplorasi kuliner tradisional Indonesia dengan gaya dark mode glassmorphism modern dan interaksi mikro.",
    fullDescription: "Perancangan pengalaman pengguna (UI/UX) untuk aplikasi penjelajah kuliner legendaris Indonesia 'RasaLokal'. Memanfaatkan sistem design modern bergaya sleek dark theme, micro-interactions, navigasi peta interaktif restoran terdekat, dan visual kartu makanan bertekstur glassmorphism.",
    software: ["Figma", "Adobe Illustrator", "Protopie"],
    tags: ["UI/UX Design", "Figma Prototype", "Mobile Design", "Dark Mode"],
    date: "Mei 2026",
    client: "Tugas Interaktif XI DKV",
    colors: ["#FF7B00", "#11151C", "#1E232D", "#FFFFFF", "#06D6A0"],
    likes: 195
  },
  {
    id: 5,
    title: "Keripik Tempe Renyah Crunch — Pop Packaging",
    category: "packaging",
    categoryName: "Branding & Packaging",
    thumbnail: "assets/images/packaging-tempe.jpg",
    description: "Desain kemasan standing pouch berkarakter ilustrasi pop-art fun untuk produk UMKM cemilan tradisional keripik tempe.",
    fullDescription: "Redesain kemasan produk UMKM lokal agar tampil relevan bagi generasi Z. Menampilkan maskot karakter tempe yang ceria, pemilihan warna kontras energik kuning dan magenta, serta hierarchy informasi nilai gizi yang terstandarisasi dengan sangat jelas.",
    software: ["Adobe Illustrator", "Photoshop"],
    tags: ["Character Design", "Pop Art", "Packaging Pouch", "UMKM Branding"],
    date: "April 2026",
    client: "Project Kolaborasi UMKM",
    colors: ["#FFD166", "#EF476F", "#06D6A0", "#118AB2", "#073B4C"],
    likes: 240
  },
  {
    id: 6,
    title: "Kota Tua Nostalgia — Cinematic Teal & Orange",
    category: "photo",
    categoryName: "Photography & Retouching",
    thumbnail: "assets/images/photo-kotatua.jpg",
    description: "Fotografi jalanan arsitektural Kota Tua Jakarta dengan teknik grading sinematik moody refleksi aspal basah pasca hujan.",
    fullDescription: "Karya fotografi jalanan sudut Kota Tua Jakarta yang menangkap pesepeda ontel tua dengan latar belakang bangunan kolonial saat senja (golden hour). Diberi sentuhan post-processing tone grading teal & orange di Lightroom untuk menciptakan nuansa puitis dan dramatis.",
    software: ["Adobe Lightroom", "Photoshop"],
    tags: ["Street Photography", "Color Grading", "Moody Teal & Orange", "Kota Tua"],
    date: "Maret 2026",
    client: "Praktik Fotografi DKV",
    colors: ["#005F73", "#EE9B00", "#CA6702", "#BB3E03", "#001219"],
    likes: 275
  }
];

// Color Palettes Data for Design Lab
const designPalettes = [
  {
    name: "Cyber Neon Glow",
    tags: "Futuristic & Tech",
    colors: ["#0A0C10", "#00F2FE", "#4FACFE", "#9D4EDD", "#F72585"]
  },
  {
    name: "Nusantara Heritage",
    tags: "Cultural & Warm",
    colors: ["#2B1E16", "#C8A165", "#0D3B2E", "#D94F04", "#F4ECE1"]
  },
  {
    name: "Tokyo Pop Aesthetic",
    tags: "Vibrant & Playful",
    colors: ["#FFE600", "#FF007F", "#7928CA", "#00DFD8", "#121212"]
  },
  {
    name: "Nordic Minimalist",
    tags: "Clean & Elegant",
    colors: ["#1F2937", "#3B82F6", "#9CA3AF", "#E5E7EB", "#F9FAFB"]
  }
];

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initScrollProgress();
  initTypingEffect();
  initPortfolioGrid();
  initFilterAndSearch();
  initDesignLab();
  initBeforeAfterSlider();
  initThemeSwitcher();
  initLoFiAudio();
  initContactCalculator();
  initSkillBars();
  initNavbarScroll();
});

/* --- 1. Custom Magnetic Cursor --- */
function initCursor() {
  const cursor = document.getElementById("customCursor");
  const follower = document.getElementById("cursorFollower");

  if (!cursor || !follower) return;

  // Track position
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
  });

  // Hover states on interactive elements
  const interactiveElements = document.querySelectorAll("a, button, input, select, textarea, .portfolio-card, .swatch-box, .artwork-thumb-btn, .mockup-choice-btn");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* --- 2. Scroll Progress & Sticky Nav --- */
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
      if (navLinks.style.display === "flex") {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "20px";
        navLinks.style.right = "20px";
        navLinks.style.background = "rgba(10, 12, 16, 0.98)";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "16px";
        navLinks.style.border = "1px solid rgba(255,255,255,0.1)";
      }
    });
  }
}

/* --- 3. Typing Effect in Hero --- */
function initTypingEffect() {
  const typingEl = document.getElementById("typedRole");
  if (!typingEl) return;

  const roles = [
    "Graphic Designer",
    "3D Visual Artist",
    "Brand Identity Specialist",
    "UI/UX Crafter",
    "SMK XI DKV Creator"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 120;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 500; // Pause before typing next word
    }

    setTimeout(type, typingDelay);
  }

  setTimeout(type, 800);
}

/* --- 4. Portfolio Grid Rendering & Interactivity --- */
function initPortfolioGrid() {
  renderPortfolio(portfolioItems);
}

function renderPortfolio(items) {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 16px; color: var(--accent-cyan);"></i>
        <h3>Tidak ada karya yang cocok dengan pencarian</h3>
        <p>Coba gunakan kata kunci lain atau pilih kategori 'Semua Karya'.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map((item) => {
    return `
      <div class="portfolio-card" data-category="${item.category}" onclick="openProjectModal(${item.id})">
        <div class="card-thumbnail-wrap">
          <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
          <span class="card-category-badge">${item.categoryName}</span>
          <div class="card-action-overlay">
            <button class="btn-quick-view">
              <i class="fa-solid fa-eye"></i> Lihat Detail Karya
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="card-title">${item.title}</h3>
          </div>
          <p class="card-desc">${item.description}</p>
          <div class="card-tags">
            ${item.tags.map(tag => `<span class="card-tag">#${tag}</span>`).join('')}
          </div>
          <div class="card-footer">
            <div class="software-icons">
              ${item.software.map(sw => getSoftwareIcon(sw)).join(' ')}
            </div>
            <div class="card-interact-group" onclick="event.stopPropagation();">
              <button class="btn-like-heart" onclick="toggleLike(${item.id}, this)">
                <i class="fa-regular fa-heart"></i>
                <span class="like-count">${item.likes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getSoftwareIcon(softwareName) {
  if (softwareName.includes("Illustrator")) return `<i class="fa-brands fa-adobe" title="Adobe Illustrator"></i>`;
  if (softwareName.includes("Photoshop")) return `<i class="fa-solid fa-image" title="Adobe Photoshop"></i>`;
  if (softwareName.includes("Blender")) return `<i class="fa-solid fa-cube" title="Blender 3D"></i>`;
  if (softwareName.includes("Figma")) return `<i class="fa-brands fa-figma" title="Figma"></i>`;
  if (softwareName.includes("Lightroom")) return `<i class="fa-solid fa-wand-magic-sparkles" title="Adobe Lightroom"></i>`;
  return `<i class="fa-solid fa-pen-nib" title="${softwareName}"></i>`;
}

function toggleLike(id, btn) {
  const item = portfolioItems.find(p => p.id === id);
  if (!item) return;

  const countSpan = btn.querySelector(".like-count");
  const icon = btn.querySelector("i");

  if (btn.classList.contains("liked")) {
    btn.classList.remove("liked");
    icon.className = "fa-regular fa-heart";
    item.likes--;
    countSpan.textContent = item.likes;
  } else {
    btn.classList.add("liked");
    icon.className = "fa-solid fa-heart";
    item.likes++;
    countSpan.textContent = item.likes;
    showToast(`❤️ Kamu menyukai "${item.title}"!`);
  }
}

/* --- 5. Filtering and Live Search --- */
function initFilterAndSearch() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchArtworkInput");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let filtered = portfolioItems.filter(item => {
      const matchCat = currentCategory === "all" || item.category === currentCategory;
      const matchQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
    renderPortfolio(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });
  }
}

/* --- 6. Project Modal Detail --- */
function openProjectModal(id) {
  const item = portfolioItems.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDesc = document.getElementById("modalDesc");
  const modalClient = document.getElementById("modalClient");
  const modalDate = document.getElementById("modalDate");
  const modalSoftware = document.getElementById("modalSoftware");
  const modalSwatches = document.getElementById("modalSwatches");
  const modalTags = document.getElementById("modalTags");

  modalImage.src = item.thumbnail;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.categoryName;
  modalDesc.textContent = item.fullDescription;
  modalClient.textContent = item.client;
  modalDate.textContent = item.date;
  modalSoftware.textContent = item.software.join(", ");

  modalSwatches.innerHTML = item.colors.map(color => `
    <div class="modal-swatch" style="background: ${color};" title="Klik untuk salin HEX ${color}" onclick="copyHexColor('${color}', this)"></div>
  `).join('');

  modalTags.innerHTML = item.tags.map(t => `<span class="card-tag">#${t}</span>`).join('');

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

function copyHexColor(hex, el) {
  navigator.clipboard.writeText(hex).then(() => {
    if (el) {
      el.classList.add("copied");
      setTimeout(() => el.classList.remove("copied"), 1500);
    }
    showToast(`📋 Warna ${hex} disalin ke clipboard!`);
  });
}

/* --- 7. Design Lab Studio Features --- */
function initDesignLab() {
  // Tabs switcher
  const tabBtns = document.querySelectorAll(".lab-tab-btn");
  const tabPanes = document.querySelectorAll(".lab-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      const targetPane = document.getElementById(target);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Mockup Studio Controls
  initMockupStudio();
  // Color Palette Studio
  initPaletteStudio();
  // Live Typography Studio
  initTypographyStudio();
}

function initMockupStudio() {
  const mockupStage = document.getElementById("mockupStage");
  const artworkOverlay = document.getElementById("mockupArtworkOverlay");
  const mockupChoiceBtns = document.querySelectorAll(".mockup-choice-btn");
  const artworkThumbBtns = document.querySelectorAll(".artwork-thumb-btn");

  mockupChoiceBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      mockupChoiceBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const preset = btn.getAttribute("data-mockup");

      mockupStage.className = "mockup-stage mockup-preset-" + preset;
    });
  });

  artworkThumbBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      artworkThumbBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const imgSrc = btn.getAttribute("data-art");
      if (artworkOverlay) {
        artworkOverlay.src = imgSrc;
      }
    });
  });
}

/* --- 8. Before & After Color Grading Comparison Slider --- */
function initBeforeAfterSlider() {
  const container = document.getElementById("splitSliderContainer");
  const beforeWrapper = document.getElementById("splitBeforeWrapper");
  const handle = document.getElementById("sliderHandle");

  if (!container || !beforeWrapper || !handle) return;

  let isDragging = false;

  function moveSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let xPos = clientX - rect.left;
    if (xPos < 0) xPos = 0;
    if (xPos > rect.width) xPos = rect.width;

    const percentage = (xPos / rect.width) * 100;
    beforeWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  handle.addEventListener("mousedown", () => isDragging = true);
  window.addEventListener("mouseup", () => isDragging = false);
  window.addEventListener("mousemove", (e) => {
    if (isDragging) moveSlider(e.clientX);
  });

  // Touch support for mobile devices
  handle.addEventListener("touchstart", () => isDragging = true);
  window.addEventListener("touchend", () => isDragging = false);
  window.addEventListener("touchmove", (e) => {
    if (isDragging && e.touches[0]) moveSlider(e.touches[0].clientX);
  });
}

/* --- 9. Palette Studio --- */
function initPaletteStudio() {
  const paletteGrid = document.getElementById("paletteStudioGrid");
  if (!paletteGrid) return;

  paletteGrid.innerHTML = designPalettes.map(p => `
    <div class="palette-card">
      <div class="palette-name-box">
        <h4>${p.name}</h4>
        <p>${p.tags}</p>
      </div>
      <div class="palette-swatches">
        ${p.colors.map(col => `
          <div class="swatch-box" style="background: ${col};" onclick="copyHexColor('${col}', null)">
            <span class="swatch-hex">${col}</span>
          </div>
        `).join('')}
      </div>
      <button class="palette-copy-all-btn" onclick="copyAllPalette('${p.name}', '${p.colors.join(', ')}')">
        <i class="fa-solid fa-copy"></i> Salin Semua Palet
      </button>
    </div>
  `).join('');
}

function copyAllPalette(name, colorsStr) {
  navigator.clipboard.writeText(`${name} Palette: ${colorsStr}`).then(() => {
    showToast(`🎨 Seluruh palet "${name}" disalin!`);
  });
}

/* --- 10. Typography Studio --- */
function initTypographyStudio() {
  const textInput = document.getElementById("typoCustomText");
  const sizeInput = document.getElementById("typoFontSize");
  const weightInput = document.getElementById("typoFontWeight");
  const letterSpacingInput = document.getElementById("typoLetterSpacing");
  const previewBox = document.getElementById("typoLivePreview");

  if (!previewBox) return;

  function updateTypo() {
    if (textInput && textInput.value) previewBox.textContent = textInput.value;
    if (sizeInput) previewBox.style.fontSize = `${sizeInput.value}px`;
    if (weightInput) previewBox.style.fontWeight = weightInput.value;
    if (letterSpacingInput) previewBox.style.letterSpacing = `${letterSpacingInput.value}px`;
  }

  if (textInput) textInput.addEventListener("input", updateTypo);
  if (sizeInput) sizeInput.addEventListener("input", updateTypo);
  if (weightInput) weightInput.addEventListener("change", updateTypo);
  if (letterSpacingInput) letterSpacingInput.addEventListener("input", updateTypo);
}

/* --- 11. Built-in Harmonic Lo-Fi Ambient Audio (Web Audio API) --- */
let audioCtx = null;
let isPlayingAudio = false;
let audioInterval = null;

function initLoFiAudio() {
  const audioBtn = document.getElementById("audioToggleBtn");
  if (!audioBtn) return;

  audioBtn.addEventListener("click", () => {
    if (!isPlayingAudio) {
      startLoFiMusic();
      audioBtn.classList.add("audio-playing");
      audioBtn.querySelector("span").textContent = "Lo-Fi Beats: ON";
      isPlayingAudio = true;
      showToast("🎵 Memutar ambient lo-fi creative beats...");
    } else {
      stopLoFiMusic();
      audioBtn.classList.remove("audio-playing");
      audioBtn.querySelector("span").textContent = "Lo-Fi Beats: OFF";
      isPlayingAudio = false;
      showToast("🔇 Audio dimatikan.");
    }
  });
}

function startLoFiMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Pentatonic & Jazz minor chords (frequencies)
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 349.23]  // G7
  ];

  let chordIndex = 0;

  function playChord() {
    if (!isPlayingAudio) return;
    const now = audioCtx.currentTime;
    const notes = chords[chordIndex];

    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Warm vinyl lowpass filter
      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.04 / (idx + 1), now + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 4);
    });

    chordIndex = (chordIndex + 1) % chords.length;
  }

  playChord();
  audioInterval = setInterval(playChord, 3800);
}

function stopLoFiMusic() {
  if (audioInterval) clearInterval(audioInterval);
}

/* --- 12. Theme Switcher Engine --- */
function initThemeSwitcher() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const themes = ["dark", "studio", "sunset", "light"];
  let currentThemeIdx = 0;

  const savedTheme = localStorage.getItem("dkv_theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    currentThemeIdx = themes.indexOf(savedTheme) >= 0 ? themes.indexOf(savedTheme) : 0;
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      const nextTheme = themes[currentThemeIdx];
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("dkv_theme", nextTheme);
      showToast(`🎨 Tema berganti ke: ${nextTheme.toUpperCase()}`);
    });
  }
}

/* --- 13. Commission Form & WhatsApp Link Generator --- */
function initContactCalculator() {
  const form = document.getElementById("commissionForm");
  const projectPills = document.querySelectorAll(".type-pill-btn");
  const selectedTypeInput = document.getElementById("selectedProjectType");

  projectPills.forEach(pill => {
    pill.addEventListener("click", () => {
      projectPills.forEach(p => p.classList.remove("selected"));
      pill.classList.add("selected");
      if (selectedTypeInput) {
        selectedTypeInput.value = pill.getAttribute("data-type");
      }
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("clientName").value.trim();
      const projectType = selectedTypeInput ? selectedTypeInput.value : "Branding/Desain";
      const budget = document.getElementById("clientBudget").value;
      const notes = document.getElementById("clientNotes").value.trim();

      if (!name || !notes) {
        showToast("⚠️ Harap isi nama dan deskripsi proyek.");
        return;
      }

      // Generate WhatsApp Link
      const message = `Halo Raditya (Radit.DKV), saya *${name}* tertarik untuk berdiskusi tentang:\n\n` +
                      `📌 *Kategori Proyek:* ${projectType}\n` +
                      `💰 *Estimasi Budget:* ${budget}\n` +
                      `📝 *Kebutuhan Desain:* ${notes}\n\n` +
                      `Mohon info ketersediaan jadwal pengerjaan / kolaborasi PKL. Terima kasih!`;

      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/6281234567890?text=${encodedMsg}`;

      showToast("🚀 Mengarahkan ke WhatsApp...");
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 800);
    });
  }
}

/* --- 14. Skills Progress Fill on Scroll --- */
function initSkillBars() {
  const skillSection = document.getElementById("skills");
  if (!skillSection) return;

  const fills = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach(fill => {
          const width = fill.getAttribute("data-width");
          fill.style.width = width;
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillSection);
}

/* --- Toast Notification Helper --- */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-sparkles"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
