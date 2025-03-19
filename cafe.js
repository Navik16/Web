document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots-container");
    const galleryImages = document.querySelectorAll(".gallery-container img");

    let currentIndex = 0;

    // Function to open the lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = galleryImages[currentIndex].getAttribute("src");
        updateDots();
    }

    // Add event listener to all gallery images
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            openLightbox(index);
        });
    });

    // Function to close the lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Function to navigate next
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        openLightbox(currentIndex);
    });

    // Function to navigate previous
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentIndex);
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Create dots for each image
    function createDots() {
        dotsContainer.innerHTML = "";
        galleryImages.forEach((_, index) => {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === currentIndex) {
                dot.classList.add("active");
            }
            dot.addEventListener("click", () => {
                openLightbox(index);
            });
            dotsContainer.appendChild(dot);
           

        });
    }

    // Function to update dot indicators
    function updateDots() {
        let dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Initialize dots on page load
    createDots();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLink = document.getElementById("menu-link");
    const lightbox = document.getElementById("pdf-lightbox");
    const closeBtn = document.querySelector(".close-btn");

    menuLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        lightbox.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside of it
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
