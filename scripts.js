const menuBtn = document.querySelector('.menu-btn');
const dropdownMenu = document.querySelector('.dropdown');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        dropdownMenu.style.display = 'block'; // Show the dropdown menu
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        dropdownMenu.style.display = 'none'; // Hide the dropdown menu
        menuOpen = false;
    }
});

// Your existing JavaScript code

// Toggle dropdown menu when clicking the hamburger menu button
document.querySelector('.menu-btn').addEventListener('click', function() {
  const dropdownMenu = document.querySelector('.menu-btn .dropdown-menu');
  dropdownMenu.classList.toggle('show');
  const isOpen = dropdownMenu.classList.contains('show');
  this.classList.toggle('open', isOpen);
});

