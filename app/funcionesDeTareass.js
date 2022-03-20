const fs=require('fs');

let archivo={

    leer:function () { 
        return JSON.parse(fs.readFileSync(__dirname +'/tareas.json', 'utf8'));
    },
    
    crear:function (tarea) {
        let t=this.leer(); 
        t.push(tarea);
        return fs.writeFileSync(__dirname +'/tareas.json', JSON.stringify(t));
    },
    
    filtrar:function (a) {       
        let t=this.leer();
        let x=t.filter(tarea => { return tarea.estado === a; } );
        return x;         
    },
        
    eliminar:function (estado) {       
        let k=this.leer();
        let x=k.filter(tarea => { return tarea.estado != estado; } );
        fs.writeFileSync(__dirname +'/tareas.json', JSON.stringify(x));
        return x;     
    },
    
    editar:function (titulo) {
        let k=this.leer();        
        for (var i = 0; i < k.length; i++) {
            if(k[i].titulo===titulo){
                if(k[i].estado==="pendiente"){
                    k[i].estado = "enProceso";
                }else{
                    k[i].estado = "terminada";
                }
            }            
           }        
          fs.writeFileSync(__dirname +'/tareas.json', JSON.stringify(k));
        return k;     
         
    }, 
    
}


module.exports = archivo;







