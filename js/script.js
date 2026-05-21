/* ================================
   1️⃣ JAM DIGITAL OTOMATIS
================================ */
function updateJam() {
  const now = new Date();
  const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
  const tanggal = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const waktu = now.toLocaleTimeString('id-ID', { hour12: false });
  document.getElementById('jam-digital').textContent = `${hari}, ${tanggal} | ${waktu}`;
}
setInterval(updateJam, 1000);
updateJam();

/* ================================
   📢 Toast utility
   ================================ */
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = 'toast show ' + type;
  setTimeout(() => {
    toast.classList.remove('show', type);
  }, 3000);
}

/* ================================
   2️⃣ VALIDASI FORM KONTAK
================================ */
document.querySelector("form").addEventListener("submit", function (e) {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    e.preventDefault();
    showToast("Harap isi semua kolom sebelum mengirim pesan!", "error");
  } else {
    showToast("Terima kasih, pesan Anda telah terkirim!", "success");
  }
});


/* ================================
   3️⃣ PESAN PENYAMBUT SAAT HALAMAN DIBUKA
================================ */
window.addEventListener("load", function () {
  showToast("Selamat datang di Website Profil SMKN 2 Bandar Lampung!", "info");
});

/* ================================
   💫 ANIMASI SCROLL DENGAN INTERSECTION OBSERVER
   ================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});

/* ================================
   🌙 DARK MODE TOGGLE
   ================================ */
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const docEl = document.documentElement;
    if (docEl.getAttribute('data-theme') === 'dark') {
      docEl.removeAttribute('data-theme');
    } else {
      docEl.setAttribute('data-theme', 'dark');
    }
  });
}

/* ================================
   🖼️ LIGHTBOX UNTUK GALERI GAMBAR
================================ */
const galeriImages = document.querySelectorAll(".galeri-grid img");

// Buat elemen lightbox
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

// Tambahkan gambar ke dalam lightbox saat diklik
galeriImages.forEach(img => {
  img.addEventListener("click", () => {
    const clone = img.cloneNode();
    lightbox.innerHTML = ""; // kosongkan isi sebelumnya
    lightbox.appendChild(clone);
    lightbox.classList.add("show");
  });
});

// Tutup lightbox jika area luar diklik
lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return; // klik gambar = tidak keluar
  lightbox.classList.remove("show");
});