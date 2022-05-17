// Dom Objects
const pokeName = document.querySelector('.poke-name')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector(".poke-type-two")
const pokeFrontImage = document.querySelector(".poke-front-image")
const pokeBackImage = document.querySelector(".poke-back-image")
const pokeWeight = document.querySelector(".poke-weight")
const pokeHeight = document.querySelector(".poke-height")

// console.log(pokeName);

// const resultFromFetch = fetch("https://pokeapi.co/api/v2/pokemon/1")
// .then(res => res.json())
// .then(data => {
//     console.log(data);

// pokeName.textContent = data['name'];
// // pokeId.textContent = data['id'];
// pokeWeight.textContent = data['weight'];
// pokeHeight.textContent = data['height'];

// const dataTypes = data['types'];
// const dataFirstType = dataTypes[0];
// const dataSecondType =dataTypes[1];
// pokeTypeOne.textContent = dataFirstType['type']['name'];
// if(dataSecondType){
//     pokeTypeTwo.classList.remove('hide');
//     pokeTypeTwo.textContent = dataSecondType['type']['name'];
// } else {
//     pokeTypeTwo.classList.add('hide');
// pokeTypeTwo.textContent = '';
// }

// // Grab images and if the image is not avaible, it is replace with empty string 
// pokeFrontImage.src = data['sprites']['front_default'] || '';
// pokeBackImage.src = data['sprites']['back_default'] || '';

// });
// const pokedex = document.getElementById('pokedex');
// console.log(pokedex);

// const fetchMikePokemon = () => {

//     const promises = [];
//     for(let i = 1; i <= 150; i++){
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//     promises.push(fetch(url)
//     .then( (res) =>  res.json()));
// }
// Promise.all(promises).then(results => {
//     const pokemon = results.map((data) => ({
//         name: data.name,
//         id: data.id,
//         image: data.sprites.front_default,
//         type: data.types.map( (type) => type.type.name).join(', '),
//         ability: data.a
//     }));
    
//     showMePokemon(pokemon);
// })
// };

// const showMePokemon = (pokemon) => {
//     console.log(pokemon)
//     const pokemonHTMLString = pokemon.map ( poke => `
//         <ul class="card">
//             <img class="card-image" src="${poke.image}" />
//             <h2 class="card-title">${poke.id}. ${poke.name}</h2
//             <p class= "card-subtitle">Type: ${poke.type}</p>
//         </ul>
//     `
//     )
//     .join("");
//     pokedex.innerHTML = pokemonHTMLString;
// };
// fetchMikePokemon();

const PokeCardTemplate = document.querySelector("[data-poke-template]")

fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(data => {
    const card = PokeCardTemplate.content.cloneNode(true).children[0]
    console.log(card)
})