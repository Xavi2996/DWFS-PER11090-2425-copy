document.addEventListener('DOMContentLoaded', () => {
//Inicializar la matriz
let butacas = setup();
//Imprimir la matriz
console.log("Butacas: ", butacas);
// Función para reservar una butaca
valueInput(butacas);
});

// Función para inicializar la matriz de butacas
function setup() {
        // Definir el tamaño de la matriz de butacas
    const N = 10; // Número de filas y columnas
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    butacas[0][0].estado = true;
    butacas[9][1].estado = true;
    console.log(butacas);
    
    return butacas;
}

function valueInput(butacas){
    let seats = document.getElementById('seats');
    seats.addEventListener('change', () => {
        let value = seats.value;
        console.log(value);
        suggest(value, butacas);
    });
}


function suggest(sits, butacas){
    let mySet = new Set();
    let flag = false;
    if(butacas[0].length < sits){
        console.log("Apartado 1");
        mySet.clear();
        console.log(mySet);
    }else if(butacas[0].length >= sits){
        for(let i = butacas.length - 1; i >= 0; i--){
            let count = 0;
            mySet.clear();             
            for (let j = butacas[i].length - 1; j >= 0; j--){ 
                if(butacas[i][j].estado == false && flag == false){
                    count++;    
                    mySet.add(butacas[i][j].id);
                }else if(butacas[i][j].estado == true){
                    count = 0;
                    mySet.clear();
                }
                if(count == sits){
                    console.log("Apartado 3");
                    flag = true;
                    console.log(mySet);   
                }
            }    
        }
        if(flag == false){
            console.log("Apartado 2");
            mySet.clear();
            console.log(mySet);
        }
        
    }
   
}