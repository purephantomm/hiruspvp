(() => {
  const config = window.HIRUS_CONFIG || {};
  const serverIP = config.serverIP || 'hiruspvp.mcserver.us';
  document.querySelectorAll('[data-server-ip]').forEach(el => el.textContent = serverIP);
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const toast = document.querySelector('#toast');
  let toastTimeout;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('visible'), 2200);
  }
  async function copy(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const node = document.createElement('textarea');
    node.value = text;
    node.style.cssText = 'position:fixed;left:-9999px';
    document.body.appendChild(node);
    node.select();
    const ok = document.execCommand('copy');
    node.remove();
    if (!ok) throw new Error('Clipboard unavailable');
  }
  document.querySelectorAll('[data-copy-ip]').forEach(btn => btn.addEventListener('click', async () => {
    try { await copy(serverIP); notify('Server IP copied!'); }
    catch { notify(`Copy this IP: ${serverIP}`); }
  }));
  document.querySelectorAll('[data-toggle-package]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-toggle-package');
    const detail = document.getElementById('info-' + id);
    if (!detail) return;
    const open = detail.hasAttribute('hidden');
    detail.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.innerHTML = open ? 'Hide details' : 'View details <svg class="icon" aria-hidden="true"><use href="#ico-arrow"></use></svg>';
  }));
  let activeCheckoutCount = 0;
  for (const [key, data] of Object.entries(config.ranks || {})) {
    if (!data) continue;
    const price = document.querySelector(`[data-price="${key}"]`);
    const link = document.querySelector(`[data-buy="${key}"]`);
    const unavailable = document.querySelector(`[data-unavailable="${key}"]`);
    if (price && typeof data.price === 'string' && data.price.trim()) price.textContent = data.price.trim();
    if (link && typeof data.checkoutUrl === 'string' && /^https:\/\/[^\s]+$/i.test(data.checkoutUrl.trim())) {
      link.href = data.checkoutUrl.trim();
      activeCheckoutCount++;
      link.hidden = false;
      if (unavailable) unavailable.hidden = true;
    }
  }
  if (activeCheckoutCount > 0) {
    const info = document.querySelector('#purchase-info');
    if (info) {
      const title = info.querySelector('h3');
      const body = info.querySelector('p');
      if (title) title.textContent = 'Checkout through our store provider';
      if (body) body.textContent = 'Select a rank and open its purchase link. Payments are handled by the connected external store, not this website.';
    }
  }
  document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.category;
    document.querySelectorAll('[data-category]').forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    const title = document.getElementById('board-title');
    if (title) title.textContent = selected + ' rankings';
  }));
})();
