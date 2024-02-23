//? 1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.

const unevenNumbers = () =>{
    let uneven = [];
    
    for(let i = 0; i < 100; i++){
      i%2 !==0 ? uneven.push(i) : null;
    //  if(i % 2 !== 0){
    //    uneven.push(i)
    //  }
    }
    return uneven;
  }
  console.log(unevenNumbers())

/*  2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector.
Realizar la creación y carga del vector en el constructor. Crear un método para
imprimir el vector. */




/* 3. Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. 
En el constructor realizar el ingreso de datos. Definir otros dos métodos 
para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)*/

class Student {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
     
     printData() {
        console.log(`name: ${this.name} age: ${this.age}`);
     };
     isOlder(){
     this.age < 18 
     ? console.log(`${this.name}  no es mayor de edad`)  
     : console.log(`${this.name}  es mayor de edad`);
}
}

const student1 = new Student("Juan", 17);
const student2 = new Student( "María", 19);
student1.printData();
student1.isOlder();
console.log('------------------------');
student2.printData();
student2.isOlder();

/* 4. JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos
del array “y” que no se encuentran en el array “x” utilizando para tal fin una
única línea de código. const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l",
"bro", "g"]; */

const x = ["n", "bro", "c", "|"]; 
const y = ["d", "n", "l", "bro", "g"];
//console.log(y.filter((i)=>!x.includes(i)));
function excludesSingle(arr1, arr2){
  return arr2.filter(item => !arr1.includes(item))
};
console.log(excludesSingle(x, y));

/* 5. Dada la siguiente base de datos relacional: RESUELVA LAS SIGUIENTES
CONSULTAS EN SQL: */

// ● Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)
//*     SELECT nombre FROM Empleado ORDER BY nombre ASC;

// ● Seleccionar el nombre, puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’.
//*    SELECT EMPLEADOS.NOMBRES, PUESTOS.PUESTO, LOCALIDADES.LOCALIDADES 
//*    FROM EMPLEADOS 
//*    JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID =  DEPARTAMENTOS.ID 
//*    JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDADES_ID= LOCALIDADES.ID 
//*    JOIN PUESTO ON EMPLEADOS.PUESTO_ID = PUESTO.ID 
//*    WHERE PUESTOS.PUESTO = 'SOPORTE';


// ● Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
//*    SELECT Nombres FROM Empleados WHERE Nombres LIKE '%o';

// ● Seleccionar el nombre, puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
//*   SELECT EMPLEDOS.NOMBRES, PUESTOS.PUESTO, EMPLEADOS.SUELDO FROM EMPLEADOS  
//*   JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID =  DEPARTAMENTOS.ID 
//*   JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDADES_ID= LOCALIDADES.ID 
//*   JOIN PUESTO ON EMPLEADOS.PUESTO_ID = PUESTO.ID 
//*   WHERE LOCALIDADES.LOCALIDAD = 'CORDOBA';

// ● Seleccionar el nombre, sueldo y localidad donde trabajan los empleados que tengan un
// sueldo entre 10000 y 13000.
//*   SELECT EMPLEDOS.NOMBRES, PUESTOS.PUESTO, LOCALIDADES.LOCALIDAD, EMPLEADOS.SUELDO FROM EMPLEADOS 
//*   JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID =  DEPARTAMENTOS.ID 
//*   JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDADES_ID= LOCALIDADES.ID 
//*   JOIN PUESTO ON EMPLEADOS.PUESTO_ID = PUESTO.ID 
//*   WHERE SUELDO BETWEEN 10000 AND 13000;

// ● Visualizar los departamentos con más de 5 empleados.
//*   SELECT DEPARTAMENTOS.DEPARTAMENTO FROM DEPARTAMENTOS 
//*   JOIN EMPLEADOS ON DEPARTAMENTOS.ID = EMPLEADOS.DEPARTAMENTO_ID 
//*   GROUP BY DEPARTAMENTOS.DENOMINACION 
//*   HAVING COUNT(EMPLEADOS.NOMBRE) >= 2;

// ● Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o
// ‘Programador’.
//*   SELECT EMPLEADOS.NOMBRES FROM EMPLEADOS  
//*   JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID =  DEPARTAMENTOS.ID  
//*   JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID 
//*   JOIN LOCALIDADES  ON DEPARTAMENTOS.LOCALIDADES_ID= LOCALIDADES.ID 
//*   WHERE LOCALIDADES.LOCALIDAD='CÓRDOBA' AND PUESTOS.PUESTO = 'ANALISTA' 
//*   OR PUESTOS.PUESTO = 'PROGRAMADOR';

// ● Calcula el sueldo medio de todos los empleados.

// ● ¿Cuál es el máximo sueldo de los empleados del departamento 10?

// ● Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.

// ● Para cada puesto obtener la suma de sueldos.
//*  SELECT PUESTOS.PUESTO, SUM(SUELDO)
//*  FROM EMPLEADOS
//*  JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
//*  GROUP BY PUESTOS.PUESTO;
