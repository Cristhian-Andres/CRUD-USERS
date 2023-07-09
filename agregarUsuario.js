function agregarUsuario(form){
    
    const id = crearNuevoID();
    const nombre = form.nombreUsuario;
    const apellido = form.apellidoUsuario;
    const sexo = form.sexoUsuario;
    const email = form.emailUsuario;
    const fechaNacimiento = form.fechaNacimientoUsuario;
    const telefono = form.telefonoUsuario;

    sheetUsuarios.appendRow([
      id, nombre, apellido, sexo, email, fechaNacimiento, telefono
    ])
    return "Usuario Agregado";
    console.log(form)
}

function crearNuevoID(){
    let id = 1;
    if(sheetUsuarios.getLastRow() === 1){
      return id;
    }
    const ids = sheetUsuarios.getRange(2,1,sheetUsuarios.getLastRow() -1, 1).getValues().map(id => id[0]);
    console.log(ids)
    let maxId = 0;
    ids.forEach(id => {
        if( id > maxId){
            maxId = id;
        }
    })
    return maxId + 1;
}
function testId(){
    console.log(crearNuevoID());
}


