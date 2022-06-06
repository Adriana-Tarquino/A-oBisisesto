import fs from "fs"

describe("Pruebas de calcular año bisiesto", () => {
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
    });
    it("Deberia mostrar el titulo en la segunda pagina", () => {
        const resultado = document.querySelector("#titulo");
        expect(resultado.innerHTML).toEqual("Calcular año bisiesto");
    });
    it("Deberia capturar el año", () => {
        const palabraAdivinar = document.querySelector("#anio");
        palabraAdivinar.value = 2000;
    
        const botonAdivinar = document.querySelector("#calcular");
        botonAdivinar.click();
        const resultado = document.querySelector("#resultado-div");
        expect(resultado.innerHTML).toEqual("El año es bisiesto");
    });
    it("Deberia capturar el año", () => {
        const palabraAdivinar = document.querySelector("#anio");
        palabraAdivinar.value = 2001;
    
        const botonAdivinar = document.querySelector("#calcular");
        botonAdivinar.click();
        const resultado = document.querySelector("#resultado-div");
        expect(resultado.innerHTML).toEqual("El año no es bisiesto");
    });
    
});