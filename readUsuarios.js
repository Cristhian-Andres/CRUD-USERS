function readUsuarios(){
    const dataUsuarios = sheetUsuarios.getDataRange().getDisplayValues();
    dataUsuarios.shift();
    if(dataUsuarios == 0){
        return 'No hay usuarios'
    }
    console.log(dataUsuarios);
    return dataUsuarios;
}