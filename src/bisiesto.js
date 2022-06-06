function es_Bisiesto(año){
    if(año == 4){
        return true;
    }
    if(año % 100 == 0){
        return true;
    }
    return false;
}

export default es_Bisiesto;	