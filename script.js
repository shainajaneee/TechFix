// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.onclick = () => { navMenu.classList.toggle('show'); }

// Modal open/close
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.onclick = () => { modal.style.display = 'block'; }
closeModal.onclick = () => { modal.style.display = 'none'; }
window.onclick = e => { if(e.target==modal){ modal.style.display='none'; } }

// Testimonials carousel
const track = document.querySelector('.testimonial-track');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let index = 0;
const total = document.querySelectorAll('.testimonial-item').length;

nextBtn.onclick = () => { index = (index+1)%total; track.style.transform=`translateX(-${index*100}%)`; }
prevBtn.onclick = () => { index = (index-1+total)%total; track.style.transform=`translateX(-${index*100}%)`; }