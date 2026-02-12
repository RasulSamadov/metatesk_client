document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slide_img");
    let currentIndex = 0;

    function toggleImages() {
        images.forEach(img => img.classList.remove("visible"));

        images[currentIndex].classList.add("visible");

        currentIndex = (currentIndex + 1) % images.length;

        setTimeout(toggleImages, 2000);
    }

    toggleImages();
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 300,
        once: false,
    });
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section_padding, .immersive_section, .shifting_section');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom < 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
            }
        });
    });
});