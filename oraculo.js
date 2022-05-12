let md1 = null
let md2 = null
let md3 = null
let gen = null

let gen1 = null
let gen2 = null
let gen3 = null
let gen4 = null
let gen5 = null
let gen6 = null

let trigrama1 = null
let trigrama2 = null

let hexagrama = null 

let tentativa = 0

let tri1_1 = document.getElementById('tri1_1')
let tri1_2 = document.getElementById('tri1_2')
let tri1_3 = document.getElementById('tri1_3')

let tri2_1 = document.getElementById('tri2_1')
let tri2_2 = document.getElementById('tri2_2')
let tri2_3 = document.getElementById('tri2_3')

let tri3_1 = document.getElementById('tri3_1')
let tri3_2 = document.getElementById('tri3_2')
let tri3_3 = document.getElementById('tri3_3')

let tri4_1 = document.getElementById('tri4_1')
let tri4_2 = document.getElementById('tri4_2')
let tri4_3 = document.getElementById('tri4_3')

let tri5_1 = document.getElementById('tri5_1')
let tri5_2 = document.getElementById('tri5_2')
let tri5_3 = document.getElementById('tri5_3')

let tri6_1 = document.getElementById('tri6_1')
let tri6_2 = document.getElementById('tri6_2')
let tri6_3 = document.getElementById('tri6_3')

let titulo = null
let texto = null

//console.log(`A moeda 1 é ${md1}, a moeda 2 é ${md2} e a moeda 3 é ${md3}.`);
//console.log(`A soma é ${triCalc}`);

console.log('tentativa:' + tentativa)
console.log(gen)

