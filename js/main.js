/* ================= HEADER SCROLL ================= */
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  // إضافة / إزالة class عند النزول
  header.classList.toggle("scrolled", window.scrollY > 80);
});

/* ================= ACTIVE LINK ================= */
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  // إزالة active من الجميع
  link.classList.remove("active");

  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// حالة الصفحة الرئيسية
if (currentPage === "" || currentPage === "index.html") {
  document.querySelector('.nav-links a[href="index.html"]').classList.add("active");
}

/* ================= MENU BUTTON (SIDEBAR) ================= */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.nav-links .close-btn');

// فتح القائمة عند الضغط على زر ☰
menuBtn.addEventListener('click', () => {
  navLinks.classList.add('active');
});

// غلق القائمة عند الضغط على زر ×
closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

// غلق القائمة عند الضغط على أي رابط
const navItems = document.querySelectorAll('.nav-links ul li a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/* ================= BENTO GALLERY LIGHTBOX ================= */
const galleryItems = document.querySelectorAll('.bento-gallery a');
const lightbox = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('#lightboxOverlay .close');

// فتح اللايت بوكس عند الضغط على صورة
galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    lightbox.style.display = 'flex';
    lightboxImg.src = item.href;
  });
});

// إغلاق اللايت بوكس عند الضغط على زر الإغلاق
lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// إغلاق اللايت بوكس عند الضغط خارج الصورة
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});