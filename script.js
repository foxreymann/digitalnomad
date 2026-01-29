document.addEventListener('DOMContentLoaded', () => {
    // Modal Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const galleryImages = document.querySelectorAll('.image-gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});
