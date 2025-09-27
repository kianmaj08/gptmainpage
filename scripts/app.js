// lädt Header und Footer
async function loadPartials() {
  const header = await fetch('partials/header.html').then(r => r.text());
  document.getElementById('header').innerHTML = header;
  const footer = await fetch('partials/footer.html').then(r => r.text());
  document.getElementById('footer').innerHTML = footer;
}

// lädt Karten
async function loadCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;
  const data = await fetch('data/cards.json').then(r => r.json());
  data.cards.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card glass';
    div.innerHTML = `<h3>${c.title}</h3><p>${c.text}</p>`;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartials();
  loadCards();
});