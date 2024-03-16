// fonction qui permet de récuperer le personnage
function fetchCharacter() {
  let url = window.location.search;
  let slug = new URLSearchParams(url).get("slug");
  return fetch("https://hp-api.lainocs.fr/characters/" + slug).then(
    (response) => response.json()
  );
}

// fonction qui affiche le personnage
async function displayCharacter() {
  const data = await fetchCharacter();
  /* on affiche la carte de la forme :
  le nom et la maison du personnage,
  son image,
  son role,
  sa baguette,
  son patronus et
  son acteur */
  document.querySelector("#character").innerHTML = `
    <section class="main">
      <div class="perso">
        <article class="carte">
          <div class="top">
            <h2>${data.name}</h2>
            <h2>${data.house}</h2>
          </div>
          <img src="${data.image}" alt="${data.name}"/>
          <div class="bottom">
            <h3>${data.role}</h3>
            <h3>Wand : ${data.wand}</h3>
            <h3>Patronus : ${data.patronus}</h3>
            <h3>Actor : ${data.actor}</h3>
          </div>
        </article>
        <article class="carte button">
          <a href="cartes.html">BACK</a>
        </article>
      </div>
    </section>
    `;
}

displayCharacter();
