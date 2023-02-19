//Desafio 1 ---------------------------------------

 const user = '{"nome": "Pedro", "idade": 30, "profissão": "professor" }';

 const userData = JSON.parse(user);

 const displayData = () => {
    console.log("Desafio 1:")
    console.log(userData)
    console.log("----------------------------------")
 }

 displayData()

//Desafio 2 ---------------------------------------

const students = [
   {
       id: 1,
       nome: "Ricardo", 
       cidade: "Jaguaquara",
      
      },
      {
       id: 2, 
       nome: "Maria", 
       cidade: "Belo Horizonte",
     
      },
      {
       id: 3, 
       nome: "Carlos", 
       cidade: "Vitória da Conquista",
      },
      {
         id: 4, 
         nome: "Pedro", 
         cidade: "São Paulo",
        },
      
]

 const displayStudentsOne = () => {
   students.map((student) => {
      const city = student.cidade;

      if(city === "Belo Horizonte") {
        student.estado = "MG"

         
      }
   })

   return students;
 }
 
 displayStudentsOne()
 console.log("Desafio 2:");
 console.log(students);
 console.log("----------------------------------")


 //Desafio 3 --------------------------------------- 
 
 const displayStudentsTwo = () => {
   students.map((student) => {
      const city = student.cidade;

      if(city === "São Paulo") {
        const studentSaoPaulo = {
         id: student.id,
         name: student.nome,
         cidade: student.cidade
        }
        
        console.log("Desafio 3:")
        console.log(studentSaoPaulo)

       const filterStudents = students.filter(student => student.cidade != "São Paulo")
       console.log("Array filtrado:")
        console.log(filterStudents)
        console.log("----------------------------------")
        
      }
   })
 }

 displayStudentsTwo()


//Desafio 4 --------------------------------------- 
var variavelGlobal = "JavaScript";
const variaveis = () => {
   let variavelLocal = "Python";
   
   console.log("Desafio 4:");
   console.log(variavelGlobal)
   console.log("----------------------------------")
}

variaveis();



//Desafio 5 --------------------------------------- 

const fruits = [
   {
      id: 1,
      name: "apple",
   },
   {
      id: 2,
      name: "strawberry",
   },
   {
      id: 3,
      name: "grape",
   },
   {
      id: 4,
      name: "watermelon",
   }
]

const orderArray = () => {
   const orderFruits = fruits.sort(fruits.name)
   fruits.sort(function(a, b) {
      if(a.name < b.name) {
         return -1;
      } else {
         return true;
      }
   });
}

console.log("Desafio 5:");
console.log(fruits);
console.log("----------------------------------")

orderArray();


//Desafio 6 --------------------------------------- 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const evensNumbers = [];
const evenNumbersVerification = () => {
   numbers.map((number) => {
      const checkNumber = number / 2
      const verificationNumber = Number.isInteger(checkNumber)

      if(verificationNumber === true) {
   
         evensNumbers.push(number);
      }
   })

   
}

evenNumbersVerification();

console.log("Desafio 6:");
console.log(evensNumbers);
console.log("----------------------------------")



//Desafio 7 --------------------------------------- 
const randomNumbers = [2, 10, 33, 47, 14, 7, 95, 32, 91];
const primeNumbers = [];

const primeNumbersVerification = () => {
   randomNumbers.map((number) => {
      const checkPrime = number / 2;
      const primeVerification = Number.isInteger(checkPrime);

      if(number === 2 || primeVerification === false) {
          primeNumbers.push(number);
      }

   })
}

primeNumbersVerification();
console.log("Desafio 7:");
console.log(primeNumbers)
console.log("----------------------------------")
