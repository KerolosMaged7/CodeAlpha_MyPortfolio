document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('nav-menu-open');
});
document.querySelector('.nav-toggle').addEventListener('click', () => {
    const header = document.querySelector('header');
    const toggleButton = document.querySelector('.nav-toggle');
    header.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    let valid = true;
    formData.forEach((value, key) => {
        if (!value) {
            valid = false;
            alert("Please fill out the ${key} field.");
        }
    });
    if (valid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    card.addEventListener('mouseleave', function() {
        this.style.cursor = 'default';
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.loading').classList.add('active');
        setTimeout(() => {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelector('.loading').classList.remove('active');
        }, 500);
    });
});  
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        alert("Thanks for contacting!");
        contactForm.reset();
    });
});
