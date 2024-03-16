// fonction qui permet de récupérer les personnages de hp
function fetchCharacters() {
  return fetch("https://hp-api.lainocs.fr/characters").then((response) =>
    response.json()
  )
}

// fonction qui permet d'afficher les personnages d'hp
async function displayCharacters() {
  const data = await fetchCharacters();
  /* Pour chaque personnage on créer une carte de la forme :
  classe carte avec dedans le nom du personnage et sa maison en haut,
  l'image du personnage,
  le role du personnage,
  sa baguette,
  son patronus et
  son acteur */
  data.forEach((character) => {
    document.querySelector("#characters").innerHTML += `
      <div class="carte">
        <a href="single-card.html?slug=${character.slug}" target="_bank">
          <div class="character">
            <div class="top">
              <h2>${character.name}</h2>
              <h2>${character.house}</h2>
            </div>
            <img src="${character.image}" alt ="${character.name}"/>
            <div class="bottom">
              <h3>${character.role}</h3>
              <h3>Wand : ${character.wand}</h3>
              <h3>Patronus : ${character.patronus}</h3>
              <h3>Actor : ${character.actor}</h3>
            </div>
          </div>
        </a>
      </div>
      `;
  });
}

displayCharacters();
