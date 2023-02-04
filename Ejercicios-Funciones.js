//Crea un archivo JS que contenga las siguientes líneas.


//- Una función sin parámetros que devuelva siempre "true".

function devuelvoTrue(){
    return true;
}

const dev= devuelvoTrue();
console.log(dev);

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado.



    async function helloPromise() {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
          }, 5000);
        });
      }
      
//- Una función generadora de índices pares automáticos.
function* generateEvenIndices() {
    let index = 0;
    while (true) {
      if (index % 2 === 0) {
        yield index;
      }
      index++;
    }
  }

  const evenIndices = generateEvenIndices();
console.log(evenIndices.next().value); // 0
console.log(evenIndices.next().value); // 2
console.log(evenIndices.next().value); // 4
