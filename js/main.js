(function(){ 
  var t = document.getElementById('marquee-track'); 
  if(t) t.innerHTML += t.innerHTML; 
})();

var I18N_EN = {
  nav_services: "Features", 
  nav_packages: "Products", 
  nav_video: "Video Tutorials",
  nav_order: "How to Order", 
  nav_testi: "Testimonials", 
  nav_contact: "Contact",
  hero_badge: "🐾 Digital Software Solution 🐱",
  hero_title: "Digital Software & License Solutions.",
  hero_desc: "Central hub for digital applications, message integration scripts, and licenses. Safe, fast, and reliable.",
  cta_telegram: "💬 Telegram Official", 
  cta_wa: "🟢 WhatsApp Admin", 
  cta_packages: "See Catalog ↓",
  chip1: "⚡ Fast Process", 
  chip2: "🔒 Safe & Trusted", 
  chip3: "📁 Full Guidance & Support",
  services_badge: "MAIN FEATURES", 
  services_title: "Featured Services & Modules",
  services_sub: "Complete digital automation and testing solutions in one hand.",
  packages_badge: "PRODUCT CATALOG", 
  packages_title: "Applications & License Packages",
  packages_sub: "Click directly on any pricing package below to place an instant order.",
  video_badge: "VIDEO & DEMO HUB",
  video_title: "Tutorial & Performance Videos",
  video_sub: "Watch usage guides and app performance proofs (manual play/pause).",
  order_badge: "TRANSACTION GUIDE", 
  order_title: "5 Easy Ordering Steps",
  order_sub: "Hassle-free — fast process and direct delivery by admin.",
  testi_badge: "OFFICIAL CHANNELS", 
  testi_title: "Proof & Official Channels",
  testi_sub: "Join our official WhatsApp channels for updates and buyer proofs.",
  contact_title: "Need Help / Want to Order?", 
  contact_desc: "Contact admin directly via Telegram or WhatsApp. Fast response!",
  footer_tag: "Digital Software & License Solutions"
};

var ID_DEFAULTS = {};
document.querySelectorAll('[data-i18n]').forEach(function(el){ 
  ID_DEFAULTS[el.getAttribute('data-i18n')] = el.innerHTML; 
});

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n');
    el.innerHTML = (lang === 'en' && I18N_EN[k]) ? I18N_EN[k] : ID_DEFAULTS[k];
  });
  document.documentElement.lang = lang;
  document.getElementById('btn-id').classList.toggle('active', lang === 'id');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  try{ localStorage.setItem('haytor-lang', lang); }catch(e){}
}

(function(){
  var saved = 'id';
  try{ saved = localStorage.getItem('haytor-lang') || 'id'; }catch(e){}
  if(saved === 'en') setLang('en');
})();

// Modal Popup Handler for WhatsApp / Telegram Order Selection
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('orderModal');
  const closeModal = document.getElementById('closeModal');
  const modalProductInfo = document.getElementById('modalProductInfo');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const modalTgBtn = document.getElementById('modalTgBtn');

  const triggers = document.querySelectorAll('.order-trigger');

  triggers.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const product = this.getAttribute('data-product');
      const pkg = this.getAttribute('data-package');
      const price = this.getAttribute('data-price');

      let message = "";
      if(price === "Info") {
        message = `Halo Admin, saya mau tanya mengenai produk *${product}*`;
      } else {
        message = `Halo Admin, saya mau order *${product}* paket *${pkg}* seharga *${price}*`;
      }

      modalProductInfo.textContent = `${product} — ${pkg} (${price})`;

      const waUrl = `https://wa.me/6285770059860?text=${encodeURIComponent(message)}`;
      const tgUrl = `https://t.me/cacihama?text=${encodeURIComponent(message)}`;

      modalWaBtn.href = waUrl;
      modalTgBtn.href = tgUrl;

      modal.style.display = 'flex';
    });
  });

  if(closeModal) {
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function(e) {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });
});