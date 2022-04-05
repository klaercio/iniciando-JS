console.log(`Trabalhando com listas`);

const salvador = "salvador";
const saoPaulo = "São paulo";
const rioDeJaneiro = "Rio de Janeiro";


const cidades = new Array(salvador, saoPaulo, rioDeJaneiro);

console.log(cidades);

cidades.push("Sobral");

for (let i = 0; i < cidades.length; i++) {
    console.log(`Cidade ${i}: ${cidades[i]}`);

    if (cidades[i] == "Sobral       ") {
        console.log("Achou miseravel");
    }
}

cidades.splice(1, 1);

console.log(cidades);

