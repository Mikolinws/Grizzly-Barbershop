const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

// Mobile menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('open');

    const isOpen = navigation.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu after clicking a link
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Current year
document.getElementById('year').textContent =
    new Date().getFullYear();