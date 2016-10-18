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

// EJERCICIO 7
// calcular promedio de estatura según cantidad de personas

function promedio (ArrayEstatura){
	var promedioEstatura = 0;

	for( var i = 0; i < ArrayEstatura.length; i++){
			promedioEstatura = promedioEstatura + ArrayEstatura[i];

		}
		return promedioEstatura/ArrayEstatura.length;
		console.log(promedio);
}

// EJERCICIO 8
// Ordenar una serie de numeros de menor a mayores
// function comparacion (a, b){
// 	return a - b  
// }

function orden (serieNumeros){

	var ordenados = serieNumeros.sort((a,b)=>a-b);

	return ordenados;
}

// EJERCICIO 9 
// Se requieres saber cuantas ventas:
// > a 1000
// > a 500 pero < o = a 1000
// < = a 500

// se guardará en casilla [0]] la cantidad de ventas, y en [1] el valor de cada ventas
// // después se llama a las posiciones

function tikiTaka(arregloVentas){
  var menos500 = [0,0];
  var entre500y1000 = [0,0];
  var mas1000 = [0,0];

  for(var i = 0 ; i < arregloVentas.length ; i++){
    if(arregloVentas[i]<500){
      menos500[0]=menos500[0]+1;
      menos500[1]=menos500[1]+arregloVentas[i];
    }else if(arregloVentas[i]>1000){
      mas1000[0]=mas1000[0]+1;
      mas1000[1]=mas1000[1]+arregloVentas[i];
    }else{
      entre500y1000[0]=entre500y1000[0]+1;
      entre500y1000[1]=entre500y1000[1]+arregloVentas[i];
    }
  }
  console.log(menos500[0]+" Ventas menores de $500 por: $"+menos500[1]);
  console.log(entre500y1000[0]+" Ventas entre los $500 y $1000 por: $"+entre500y1000[1]);
  console.log(mas1000[0]+" Ventas sobre $1000 por: $"+mas1000[1]);
}

// EJERCICIO 10
// Programa que sume el cuadrado de dos numeros

function sumaCuadrados (){
	var numeroUno = prompt("Ingresa un numero entero");
	var numeroDos = prompt("Ingresa otro numero entero");
	var resultadouno = (parseInt(numeroUno) + parseInt(numeroDos));
	var resultado = (parseInt(resultadouno) * parseInt(resultadouno));
	
	alert("El cuadrado de la suma de los números que ingresaste es " + resultado);

}


// Lo logré :)


