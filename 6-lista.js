console.log(`Trabalhando com listas`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
)

listaDeDestinos.push(`Curitiba`) //o push ele add coisas no array

console.log("Destinos possíveis:")
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1) //splice remove um item do array, 1 é a possição do item no array e 1 é a quantidade
console.log(listaDeDestinos)

console.log(listaDeDestinos[1])//fazemos assim para mostrar um item na lista, o [1] é a possição do item na lista
