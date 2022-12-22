"use strict";
// class Games {
//     timeA!: string;
//     timeB!: string;
//     data!: string;
//     golsA!: number;
//     golsB!: number;
//     fase!: string;
// }
let team = 'Holanda';
searchAPI(team);
async function searchAPI(team) {
    let games = await searchGamesAll();
    searchGamesTeam(games, team);
}
async function searchGamesAll() {
    let result = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos');
    result = await result.json();
    return result;
}
function searchGamesTeam(games, team) {
    games.forEach(element => {
        if (element.timeA === team || element.timeB === team) {
            creatElement(element);
        }
    });
}
function creatElement(element) {
    if (element.fase === 'Classificatória') {
        let div = document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        p1.appendChild(document.createTextNode(element.timeA, 'x', element.timeB));
        p2.appendChild(document.createTextNode(element.gols.timeA, 'x', element.gols.timeB));
        div.appendChild(p1);
        div.appendChild(p2);
        document.querySelector(".gamesClassificatory").appendChild(div);
    }
}
//# sourceMappingURL=holandaJogos.js.map