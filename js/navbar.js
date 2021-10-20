const toggleBtn = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click', function(){
    navLinks.classList.toggle("active");
})
navLinks.addEventListener('click', function(){
    navLinks.classList.toggle("active");
})