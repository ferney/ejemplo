/*let doble = n => n*2;
let triple =n => n*3;

let aplicarCallback = (n,operacion)=> operacion(n);

console.log(aplicarCallback(2, doble));
console.log(aplicarCallback(2, triple));
let suma= (x,y)=>x+y;
let resta=(x,y)=>x-y; 
let multiplicacion=(x,y)=>x*y;
let division=(x,y)=>x/y;
let calculadora=(x,y,proceso)=>proceso(x,y);

console.log(calculadora(2,2,suma));
console.log(calculadora(2,2,resta));
console.log(calculadora(2,2,multiplicacion));
console.log(calculadora(2,2,division));




function agregarHttp(url) {
    return "http://" + url;
}

function procesar(unArray,callback){
    let a=[];
    for(let i=0;i<unArray.length;i++){
        a.push(callback(unArray[i]));
        }
    return a;
}
let urlCompletas = procesar(["www.yahoo.com", "www.google.com", "www.git.com"],agregarHttp)

console.log(urlCompletas);

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados= estudiantes.filter(estudiante => {
    return estudiante.aprobado===true;
});


let desaprobados=estudiantes.filter(estudiante => {
    return estudiante.aprobado===false;
});


console.log(aprobados);
console.log(desaprobados);*/

let fecha=new Date(); 

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth()+' del año '+fecha.getFullYear());