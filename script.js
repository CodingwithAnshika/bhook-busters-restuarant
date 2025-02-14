//mobile navbar toggle

const hamburger =document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click" , () => {

    navLinks.classList.toggle("active");
} );

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".aboutus, .menu , .ambience");

    function handleScroll() {
        sections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    // Trigger animation when page loads
    handleScroll();
});
//Fade-in JavaScript -->
  
    document.addEventListener("DOMContentLoaded", function () {
      const fadeSection = document.querySelector(".fade-in");

      function fadeInOnScroll() {
        const rect = fadeSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          fadeSection.classList.add("visible");
        }
      }
      window.addEventListener("scroll", fadeInOnScroll);
      fadeInOnScroll();
    });
  

// Handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  alert('Thank you for your message! We will get back to you soon.');
  event.target.reset(); // Reset the form
}
