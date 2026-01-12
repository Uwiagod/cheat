console.log("Glory Cheat Hub Loaded - Welcome Developer");

// We can add a mobile menu toggle here later if you want!
// This makes the scrolling feel "weighted" and premium
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
