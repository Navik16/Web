document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const dotsContainer = document.querySelector(".dots-container");

    let images = []; // Store all image sources
    let currentIndex = 0;

    // Get all gallery images
    document.querySelectorAll(".gallery-item").forEach((item, index) => {
        images.push(item.getAttribute("data-src"));

        // Create a dot for each image
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);

        // Allow clicking dots to navigate
        dot.addEventListener("click", function () {
            currentIndex = parseInt(this.dataset.index);
            updateLightbox();
        });

        // Open the lightbox when an image is clicked
        item.addEventListener("click", function () {
            currentIndex = index;
            lightbox.style.display = "flex";
            updateLightbox();
        });
    });

    // Function to update lightbox image and dots
    function updateLightbox() {
        lightboxImg.src = images[currentIndex];

        // Update active dot
        document.querySelectorAll(".dot").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Close the lightbox
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Show Next Image
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length; // Loop to first image if at the end
        updateLightbox();
    });

    // Show Previous Image
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image if at the beginning
        updateLightbox();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            event.preventDefault(); // Prevent form submission
        }
    });
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

document.addEventListener("DOMContentLoaded", function () {
    let heroSection = document.querySelector(".hero");

    function updateHeroBackground() {
        if (window.innerWidth < 768) {
            heroSection.style.backgroundSize = "contain"; // Adjust for smaller screens
        } else {
            heroSection.style.backgroundSize = "cover";
        }
    }

    window.addEventListener("resize", updateHeroBackground);
    updateHeroBackground(); // Run on page load
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
