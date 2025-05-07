document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.characters-box');
    const characters = document.querySelectorAll('.character');

    document.querySelector('.next').addEventListener('click', () => {
        box.scrollBy({
            left: characters[0].offsetWidth + 50,
            behavior: 'smooth'
        });
    });

    document.querySelector('.prev').addEventListener('click', () => {
        box.scrollBy({
            left: -(characters[0].offsetWidth + 50),
            behavior: 'smooth'
        });
    });
})
