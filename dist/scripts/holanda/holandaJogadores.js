"use strict";
let team = 'Holanda';
searchAPI(team);
async function searchAPI(team) {
    let players = await searchPLayers();
    console.log(players);
    searchPLayersTeam(players, team);
}
async function searchPLayers() {
    let result = await fetch('https://apigenerator.dronahq.com/api/BJ5j6RKq/players');
    result = await result.json();
    return result;
}
async function searchPLayersTeam(players, team) {
    players.forEach(element => {
        if (element.team === team) {
            console.log(element);
            creatElement(element, team);
        }
    });
}
async function creatElement(element, team) {
    if (element.position === 'atacante' && element.team === team) {
        let position = element.position
        addPLayer(element, position)
    }

    if (element.position === 'meio_campista' && element.team === team) {
        let position = element.position
        addPLayer(element, position)    
    }
    if (element.position === 'defensor' && element.team === team) {
        let position = element.position
        addPLayer(element, position)      
    }
    if (element.position === 'goleiro' && element.team === team) {
        let position = element.position
        addPLayer(element, position)  
    }
}
function moveLeft(id) {
    let element = document.getElementById(id);
    element.scrollLeft -= 400;
}
function moveRight(id) {
    let element = document.getElementById(id);
    element.scrollLeft += 400;
}

function addPLayer (element, position){
    let div = document.createElement('div');
    div.className = 'player';
    div.appendChild(document.createElement('img')).src = `${element.url}`;
    div.appendChild(document.createElement('p')).innerText = `${element.name}`;
    div.appendChild(document.createElement('p')).innerText = `${element.age} anos`;

    if(position === "atacante"){
        document.querySelector(".attacker").appendChild(div);
    }

    if(position === "meio_campista"){
        document.querySelector(".midfielder").appendChild(div);
    }
    if(position === "defensor"){
        document.querySelector(".defenders").appendChild(div);
    }
    if(position === "goleiro"){
        document.querySelector(".goalkeepers").appendChild(div);
    }
}


//# sourceMappingURL=holandaJogadores.js.map