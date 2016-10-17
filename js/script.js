// EJERCICIOS DE JS

// EJERCICIO 1
// Suceción de Fibonacci

// numero = límite se ciclos 
function sucesion (numero) {
	if (numero==0) {
		return 0;
	} else if (numero == 1){
		return [0, 1];
	}
	var arrayFibonacci = [0, 1];
	for ( var i=2 ; i<=numero ; ++i){
	var num1 = arrayFibonacci[i-2]
	var num2 = arrayFibonacci[i-1]
		arrayFibonacci.push(num1 + num2);
	}
	return arrayFibonacci;
}

// EJERCICIO 2

// Carretera aguas calientes
// se deben encontrar en el km 110
function carretera (){
	var persona1 = 150;
	var persona2 = 70;

	for (persona1; persona1>=0; persona1--){
		if(persona1 == persona2){
			return persona1;
		}
	persona2++;
	}
	return false;
}

// EJERCICIO 3
// Contar numeros menores a 0, y mayores a 0
function mayores0(arrayNum) {
	var numMayores = 0;
	var numMenores = 0;

	for (var i=0 ; i<arrayNum.length; ++i){
		if (arrayNum[i] > 0) {
			numMayores++;
		} else {
			numMenores++;
		}
	}
	console.log( "Numeros menores o iguales a 0 "+ numMenores);
	console.log( "Numeros mayores a 0 "+ numMayores);
}

// EJERCICIO 4
// El numero menor entre 3 numeros enteros

function numeroMenor(numero1, numero2, numero3){
	if(numero1<=numero2 && numero1<=numero2){
		return numero1;
	}
	// retorna primer numero entero
	else if (numero1<=numero2 && numero2<=numero3){
		return numero2;
	// retorna segundo numero entero
	} 
	else {
		return numero3;
	//  si no se cumplen los anteriores, retorna el ultimo numero entero
	}
}

// EJERCICIO 5 
// Ver si un numero es par o no, se le entrega numero entero
function par(entero){
	var cadena = "";

	if(entero%2 == 0){
		cadena = entero + " es número par";
	} 
	else {
		cadena = entero + " es número inpar";
	}
	// se mostrará el texto en html
	document.getElementById("textohtml").innerHTML = cadena;
}

// EJERCICIO 6
// calcular sueldo según horas trabajadas

function calcularHoras (arrayHoras, valorHora){
	var horas = 0;
	var total = 0;

	for( var i=0; i < arrayHoras.length(); i++){
		horas = horas + arrayHoras[i];
	}
	total = horas * valorHora;
	console.log("El sueldo es " + total);
}




