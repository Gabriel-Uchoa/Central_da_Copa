// class Games {
//     timeA!: string;
//     timeB!: string;
//     data!: string;
//     golsA!: number;
//     golsB!: number;
//     fase!: string;
// }

let team = 'Holanda'
const btn = document.querySelector('.btnMost')

btn.addEventListener('click', function() {
    
    divExpand()  

})

searchAPI(team)
async function searchAPI(team: string) {
    let games = await searchGamesAll()
    searchGamesTeam(games, team)
}

async function searchGamesAll() {
    let result = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    result = await result.json()
    return result
}

function searchGamesTeam(games: object, team: string) {
    games.forEach(element => {
        if (element.timeA === team || element.timeB === team) {
            creatElement(element)
        }
    });
}

function creatElement(element: object) {
    if (element.fase === 'Classificatória') {
        let div = document.createElement('div');
        div.className = 'games'
        div.appendChild(document.createElement('p')).innerText = `${element.timeA} X ${element.timeB}`;
        div.appendChild(document.createElement('p')).innerText = `${element.gols.timeA} X ${element.gols.TimeB}`;

        document.querySelector(".gamesClassificatory").appendChild(div);
    }
    else{
        let divQualifiers = document.createElement('div')
        divQualifiers.className = "gamesQualifiers"
        divQualifiers?.appendChild(document.createElement('p')).innerText = `${element.fase}`
        divQualifiers.appendChild(document.createElement('p')).innerText = `${element.timeA} X ${element.timeB}`;
        divQualifiers.appendChild(document.createElement('p')).innerText = `${element.gols.timeA} X ${element.gols.TimeB}`;

        document.querySelector(".stages")?.appendChild(divQualifiers);
    }

}

function divExpand(){
    const expand = document.querySelector(".gamesClassificatory")
    if(btn.innerText === "Ver Mais"){
        expand.style.height = 50 + 'vh'
        btn.innerText = "Ver Menos"
    }
    else{
        expand.style.height = 20 + 'vh'
        btn.innerText = "Ver Mais"
    }
}