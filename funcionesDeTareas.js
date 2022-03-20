// 1. Requerimos el módulo file system NATIVO DE NODE para poder manipular
// el sistema de archivos de nuestra computadora: crear y usar archivos
// en el caso puntual de esta función: de tipo JSON
const fs = require('fs');

// 2. Creamos un object literal con toda la lógica que nos pide la consigna
let archivoTareas = {
    // 3. Arbitrariamente, colocamos el nombre del archivo que contiene el
    // JSON para no tener que modificarlo en cada aparición cada vez que lo 
    // llamemos, sino simplemente modificar el string en la línea de abajo 
    // y dejar las invocaciones a la variable archivo intactas.
    archivo: './tareas.json',

    // 4. Método (o función) que se encarga de los dos primeros pasos del ciclo
    leerJSON: function () {
        // 5. Leemos el archivo desde el disco, revivimos y asignamos como JSON
        const contenidoJSON = fs.readFileSync(this.archivo, 'utf-8')
        // 6. Lo convertimos a OBJETO JAVASCRIPT para poder manipularlo
        return JSON.parse(contenidoJSON);
    },
 
    // 5. Aquí se incluyen los dos últimos pasos del ciclo, inversos a leerJSON
    escribirJSON: function (tareas) {
        // 6. convertimos el objeto JS (Array de tareas) a JSON
        const jsonActualizado = JSON.stringify(tareas);
        // 7. ...para poder guardarlo dentro del archivo de extensión .json
        fs.writeFileSync(this.archivo, jsonActualizado);
    },
     
    // 8. Método que engloba todo el ciclo, leer/escribiJSON más el intermedio
    guardarTarea(tarea) {
        // 9. Recuperamos el arreglo de tareas guardado en nuestro archivo JSON
        let tareas = this.leerJSON();
        // 10. Insertamos dentro la tarea nueva que recibimos como parámetro
        tareas.push(tarea);
        // 11. Finalmente llamamos escribirJSON para convertir a JSON y guardar
        this.escribirJSON(tareas);
        // (Nota: también puede hacerse con Spread Operator, como figura abajo)
        // this.escribirJSON([tarea, ...tareas]);
        // (La línea anterior reemplaza las líneas 35 y 37 juntas.
    },

    // 12. Ahora, la última consigna: listar tareas filtradas por estado
    filtrarPorEstado(estado) {
        // 13. Recuperamos con formato JS nuestro arreglo desde archivo JSON
        let tareas = this.leerJSON();
        // 14. Realizamos el filtrado, para que queden sólo las tareas cuyo
        // atributo .estado sea igual al valor ingresado por parámetro
        let tareasFiltradas = tareas.filter(tarea => { return tarea.estado == estado; } );
        
        return tareasFiltradas;
    }
}

// 15. Exportamos el módulo completo para poder usarlo en app.js
module.exports = archivoTareas;