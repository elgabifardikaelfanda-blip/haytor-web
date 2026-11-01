(function(){ 
  var t = document.getElementById('marquee-track'); 
  if(t) t.innerHTML += t.innerHTML; 
})();

var I18N_EN = {
  // Navigasi & Hero
  meta_title: "HAYTOR STORE — Digital Software & License Solutions",
  nav_services: "Features", 
  nav_packages: "Products", 
  nav_video: "Video Tutorials",
  nav_order: "How to Order", 
  nav_testi: "Testimonials", 
  nav_contact: "Contact",
  hero_badge: "🐾 Digital Software Solution 🐱",
  hero_title: "Digital Software & License Solutions.",
  hero_desc: "Central hub for digital applications, message integration scripts, and licenses. Suitable for educational testing, phone monitoring, and tracking.",
  cta_telegram: "💬 Telegram Official", 
  cta_wa: "🟢 WhatsApp Admin", 
  cta_packages: "See Catalog ↓",
  chip1: "⚡ Fast Process", 
  chip2: "🔒 Safe & Trusted", 
  chip3: "📁 Full Guidance & Support",

  // Services
  services_badge: "MAIN FEATURES", 
  services_title: "Featured Services & Modules",
  services_sub: "Complete digital automation and testing solutions in one hand.",
  svc1_title: "System Disruption (Bug)",
  svc1_desc: "System vulnerability exploitation, hidden force-close (Android & iOS), extreme delay, and target network suppression.",
  svc2_title: "Remote Access Trojan (RAT)",
  svc2_desc: "Full remote control features: camera access, flashlight, GPS tracking, SMS/Gmail reader, gallery, and device lock.",
  svc3_title: "Network Tools",
  svc3_desc: "Server stress testing (DDoS), network analysis, public info tracker, and server path scanner.",
  svc4_title: "Automation & Utility",
  svc4_desc: "Automated bulk message sender, Telegram bot integration, AI assistant, media downloader, and digital bookkeeping.",

  // Catalog Section General
  packages_badge: "PRODUCT CATALOG", 
  packages_title: "Applications & License Packages",
  packages_sub: "Click directly on any pricing package below to place an instant order.",
  tag_no_tg: "⚡ No Telegram Needed (WA Only)",
  tag_req_tg: "🤖 Telegram Required",
  tag_popular: "⭐ POPULAR",
  tag_new: "🐾 NEW RELEASE",

  // Global Package Names
  pkg_1d: "1 Day",
  pkg_5d: "5 Days",
  pkg_7d: "7 Days",
  pkg_30d: "30 Days",
  pkg_1w: "1 Week",
  pkg_1m: "1 Month",
  pkg_basic_1d: "Basic 1 Day",
  pkg_basic_7d: "Basic 7 Days",
  pkg_perm: "Permanent",
  pkg_right_hand: "Right-Hand Admin",
  pkg_private_pt: "Private Corporate",
  pkg_member: "Member",
  pkg_mem_30d: "Member 30 Days",
  pkg_mem_100d: "Member 100 Days",
  pkg_mem_perm: "Member Permanent",
  pkg_mem_1m: "Member 1 Month",
  pkg_mem_fullup: "Member Full Up",
  pkg_res_365d: "Reseller 365 Days",
  pkg_res_perm: "Reseller Permanent",
  pkg_res_1m: "Reseller 1 Month",
  pkg_vip_perm: "VIP Permanent",
  pkg_owner_perm: "Owner Permanent",
  pkg_helper_perm: "Helper Permanent",
  pkg_admin_perm: "Admin Permanent",
  pkg_pt_perm: "Corporate Permanent",
  pkg_founder_perm: "Founder Permanent",
  pkg_1d_trial: "1 Day Trial",
  pkg_1m_trial: "1 Month Trial",

  // Label Fitur Detail
  lbl_bug: "SYSTEM BUGS:",
  lbl_tools: "TOOLS & ENTERTAINMENT:",
  lbl_util_net: "UTILITY & NETWORK:",
  lbl_bug_rat: "SYSTEM BUGS & RAT:",
  lbl_supp_tools: "SUPPORTING TOOLS:",
  lbl_bug_tools: "BUG & TOOLS:",
  lbl_bug_rat_spy: "BUGS & SPY RAT:",
  lbl_wa_attack: "WHATSAPP ATTACK MENU:",
  lbl_bug_module: "BUG MODULES:",
  lbl_bug_apps: "BUG APPS FEATURES:",
  lbl_utility: "UTILITY FEATURES:",
  lbl_bug_menu: "BUG MENU:",
  lbl_other_features: "OTHER FEATURES:",
  lbl_viper_features: "VIPER BUGS FEATURES:",

  // Deskripsi Produk & Details
  p1_desc: "Complete system bug and utility application, accessible via WhatsApp only.",
  sum_p1: "🔍 View Holow V14 Feature Details",
  p1_bug_desc: "Latest system exploits, force close hidden apps for Android & iOS, extreme delay, target UI blackout, network suppression, and group/global chat disruption.",
  p1_tool_desc: "Domain lookup, network path scanner, theme manager, AI assistant, global messenger, digital Quran, comic reader, anime player, social media downloader, and QR generator.",
  btn_order_admin_p1: "Order Holow V14 via Admin",

  p2_desc: "High-speed digital utility and network testing toolkit via WhatsApp.",
  sum_p2: "🔍 View Vilian Crash Feature Details",
  p2_util_desc: "Server stress testing (DDoS), internet network analysis, public info tracker, auto media downloader, bulk message sender, mini-games, and format converter.",
  btn_order_admin_p2: "Order Vilian Crash via Admin",

  p3_desc: "Message automation engine and full RAT features integrated with Telegram bot.",
  sum_p3: "🔍 View Mantax X Rat Feature Details",
  p3_bug_desc: "Blank number delay sending, hidden iOS force close, auto-calling, remote access control (RAT), phone spy, and massive link registrant.",
  p3_tool_desc: "Bookkeeping, AI assistant, network analysis, public data tracker, auto downloader, and bot installer.",
  btn_order_admin_p3: "Order Mantax X Rat via Admin",

  p4_desc: "All-in-one app containing bug system, phone spy, and multi-RAT in one APK via WhatsApp.",
  sum_p4: "🔍 View Syam X Rat Feature Details",
  p4_desc_det: "Force close WA Android/Business/iOS, auto calls, group freezer, digital finance manager, AI assistant, VPS manager, and 3 RAT systems.",
  btn_order_admin_p4: "Order Syam X Rat via Admin",

  p5_desc: "Advanced Remote Access Trojan (RAT) and system disruption app without Telegram.",
  sum_p5: "🔍 View X - FAR X RAT Feature Details",
  p5_desc_det: "Torch/camera control, screen lock, GPS locator, live monitoring, screenshot tool, contact/SMS/Gmail/gallery reader, remote WiFi/Power kill.",
  btn_order_admin_p5: "Order X - Far X Rat via Admin",

  p6_tag: "⚡ WhatsApp Attack Menu & RAT",
  p6_desc: "Comprehensive bug attack app with flexible member to founder licensing.",
  sum_p6: "🔍 View X•Miyabi V7 Feature Details",
  p6_attack_desc: "Bug One (Entry-Level), Custom Bug, Group Bug (Crash Group), and Ban Group.",
  p6_mod_desc: "FC Invisible, FC Click, Bulod Crash Delay, Crash C1 Pack, Delay Frazer, Delay Hard Try, Blank Click, Crash Notif, Delay X Forceclose, Crash UI Chat, Crash Spam, Quota Drain, Android Crash, Home Crash, Delay Invisible.",
  btn_order_admin_p6: "Order X•Miyabi V7 via Admin",

  p7_tag: "⚡ Bug Apps & RAT / Phone Spy",
  p7_desc: "Combination of bug apps, RAT spy tools, global sender, and Osint tools.",
  sum_p7: "🔍 View Oxva Bug X Rat Feature Details",
  p7_bug_desc: "Forclose Invisible, Delay Hit, Delay Invisible, Blank Hard, Spam UI, Crash Hard, Loca Hard.",
  p7_util_desc: "RAT / Phone Spy, Global Sender, Free Fire Server Lag DDoS, Domain Osint Tools, WhatsApp Group Bug.",
  btn_order_admin_p7: "Order Oxva Bug X Rat via Admin",

  p8_tag: "⚡ Full Bug & Media Downloader",
  p8_desc: "Complete toolkit from freeze, force close, RAT spy to entertainment.",
  sum_p8: "🔍 View Red Bull Feature Details",
  p8_bug_desc: "Freeze Home, Blank Screen, Delay Invisible, Freeze Invisible, Force Close iPhone, Force Close Android.",
  p8_other_desc: "RAT / Phone Spy, Global Sender, Anime Stream, Server Manager, Digital Quran, DDoS Tools, Wifi Killer, Osint Tools, Media Downloader, Utilities, News Reader.",
  btn_order_admin_p8: "Order Red Bull via Admin",

  p9_tag: "⚡ Tools & Prank Utility",
  p9_desc: "Multifunctional application for system testing, spamming, and digital utilities.",
  sum_p9: "🔍 View Nexsus Feature Details",
  p9_bug_desc: "Crash Msg Android, Delay Invisible, Prank Alert Spam, Banned Group WA.",
  p9_other_desc: "Spam Pair, AM Premium, Spam NGL, Web To Apk, QR Generator, WA Ban Checker, JS Encryptor, Media Downloader, Netflix Token Player.",
  btn_order_admin_p9: "Order Nexsus via Admin",

  p10_tag: "⚡ High-Penetration WA Bug X Spy",
  p10_desc: "High-penetration fast bug application equipped with phone spy features.",
  sum_p10: "🔍 View Bumble Bie Feature Details",
  p10_bug_desc: "Forclose Invisible Work All, Forclose One Msg Hard, Forclose Video All Android, Forclose Image Work All WA, Crash Invisible No Click, Crash Visible Auto C1, Freeze Chat Brutal, Blank Android No Click, Forclose New V2, Delay Hard, Crash UI System.",
  btn_order_admin_p10: "Order Bumble Bie via Admin",

  p11_tag: "⚡ New Release Sale",
  p11_desc: "Premium bug application with fresh UI, RAT features, and AM Mod integration.",
  sum_p11: "🔍 View Viper Bugs Feature Details",
  p11_bug_desc: "Create AM Mod, OTP Spam, Global Chat, Exclusive Custom UI, All Bug Work, RAT (Phone Spy), Anti-Ampos System.",
  btn_order_admin_p11: "Order Viper Bugs via Admin",

  // Video Section
  video_badge: "VIDEO & DEMO HUB",
  video_title: "Tutorial & Performance Videos",
  video_sub: "Watch usage guides and app performance proofs. If opening via Chrome PC, click PLAY then triple dot to activate Picture in Picture.",

  // Order Steps
  order_badge: "TRANSACTION GUIDE", 
  order_title: "5 Easy Ordering Steps",
  order_sub: "Hassle-free — fast process and direct delivery by admin.",
  step1_title: "Choose Service",
  step1_desc: "Click directly on any pricing package above.",
  step2_title: "Select Contact",
  step2_desc: "Select WhatsApp or Telegram via the interactive popup window.",
  step3_title: "Payment",
  step3_desc: "Complete payment using the payment methods provided by admin.",
  step4_title: "ID Activation",
  step4_desc: "Wait a few minutes while your app ID or license is activated.",
  step5_title: "Ready to Use",
  step5_desc: "Login to the application and enjoy all full features!",

  // Testimonials
  testi_badge: "OFFICIAL CHANNELS", 
  testi_title: "Proof & Official Channels",
  testi_sub: "Join our official WhatsApp channels for updates and buyer proofs.",
  testi1_quote: "“Trusted buyer transaction proof channel with regular feature updates.”",
  btn_testi1: "⭐ WA Testimonial Channel",
  testi2_quote: "“Official channel for product releases, app updates, and license promos.”",
  btn_testi2: "📢 HAYTOR Official Channel",

  // Contact & Footer
  contact_title: "Need Help / Want to Order?", 
  contact_desc: "Contact admin directly via Telegram or WhatsApp. Fast response!",
  modal_title: "Select Ordering Channel",
  modal_sub: "Please choose a platform to proceed with instant message formatting:"
};

