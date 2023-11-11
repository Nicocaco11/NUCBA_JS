const pokeCard = document.getElementById(`poke__information`)

const buscarPokemon = () => {
    const pokemonId = document.getElementById('poke__input').value;

    if (isNaN(pokemonId) || pokemonId <= 0) {
        pokeCard.innerHTML = `<h1>POKEMÓN INVALIDO!</h1>`
        return
    }

    pokeInformation(pokemonId)
}

const mostrarPanel = (data) => {

    pokeCard.innerHTML = `        
    <div class="poke__card">
    <img src="${data.sprites.front_default}" alt="${data.name}">
    <h2>${data.name}</h2>
    <div class="poke__type">
        <p>${data.types[`0`].type.name}</p>
    </div>
    <div class="poke__class">
        <p>Altura: ${data.height / 10} m</p>
        <p>Peso: ${data.weight / 10} kg</p>
    </div>
</div>
`
}


const pokeInformation = async (pokemon) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try{

        const response = await fetch(api);
        const data = await response.json();
    
        mostrarPanel(data)
    } catch(error) {
        console.error(`Error al obtener información del Pokemon:`, error)
    }
}