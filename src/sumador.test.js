import {parrafo,conteo} from "./sumador.js";

describe("parrafo", () => {
  it("deberia devolver la cadena", () => {
    expect(parrafo("hola como estan")).toEqual("hola como estan");
  });
  it("deberia devolver la cadena", () => {
    expect(parrafo("hola miami como esta")).toEqual("hola miami como esta");
  });
  it("deberia devolver numero de la cadena", () => {
    expect(conteo("hola mundo")).toEqual(10);
  });
  it("deberia devolver numero de la cadena", () => {
    expect(conteo("hola gente de bolivia")).toEqual(21);
  });
});
