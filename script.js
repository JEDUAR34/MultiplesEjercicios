// ((((((((((((((((1))))))))))))))))
// let n1= prompt("Ingrese un número:")
// let n2= prompt("Ingrese un el segundo número:")

// if (n1>n2) {
//     alert("n1 es mayor que n2")

// } else if(n2>n1){
//     alert("n2 es mayor que n1")
// }else{alert("Los números son iguales")}
// (((((((((((((((2)))))))))))))))

// let n1;
// let n2;

// do {
//     n1= prompt("Ingrese un número:")
//     n2= prompt("Ingrese un el segundo número:")

// } while (((n1 | n2)<=0) | isNaN(n1) | isNaN(n2)   );

// if (n1>n2) {
//     alert("n1 es mayor que n2")

// } else if(n2>n1){
//     alert("n2 es mayor que n1")
// }else{alert("Los números son iguales")}

// (((((((((((((((3)))))))))))))))

// let num=0;
// let conta=0;
// let sum=0;
// do {
//     sum=sum+num
//     num=parseInt(prompt("Ingrese el numero a sumar y promediar"))
//     conta++
// } while (num>0);
// let prom=sum/(conta-1)
// console.log(sum)
// alert(`La suma es ${sum} y el promedio es ${prom}`)

// (((((((((((((4)))))))))))))
// let num1=parseInt(prompt("Ingrese el número menor: "))
// let num2=parseInt(prompt("Ingrese el número mayor: "))
// let arr=[];
// for (let index = num1+1; index < num2; index++){
//     //   console.log(index)
//     arr.push(index)
// }

// arr.forEach((item) => {
//     console.log(item)

// });
// (((((((((((((((5)))))))))))))))
// let num1=parseInt(prompt("Ingrese el valor mínimo:"))
// let num2=parseInt(prompt("Ingrese el valor máximo:"))
// let arr=[]
// for (let index = num1; index <=num2; index++) {
//     let resul=index%2
//     if (resul==1) {
//          arr.push(index)
//     }
// }

// arr.forEach((item) => {
//     console.log(item)
// });
// ((((((((((((6))))))))))))

// let num = parseInt(prompt("Ingrese el número: "));
// let resul;
// for (let index = 1; index <= num; index++) {
// 	resul = num % index;
// 	if (resul == 0) {
// 		console.log(index);
// 	} else {
// 		console.log(`el ${index} no es divisor de ${num}`);
// 	}
// }
// ((((((((((((7))))))))))))
// let num;
// do {
//     num=prompt("Ingrese el número: ")
// } while (num<=0|isNaN(num));

//  let resul=num%2
// if (resul==0) {console.log(`El ${num} es par`)

// }else{console.log(`El ${num} es impar`)}
// (((((((8)))))))
// let num=prompt("Ingrese el número para saber la tabla de multiplicar: ")
// let arr=[]
// for (let index = 1; index <= 10; index++) {
//     arr.push(num*index)

// }

// arr.forEach((item) => {
//     console.log(item)
// });
// (((((((((((((9)))))))))))))
// let num1;
// let num2;
// let sum=document.querySelector(".sum")
// let rest=document.querySelector(".rest")
// let multi=document.querySelector(".multi")
// let divi=document.querySelector(".divi")
// do {
//      num1=parseInt(prompt("Ingrese el número 1: "))
//      num2=parseInt(prompt("Ingrese el número 2: "))
// } while (isNaN(num1)| isNaN(num2));

// let suma=num1+num2
// let resta=num1-num2
// let multip=num1*num2
// let divis=num1/num2

// sum.textContent=suma
// rest.textContent=resta
// multi.textContent=multip
// divi.textContent=divis

// console.log(suma)
// console.log(resta)
// console.log(multip)
// console.log(divis)
// ((((((((((10))))))))))
// let num=[];
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }
// console.log(num)

// (((((((((((11)))))))))))
// let num=[];
// let sum=document.querySelector(".sum")
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }

// sum.textContent=num
// console.log(num)
// ((((((((((12))))))))))
// let num=[];
// let sum=document.querySelector(".sum")
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }
// num.sort(function(a,b){return(a-b)})

