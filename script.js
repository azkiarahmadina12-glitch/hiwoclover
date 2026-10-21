// Buka kunci telefon
function unlockPhone() {
  document.getElementById('lockscreen').classList.remove('active');
  document.getElementById('gallery-screen').classList.add('active');
  document.getElementById('bottom-nav').classList.add('active');
}

// Kunci semula telefon
function lockPhone() {
  // Sembunyikan semua skrin
  let screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  
  // Tunjukkan Lockscreen & sembunyikan Navigasi Bawah
  document.getElementById('lockscreen').classList.add('active');
  document.getElementById('bottom-nav').classList.remove('active');
}

// Tukar Tab (Galeri / Chat)
function switchTab(screenId) {
  let screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  document.getElementById(screenId).classList.add('active');
}

// Notifikasi apabila gambar diketik
function openPhoto(pesan) {
  alert(pesan);
}
