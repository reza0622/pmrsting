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

// Menambahkan Submit form ke spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYigQVMYjPXpeN4Tbcg9ikf9VVRJ7o-8et-qS4w2iXk_sWJ5uuq7_jlupg8Ddsc35o/exec'; // Ganti <SCRIPT URL> dengan URL skrip Google Apps Script Anda
const form = document.forms['DataCalonPmr']; // Ganti 'DataCalonPmr' dengan nama form Anda
const btnKirim = document.querySelector('.btn-kirim'); // Tombol kirim form
const btnLoading = document.querySelector('.btn-loading'); // Tombol loading saat pengiriman form
const myAlert = document.querySelector('.my-alert'); // Alert untuk notifikasi

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol dikirim
  // Tampilkan tombol loading, dan tombol kirim dihilangkan
  btnLoading.classList.toggle('d-none'); // Menampilkan tombol loading
  btnKirim.classList.toggle('d-none'); // Menyembunyikan tombol kirim

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, dan tombol Loading dihilangkan
      btnLoading.classList.toggle('d-none'); // Menyembunyikan tombol loading
      btnKirim.classList.toggle('d-none'); // Menampilkan tombol kirim
      // Tampilkan alert
      myAlert.classList.toggle('d-none'); // Menampilkan alert
      // Reset form setelah berhasil dikirim
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