// sum.textContent=num
// console.log(num)
// (((((((((((13)))))))))))
// let num=[];
// let sum=document.querySelector(".sum")
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }
// num.sort(function(a,b){return(b-a)})

// sum.textContent=num
// console.log(num)
// ((((((((((((14))))))))))))
// let num=[];
// let sum=document.querySelector(".sum")
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }
// num.sort(function(a,b){return(b-a)})

// sum.textContent=num
// console.log(num)
// console.log(num.length)
// (((((((((((15)))))))))))
// let num=[];
// let sum=document.querySelector(".sum")
// for (let index = 1; index <=6; index++) {
//     num.push(prompt(`Ingrese el número ${index}:`))
// }
// num.sort(function(a,b){return(a-b)})
// console.log(num)
// let usu=prompt("Ingrese el número que desea buscar: ")

// let nwarr=num.find((item)=>item==usu)
// // console.log(typeof())
// if (nwarr==usu) {console.log("El número si existe en el array")
// }else{console.log("El número NO existe en el array")}
// ((((((((((((((16))))))))))))))
// const names=document.getElementById("names")
// const surname=document.getElementById("surname")
// const pname=document.getElementById("pname")
// const psurname=document.getElementById("psurname")
// const page=document.getElementById("page")
// const regname=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
// const regage=/^[0-9,$]*$/

// const error=[]

// document.addEventListener("submit",(e)=>{
//     e.preventDefault()

// if (regname.test(names.value.trim())) {
//     pname.textContent=""
//     // alert(a)
// }else{
//     errorName(e)
//     const ename={
//         nombre:names
//     }
//     error.push(ename)
// }

// if (regname.test(surname.value.trim())) {

//     // alert(a)
// }else{
//     const esurname={
//         nombre:surname
//     }
//     error.push(esurname)
// }

// console.log(error)
// if (error.length===0) {
//     alert(`El nombre es ${names.value} y el apellido es ${surname.value}`)
// }

// })
//  const errorName=(e)=>{
//     pname.textContent="Nombre incorrecto"
//  }

// (((((((((((17)))))))))))
// const names = document.querySelector(".name");
// const list = document.querySelector(".list");
// const fragment = document.createDocumentFragment();

// document.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	guardar(e);
// 	pintarnombre(e);
// });
// // console.log("bien");
// const nombre = [];
// let data;
// const guardar = (e) => {
// 	nombre.push(names.value);
// 	// console.log(nombre);
// 	data = localStorage.setItem("data", JSON.stringify(nombre));
// };
// let datos;
// datos = localStorage.getItem(datos, data);

// const pintarnombre = (e) => {
// 	datos = JSON.parse(localStorage.getItem("data"));
// 	console.log(datos);
// 	if (datos.length >= 5) {
// 		console.log(datos.length);
// 		console.log(datos);
// 		datos.forEach((item) => {
// 			console.log(item);
// 			const li = document.createElement("li");
// 			li.textContent = item;
// 			fragment.appendChild(li);
// 		});
// 	} else {
// 		return;
// 	}
// 	list.appendChild(fragment);
// 	borrar();
// };

// const borrar = () => {
// 	localStorage.removeItem("data");
// };

// ((((((((((18))))))))))

// const names = document.querySelector(".name");
// const list = document.querySelector(".list");
// const fragment = document.createDocumentFragment();

// document.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	guardar(e);
// 	pintarnombre(e);
// });

// document.addEventListener("click", (e) => {
// 	if (e.target.matches(".boton")) {
// 		borrar(e);
// 		console.log("bien");
// 	}
// });
// // console.log("bien");
// let nombre = [];
// let data;
// const guardar = (e) => {
// 	nombre.push(names.value);
// 	data = localStorage.setItem("data", JSON.stringify(nombre));
// };
// let datos;
// datos = localStorage.getItem(datos, data);

