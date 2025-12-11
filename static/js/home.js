// translations.js
const translations = {
  en: {
    siteTitle: "Crop Recommendation System",
    navHome: "Home",
    navAbout: "About",
    navService: "Services",
    navContact: "Contact",
    heroH1: "🌾 Crop Recommendation System",
    heroP: "Welcome! We're here to help you choose the best crop based on your soil nutrients. Predict, grow, and harvest smarter!",
    heroH3: "Start your journey with us 🌱",
    heroH2: "Click the button below to begin",
    heroButton: "🌿 Login / Register",
    footerText: "© 2025 Crop Recommendation System. All rights reserved."
  },
  hi: {
    siteTitle: "फसल सिफारिश प्रणाली",
    navHome: "होम",
    navAbout: "हमारे बारे में",
    navService: "सेवाएँ",
    navContact: "संपर्क करें",
    heroH1: "🌾 फसल सिफारिश प्रणाली",
    heroP: "स्वागत है! हम आपको आपके मिट्टी पोषक तत्वों के आधार पर सबसे अच्छी फसल चुनने में मदद करने के लिए यहाँ हैं। स्मार्ट तरीके से भविष्यवाणी करें, उगाएँ और कटाई करें!",
    heroH3: "हमारे साथ अपनी यात्रा शुरू करें 🌱",
    heroH2: "नीचे दिए गए बटन पर क्लिक करें",
    heroButton: "🌿 लॉगिन / रजिस्टर",
    footerText: "© 2025 फसल सिफारिश प्रणाली | सर्व अधिकार सुरक्षित"
  },
  mr: {
    siteTitle: "पिक शिफारस प्रणाली",
    navHome: "होम",
    navAbout: "बद्दल",
    navService: "सेवा",
    navContact: "संपर्क",
    heroH1: "🌾 पिक शिफारस प्रणाली",
    heroP: "आपले स्वागत आहे! आम्ही तुम्हाला मातीच्या पोषक तत्त्वांवर आधारित सर्वोत्तम पीक निवडण्यासाठी मदत करतो. स्मार्ट पद्धतीने भाकीत करा, वाढवा आणि कापणी करा!",
    heroH3: "आमच्यासोबत तुमची यात्रा सुरू करा 🌱",
    heroH2: "खालील बटणावर क्लिक करा",
    heroButton: "🌿 लॉगिन / नोंदणी",
    footerText: "© 2025 पिक शिफारस प्रणाली. सर्व हक्क राखीव."
  }
};

// Function to update all translatable elements
function changeLanguage(lang) {
  const t = translations[lang];

  // Update all elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = t[key]; // For submit buttons
      } else {
        el.innerText = t[key]; // For normal text
      }
    }
  });

  // Save selected language
  localStorage.setItem('siteLanguage', lang);
}

// Initialize language on page load
function initLanguage() {
  const savedLang = localStorage.getItem('siteLanguage') || 'en';
  const languageSelector = document.getElementById('language-select');
  if(languageSelector) {
    languageSelector.value = savedLang;
    languageSelector.addEventListener('change', function() {
      changeLanguage(this.value);
    });
  }
  changeLanguage(savedLang);
}

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', initLanguage);
