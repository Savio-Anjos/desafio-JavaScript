//Desafio 1 ---------------------------------------

const validateInput = () => {
    const nome = $("#Nome").val();
    const email = $("#email").val();
    const send = $("#send").val();
    console.log("Desafio 1:");
    console.log(nome);
    console.log(email);
    console.log(send);
    console.log("----------------------------------");
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

