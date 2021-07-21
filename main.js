var ramas = [[1,2],[1,7],[2,3],[3,4],[4,5],[7,6],[6,8], [8, 9], [8, 10]]
var nodoSlack = 1
var nodos = 6
var vector = [nodoSlack]
var vectorOrden = [nodoSlack]
let array2 = []

function encontrarpareja(numero, array) {
  for(const rama of ramas) {
    if(rama[0] === numero) {
      if(array.includes(rama[1])) {
        let a
      } else {
        array.push(rama[1])
      }
    }
    else if(rama[1] === numero) {
      if(array.includes(rama[0])) {
        let b
      } else {
        array.push(rama[0])
      }
    }
  }
}

// generamos un orden para crear el vector
function generarVector(numero, array) {
  for(const rama of ramas) {
    if(rama[0] === array[numero]) {
      if(array.includes(rama[1])) {
        let a
      } else {
        array.push(rama[1])
        encontrarpareja(rama[1], array2)
      }
    }
    else if(rama[1] === array[numero]) {
      if(array.includes(rama[0])) {
        let b
      } else {
        array.push(rama[0])
        encontrarpareja(rama[0], array2)
      }
    }
  }
}

while(vectorOrden.length <= nodos) {
  let numero = vectorOrden.length - 1
  generarVector(numero, vectorOrden)
}
console.log(vectorOrden)



// creamos el vector
vectorOrden.forEach(numero => {
  encontrarpareja(numero, vector)
})


// generamos el vector ordenado de mayor a menor
let copiavector = [...vector]
let vectorMayorMenor = copiavector.sort((a, b) => b - a )

//generamos la segunda rama

var nuevasRamas = []

function generarSegundaRama(vectorActual, vectorNuevo, ramaActual) {
  for(const rama of ramaActual) {
    let array = []
    for(let i = 0; i <= 1; i++) {
      let number = rama[i]
      let pactual = vectorActual.indexOf(number)
      array.push(vectorNuevo[pactual])
    }
    nuevasRamas.push(array)
  }
}
generarSegundaRama(vector, vectorMayorMenor, ramas)

// organizamos de mayor a menor segun las filas

let filasMayorMenor = []

function ordernarFilas(matriz) {
  for(let array of matriz) {
    let order = []
    if(array[1] > array[0]) {
      order[0] = array[1]
      order[1] = array[0]
      filasMayorMenor.push(order)
    }else {
      order[0] = array[0]
      order[1] = array[1]
      filasMayorMenor.push(order)
    }
  }
}
ordernarFilas(nuevasRamas)

let copiavector2 = [...vector]
let vectorMenorMayor = copiavector2.sort((a, b) => a - b )

let arrayFinal = []

function ordenarporcolumna2() {
  for(const numero of vectorMenorMayor) {
    for(const rama of filasMayorMenor) {
      if(rama[1] == numero) {
        arrayFinal.push(rama)
      }
    }
  }
}
ordenarporcolumna2()

const data = [
  {
    name: 'rama inicial',
    data: ramas
  },
  {
    name: 'el vector iniciado por slack',
    data: vector
  },
  {
    name: 'el vector ordenado de mayor a menor',
    data: vectorMayorMenor
  },
  {
    name: 'la rama ordenada segun los dos vectores',
    data: nuevasRamas
  },
  {
    name: 'la rama ordenada por filas de mayor a menor',
    data: filasMayorMenor
  },
  {
    name: 'la rama ordenada por la segunda columna de menor a mayorr',
    data: arrayFinal
  }
]
var json = JSON.stringify(data)

console.log('la rama inicial es:')
console.log(ramas)

console.log('el vector iniciado por slack es:')
console.log(vector)

console.log('el vector ordenado de mayor a menor es')
console.log(vectorMayorMenor)

console.log('la rama ordenada segun los dos vectores es:')
console.log(nuevasRamas)

console.log('la rama ordenada por filas de mayor a menor es:')
console.log(filasMayorMenor)

console.log('la rama ordenada por la segunda columna de menor a mayor es:')
console.log(arrayFinal)
