let team = 'Holanda'

searchAPI(team)
async function searchAPI(team: string) {
    let players = await searchPLayers()
    console.log(players)
    searchPLayersTeam(players, team)
}

async function searchPLayers() {
    let result = await fetch('https://apigenerator.dronahq.com/api/BJ5j6RKq/players')
    result = await result.json()
    return result
}


async function searchPLayersTeam(players: object, team: string) {
    
    players.forEach(element => {
        if (element.team === team) {
            console.log(element)
            creatElement(element, team)
        }
    });
}

async function creatElement(element: object, team:string) {
    if (element.position === 'atacante' && element.team === team) {

        let div = document.createElement('div');
        div.className = 'player'
        div.appendChild(document.createElement('img')).src = `${element.url}`;
        div.appendChild(document.createElement('p')).innerText = `${element.name}`;
        div.appendChild(document.createElement('p')).innerText = `${element.age} anos`;

        document.querySelector(".attacker").appendChild(div);
    }
    if (element.position === 'meio_campista' && element.team === team) {

        let div = document.createElement('div');
        div.className = 'player'
        div.appendChild(document.createElement('img')).src = `${element.url}`;
        div.appendChild(document.createElement('p')).innerText = `${element.name}`;
        div.appendChild(document.createElement('p')).innerText = `${element.age} anos`;

        document.querySelector(".midfielder").appendChild(div);

    }

    if (element.position === 'defensor' && element.team === team){
        let div = document.createElement('div');
        div.className = 'player'
        div.appendChild(document.createElement('img')).src = `${element.url}`;
        div.appendChild(document.createElement('p')).innerText = `${element.name}`;
        div.appendChild(document.createElement('p')).innerText = `${element.age} anos`;

        document.querySelector(".defenders").appendChild(div);
    }

    if (element.position === 'goleiro' && element.team === team){
        let div = document.createElement('div');
        div.className = 'player'
        div.appendChild(document.createElement('img')).src = `${element.url}`;
        div.appendChild(document.createElement('p')).innerText = `${element.name}`;
        div.appendChild(document.createElement('p')).innerText = `${element.age} anos`;

        document.querySelector(".goalkeepers").appendChild(div);
    } 
}