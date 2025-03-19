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
    let slides = ["res1.jpg", "res2.jpg", "res3.jpg"]; // Image List
    let currentIndex = 0; // Start with first image
    let heroSection = document.querySelector(".hero");

    // Initial Background
    heroSection.style.background = `url('${slides[currentIndex]}') center/cover no-repeat`;

    // Function to change background automatically
    function changeBackground(next = true) {
        if (next) {
            currentIndex = (currentIndex + 1) % slides.length; // Move Forward
        } else {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move Backward
        }
        heroSection.style.background = `url('${slides[currentIndex]}') center/cover no-repeat`;
    }

    // Automatic Background Change Every 5 Secs
    let interval = setInterval(() => changeBackground(true), 5000);

    // Event Listeners for Buttons
    document.querySelector(".prev-btn").addEventListener("click", function () {
        clearInterval(interval); // Stop auto transition when clicked
        changeBackground(false);
        interval = setInterval(() => changeBackground(true), 5000); // Restart interval
    });

    document.querySelector(".next-btn").addEventListener("click", function () {
        clearInterval(interval); // Stop auto transition when clicked
        changeBackground(true);
        interval = setInterval(() => changeBackground(true), 5000); // Restart interval
    });
});
