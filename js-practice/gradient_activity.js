const aboutSection = document.getElementById('About');
const gojoInfo = document.getElementById('gojo-info');
let isLoaded = false;

const query = `
query {
  Character(search: "Satoru Gojo") {
    name {
      full
      native
    }
    favourites
    description(asHtml: false)
  }
}
`;

async function fetchAniListData() {
  gojoInfo.innerHTML = '<p class="loading">Loading live data from AniList API...</p>';

  try {
    const response = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    const character = result.data.Character;

    const cleanBio = character.description
      ? character.description
          .replace(/<[^>]*>?/gm, '')
          .replace(/_{1,2}|\*{1,2}/g, ' ')
          .replace(/[\r\n]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : 'No overview available.';

    gojoInfo.innerHTML = `
      <p><strong>Full Name:</strong> ${character.name.full}</p>
      <p><strong>Kanji Name:</strong> ${character.name.native}</p>
      <p><strong>AniList Favorites:</strong> ${character.favourites.toLocaleString()} users</p>
      <p><strong>Overview:</strong> ${cleanBio}</p>
    `;
  } catch (error) {
    console.error('AniList API Error:', error);
    gojoInfo.innerHTML = `
      <p style="color: #ff6b6b;">Failed to load live data (${error.message}).</p>
      <button id="retry-btn" style="margin-top: 10px; padding: 6px 16px; cursor: pointer; border-radius: 20px; border: 1px solid #fff; background: transparent; color: #fff;">Try Again</button>
    `;

    document.getElementById('retry-btn').addEventListener('click', () => {
      fetchAniListData();
    });
  }
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !isLoaded) {
    fetchAniListData();
    isLoaded = true;
  }
}, { threshold: 0.3 });

observer.observe(aboutSection);
const lenis = new Lenis({
  duration: 1.2, 
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);