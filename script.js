document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const topbar = document.querySelector('.topbar');

  burger.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav a, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      topbar.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Pricing data ---------- */
  const PLANS = {
    1: [
      { term: '1 мес.', desc: 'Быстрый старт', price: 89, permonth: 89, days: 30 },
      { term: '3 мес.', desc: 'Для постоянного доступа', price: 239, badge: '-10%', permonth: 80, days: 90 },
      { term: '6 мес.', desc: 'Выгодный полугодовой доступ', price: 429, badge: '-20%', permonth: 72, days: 180 },
      { term: '12 мес.', desc: 'Максимальная экономия', price: 749, badge: 'Лучшая цена', permonth: 62, days: 365 }
    ],
    3: [
      { term: '1 мес.', desc: 'Быстрый старт', price: 229, permonth: 229, days: 30 },
      { term: '3 мес.', desc: 'Для постоянного доступа', price: 619, badge: '-10%', permonth: 206, days: 90 },
      { term: '6 мес.', desc: 'Выгодный полугодовой доступ', price: 1099, badge: '-20%', permonth: 183, days: 180 },
      { term: '12 мес.', desc: 'Максимальная экономия', price: 1919, badge: 'Лучшая цена', permonth: 160, days: 365 }
    ],
    5: [
      { term: '1 мес.', desc: 'Быстрый старт', price: 349, permonth: 349, days: 30 },
      { term: '3 мес.', desc: 'Для постоянного доступа', price: 949, badge: '-10%', permonth: 316, days: 90 },
      { term: '6 мес.', desc: 'Выгодный полугодовой доступ', price: 1679, badge: '-20%', permonth: 280, days: 180 },
      { term: '12 мес.', desc: 'Максимальная экономия', price: 2939, badge: 'Лучшая цена', permonth: 245, days: 365 }
    ]
  };

  const TELEGRAM_URL = 'https://t.me/Grup_VPN_bot';

  function featuresFor(devices) {
    const noun = devices == '1' ? 'устройство' : (devices == '3' ? 'устройства' : 'устройств');
    return ['Безлимитный трафик', `${devices} ${noun} одновременно`, 'Быстрое шифрованное соединение'];
  }

  const plansEl = document.getElementById('plans');
  const tabs = document.querySelectorAll('.tab');

  function renderPlans(devices) {
    const data = PLANS[devices];
    const features = featuresFor(devices);

    plansEl.innerHTML = data.map(p => `
      <div class="plan">
        ${p.badge ? `<span class="plan__badge">${p.badge}</span>` : ''}
        <span class="plan__term">${p.term}</span>
        <p class="plan__desc">${p.desc}</p>
        <div class="plan__price">${p.price}<sup>₽</sup></div>
        <p class="plan__permonth">≈ ${p.permonth} ₽/мес · ${p.days} дней доступа</p>
        <ul class="plan__features">
          ${features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="${TELEGRAM_URL}" target="_blank" rel="noopener" class="btn btn--white">Подключить</a>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderPlans(tab.dataset.devices);
    });
  });

  renderPlans('1');

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
