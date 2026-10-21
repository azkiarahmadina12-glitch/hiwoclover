// Atur Sandi / PIN Rahasia Kamu di Sini (Contoh: 1234 atau tanggal lahir)
const CORRECT_PIN = "1234"; 
let enteredPin = "";

function pressNum(num) {
  if (enteredPin.length < 4) {
    enteredPin += num;
    updateDots();
  }

  if (enteredPin.length === 4) {
    setTimeout(checkPin, 200);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index < enteredPin.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

function clearPin() {
  enteredPin = enteredPin.slice(0, -1);
  updateDots();
  document.getElementById('error-msg').innerText = "";
}

function checkPin() {
  if (enteredPin === CORRECT_PIN) {
    unlockPhone();
    enteredPin = "";
    updateDots();
    document.getElementById('error-msg').innerText = "";
  } else {
    document.getElementById('error-msg').innerText = "Sandi Salah! Coba lagi.";
    enteredPin = "";
    updateDots();
  }
}

// Buka HP
function unlockPhone() {
  document.getElementById('lockscreen').classList.remove('active');
  document.getElementById('gallery-screen').classList.add('active');
  document.getElementById('bottom-nav').classList.add('active');
}

// Kunci Kembali HP
function lockPhone() {
  let screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  
  document.getElementById('lockscreen').classList.add('active');
  document.getElementById('bottom-nav').classList.remove('active');
  closeModal();
}

// Pindah Tab
function switchTab(screenId) {
  let screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  document.getElementById(screenId).classList.add('active');
  closeModal();
}

// Modal Foto Zoom
function openPhoto(element) {
  let modal = document.getElementById('photo-modal');
  let modalImg = document.getElementById('modal-img');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'photo-modal';
    modal.className = 'photo-modal';
    modal.onclick = closeModal;
    modal.innerHTML = '<img id="modal-img" src="" /><span class="close-modal">&times;</span>';
    document.querySelector('.phone-frame').appendChild(modal);
    modalImg = document.getElementById('modal-img');
  }
  
  modalImg.src = element.src;
  modal.style.display = 'flex';
}

function closeModal() {
  let modal = document.getElementById('photo-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}
