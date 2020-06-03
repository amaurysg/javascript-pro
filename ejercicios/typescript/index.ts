/* console.log("Hola, TypeScript, espero seamos amigos !");

function add(a: number, b: number) {
  return a + b;
}
const sum = add(2, 5);

console.log(sum);
 */

//Boolean

/* let muted: boolean = true;
muted = false; */
/* muted = "callado" */

/* let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador; */

//string
/* let numbre: string = "Amaury";
let saludo = `Hola mi nombre es ${numbre}`; */

//arreglo de solo string
/* let people: string[] = [];
people = ["Amaury", "Julio"];
people.push("855"); */

//arreglo de string and Numbers
/* let pandn: Array<string | number> = [];
pandn.push("Mario");
pandn.push(5); */

//Enum conjunto de valores
/* enum Colores {
  Rojo = "Rojo",
  Verde = "Verde",
  Amarillo = "Amarillo",
} */
/* let colorfavorito: Colores = Colores.Rojo;
console.log(`Mi color favorito es ${colorfavorito}`);
 */
//Any, para definir la variable comodin como cualquier tipo de objeto
/* let comodin: any = "Joker";
comodin = { type: "Amaury" }; */

//Object, para especificar como objeto un objeto :D
/* let algunObjeto: object = { type: "Amaury" };  */

//Funciones

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 5);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addf = createAdder(4);
const fourPlus6 = addf(6);

function fullName(firstName: string, lastName?:string){
  return `${firstName} ${lastName}`
}
const amauryFull = fullName("Amaury", "Soto");
const amaury = fullName("Amaury",)
