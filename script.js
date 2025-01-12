// Function to detect scroll and change navbar style
window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Add hover effect on menu items
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(item => {
    item.addEventListener("mouseenter", function () {
        this.style.color = "#ff9900";  // Change color on hover
    });
    item.addEventListener("mouseleave", function () {
        this.style.color = "white";  // Reset color
    });
});
