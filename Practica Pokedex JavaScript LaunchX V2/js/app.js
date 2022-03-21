// Constantes que se usaran en el script
const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokemonName");
const buttonSearch = document.getElementById("pokemonSearch");

// // Eventos click para pc
buttonSearch.addEventListener("click", insertPokemon);

// //Eventos cuando precionan la pantalla, esto porque el evento click no es posible en celular, asi que ponemos touchstart
buttonSearch.addEventListener("touchstart", insertPokemon);

// Insertar Pokemon
const fetchData = async () =>{
    let url = baseURL + pokemon.value.toLowerCase();
    console.log(url)
    try{
        const res = await fetch(url);
        const data = await res.json();
        // pintarCard(data);
        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            name: data.species.name,
            id: data.id,
            type: data.types[0].type.name,
            // type2: data.types[1].type.name,
            attack: data.stats[1].base_stat,
            specialAttack: data.stats[3].base_stat,
            defence: data.stats[2].base_stat,
            specialDefence: data.stats[4].base_stat,
            hp: data.stats[0].base_stat,
            speed: data.stats[5].base_stat
        }
        console.log(data)
        pokeInfo(pokemon);
    }catch(error){
        alert("This pokemon is not available. Try with another one!");
        console.log(error)
    }
}
function insertPokemon(url_imagen){
    fetchData();
    
}

const pokeInfo = (pokemon) =>{
    const pokeImg = document.getElementById('pokemonImage');
    pokeImg.src = pokemon.img;
    
    const pokeName = document.getElementById('title');
    pokeName.textContent = pokemon.name;

    const pokeId = document.getElementById('pokemonId');
    pokeId.textContent = pokemon.id;


    const pokeType = document.getElementById('pokemonType');
    pokeType.textContent = pokemon.type;

        
    // const pokeType2 = document.getElementById('pokemonType2');
    // pokeType2.textContent = pokemon.type2;

    const pokeAttack = document.getElementById('pokemonAttack');
    pokeAttack.textContent = pokemon.attack;

    const pokeSpecialAttack = document.getElementById('pokemonSpecialAttack');
    pokeSpecialAttack.textContent = pokemon.specialAttack;

    const pokeDefence = document.getElementById('pokemonDefence');
    pokeDefence.textContent = pokemon.defence;

    const pokeSpecialDefence = document.getElementById('pokemonSpecialDefence');
    pokeSpecialDefence.textContent = pokemon.specialDefence;

    const pokeHp = document.getElementById('pokemonHp');
    pokeHp.textContent = pokemon.hp;

    const pokeSpeed = document.getElementById('pokemonSpeed');
    pokeSpeed.textContent = pokemon.speed;
}