var ID_DEFAULTS = {};

// Inisialisasi penyimpan teks bawaan Bahasa Indonesia
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){ 
    ID_DEFAULTS[el.getAttribute('data-i18n')] = el.innerHTML; 
  });
});

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k = el.getAttribute('data-i18n');
    if(lang === 'en' && I18N_EN[k]){
      el.innerHTML = I18N_EN[k];
    } else if (ID_DEFAULTS[k]) {
      el.innerHTML = ID_DEFAULTS[k];
    }
  });
  document.documentElement.lang = lang;
  
  var btnId = document.getElementById('btn-id');
  var btnEn = document.getElementById('btn-en');
  if(btnId && btnEn){
    btnId.classList.toggle('active', lang === 'id');
    btnEn.classList.toggle('active', lang === 'en');
  }
  
  try{ localStorage.setItem('haytor-lang', lang); }catch(e){}
}

(function(){
  var saved = 'id';
  try{ saved = localStorage.getItem('haytor-lang') || 'id'; }catch(e){}
  if(saved === 'en'){
    window.addEventListener('DOMContentLoaded', function(){ setLang('en'); });
  }
})();

// Modal Popup Handler
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

      if(modalProductInfo) modalProductInfo.textContent = `${product} — ${pkg} (${price})`;

      const waUrl = `https://wa.me/6285770059860?text=${encodeURIComponent(message)}`;
      const tgUrl = `https://t.me/cacihama?text=${encodeURIComponent(message)}`;

      if(modalWaBtn) modalWaBtn.href = waUrl;
      if(modalTgBtn) modalTgBtn.href = tgUrl;

      if(modal) modal.style.display = 'flex';
    });
  });

  if(closeModal) {
    closeModal.addEventListener('click', function() {
      if(modal) modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function(e) {
    if(e.target === modal) {
      modal.style.display = 'none';
    }
  });
});