document.body.onload = loadElementsJogadores();

class jogadores {
    age !: number;
    name!: string;
    position!: string;
    team!: string;
    url!: string;
}

async function loadApiJogadores(): Promise<any> {
    let result = await fetch('https://apigenerator.dronahq.com/api/BJ5j6RKq/players')
    result = await result.json()
    return result
}

function processApiJogadores(data: Array<jogadores>, filter?: Array<number>) {
    if (filter) {
        const slide: any = document.getElementsByClassName("carouselCards");
        for (let i = 0; i < slide.length; i++) {
            const element: any = document.getElementById(slide[i].id)
            element.innerText = "";
        }
        if (filter[0] != 0 && filter[1] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age >= filter[0] && element.age <= filter[1]) {
                    createElementJogadores(element)
                }
            })
        } else if (filter[0] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age >= filter[0]) {
                    createElementJogadores(element)
                }
            })
        } else if (filter[1] != 0) {
            data.forEach(element => {
                if (element.team == "Inglaterra" && element.age <= filter[1]) {
                    createElementJogadores(element)
                }
            })
        }
    } else {
        data.forEach(element => {
            if (element.team == "Inglaterra") {
                createElementJogadores(element)
            }
        })
    }
}

function createElementJogadores(element: jogadores) {
    if (element.position == "goleiro") {
        const parentElement: any = document.getElementById("slideGoleiros")
        create(parentElement)
    }
    if (element.position == "defensores") {
        const parentElement: any = document.getElementById("slideDefensores")
        create(parentElement)
    }
    if (element.position == "meio_campista") {
        const parentElement: any = document.getElementById("slideMeioCampistas")
        create(parentElement)
    }
    if (element.position == "atacante") {
        const parentElement: any = document.getElementById("slideAtacantes")
        create(parentElement)
    }
    function create(parentElement: any): any {
        let theLastChild = parentElement.lastChild
        let newElement = document.createElement("div")
        newElement.className = 'card-carousel';
        newElement.appendChild(document.createElement('img')).src = element.url
        newElement.appendChild(document.createElement('p')).innerText = element.name
        newElement.appendChild(document.createElement('p')).innerText = `${element.age} anos`
        parentElement.insertBefore(newElement, theLastChild)
    }
}

function loadElementsJogadores(): any {
    loadApiJogadores().then((data: Array<jogadores>) => processApiJogadores(data))
}

function filterAge() {
    let filter: Array<number> = []
    const filter_age_min: any = document.getElementById('age_min')
    const filter_age_max: any = document.getElementById('age_max')
    filter.push(filter_age_min.value)
    filter.push(filter_age_max.value)
    loadApiJogadores().then((data: Array<jogadores>) => processApiJogadores(data, filter))
}

function slideMoveRight(id: string) {
    const element: any = document.getElementById(id)
    element.scrollLeft += 50;
}

function slideMoveLeft(id: string) {
    const element: any = document.getElementById(id)
    element.scrollLeft -= 50;
}