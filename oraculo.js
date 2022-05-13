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

let ideograma1 = document.getElementById('ideograma1')
let ideograma2 = document.getElementById('ideograma2')

let hexagrama = 0


let tentativa = 0

let tabuleiro = document.getElementById('tabuleiro')

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

let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')


let moeda1 = document.getElementById('moeda1')
let moeda2 = document.getElementById('moeda2')
let moeda3 = document.getElementById('moeda3')

let coin1 = document.getElementById('coin1')
let coin2 = document.getElementById('coin2')
let coin3 = document.getElementById('coin3')

let botao = document.getElementById('button')

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
      tri1_2.style.backgroundColor = '#d4c85b'
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
      tri2_2.style.backgroundColor = '#d4c85b'
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
      tri3_2.style.backgroundColor = '#d4c85b'
      tri3_3.style.backgroundColor = 'black'

      gen3 = 'yin'
    }

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)

    if (gen1 === 'yang' && gen2 === 'yang' && gen3 === 'yang') {
      trigrama1 = 'Céu'
    } else if (gen1 === 'yang' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = 'Lago'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'Trovão'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'Fogo'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'Terra'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'Montanha'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yang') {
      trigrama1 = 'Vento'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = 'Água'
    }

    console.log('Trigrama 1 = ' + trigrama1)
    ideograma1.innerHTML = `${trigrama1}`
  } else if (tentativa == 4) {
    if (gen == 'yang') {
      tri4_1.style.backgroundColor = 'black'
      tri4_2.style.backgroundColor = 'black'
      tri4_3.style.backgroundColor = 'black'

      gen4 = 'yang'
    } else {
      tri4_1.style.backgroundColor = 'black'
      tri4_2.style.backgroundColor = '#d4c85b'
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
      tri5_2.style.backgroundColor = '#d4c85b'
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
    tabuleiro.classList.remove('show')

    if (gen == 'yang') {
      tri6_1.style.backgroundColor = 'black'
      tri6_2.style.backgroundColor = 'black'
      tri6_3.style.backgroundColor = 'black'

      gen6 = 'yang'
    } else {
      tri6_1.style.backgroundColor = 'black'
      tri6_2.style.backgroundColor = '#d4c85b'
      tri6_3.style.backgroundColor = 'black'

      gen6 = 'yin'
    }

    if (gen4 === 'yang' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'Céu'
    } else if (gen4 === 'yang' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'Lago'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'Trovão'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'Fogo'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'Terra'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'Montanha'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'Vento'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'Água'
    }

    console.log('gen ' + gen)
    console.log('Sorteio 1 = ' + gen1)
    console.log('Sorteio 2 = ' + gen2)
    console.log('Sorteio 3 = ' + gen3)
    console.log('Trigrama 1 = ' + trigrama1)
    console.log('Sorteio 4 = ' + gen4)
    console.log('Sorteio 5 = ' + gen5)
    console.log('Sorteio 6 = ' + gen6)
    console.log('Trigrama 2 = ' + trigrama2)

    ideograma2.innerHTML = `${trigrama2}`

    
    return Hexagrama()   
  
    
  }
  return textOraculo()
  
}

function jogar() {
  let sort1 = Math.floor(Math.random() * 10)
  let sort2 = Math.floor(Math.random() * 10)
  let sort3 = Math.floor(Math.random() * 10)

  let triCalc = md1 + md2 + md3

  if (sort1 % 2 == 0) {
    md1 = 2
    coin1.src = 'https://i.ibb.co/sjr317R/yin.png'
  } else {
    md1 = 3
    coin1.src = 'https://i.ibb.co/5cz7BWx/yang.png'
  }

  if (sort2 % 2 == 0) {
    md2 = 2
    coin2.src = 'https://i.ibb.co/sjr317R/yin.png'
  } else {
    md2 = 3
    coin2.src = 'https://i.ibb.co/5cz7BWx/yang.png'
  }

  if (sort3 % 2 == 0) {
    md3 = 2
    coin3.src = 'https://i.ibb.co/sjr317R/yin.png'
  } else {
    md3 = 3
    coin3.src = 'https://i.ibb.co/5cz7BWx/yang.png'
  }

  if (triCalc % 2 === 1) {
    gen = 'yang'
  } else {
    gen = 'yin'
  }

  tentativa++

  console.log('tentativa ' + tentativa)

  return iching()
}

