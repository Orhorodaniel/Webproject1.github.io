const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navigation = document.querySelector('.navigation');

navbar.onclick = () => {
    navbar.classList.toggle('active');
    navigation.classList.toggle('active');
};

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});