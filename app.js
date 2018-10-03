var lib = require('readline');
var interface = lib.createInterface({
input: process.stdin,
output: process.stdout
});
interface.question('Ingrese una cadena :', function(cadena) {
	var contParAbre = 0;
	var contParCie = 0;
	var contLlaveA = 0;
	var contLlaveC = 0;
	var contCorcA = 0;
	var contCorcC = 0;
	
	for(var i = 0; cadena.lenght; i++)
	{
		if(cadena[i] == "("){
			contParAbre += 1;
			console.log("Numero de parentesis que abren: " + contParAbre);
		}
		if(cadena[i] == ")"){
			contParCie += 1;
			console.log("Numero de parentesis que cierran: " + contParCie);
		}
		if(cadena[i] == "["){
			contLlaveA += 1;
			console.log("Numero de llaves que abren: " + contLlaveA);
		}
		if(cadena[i] == "]"){
			contLlaveC += 1;
			console.log("Numero de llaves que abren: " + contLlaveC);
		}
		if(cadena[i] == "{"){
			contCorcA += 1;
			console.log("Numero de llaves que abren: " + contCorcA);
		}
		if(cadena[i] == "]"){
			contCorcC += 1;
			console.log("Numero de llaves que abren: " + contCorcC);
		}
		if(i == cadena.lenght){
			break;
		}
	}
	
	if(contCorcA == contCorcC && contLlaveA == contLlaveC && contParAbre == contParCie){
		console.log("Cadena Correcta");
	}
	else{
		console.log("Cadena Incorrecta");
	}
	
	interface.close();
});
