console.log("Hello, World!");

function checkInputs(){
    
let tutor = document.getElementById("input-tutor").value; 
let nome = document.getElementById("input-nome").value; 
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

const msg = "";

function sendMsg(msg, type){
     let msgExib = document.getElementById("msg");

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
        this.age = this.calculateAge(niver);
        this.fotoLink = fotoLink;
    }

    calculateAge(niver) {
        const newDateJS = new Date(niver);
        const yearDate = newDateJS.getFullYear();
    
        const todayDate = new Date();
        const nowDate = todayDate.getFullYear();
    
        const age = nowDate - yearDate;
        return age
      }
}

const petTeste = new Pet("isabelle", "belinha", "shitzu", "21-02-2015", "9", "link");
console.log(petTeste);

function registerPet(){
    document.getElementById("main-container").classList.remove("hidden");
    let tutor = document.getElementById("input-tutor").value; 
    let nome = document.getElementById("input-nome").value; 
    let especie = document.getElementById("input-especie").value; 
    let niver = document.getElementById("input-niver").value; 
    let fotoLink = document.getElementById("input-img").value; 

    const pet = new Pet(tutor, nome, especie, niver, fotoLink);
    console.log(pet);

    registerPet.add(pet);
    clearFields();
    renderContent();
}

class petList{
    constructor(){
        this.petList = [];
    }
    add(parametro){
        if(checkInputs()){
            sendMsg("Preencha todos os campos", "error");
        } else{
        this.petList.push(parametro);
        sendMsg("Pet cadastrado com sucesso", "sucesso");
        console.log(this.petList)
        }
    }
}
const petpet = new petList();

console.log(petpet);

function clearFields(){
    document.getElementById("input-tutor").value = ''; 
    document.getElementById("input-nome").value = ''; 
    document.getElementById("input-especie").value = ''; 
    document.getElementById("input-niver").value = ''; 
    document.getElementById("input-img").value = ''; 

    console.log("função de limpar inputs executada");
}

function renderContent(){
    document.getElementById("main-container").classList.add("hidden");
    // let showHTML = document.getElementById("list-container");
    // showHTML.innerHTML = '';

    // let array = registerPet.petList;
    // console.log(array);

    // array.forEach(pet => {
    //     const petsHTML = `
    //     <div class="petCard">
    //         <h2>Tutor: ${pet.tutor}</h2>
    //         <p>Nome: ${pet.nome}</p>
    //         <p>Espécie: ${pet.especie}</p>
    //         <p>Aniversário: ${pet.niver}</p>
    //         <p>Idade: ${pet.age}</p>
    //         <img src="${pet.fotoLink}" alt="${pet.tutor}">
    //     </div>
    //     `
    // showHTML.innerHTML += petsHTML;
    // });

    let content = '';

    const array = registerPet.petList;

    array.forEach(pet => {
         content += `
         <div class="petCard">
             <h2>Tutor: ${pet.tutor}</h2>
             <p>Nome: ${pet.nome}</p>
             <p>Espécie: ${pet.especie}</p>
             <p>Aniversário: ${pet.niver}</p>
             <p>Idade: ${pet.age}</p>
             <img src="${pet.fotoLink}" alt="${pet.tutor}">
         </div>
         `
    })

    document.getElementById("list-container").innerHTML = content;
}