var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.popup-btn');
  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          var popupId = button.getAttribute('data-popup-target');
          document.querySelector(popupId).style.display = 'block';
      });
  });
  var closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var popup = button.closest('.popup');
          if (popup) {
              popup.style.display = 'none';
          }
      });
  });

  window.addEventListener('click', function(event) {
      if (event.target.className === 'popup') {
          event.target.style.display = 'none';
      }
  });
});
