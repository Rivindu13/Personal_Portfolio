// Smooth scroll for same-page links (href starting with '#')
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// Submit button redirect for contact form
document.getElementById("ContactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop submiting the default form 
    if (this.checkValidity()) {
      window.location.href = "./home.html";
    }
});