// const pintarnombre = (e) => {
// 	datos = JSON.parse(localStorage.getItem("data"));
// 	if (datos.length >= 5) {
// 		nombre = [];
// 		console.log(datos.length);
// 		datos.forEach((item) => {
// 			const li = document.createElement("li");
// 			li.textContent = item;
// 			li.className = "casa";
// 			fragment.appendChild(li);
// 		});
// 	} else {
// 		return;
// 	}
// 	list.appendChild(fragment);
// 	datos = [];
// };

// const borrar = (e) => {
// 	localStorage.clear();
// 	list.innerHTML = "";
// };

// (((((((((((19)))))))))))
// const container = document.querySelector(".container");
// const template = document.querySelector(".template");
// const fragment = document.createDocumentFragment();

// document.addEventListener("DOMContentLoaded", (e) => {
// 	document.addEventListener("click", (e) => {
// 		if (e.target.matches(".boto")) {
// 			info(e);
// 		}
// 	});
// });

// const info = async (e) => {
// 	try {
// 		const datos = await fetch("https://jsonplaceholder.typicode.com/users");
// 		const data = await datos.json();
// 		console.log(data);
// 		pintarDatos(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// const pintarDatos = (data) => {
// 	data.forEach((item) => {
// 		const clone = template.content.cloneNode(true);
// 		clone.querySelector(".nombre").textContent = item.name;
// 		clone.querySelector(".usua").textContent = item.username;
// 		clone.querySelector(".correo").textContent = item.email;
// 		clone.querySelector(".tele").textContent = item.phone;
// 		clone.querySelector(".empre").textContent = item.company.name;
// 		fragment.appendChild(clone);
// 	});
// 	container.appendChild(fragment);
// };

// ((((((((((20))))))))))
// const hoy = new Date();
// const dia = hoy.getDate();
// const mes = hoy.getMonth() + 1;
// const año = hoy.getFullYear();
// const fecha = `${dia}-${mes}-${año}`;
// console.log(fecha);

// const hora = new Date();
// const hor = hora.getHours();
// const min = hora.getMinutes();
// const segun = hora.getSeconds();
// const ho = `${hor}:${min}:${segun}`;
// console.log(ho);

// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomIntInclusive(1, 150));
// (((((((22)))))))

// ((((((((((24))))))))))
// const formulario = document.querySelector(".form");
// const body = document.querySelector("body");

// document.addEventListener("click", (e) => {
// 	if (e.target.matches(".btn")) {
// 		e.preventDefault();
// 		const dato = new FormData(formulario);
// 		const [color] = [...dato.values()];
// 		pintar(color);
// 	}

// 	if (e.target.matches(".p1")) {
// 		body.style.background = "#ff0000";
// 	}

// 	if (e.target.matches(".p2")) {
// 		body.style.background = "#ffa07a";
// 	}

// 	if (e.target.matches(".p3")) {
// 		body.style.background = "#7cfc00";
// 	}
// });

// const pintar = (color) => {
// 	body.style.background = color;
// };

