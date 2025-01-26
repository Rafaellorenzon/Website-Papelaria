document.addEventListener("DOMContentLoaded", function () {
    const folderPath = './static/dashboard/';
    const imageElement = document.querySelector('.slideshow-image');
    const descriptionElement = document.querySelector('.slideshow-description');

    if (!imageElement || !descriptionElement) {
        console.error("Elementos do slideshow estão ausentes no HTML.");
    } else {
        const images = [];
        let currentIndex = 0;

        function loadImages() {
            for (let i = 1; i <= 5; i++) {
                const imagePath = `${folderPath}banner${i}.webp`;
                const img = new Image();
                img.src = imagePath;

                img.onload = () => {
                    images.push({ src: imagePath, description: `Promoção ${i}` });

                    if (images.length === 1) {
                        updateSlideshow();
                    }
                };

                img.onerror = () => {
                    console.warn(`Imagem não encontrada: ${imagePath}`);
                };
            }
        }

        function updateSlideshow() {
            if (images.length === 0) return;
            const currentImage = images[currentIndex];
            imageElement.src = currentImage.src;
            descriptionElement.textContent = currentImage.description;
            currentIndex = (currentIndex + 1) % images.length;
        }

        setInterval(() => {
            if (images.length > 0) {
                updateSlideshow();
            }
        }, 3000);

        loadImages();
    }
});



/*feedback */


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background-lat-esq .feedback-image");
    let currentImage = images[0];

    if (images.length === 0) return;

    function startSlideshow() {
        setInterval(() => {

            currentImage.style.opacity = "0";

            currentImage = currentImage.nextElementSibling || images[0];

            currentImage.style.opacity = "1";
        }, 3500);
    }

    currentImage.style.opacity = "1";
    startSlideshow();
});


/* instagram */

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".background-lat-dir");
    const folderPath = "./static/instagram/";
    const images = [];
    let currentImageIndex = 0;

    function loadImages() {
        for (let i = 1; i <= 5; i++) {
            const imagePath = `${folderPath}instagram${i}.png`;
            const img = new Image();
            img.src = imagePath;

            img.onload = () => {
                images.push(imagePath);
                if (images.length === 1) {
                    updateImage(); 
                }
            };

            img.onerror = () => {
                console.warn(`Imagem não encontrada: ${imagePath}`);
            };
        }
    }

    function updateImage() {
        if (images.length === 0) return; 
        container.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(updateImage, 3000); 
    loadImages();
});
