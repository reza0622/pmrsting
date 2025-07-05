// memastikan bahwa JavaScript dijalankan setelah DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-underline .nav-link'); // Mengambil semua elemen dengan kelas nav-link di dalam elemen dengan kelas nav-underline
  const navbarCollapse = document.getElementById('navbarNav'); // Mengambil elemen navbar yang akan di-collapse

  // Menambahkan event listener untuk setiap link navigasi
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // Aktifkan underline
      navLinks.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');

      // Deteksi apakah menu sedang terbuka (khusus mobile)
      const isMenuShown = navbarCollapse.classList.contains('show');
      if (isMenuShown) {
        // Ambil atau buat instance Collapse, lalu sembunyikan
        const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        collapseInstance.hide();
      }
    });
  });
});
