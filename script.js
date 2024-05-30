const apiURL = 'https://rickandmortyapi.com/api/character';
const charactersContainer = document.getElementById('personajes_div');

async function getPersonajes() {
    try {
          const response = await fetch(apiURL);
          const data = await response.json();
          displayCharacters(data.results);
      } catch (error) {
          console.error('Error al obtener los personajes:', error);
      }
  }
  
  /* Me falta agregar mas caracteristicas del personaje para mostrar en pantalla*/
  function displayCharacters(characters) {
      charactersContainer.innerHTML = ''; 
      characters.forEach(character => {
          const characterDiv = document.createElement('div');
          characterDiv.classList.add('character');
          characterDiv.innerHTML = `
              <img src="${character.image}" alt="${character.name}">
              <h2>${character.name}</h2>
              <p>Especie: ${character.species}</p>
              <p>Estado: ${character.status}</p>
              <p>Sexo: ${character.gender}</p>
          `;
          charactersContainer.appendChild(characterDiv);
      });
  }
  
  getPersonajes();