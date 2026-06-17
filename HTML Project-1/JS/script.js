// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Search bar animation
const searchInput = document.querySelector("input");

searchInput.addEventListener("focus", () => {
  searchInput.placeholder = "🍕 Search restaurants, dishes or cuisines...";
});

searchInput.addEventListener("blur", () => {
  searchInput.placeholder = "Search for restaurant, cuisine or a dish";
});

// Simple search message
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();

    if (query !== "") {
      alert(`Searching for: ${query}`);
    }
  }
});

// Fade-in effect on page load
window.addEventListener("load", () => {
  document.querySelector("main").style.opacity = "1";
});
