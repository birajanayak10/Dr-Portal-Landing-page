// Smooth Scroll for navigation links
document.querySelectorAll('.nav_links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for the "Book Now" form
document.querySelector('.header_form form').addEventListener('submit', function (e) {
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const lastName = document.querySelector('input[placeholder="Last Name"]');
    const address = document.querySelector('input[placeholder="Address"]');
    const phoneNumber = document.querySelector('input[placeholder="Phone number"]');

    // Check if the fields are empty
    if (!firstName.value || !lastName.value || !address.value || !phoneNumber.value) {
        alert('Please fill in all fields.');
        e.preventDefault();  // Prevent form submission
    } else {
        alert('Appointment Booked Successfully!');
    }
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav_container');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
