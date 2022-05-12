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

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)
    console.log('Trigrama 1 = ' + trigrama1)
    console.log('Sorteio 4 = ' + gen4)
    console.log('Sorteio 5 = ' + gen5)
    console.log('Sorteio 6 = ' + gen6)

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
      trigrama2 = 'motanha'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'vento'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'agua'
    }
    console.log('Trigrama 2 = ' + trigrama2)    
  }

  switch(){
    
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
