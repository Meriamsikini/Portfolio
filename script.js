// Smooth scrolling pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation des sections au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Gestion de l'accordion des skills
document.querySelectorAll('.skills-category-header').forEach(header => {
  header.addEventListener('click', function() {
    const category = this.parentElement;
    const skillsList = category.querySelector('.skills-list');

    // Toggle active state
    this.classList.toggle('active');
    skillsList.classList.toggle('active');

    // Fermer les autres accordions
    document.querySelectorAll('.skills-category').forEach(otherCategory => {
      if (otherCategory !== category) {
        const otherHeader = otherCategory.querySelector('.skills-category-header');
        const otherList = otherCategory.querySelector('.skills-list');
        otherHeader.classList.remove('active');
        otherList.classList.remove('active');
      }
    });
  });
});

// Ouvrir le premier accordion par défaut
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');

  // Vérifier les éléments d'expérience
  const experienceCards = document.querySelectorAll('.experience-card');
  const experienceModals = document.querySelectorAll('.experience-modal');
  console.log('Experience cards found:', experienceCards.length);
  console.log('Experience modals found:', experienceModals.length);

  // Ouvrir le premier accordion des skills
  const firstAccordion = document.querySelector('.skills-category-header');
  if (firstAccordion) {
    firstAccordion.click();
  }


});

// Gestion des modals d'expérience
function openExperienceModal(modalId) {
  console.log('Opening experience modal:', modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Masquer la navbar
    const navbar = document.querySelector('header');
    if (navbar) {
      navbar.style.display = 'none';
    }
    console.log('Experience modal opened successfully');
  } else {
    console.error('Experience modal not found:', modalId);
  }
}

function closeExperienceModal(modalId) {
  console.log('Closing experience modal:', modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Réafficher la navbar
    const navbar = document.querySelector('header');
    if (navbar) {
      navbar.style.display = 'flex';
    }
    console.log('Experience modal closed successfully');
  } else {
    console.error('Experience modal not found:', modalId);
  }
}

// Gestion des previews de certificats
function showCertificatePreview(certId) {
  const preview = document.getElementById(certId);
  if (preview) {
    preview.classList.add('show');
  }
}

function hideCertificatePreview(certId) {
  const preview = document.getElementById(certId);
  if (preview) {
    preview.classList.remove('show');
  }
}

// Gestion des modals de projets
function openProjectModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden';
  // Masquer la navbar
  const navbar = document.querySelector('header');
  if (navbar) {
    navbar.style.display = 'none';
  }
}

function closeProjectModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto';
  // Réafficher la navbar
  const navbar = document.querySelector('header');
  if (navbar) {
    navbar.style.display = 'flex';
  }
}

// Fermer les modals en cliquant à l'extérieur
window.addEventListener('click', function(event) {
  // Fermer modals d'expérience
  if (event.target.classList.contains('experience-modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Réafficher la navbar
    const navbar = document.querySelector('header');
    if (navbar) {
      navbar.style.display = 'flex';
    }
  }

  // Fermer modals de projets
  if (event.target.classList.contains('project-modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Réafficher la navbar
    const navbar = document.querySelector('header');
    if (navbar) {
      navbar.style.display = 'flex';
    }
  }
});

// Configuration EmailJS
(function() {
  emailjs.init("hFxjenLYQ927su5ZI"); // À remplacer par votre clé publique EmailJS
})();

// Gestion du formulaire de contact
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');
const formStatus = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Afficher l'état de chargement
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    formStatus.style.display = 'none';

    // Paramètres pour EmailJS
    const templateParams = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
      to_email: 'meriamsikini@gmail.com'
    };

    // Envoyer l'email via EmailJS
    emailjs.send('service_jha8z6c', 'template_bsta7ju', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showFormStatus('success', 'Message sent successfully! I will get back to you soon.');
        form.reset();
      }, function(error) {
        console.log('FAILED...', error);
        showFormStatus('error', 'Error sending the message. Please try again or email me directly.');
      })
      .finally(function() {
        // Restaurer l'état du bouton
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
      });
  });
}

function showFormStatus(type, message) {
  formStatus.className = `form-status ${type}`;
  formStatus.textContent = message;
  formStatus.style.display = 'block';

  // Masquer le message après 5 secondes
  setTimeout(() => {
    formStatus.style.display = 'none';
  }, 5000);
}
