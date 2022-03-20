let funciones = require('./funcionesDeTareass');

switch (process.argv[2]) {
    case 'listar':
      console.log(funciones.leer());           
      break;

    case 'crear':
       console.log(funciones.crear({titulo: process.argv[3], estado: 'pendiente' }));     
      break;
 
    case 'filtrar':
        console.log(funciones.filtrar(process.argv[3]));        
        break;

    case 'eliminar':
        console.log(funciones.eliminar(process.argv[3]));           
        break;

    case 'editar':
        console.log(funciones.editar(process.argv[3]));           
        break;

    case undefined:
        console.log('Atencion - Tienes que pasar una acción');
      break;    
    default:
        
        console.log('No entiendo que quieres hacer');    
  }