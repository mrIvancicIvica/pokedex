const pokedex = document.querySelector('.pokedex');
const pokeForm = document.querySelector('.pokeForm');


const fetchPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();

  data.results.forEach(async (pokemon) => {
    const pokemonData = await fetchPokemonData(pokemon.url);
    displayPokemon(pokemonData);
  });
};

const fetchPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const displayPokemon = (pokemon) => {
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon', 'card');

  pokemonElement.onclick = () =>
    (window.location.href = `detail.html?name=${pokemon.name}`);

  const detailLink = document.createElement('a');
  detailLink.href = `detail.html?name=${pokemon.name}`;

  const nameElement = document.createElement('h2');
  nameElement.classList.add('card-title', 'text-center', 'mt-3');
  nameElement.textContent = pokemon.name;

  const imageElemement = document.createElement('img');
  imageElemement.src = pokemon.sprites.front_default;

  pokemonElement.appendChild(imageElemement);
  pokemonElement.appendChild(nameElement);

  pokedex.appendChild(pokemonElement);
};

fetchPokemon();


const filterPokemon = (searchTearm) => {
  const filteredPokemons = pokedex.querySelectorAll('.pokemon')
  filteredPokemons.map(pokemon => {
    const name = pokemon.querySelector('.card-title').textContent.toLowerCase();
    if (name.includes(searchTearm.toLowerCase())) {
      pokemon.style.display = 'flex';
      
    } else {
      pokemon.style.display = 'none';
    }

  })
  console.log(filteredPokemons)
  
}

pokeForm.addEventListener('input', (e)=> {
const value = e.target.value
filterPokemon(value)
})
