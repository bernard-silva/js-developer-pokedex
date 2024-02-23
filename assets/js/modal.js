const detailsOverlay = document.getElementById('detailsOverlay');
const closeDetailsButton = document.getElementById('closeDetailsButton');
const detailsContent = document.querySelector('.details-content');


function showPokemonDetails(pokemon) {
    detailsContent.innerHTML = `
        <div class="details__container"> 
            <div class="details__top">
                <h1>Detalhes do <span>${pokemon.name}</span></h1>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <p><strong>Habilidades:</strong> ${pokemon.abilities.join(', ')}</p>
            </div>
            <div class="details__bottom">
                <div class="details__first">
                    <p><strong>Altura:</strong> ${pokemon.height}</p>
                    <p><strong>Peso:</strong> ${pokemon.weight}</p>
                    <p><strong>Espécie:</strong> ${pokemon.species}</p>
                    <p><strong>HP:</strong> ${pokemon.hp}</p>
                </div>
                <div class="details__second">
                    <p><strong>Ataque:</strong> ${pokemon.attack}</p>
                    <p><strong>Defesa:</strong> ${pokemon.defense}</p>
                    <p><strong>Velocidade:</strong> ${pokemon.speed}</p>
                    <p><strong>Total:</strong> ${pokemon.total}</p>
                </div>
            </div>
        </div>
    `;

    detailsOverlay.style.display = 'flex';
}

detailsOverlay.addEventListener('click', (event) => {
    if (event.target === detailsOverlay) {
        detailsOverlay.style.display = 'none';
    }
});

pokemonList.addEventListener('click', async (event) => {
    const detailsButton = event.target.closest('.details-button');
    if (detailsButton) {
        const pokemonId = parseInt(detailsButton.getAttribute('data-pokemon-id'));

        try {
            const pokemonDetails = await pokeApi.getPokemonDetailById(pokemonId);
            showPokemonDetails(pokemonDetails);
        } catch (error) {
            console.error("Erro ao obter detalhes do Pokémon:", error);
        }
    }
});

// const openModalButton = document.querySelector(".open-modal");
// console.log(openModalButton)
// const closeModalButton = document.querySelector(".close-modal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");

// const toggleModal = () => {
//     modal.classList.toggle("hide");
//     fade.classList.toggle("hide");
// };

// [openModalButton, closeModalButton, fade].forEach((el) => {
//     el.addEventListener("click", () => toggleModal());
// });
