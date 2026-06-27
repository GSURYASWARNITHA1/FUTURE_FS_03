


document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initMobileMenu();
  initDarkMode();
  initBackToTop();
  initScrollAnimations();
  initCounters();
  initFAQ();
  initNewsletter();
  initGalleryFilter();
  initLightbox();
  initAppointmentForm();
  initContactForm();
  initActiveNavLink();
});

/* ---------- Loading Screen ---------- */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
}

/* ---------- Sticky Navbar ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const toggleScrolled = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  toggleScrolled();
  window.addEventListener('scroll', toggleScrolled);
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.className = links.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.querySelector('i').className = 'bi bi-list';
    });
  });
}

/* ---------- Highlight active nav link based on current page ---------- */
function initActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
}

/* ---------- Dark Mode Toggle ---------- */
function initDarkMode() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = btn.querySelector('i');

  const applyTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  };

  const saved = localStorage.getItem('pawcare-theme');
  applyTheme(saved === 'dark');

  btn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    localStorage.setItem('pawcare-theme', isDark ? 'dark' : 'light');
  });
}

/* ---------- Back to Top Button ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Scroll Reveal Animations ---------- */
function initScrollAnimations() {
  const items = document.querySelectorAll('.fade-up');
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ---------- Animated Counters ---------- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1500;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ---------- FAQ Accordion ---------- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(item => {
    const question = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ---------- Newsletter Subscription ---------- */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (validateEmail(input.value)) {
      showToast('🎉 Thanks for subscribing! Watch your inbox for pet care tips.');
      input.value = '';
    } else {
      showToast('⚠️ Please enter a valid email address.');
    }
  });
}

/* Simple toast notification used by newsletter & misc */
function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.background = '#1F3C88';
    toast.style.color = '#fff';
    toast.style.padding = '14px 26px';
    toast.style.borderRadius = '50px';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';
    toast.style.zIndex = '3000';
    toast.style.fontSize = '.9rem';
    toast.style.opacity = '0';
    toast.style.transition = 'all .35s ease';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
}

/* ---------- Gallery Filter ---------- */
function initGalleryFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? 'block' : 'none';
      });
    });
  });
}

/* ---------- Lightbox for Gallery ---------- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });
  closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });
}

/* ---------- Validation Helpers ---------- */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function validatePhone(phone) {
  return /^[0-9+\-\s()]{7,15}$/.test(phone.trim());
}
function validateNotEmpty(value) {
  return value.trim().length > 0;
}
function setFieldError(group, isValid) {
  group.classList.toggle('invalid', !isValid);
  return isValid;
}

/* ---------- Appointment Form Validation + Submission ---------- */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'ownerName', test: v => validateNotEmpty(v) },
      { id: 'petName', test: v => validateNotEmpty(v) },
      { id: 'petType', test: v => validateNotEmpty(v) },
      { id: 'breed', test: v => validateNotEmpty(v) },
      { id: 'petAge', test: v => v !== '' && Number(v) >= 0 },
      { id: 'phone', test: v => validatePhone(v) },
      { id: 'email', test: v => validateEmail(v) },
      { id: 'apptDate', test: v => validateNotEmpty(v) },
      { id: 'apptTime', test: v => validateNotEmpty(v) },
      { id: 'reason', test: v => validateNotEmpty(v) },
    ];

    fields.forEach(({ id, test }) => {
      const input = document.getElementById(id);
      const group = input.closest('.form-group');
      const ok = test(input.value);
      setFieldError(group, ok);
      if (!ok) valid = false;
    });

    if (valid) {
      showSuccessModal(
        'Appointment Requested!',
        "Thank you! We've received your booking request and our team will call you shortly to confirm the slot."
      );
      form.reset();
    } else {
      showToast('⚠️ Please fix the highlighted fields.');
    }
  });

  // Remove error state as user types/selects
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => field.closest('.form-group').classList.remove('invalid'));
  });
}

/* ---------- Contact Form Validation ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fields = [
      { id: 'cName', test: validateNotEmpty },
      { id: 'cEmail', test: validateEmail },
      { id: 'cPhone', test: validatePhone },
      { id: 'cMessage', test: validateNotEmpty },
    ];
    fields.forEach(({ id, test }) => {
      const input = document.getElementById(id);
      const group = input.closest('.form-group');
      const ok = test(input.value);
      setFieldError(group, ok);
      if (!ok) valid = false;
    });

    if (valid) {
      showSuccessModal('Message Sent!', "Thanks for reaching out — our team will get back to you within 24 hours.");
      form.reset();
    } else {
      showToast('⚠️ Please fix the highlighted fields.');
    }
  });

  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => field.closest('.form-group').classList.remove('invalid'));
  });
}

/* ---------- Success Modal (shared) ---------- */
function showSuccessModal(title, message) {
  const overlay = document.getElementById('successModal');
  if (!overlay) return;
  overlay.querySelector('h3').textContent = title;
  overlay.querySelector('p').textContent = message;
  overlay.classList.add('active');
}
function closeSuccessModal() {
  const overlay = document.getElementById('successModal');
  if (overlay) overlay.classList.remove('active');
}
