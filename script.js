document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    // Get all images in the gallery
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close on click outside the image
    modal.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = "none";
        }
    });
});
