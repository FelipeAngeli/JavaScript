console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
)

//adicionando um passageiro
const idadeComprador = 15  //idade do passageiro
const estaAcompanhada = true
const temPassagemComprada = false


console.log("Destinos possíveis:")
console.log(listaDeDestinos)


//if(idadeComprador >= 18){
//   console.log("comprador mais de idade")
//    listaDeDestinos.splice(1,1) //removendo item
//}else if(estaAcompanhada == true){
//       console.log("comprador esta acompanhado")
//       listaDeDestinos.splice(1,1) //removendo item
//  }else{
//       console.log("Não é maior de idade então não posso vender")
//   }



//exemplo dois

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem")
    listaDeDestinos.splice(1, 1) //removendo item
} else {
    console.log("Não é maior de idade então não posso vender")
}


console.log("Embarque: \n\n")
if(idadeComprador >= 18 || temPassagemComprada == true){
    console.log("Boa viagem")
}else{
    console.log("Voce não pode embarcar")
}



console.log(listaDeDestinos)

