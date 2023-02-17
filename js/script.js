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

var students = [
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


 //Desafio 2 --------------------------------------- 
 
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


//Desafio 3 --------------------------------------- 
var variavelGlobal = "JavaScript";
const variaveis = () => {
   let variavelLocal = "Python";
   
   console.log("Desafio 4:");
   console.log(variavelGlobal)
   console.log("----------------------------------")
}

variaveis()