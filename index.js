let rta = confirm("¿Desea Ingresar a la Calculadora? \n SI = Aceptar -- NO = Cancelar");

while( rta === true){
    
    let opcion = parseInt(prompt("Elegir la operacion que desea realizar, opcion del 1 al 4: \n 1 = suma \n 2 = resta \n 3 = multiplicacion \n 4 = Division"));

    let numero1 = parseInt(prompt("Ingresar un numero: "));
    let numero2 = parseInt(prompt("Ingresar otro numero: "));

if (opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4 ){
    switch(opcion){

        case 1: 

        let resultado = numero1 + numero2;

        alert("El resultado de la suma es: " + resultado);

            break;

        case 2:

        let resultado1 = numero1 - numero2;

        alert("El resultado de la resta es: " + resultado1);

            break;

        case 3: 

        let resultado2 = numero1 * numero2;

        alert("El resultado de la multiplicacion es: " + resultado2);

            break;

        case 4: 

        let resultado3 = numero1 / numero2;

        alert("El resultado de la division es: " + resultado3);

            break;
    }  

}
rta = confirm("¿Desea seguir operando? \n SI = Aceptar -- NO = Cancelar");
if (opcion < 0 || opcion > 4){
        alert("Debes ingresar un numero del 1 al 4, GRACIAS!");
    }
    
} 


if (rta === false){
   alert("¡Hasta la proxima! ACEPTAR PARA SALIR");
}
