const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const contactForm = document.getElementById('contact-form');

if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message Sent Successfully!');
    contactForm.reset();
  });
}