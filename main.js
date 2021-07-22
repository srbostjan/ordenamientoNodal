var ramas = [[1,2],[1,7],[2,3],[3,4],[4,5],[7,6],[6,8], [8, 9], [8, 10]]
var nodoSlack = 1
var vector = [nodoSlack]

// creamos un array con los nodos sin repetirse
var nodosTotales = ramas.toString().split(',').map(number => parseInt(number))
var nodos = nodosTotales.filter((item,index)=> nodosTotales.indexOf(item) === index)

// creamos el vector
function encontrarVector(numero, array) {
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
nodos.forEach(numero => {
  encontrarVector(numero, vector)
})

// generamos el vector ordenado de mayor a menor
let copiavector = [...vector]
let vectorMayorMenor = copiavector.sort((a, b) => b - a )

//generamos la segunda rama
var segundaRama = []

function generarSegundaRama(vectorActual, vectorNuevo, ramaActual) {
  for(const rama of ramaActual) {
    let array = []
    for(let i = 0; i <= 1; i++) {
      let number = rama[i]
      let pactual = vectorActual.indexOf(number)
      array.push(vectorNuevo[pactual])
    }
    segundaRama.push(array)
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
ordernarFilas(segundaRama)

//creamos el vector ordenado de menor a mayor
let copiavector2 = [...vector]
let vectorMenorMayor = copiavector2.sort((a, b) => a - b )

// Creamos la rama final con el ordenamiento nodal
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

// Creamos un array con todos los datos
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
    data: segundaRama
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

// lo convertimos a un json
var json = JSON.stringify(data)


//lo imprimimos en la consola

data.forEach(objeto => {
  console.log(objeto.name)
  console.log(objeto.data)
})