

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.ul-nav'),
  menuItem = document.querySelectorAll('.ul-nav'),
  hamburger = document.querySelector('.hamburger');


  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('nav-menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav-menu_active');
    })
  })
})



