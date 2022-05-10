const search_term = document.getElementById('search')
const search_btn = document.getElementById('search-btn')

const getPokemonData = async query => {

    const url = `https://pokeapi.co/api/v2/pokemon/${query}`
    const response = await fetch(url)

    if(response.status == 404 || response.statusText == 'Not Found') {
        document.getElementById('show_error').classList.add('show')
        document.getElementById('show_error').classList.remove('hidden')
        return

    }

    const pokemon = await response.json()

    document.getElementById('poke-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('refresh-name').innerHTML = pokemon.name

    document.getElementById('refresh-hp').innerHTML = `HP ${Math.floor( Math.floor() * pokemon.stats[0].base_stats) + 1}`
    document.getElementById('refresh-type').innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}` 
    document.getElementById('refresh-height'),innerHTML = pokemon.height
    document.getElementById('refresh-weight').innerHTML = `${pokemon.weight}kg`
}

search_btn.addEventListener('click',() => getPokemonData(search_term.value))