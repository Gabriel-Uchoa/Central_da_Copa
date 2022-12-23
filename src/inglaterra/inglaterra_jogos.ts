document.body.onload = loadElements();

const btnView: any = document.getElementById("view")
class jogos {
    data !: string;
    fase!: string;
    gols!: gols;
    timeA!: string;
    timeB!: string;
}
class gols {
    timeA!: number;
    TimeB!: number;
}

async function loadApiJogos(): Promise<any> {
    let result = await fetch('https://apigenerator.dronahq.com/api/zs9PYAhn/jogos')
    result = await result.json()
    return result
}

function processApi(data: Array<jogos>) {
    data.forEach(element => {
        if (element.timeA == "Inglaterra" || element.timeB == "Inglaterra") {
            createElement(element)
        }
    });
}

function viewExpand() {
    const divExpand: any = document.getElementById("Classificatória")
    if (btnView.innerText == "Ver Mais") {
        divExpand.style.height = 250 + 'px'
        btnView.innerText = "Ver Menos"
    } else {
        divExpand.style.height = 100 + 'px'
        btnView.innerText = "Ver Mais"
    }
}
function createElement(element: jogos) {
    //refatorar função
    const parentElement: any = document.getElementById(element.fase)
    if (element.fase == "Classificatória") {
        let theFirstChild = parentElement.firstChild
        let newElement = document.createElement("div")
        newElement.className = 'card';
        newElement.appendChild(document.createElement('p')).innerText = `${element.timeA} X ${element.timeB}`
        newElement.appendChild(document.createElement('p')).innerText = `${element.gols.timeA} X ${element.gols.TimeB}`
        parentElement.insertBefore(newElement, theFirstChild)
    } else {
        const parentElement: any = document.getElementById("match-history")
        let theLastChild = parentElement.lastChild
        let newElement = document.createElement("div")
        newElement.className = 'match';
        newElement.appendChild(document.createElement('h2')).innerText = element.fase

        let card = document.createElement("div")
        card.className = 'card';
        card.appendChild(document.createElement('p')).innerText = `${element.timeA} X ${element.timeB}`
        card.appendChild(document.createElement('p')).innerText = `${element.gols.timeA} X ${element.gols.TimeB}`

        newElement.appendChild(card)
        parentElement.insertBefore(newElement, theLastChild)
    }
}

function loadElements(): any {
    loadApiJogos().then((data: Array<jogos>) => processApi(data))
}

btnView?.addEventListener('click', viewExpand)