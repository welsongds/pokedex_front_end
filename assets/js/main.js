
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 12
let offset = 0


const loadPokemonItens = (offset, limit) => {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons
            .map(pokemon =>
                `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.pokemonNumber}</span>
                    <span class="name">${pokemon.name}</span>
            
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol >
                <img src="${pokemon.picture}"
                    alt="${pokemon.name}">
            
                </div>
                </li > `)
            .join('');
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})