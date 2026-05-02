const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function() {
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value
    };

    localStorage.setItem("formData", JSON.stringify(data));
  });

/* ===== SERVICE SUBMENUS ===== */
function toggleServiceMenu(card) {
  const isActive = card.classList.contains('active');
  document.querySelectorAll('.service-card.active').forEach(function(c) {
    c.classList.remove('active');
  });
  if (!isActive) card.classList.add('active');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.service-card')) {
    document.querySelectorAll('.service-card.active').forEach(function(c) {
      c.classList.remove('active');
    });
  }
});

function sendVideoBrief(btn) {
  const card     = btn.closest('.service-card');
  const textarea = card.querySelector('.video-brief');
  const brief    = (textarea.value || '').trim();
  if (!brief) {
    textarea.focus();
    textarea.placeholder = 'Please describe your video vision first…';
    return;
  }
  const message = encodeURIComponent(
    'Hi PulsarNova Digital, I would like a video edited.\n\nHere is my brief:\n' + brief
  );
  window.open('https://wa.me/26663169903?text=' + message, '_blank');
}