function iching() {
  if (tentativa == 0) {
    alert('Clique em jogar para sortear as moedas')
  } else if (tentativa == 1) {
    if (gen == 'yang') {
      tri1_1.style.backgroundColor = 'black'
      tri1_2.style.backgroundColor = 'black'
      tri1_3.style.backgroundColor = 'black'

      gen1 = 'yang'
    } else {
      tri1_1.style.backgroundColor = 'black'
      tri1_2.style.backgroundColor = 'white'
      tri1_3.style.backgroundColor = 'black'

      gen1 = 'yin'
    }
    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
  } else if (tentativa == 2) {
    if (gen == 'yang') {
      tri2_1.style.backgroundColor = 'black'
      tri2_2.style.backgroundColor = 'black'
      tri2_3.style.backgroundColor = 'black'

      gen2 = 'yang'
    } else {
      tri2_1.style.backgroundColor = 'black'
      tri2_2.style.backgroundColor = 'white'
      tri2_3.style.backgroundColor = 'black'

      gen2 = 'yin'
    }
    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
  } else if (tentativa == 3) {
    if (gen == 'yang') {
      tri3_1.style.backgroundColor = 'black'
      tri3_2.style.backgroundColor = 'black'
      tri3_3.style.backgroundColor = 'black'

      gen3 = 'yang'
    } else {
      tri3_1.style.backgroundColor = 'black'
      tri3_2.style.backgroundColor = 'white'
      tri3_3.style.backgroundColor = 'black'

      gen3 = 'yin'
    }

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)

    if (gen1 === 'yang' && gen2 === 'yang' && gen3 === 'yang') {
      trigrama1 = 'ceu'
    } else if (gen1 === 'yang' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = 'lago'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'trovao'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'fogo'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'terra'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'montanha'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yang') {
      trigrama1 = 'vento'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = 'agua'
    }

    console.log('Trigrama 1 = ' + trigrama1)
  } else if (tentativa == 4) {
    if (gen == 'yang') {
      tri4_1.style.backgroundColor = 'black'
      tri4_2.style.backgroundColor = 'black'
      tri4_3.style.backgroundColor = 'black'

      gen4 = 'yang'
    } else {
      tri4_1.style.backgroundColor = 'black'
      tri4_2.style.backgroundColor = 'white'
      tri4_3.style.backgroundColor = 'black'

      gen4 = 'yin'
    }

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)
    console.log('Trigrama 1 = ' + trigrama1)
    console.log('Sorteio 4 = ' + gen4)

  } else if (tentativa == 5) {
    if (gen == 'yang') {
      tri5_1.style.backgroundColor = 'black'
      tri5_2.style.backgroundColor = 'black'
      tri5_3.style.backgroundColor = 'black'

      gen5 = 'yang'
    } else {
      tri5_1.style.backgroundColor = 'black'
      tri5_2.style.backgroundColor = 'white'
      tri5_3.style.backgroundColor = 'black'

      gen5 = 'yin'
    }

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)
    console.log('Trigrama 1 = ' + trigrama1)
    console.log('Sorteio 4 = ' + gen4)
    console.log('Sorteio 5 = ' + gen5)

  } else if (tentativa == 6) {
    if (gen == 'yang') {
      tri6_1.style.backgroundColor = 'black'
      tri6_2.style.backgroundColor = 'black'
      tri6_3.style.backgroundColor = 'black'

      gen6 = 'yang'
    } else {
      tri6_1.style.backgroundColor = 'black'
      tri6_2.style.backgroundColor = 'white'
      tri6_3.style.backgroundColor = 'black'

      gen6 = 'yin'
    }

    
    if (gen4 === 'yang' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'ceu'
    } else if (gen4 === 'yang' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'lago'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'trovao'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'fogo'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'terra'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'montanha'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'vento'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'agua'
    }
oraculo()




    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)
    console.log('Trigrama 1 = ' + trigrama1)
    console.log('Sorteio 4 = ' + gen4)
    console.log('Sorteio 5 = ' + gen5)
    console.log('Sorteio 6 = ' + gen6)
    console.log('Trigrama 2 = ' + trigrama2) 
      
    
  }

 
}
function oraculo(){
  if (trigrama1==='ceu' && trigrama2==='ceu'){
    //Hexagrama 1 - 
      hexagrama=1 
    }else if (trigrama1==='terra' && trigrama2==='terra'){
        //Hexagrama 2 -   
      hexagrama=2
    }else if (trigrama1==='trovao' && trigrama2==='agua'){
        //Hexagrama 3 - 
      hexagrama=3
    }else if (trigrama1==='agua' && trigrama2=== 'montanha'){
        //Hexagrama 4 -   
      hexagrama=4
    }else if (trigrama1==='ceu' && trigrama2==='agua'){
      //Hexagrama 5 - 
      hexagrama=5
    }else if (trigrama1==='agua' && trigrama2==='ceu'){
      //Hexagrama 6 -   
      hexagrama=6
    }else if (trigrama1==='agua' && trigrama2==='terra'){
      //Hexagrama 7 - 
      hexagrama=7
    }else if (trigama1==='terra' &&  trigrama2==='agua'){
      //Hexagrama 8 -   
      hexagrama=8
    }else if ( trigrama1=== 'ceu' &&  trigrama2==='vento'){
      //Hexagrama 9 - 
      hexagrama=9
    }else if(trigrama1==='lago' &&  trigrama2==='ceu'){
      //Hexagrama 10 -   
      hexagrama=10
    }else if(trigrama1==='ceu' &&  trigrama2==='terra'){
      //Hexagrama 11 - 
      hexagrama=11
    }else if(trigrama1==='terra' && trigrama2=== 'ceu'){
      //Hexagrama 12 -   
      hexagrama=12
    }else if(trigrama1==='fogo' && trigrama2==='ceu'){
      //Hexagrama 13 - 
      hexagrama=13
    }else if(trigrama1==='ceu' && trigrama2===  'fogo'){
      //Hexagrama 14 -   
      hexagrama=14
    }else if(trigrama1==='montanha' &&  trigrama2==='terra'){
      //Hexagrama 15 - 
      hexagrama=15
    }else if(trigrama1==='terra' && trigrama2=== 'trovao'){
      //Hexagrama 16 -   
      hexagrama=16
    }else if(trigrama1==='trovao' && trigrama2=== 'lago'){
      //Hexagrama 17 - 
      hexagrama=17
    }else if(trigrama1==='vento' && trigrama2=== 'montanha'){
      //Hexagrama 18 -   
      hexagrama=18
    }else if(trigrama1==='lago' && trigrama2=== 'terra'){
      //Hexagrama 19 - 
      hexagrama=19
    }else if(trigrama1==='terra' && trigrama2=== 'vento'){
      //Hexagrama 20 -   e
  hexagrama=20
    }else if(trigrama1==='trovao' && trigrama2=== 'fogo'){
     //Hexagrama 21 - 
     hexagrama=21 
    }else if(trigrama1==='fogo' && trigrama2=== 'montanha'){
      //Hexagrama 22 -   
       hexagrama=22
    }else if(trigrama1==='terra' && trigrama2===  'montanha'){
      //Hexagrama 23 - 
      hexagrama=23
    }else if(trigrama1==='trovao' &&  trigrama2==='terra'){
      //Hexagrama 24 -   
      hexagrama=24
    }else if(trigrama1==='trovao' && trigrama2=== 'ceu'){
      //Hexagrama 25 - 
      hexagrama=25
    }else if(trigrama1==='ceu' && trigrama2=== 'montanha'){
      //Hexagrama 26 -   
      hexagrama=26
    }else if(trigrama1==='trovao' && trigrama2=== 'montanha'){
      //Hexagrama 27 - 
      hexagrama=27
    }else if(trigrama1==='vento' && trigrama2==='lago'){
      //Hexagrama 28 -   
      hexagrama=28
    }else if(trigrama1==='agua' && trigrama2=== 'agua'){
      //Hexagrama 29 - 
      hexagrama=29
    }else if(trigrama1==='fogo' && trigrama2==='fogo'){
      //Hexagrama 30 -   
      hexagrama=30
    }else if(trigrama1==='montanha' && trigrama2==='lago'){
      //Hexagrama 31 - 
     hexagrama=31
    }else if(trigrama1==='vento' && trigrama2=== 'trovao'){
       //Hexagrama 32 -   
       hexagrama=32
    }else if(trigrama1==='montanha' && trigrama2===  'ceu'){
      //Hexagrama 33 - 
      hexagrama=33
    }else if(trigrama1==='ceu' && trigrama2=== 'trovao'){
      //Hexagrama 34 -   
      hexagrama=34
    }else if(trigrama1==='ceu' && trigrama2==='fogo'){
      //Hexagrama 35 - 
      hexagrama=35
    }else if(trigrama1==='fogo' && trigrama2=== 'terra'){
      //Hexagrama 36 -   
      hexagrama=36
    }else if(trigrama1==='fogo' && trigrama2==='vento'){
      //Hexagrama 37 - 
      hexagrama=37
    }else if(trigrama1==='lago' && trigrama2=== 'fogo'){
      //Hexagrama 38 -   
      hexagrama=38
    }else if(trigrama1==='montanha' && trigrama2=== 'agua'){
      //Hexagrama 39 - 
      hexagrama=39
    }else if(trigrama1==='agua' && trigrama2=== 'trovao'){
      //Hexagrama 40 -   
      hexagrama=40
    }else if(trigrama1==='lago' && trigrama2=== 'montanha'){
      //Hexagrama 41 - 
      hexagrama=41
    }else if(trigrama1==='trovao' && trigrama2=== 'vento'){
      //Hexagrama 42 -   
      hexagrama=42
    }else if(trigrama1==='ceu' && trigrama2==='lago'){
      //Hexagrama 43 - 
      hexagrama=43
    }else if('vento' &&  'ceu'){
      //Hexagrama 44 -   
      hexagrama=44
    }else if(trigrama1==='terra' && trigrama2=== 'lago'){
      //Hexagrama 45 - 
      hexagrama=45
    }else if(trigrama1==='vento' && trigrama2=== 'terra'){
      //Hexagrama 46 -   
      hexagrama=46
    }else if(trigrama1==='agua' && trigrama2==='lago'){
      //Hexagrama 47 - 
      hexagrama=47
    }else if(trigrama1==='vento' && trigrama2==='agua'){
      //Hexagrama 48 -   
      hexagrama=48
    }else if(trigrama1==='fogo' && trigrama2=== 'lago'){
      //Hexagrama 49 - 
      hexagrama=49
    }else if(trigrama1==='vento' && trigrama2=== 'fogo'){
      //Hexagrama 50 -   
      hexagrama=50
    }else if(trigrama1==='trovao' &&  trigrama2=== 'trovao'){
      //Hexagrama 51 - 
      hexagrama=51
    }else if(trigrama1==='montanha' && trigrama2=== 'montanha'){
      //Hexagrama 52 -   
      hexagrama=52
    }else if(trigrama1==='montanha' && trigrama2=== 'vento'){
      //Hexagrama 53 - 
      hexagrama=53
    }else if(trigrama1==='lago' && trigrama2=== 'trovao'){
      //Hexagrama 54 -   
      hexagrama=54
    }else if(trigrama1==='fogo' && trigrama2==='trovao'){
      //Hexagrama 55 - 
      hexagrama=55
    }else if(trigrama1==='montanha' && trigrama2=== 'fogo'){
      //Hexagrama 56 -   
      hexagrama=56
    }else if(trigrama1==='vento' && trigrama2=== 'vento'){
      //Hexagrama 57 - 
      hexagrama=57
    }else if(trigrama1==='lago' && trigrama2=== 'lago'){
      //Hexagrama 58 -   
      hexagrama=58
    }else if(trigrama1==='agua' && trigrama2=== 'vento'){
      //Hexagrama 59 - 
      hexagrama=59
    }else if(trigrama1==='lago' && trigrama2=== 'agua'){
      //Hexagrama 60 -   
      hexagrama=60
    }else if(trigrama1=== 'lago' && trigrama2=== 'vento'){
      //Hexagrama 61 - 
      hexagrama=61
    }else if(trigrama1==='montanha' && trigrama2=== 'trovao'){
      //Hexagrama 62 -   
      hexagrama=62
    }else if(trigrama1 ==='fogo' && trigrama2=== 'agua'){
      //Hexagrama 63 - 
      hexagrama=63
    }else if(trigrama1==='agua' && trigrama2=== 'fogo'){
      //Hexagrama 64 -   
      hexagrama=64
    }
    
     
  }


function jogar() {
  let moeda1 = document.getElementById('moeda1')
  let moeda2 = document.getElementById('moeda2')
  let moeda3 = document.getElementById('moeda3')

  let sort1 = Math.floor(Math.random() * 10)
  let sort2 = Math.floor(Math.random() * 10)
  let sort3 = Math.floor(Math.random() * 10)

  let triCalc = md1 + md2 + md3

  if (sort1 % 2 == 0) {
    md1 = 2
  } else {
    md1 = 3
  }

  moeda1.innerHTML = md1

  if (sort2 % 2 == 0) {
    md2 = 2
  } else {
    md2 = 3
  }

  moeda2.innerHTML = md2

  if (sort3 % 2 == 0) {
    md3 = 2
  } else {
    md3 = 3
  }

  moeda3.innerHTML = md3

  if (triCalc % 2 === 1) {
    gen = 'yang'
  } else {
    gen = 'yin'
  }

  tentativa++

  console.log('tentativa ' + tentativa)

  return iching()
}
