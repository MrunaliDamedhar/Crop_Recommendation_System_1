const languageSelect = document.getElementById("language-select");

const translations = {
  en: {
    siteTitle: "Crop Recommendation System",
    navHome: "Home",
    navAbout: "About",
    navService: "Services",
    navContact: "Contact",
    heroTitle: "🌾 Crop Recommendation System",
    loginBtn: "Login",
    registerBtn: "Register",
    loginName: "Full Name",
    loginEmail: "Email",
    loginPassword: "Password",
    registerName: "Full Name",
    registerEmail: "Email",
    registerPassword: "Password",
    registerConfirm: "Confirm Password",
    loginSubmit: "Login",
    registerSubmit: "Register",
    footer: "© 2025 Crop Recommendation System. All rights reserved.",
    dashboardWelcome: "🌾 Welcome to Crop Recommendation System!",
    dashboardText: "You’re now logged in. Explore the best crops for your soil and climate conditions.",
    predictBtn: "Get Crop Prediction"
  },

  hi: {
    siteTitle: "फसल सिफारिश प्रणाली",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navService: "सेवाएँ",
    navContact: "संपर्क करें",
    heroTitle: "🌾 फसल सिफारिश प्रणाली",
    loginBtn: "लॉगिन",
    registerBtn: "रजिस्टर",
    loginName: "पूरा नाम",
    loginEmail: "ईमेल",
    loginPassword: "पासवर्ड",
    registerName: "पूरा नाम",
    registerEmail: "ईमेल",
    registerPassword: "पासवर्ड",
    registerConfirm: "पासवर्ड की पुष्टि करें",
    loginSubmit: "लॉगिन",
    registerSubmit: "रजिस्टर",
    footer: "© 2025 फसल सिफारिश प्रणाली। सर्वाधिकार सुरक्षित।",
    dashboardWelcome: "🌾 फसल सिफारिश प्रणाली में आपका स्वागत है!",
    dashboardText: "आप लॉगिन हो चुके हैं। अपनी मिट्टी और जलवायु के अनुसार सर्वश्रेष्ठ फसल जानें।",
    predictBtn: "फसल की भविष्यवाणी प्राप्त करें"
  },

  mr: {
    siteTitle: "पीक शिफारस प्रणाली",
    navHome: "मुख्यपृष्ठ",
    navAbout: "आमच्याबद्दल",
    navService: "सेवा",
    navContact: "संपर्क",
    heroTitle: "🌾 पीक शिफारस प्रणाली",
    loginBtn: "लॉगिन",
    registerBtn: "नोंदणी",
    loginName: "पूर्ण नाव",
    loginEmail: "ईमेल",
    loginPassword: "पासवर्ड",
    registerName: "पूर्ण नाव",
    registerEmail: "ईमेल",
    registerPassword: "पासवर्ड",
    registerConfirm: "पासवर्डची पुष्टी करा",
    loginSubmit: "लॉगिन",
    registerSubmit: "नोंदणी",
    footer: "© 2025 पीक शिफारस प्रणाली. सर्वाधिकार राखीव.",
    dashboardWelcome: "🌾 पीक शिफारस प्रणाली मध्ये आपले स्वागत आहे!",
    dashboardText: "आपण आता लॉगिन केले आहे. आपल्या जमिनी आणि हवामानासाठी सर्वोत्तम पिके जाणून घ्या.",
    predictBtn: "पीक अंदाज मिळवा"
  }
};

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  languageSelect.value = savedLang;
  applyLanguage(savedLang);
});

// Listen for dropdown changes
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  localStorage.setItem("language", lang);
  applyLanguage(lang);
});

// Function to translate all text on the page
function applyLanguage(lang) {
  const t = translations[lang];

  // Navbar
  const navLogo = document.querySelector(".nav-logo span");
  if (navLogo) navLogo.textContent = t.siteTitle;

  const navItems = document.querySelectorAll(".nav-links li a");
  if (navItems.length >= 4) {
    navItems[0].textContent = t.navHome;
    navItems[1].textContent = t.navAbout;
    navItems[2].textContent = t.navService;
    navItems[3].textContent = t.navContact;
  }

  // Heading
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) heroTitle.textContent = t.heroTitle;

  // Buttons
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.textContent = t.loginBtn;

  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) registerBtn.textContent = t.registerBtn;

  // Input placeholders (Login Form)
  const loginName = document.getElementById("loginName");
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  if (loginName) loginName.placeholder = t.loginName;
  if (loginEmail) loginEmail.placeholder = t.loginEmail;
  if (loginPassword) loginPassword.placeholder = t.loginPassword;

  // Input placeholders (Register Form)
  const registerName = document.getElementById("registerName");
  const registerEmail = document.getElementById("registerEmail");
  const registerPassword = document.getElementById("registerPassword");
  const registerConfirm = document.getElementById("registerConfirm");
  if (registerName) registerName.placeholder = t.registerName;
  if (registerEmail) registerEmail.placeholder = t.registerEmail;
  if (registerPassword) registerPassword.placeholder = t.registerPassword;
  if (registerConfirm) registerConfirm.placeholder = t.registerConfirm;

  // Form submit buttons
  const heroButton = document.getElementById("hero-button");
  if (heroButton) heroButton.textContent = t.loginSubmit;

  const registerButton = document.getElementById("registerButton");
  if (registerButton) registerButton.textContent = t.registerSubmit;

  // Dashboard content
  const dashWelcome = document.querySelector(".welcome-box h1");
  const dashText = document.querySelector(".welcome-box p");
  const predictBtn = document.querySelector(".btn-predict");
  if (dashWelcome) dashWelcome.textContent = t.dashboardWelcome;
  if (dashText) dashText.textContent = t.dashboardText;
  if (predictBtn) predictBtn.textContent = t.predictBtn;

  // Footer
  const footer = document.querySelector("footer");
  if (footer) footer.textContent = t.footer;
}
