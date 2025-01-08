function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
//hide email
// Email được mã hóa thành các phần
const user = "lcong4225";
const domain = "gmail.com";

// Gộp lại để tạo email
const email = `${user}@${domain}`;

// Chèn email vào HTML
document.getElementById("email").innerHTML = `<a href="mailto:${email}">${email}</a>`;

// Lấy các phần tử từ DOM
const openModalBtns = document.querySelectorAll('.openModalBtn');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close-btn');
const youtubeVideo = document.getElementById('youtubeVideo');

// Mở Modal và phát video tương ứng
openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const videoURL = btn.getAttribute('data-video');
    youtubeVideo.src = videoURL;
    videoModal.style.display = 'block';
  });
});

// Đóng Modal và dừng video
closeBtn.addEventListener('click', () => {
  videoModal.style.display = 'none';
  youtubeVideo.src = '';
});

// Đóng Modal khi click ra ngoài
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    youtubeVideo.src = '';
  }
});