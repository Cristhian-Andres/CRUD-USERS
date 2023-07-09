function editarUsuario(form){
    const fila = buscarFila(form.usuarioId)
    console.log(fila)
    sheetUsuarios.getRange(fila,2,1,sheetUsuarios.getLastColumn()-1).setValues([[
        form.nombreUsuario,
        form.apellidoUsuario,
        form.sexoUsuario,
        form.emailUsuario,
        form.fechaNacimientoUsuario,
        form.telefonoUsuario
    ]])
    return 'Usuario Editado'
}

function buscarFila( id = 6){
    const ids = sheetUsuarios.getRange(2,1,sheetUsuarios.getLastRow()-1,1).getValues().map(id => id[0]);
    console.log(ids)
    const index = ids.indexOf(Number(id));
    console.log(index);
    const row = index + 2;
    return row
}
