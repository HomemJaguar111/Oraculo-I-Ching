let gen 
let gen1
let gen2
let gen3
let gen4
let gen5
let gen6 

let tentativa = 0 

let trigrama1 = [gen1, ]

let trigrama2 = []

let hexagrama = []




function iching(){
        if (tentativa == 0){
                alert('Clique em jogar para sortear as moedas')


}


}



 

function jogar() { 
        
        let moeda1 = document.getElementById('moeda1')
        let moeda2 = document.getElementById('moeda2')
        let moeda3 = document.getElementById('moeda3')

    let sort1 =  Math.floor(Math.random()*10)
    let sort2 =  Math.floor(Math.random()*10)
    let sort3 =  Math.floor(Math.random()*10)  
    
    let md1 = 0
    let md2 = 0
    let md3 = 0
        
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
           
           triCalc = (md1+md2+ md3)
                
           
                if (triCalc % 2 === 0){
                gen ='yin'
                } else{ gen = 'yang'}
                gen1=gen

               
           console.log(`A moeda 1 é ${md1}, a moeda 2 é ${md2} e a moeda 3 é ${md3}.`)
           console.log(`A soma é ${triCalc}`)
           
           tentativa++
           console.log("tentativa " + tentativa)

           console.log(gen)
           console.log(gen1)

           if (tentativa ==1){


           }



        }
