// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
  } else {
    header.style.background = "rgba(0,0,0,0.65)";
  }
});

// Smooth fade animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Gallery Lightbox
const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");

    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.background = "rgba(0,0,0,.9)";
    popup.style.display = "flex";
    popup.style.justifyContent = "center";
    popup.style.alignItems = "center";
    popup.style.zIndex = "9999";

    const image = document.createElement("img");
    image.src = img.src;
    image.style.maxWidth = "90%";
    image.style.maxHeight = "90%";
    image.style.borderRadius = "15px";

    popup.appendChild(image);

    popup.onclick = () => popup.remove();

    document.body.appendChild(popup);
  });
});
