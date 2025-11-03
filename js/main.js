
  // Small, commented JS to handle interactions
  (function(){
    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    toggle && toggle.addEventListener('click', () => {
      const closed = mobileNav.classList.toggle('closed');
      mobileNav.setAttribute('aria-hidden', closed ? 'true' : 'false');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
    });

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth close mobile nav on link click
    mobileNav && mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.add('closed');
        document.getElementById('menuToggle')?.setAttribute('aria-expanded','false');
      });
    });
  })();

  // Contact form handler: local-only, shows success message
  function handleContactSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const msg = form.message.value.trim();

    if(!name || !email || !type || !msg){
      alert('Please complete all fields.');
      return false;
    }

    // Simulate a local submission (no network). Show success and reset.
    const successEl = document.getElementById('success');
    successEl.style.display = 'inline-block';
    successEl.textContent = 'Thanks, ' + (name.split(' ')[0] || '') + ' — we received your message!';
    form.querySelectorAll('input,textarea,select,button').forEach(n => n.disabled = true);

    // After a short delay, reset form for another entry
    setTimeout(() => {
      form.reset();
      form.querySelectorAll('input,textarea,select,button').forEach(n => n.disabled = false);
      successEl.style.display = 'none';
    }, 3000);

    // For privacy: do not store or send data by default.
    return false;
  }
