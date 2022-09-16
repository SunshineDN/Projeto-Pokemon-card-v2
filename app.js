// let divCard = `
// <div class="pokemon-card-container">
//             <div class="pokemon-card">
//                 <div class="background">
//                     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="" class="image">
//                 </div>
    
//                 <div class="content">
//                     <h1 class="pokemon-name">Nome</h1>
//                     <span class="pokemon-type">Tipo</span>
//                     <div class="pokemon-stats">
//                         <p>Power: att</p>
//                         <p>Damage: att</p>
//                         <p>Deffense: att</p>
//                         <p>Sp. Attack: att</p>
//                         <p>Sp. Deffense: att</p>
//                         <p>Speed: att</p>
//                     </div>
//                     <h1 class="pokemon-logo">Pokemon Cards</h1>
//                 </div>
//             </div>
//         </div>`

// let divVS = `
// <div class="battle-container">
//             <img src="Imagens/versus.png" alt="Logo de versus" class="versus-img">
//         </div>`

var body = document.body;
body.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fecharJanela()
    }
})

// Área do jogador
function escreverPokeJogador(listaPokemons) {
    // ÁREA PARA PEGAR OS ELEMENTOS
    let container = document.querySelector("[data-js='container']");
    let pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${listaPokemons[0].id}.png`;
    let pokeName = listaPokemons[0].name;
    let pokeNameFormat = pokeName.charAt(0).toUpperCase() + pokeName.substring(1);
    let pokeType = listaPokemons[0].types[0].type.name.toUpperCase();

    // ENXUTANDO OS STATUS
    let hp = listaPokemons[0].stats[0].base_stat;
    let damage = listaPokemons[0].stats[1].base_stat;
    let defense = listaPokemons[0].stats[2].base_stat;
    let spAttack = listaPokemons[0].stats[3].base_stat;
    let spDefense = listaPokemons[0].stats[4].base_stat;
    let speed = listaPokemons[0].stats[5].base_stat;

    let symbol = "★"; // SÍMBOLO QUE REPRESENTA A QUANTIDADE DE CARTAS
    // DIVCARD É UM CONJUNTO DE ELEMENTOS HTML MONTADO BASEADO NA TIPAGEM DO POKÉMON, TODA VEZ QUE É INVOCADO ELE PEGA O TIPO DO PRIMEIRO POKÉMON DO PARÂMETRO.
    let divCard = `
    <div class="pokemon-card-container ${pokeType + 1}">
        <h1 class="card-title">Sua carta</h1>
                <div class="pokemon-card">
                    <div class="background ${pokeType + 2}">
                        <img src="${pokeUrl}" alt="Imagem do pokemon ${pokeNameFormat}" class="image">
                    </div>
        
                    <div class="content ${pokeType + 3}">
                        <h1 class="pokemon-name">${pokeNameFormat}</h1>
                        <span class="pokemon-type">${pokeType}</span>
                        <div class="pokemon-stats">
                            <label><input type="radio" name="select" id="hp" checked>HP: ${hp}</label>
                            <label><input type="radio" name="select" id="damage">Damage: ${damage}</label>
                            <label><input type="radio" name="select" id="defense">Defense: ${defense}</label>
                            <label><input type="radio" name="select" id="spatk">Sp. Attack: ${spAttack}</label>
                            <label><input type="radio" name="select" id="spdef">Sp. Defense: ${spDefense}</label>
                            <label><input type="radio" name="select" id="speed">Speed: ${speed}</label>
                        </div>
                        <h1 class="pokemon-logo">&copy Sunshine Cards</h1>
                    </div>
                </div>
        <div class="cartas">
            <h2 class="${pokeType + 4}">Cartas restantes:</h2>
            <h2 id="quantidadeJogador" class="${pokeType + 4}">${symbol.repeat(listaPokemons.length - 1)}</h2>
        </div>
    </div>`
    container.innerHTML += divCard;
}

// Desenhar o VERSUS
function DrawVersusImg() {
    let container = document.querySelector("[data-js='container']");
    let divVS = `
        <div class="battle-container">
            <img src="https://sunshinedn.github.io/POKEMON-CARD-GAME/Imagens/versus.png" alt="Logo de versus" class="versus-img">
        </div>`
    
    container.innerHTML += divVS;
}

// Área da máquina
function escreverPokeMaq(listaPokemons) {
    // ÁREA PARA PEGAR OS ELEMENTOS
    let container = document.querySelector("[data-js='container']");
    let pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${listaPokemons[0].id}.png`;
    let pokeName = listaPokemons[0].name;
    let pokeNameFormat = pokeName.charAt(0).toUpperCase() + pokeName.substring(1);
    let pokeType = listaPokemons[0].types[0].type.name.toUpperCase();

    let symbol = "★"; // SIMBOLO QUE REPRESENTA A QUANTIDADE DE CARTAS
    // DIVCARD É UM CONJUNTO DE ELEMENTOS HTML MONTADO BASEADO NA TIPAGEM DO POKÉMON, TODA VEZ QUE É INVOCADO ELE PEGA O TIPO DO PRIMEIRO POKÉMON DO PARÂMETRO.
    let divCard = `
    <div class="pokemon-card-container ${pokeType + 1}">
        <h1 class="card-title">Carta da máquina</h1>
                <div class="pokemon-card">
                    <div class="background ${pokeType + 2}">
                        <img src="${pokeUrl}" alt="Imagem do pokemon ${pokeNameFormat}" class="image">
                    </div>
        
                    <div class="content ${pokeType + 3}">
                        <h1 class="pokemon-name">${pokeNameFormat}</h1>
                        <span class="pokemon-type">${pokeType}</span>
                        <div class="pokemon-stats" id="${pokeType + 5}">
                            <p>HP: ???</p>
                            <p>Damage: ???</p>
                            <p>Defense: ???</p>
                            <p>Sp. Attack: ???</p>
                            <p>Sp. Defense: ???</p>
                            <p>Speed: ???</p>
                        </div>
                        <h1 class="pokemon-logo">&copy Sunshine Cards</h1>
                    </div>
                </div>
        <div class="cartas">
        <h2 class="${pokeType + 4}">Cartas restantes:</h2>
        <h2 id="quantidadeMaq" class="${pokeType + 4}">${symbol.repeat(listaPokemons.length - 1)}</h2>
        </div>
    </div>`

    container.innerHTML += divCard;
}

