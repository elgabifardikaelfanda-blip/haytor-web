(function(){ 
  var t = document.getElementById('marquee-track'); 
  if(t) t.innerHTML += t.innerHTML; 
})();

var I18N_EN = {
  // --- Global Nav & Meta ---
  meta_title: "HAYTOR STORE — Digital Software & License Solutions",
  meta_title_catalog: "Product Catalog — HAYTOR STORE",
  meta_title_tutorial: "Video Tutorials — HAYTOR STORE",
  nav_services: "Features", 
  nav_packages: "Products", 
  nav_dapur_kita: "Dapur Kita",
  nav_video: "Video Tutorials",
  nav_order: "How to Order", 
  nav_testi: "Testimonials", 
  nav_contact: "Contact",

  // --- Hero Section ---
  hero_badge: "🐾 Digital Dark Arts Solution 🐱",
  hero_title: "Digital Software & License Solutions.",
  hero_desc: "Center for digital dark arts applications, message integration scripts, and licenses. Suitable for educational purposes against scammers, mobile phone wiretapping, and mobile phone tracking.",
  cta_packages: "🛒 VIEW CATALOG 🛒",
  cta_finance: "💵 FINANCIAL CATALOG 💵",
  cta_telegram: "💬 Official Telegram",
  cta_wa: "🟢 Admin WhatsApp",
  chip1: "⚡ Super Fast Process",
  chip2: "🔒 Safe & Trusted Transactions",
  chip3: "📁 Guides & Full Support",

  // --- Services / Fitur Utama ---
  services_badge: "MAIN FEATURES",
  services_title: "Featured Services & Modules",
  services_sub: "Complete automation and digital system testing solutions in one hand.",
  svc1_title: "System Disruption (Bug)",
  svc1_desc: "System gap exploitation, forced closure of hidden apps (Android & iOS), extreme delay times, and target network pressure.",
  svc2_title: "Remote Controller (RAT)",
  svc2_desc: "Complete remote control features: camera access, flashlight, GPS location, read SMS/Gmail, gallery, to device locking.",
  svc3_title: "Network Tools",
  svc3_desc: "Server resilience testing (DDoS), internet network analysis, public information tracker, and server route scanner.",
  svc4_title: "Automation & Utility",
  svc4_desc: "Automatic sequential message sender, Telegram Bot integration, AI assistant, automatic media downloader, and digital bookkeeping.",

  // --- Order Section ---
  order_badge: "TRANSACTION GUIDE",
  order_title: "5 Practical Ordering Steps",
  order_sub: "No hassle — fast process and delivered directly by the admin.",
  step1_title: "Choose Service",
  step1_desc: "Select the product and pricing package you want to buy via the Product Catalog page.",
  step2_title: "Choose Contact",
  step2_desc: "Choose WhatsApp chat or Telegram via the interactive popup that appears.",
  step3_title: "Payment",
  step3_desc: "Make payment according to the method provided by the admin.",
  step4_title: "ID Activation",
  step4_desc: "Wait a few minutes for the application license/ID to be activated.",
  step5_title: "Ready to Use",
  step5_desc: "Log in to the application and enjoy all its complete features!",

  // --- Testimonials & Channels ---
  testi_badge: "OFFICIAL CHANNELS & TESTIMONIALS",
  testi_title: "Transaction Proof & Official Channels",
  testi_sub: "Join our official WhatsApp channel for app release info and thousands of proofs.",
  testi1_quote: "“Trusted buyer transaction proof channel and regular feature updates.”",
  btn_testi1: "⭐ WA Testimonial Channel",
  testi2_quote: "“Official information channel for product releases, app updates, and license promos.”",
  btn_testi2: "📢 Official HAYTOR Channel",

  // --- Contact Section ---
  contact_title: "Need Help / Want to Buy?",
  contact_desc: "Contact admin directly via Telegram or WhatsApp. Fast Response!",

  // --- Katalog Produk (Header & Tag) ---
  packages_badge: "PRODUCT CATALOG",
  packages_title: "Applications & License Packages",
  packages_sub: "Click directly on the pricing package below to place an instant order.",
  tag_no_tg: "⚡ Without Telegram (WA Only)",
  tag_req_tg: "🤖 Telegram Required",
  tag_popular: "⭐ POPULAR",
  tag_new: "🐾 NEW RELEASE",

  // --- Durasi & Tombol Paket ---
  pkg_basic_1d: "Basic 1 Day",
  pkg_basic_7d: "Basic 7 Days",
  pkg_1d: "1 Day",
  pkg_5d: "5 Days",
  pkg_7d: "7 Days",
  pkg_1w: "1 Week",
  pkg_1m: "1 Month",
  pkg_30d: "30 Days",
  pkg_perm: "Permanent",
  pkg_reseller: "Reseller",
  pkg_partner: "Partner",
  pkg_right_hand: "Right Hand",
  pkg_private_pt: "Private PT",
  pkg_fullup: "Full Up",
  pkg_full_update: "Full Update",
  pkg_tk_staff: "TK / Staff",
  pkg_vip: "VIP",
  pkg_admin: "Admin",
  pkg_owner: "Owner",

  // --- Detail & Deskripsi Produk 1 - 6 ---
  p1_desc: "System bug application and complete supporting utilities, using WhatsApp only.",
  lbl_bug: "SYSTEM DISRUPTION (BUG):",
  p1_bug_desc: "Latest system gap exploitation, forced closure of hidden apps for Android & iOS, extreme delay times, target UI blackout, network pressure, and global/group chat disruption.",
  lbl_tools: "TOOLS & ENTERTAINMENT:",
  p1_tool_desc: "Domain reports, network path scanner, theme manager, AI assistant, global message sender, digital Al-Qur'an, comic reader, anime/drama player, social media downloader, and QR Code generator.",
  btn_order_admin_p1: "Order Holow V14 via Admin",
  sum_p1: "🔍 View Holow V14 Feature Details",

  p2_desc: "High-speed digital tool and network testing tools via WhatsApp.",
  lbl_util_net: "UTILITY & NETWORK:",
  p2_util_desc: "Server resilience testing (DDoS), internet network analysis, public information tracker, automatic media downloader, sequential message sender, mini games, data format changer, and shortcut menu.",
  btn_order_admin_p2: "Order Vilian Crash via Admin",
  sum_p2: "🔍 View Vilian Crash Feature Details",

  p3_desc: "Message automation engine and complete RAT features with Telegram bot integration.",
  lbl_bug_rat: "SYSTEM DISRUPTION & RAT:",
  p3_bug_desc: "Sending empty number delays, hidden iOS force closes, consecutive calls, remote control (RAT), wiretapping features, and massive link registration.",
  lbl_supp_tools: "SUPPORTING TOOLS:",
  p3_tool_desc: "Financial bookkeeping, AI assistant, network analysis, public data tracker, automatic downloader, and auto bot installer.",
  btn_order_admin_p3: "Order Mantax X Rat via Admin",
  sum_p3: "🔍 View Mantax X Rat Feature Details",

  p4_desc: "Complete application containing bug systems, wiretapping, and multi-RAT in one hand via WhatsApp.",
  lbl_bug_tools: "BUG & TOOLS:",
  p4_desc_det: "Force close WA Android/Business/iOS, automatic calls, group neutralization, digital finance, AI assistant, VPS management, and management of 3 RAT systems in 1 APK.",
  btn_order_admin_p4: "Order Syam X Rat via Admin",
  sum_p4: "🔍 View Syam X Rat Feature Details",

  p5_desc: "Remote control application (RAT) and advanced system disruption features without Telegram.",
  lbl_bug_rat_spy: "DISRUPTION & SPY RAT:",
  p5_desc_det: "Flashlight control, camera, HP locker, location tracker, live monitoring, screenshot, read contacts/Gmail/SMS/Gallery, turn off WiFi, to remote shutdown HP.",
  btn_order_admin_p5: "Order X - Far X Rat via Admin",
  sum_p5: "🔍 View X - Far X Rat Feature Details",

  p6_tag: "⚡ WhatsApp Attack Menu & Rat",
  p6_desc: "Comprehensive bug attack application with member, reseller, to founder options.",
  pkg_mem_30d: "Member 30 Days",
  pkg_mem_100d: "Member 100 Days",
  pkg_mem_perm: "Member Permanent",
  pkg_res_365d: "Reseller 365 Days",
  pkg_res_perm: "Reseller Permanent",
  pkg_vip_perm: "VIP Permanent",
  pkg_owner_perm: "Owner Permanent",
  pkg_helper_perm: "Helper Permanent",
  pkg_admin_perm: "Admin Permanent",
  pkg_pt_perm: "PT Permanent",
  pkg_founder_perm: "Founder Permanent",
  sum_p6: "🔍 View X•Miyabi V7 Feature Details",
  lbl_wa_attack: "WHATSAPP ATTACK MENU:",
  p6_attack_desc: "Bug One (Entry-Level), Custom Bug, Group Bug (Crash Group), and Ban Group.",
  lbl_bug_module: "BUGS MODULE:",
  p6_mod_desc: "FC Invisible, FC Click, Bulod Crash Delay, Crash C1 Pack, Delay Frazer, Delay Hard Try, Blank Click, Crash Notif, Delay X Forceclose, Crash UI Chat, Crash Spam, Drain Quota, Crash Android, Crash Home, Delay Invisible.",
  btn_order_admin_p6: "Order X•Miyabi V7 via Admin",

  // --- Label Badge Tiap Produk 7 - 11 ---
  p7_tag: "⚡ Bug Apps & Rat/Spy Features",
  p8_tag: "⚡ Full Bug & Media Downloader",
  p9_tag: "⚡ Tools & Prank Utility",
  p10_tag: "⚡ Gacor WhatsApp Bug X Wiretap",
  p11_tag: "⚡ New Release Sale",

  // --- Deskripsi Produk 7 - 11 ---
  p7_desc: "Combination of bug apps features, RAT/wiretapping, global sender, and Osint tools.",
  p8_desc: "Most complete features ranging from freeze, force close, RAT/wiretapping to entertainment.",
  p9_desc: "Multifunctional application for system testing, spamming, and digital utilities.",
  p10_desc: "Fast high-penetration bug application equipped with wiretapping features.",
  p11_desc: "Premium bug application with a new look, RAT features, and AM Mod integration.",

  // --- Nama Paket / Durasi / Tombol Kategori Lainnya ---
  pkg_member: "Member",
  pkg_moderator: "Moderator",
  pkg_exec_pt: "Executive PT",
  pkg_elite_pt: "Elite PT",
  pkg_sup_pt: "Supreme PT",
  pkg_1d_trial: "1 Day Trial",
  pkg_1m_trial: "1 Month Trial",
  pkg_permanent: "Permanent",
  pkg_mem_1m: "Member 1 Month",
  pkg_res_1m: "Reseller 1 Month",
  pkg_mem_fullup: "Member Full Up",

  // --- Tombol Detail Fitur Produk 7 - 11 ---
  sum_p7: "🔍 View Oxva Bug X Rat Feature Details",
  sum_p8: "🔍 View Red Bull Feature Details",
  sum_p9: "🔍 View Nexsus Feature Details",
  sum_p10: "🔍 View Bumble Bie Feature Details",
  sum_p11: "🔍 View Viper Bugs Feature Details",

  // --- Detail Konten Produk 7 - 11 ---
  lbl_bug_apps: "BUG APPS FEATURES:",
  p7_bug_desc: "Forclose Invisible, Delay Hit, Delay Invisible, Blank Hard, Spam UI, Crash Hard, Loca Hard.",
  lbl_utility: "UTILITY FEATURES:",
  p7_util_desc: "RAT / Wiretap, Global Sender, DDoS Lag Server Free Fire, Domain Osint Tools, WhatsApp Group Bug.",

  lbl_bug_menu: "BUG MENU:",
  p8_bug_desc: "Freeze Home, Blank Screen, Delay Invisible, Freeze Invisible, Force Close iPhone, Force Close Android.",
  lbl_other_features: "OTHER FEATURES:",
  p8_other_desc: "Rat / Wiretap, Global Sender, Stream Anime, Manage Server, Al-Qur'an, DDoS Tools, Watch Dracin, Killer Wifi, Osint Tools, Downloader, Utilities, Read News, Social Media Features.",

  p9_bug_desc: "Crash Msg Andro, Delay Invisible, Prank Spam Porn, Prank Spam Alert, Banned WhatsApp Group.",
  p9_other_desc: "Spam Pair, AM Prem, Spam NGL, Web To Apk, QR Generator, Check Banned WA, Enc JavaScript, Media Downloader, Search Script Mobile Legends, Netflix Streaming Token.",

  p10_bug_desc: "Forclose Invisible Work All, Forclose One Msg Hard, Forclose Video All Android, Forclose Image Work All WA, Crash Invisible No Click, Crash Visible Auto C1, Freeze Chat Brutal, Blank Android No Click, Forclose New V2, Delay Hard, Crash UI System.",
  p11_bug_desc: "Create AM Mod, Spam OTP, Global Chat, Cool Design + Unique, All Bug Work, RAT (Wiretap), Anti Ampos.",

  lbl_viper_features: "V1PER BUGS FEATURES:",

  // --- Viper Apps & Lennox Spy (Produk 12 & 13) ---
  viper_tag: "⚡ Fast Bug & License",
  viper_desc: "Complete duration Viper application for various system needs.",
  btn_order_admin_viper: "Order Viper Apps via Admin",
  
  lennox_tag: "⚡ Without Using Telegram Also Works",
  lennox_desc: "Advanced system testing application complete with RAT and DDoS panel features.",
  sum_lennox: "🔍 View Lennox Spy Feature Details",
  lbl_lennox_bug: "LENNOX BUG MENU:",
  lennox_bug_desc: "Crash IOS, Crash UI, Blank Click, Spam Porn, Prank Spam Alert, Crash Frame Android, Delay & Freeze Invis, Spam Alert Group, Banned Group New, Blank Click Group, Spam Porn Group.",
  lbl_lennox_feat: "OTHER LENNOX FEATURES:",
  lennox_feat_desc: "RAT / Wiretap, Sender Glob, Lennox AI, Spam NGL, Wifi Killer, NIK Detail, Add Client, Global Chat, Domain OSINT, Check WA Band, Spam OTP WA, Spam Report WA, Media Download, Read Comics, DDoS Attack Panel.",
  btn_order_admin_lennox: "Order Lennox Spy via Admin",

  // --- Tombol Order Admin Katalog ---
  btn_order_admin_p7: "Order Oxva Bug X Rat via Admin",
  btn_order_admin_p8: "Order Red Bull via Admin",
  btn_order_admin_p9: "Order Nexsus via Admin",
  btn_order_admin_p10: "Order Bumble Bie via Admin",
  btn_order_admin_p11: "Order Viper Bugs via Admin",

  // --- Kotak Pengingat / Bantuan di Bagian Bawah Katalog ---
  catalog_help_title: "📺 Confused How to Use It?",
  catalog_help_desc: "Watch complete guides and app usage demonstrations through our video tutorial page!",
  catalog_help_btn: "▶ Watch Video Tutorial Now",

// --- Dapur Kita Page (Bilingual additions) ---
  dapur_meta_title: "Dapur Kita — UMKM Cashier | HAYTOR STORE",
  dapur_desc: "Versatile UMKM Cashier application for stalls, cafes, and kitchen culinary businesses. Officially released with complete features.",
  dapur_status_title: "Project Status",
  dapur_status_val: "New Release",
  dapur_sum: "🔍 View UMKM Cashier Feature Details",
  dapur_lbl_feat1: "CASHIER & STOCK FEATURES:",
  dapur_feat1_desc: "Fast transaction recording, kitchen menu & recipe management, raw material stock management, Bluetooth Thermal Printer Support.",
  dapur_lbl_feat2: "REPORTS & FINANCE:",
  dapur_feat2_desc: "Automatic profit and loss reports, daily/monthly sales recap, Excel/PDF export, and multi-cashier/employee features.",
  btn_order_admin_dapur: "Order Dapur Kita via Admin",
  dapur_gallery_title: "📱 System Documentation & Preview",
  dapur_gallery_sub: "Scroll down on the gallery box to view app screenshots. Click the photo to enlarge.",
  dapur_gallery_box: "📸 Interface Gallery (Scroll Down)",
  dapur_video_title: "🎬 Dapur Kita System Demo Video",
  dapur_video_sub: "Direct preview of cashier application usage.",

  // --- Video Tutorial Page ---
  video_badge: "VIDEO & DEMO CENTER",
  video_title: "Usage Guide Videos & Bug Results",
  video_sub: "Watch usage methods and application performance proofs. If opening via Chrome from a Personal Computer (PC) click PLAY then click three dots lanjut picture in picture.",

  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
  modal_title: "Select Ordering Channel",
  modal_sub: "Please choose a platform to continue ordering with an automated message format:"
};

var ID_DEFAULTS = {};

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

// Script Pembersih URL Universal (Bebas Bug Hash & Index.html)
document.addEventListener('DOMContentLoaded', function() {
  // Tangkap semua klik ke link internal berpola # / /#
  document.querySelectorAll('nav a, .cta-row a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href) return;
      
      const hashIndex = href.indexOf('#');
      
      // Jika link mengandung tanda hashtag # (layanan, order, kontak, dll)
      if (hashIndex !== -1) {
        const targetId = href.substring(hashIndex);
        const targetElement = document.querySelector(targetId);
        
        // Jika elemen target ada di halaman saat ini
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Bersihkan URL address bar secara mulus tanpa mengotori URL
          if (window.history.pushState) {
            window.history.pushState("", "", "/");
          }
        }
      }
    });
  });

  // Jika halaman pertama dibuka dengan bawaan hashtag (misal dari bookmark)
  if (window.location.hash) {
    setTimeout(function() {
      if (window.history.pushState) {
        window.history.pushState("", "", "/");
      }
    }, 100);
  }
});