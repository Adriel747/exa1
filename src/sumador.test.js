import parafo from "./sumador.js";

describe("parrafo", () => {
  it("deberia devolver la cadena", () => {
    expect(parafo("hola como estan")).toEqual("hola como estan");
  });
});
