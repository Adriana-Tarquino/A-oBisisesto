import es_Bisiesto from "./bisiesto.js" 
import Mensaje from "./mesaje.js"
describe("Año bisiesto", () => {
     it("Deberia volver true para el año 4", () => {
        const repuesta = es_Bisiesto(4);
        expect(repuesta).toEqual(true);
    }); 
    it("Deberia volver false para el año 5", () => {
        const repuesta = es_Bisiesto(5);
        expect(repuesta).toEqual(false);
    }); 
    it("Deberia volver true para el año 2000", () => {
        const repuesta = es_Bisiesto(2000);
        expect(repuesta).toEqual(true);
    });
    it("Deberia volver true para el año 2004", () => {
        const repuesta = es_Bisiesto(2004);
        expect(repuesta).toEqual(true);
    }); 
    it("Deberia volver true para el año 2100", () => {
        const repuesta = es_Bisiesto(2100);
        expect(repuesta).toEqual(false);
    }); 
    it("Deberia volver Es un año bisiesto", () => {
        const repuesta = Mensaje(true);
        expect(repuesta).toEqual("El año es bisiesto");
    }); 
    it("Deberia volver El año no es bisiesto", () => {
        const repuesta = Mensaje(false);
        expect(repuesta).toEqual("El año no es bisiesto");
    }); 
});

