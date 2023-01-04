const inputs = document.getElementsByClassName('styleInput')
const submit = document.getElementById('submit')

class players {
    age !: number;
    name!: string;
    position!: string;
    team!: string;
    url!: string;
    [key: string]: any
}
let obj: players = new players()

function changeInput(element: any): void {
    obj[`${element.target.id}`] = element.target.value
}

function cretePlayer(e: Event): void {
    e.preventDefault()
    if (obj.age == undefined ||
        obj.name == undefined ||
        obj.position == undefined ||
        obj.team == undefined ||
        obj.url == undefined
    ) {
        alert("Preencha todos os campos!")
    } else {
        fetch("https://apigenerator.dronahq.com/api/BJ5j6RKq/players", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(() => {
            alert("Jogador cadastrado com sucesso!")
        });
    }
}

for (let i = 0; i < inputs.length; i++) {
    const element = document.getElementById(inputs[i].id)
    element?.addEventListener('change', changeInput)
}

submit?.addEventListener('click', cretePlayer)