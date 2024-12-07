document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.text-animate');

    const brandNameObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const delay = Array.from(letters).indexOf(target) * 0.1; 
                    target.style.transitionDelay = `${delay}s`;
                    target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    letters.forEach((letter) => brandNameObserver.observe(letter));
});
