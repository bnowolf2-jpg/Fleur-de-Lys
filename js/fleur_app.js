
/**
 * Fleur de Lys - Dual-Language Engine (FR / EN) & Controlled WhatsApp Concierge
 */
(function() {
  const translations = {
    fr: {
      "ABOUT": "À PROPOS",
      "TREATMENTS": "SOINS & RITUELS",
      "THERAPISTS": "PRATICIENNES",
      "GALLERY": "GALERIE",
      "BLOG": "ACTUALITÉS",
      "FAQ": "FAQ",
      "CONTACTS": "CONTACT",
      "BOOK A TREATMENT": "RÉSERVER UN SOIN",
      "GIFT CARD": "CARTE CADEAU",
      "CARD": "CARTE CADEAU",
      "MONDAY-SUNDAY 10AM-10PM": "LUNDI-DIMANCHE 10H-22H",
      "SCROLL TO EXPLORE": "DÉFILER POUR EXPLORER",
      "BOOK NOW": "RÉSERVER MAINTENANT",
      "CHOOSE": "CHOISIR",
      "READ MORE": "EN SAVOIR PLUS",
      "READ MORE ABOUT US": "EN SAVOIR PLUS SUR NOUS",
      "EXPLORE TREATMENT": "DÉCOUVRIR LE SOIN",
      "EXPLORE CARDS": "DÉCOUVRIR LES CARTES",
      "SHOW ON THE MAP": "VOIR SUR LA CARTE",
      "CERTIFIED GRAND MASTERS": "MAÎTRES PRATICIENNES CERTIFIÉES",
      "SAVE UP TO 25% ON ALL TREATMENTS": "ÉCONOMISEZ JUSQU'À 25% SUR TOUS LES SOINS",
      "FLEUR DE LYS CLUB CARDS —": "CARTES PRIVILÈGES FLEUR DE LYS —",
      "FIND THE PERFECT GIFT": "OFFREZ LE CADEAU IDÉAL",
      "OUR MISSION": "NOTRE MISSION",
      "PRIVATE HAMMAM": "HAMMAM PRIVATIF",
      "MASSAGES & BODY WRAPPINGS": "MASSAGES & SOINS DU CORPS",
      "COUPLES TREATMENTS": "RITUELS EN DUO",
      "FLEUR DE LYS IS ECO FRIENDLY": "FLEUR DE LYS : ÉCRIN ÉCO-RESPONSABLE & NATUREL",
      "STOCK AND SPECIAL OFFERS": "OFFRES & PRIVILÈGES EXCLUSIFS",
      "STOCK & SPECIAL OFFERS": "OFFRES & PRIVILÈGES EXCLUSIFS",
      "ALL RIGHTS RESERVED": "TOUS DROITS RÉSERVÉS",
      "CONTACT US": "CONTACTEZ-NOUS"
    },
    en: {
      "À PROPOS": "ABOUT",
      "SOINS & RITUELS": "TREATMENTS",
      "SOINS": "TREATMENTS",
      "PRATICIENNES": "THERAPISTS",
      "GALERIE": "GALLERY",
      "ACTUALITÉS": "BLOG",
      "FAQ": "FAQ",
      "CONTACT": "CONTACTS",
      "RÉSERVER UN SOIN": "BOOK A TREATMENT",
      "CARTE CADEAU": "GIFT CARD",
      "LUNDI-DIMANCHE 10H-22H": "MONDAY-SUNDAY 10AM-10PM",
      "DÉFILER POUR EXPLORER": "SCROLL TO EXPLORE",
      "RÉSERVER MAINTENANT": "BOOK NOW",
      "CHOISIR": "CHOOSE",
      "EN SAVOIR PLUS": "READ MORE",
      "EN SAVOIR PLUS SUR NOUS": "READ MORE ABOUT US",
      "DÉCOUVRIR LE SOIN": "EXPLORE TREATMENT",
      "DÉCOUVRIR LES CARTES": "EXPLORE CARDS",
      "VOIR SUR LA CARTE": "SHOW ON THE MAP",
      "MAÎTRES PRATICIENNES CERTIFIÉES": "CERTIFIED GRAND MASTERS",
      "ÉCONOMISEZ JUSQU'À 25% SUR TOUS LES SOINS": "SAVE UP TO 25% ON ALL TREATMENTS",
      "CARTES PRIVILÈGES FLEUR DE LYS —": "FLEUR DE LYS CLUB CARDS —",
      "OFFREZ LE CADEAU IDÉAL": "FIND THE PERFECT GIFT",
      "NOTRE MISSION": "OUR MISSION",
      "HAMMAM PRIVATIF": "PRIVATE HAMMAM",
      "MASSAGES & SOINS DU CORPS": "MASSAGES & BODY WRAPPINGS",
      "RITUELS EN DUO": "COUPLES TREATMENTS",
      "FLEUR DE LYS : ÉCRIN ÉCO-RESPONSABLE & NATUREL": "FLEUR DE LYS IS ECO FRIENDLY",
      "OFFRES & PRIVILÈGES EXCLUSIFS": "STOCK AND SPECIAL OFFERS",
      "TOUS DROITS RÉSERVÉS": "ALL RIGHTS RESERVED",
      "CONTACTEZ-NOUS": "CONTACT US"
    }
  };

  let currentLang = localStorage.getItem('fleur_lang') || 'fr';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fleur_lang', lang);
    document.documentElement.lang = lang;

    // Update buttons active class
    document.querySelectorAll('.fleur-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const selector = [
      '.menu_top ul li a',
      '.top_btn_row a .t',
      '.top_btn_row .btn_lnk',
      '.h2.t_split',
      '.h3.t_split',
      '.h3',
      '.h2',
      '.t_lnk',
      '.everyday p',
      '.scr p',
      '.cgm_ttl .t',
      '.btn_bf_btm .t',
      '.btn_anmt .t',
      '.ya_map_ttl .t',
      '.mt_cols .t'
    ].join(', ');

    document.querySelectorAll(selector).forEach(el => {
      // Store original clean text on first run
      if (!el.hasAttribute('data-clean-text')) {
        el.setAttribute('data-clean-text', el.innerText.trim());
      }
      const raw = el.getAttribute('data-clean-text');
      const cleanUpper = raw.toUpperCase().replace(/\s+/g, ' ');

      if (lang === 'fr') {
        if (translations.fr[cleanUpper]) {
          el.innerText = translations.fr[cleanUpper];
        }
      } else if (lang === 'en') {
        if (translations.en[cleanUpper]) {
          el.innerText = translations.en[cleanUpper];
        } else {
          // If original was English, restore
          el.innerText = raw;
        }
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    // 1. Create WhatsApp button (hidden by default)
    let waBtn = document.getElementById('fleur-whatsapp-btn');
    if (!waBtn) {
      waBtn = document.createElement('a');
      waBtn.id = 'fleur-whatsapp-btn';
      waBtn.href = 'https://wa.me/213792686838?text=Bonjour%20Spa%20Fleur%20de%20Lys%2C%20je%20souhaite%20r%C3%A9server%20un%20soin.';
      waBtn.target = '_blank';
      waBtn.rel = 'noopener noreferrer';
      waBtn.setAttribute('aria-label', 'WhatsApp Fleur de Lys');
      waBtn.innerHTML = `
        <span class="fleur-wa-tooltip">Discuter sur WhatsApp</span>
        <div class="fleur-wa-circle">
          <svg viewBox="0 0 32 32" width="22" height="22" fill="#ffffff">
            <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4a11.6 11.6 0 1 1 9.8 5.5zm6.4-8.6c-.4-.2-2.1-1-2.4-1.2s-.6-.2-.9.2-.9 1.2-1.1 1.4-.4.2-.8 0a10 10 0 0 1-2.9-1.8 11.2 11.2 0 0 1-2-2.5c-.2-.4 0-.6.2-.8s.4-.4.6-.6.3-.4.4-.6a.9.9 0 0 0 0-.8c-.1-.2-.9-2.1-1.2-2.9s-.6-.7-.8-.7h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c.9.4 1.6.6 2.2.8a5.3 5.3 0 0 0 2.4.1 4 4 0 0 0 2.6-1.8 3.3 3.3 0 0 0 .2-1.8c-.1-.2-.4-.3-.8-.5z"/>
          </svg>
        </div>
      `;
      document.body.appendChild(waBtn);
    }

    // ROBUST SCROLL TRIGGER (Compatible with SmoothScrollbar and Native Scroll)
    function getScrollOffset() {
      const scroller = document.querySelector('.scroller');
      if (window.Scrollbar && scroller) {
        const sb = window.Scrollbar.get(scroller);
        if (sb && sb.offset && typeof sb.offset.y === 'number') {
          return sb.offset.y;
        }
      }
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    const isHome = document.querySelector('.main_screen') !== null;
    const menuSection = document.querySelector('.sky_spa_programm_menu');

    function checkWhatsAppScroll() {
      if (!waBtn) return;
      const scrollY = getScrollOffset();

      if (isHome) {
        if (menuSection) {
          const rect = menuSection.getBoundingClientRect();
          // Trigger the exact moment the Fleur de Lys Menu section enters the viewport
          // or when scroll offset reaches menu level (~500px)
          const reached = (rect.top <= window.innerHeight * 0.95) || (scrollY >= 550);
          if (reached) {
            waBtn.classList.add('visible');
          } else {
            waBtn.classList.remove('visible');
          }
        } else {
          if (scrollY >= 550) {
            waBtn.classList.add('visible');
          } else {
            waBtn.classList.remove('visible');
          }
        }
      } else {
        // Subpages: trigger on the exact same level (after scrolling past top hero banner ~400px)
        if (scrollY >= 400) {
          waBtn.classList.add('visible');
        } else {
          waBtn.classList.remove('visible');
        }
      }
    }

    // Attach listeners across all possible scroll sources
    window.addEventListener('scroll', checkWhatsAppScroll, { passive: true });
    document.addEventListener('scroll', checkWhatsAppScroll, { passive: true });

    // Continuously hook SmoothScrollbar once it initializes
    let hooked = false;
    function tryHookScrollbar() {
      const scroller = document.querySelector('.scroller');
      if (window.Scrollbar && scroller) {
        const sb = window.Scrollbar.get(scroller);
        if (sb && !hooked) {
          sb.addListener(checkWhatsAppScroll);
          hooked = true;
        }
      }
    }

    tryHookScrollbar();
    // Check every 100ms to guarantee instant response regardless of scroll mechanism
    setInterval(() => {
      if (!hooked) tryHookScrollbar();
      checkWhatsAppScroll();
    }, 100);

    // Initial check
    checkWhatsAppScroll();

    // 2. Language Switcher in Header
    const headerRow = document.querySelector('.header .top_btn_row') || document.querySelector('.header_in .rows');
    if (headerRow && !document.getElementById('fleur-lang-switcher')) {
      const switcher = document.createElement('div');
      switcher.id = 'fleur-lang-switcher';
      switcher.className = 'fleur-lang-switcher';
      switcher.innerHTML = `
        <button type="button" class="fleur-lang-btn ${currentLang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
        <span class="fleur-lang-sep">/</span>
        <button type="button" class="fleur-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
      `;
      
      switcher.querySelectorAll('.fleur-lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          applyLanguage(btn.dataset.lang);
        });
      });

      headerRow.prepend(switcher);
    }

    applyLanguage(currentLang);
  });
})();
