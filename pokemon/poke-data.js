const pokedex = document.getElementById('pokedex');
console.log(pokedex);

const fetchMikePokemon = () => {

    const promises = [];
    for(let i = 1; i <= 150; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url)
    .then( (res) =>  res.json()));
}
Promise.all(promises).then(results => {
    const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites.front_default,
        type: data.types.map( (type) => type.type.name).join(', ')
    }));
    showMePokemon(pokemon);
})
};

const showMePokemon = (pokemon) => {
    console.log(pokemon)
    const pokemonHTMLString = pokemon.map ( poke => `
        <ul class="card">
            <img class="card-image" src="${poke.image}" />
            <h2 class="card-title">${poke.id}. ${poke.name}</h2
            <p class= "card-subtitle">Type: ${poke.type}</p>
        </ul>
    `
    )
    .join("");
    pokedex.innerHTML = pokemonHTMLString;
};
fetchMikePokemon();

