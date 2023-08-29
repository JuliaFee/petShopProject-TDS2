console.log("Hello, World!");

function checkInputs(){
    
let tutor = document.getElementById("input-tutor").value; 
let nome = document.getElementById("input-preco").value; 
let especie = document.getElementById("input-especie").value; 
let niver = document.getElementById("input-niver").value; 
let fotoLink = document.getElementById("input-img").value; 

console.log({tutor});
console.log({nome});
console.log({especie});
console.log({niver});
console.log({fotoLink});

if (tutor == '' || nome == '' || especie == '' || niver == '' || fotoLink == '' ){
    console.log("os dados estão vazios"); 
    return true;
} else{
    console.log("os dados não estão em branco");
    return false;   
}
}

function sendMsg(msg, type){
     let msgExib = document.getElementById("msg");
     msgExib.innerHTML = '';

     let msgParaTela = `
     <p class='${type}'>${msg}</p>`
     
     msgExib.innerHTML = msgParaTela;

     setTimeout(function(){
        msgExib.innerHTML = "";
     }, 3000);

}

class Pet{
    constructor(tutor, nome, especie, niver, fotoLink){
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.niver = niver;
        this.fotoLink = fotoLink;
    }
}

const petTeste = new Pet("isabelle", "belinha", "shitzu", "21-02-2015", "link");
console.log(petTeste);

function registerPet(){
    let tutor = document.getElementById("input-tutor").value; 
    let nome = document.getElementById("input-nome").value; 
    let especie = document.getElementById("input-especie").value; 
    let niver = document.getElementById("input-niver").value; 
    let fotoLink = document.getElementById("input-img").value; 

    const pet = new Jogo(tutor, nome, especie, niver, fotoLink);
    console.log(pet);

    registroPets.add(pet);
    clearFields();
    renderContent();
}

class petList{
    constructor(){
        this.petList = [];
    }
    add(parametro){
        if(verificarInputs()){
            sendMsg("Preencha todos os campos", "error");
        } else{
        this.petList.push(parametro);
        sendMsg("Cadastrado com sucesso", "sucesso");
        console.log(this.petList)
        }
    }
}
const registroPets = new petList();

console.log(registroPets);

function clearFields(){
    document.getElementById("input-tutor").value = ''; 
    document.getElementById("input-nome").value = ''; 
    document.getElementById("input-especie").value = ''; 
    document.getElementById("input-niver").value = ''; 
    document.getElementById("input-img").value = ''; 

    console.log("função de limpar inputs executada");
}

function renderContent(){
    const showHTML = document.getElementById("container-lista");
    showHTML.innerHTML = '';

    let array = registroPets.petList;
    console.log(array);

    array.forEach(pet => {
        const petsHTML = `
        <div class="petCard">
            <h2>Tutor: ${jogo.tutor}</h2>
            <p>Nome: ${jogo.nome}</p>
            <p>Espécie: ${jogo.especie}</p>
            <p>Idade: ${jogo.niver}</p>
            <img src="${jogo.fotoLink}" alt="${jogo.tutor}">
        </div>
        `
    showHTML.innerHTML += petsHTML;
    });

}