// BANNER SLIDER

const slides = document.getElementById("slides");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    showSlide(currentSlide);
}

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", previousSlide);

setInterval(nextSlide, 4000);


// LOGIN DROPDOWN

const loginButton = document.getElementById("loginButton");
const loginDropdown = document.querySelector(".login-dropdown");

loginButton.addEventListener("click", (event) => {
    event.stopPropagation();

    loginDropdown.classList.toggle("show");

    document.querySelector(".more-dropdown").classList.remove("show");
});


// MORE DROPDOWN

const moreButton = document.getElementById("moreButton");
const moreDropdown = document.querySelector(".more-dropdown");

moreButton.addEventListener("click", (event) => {
    event.stopPropagation();

    moreDropdown.classList.toggle("show");

    loginDropdown.classList.remove("show");
});


// CLOSE DROPDOWNS

document.addEventListener("click", () => {
    loginDropdown.classList.remove("show");
    moreDropdown.classList.remove("show");
});


// CART FUNCTIONALITY

const addCartButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cartCount");

let cartItems = 0;

addCartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartItems++;

        cartCount.textContent = cartItems;

        button.textContent = "Added ✓";

        button.disabled = true;

        setTimeout(() => {

            button.textContent = "Add to Cart";

            button.disabled = false;

        }, 1500);

    });

});


// WISHLIST

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

        }

    });

});


// CATEGORY ACTIVE

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {

    category.addEventListener("click", () => {

        categories.forEach((item) => {
            item.classList.remove("active");
        });

        category.classList.add("active");

    });

});


// SEARCH FUNCTIONALITY

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    productCards.forEach((card) => {

        const productName = card
            .querySelector("p")
            .textContent
            .toLowerCase();

        if (productName.includes(searchValue)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});