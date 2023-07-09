function eliminarUsuario(id){
    const fila = buscarFila(id)
    sheetUsuarios.deleteRow(fila);
}