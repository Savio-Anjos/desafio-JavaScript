//Desafio 1 ---------------------------------------

 const user = '{"nome": "Pedro", "idade": 30, "profissão": "professor" }';

 const userData = JSON.parse(user);

 const displayData = () => {
    console.log("Desafio 1:")
    console.log(userData)
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
     
      }
]

 const displayStudents = () => {
   students.map((student) => {
      const city = student.cidade;

      if(city === "Belo Horizonte") {
        student.estado = "MG"

         
      }
   })

   return students;
 }
 
 displayStudents()
 console.log("Desafio 2:")
 console.log(students)

 

 

