function es_Bisiesto(año){
    if((año % 100 != 0)&&(año % 4 == 0)||(año % 400 == 0)) {
        return true;
    }
    return false;
}

export default es_Bisiesto;	