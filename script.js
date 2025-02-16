//mobile navbar toggle

const hamburger =document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks) {
hamburger.addEventListener("click" , () => {

    navLinks.classList.toggle("active");
} );}

// sections fadein on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".aboutus, .menu , .ambiance , .reservation-section, .customer-reviews , .contact , .host ");

   if(sections.length > 0 ) function handleScroll() {
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

  
    //resservation section popup
    document.addEventListener('DOMContentLoaded', function () {
      const reservationForm = document.getElementById('reservationForm');
      const popupMessage = document.getElementById('popupMessage');
      const closePopupBtn = document.querySelector('#popupMessage .popup-content button');
    
     if(reservationForm && popupMessage && closePopupBtn) {
      
      reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        // Show the popup
        popupMessage.style.display = 'flex';
      });
    
      closePopupBtn.addEventListener('click', function () {
        // Hide the popup
        popupMessage.style.display = 'none';
    
        // Reset the form after closing the popup
        reservationForm.reset();
      });
    }
    });

// Handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  alert('Thank you for your message! We will get back to you soon.');
  event.target.reset(); // Reset the form
}
