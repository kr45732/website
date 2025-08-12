const navbar = document.querySelector('.navbar');
const heading = document.querySelector('.name');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-nav');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const headingTop = heading.getBoundingClientRect().top;

    if (headingTop <= navbar.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
    navbar.classList.toggle("show");
});

document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
        navbar.classList.remove("show")
    });
});