// const a = [1, true, "HOLA", ["A", "B", "C"]];
// console.log(a);
// console.log(a[3]);
// console.log(a[3][2]);

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < a.length; i++) {
// 	if (a[i] % 2 === 1) {
// 		continue;
// 	}
// 	console.log(a[i]);
// }

// const persona = {
// 	nombre: "juan",
// 	apellido: "perez",
// 	edad: 14,
// 	juego: function (num) {
// 		const casa = num;
// 		console.log(casa);
// 	},
// };

// const { nombre, apellido, edad } = persona;
// persona.juego(5);

// console.log(nombre, apellido, edad);

// const num = ["x", "y", "z"];
// const [a, b, c] = num;
// console.log(a);

// const arr1 = [0, 2];
// const arr2 = [1, 3];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// class animal {
// 	constructor(nombre, edad) {
// 		(this.nombre = nombre), (this.edad = edad);
// 	}
// 	saludar() {
// 		console.log(`Hola ${this.nombre}`);
// 	}
// 	static juego() {
// 		console.log("hola");
// 	}
// }

// animal.juego();
// const juan = new animal("juan", 25);
// console.log(juan);
// console.log(juan.nombre);
// console.log(juan.edad);
// juan.saludar();

// console.log(Date());

// const fecha = new Date();
// const hora = fecha.getHours();
// const dia = fecha.getDate();
// const mes = fecha.getMonth() + 1;
// const año = fecha.getFullYear();
// const minu = fecha.getMinutes();

// console.log(`${dia} ${mes} ${año} ${hora} ${minu}`);
// console.log(fecha);
// console.log(dia);
// console.log(Date.now());
// import { casa, hola } from "./j.js";
// console.log(casa);
// console.log(hola);

// function mifuncion(cadena) {
// 	// console.log(texto);
// 	console.log(typeof cadena);
// 	const regexp = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
// 	if (regexp.test(cadena) && typeof cadena === "string") {
// 		console.log(cadena.length);
// 	} else {
// 		console.log("Ingrese una cadena de solo texto");
// 	}
// 	// console.log(texto);
// }
// const hola = {
// 	nombre: "juan",
// 	edad: 5,
// };

// const miFuncion = function (cadena) {
// 	// console.log(texto);
// 	console.log(typeof cadena);
// 	const regexp = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
// 	if (regexp.test(cadena) && typeof cadena === "string") {
// 		console.log(cadena.length);
// 	} else {
// 		console.log("Ingrese una cadena de solo texto");
// 	}
// 	// console.log(texto);
// };

// miFuncion("Hola");
// mifuncion("Hola");
// function miFuncion(texto, posi) {
// 	const pala = texto;
// 	console.log(pala.length);
// 	let i = 0;
// 	let casa = "";
// 	for (const item of pala) {
// 		if (i == posi) {
// 			break;
// 		}
// 		casa += item;
// 		i++;
// 	}
// 	// const impri = casa.toString();
// 	return console.log(casa);
// }

// miFuncion("Hola Mundo", 10);

// function miFuncion(texto) {
// 	const data = texto;
// 	console.log(data.length);
// 	let datos = "";
// 	let i = 1;
// 	let arr = [];
// 	for (const item of data) {
// 		// console.log(item);
// 		if (item == " " || i > data.length) {
// 			arr.push(datos);
// 			datos = [];
// 		} else {
// 			datos += item;
// 		}
// 		i++;
// 		// console.log(i);
// 	}
// 	arr.push(datos);
// 	return console.log(arr);
// }

// miFuncion("Hola mundo casita que haces");

// function miFuncion(texto, num) {
// 	let text = "";
// 	for (let i = 1; i <= num; i++) {
// 		text += texto + " ";
// 	}
// 	return text;
// }

// console.log(miFuncion("hola mundo", 3));

// function miFuncion(texto, data) {
// 	const cantidad = texto.split(" ");
// 	let i = 0;
// 	cantidad.forEach((item) => {
// 		if (item === data) {
// 			i++;
// 		}
// 	});
// 	return console.log(i);
// }

// miFuncion("la la la la la", "la");

// function miFuncion(texto, data) {
// 	const reg = new RegExp(data, "ig");
// 	const dato = texto.replace(reg, "");
// 	return console.log(dato);
// }

// miFuncion("xyz1,xyz2,xyz3,xyz4,xyz5", "1");

// const alea = (min, max) => {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return console.log(Math.floor(Math.random() * (max - min + 1) + min));
// };

// alea(501, 600);

// const facto = (num) => {
// 	let fact = 1;
// 	for (let i = num; i >= 1; i--) {
// 		fact = fact * i;
// 		// console.log(fact);
// 		// console.log(i);
// 	}

// 	return console.log(fact);
// };

// facto(6);

// const primo = (num) => {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		const data = num % i;
// 		if (data === 0) {
// 			sum++;
// 		}
// 	}
// 	if (sum === 2) {
// 		return console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// };

// primo(11);

//

// const miFuncion = (email) => {
// 	const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
// 	console.log(regexp.test(email));
// 	if (regexp.test(email)) {
// 		return console.log(`El email ${email} es correcto`);
// 	} else {
// 		console.log("Ingrese un email correcto");
// 	}
// };

// miFuncion("jeduardodiazro@gmail.com");

// const miFuncion = (palabra) => {
// 	const vocales = "aáeéiíoóuú";
// 	const conso = /^[a-zA-ZñÑ]+$/;
// 	let i = 0;
// 	let j = 0;
// 	for (const item of palabra) {
// 		if (vocales.includes(item)) {
// 			i++;
// 		} else if (conso.test(item)) {
// 			j++;
// 		}
// 	}
// 	return console.log(`La cantidad de vocales es ${i} y consonantes es ${j}`);
// };

// miFuncion("je");

// const miFuncion = function (arr) {
// 	const arr2 = [];
// 	arr.forEach((item) => {
// 		arr2.push(Math.pow(item, 2));
// 	});
// 	return console.log(arr2);
// };

// miFuncion([2, 4, 6]);

// const miFuncion = (arr) => {
// 	const arrpa = [];
// 	const arrimpa = [];
// 	arr.forEach((item) => {
// 		if (item % 2 === 0) {
// 			arrpa.push(item);
// 		} else {
// 			arrimpa.push(item);
// 		}
// 	});
// 	const obje = {
// 		pares: arrpa,
// 		impares: arrimpa,
// 	};
// 	return console.log(obje);
// };

// miFuncion([1, 1, 1, 1, 1]);

// const arr = [1, 2, 3, 4, 5, "casa", 1, "casa", "vaca"];

// const arr2 = new Set(arr);
// arr2.forEach((item) => {
// 	console.log(item);
// });

// class Pelicula {
// 	constructor({ id, titulo, director, año, pais, generos, calificacion }) {
// 		this.id = id;
// 		this.titulo = titulo;
// 		this.director = director;
// 		this.año = año;
// 		this.pais = pais;
// 		this.generos = generos;
// 		this.calificacion = calificacion;

// 		// this.validarCadena("id", id);
// 		this.validarID(id);
// 		this.validarTitulo(titulo);
// 		this.validarDirector(director);
// 		this.validarEstreno(año);
// 		this.validarPais(pais);
// 		this.validarGenero(generos);
// 		this.validarCalificacion(calificacion);
// 	}

// 	validarCadena(propiedad, valor) {
// 		if (valor.length === 0) {
// 			return console.log(`La propiedad ${propiedad} está vacia`);
// 		}
// 		if (typeof valor !== "string") {
// 			return console.log(`${valor} no es una cadena de texto `);
// 		}
// 		return true;
// 	}

// 	validarNumero(propiedad, valor) {
// 		if (typeof valor !== "number") {
// 			return console.log(`${valor} no es un número`);
// 		}
// 		return true;
// 	}

// 	validarArray(propiedad, valor) {
// 		if (!(valor instanceof Array)) {
// 			return console.log(`El ${propiedad} debe ser un Array`);
// 		}
// 		if (valor.length === 0) {
// 			return console.log("El Array está vacio");
// 		}
// 		return true;
// 	}

// 	validarID = (id) => {
// 		if (this.validarCadena("ID", id)) {
// 			const regexp = /^([a-z]{2}([0-9]{7}))$/;
// 			if (!regexp.test(id)) {
// 				return console.log(
// 					`El ID ${id} debe contener 2 letras iniciales y luego 7 números`
// 				);
// 			}
// 		}
// 	};

// 	validarTitulo = (titulo) => {
// 		if (this.validarCadena("Título", titulo)) {
// 			if (titulo.trim().length == 0) {
// 				return console.log(`El titulo ${titulo} está vacio`);
// 			} else if (titulo.trim().length > 100) {
// 				return console.log(
// 					`El titulo ${titulo} no debe superar los 100 caracteres`
// 				);
// 			}
// 		}
// 	};

// 	validarDirector = (director) => {
// 		if (this.validarCadena("Director", director)) {
// 			if (director.trim().length == 0) {
// 				return console.log(`El campor Director ${director} está vacio`);
// 			} else if (director.trim().length > 50) {
// 				return console.log(
// 					`El campo Director ${director} no debe superar los 50 caracteres`
// 				);
// 			}
// 		}
// 	};

// 	validarEstreno = (año) => {
// 		const regexp2 = /^([0-9]{4})$/;
// 		if (this.validarNumero("Año", año)) {
// 			if (Math.sign(año) === -1) {
// 				return console.log(`El año ${año} debe ser un número positivo`);
// 			} else if (!regexp2.test(año)) {
// 				return console.log(`El Año ${año} debe tener 4 dígitos`);
// 			}
// 		}
// 	};

// 	validarPais = (pais) => {
// 		if (this.validarArray("Pais", pais)) {
// 			pais.forEach((item) => {
// 				this.validarCadena("item", item);
// 			});
// 		}
// 	};

// 	validarGenero = (generos) => {
// 		if (this.validarArray("Genero", generos)) {
// 			generos.forEach((item) => {
// 				this.validarCadena("item", item);
// 			});
// 		}
// 		generos.forEach((item) => {
// 			if (Pelicula.generos.includes(item)) {
// 			} else {
// 				return console.log(
// 					`El género ${item} no se encuentra dentro de los géneros correctos, los géneros correctos son ${Pelicula.generos.join(
// 						","
// 					)}`
// 				);
// 			}
// 		});
// 	};

// 	validarCalificacion = (calificacion) => {
// 		if (this.validarNumero("calificación", calificacion)) {
// 			if (calificacion < 0 || calificacion > 10) {
// 				return console.log(
// 					`La calificación ${calificacion} debe estar entre 0 y 10`
// 				);
// 			}
// 		}
// 		return (this.calificacion = calificacion.toFixed(1));
// 	};

// 	fichaTecnica() {
// 		console.log(
// 			`Titulo: ${this.titulo};\nID: ${this.id};\nDirector: ${this.director};\nAño de estreno: ${this.año};\nPais de origen: ${this.pais};\nGéneros: ${this.generos};\nCalificación: ${this.calificacion};`
// 		);
// 	}
// 	static generos = ["Action", "Adult", "Adventure", "Animation"];
// }

// const peli1 = new Pelicula({
// 	id: "tt1234567",
// 	titulo: "la casita",
// 	director: "pepito perez",
// 	año: 2864,
// 	pais: ["Colombia"],
// 	generos: ["Action"],
// 	calificacion: 8.56,
// });

// const arr4 = [
// 	{
// 		id: "tt1234567",
// 		titulo: "la casita",
// 		director: "pepito perez",
// 		año: 2864,
// 		pais: ["Colombia"],
// 		generos: ["Action"],
// 		calificacion: 8.56,
// 	},

// 	{
// 		id: "xx1234567",
// 		titulo: "lavacas",
// 		director: "MARIA",
// 		año: 1936,
// 		pais: ["URUGUAY"],
// 		generos: ["Adult"],
// 		calificacion: 9,
// 	},

// 	{
// 		id: "zz9876543",
// 		titulo: "Buena pelicula",
// 		director: "CArlitos",
// 		año: 2012,
// 		pais: ["EEUU", "Francia"],
// 		generos: ["Adventure"],
// 		calificacion: 7.6,
// 	},
// ];

// peli1.fichaTecnica();

// arr4.forEach((item) => {
// 	const peli = new Pelicula(item);
// 	peli.fichaTecnica();
// 	// let casita = "hola vaca";
// 	// localStorage.setItem("peli", JSON.stringify(peli));
// });

// if (localStorage.getItem("peli")) {
// 	todos = JSON.parse(localStorage.getItem("todos"));
// 	alert("bien");
// }

// const casa = ["casita", 1, 2, 3, 1, true, "casa", "casa"];
// console.log(new Set(casa));

// let texto = "hola carlitos";

// const hablar = (texto) =>
// 	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);
// window.addEventListener("resize", () => {
// 	console.clear();
// 	console.log(window.innerWidth);
// 	console.log(window.innerHeight);
// 	console.log(window.outerWidth);
// 	console.log(window.outerHeight);
// });
// window.addEventListener("load", (e) => {
// 	console.clear();
// 	console.log(window.screenX);
// 	console.log(window.screenY);
// });

// EJERCICIOS DOM VIDEO 2
