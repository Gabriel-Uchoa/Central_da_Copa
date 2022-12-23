"use strict";
const inputs = document.getElementsByClassName('styleInput');
const submit = document.getElementById('submit');
class players {
}
let obj = new players();
function changeInput(element) {
    obj[`${element.target.id}`] = element.target.value;
}
function cretePlayer(e) {
    e.preventDefault();
    if (obj.age == undefined ||
        obj.name == undefined ||
        obj.position == undefined ||
        obj.team == undefined ||
        obj.url == undefined) {
        alert("Preencha todos os campos!");
    }
    else {
        fetch("https://apigenerator.dronahq.com/api/BJ5j6RKq/players", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then(() => {
            alert("Jogador cadastrado com sucesso!");
        });
    }
}
for (let i = 0; i < inputs.length; i++) {
    const element = document.getElementById(inputs[i].id);
    element === null || element === void 0 ? void 0 : element.addEventListener('change', changeInput);
}
submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', cretePlayer);
//# sourceMappingURL=cadastro.js.map