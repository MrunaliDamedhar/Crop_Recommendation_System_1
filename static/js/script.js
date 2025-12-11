document.addEventListener('DOMContentLoaded', () => {
  // ====================== ELEMENTS ======================
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const languageSelect = document.getElementById('language-select');

  // ====================== TOGGLE LOGIN/REGISTER ======================
  function showLogin() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  }

  function showRegister() {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
  }

  loginBtn.addEventListener("click", showLogin);
  registerBtn.addEventListener("click", showRegister);

  // ====================== TRANSLATIONS ======================
  const translations = {
    en: {
      siteTitle: "Crop Recommendation System - Login/Register",
      navHome: "Home",
      navAbout: "About",
      navService: "Services",
      navContact: "Contact",
      heroH1: "🌾 Crop Recommendation System",
      loginBtn: "Login",
      registerBtn: "Register",
      loginName: "Full Name",
      loginEmail: "Email",
      loginPassword: "Password",
      loginButton: "Login",
      registerName: "Full Name",
      registerEmail: "Email",
      registerPassword: "Password",
      registerConfirm: "Confirm Password",
      registerButton: "Register",
      footerText: "© 2025 Crop Recommendation System. All rights reserved."
    },
    hi: {
      siteTitle: "फसल सिफारिश प्रणाली - लॉगिन/रजिस्टर",
      navHome: "होम",
      navAbout: "हमारे बारे में",
      navService: "सेवाएँ",
      navContact: "संपर्क करें",
      heroH1: "🌾 फसल सिफारिश प्रणाली",
      loginBtn: "लॉगिन",
      registerBtn: "रजिस्टर",
      loginName: "पूरा नाम",
      loginEmail: "ईमेल",
      loginPassword: "पासवर्ड",
      loginButton: "लॉगिन",
      registerName: "पूरा नाम",
      registerEmail: "ईमेल",
      registerPassword: "पासवर्ड",
      registerConfirm: "पासवर्ड की पुष्टि करें",
      registerButton: "रजिस्टर",
      footerText: "© 2025 फसल सिफारिश प्रणाली | सर्व अधिकार सुरक्षित"
    },
    mr: {
      siteTitle: "पिक शिफारस प्रणाली - लॉगिन/नोंदणी",
      navHome: "होम",
      navAbout: "बद्दल",
      navService: "सेवा",
      navContact: "संपर्क",
      heroH1: "🌾 पिक शिफारस प्रणाली",
      loginBtn: "लॉगिन",
      registerBtn: "नोंदणी",
      loginName: "पूर्ण नाव",
      loginEmail: "ईमेल",
      loginPassword: "पासवर्ड",
      loginButton: "लॉगिन",
      registerName: "पूर्ण नाव",
      registerEmail: "ईमेल",
      registerPassword: "पासवर्ड",
      registerConfirm: "पासवर्डची पुष्टी करा",
      registerButton: "नोंदणी",
      footerText: "© 2025 पिक शिफारस प्रणाली. सर्व हक्क राखीव."
    }
  };

  // ====================== LANGUAGE FUNCTION ======================
  function changeLanguage(lang) {
    const t = translations[lang];

    // Elements with data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (t[key]) {
        if (el.tagName === 'INPUT' && (el.type === 'submit' || el.type === 'button')) el.value = t[key];
        else el.innerText = t[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    // Title
    document.title = t.siteTitle;

    // Save language
    localStorage.setItem('siteLanguage', lang);
  }

  // ====================== INIT LANGUAGE ======================
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  languageSelect.value = savedLang;
  changeLanguage(savedLang);
  languageSelect.addEventListener('change', () => {
    changeLanguage(languageSelect.value);
  });

  // ====================== DEFAULT VIEW ======================
  showLogin(); // Show login form by default
});
