const translations = {
  en: {
    siteTitle: "Crop Recommendation System",
    navHome: "Home",
    navAbout: "About",
    navService: "Services",
    navContact: "Contact",
    navBack: "Back to Form",
    predictionHeader: "🌿 Based on your soil and climate inputs:",
    predictionResultPrefix: "You should grow",
    retryButton: "🔄 Try Another Prediction",
    footerText: "© 2025 Crop Recommendation System. All rights reserved."
  },
  hi: {
    siteTitle: "फसल सिफारिश प्रणाली",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navService: "सेवाएँ",
    navContact: "संपर्क करें",
    navBack: "फॉर्म पर वापस जाएँ",
    predictionHeader: "🌿 आपकी मिट्टी और मौसम इनपुट के आधार पर:",
    predictionResultPrefix: "आपको यह उगाना चाहिए",
    retryButton: "🔄 दूसरी भविष्यवाणी करें",
    footerText: "© 2025 फसल सिफारिश प्रणाली | सर्व अधिकार सुरक्षित"
  },
  mr: {
    siteTitle: "पिक शिफारस प्रणाली",
    navHome: "होम",
    navAbout: "बद्दल",
    navService: "सेवा",
    navContact: "संपर्क",
    navBack: "फॉर्मकडे परत जा",
    predictionHeader: "🌿 आपल्या माती आणि हवामानाच्या इनपुटच्या आधारावर:",
    predictionResultPrefix: "आपल्याला हे पिक घ्यावे",
    retryButton: "🔄 दुसरे भविष्यवाणीसाठी प्रयत्न करा",
    footerText: "© 2025 पिक शिफारस प्रणाली | सर्व हक्क राखीव"
  }
};

function changeLanguage(lang) {
  const t = translations[lang];

  // Navbar
  document.getElementById('site-title').innerText = t.siteTitle;
  document.getElementById('nav-home').innerText = t.navHome;
  document.getElementById('nav-about').innerText = t.navAbout;
  document.getElementById('nav-service').innerText = t.navService;
  document.getElementById('nav-contact').innerText = t.navContact;
  document.getElementById('nav-back').innerText = t.navBack;

  // Prediction section
  document.getElementById('prediction-header').innerText = t.predictionHeader;

  // Update "You should grow {{ prediction }}" dynamically
  const predictionValue = document.querySelector('.result span').innerText;
  document.querySelector('.result').innerText = `${t.predictionResultPrefix} ${predictionValue}`;

  // Retry button
  document.getElementById('retry-btn').innerText = t.retryButton;

  // Footer
  document.getElementById('footer-text').innerText = t.footerText;

  // Save selection
  localStorage.setItem('siteLanguage', lang);
}

// Language selector
const languageSelector = document.getElementById('language-select');
languageSelector.addEventListener('change', function () {
  changeLanguage(this.value);
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  languageSelector.value = savedLang;
  changeLanguage(savedLang);
});
