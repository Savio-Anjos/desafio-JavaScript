//Desafio 1 ---------------------------------------

const validateInput = () => {
    const name = $("#Nome").val();
    const email = $("#email").val();
    const send = $("#send").val();
    const salary = $("#salary").val();
    //Desafio 3 ---------------------------------------
 // OBS: Optei por realizar o terceiro teste aqui para não ser necessário chamar duas funções
   
 
   if(name === "" || email === "" || send === "" || salary === "") {
        console.log("Preencha todos os campos")
    } else {

   
    console.log("Desafio 1:");
    console.log(name);
    console.log(email);
    console.log(send);
    console.log("----------------------------------");
    }

    
}

//Desafio 2 ---------------------------------------

const verifyCheckbox = () => {
   const checkbox = $('#alert');

   if(checkbox.is(":checked")) {
     console.log("O usuário deve ser alertado!")
   } else {
    console.log("O usuário não deseja ser alertado!")
   }
}





