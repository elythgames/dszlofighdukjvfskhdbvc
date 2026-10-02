const cities = [
  {
    city: 'Paris',
    meta: 'Mobilisation signalée',
    text: "Présence de mobilisations rapportées. Horaire exact à confirmer localement.",
  },
  {
    city: 'Lyon',
    meta: 'Mobilisation signalée',
    text: "Des actions et cortèges ont été relayés. Vérification locale recommandée.",
  },
  {
    city: 'Marseille',
    meta: 'Mobilisation signalée',
    text: "Ville citée parmi les lieux touchés par la mobilisation. Heure à confirmer.",
  },
  {
    city: 'Strasbourg',
    meta: 'Mobilisation signalée',
    text: "Blocages et actions signalés. À compléter avec le point de rendez-vous local.",
  },
  {
    city: 'Rennes',
    meta: 'Mobilisation signalée',
    text: "Ville régulièrement citée dans les mobilisations étudiantes et lycéennes.",
  },
  {
    city: 'Amiens',
    meta: 'Mobilisation signalée',
    text: "Présence dans la liste des villes mobilisées. Horaire et lieu à préciser.",
  },
];

const cityContainer = document.getElementById('city-cards');

cities.forEach((item) => {
  const article = document.createElement('article');
  article.className = 'city-card';
  article.innerHTML = `
    <h3>${item.city}</h3>
    <p class="city-meta">${item.meta}</p>
    <p>${item.text}</p>
  `;
  cityContainer.appendChild(article);
});

const targetDate = new Date('2026-10-17T00:00:00');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
