HIRUS PVP — CLEAN RED WEBSITE
============================

A simple responsive website inspired by the clean, dark Minecraft PvP
site references. It has NO generated background artwork, stock pictures,
video, fake player counts, or artificial match results.

CONTENTS
  index.html           Home, Copy IP, Duels/FFA/Practice, quick links
  store.html           Hirus and Hirus+ products only (no coins)
  leaderboard.html     Honest "stats not connected yet" placeholder
  rules.html           Five suggested rules; edit before launch
  styles.css           Responsive design and colours
  site.js              Copy IP, rank details, filters, basic interactions
  config.js            Server address, rank prices, checkout links
  favicon.svg          Simple red H icon
  CNAME                hiruspvp.com custom domain for GitHub Pages

STORE SETUP
  The store displays your products, but does NOT handle money or provide
  payment processing until you connect a supported store platform.
  1. Create your REAL Hirus and Hirus+ products in a service such as Tebex.
  2. Obtain their real HTTPS checkout/product URLs.
  3. Open config.js in a text editor. Set price and checkoutUrl for each:
       hirus: { price: 'YOUR PRICE', checkoutUrl: 'https://...' }
  4. Upload the changed config.js. Then the "Buy" buttons appear inside
     each rank's detail panel. Payments are handled by that provider.
  5. NEVER add secrets/API keys to config.js. It is public on the web.

SERVER INFO / LEADERBOARD
  The Minecraft server IP comes from config.js (currently
  hiruspvp.mcserver.us). The Leaderboard has no live stats connected.
  It intentionally does not show imaginary player counts or scores.
  Real statistics require a separate Minecraft server/API integration.

HOST FOR FREE ON GITHUB PAGES
  1. Create a PUBLIC GitHub repository, e.g. hiruspvp-site.
  2. Upload all these files in the repository's ROOT (not inside a folder).
  3. In Settings > Pages: Deploy from a branch > main > /(root) > Save.
  4. GitHub gives you a URL like username.github.io/hiruspvp-site/.
  5. To use hiruspvp.com, first purchase/control that domain, then set
     Settings > Pages > Custom domain: hiruspvp.com.
  6. Set the domain's A records for @ to:
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
     Follow GitHub Pages official DNS setup guide for verification and
     (if desired) www subdomain, then enable Enforce HTTPS.
  7. Note: domain ownership and annual fees are separate from free hosting.

Official GitHub Pages instructions:
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

NOTE: This is a static website. No user login, shopping cart, live
leaderboards, real-time Aternos status, or payment handling is included.

DESIGN UPDATE: This version restores the original red/black design you chose. Only small orange highlights have been added: the label above the page title, a short line above the join panel, a gamemode icon, small store details, and the Hirus rank accent. Red remains the primary colour.
