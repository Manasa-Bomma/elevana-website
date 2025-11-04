// script.js — interactions (search, signup/login storage, small UX)

// Navbar scroll subtle shadow change
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.custom-navbar');
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
  } else {
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
  }
});

// Search handling
const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = (document.getElementById('searchInput')?.value || '').trim();
    if (!q) { alert('Please type a search term.'); return; }
    // For now just show result - can route to results page
    alert(search: "${q}" (demo));
  });
}

// SIGN UP - save to localStorage
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    if (!name || !email || !password) { alert('Please fill all fields'); return; }

    // store user as object in localStorage (demo)
    const user = { name, email, password, createdAt: new Date().toISOString() };
    localStorage.setItem('elevana_user', JSON.stringify(user));

    // close modal if using bootstrap
    const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    if (signupModal) signupModal.hide();

    alert(Welcome, ${name}! Account created (demo).);
    signupForm.reset();
  });
}

// LOGIN - verify localStorage
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const raw = localStorage.getItem('elevana_user');
    if (!raw) {
      alert('No account found. Please sign up first.');
      return;
    }
    const saved = JSON.parse(raw);
    if (saved.email === email && saved.password === password) {
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      if (loginModal) loginModal.hide();

      // store 'session' flag (demo)
      localStorage.setItem('elevana_session', JSON.stringify({ email: saved.email, name: saved.name, loggedAt: new Date().toISOString() }));
      alert(Welcome back, ${saved.name}!);
      loginForm.reset();
    } else {
      alert('Invalid credentials. Try again.');
    }
  });
}
  document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.querySelector(".btn-primary");
  const exploreBtn = document.querySelector(".btn-outline");

  getStartedBtn.addEventListener("click", function () {
    alert("🚀 Welcome to Elevana! Let's rise and grow together.");
  });

  exploreBtn.addEventListener("click", function () {
    alert("✨ Explore Elevana's features and discover your potential!");
  });
});