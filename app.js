// Dom Objects
const pokeName = document.querySelector('.poke-name')
const pokeTypeOne = document.querySelector('.poke-type-one')
const pokeTypeTwo = document.querySelector(".poke-type-two")
const pokeFrontImage = document.querySelector(".poke-front-image")
const pokeBackImage = document.querySelector(".poke-back-image")
const pokeWeight = document.querySelector(".poke-weight")
const pokeHeight = document.querySelector(".poke-height")

console.log(pokeName);

const resultFromFetch = fetch("https://pokeapi.co/api/v2/pokemon/1")
.then(res => res.json())
.then(data => {
    console.log(data);

pokeName.textContent = data['name'];
// pokeId.textContent = data['id'];
pokeWeight.textContent = data['weight'];
pokeHeight.textContent = data['height'];

const dataTypes = data['types'];
const dataFirstType = dataTypes[0];
const dataSecondType =dataTypes[1];
pokeTypeOne.textContent = dataFirstType['type']['name'];
if(dataSecondType){
    pokeTypeTwo.classList.remove('hide');
    pokeTypeTwo.textContent = dataSecondType['type']['name'];
} else {
    pokeTypeTwo.classList.add('hide');
pokeTypeTwo.textContent = '';
}

// Grab images and if the image is not avaible, it is replace with empty string 
pokeFrontImage.src = data['sprites']['front_default'] || '';
pokeBackImage.src = data['sprites']['back_default'] || '';

});