function Hexagrama() {
  if (trigrama1 === 'Céu' && trigrama2 === 'Céu') {
    //Hexagrama 1 -
    hexagrama = 1
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Terra') {
    //Hexagrama 2 -
    hexagrama = 2
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Água') {
    //Hexagrama 3 -
    hexagrama = 3
  } else if (trigrama1 === 'Água' && trigrama2 === 'Montanha') {
    //Hexagrama 4 -
    hexagrama = 4
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Água') {
    //Hexagrama 5 -
    hexagrama = 5
  } else if (trigrama1 === 'Água' && trigrama2 === 'Céu') {
    //Hexagrama 6 -
    hexagrama = 6
  } else if (trigrama1 === 'Água' && trigrama2 === 'Terra') {
    //Hexagrama 7 -
    hexagrama = 7
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Água') {
    //Hexagrama 8 -
    hexagrama = 8
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Vento') {
    //Hexagrama 9 -
    hexagrama = 9
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Céu') {
    //Hexagrama 10 -
    hexagrama = 10
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Terra') {
    //Hexagrama 11 -
    hexagrama = 11
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Céu') {
    //Hexagrama 12 -
    hexagrama = 12
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Céu') {
    //Hexagrama 13 -
    hexagrama = 13
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Fogo') {
    //Hexagrama 14 -
    hexagrama = 14
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Terra') {
    //Hexagrama 15 -
    hexagrama = 15
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Trovão') {
    //Hexagrama 16 -
    hexagrama = 16
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Lago') {
    //Hexagrama 17 -
    hexagrama = 17
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Montanha') {
    //Hexagrama 18 -
    hexagrama = 18
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Terra') {
    //Hexagrama 19 -
    hexagrama = 19
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Vento') {
    //Hexagrama 20 -   e
    hexagrama = 20
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Fogo') {
    //Hexagrama 21 -
    hexagrama = 21
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Montanha') {
    //Hexagrama 22 -
    hexagrama = 22
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Montanha') {
    //Hexagrama 23 -
    hexagrama = 23
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Terra') {
    //Hexagrama 24 -
    hexagrama = 24
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Céu') {
    //Hexagrama 25 -
    hexagrama = 25
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Montanha') {
    //Hexagrama 26 -
    hexagrama = 26
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Montanha') {
    //Hexagrama 27 -
    hexagrama = 27
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Lago') {
    //Hexagrama 28 -
    hexagrama = 28
  } else if (trigrama1 === 'Água' && trigrama2 === 'Água') {
    //Hexagrama 29 -
    hexagrama = 29
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Fogo') {
    //Hexagrama 30 -
    hexagrama = 30
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Lago') {
    //Hexagrama 31 -
    hexagrama = 31
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Trovão') {
    //Hexagrama 32 -
    hexagrama = 32
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Céu') {
    //Hexagrama 33 -
    hexagrama = 33
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Trovão') {
    //Hexagrama 34 -
    hexagrama = 34
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Fogo') {
    //Hexagrama 35 -
    hexagrama = 35
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Terra') {
    //Hexagrama 36 -
    hexagrama = 36
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Vento') {
    //Hexagrama 37 -
    hexagrama = 37
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Fogo') {
    //Hexagrama 38 -
    hexagrama = 38
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Água') {
    //Hexagrama 39 -
    hexagrama = 39
  } else if (trigrama1 === 'Água' && trigrama2 === 'Trovão') {
    //Hexagrama 40 -
    hexagrama = 40
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Montanha') {
    //Hexagrama 41 -
    hexagrama = 41
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Vento') {
    //Hexagrama 42 -
    hexagrama = 42
  } else if (trigrama1 === 'Céu' && trigrama2 === 'Lago') {
    //Hexagrama 43 -
    hexagrama = 43
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Céu') {
    //Hexagrama 44 -
    hexagrama = 44
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Lago') {
    //Hexagrama 45 -
    hexagrama = 45
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Terra') {
    //Hexagrama 46 -
    hexagrama = 46
  } else if (trigrama1 === 'Água' && trigrama2 === 'Lago') {
    //Hexagrama 47 -
    hexagrama = 47
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Água') {
    //Hexagrama 48 -
    hexagrama = 48
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Lago') {
    //Hexagrama 49 -
    hexagrama = 49
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Fogo') {
    //Hexagrama 50 -
    hexagrama = 50
  } else if (trigrama1 === 'Trovão' && trigrama2 === 'Trovão') {
    //Hexagrama 51 -
    hexagrama = 51
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Montanha') {
    //Hexagrama 52 -
    hexagrama = 52
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Vento') {
    //Hexagrama 53 -
    hexagrama = 53
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Trovão') {
    //Hexagrama 54 -
    hexagrama = 54
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Trovão') {
    //Hexagrama 55 -
    hexagrama = 55
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Fogo') {
    //Hexagrama 56 -
    hexagrama = 56
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Vento') {
    //Hexagrama 57 -
    hexagrama = 57
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Lago') {
    //Hexagrama 58 -
    hexagrama = 58
  } else if (trigrama1 === 'Água' && trigrama2 === 'Vento') {
    //Hexagrama 59 -
    hexagrama = 59
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Água') {
    //Hexagrama 60 -
    hexagrama = 60
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Vento') {
    //Hexagrama 61 -
    hexagrama = 61
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Trovão') {
    //Hexagrama 62 -
    hexagrama = 62
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Água') {
    //Hexagrama 63 -
    hexagrama = 63
  } else if (trigrama1 === 'Água' && trigrama2 === 'Fogo') {
    //Hexagrama 64 -
    hexagrama = 64
  }
  console.log('Hexagrama = ' + hexagrama)
  return textOraculo()
}

  function textOraculo(){
    
    switch (hexagrama) {
      //Hexagrama 1 -
      case 1:
        titulo.innerHTML = 'O Criador'
        texto = ''
        break;
      //Hexagrama 2 -
      case 2:
        titulo.innerHTML = 'O Receptivo'
        texto = ''
        break;
      //Hexagrama 3 -
      case 3:
        titulo.innerHTML = 'A Dificuldade Inicial'
        texto = ''
        break;
      //Hexagrama 4 -
      case 4:
        titulo.innerHTML = 'A Estultície Juvenil'
        texto = ''
        break;
      //Hexagrama 5 -
      case 5:
        titulo.innerHTML = 'A Expectativa (A nutrição)'
        texto = ''
        break;
      //Hexagrama 6 -
      case 6:
        titulo.innerHTML = 'O Conflito'
        texto = ''
        break;
      //Hexagrama 7 -
      case 7:
        titulo.innerHTML = 'O Exército'
        texto = ''
        break;
      //Hexagrama 8 -
      case 8:
        titulo.innerHTML = 'A União'
        texto = ''
        break;
      //Hexagrama 9 -
      case 9:
        titulo.innerHTML = 'O  Poder de Cativar do Pequeno'
        texto = ''
        break;
      //Hexagrama 10 -
      case 10:
        titulo.innerHTML = 'A Marcha'
        texto = ''
        break;
      //Hexagrama 11 -
      case 11:
        titulo.innerHTML = 'A Paz'
        texto = ''
        break;
      //Hexagrama 12 -
      case 12:
        titulo.innerHTML = 'A Estagnação; A Desarmonia'
        texto = ''
        break;
      //Hexagrama 13 -
      case 13:
        titulo.innerHTML = 'Companheirismo'
        texto = ''
        break;
      //Hexagrama 14 -
      case 14:
        titulo.innerHTML = 'A Grande propriedade'
        texto = ''
        break;
      //Hexagrama 15 -
      case 15:
        titulo.innerHTML = 'Humildade'
        texto = ''
        break;
      //Hexagrama 16 -
      case 16:
        titulo.innerHTML = 'Entusiasmo'
        texto = ''
        break;
      //Hexagrama 17 -
      case 17:
        titulo.innerHTML = 'Séquito'
        texto = ''
        break;
      //Hexagrama 18 -
      case 18:
        titulo.innerHTML = 'Recuperação do Deteriorado'
        texto = ''
        break;
      //Hexagrama 19 -
      case 19:
        titulo.innerHTML = 'Aproximação'
        texto = ''
        break;
      //Hexagrama 20 -
      case 20:
        titulo.innerHTML = 'A visão'
        texto = ''
        break;
      //Hexagrama 21 -
      case 21:
        titulo.innerHTML = 'Morder de Través'
        texto = ''
        break;
      //Hexagrama 22 -
      case 22:
        titulo.innerHTML = 'A Graça'
        texto = ''
        break;
      //Hexagrama 23 -
      case 23:
        titulo.innerHTML = 'Desintegração'
        texto = ''
        break;
      //Hexagrama 24 -
      case 24:
        titulo.innerHTML = 'Retorno'
        texto = ''
        break;
      //Hexagrama 25 -
      case 25:
        titulo.innerHTML = 'Inocência'
        texto = ''
        break;
      //Hexagrama 26 -
      case 26:
        titulo.innerHTML = 'O Poder de Cativar do Grande'
        texto = ''
        break;
      //Hexagrama 27 -
      case 27:
        titulo.innerHTML = 'Alimentação'
        texto = ''
        break;
      //Hexagrama 28 -
      case 28:
        titulo.innerHTML = 'Preponderância do Grande'
        texto = ''
        break;
      //Hexagrama 29 -
      case 29:
        titulo.innerHTML = 'Abismo'
        texto = ''
        break;
      //Hexagrama 30 -
      case 30:
        titulo.innerHTML = 'Fogo'
        texto = ''
        break;
      //Hexagrama 31 -
      case 31:
        titulo.innerHTML = 'Influência'
        texto = ''
        break;
      //Hexagrama 32 -
      case 32:
        titulo.innerHTML = 'Continuidade'
        texto = ''
        break;
      //Hexagrama 33 -
      case 33:
        titulo.innerHTML = 'Retirada'
        texto = ''
        break;
      //Hexagrama 34 -
      case 34:
        titulo.innerHTML = 'O Poder do que É Grande'
        texto = ''
        break;
      //Hexagrama 35 -
      case 35:
        titulo.innerHTML = 'Progresso'
        texto = ''
        break;
      //Hexagrama 36 -
      case 36:
        titulo.innerHTML = 'Oscurecimento da Luz'
        texto = ''
        break;
      //Hexagrama 37 -
      case 37:
        titulo.innerHTML = 'Família'
        texto = ''
        break;
      //Hexagrama 38 -
      case 38:
        titulo.innerHTML = 'Oposição'
        texto = ''
        break;
      //Hexagrama 39 -
      case 39:
        titulo.innerHTML = 'Obstáculo'
        texto = ''
        break;
      //Hexagrama 40 -
      case 40:
        titulo.innerHTML = 'Libertação'
        texto = ''
        break;
      //Hexagrama 41 -
      case 41:
        titulo.innerHTML = 'Diminuição'
        texto = ''
        break;
      //Hexagrama 42 -
      case 42:
        titulo.innerHTML = 'Aumento'
        texto = ''
        break;
      //Hexagrama 43 -
      case 43:
        titulo.innerHTML = 'Resolução'
        texto = ''
        break;
      //Hexagrama 44 -
      case 44:
        titulo.innerHTML = 'Vir ao Encontro'
        texto = ''
        break;
      //Hexagrama 45 -
      case 45:
        titulo.innerHTML = 'Ajuntamento'
        texto = ''
        break;
      //Hexagrama 46 -
      case 46:
        titulo.innerHTML = 'Impulso para Cima'
        texto = ''
        break;
      //Hexagrama 47 -
      case 47:
        titulo.innerHTML = 'Abatimento'
        texto = ''
        break;
      //Hexagrama 48 -
      case 48:
        titulo.innerHTML = 'O Poço'
        texto = ''
        break;
      //Hexagrama 49 -
      case 49:
        titulo.innerHTML = 'Revolução'
        texto = ''
        break;
      //Hexagrama 50 -
      case 50:
        titulo.innerHTML = 'O Caldeirão'
        texto = ''
        break;
      //Hexagrama 51 -
      case 51:
        titulo.innerHTML = 'O Abalo, A Trovoada'
        texto = ''
        break;
      //Hexagrama 52 -
      case 52:
        titulo.innerHTML = 'Imobilização'
        texto = ''
        break;
      //Hexagrama 53 -
      case 53:
        titulo.innerHTML = 'Desenvolvimento Gradual'
        texto = ''
        break;
      //Hexagrama 54 -
      case 54:
        hexagrama = 54
        titulo.innerHTML = 'A Noiva'
        texto = ''
        break;
      //Hexagrama 55 -
      case 55:
        titulo.innerHTML = 'Plenitude'
        texto = ''
        break;
      //Hexagrama 56 -
      case 56:
        titulo.innerHTML = 'O Estrangeiro'
        texto = ''
        break;
      //Hexagrama 57 -
      case 57:
        titulo.innerHTML = 'O Suave'
        texto = ''
        break;
      //Hexagrama 58 -
      case 58:
        titulo.innerHTML = 'Alegria'
        texto = ''
        break;
      //Hexagrama 59 -
      case 59:
        titulo.innerHTML = 'Dispersão'
        texto = ''
        break;
      //Hexagrama 60 -
      case 60:
        titulo.innerHTML = 'Limitação'
        texto = ''
        break;
      //Hexagrama 61 -
      case 61:
        titulo.innerHTML = 'A verdade interior'
        texto = ''
        break;
      //Hexagrama 62 -
      case 62:
        titulo.innerHTML = 'Preponderância do Pequeno'
        texto = ''
        break;
      //Hexagrama 63 -
      case 63:
        titulo.innerHTML = 'Após o Cumprimento'
        texto = ''
        break;
      //Hexagrama 64 -
      case 64:
        titulo.innerHTML = 'Antes do Cumprimento'
        texto = ''
        break;
      }
    }