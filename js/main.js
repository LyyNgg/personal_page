// Your contact email — used by the "Let's connect" section on every page.
const CONTACT_EMAIL = 'you@example.com';

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Direct email link
  document.querySelectorAll('[data-email]').forEach((el) => {
    el.href = 'mailto:' + CONTACT_EMAIL;
    el.textContent = CONTACT_EMAIL;
  });

  // Mobile nav toggle
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.site-nav__toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.site-nav__links a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form: open the visitor's email app with the message filled in
  const form = document.querySelector('.connect-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const from = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const subject = 'Hello from ' + (name || 'your website');
      const body = message + '\n\n— ' + name + (from ? ' (' + from + ')' : '');
      window.location.href =
        'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }
});
