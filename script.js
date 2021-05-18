const hamIcon = document.getElementsByClassName("hamburger-icon")[0];
const navLinks = document.getElementsByClassName("hamburger-link")[0];
const navHeader = document.getElementsByClassName("nav-header")[0];
const iconClose = document.getElementsByClassName("hamburger-image")[0];
const navInfo = document.getElementsByClassName("nav-info")[0];


hamIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navHeader.classList.toggle('active');
    iconClose.classList.toggle('active');
    navInfo.classList.toggle('active');

})