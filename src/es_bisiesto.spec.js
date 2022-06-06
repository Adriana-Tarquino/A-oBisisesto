import es_Bisiesto from "./bisiesto.js" 

describe("Año bisiesto", () => {
     it("Deberia volver true para el año 4", () => {
        const repuesta = es_Bisiesto(4);
        expect(repuesta).toEqual(true);
    }); 
});

