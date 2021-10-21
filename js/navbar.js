const toggleBtn = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', function(){
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("open");
})
navLinks.addEventListener('click', function(){
    navLinks.classList.toggle("active");
})