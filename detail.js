document.addEventListener('DOMContentLoaded', () => {
  const namePokemon = document.querySelector('.pokemon');

  const urlParams = new URLSearchParams(window.location.search);
  const pokemonName = urlParams.get('name');

  const getDetails = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    displayPokemon(data);
  };

  const displayPokemon = (pokemon) => {
    namePokemon.classList.add('card', 'mt-4');

    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');

    const nameElement = document.createElement('h2');
    nameElement.textContent = pokemon.name;

    const imageElement = document.createElement('img');
    imageElement.src = pokemon.sprites.front_default;
    imageElement.classList.add('card-img-top');

    cardBodyElement.appendChild(nameElement);
    namePokemon.appendChild(imageElement);
    namePokemon.appendChild(cardBodyElement);
  };

  getDetails();
});