var pokemons = Array(10);

var pokemonsJogador = Array(pokemons.length/2)

var pokemonsMaq = Array(pokemons.length/2)

// FUNÇÃO DO BOTÃO SORTEAR
async function SortearPoke() {
    // ÁREA PARA PEGAR OS ELEMENTOS
    let sortearBtn = document.querySelector("#sortearBtn");
    let battleBtn = document.querySelector("[data-js='battleBtn']");
    let container = document.querySelector("[data-js='container']");

    // DESATIVA O BOTÃO SORTEAR POR 1.5s
    sortearBtn.setAttribute("disabled", "");
    setTimeout(() => {
        sortearBtn.removeAttribute("disabled")
    }, 1500)

    // LAÇO PARA GERAR UM ARRAY COM 905 NÚMEROS ALEATÓRIOS DIFERENTES
    let  array = Array(905);
    for (let i = 0; i < array.length; i++){
        array[i] = i + 1
    }
    array = array.sort(() => Math.random() - 0.5)

    // LAÇO PARA GERAR UM ARRAY COM 10 NÚMEROS ALEATÓRIOS DISTINTOS BASEADO NO ARRAY ACIMA
    let numPoke = Array(30);
    for(i = 0; i < numPoke.length; i++) {
        numPoke[i] = array[i];
    }

    // LAÇO PARA PEGAR POKÉMONS ALEATÓRIOS BASEADO NO ARRAY ACIMA
    for (i = 0; i < pokemons.length; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${numPoke[i]}`)
            .then(response => response.json())
            .then(poke => {
                pokemons[i] = poke;
            })
    }

    // LAÇO PARA ADICIONAR METADE DAS CARTAS EM CADA BARALHO (JOGADOR X MAQUINA)
    for (i = 0; i < 2; i++) {
        for (j = 0; j < pokemons.length / 2; j++) {
            if (pokemonsJogador[j] != null) {
                pokemonsMaq[j] = pokemons[j + 5]
            }
            pokemonsJogador[j] = pokemons[j];
        }
    }

    // ESVAZIA O CONTAINER NO HTML E ADICIONA OS POKÉMONS SORTEADOS
    container.innerHTML = "";
    escreverPokeJogador(pokemonsJogador);

    DrawVersusImg();

    escreverPokeMaq(pokemonsMaq)
    battleBtn.removeAttribute("disabled")
}

// FUNÇÃO PARA ALTERAR A QUANTIDADE DE CARTAS NO HTML
// function quantidadeCartas() {
//     let quantidadeJogador = document.getElementById("quantidadeJogador");
//     let quantidadeMaq = document.getElementById("quantidadeMaq");
//     let symbol = "★";
//     quantidadeJogador.textContent = `${symbol.repeat(pokemonsJogador.length - 1)}`
//     quantidadeMaq.textContent = `${symbol.repeat(pokemonsMaq.length - 1)}`
// }

// FUNÇÃO PARA ADICIONAR CARTAS AO BARALHO DO JOGADOR E RETIRAR DA MÁQUINA
function adicionarCartaJg() {
    cartaPerdida = pokemonsMaq.shift();
    pokemonsJogador.push(cartaPerdida);
}

// FUNÇÃO INVERSA DA ACIMA
function adicionarCartaMaq() {
    cartaPerdida = pokemonsJogador.shift();
    pokemonsMaq.push(cartaPerdida);
}

//FUNÇÃO PARA MOSTRAR INÍCIO DE BATALHA
let count = 0;
function iniciarBatalha() {
    alert("A BATALHA INICIOU, VOCÊ NÃO PODERÁ MAIS SORTEAR POKÉMONS ATÉ ENCERRAR.")
    count++
}

// FUNÇÃO PARA VERIFICAR AS CARTAS
function VerificarCartas() {
    if (pokemonsJogador.length == 0) {
        alert("Você perdeu, treinador! Lute novamente contra seu oponente.");
        container.innerHTML = "";
        battleBtn.setAttribute("disabled", "")
        sortearBtn.remove("disabled");

    } else if (pokemonsMaq.length == 0) {
        alert("ISSO! Você conseguiu vencer! Agora faltam poucos passos para a liga pokémon.")
        container.innerHTML = "";
        battleBtn.setAttribute("disabled", "")
        sortearBtn.remove("disabled");
    }
}

// FUNÇÃO DO BOTÃO BATALHAR
function Batalhar() {
    // ÁREA PARA PEGAR OS ELEMENTOS
    let sortearBtn = document.querySelector("#sortearBtn");
    let battleBtn = document.querySelector("[data-js='battleBtn']");
    let nocautes = ["nocauteou", "desmaiou", "desacordou", "derrotou", "derrubou", "capotou"]
    let random = Math.floor(Math.random() * nocautes.length);
    let check = document.getElementsByName("select");
    let janela = document.getElementById("window");
    let result = document.getElementById("resultBattle");
    // let statsMaq = document.getElementById(`${pokemonsMaq[0].types[0].type.name.toUpperCase() + 5}`);
    let fullContainer = document.getElementById("fullContainer");
    let container = document.querySelector(".container");

    // DESABILITAR BOTÃO SORTEAR
    sortearBtn.setAttribute("disabled", "");

    // ALERTAR O INICIO DA BATALHA
    if (count == 0) {
        iniciarBatalha()
    }

    if (pokemonsJogador.length == 0) {
        alert("Você perdeu, treinador! Lute novamente contra seu oponente.");
        container.innerHTML = "";
        battleBtn.setAttribute("disabled", "")
        sortearBtn.remove("disabled");
        return;

    } else if (pokemonsMaq.length == 0) {
        alert("ISSO! Você conseguiu vencer! Agora faltam poucos passos para a liga pokémon.")
        container.innerHTML = "";
        battleBtn.setAttribute("disabled", "")
        sortearBtn.remove("disabled");
        return;

    }

    // STATS POKEMON JOGADOR
    let nomeJg = pokemonsJogador[0].name[0].toUpperCase() + pokemonsJogador[0].name.substring(1);
    let hpJg = pokemonsJogador[0].stats[0].base_stat;
    let damageJg = pokemonsJogador[0].stats[1].base_stat;
    let defenseJg = pokemonsJogador[0].stats[2].base_stat;
    let spAttackJg = pokemonsJogador[0].stats[3].base_stat;
    let spDefenseJg = pokemonsJogador[0].stats[4].base_stat;
    let speedJg = pokemonsJogador[0].stats[5].base_stat;

    // STATS POKEMON MAQUINA
    let nomeMaq = pokemonsMaq[0].name[0].toUpperCase() + pokemonsMaq[0].name.substring(1);
    let hpMaq = pokemonsMaq[0].stats[0].base_stat;
    let damageMaq = pokemonsMaq[0].stats[1].base_stat;
    let defenseMaq = pokemonsMaq[0].stats[2].base_stat;
    let spAttackMaq = pokemonsMaq[0].stats[3].base_stat;
    let spDefenseMaq = pokemonsMaq[0].stats[4].base_stat;
    let speedMaq = pokemonsMaq[0].stats[5].base_stat;
    //

    // CONDIÇÕES BATALHA
    if (check[0].checked) {
        if (hpJg > hpMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${hpJg - hpMaq} pontos de HP!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (hpJg < hpMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${hpMaq - hpJg} pontos de HP!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de HP são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    } else if (check[1].checked) {
        if (damageJg > damageMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${damageJg - damageMaq} pontos de DAMAGE!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (damageJg < damageMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${damageMaq - damageJg} pontos de DAMAGE!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de DAMAGE são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    } else if (check[2].checked) {
        if (defenseJg > defenseMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${defenseJg - defenseMaq} pontos de DEFENSE!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (defenseJg < defenseMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${defenseMaq - defenseJg} pontos de DEFENSE!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de DEFENSE são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    } else if (check[3].checked) {
        if (spAttackJg > spAttackMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${spAttackJg - spAttackMaq} pontos de SPECIAL ATTACK!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (spAttackJg < spAttackMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${spAttackMaq - spAttackJg} pontos de SPECIAL ATTACK!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de SPECIAL ATTACK são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    } else if (check[4].checked) {
        if (spDefenseJg > spDefenseMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${spDefenseJg - spDefenseMaq} pontos de SPECIAL DEFENSE!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (spDefenseJg < spDefenseMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${spDefenseMaq - spDefenseJg} pontos de SPECIAL DEFENSE!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de SPECIAL DEFENSE são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    } else if (check[5].checked) {
        if (speedJg > speedMaq) {
            result.innerHTML = `
                ${nomeJg} ${nocautes[random].toUpperCase()} ${nomeMaq}<br>
                ${nomeJg} vence por ${speedJg - speedMaq} pontos de SPEED!<br>
                <span class="ganhou">Você ganhou a carta ${nomeMaq.toUpperCase()}!</span>`

            adicionarCartaJg();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else if (speedJg < speedMaq) {
            result.innerHTML = `
                ${nomeMaq} ${nocautes[random].toUpperCase()} ${nomeJg}<br>
                ${nomeJg} perde por ${speedMaq - speedJg} pontos de SPEED!<br>
                <span class="perdeu">Você perdeu a carta ${nomeJg.toUpperCase()}!</span>`

            adicionarCartaMaq();
            container.innerHTML = "";
            if (pokemonsJogador.length > 0) {
                escreverPokeJogador(pokemonsJogador)
            }
            if (pokemonsJogador.length > 0 || pokemonsMaq.length > 0){
                DrawVersusImg()
            }
            if (pokemonsMaq.length > 0) {
                escreverPokeMaq(pokemonsMaq)
            }
        } else {
            result.innerHTML = `
                ${nomeJg} EMPATOU com ${nomeMaq}<br>
                Os pontos de SPEED são iguais!<br>
                <span class="empatou">As cartas NÃO FORAM alteradas!</span>`
        }
    }

    if (pokemonsJogador.length == 0) {
        alert("Você perdeu, treinador! Lute novamente contra seu oponente.");
        container.innerHTML = "";
        pokemonsJogador = [];
        pokemonsMaq = [];
        battleBtn.setAttribute("disabled", "")
        sortearBtn.removeAttribute("disabled");
        return;

    } else if (pokemonsMaq.length == 0) {
        alert("ISSO! Você conseguiu vencer! Agora faltam poucos passos para a liga pokémon.")
        container.innerHTML = "";
        pokemonsJogador = [];
        pokemonsMaq = [];
        battleBtn.setAttribute("disabled", "")
        sortearBtn.removeAttribute("disabled");
        return;

    }

    // statsMaq.innerHTML = `
    // <p>HP: ${hpMaq}</p>
    // <p>Damage: ${damageMaq}</p>
    // <p>Defense: ${defenseMaq}</p>
    // <p>Sp. Attack: ${spAttackMaq}</p>
    // <p>Sp. Defense: ${spDefenseMaq}</p>
    // <p>Speed: ${speedMaq}</p>`

    janela.style.display = "flex"
    fullContainer.style.display = "flex"

}

// FUNÇÃO DO BOTÃO "X" DO WINDOW MODAL
function fecharJanela() {
    let fullContainer = document.getElementById("fullContainer");
    let janela = document.getElementById("window");
    janela.style.display = "none";
    fullContainer.style.display = "none"
}
