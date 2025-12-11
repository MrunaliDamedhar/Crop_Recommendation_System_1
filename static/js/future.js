// ---------------- Translations ----------------
const translations = {
  en: {
    siteTitle: "Crop Recommendation System",
    navHome: "Home",
    navAbout: "About",
    navService: "Services",
    navContact: "Contact",
    heroH1: "🌿 Crop Recommendation System",
    heroP: "Enter soil and weather values to get a crop recommendation",
    heroButton: "🌾 Predict Your Crop",
    footerText: "© 2025 Crop Recommendation System | All rights reserved.",
    labels: {
      nitrogen: "🌱 Nitrogen:",
      phosphorus: "🌾 Phosphorus:",
      potassium: "🌻 Potassium:",
      temperature: "🌡️ Temperature (°C):",
      humidity: "💧 Humidity (%):",
      ph: "🧪 pH Level:",
      rainfall: "🌧️ Rainfall (mm):"
    }
  },
  hi: {
    siteTitle: "फसल सिफारिश प्रणाली",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navService: "सेवाएँ",
    navContact: "संपर्क करें",
    heroH1: "🌿 फसल सिफारिश प्रणाली",
    heroP: "मिट्टी और मौसम के मान दर्ज करें ताकि सबसे अच्छी फसल की सिफारिश की जा सके",
    heroButton: "🌾 अपनी फसल की भविष्यवाणी करें",
    footerText: "© 2025 फसल सिफारिश प्रणाली | सर्व अधिकार सुरक्षित",
    labels: {
      nitrogen: "🌱 नाइट्रोजन:",
      phosphorus: "🌾 फॉस्फोरस:",
      potassium: "🌻 पोटॅशियम:",
      temperature: "🌡️ तापमान (°C):",
      humidity: "💧 आर्द्रता (%):",
      ph: "🧪 पीएच स्तर:",
      rainfall: "🌧️ वर्षा (मिमी):"
    }
  },
  mr: {
    siteTitle: "पिक शिफारस प्रणाली",
    navHome: "होम",
    navAbout: "बद्दल",
    navService: "सेवा",
    navContact: "संपर्क",
    heroH1: "🌿 पिक शिफारस प्रणाली",
    heroP: "माती आणि हवामानाचे मूल्य प्रविष्ट करा जेणेकरून सर्वोत्तम पीक शिफारस करता येईल",
    heroButton: "🌾 आपल्या पीकाची भाकीत करा",
    footerText: "© 2025 पिक शिफारस प्रणाली | सर्व हक्क राखीव",
    labels: {
      nitrogen: "🌱 नायट्रोजन:",
      phosphorus: "🌾 फॉस्फरस:",
      potassium: "🌻 पोटॅशियम:",
      temperature: "🌡️ तापमान (°C):",
      humidity: "💧 आर्द्रता (%):",
      ph: "🧪 पीएच पातळी:",
      rainfall: "🌧️ पाऊस (मिमी):"
    }
  }
};

// ---------------- Change Language ----------------
function changeLanguage(lang) {
  const t = translations[lang];

  document.getElementById('site-title').innerText = t.siteTitle;
  document.getElementById('nav-home').innerText = t.navHome;
  document.getElementById('nav-about').innerText = t.navAbout;
  document.getElementById('nav-service').innerText = t.navService;
  document.getElementById('nav-contact').innerText = t.navContact;

  document.getElementById('hero-h1').innerText = t.heroH1;
  document.getElementById('hero-p').innerText = t.heroP;
  document.getElementById('predict-btn').innerText = t.heroButton;

  document.getElementById('label-nitrogen').innerText = t.labels.nitrogen;
  document.getElementById('label-phosphorus').innerText = t.labels.phosphorus;
  document.getElementById('label-potassium').innerText = t.labels.potassium;
  document.getElementById('label-temperature').innerText = t.labels.temperature;
  document.getElementById('label-humidity').innerText = t.labels.humidity;
  document.getElementById('label-ph').innerText = t.labels.ph;
  document.getElementById('label-rainfall').innerText = t.labels.rainfall;

  document.getElementById('footer-text').innerText = t.footerText;

  localStorage.setItem('siteLanguage', lang);
}

// ---------------- Language Selector ----------------
const languageSelector = document.getElementById('language-select');
languageSelector.addEventListener('change', function () {
  changeLanguage(this.value);
});

// ---------------- On Page Load ----------------
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  languageSelector.value = savedLang;
  changeLanguage(savedLang);

  // Highlight active navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
