"use strict";
document.body.onload = loadElementsJogadores();
class jogadores {
}
async function loadApiJogadores() {
    let result = await fetch('https://apigenerator.dronahq.com/api/BJ5j6RKq/players');
    result = await result.json();
    return result;
}
function processApiJogadores(data, filter) {
    if (filter) {
        const slide = document.getElementsByClassName("carousel-cards");
        for (let i = 0; i < slide.length; i++) {
            const element = document.getElementById(slide[i].id);
            element.innerText = "";
        }
        if (filter[0] != 0 && filter[1] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age >= filter[0] && element.age <= filter[1]) {
                    createElementJogadores(element);
                }
            });
        }
        else if (filter[0] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age >= filter[0]) {
                    createElementJogadores(element);
                }
            });
        }
        else if (filter[1] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age <= filter[1]) {
                    createElementJogadores(element);
                }
            });
        }
    }
    else {
        data.forEach(element => {
            if (element.team == "Inglaterra") {
                createElementJogadores(element);
            }
        });
    }
}
function createElementJogadores(element) {
    if (element.position == "goleiro") {
        const parentElement = document.getElementById("slide-goleiros");
        create(parentElement, element);
    }
    if (element.position == "defensor") {
        const parentElement = document.getElementById("slide-defensores");
        create(parentElement, element);
    }
    if (element.position == "meio_campista") {
        const parentElement = document.getElementById("slidemeio-campistas");
        create(parentElement, element);
    }
    if (element.position == "atacante") {
        const parentElement = document.getElementById("slide-atacantes");
        create(parentElement, element);
    }
}
function create(parentElement, jogador) {
    let theLastChild = parentElement.lastChild;
    let newElement = document.createElement("div");
    newElement.className = 'card-carousel';
    newElement.appendChild(document.createElement('img')).src = jogador.url;
    newElement.appendChild(document.createElement('p')).innerText = jogador.name;
    newElement.appendChild(document.createElement('p')).innerText = `${jogador.age} anos`;
    parentElement.insertBefore(newElement, theLastChild);
}
function loadElementsJogadores() {
    loadApiJogadores().then((data) => processApiJogadores(data));
}
function filterAge() {
    let filter = [];
    const filter_age_min = document.getElementById('age_min');
    const filter_age_max = document.getElementById('age_max');
    filter.push(filter_age_min.value);
    filter.push(filter_age_max.value);
    loadApiJogadores().then((data) => processApiJogadores(data, filter));
}
function slideMoveRight(id) {
    const element = document.getElementById(id);
    element.scrollLeft += 50;
}
function slideMoveLeft(id) {
    const element = document.getElementById(id);
    element.scrollLeft -= 50;
}
//# sourceMappingURL=inglaterra_jogadores.js.map