/*const fs=require('fs');
//asi se usa de manera simple (relativa)
const archivo= fs.readFileSync('./tareas.json', 'utf8');
//asi se usa tecnicamente y sin punto (absoluta)
const archivo= fs.readFileSync(__dirname +'/tareas.json', 'utf8');

console.log(archivo);

fs.readFile('./tareas.json', (error,datos) => {
    if (error)
      console.log(error);
    else
    var as = JSON.parse(datos);

      //console.log(datos.toString());
       console.log(as);
  });
*/
// 1. Importamos nuestro módulo casero con la funcionalidad de lectura/
// escritura de archivos JSON
let funcionesDeTareas = require('./funcionesDeTareas');

// 2. Obtenemos de la terminal el argumento que acompaña el comando de 
// ejecución "node app xyz"
let accion = process.argv[2];

// 3. Creamos un arreglo que contendrá las tareas recuperadas
let tareas = [];

// 4. Usamos un Switch para determinar curso de acción según input
switch(accion) {
    // 5. En caso de recibir por terminal "node app listar" hacemos...
    case 'listar':
        // 6. Estas 3 líneas son meramente estéticas
        console.log();    
        console.log('Listado de tareas');
        console.log('----------------');

        // 7. Llamamos al método que recupera un arreglo de tareas en JS
        // a partir de un archivo JSON y almacenamos su salida en "tareas"
        tareas = funcionesDeTareas.leerJSON();
        
        // 8. Recorremos el arreglo de tareas pintando en consola (terminal)
        // cada uno de sus elementos.
        tareas.forEach((tarea, index) => {
            console.log(index + '. ' + tarea.titulo + ' -> ' + tarea.estado);
        });
        // Nota: recordemos que tarea e index son dos parámetros dados por la
        // sintaxis de .forEach() (Fuente: https://developer.mozilla.org/)

        console.log()
        // 9. Los "break" salen del Switch, sino ejecutaría todo lo de abajo
        break;

    case 'crear':
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');

        // 10. Ahora recuperamos lo que viene después de "node app crear ..."
        // Sabemos que se trata de un arreglo de 4 elementos, ergo: índice = 3
        let titulo = process.argv[3];

        // 11. En la consigna dice que todas las tareas nuevas serán pendientes
        // por lo tanto sólo necesitamos saber el título para crear una nueva
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        // 12. Llamamos a la función que engloba los cinco pasos (ver módulo)
        funcionesDeTareas.guardarTarea(tarea);

        // 13. Estética: devolvemos la tarea agregada.
        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log()
        break;    

    case 'filtrar':
        // 14. Ahora recuperamos lo que viene después de "node app filtrar ..."
        let estado = process.argv[3];

        // 15. Mera estética...
        console.log();
        console.log('Tareas con estado: "' + estado + '"');
        console.log('------------------');
        
        // 16. Llamamos el método nuevo que devuelve las funciones que
        // correspondan al estado que pasamos como parámetro (ver módulo)
        let filtradas = funcionesDeTareas.filtrarPorEstado(estado);
        
        // 17. mapeamos el arreglo filtrado pintando en terminal cada título
        filtradas.forEach(tarea => console.log(tarea.titulo));

        break;

    case undefined:
        // 18. Opción que contempla el caso en que se pase ningún argumento por
        // terminal (es decir, sólo "node app", sin crear, ni listar, ni nada)
        console.log('Atencion - Tienes que pasar una acción');
        break;

    default:
        // 19. Esta opción contempla el caso en que pasemos un tercer argumento
        // que no sea ni listar, ni crear, ni filtrar.
        console.log('No entiendo que quieres hacer');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}