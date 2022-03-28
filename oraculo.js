function jogar() {

    let tentativa = 0

    let sort1 =  Math.floor(Math.random()*10)
    let sort2 =  Math.floor(Math.random()*10)
    let sort3 =  Math.floor(Math.random()*10)

    let moeda1 = document.getElementById('moeda1')
    let moeda2 = document.getElementById('moeda2')
    let moeda3 = document.getElementById('moeda3')

    if (sort1 % 2 == 0){
         md1 = 2
    }else {md1=3}
        console.log('numero sorteado '+sort1)
        console.log('restante da divisão '+(sort1 % 2))
        moeda1.innerHTML = md1

    if (sort2 % 2 == 0){
            md2 = 2
    }else {md2=3}
           console.log('numero sorteado '+sort2)
           console.log('restante da divisão '+(sort2 % 2))
           moeda2.innerHTML = md2

    if (sort3 % 2 == 0){
            md3 = 2
    }else {md3=3}

           console.log('numero sorteado '+sort3)
           console.log('restante da divisão '+(sort3 % 2))  
           moeda3.innerHTML = md3
           tentativa++

           console.log("tentativa " + tentativa)

}
