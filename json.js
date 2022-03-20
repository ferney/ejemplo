/*let amigos=["pablito","susy","Ale","Fer"];

let s=JSON.stringify(amigos);
console.log(s);
let y=JSON.parse(s)
console.log(y);

let persona={
    nombre:"carlos",
    edad: 34,
    direccion:"calle 34 quito-sur"
};

s=JSON.stringify(persona);
console.log(s);
console.log(JSON.stringify(persona));

y=JSON.parse(s)
console.log(y);

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(x){
        this.energia-=x*5,
        this.experiencia+=x*2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


let dameCinco = () =>  [1,2,3,4,5];  

console.log(dameCinco());

let multiplicarPorDos =() => 123 * 2;
console.log(multiplicarPorDos());

let saludar =(nombre) => 'Hola, ' + nombre + '!';
console.log(saludar("ana"));*/

let dia = 'jueves'

switch (dia) {
  case 'viernes':
    console.log('buen finde');
    break;
  case 'lunes':
    console.log('buena semana');
    break;  
   default:
    console.log('buen dia');
}

