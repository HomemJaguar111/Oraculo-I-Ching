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

let poemaJulgamento = document.getElementById('poemaJulgamento')
let julgamento = document.getElementById('julgamento')

let poemaImagem = document.getElementById('poemaImagem')
let imagem = document.getElementById('imagem')

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
      trigrama1 = 'C??u'
    } else if (gen1 === 'yang' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = 'Lago'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'Trov??o'
    } else if (gen1 === 'yang' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'Fogo'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yin') {
      trigrama1 = 'Terra'
    } else if (gen1 === 'yin' && gen2 === 'yin' && gen3 === 'yang') {
      trigrama1 = 'Montanha'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yang') {
      trigrama1 = 'Vento'
    } else if (gen1 === 'yin' && gen2 === 'yang' && gen3 === 'yin') {
      trigrama1 = '??gua'
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
    //tabuleiro.classList.remove('show')

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
      trigrama2 = 'C??u'
    } else if (gen4 === 'yang' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = 'Lago'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'Trov??o'
    } else if (gen4 === 'yang' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'Fogo'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yin') {
      trigrama2 = 'Terra'
    } else if (gen4 === 'yin' && gen5 === 'yin' && gen6 === 'yang') {
      trigrama2 = 'Montanha'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yang') {
      trigrama2 = 'Vento'
    } else if (gen4 === 'yin' && gen5 === 'yang' && gen6 === 'yin') {
      trigrama2 = '??gua'
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
  if (trigrama1 === 'C??u' && trigrama2 === 'C??u') {
    //Hexagrama 1 -
    hexagrama = 1
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Terra') {
    //Hexagrama 2 -
    hexagrama = 2
  } else if (trigrama1 === 'Trov??o' && trigrama2 === '??gua') {
    //Hexagrama 3 -
    hexagrama = 3
  } else if (trigrama1 === '??gua' && trigrama2 === 'Montanha') {
    //Hexagrama 4 -
    hexagrama = 4
  } else if (trigrama1 === 'C??u' && trigrama2 === '??gua') {
    //Hexagrama 5 -
    hexagrama = 5
  } else if (trigrama1 === '??gua' && trigrama2 === 'C??u') {
    //Hexagrama 6 -
    hexagrama = 6
  } else if (trigrama1 === '??gua' && trigrama2 === 'Terra') {
    //Hexagrama 7 -
    hexagrama = 7
  } else if (trigrama1 === 'Terra' && trigrama2 === '??gua') {
    //Hexagrama 8 -
    hexagrama = 8
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Vento') {
    //Hexagrama 9 -
    hexagrama = 9
  } else if (trigrama1 === 'Lago' && trigrama2 === 'C??u') {
    //Hexagrama 10 -
    hexagrama = 10
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Terra') {
    //Hexagrama 11 -
    hexagrama = 11
  } else if (trigrama1 === 'Terra' && trigrama2 === 'C??u') {
    //Hexagrama 12 -
    hexagrama = 12
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'C??u') {
    //Hexagrama 13 -
    hexagrama = 13
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Fogo') {
    //Hexagrama 14 -
    hexagrama = 14
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Terra') {
    //Hexagrama 15 -
    hexagrama = 15
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Trov??o') {
    //Hexagrama 16 -
    hexagrama = 16
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Lago') {
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
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Fogo') {
    //Hexagrama 21 -
    hexagrama = 21
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Montanha') {
    //Hexagrama 22 -
    hexagrama = 22
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Montanha') {
    //Hexagrama 23 -
    hexagrama = 23
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Terra') {
    //Hexagrama 24 -
    hexagrama = 24
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'C??u') {
    //Hexagrama 25 -
    hexagrama = 25
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Montanha') {
    //Hexagrama 26 -
    hexagrama = 26
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Montanha') {
    //Hexagrama 27 -
    hexagrama = 27
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Lago') {
    //Hexagrama 28 -
    hexagrama = 28
  } else if (trigrama1 === '??gua' && trigrama2 === '??gua') {
    //Hexagrama 29 -
    hexagrama = 29
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Fogo') {
    //Hexagrama 30 -
    hexagrama = 30
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Lago') {
    //Hexagrama 31 -
    hexagrama = 31
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Trov??o') {
    //Hexagrama 32 -
    hexagrama = 32
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'C??u') {
    //Hexagrama 33 -
    hexagrama = 33
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Trov??o') {
    //Hexagrama 34 -
    hexagrama = 34
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Fogo') {
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
  } else if (trigrama1 === 'Montanha' && trigrama2 === '??gua') {
    //Hexagrama 39 -
    hexagrama = 39
  } else if (trigrama1 === '??gua' && trigrama2 === 'Trov??o') {
    //Hexagrama 40 -
    hexagrama = 40
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Montanha') {
    //Hexagrama 41 -
    hexagrama = 41
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Vento') {
    //Hexagrama 42 -
    hexagrama = 42
  } else if (trigrama1 === 'C??u' && trigrama2 === 'Lago') {
    //Hexagrama 43 -
    hexagrama = 43
  } else if (trigrama1 === 'Vento' && trigrama2 === 'C??u') {
    //Hexagrama 44 -
    hexagrama = 44
  } else if (trigrama1 === 'Terra' && trigrama2 === 'Lago') {
    //Hexagrama 45 -
    hexagrama = 45
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Terra') {
    //Hexagrama 46 -
    hexagrama = 46
  } else if (trigrama1 === '??gua' && trigrama2 === 'Lago') {
    //Hexagrama 47 -
    hexagrama = 47
  } else if (trigrama1 === 'Vento' && trigrama2 === '??gua') {
    //Hexagrama 48 -
    hexagrama = 48
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Lago') {
    //Hexagrama 49 -
    hexagrama = 49
  } else if (trigrama1 === 'Vento' && trigrama2 === 'Fogo') {
    //Hexagrama 50 -
    hexagrama = 50
  } else if (trigrama1 === 'Trov??o' && trigrama2 === 'Trov??o') {
    //Hexagrama 51 -
    hexagrama = 51
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Montanha') {
    //Hexagrama 52 -
    hexagrama = 52
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Vento') {
    //Hexagrama 53 -
    hexagrama = 53
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Trov??o') {
    //Hexagrama 54 -
    hexagrama = 54
  } else if (trigrama1 === 'Fogo' && trigrama2 === 'Trov??o') {
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
  } else if (trigrama1 === '??gua' && trigrama2 === 'Vento') {
    //Hexagrama 59 -
    hexagrama = 59
  } else if (trigrama1 === 'Lago' && trigrama2 === '??gua') {
    //Hexagrama 60 -
    hexagrama = 60
  } else if (trigrama1 === 'Lago' && trigrama2 === 'Vento') {
    //Hexagrama 61 -
    hexagrama = 61
  } else if (trigrama1 === 'Montanha' && trigrama2 === 'Trov??o') {
    //Hexagrama 62 -
    hexagrama = 62
  } else if (trigrama1 === 'Fogo' && trigrama2 === '??gua') {
    //Hexagrama 63 -
    hexagrama = 63
  } else if (trigrama1 === '??gua' && trigrama2 === 'Fogo') {
    //Hexagrama 64 -
    hexagrama = 64
  }
  console.log('Hexagrama = ' + hexagrama)
  return textOraculo()
}

function textOraculo() {
  switch (hexagrama) {
    //Hexagrama 1 -
    case 1:
      titulo.innerHTML = ' 1 - CHIEN - O Criador'

      texto.innerHTML =
        'Tanto o trigrama superior quanto o inferior s??o Chien; todas as linhas s??o cheias e representam o yang - forte, ativo, doador, orientado espiritual e mentalmente, consistente. <br>  Chien tem todosx os atributos do C??u, do Rei, do l??der e do chefe de fam??lia. Representa algu??m que usa seu poder e vitalidade construtivamente. A energia primordial transforma-se em seu oposto, depois de atingir seu cl??max. Assim, o hexagama adverte quanto ao sucesso se tornando fracasso se a for??a for excessiva, ou arrogante.'

      poemaJulgamento.innerHTML =
        'O criador traz sublime sucesso,<br> Beneficiando a todos com peersever??ncia.'

      julgamento.innerHTML =
        'O significado primitivo de Chien era o de uma "for??a" do sucesso, fluindo das profundezas. Mas tudo depende de o indiv??duo perseverar no caminho certo - isto ??, fazendo o que ?? direito.'

      poemaImagem.innerHTML =
        'O movimento do c??u ?? cheio de poder <br> Assim o homem nombre fortalece a si mesmo.'

      imagem.innerHTML =
        'O c??u move-se sem cessar. Isto dever servir de exemplo. Torne-se a personalidade forte, eficaz e duradoura.'

      break
    //Hexagrama 2 -
    case 2:
      titulo.innerHTML = '2 - KUN - O Receptivo'

      texto.innerHTML =
        'Cada linha representa o escuro, a terra, a m??e, o yin, a devo????o. N??o ?? uma fraqueza, mas for??a primordial, como Chien. Estes dois primeiros n??o s??o opostos. S??o o rei e a rainha, o pai e a m??e. S?? quando o passivo ?? liderado pelo criador, pode resultar uma constru????o perfeita'

      poemaJulgamento.innerHTML =
        'O receptivo opera um sublime sucesso e beneficia pela perseveran??a de um jumento. <br> O homem nobre deve empreender algo, mas se perde. <br> Mas acaba recebendo a orienta????o. <br> Encontre amigos no Sul e no Oeste; evite-os no Norte e no Leste. <br> Uma perseveran??a pac??fica traz a fortuna.'

      julgamento.innerHTML =
        'A qualidade de julgamento do Receptivo(perseveran??a) ?? bem diferente da persist??ncia ativa de Chien, e indica circunst??ncias mais materiais. Aceite orienta????o e apoio. <br> O Sul e o Oeste simbolizam esfor??o e trabalho. Assim, o Norte e o Leste ou comando, e planejamento em grupo, devem ser rejeitados em favor da solid??o.'

      poemaImagem.innerHTML =
        'A condi????o da terra ?? a devo????o. <br> Assim o homem nobre, de grande car??ter, sustenta o mundo.'

      imagem.innerHTML =
        'A Terra sustenta tudo: de bom e de mau. O homem nobre ?? puro, vasto e de car??ter profundo, assim, pode aceitar e suportar sua situa????o.'

      break
    //Hexagrama 3 -
    case 3:
      titulo.innerHTML = '3 - CHUN - A Dificuldade Inicial'

      texto.innerHTML =
        'Kan em cima e Chen embaixo trazem nuvens, ??gua, movimento e trov??o. Tempo de tens??o. <br> Chun ?? o tempo em que os brotos empurram a terra dura com grande dificuldade. <br> ?? preciso ser muito paciente'

      poemaJulgamento.innerHTML =
        'A Dificuldade Inicial opera um sublime sucesso e favorece pela persevran??a. <br> Nada deve ser empreendido, ?? preciso engajar auxiliares.'

      julgamento.innerHTML =
        'Tudo est?? disforme, convulsionado. Se se perseverar, um grande sucesso poder?? se seguir. Entretanto, a a????o precipitada ou prematura acarretar?? o desastre.'

      poemaImagem.innerHTML =
        'Nuvens e trov??o: a dificuldade inicial. <br> O homem nobre faz a ordem a partir do caos '

      imagem.innerHTML =
        'As nuvens de tempestadde t??m forma definida: deve-se procurar discernir o que ?? o qu??, e ficar pronto para tirar vantagem de melhores condi????es ap??s a chuva.'

      break
    //Hexagrama 4 -
    case 4:
      titulo.innerHTML = 'A Estult??cie Juvenil'

      texto.innerHTML =
        'O hexagrama implica imaturidade e pureza. O trigrama superior, Ken, significa o filho mais mo??o, ou a montanha; Kan, embaixo, o perigo, ou a ??gua. Da?? as imagens de uma fonte ao p?? da montanha, e uma crian??a tola. A juventude requer instru????o e no todo, este hexagrama significa o ensinamento, e em particular, ser paciente e tolerante.'

      poemaJulgamento.innerHTML =
        'A estult??cie juvenil tem o sucesso. <br> N??o sou eu quem procura o jovem tolo, <br> O jovem tolo ?? quem me procura. <br> ?? primeira pergunta, respondo; <br> Se ele insistir, ?? falta de respeito. <br> Se ele me desrespeita, n??o lhe respondo mais. <br> A perseveran??a ?? vantajosa.'

      julgamento.innerHTML =
        'Apresenta-se uma ideia dupla: o or??culo e sua atitude perante quem faz a pergunta, e a ideia de pessoas que precisam aprender algo. O perguntador imaturo deve aprender a aceitar a rela????o entre mestre e disc??pulo, estabelecida no uso do I Ching. <br> Analogamente, o conselho sobre conduta ?? que um bom estudante ?? respeitoso, trabalhador e domina cada passo antes de dar o pr??ximo.'

      poemaImagem.innerHTML =
        'Ao p?? da montanha, jorra uma fonte, <br> S??mbolo da juventude.<br> O homem nobre cultiva o seu car??ter. <br Sendo profundo em todos os seus atos.>'

      imagem.innerHTML =
        'Como um bom estudante, ?? preciso cultivar o r??prio car??ter com clareza e perseveran??a, e uma corre????o vigorosa.'

      break
    //Hexagrama 5 -
    case 5:
      titulo.innerHTML = '5 - HSU - A Expectativa (A nutri????o)'

      texto.innerHTML =
        'O trigrama Han (a ??gua; o perigo) acima de Chien (o C??u; a for??a) indica nuvens de chuva no C??u. Chover??, mas entrementes deve-se esperar. Use o tempo para se preparar. A ideia ?? refor??ada pela expectativa, originada no antigo ideograma Hsu, reprensentando um meditabundo sentado. A contempla????o tamb??m cont??m a ideia de nutri????o do n??cleo da energia vital (o prana ou chi) no centro de gravidade do corpo. ?? preciso proceder cuidadosamente, mas com ambi????o. Tenha consci??ncia da competi????o, mas n??o destrate os competidores.'

      poemaJulgamento.innerHTML =
        'Expectativa. Se sincera, conquistar?? a gl??ria. <br> A perseveran??a traz a fortuna. <br> ?? vantajoso cruzaar as grandes ??guas.'
      julgamento.innerHTML =
        'A certeza interior e o reconhecimento das coisas tais como s??o em si ?? a real "sinceridade". Esta deve ser seguida por uma a????o resoluta e coerente, e aplica????o. ?? vantajoso viajar, ou tomar uma grande decis??o, ou fazer grandes mudan??as.'

      poemaImagem.innerHTML =
        'Nuvens sobem ao C??u: imagem da expectativa. <br> O homem nobre, comendo e bebendo, est?? contente.'

      imagem.innerHTML =
        'A chuva vem depois das nuvens, mas s?? podemos esperar, se formos s??bios, alimentamos nosso corpo com a comida adequada, e nossa mente pelo cultivo da tranquilidade. Ent??o, quando nossa hora chegar, estaremos prontos, e enquanto isso, estaremos contentes.'

      break
    //Hexagrama 6 -
    case 6:
      titulo.innerHTML = '6 - SUNG - O Conflito'

      texto.innerHTML =
        'O movimento ascendente de Chien (o C??u) conflita com o fluxo descendente da ??gua (Kan, o trigrama de baixo). Uma diferen??a fundamental ?? exressa e ampliada pelos atributos dos trigramas - a for??a em cima da ast??cia, sugerindo uma natureza belicosa.'

      poemaJulgamento.innerHTML =
        'Conflito: voc?? ?? sincero, <br> a despeito de encontrar obstru????o. <br> Uma parada a meio caminho traz a boa fortuna; <br> Levar a quest??o ao fim traz o infort??nio. <br> ?? vantajoso ver o grande homem. <br> Mas n??o ?? vantajoso cruzar as grandes ??guas.'

      julgamento.innerHTML =
        'O conflito se desenvolve pela convic????o - em outras palavras, pelo ego??smo. Tenha a mente l??cida e justa para chegar a um compromisso, ou desistir. Isto aplica-se especialmente se se teima num ponto de vista. Procure arb??trio ou conselho com uma autoridade superior, ou com uma pessoa mais sensata. Quando as energias est??o divididas, n??o tente empreendimentos que exigem energias concentradas.'

      poemaImagem.innerHTML =
        'O C??u e a ??gua se movem em sentidos opostos. <br> S??mbolo do Conflito. <br> Assim o homem nobre: <br> Cuidadosamente  considera o princ??pio de todo empreendimento.'

      imagem.innerHTML =
        'O conflito ?? latente. S?? pela profunda e meticulosa ordena????o de objetivos, antecipadamente, pode-se prevenir sua apari????o.'

      break
    //Hexagrama 7 -
    case 7:
      titulo.innerHTML = '7 - GHIH - O Ex??rcito'

      texto.innerHTML =
        'O ex??rcito representa for??as acumuladas, com um objetivo em vista. A ??gua (o trigrama inferior, Khan) apanhada pela Terra (Kun, em cima) representa for??as poderosas controladas por uma disciplina comum ou pela dire????o de algu??m com autoridade. <br> A linha cheia representa o chefe. Por??m, como ocupa o trigrama inferior, n??o um chefe de estado. Portanto, deve agir honestamente e confiavelmente. Tamb??m deve ganhar o respeito de seus homens para que o ex??rcito continue eficaz.'

      poemaJulgamento.innerHTML =
        'O Ex??rcito. O ex??rcito deve ter esperan??a <br> E um l??der forte. <br> Boa fortuna, desonra nenhuma.'

      julgamento.innerHTML =
        'A situa????o requer m??o forte. Por??m, o l??der atualmente n??o est?? suficientemente envolvido com os que o rodeiam. Deve atrair outros demonstrando necessidades comuns, e sua capacidade de liderar.'

      poemaImagem.innerHTML =
        'Em meio ?? Terra, a ??gua, <br> S??mbolo do Ex??rcito. <br> O homem nobre aumenta seu s??quito <br> Por sua benevol??ncia para com o povo.'

      imagem.innerHTML =
        'S?? com uma pol??tica justa em tempo de paz um l??der ter?? apoio na guerra. Analogamente, uma sensa????o de  confian??a e valores comuns s??o necess??rios entre os que procuram desfazer suas diferen??as, ou engajar-se num empreendimento comum.'
      break
    //Hexagrama 8 -
    case 8:
      titulo.innerHTML = '8 - PI - A Uni??o'

      texto.innerHTML =
        'Em cima, Kan, a ??gua; embaixo Kun, a Terra. Esta mistura natural indica uma pessoa ou uma ??poca de coopera????o e boa vontade. Indica a boa fortuna em assuntos pessoais e neg??cios, desde que haja f??, comprometimento e honestidade.'

      poemaJulgamento.innerHTML =
        'A Uni??o: boa fortuna. <br> Questione mais uma vez o or??culo. <br> Seu esp??rito estar?? grande, firme e perseverante? <br> Caso for, n??o haver?? erro. <br> O que hesitar, poder?? chegar tarde demais. <br> Infort??nio.'

      julgamento.innerHTML =
        'Toda uni??o requer um centro forte. Um grupo estabelece suas rela????es de maneira clara e definida, e os retardat??rios n??o poder??o compartilhar a mesma profundidade de uni??o que os primeiros a chegar. Aceite as restri????es desta uni??o se quiser receber seus benef??cios - de outro modo, abandone-o.'

      poemaImagem.innerHTML =
        'Terra sobre ??gua, <br> S??mbolo da Uni??o. <br> Os antigos reis estabeleceram os estados feudais <br> Cultivando rela????es amig??veis com seus bar??es.'

      imagem.innerHTML =
        'A ??gua ?? absorvida pela Terra e forma assim uma uni??o natural. Assim os reis conferiam terras a seus nobres, trabalhando assiduamente para garantir que todos entendessem as vantagens desta uni??o.'

      break
    //Hexagrama 9 -
    case 9:
      titulo.innerHTML = '9 - HSIAO TCHU - O  Poder de Cativar do Pequeno'

      texto.innerHTML =
        'A imagem do Vento, o Suave (Sun, em cima), soprando pelo C??u(Chien, embaixo), sugere a pequena for??a cativando a grande. Uma pessoa forte ?? impedida por entraves pequenos, for??ando-a a um compromisso. Um novo empreendimento pode assim ser restringido. S?? pela suavidade uma tal situa????o poder?? ter sucesso.'

      poemaJulgamento.innerHTML =
        'O Poder de Cativar do Pequeno: sucesso. <br> Do Oeste, nuvens espessas, mas n??o h?? chuva.'

      julgamento.innerHTML =
        'A perspectiva da chuva sugere um resultado frut??fero, mas as nuvens n??o a liberam. S?? pelo "poder do pequeno" - amizade e m??todos sutis - podemos influenciar aos outros, ou aos acontecimentos.'

      poemaImagem.innerHTML =
        'O Vento soprando pelo C??u simboliza o Poder de Cativar do Pequeno. <br> Assim o homem superior refina seu car??ter e capacidades.'

      imagem.innerHTML =
        'Soprada pelas for??as das circunst??ncias, uma pessoa pode fazer pouco dde significado duradouro, mas as condi????es permitem que nos expressemos abertamente em coisas pequenas, para os que nos cercam. ?? preciso usar o tempo para um auto aperfei??oamento.'

      break
    //Hexagrama 10 -
    case 10:
      titulo.innerHTML = '10 - LIU - A Marcha'

      texto.innerHTML =
        'O trigrama Chien (o pai, em cima), seguido por Tui (a filha mais jovem, embaixo), sugere a rela????o correta entre os dois, de acordo com o costume chin??s. Assim, o hexagrama aconsela a agir civilmente, de acordo com as conven????es estabelecidas. <br> Alternativamente, o simbolismo do trigrama inferior, de um tigre, sugere um homem andando sobre a cauda do tigre. Implica a necessidade de cuidado em circunst??ncias perigosas e inusitadamente, o fraco sendo capaz de prevalecer sobre o forte.'

      poemaJulgamento.innerHTML =
        'Marchar. O homem caminha sobre a caudad do tigre. <br> E este n??o o morde. Sucesso.'

      julgamento.innerHTML =
        'Uma inusitada proximidade de elementos fortes e suaves - pode representar um solit??rio, for??ado ao contato com pessoas que considera como inferiores a si. Alternativamente, pode-se estar tratando com o imprevis??vel, com for??as perigosas. Aja com uma dignidade cativante, e n??o perca a sensibilidade.'

      poemaImagem.innerHTML =
        'O C??u em cima, o LAgo embaixo, s??mbolo da Marcha. <br> O homem nobre discrimina entre o elevado e o baixo. <br> Assim concorda com a vontade do povo.'

      imagem.innerHTML =
        'O ideal confuciano era uma sociedade em que o "status" exterior fosse reflexo do valor interior. Este ideal deve nos incentivar a nos comportarmos em rela????o os outros de acordo com uma profunda aprecisa????o de sua natureza. De outro modo, pode-se tornar irrealista e preconcebido.'

      break
    //Hexagrama 11 -
    case 11:
      titulo.innerHTML = '11 - TAI - A Paz'

      texto.innerHTML =
        'O L??der, ou pai (Chien), suporta o povo, ou a m??e (Kun). Isto indica uma s??lida for??a criando a harmonia com o mais fraco, sendo flex??vel e conciliador. Em geral, o hexagrama indica condi????es harmoniosas.'

      poemaJulgamento.innerHTML =
        'A Paz. O pequeno vai, <br> O grande vem. <br> Fortuna: sucesso.'

      julgamento.innerHTML =
        'Os elementos fortes e criadores ocupam posi????o central: as tr??s linhas inferiores, e, assim, est??o nos controle. H?? um sentimento de profunda harmonia, tanto nos relacionamentos quanto nas circunst??ncias.'

      poemaImagem.innerHTML =
        'C??u e Terra est??o unidos, simbolizando a Paz. <br> O rei divide e perfaz os caminhos de C??u e Terra. <br> Favorece e ordena os dons de C??u e Terra. <br> Em benf??cio do povo.'

      imagem.innerHTML =
        'A unidade produz a paz e a prosperidade. Os governantes organizam a atividade de acordo com uma divis??o apropriada do tempo e do espa??o, de modo que possam se beneficiar e estar em harmonia com a natureza. Por mais preocupado que voc?? esteja em seguir o costume ou "ter em mente apenas os melhores interesses dos outros", os motivos facilmente podem tornar-se ego??stas, se n??o se prestar aten????o ??s verdades interiores que nos recordam sempre o universal.'

      break
    //Hexagrama 12 -
    case 12:
      titulo.innerHTML = '12 - P.I - A Estagna????o; A Desarmonia'

      texto.innerHTML =
        'O decaimento, a pobreza e a desuni??o s??o indicados por este hexagrama. Aqui, Chien (o chefe, a for??a) em cima ?? sustentado por Kun (o fraco, a for??a receptiva). Nenhum resultado criativo ?? poss??vel. Assim, pode indicar algu??m forte, ruidoso e arrogante xteriormente, mas com pouco valor interior para apoiar tal comportamento.'

      poemaJulgamento.innerHTML =
        'Desarmonia. Nada ?? ben??fico, <br> Mesmo com a perseveran??a do homem nobre. <br> O grande vai; o pqueno vem.'

      julgamento.innerHTML =
        'As for??as criadoras e ordenadoras intr??nsecas ??s situa????es parecem escoar; a confus??o e a acrim??nia come??am. Em geral, n??o h?? vantagem na a????o. Concentre-se em manter os neg??cios est??veis, humilde e corretamente.'

      poemaImagem.innerHTML =
        'C??u e Terra em desuni??o; s??mbolo da Desarmonia. <br> Portanto, o homem nobre se retira em seu valor ??ntimo, <br> Evitando o perigo. <br> E recusa favor e fortuna.'

      imagem.innerHTML =
        'Numa situa????o que segue princ??pios pequenos, mesquinhos, e administrada por pessoas inescrupulosas ou inferiores, n??o se deve ser atra??do ao envolvimento pelo lucro f??cil, seja financeiro ou social. <br> Este hexagrama ?? como o "princ??pio saturnino", da astrologia, ou como a ideia tao??sta de que "a semente da prosperidade oculta-se no infort??nio". Aceitando as dificuldades enquanto se luta por conservar a pureza, nossa natureza ?? refinada, e imperceptivelmente acumula-se a boa fortuna.'

      break
    //Hexagrama 13 -
    case 13:
      titulo.innerHTML = '13 - TONG JEN - Companheirismo'

      texto.innerHTML =
        'O trigrama Chien acima de Li significa o C??u, com o Fogo embaixo: duas for??as complementares em rela????o harmoniosa. A ideia do Sol brilhando no C??u (beneficiando assim especialmente os lavradores, e as comunidades em geral) tamb??m ?? indicada. A linha passiva em posi????o central significa uma influ??ncia suave em meio ??s pessoas - a sabedoria e a preocupa????o por tudo o que mant??m as pessoas unidas.'

      poemaJulgamento.innerHTML =
        'Companheirismo em campo aberto: sucesso. <br> ?? vantajoso atravessaras grandes ??guas. <br> ?? vantajosa a perseveran??a do homem nobre.'

      julgamento.innerHTML =
        'O julgamento sublinha a consci??ncia da pessoa sobre os princ??pios construtivos subjacentes ?? sociedade, e a unidade do companheirismo em sociedade. Isto n??o ?? uma cren??a ing??nua, mas uma compreens??o de que toda coopera????o social e toda amizade (a despeito de uma diversidade infinita) requer objetivos compartilhados e atividades comuns. Esta compreens??o, quando compartilhada, pode promover grandes obras sob a lideran??a de pessoa cheia de princ??pios e organiza????o.'

      poemaImagem.innerHTML =
        'O Fogo atinge o C??u: imagem do Companheirismo. <br> Assim o homem nobre organiza comunidades, <br> E estabelece distin????es.'

      imagem.innerHTML =
        'C??u e Fogo t??m naturezas distintas, mas ambos movem-se na mesma dire????o. PAra ordenar a sociedade, os l??deres devem ceder ?? diversidade das mir??ades de seus componentes, mas organiz??-los de acordo com princ??pios universais. A ideia de uma enorme energia encerrada em duas for??as est?? aqui sublinhada, com a implica????o de que pode facilmente tornar-se incontrol??vel.'

      break

    //Hexagrama 14 -
    case 14:
      titulo.innerHTML = '14 - TA IU - A Grande propriedade'

      texto.innerHTML =
        'O FOgo (Liu) no C??u (Chien) simboliza a gl??ria e as riquezas. A linha passiva de Li na posi????o de cima sugere que um grande sucesso foi obtido por meio da humildade.'

      poemaJulgamento.innerHTML = 'A Grande PRopriedade: sublime sucesso.'

      julgamento.innerHTML =
        'A quinta linha ?? "dona" das outras - a fraca possui as fortes por sua virtude n??o ego??sta. ?? tempo de for??a regulada e harmoniosa, e do seu desfrute.'

      poemaImagem.innerHTML =
        'O Fogo no C??u: s??mbolo da Grande Propriedade. <br> O homem nobre, reprimindo o mal e encorajando o bem, <br> ?? aben??oado por seguir as leis do C??u.'

      imagem.innerHTML =
        'Quando se ?? rico, quer na felicidade, quer nas riquezas, ?? preciso conduzir-se com o mesmo cuidado que quando em perigo. De outro modo, a felicidade se transforma em permissividade e o mau   car??ter gerar?? o mal. O Sol est?? alto no C??u e come??a logo a decair. Se se sentir que est?? faltando algo, ?? uma falha espiritual.'

      break
    //Hexagrama 15 -
    case 15:
      titulo.innerHTML = '15 - KIEN - Humildade'

      texto.innerHTML =
        'Uma montanha (Ken) atr??s da Terra (Kun) implica uma grande acidente geogr??fico em meio a uma plan??cie. Isto significa a verdadeira mod??stia, destacando-se bem para que todos a vejam. O atributo de Ken, enquanto filho mais jovem do Criador, implica as qualidades e propriedades espirituais trazidas ?? Terra. A real mod??stia funciona examinando-se a pr??pria situa????o e o pr??prio psiquismo, e ordenando a estes de acordo com os princ??pios mais elevados. A Terra acima da Montanha tamb??m sugere uma qualidade simples e sem sofistica????o de um esp??rito elevado.'

      poemaJulgamento.innerHTML =
        'A Humildade cria o sucesso. <br> O homem nobre persevera at?? o fim.'

      julgamento.innerHTML =
        'A polidez e a mod??stia geram o sucesso e mant??m um homem, uma vez tendo atingido riqueza ou posi????o. O s??bio sempre se lembra disto nos altos e baixos da vida.'

      poemaImagem.innerHTML =
        'Uma Montanha no centro da Terra: s??mbolo da Humildade. <br> O homem nobre reduz o excessivo, e aumenta o que ?? deficiente; <br> Assim, pesa e equilibra.'

      imagem.innerHTML =
        'As montanhas gradualmente se desgastam: os vales s??o enchidos por geleiras e inunda????es. Assim, a humildade trabalha imperceptivelmente, constantemente. Por esta raz??o, os chineses viam a humildade acima de qualquer outra virtude. <br> O s??bio, entendendo que o fado ?? inelut??vel, ajusta as condi????es, e a si mesmo para evitar extremos, e assim mant??m uma vida harmoniosa. Se isto for feito por motivos mesquinhos, o resultado ?? uma preocupa????o e restri????es constantes.'

      break

    //Hexagrama 16 -
    case 16:
      titulo.innerHTML = '16 - YU - Entusiasmo'

      texto.innerHTML =
        'Chen (o Trov??o; o estimulante) sobre Kun (a Terra) indica enorme criatividade, ou entusiasmo; como uma m??sica poderosa que a todos inspira. O conselho de Yu e aplicar energia sem cuidados ou prepara????o. O "lado negro" aqui ?? uma tend??ncia a usar excesso de for??a.'

      poemaJulgamento.innerHTML =
        'EEntusiasmo. ?? vantajoso arranjar auxiliares e p??r os ex??rcitos para marchar.'

      julgamento.innerHTML =
        'O tempo est?? favor??velpara preparar e come??ar aventuras. Os atributos do movimento (Chen) e da devo????o (Kun) sugerem que isto deve ser feito com o aux??lio dos outros adaptando-se ??s suas ideias e necessidades. Pode-se assim evitar a oposi????o, mesmo que invis??vel.'

      poemaImagem.innerHTML =
        'O Trov??o sai da Terra, s??mbolo do Entusiasmo. <br> Assim os antigos reis compunham m??sicas para louvar os homens de m??rito. <br> E as ofereciam em honra a Deus, <br> Na presen??a de seus esp??ritos ancestrais.'

      imagem.innerHTML =
        'A mpusica pode suavizar as emo????es e dissipar tens??es, assim como o raio purifica o ar. Inspira e move as pessoas pela harmonia de sua composi????o. Isto deve estar de acordo com ideais elevados, ou metaf??sicos. A ??nfase dada aqui ao ritual religioso implica que somente por uma intera????o correta entre o espiritual e o material (ou o idealista e o pr??tico) nas suas considera????es, as for??as poderosas deste tempo poder??o ser estabilizadas.'

      break

    //Hexagrama 17 -
    case 17:
      titulo.innerHTML = '17 - SUEI - S??quito'

      texto.innerHTML =
        'Em cima, est?? Tui (a filha mais jovem, a Alegria) e, embaixo, Chen (o filho mais velho, o Despertar). Sugere um velho que se inclina perante a mo??a. Os atributos dos trigramas tamb??m sugerem algu??m cheio de poder criador e aparece feliz e agrad??vel.'

      poemaJulgamento.innerHTML =
        'O S??quito traz um sublime sucesso. <br> A perseveran??a ?? vantajosa, sem desonra.'

      julgamento.innerHTML =
        'Para se tornar l??der poderoso, ?? preciso adaptar-se ??s demandas dos outros, por mais tolas ou desnecess??rias que sejam. Tratando-se os outros cinicamente, tornando-nos frustrados, e causamos conflitos. ?? preciso perseverar para reter a harmonia e confian??a entre os outros que nos ap??iam.'

      poemaImagem.innerHTML =
        'No meio do Lago, o Trov??o, s??mbolo do S??quito. <br> O homem nobre se retira, ao cair da noite. <br> E repousa em casa.'

      imagem.innerHTML =
        'O outono (Suei) indica o empalidecer do brilhante e do forte. ?? um tempo de ganhos f??ceis e perdas f??ceis, tendendo para a perda. Adapte-se, conservando as for??as.'

      break

    //Hexagrama 18 -
    case 18:
      titulo.innerHTML = '18 - GUIU - Recupera????o do Deteriorado'

      texto.innerHTML =
        'Sun (o Vento, embaixo) sopra ao p?? da Montanha (Ken). Isto implica em destrui????o; plantas desenraizadas, pomares arruinados. Mas o tempo indicado pela primavera (Sun) seguindo-se ao inverno (Ken) indica a mudan??a. Indica tamb??m trabalho duro. Em neg??cios, comunidades, rela????es, etc., estabelecidos, Sun indica arranjos fundamentalmente maus ou incompat??veis'

      poemaJulgamento.innerHTML =
        'A Recupera????o do Deteriorado possui um supremo sucesso. <br> ?? vantajoso cruzar as grandes ??guas. <br> Antes de come??ar, tr??s dias; <br> Depois de come??ar, tr??s dias.'

      julgamento.innerHTML =
        'Guiu indica perdas e problemas presentes ou iminentes. A causa est?? predominantemente nas pr??prias atitudes e comportamento. A pessoa se confundiu ou ignorou responsabilidades, ou foi desonesta e d??plice. A ru??na ?? inevit??vel. E precisamente por isto, este hexagrama ?? considerado fasto. Tempo de a????o en??rgica e decisiva, para reparar o mal feito. ?? imperativo considerar e contemplar antes e depois de come??ar.'

      poemaImagem.innerHTML =
        'O Vento soprando ao p?? da Montanha simboliza a Deteriora????o. <br> Assim, o homem nobre movimenta o povo <br> E fortifica seu esp??rito.'

      imagem.innerHTML =
        'Quando tudo est?? destru??do, ou corre perigo, o s??bio trabalha muito visando uma reorganiza????o ordenada. O povo e os amigos precisam ser mobilizados, e ent??o condi????es s??lidas e virtuosas devem ser estabelecidas.'

      break

    //Hexagrama 19 -
    case 19:
      titulo.innerHTML = '19 - LIN - Aproxima????o'

      texto.innerHTML =
        'Tui, a filha mais jovem, embaixo, ou atr??s de Kun, a m??e, indica a imagem da autoridade bondosa, e da correta rela????o de proximidade entre duas pessoas destas naturezas, uma "acima" da outra.'

      poemaJulgamento.innerHTML =
        'Aproxima????o: sublime sucesso, <br> A perseveran??a ?? vantajosa. <br> O infort??nio, quando vier o oitavo m??s.'

      julgamento.innerHTML =
        'Um tempo de boa fortuna: as linhas cheias ascendentes indicam crescimento e energia. Mas o aviso quanto ao oitavo m??s ?? que se deve estar preparado, em guarda contra a pr??pria conduta e constantemente atento aos sinais dos tempos.'

      poemaImagem.innerHTML =
        'Acima do Lago, a Terra: s??mbolo da Aproxima????o. <br> Assim o homem nobre ?? inexaur??vel na alimenta????o <br> No sustento e na prote????o do povo'

      imagem.innerHTML =
        'A Terra em cima do LAgo indica a posi????o elevada de uma pessoa, e a sua atitude superior para com outrem. O curso correto ?? educar (nutrir) pelo exemplo e pela preocupa????o com quem est?? mais abaixo.'

      break

    //Hexagrama 20 -
    case 20:
      titulo.innerHTML = '20 - KUAN - A vis??o'

      texto.innerHTML =
        'O Vento (Sun) acima da Terra (Kun) sugere o vento soprando a areia, ou os in??teis esfor??os do ar (ou atividade mental) para ordenar a Terra (as coisas materiais). N??o ?? tempo de empreender nada de novo, mas ordenar os neg??cios, como os antigos lavradores no tempo de Kuan (fim d setembro, at?? o meio de outubro), que armazenavam suas colheitas e come??avam o longo trabalho de reparar e preparar as ferramentas e tudo o mais para o pr??ximo ano.'

      poemaJulgamento.innerHTML =
        'A Vis??o. A ablu????o foi feita, <br> Mas n??o ainda o sacrif??cio. <br> O povo ergue os olhos, cheio de confian??a.'

      julgamento.innerHTML =
        'O momento entre a ablu????o ritual e o savrif??cio ?? o indicado. Os que est??o encarregados de projetos, ou os que influenciam aos outros, devem ter grande sensibilidade em rela????o ??s suas responsabilidades. <br> O formato do hexagrama, an??logo a uma antiga torre chinesa de muralha, tamb??m simboliza o Tao - Caminho ao longo do qual ou pelo qual toda vida deve elborar sua exist??ncia. Intensifica as ideias de contempla????o, pois o Tao serve de s??mbolo de todos, como os que est??o presentes ao sacrif??cio, respeitosamente olhando par cima. Assim o sujeito ?? n??o somente algu??m que medita (ou mais mundanamente, algu??m de amplas vis??es ou profundo a respeito das coisas), mas tamb??m quem ?? contemplado.'

      poemaImagem.innerHTML =
        'O Vento sobre a Terra: s??mbolo da Vis??o. <br> Assim os antigos reis visitavam as regi??es do mundo, <br> Contemplavam os povos, e os ensinavam.'

      imagem.innerHTML =
        'Isto refere-se ??s viagens feitas pelos governantes chineses par "ficr perto ds ra??zes da grma" (contemplar) e exercitar sua influ??ncia (ser contemplado pelo povo). Um homem forte, influente e s??bio ?? capaz, por uma investiga????o profunda e sem preconceitos, de causar grandes benef??cios. Isto, de novo, ?? um s??mbolo geral do Tao, o caminho e a porta do "eterno presente" e s??mbolo de claridade e equil??brio.'

      break

    //Hexagrama 21 -
    case 21:
      titulo.innerHTML = '21 - CHIH HOH - Morder de Trav??s'

      texto.innerHTML =
        'As caracter??sticas de Li (o rel??mpago, em cima) e Chen (o trov??o, embaixo) s??o combinadas aqui. A forma do hexagrama sugere uma mordedura vigorosa (que morde atrav??s dos obst??culos). Como este simbolismo sugere, Chih Hoh indica problemas ou dificuldades, no come??o.'

      poemaJulgamento.innerHTML =
        'Morder de Trav??s: sucesso. <br> ?? vantajoso administrar justi??a.'

      julgamento.innerHTML =
        'A forma do hegrama sugere uma boca aberta com um obst??culo entre os dentes. Assim o Julgamento aponta um obst??culo ?? uni??o ou harmoni, sa?? a necessidade de "morder de trav??s" para sua remo????o. Os atributos dos trigramas indicam o equil??brio que deve ser atingido em "administrar a justi??a". Li, o Aderente, ?? brando, ao passo que Chen, o Estimulante, ?? duro. As a????es, vigorosas, n??o devem ser apressadas, severas, ou arbitr??rias, mas cuidadosamente ponderadas, de modo a adequar-se a todas as circunst??ncias. '

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 22 -
    case 22:
      titulo.innerHTML = '22 - PI - A Gra??a'

      texto.innerHTML =
        'Ken, o trigrama superior, significa "Montanha"; Li, embaixo, ?? o Fogo, o brilho, ou o Sol. Da?? a imagem do Sol brilhando e iluminando toda a montanha. A mesma ideia de ilumina????i no s??mbolo de fogo na montanha. Os atributos pessoais de Ken e Li - respectivamente, o filho mais jovem e a filha do meio - indicam um casal jovem. Estas imagens implicam beleza e energia, que devem ser reguladas por sensibilidade est??tica, para durar. A uni??o de um jovem com uma mulher que atingir?? meia idade enquanto ele ainda for jovem e irrespons??vel adverte contra tornar a beleza e a estabilidade como bens permanentes.'

      poemaJulgamento.innerHTML =
        'A Gra??a: o sucesso em pequenos empreendimentos.'

      julgamento.innerHTML =
        'A estrutura do hexagrama enfatiza a forma, mais que o conte??do. Assim, s?? as pequenas coisas s??o favorecidas. Os comentadores chineses apontaram a ideia subsidi??ria de contempla????o ou lucidez (associadas a um objeto bonito, ou agrad??vel), ao passo que sublinharam que a arte ?? apenas a cobertura do bolo da realidade. Nada tem a ver com as condi????es b??sicas e essenciais da vida.'

      poemaImagem.innerHTML =
        'Fogo queimando ao p?? da Montanha: s??mbolo da Gra??a. <br> Assim o homem nobre clarifica as quest??es cotidianas, <br> Mas n??o julga assim as grandes quest??es.'

      imagem.innerHTML =
        'As quest??es de import??ncia ef??mera podem ser vantajosamente ordenadas, mas n??o se deve enfrentar grandes neg??cios ou transforma????es. A est??tica e a gra??a ajudar??o nos assuntos do dia a dia.'

      break

    //Hexagrama 23 -
    case 23:
      titulo.innerHTML = '23 - POH - Desintegra????o'

      texto.innerHTML =
        'Poh representa o apodrecimento, a dissolu????o e o infort??nio. A esta????o ?? o outono, quando tudo come??a a decair e apodrecer. As cinco linhas yin sugerem as for??as fracas e escuras subindo para vencer a linha forte. A forma do hexagrama sugere uma casa da qual restaram apenas paredes e telhado. A estrutura est?? l?? , mas pronta para desabar. '

      poemaJulgamento.innerHTML =
        'Desintegra????o. <br> N??o ?? vantajoso fazer seja o que for.'
      julgamento.innerHTML =
        'A for??a criadora (a linha yang) est?? para ser suplantada pelos elementos desordenados de baixo. ?? tempo de dificuldade e infort??nio, n??o necessariamente acarretados por m??s a????es, mas n??o menos reais. S?? se pode dirigir esfor??os para o bem dos outros - os neg??cios pessoais est??o condenados.'

      poemaImagem.innerHTML =
        'A montanha sobre a Terra: s??mbolo de Desintegra????o. <br> Os superiores s?? podem garantir sua posi????o por meio de ricos dons aos inferiores.'

      imagem.innerHTML =
        'Ken, a Montanha, fica exposta aos golpes desgastantes da natureza sobre Ken, a Terra. N??o se deve ceder ?? dsordem que amea??a, mas suportar os problemas com dignidade, e conservar a virtude (que houver) por um comportamento n??o ego??sta. A situa????o n??o pode progredir, mas, com absoluta retid??o, pode-se salv??-la  do desastre'

      break

    //Hexagrama 24 -
    case 24:
      titulo.innerHTML = '24 - FU - Retorno'

      texto.innerHTML =
        'Fu, associado ao solst??cio de inverno, o ponto de vitalidade mais baixa, indica um decr??scimo de m?? fortuna. A ??nica linha cheia embaixo representa a for??a yang, quente e criadora, ascendendo. O trigrama inferior Chen (Madeira) com Kun (Terra) simboliza as ra??zes de uma planta. Da?? termos a ideia de crescimento iminente, novas oportunidades e sucesso em potencial.'

      poemaJulgamento.innerHTML =
        'Retorno: sucesso. <br> N??o h?? nada de errado em sair e entrar de novo. <br> Os amigos v??m sem mal agum. <br> O curso do Tao ?? ir e vir. <br> No s??timo dia, o Retorno. <br> ?? vantajoso ter para onde ir.'

      julgamento.innerHTML =
        'Depois da retirada das for??as criadoras, elas retornam. Nos neg??cios humanos, os de car??ter e mente de mesma natureza unem-se harmoniosamente em novos empreendimentos. Isto espelha o movimento do Tao. A s??tima etapa ?? a do retorno; um novo ciclo, ap??s o velho.'

      poemaImagem.innerHTML =
        'O Trov??o dentro da Terra simbolizao Retorno. <br> Assim, nos tempos antigos, os reis fechavam os passos, no solst??cio de inverno. <br> Os mercadores e viajantes n??o circulavam mais. <br> E os governantes n??o visitavam suas prov??ncias.'

      imagem.innerHTML =
        ' O princ??pio do repouso, enquanto a energia da vida ?? retirada dentro da Terra, significa que tudo deve ser tratado cuidadosamente e n??o deve ser apressado. N??o se pode for??ar um bot??o de flor a abrir; pode-se e deve-se , entretanto, preparar o solo para seu futuro crescimento. Boas perspectivas para neg??cios estabelecidos, muito embora o tempo seja menos adequado para projetos inteiramente novos.'

      break

    //Hexagrama 25 -
    case 25:
      titulo.innerHTML = '25 - WU GANG - Inoc??ncia'

      texto.innerHTML =
        'De Chien (em cima) vem o atributo da lei celestial, criadora; embaixo est?? Chen - o movimento e a for??a. Assim temos a ideia de energia seguindo as leis do C??u; um estado natural e feliz nos neg??cios. ?? um tempo de epreendimentos.'

      poemaJulgamento.innerHTML =
        'A inoc??ncia: sublime sucesso. <br> A perseveran??a ?? vantajosa. <br> Se n??o se ?? o que se devia ser, ent??o o infort??nio. <br> N??o ?? vantajoso empreender o que quer que seja.'

      julgamento.innerHTML =
        'A pureza e a bondade da genu??na inoc??ncia traz o sucesso, quando se persevera, porque nosso caminho est?? de acordo com o movimento de for??as superiores. Se meramente se ostenta uma apar??ncia natural e de boa ??ndole, ou se se tempera o pr??prio instinto com compromissos "pol??ticos" ou pr??ticos, h?? pouca vantagem a derivar, e progressivamente perde-se contato com o Caminho'

      poemaImagem.innerHTML =
        'O Trov??o circulando sob o C??u: s??mbolo da Inoc??ncia. <br> Esta ?? a qualidade de todas as coisas. <br> Assim, outrora, os reis virtuosos e de acordo com o tempo <br> Cuidavam e alimentavam todas as criaturas.'

      imagem.innerHTML =
        'As energias da vida come??am a emergir de novo no princ??pio da primavera, e ent??o alimentam harmoniosamente suas atividades. A ideia do trov??o na primavera indica uma possibilidade extra - s??bitas dificuldades, ou mudan??as inesperadas nas condi????es. A for??a fundamental agora ?? a criadora, e a do crescimento. Assim, os problemas n??o devem ser artificialmente removidos, mas deve-se adaptar t??o naturalmente e sem artif??cio quanto poss??vel.'
      break

    //Hexagrama 26 -
    case 26:
      titulo.innerHTML = '26 - TA KHU - O Poder de Cativar do Grande'

      texto.innerHTML =
        'Ta Khu representa o poder ativo do C??u (Chien, embaixo) que ?? capturadopela imobilidade (Ken). Assim, temos uma situa????o de grande energia potencial - assim como um rio, restrito pelas paredes de uma barragem, podendo produzir energia. As principais conota????es deste hexagrama s??o as ideias de grandes reservat??rios de energia; grande dom??nio de uma grande energia; e fonte de alimento (que pode ser espiritual ou material).'

      poemaJulgamento.innerHTML =
        'O Poder de Cativar do Grande: a perseveran??a ?? vantajosa. <br> N??o comer em casa traz a fortuna. <br> ?? vantajoso cruzar as grandes ??guas.'

      julgamento.innerHTML =
        'As imagens apontam muito trabalho ?? frente. A qualidade desta ??poca (a energia sob controle) aponta para armazenar as pr??prias energias e conservar a virtude pelo esfor??o constante, junto com alguma disciplina ??til, assim como a medita????o. Quando as energias f??sica e ps??quica est??o em harmonia, pode-se permanecer em resson??ncia com o fluxo das energias exteriores; assim, grandes empreendimentos t??m chance de sucesso.'

      poemaImagem.innerHTML =
        'O C??u no meio da Montanha: s??mbolo do Poder de Cativar do Grande <br> Assim, o homem nobre aprende as palavras de sabedoria e os grandes feitos do passado, <br> Para assimm edificar o seu car??ter.'

      imagem.innerHTML =
        'Dois amplos significados est??o indicados aqui: um refere-se ao que est?? acumulado, seja riqueza material, ou verdades duradouras; o outro indica uma pessoa que absorveu a aquiess??ncia dos que a cercam, e agora deve estar em guarda contra a sua pr??pria complac??ncia, ou que precisa ganhara confian??a dos outros para ter sucesso.'

      break

    //Hexagrama 27 -
    case 27:
      titulo.innerHTML = ' 27 - YI - Alimenta????o'

      texto.innerHTML =
        'Debaixo do trigrama Ken (Imobiliza????o), temos Chen (Movimento). O fixo em cima e m??vel embaixo (junto com a forma do hexagrama, que sugere uma boca aberta) d?? a Yi o atributo de uma boca, atrav??s da qual a alimenta????o passa. Como as plantas e as ervas que crescem ao p?? da montanha (Ken ?? a montanha; Chen ?? a madeira, ou subst??ncia vegetal) est??o entre as mais nutritivas, a ideia fica refor??ada. A imagem do trov??o (Chen) rolando pela base da montanha indica que a chuva que alimenta logo vir??. As advert??ncias contidas em Yi referem-se a atingir a harmonia e manter a modera????o (pois a alimenta????o imoderada certamente levar??, pelo menos, ao desconforto).'

      poemaJulgamento.innerHTML =
        'Alimenta????o: a perseveran??a traz a fortuna. <br> D?? aten????o a prover o alimento, <br> E o alimento <br> ?? algo que se procura sozinho.'

      julgamento.innerHTML =
        'A ideia ?? expandida para incluir a pessoa alimentando outras - seja isto literal ou metaf??rico; material ou espiritual. Quando nos alimentamos, ou aos outros, ?? preciso ser cuidadoso para discriminar entre o que ?? puro e revitalizante e o que ?? indigno.'

      poemaImagem.innerHTML =
        'Tov??o ao p?? da Montanha; s??mbolo da Alimenta????o. <br> O homem nobre ?? cuidadoso com suas palavras, <br> E comedido no comer e no beber.'

      imagem.innerHTML =
        'A boca ?? um meio modificador: mastiga a comida, conforma as palavras e est?? em movimento constante. Indica-se muito trabalho, com a sugest??o de que condi????es ou pessoas dif??ceis deveriam ser cultivadas e controladas. Mais tarde, ser??o ??teis.'

      break

    //Hexagrama 28 -
    case 28:
      titulo.innerHTML = '28 - TA KUO - Preponder??ncia do Grande'

      texto.innerHTML =
        'A forma do hexagrama representa uma viga espessa e pesada, que est?? fraca nas extremidades. Assim, n??o tem suporte firme. OS dois trigramas Tui (a ??gua, ou o Lago, em cima) e Sun (a Madeira, a ??rvore, embaixo) sugerem ??rvores debaixo d??gua - uma inunda????o. Isto indica especificamente o excesso, e com a ideia derivada do formato do hexagrama, apresenta a imagem de uma situa????o perigosa, que n??o deve continuar.'

      poemaJulgamento.innerHTML =
        'Preponder??ncia do Grande: a viga est?? envergada e vai romper-se. <br> ?? vantajoso avan??ar rumo a objetivos. Sucesso.'

      julgamento.innerHTML =
        'A imagem sugere um tempo de graves acontecimentos. V??rias situa????es s??o sugeridas - os neg??cios ou os sentimentos podem estar complicados demais. Muito embora os problemas sejam quase inevit??veis, as linhas fortes no centro de Ta Kuo mostram a capacidade do sujeito suportar as dificuldades que se aproximam. A solidez deste hexagrama insiste em que a maneira de resolver os problemas (enquanto forem sol??veis) ?? por meio de uma suave aplica????o do entendimento.'

      poemaImagem.innerHTML =
        'O lago elevando-se acima das ??rvores: s??mbolo da Preponder??ncia do Grande. <br> Portanto, o homem superior fica s??, inabal??vel. <br> Se precisar renunciar ao mundo, n??o ter?? ressentimento.'

      imagem.innerHTML =
        'A atitude do s??bio. Muito embora s??, ?? preciso ser firme como a ??rvore (Sun, embaixo), sem perder uma atitude aberta e feliz para com a vida (Tui, o Feliz, em cima). A imagem da inunda????o refor??a um aspecto da situa????o - as ??guas da inunda????o, mais cedo ou mais tarde, retiram-se: os problemas s??o tempor??rios. <br> Lembre-se de que, por mais agrad??veis ou lucrativas que as coisas possam estar agora, n??o v??o durar assim pra sempre.'

      break

    //Hexagrama 29 -
    case 29:
      titulo.innerHTML = '29 - Kan - Abismo'

      texto.innerHTML =
        'Kan, dois trigramas prim??rios de mesmo nome, significa perigo, a crise e o envolvimento num conflito. Literalmente, o "duplo perigo". Pode indicar uma atitude perante a vida, assim como a mostrada pela pessoa que constantemente se defronta ou cria crises para que sua vida tenha significado. Mais comumente, indica uma situa????o perigosa ?? qual urge adaptar-se. O perigo significa aquilo atrav??s do qual podemos nos ferir, mas tamb??m pode significar progresso e aperfei??oamento interior, pela supera????o das prova????es.'

      poemaJulgamento.innerHTML =
        'O Abismo repetido: a sinceridade significa harmonia no cora????o, <br> E aqui vir?? o sucesso em tudo o que fizer.'

      julgamento.innerHTML =
        'Como a ??gua, escoando avante sempre que poss??vel, a sinceridade permite-nos entender as profundezas de uma situa????o, e tomar uma a????o eficaz. O perigo d?? for??a ao esp??rito, e refor??a a consci??ncia de que a paz interior ?? o ingrediente mais importante do sucesso. Com a calma interior, pode-se mover r??pido ?? frente, e evitar o desastre.'

      poemaImagem.innerHTML =
        'A ??gua brota do Abismo, sem cessar: s??mbolo do Abismo repetido. <br> Portanto o homem nobre mant??m sempre a sua virtude, <br> E persevera em sua pr??tica de instruir'

      imagem.innerHTML =
        'A ??gua, num fluir incessante, simboliza a aproxima????o s??bia ?? virtude. ?? preciso garantir que a virtude permeie nossa vida, e que seja de calibre a ponto de enfrentar as mais perturbadoras e inusitadas condi????es. ?? preciso dedicar-se constantemente ao auto aperfei??oamento, e evitar o ego??smo influenciando os outros com a pr??pria virtude'

      break

    //Hexagrama 30 -
    case 30:
      titulo.innerHTML = '30 - LI - Fogo'

      texto.innerHTML =
        'O trigrama Li (o que se apega, o brilho, o Fogo) repetido, comp??e este hexagrama. A duplica????o destas qualidades s?? pode significar uma pessoa fogosa, de pavio curto, ou uma situa????o explosiva e inst??vel. Pode tamb??m referir-se a apego. O apegar-se (ou atear-se) ?? tributo do Fogo. Apega-se ??quilo que o alimenta, enquanto irradia seu brilho em todas as dire????es. Em termos particulares, Li poderia referir-se a uma pessoa energ??tica e querelenta (um homem de neg??cios que se fez sozinho, talvez), ou um amante autorit??rio, cujo afeto exigente pode ser um disfarce (consciente ou n??o) de sua depend??ncia de algu??m mais. A moral ?? que a energia da motiva????o, como o Fogo, deve ser controlada, para ser construtiva, e evitar que s?? destrua.'

      poemaJulgamento.innerHTML =
        'A perseveran?? ?? vantajosa: sucesso. <br> Cuidar da vaca traz a fortuna.'

      julgamento.innerHTML =
        'A anergia radiante, simbolizada pelo fogo, est?? sendo constantemente consumida. Portanto, deve ter alguma fonte interior que perdure, ou sen??o morrer??. A perseveran??a ?? indicada pela imagem da d??cil vaca. ?? importante, para uma pessoa fogosa, reconhecer alguma depend??ncia (assim como a vaca depende do fazendeiro) e ?? tamb??m importante para ela tornar-se mais trat??vel em seu comportamento, para desenvolver lucidez e compreens??o. ?? um ant??doto vital para o comportamento excessivo e suas atitudes.'

      poemaImagem.innerHTML =
        'A claridade repetida, s??mbolo do Fogo. <br> Assim o grande homem refina o brilho <br> PAra iluminar mesmo os lugares mais escuros do mundo.'

      imagem.innerHTML =
        'Os atributos solares de Li, dobrados, enfatizam o ciclo e a regularidade do tempo. Assim, ?? preciso regular e deliberadamente refinar a qualidade l??cida e energ??tica que ?? indicada, para que sua influ??ncia possa se estender sem limite.'

      break

    //Hexagrama 31 -
    case 31:
      titulo.innerHTML = '31 - HIEN - Influ??ncia'

      texto.innerHTML =
        'Embaixo, Ken, o filho mais jovem, ou um rapaz (a for??a), cedeu ao trigrama superior, Tui, a filha mais jovem, ou a mo??a (o Feliz). De uma maneira fundamental para relacionamentos est??veis, o homem (o forte) cede ?? mulher, e a mulher, analogamente, cede ao homem. Este ?? o contrato social prim??rio, com cada companheiro subjugando suas necessidades ??s do outro. A imagem ?? a for??a calma e persistente influenciando uma parte mais fraca, que responde com alegria. Implicam-se afei????o e sensibilidade aos outros, ou a fatores externos - mas n??o a sensibilidade da introvers??o doentia.'

      poemaJulgamento.innerHTML =
        'Influ??ncia: sucesso. <br> A perseveran??a ?? vantajosa. <br> Casas com uma mo??a traz a fortuna.'

      julgamento.innerHTML =
        'Indica-se um relacionamento harmonioso e bem sucedido. Como ?? uma uni??o adequada e mutuamente afetuosa, certamente seguir-se-?? o sucesso. Isto vale para qualquer relacionamento - pessoal ou formal.'

      poemaImagem.innerHTML =
        'O Lago sobre a Montanha: s??mbolo da Influ??ncia. <br> Assim o s??bio encoraja a aproxima????o <br> Por sua capacidade de acolher.'

      imagem.innerHTML =
        'A met??fora de um lago de montanha sugere um car??ter calmo e receptivo, ao inv??s de um que, sabendo-se forte ou superior, expressa estas qualidades. A ideia de princ??pios n??o ego??stas ?? acrescida ?? no????o do forte voluntariamente subordinando-se ??s necessidades dos pobres.'

      break

    //Hexagrama 32 -
    case 32:
      titulo.innerHTML = '32 - HENG - Continuidade'

      texto.innerHTML =
        'Este hexagrama ?? o inverso do precedente: Aqui Chen (o filho mais velho, o Trov??o) est?? acima de Sun (a filha mais velha, o Suave, o Vento). Assim o ativo lidera o passivo e o Trov??o une-se ao Vento (seu companheiro natural). isto sugere um relacionamento dur??vel, consistente.'

      poemaJulgamento.innerHTML =
        'Continuidade: sucesso, sem desonra. <br> A perseveran??a ?? vantajosa. <br> ?? vantajoso ter um objetivo.'

      julgamento.innerHTML =
        'A continuidade ?? conseguida por meio da persist??ncia, no seu sentido mais profundo. ?? uma qualidade de perseverar a todo instante, no mesmo sentido divinamente criador de Vishnu, por seu constante avan??o, fechando os abismos entre cada instante, ?? medida que s??o abertos por Shiva. Isto sublinha as qualidades pessoais de for??a e sabedoria, que acompanham a busca vital do significado subjacente a tudo.'

      poemaImagem.innerHTML =
        'Trov??o e Vento: s??mbolo da Continuidade. <br> Portanto, o homem nobre permanece sempre firme, <br> Sem se desviar de seu caminho.'

      imagem.innerHTML =
        'Muito embora as duas for??as celestiais continuem se movendo e transformando-se com pouca continuidade aparente, de fato est??o sujeitas ??s leis da vida, como tudo o mais. Deve-se ter consci??ncia  disto e ser absolutamente constante, muito embora se possa mudar de t??tica ou comportamento para se acomodar ??s mudan??as circunstanciais. Em geral, a harmonia da real continuidade ?? sublinhada e distingue-se da aparente.'

      break

    //Hexagrama 33 -
    case 33:
      titulo.innerHTML = '33 - TUN - Retirada'

      texto.innerHTML =
        'Chien (o pai) em cima de Ken (Montanha, quietude) sugere um eremita isolado na Montanha. Sua ??nfase ?? no retiro em rela????o a condi????es potencialmente perigosas, inspirado por uma profunda compreens??o dos resultados, se se perseverar. O retiro, o isolamento, ou a resigna????o, aceitando-se as condi????es tais como s??o.'

      poemaJulgamento.innerHTML =
        'Retirada:sucesso. <br> Nas pequenas coisas, a perseveran??a ?? vantajosa.'

      julgamento.innerHTML =
        'As duas linhas fracas s??o as for??as hostis, em ascens??o. A pessoa prudente retrai-se - n??o fugindo, mas cedendo. Persevere, de modo que a retirada seja a melhor poss??vel.'

      poemaImagem.innerHTML =
        'Sob o C??u, a Montanha: s??mbolo da Retirada <br> O homem nobre mant??m o vulgar a dist??ncia, <br> Sem c??lera, mas com dignidade'

      imagem.innerHTML =
        'A imagem sugerida ?? a da Montanha, subindo para o C??u. O C??u parece recuar, para cima, e da mesma maneira, o s??bio mant??m uma dist??ncia digna entre ele e as influ??ncias perturbardoras. A advert??ncia contra sentimentos negativos ?? particularmente importante.'

      break

    //Hexagrama 34 -
    case 34:
      titulo.innerHTML = '34 - TA CHUANG - O Poder do que ?? Grande'

      texto.innerHTML =
        'O trigrama Chen, em cima de Chien (C??u) mostra o Trov??o no C??u. Os atributos de um jovem (for??a; movimento) acrescentam-se ?? imagem naturalista de for??a vital e jovem. De certa maneira, Ta Chuang ?? o oposto de Tun, onde as for??as escuras e hostis estavam em ascens??o. Aqui, as for??as intensas e criadoras movem-se para cima. Quando as condi????es forem favor??veis, os resultados ser??o excelentes, mas h?? sempre grande perigo de excesso e abuso de poder.'

      poemaJulgamento.innerHTML =
        'O Poder do que ?? Grande: a perseveran??a ?? vantajosa.'

      julgamento.innerHTML =
        'A imagem do Poder do que ?? Grande ?? auto-explicativa, mas os autores acrescentaram uma importante qualifica????o. ?? que o Poder do Grande deve ser temperado quer pela perseveran??a em restringir e restringir-se de acordo com o que for justo, ou perseverar e aguardar um momento mais apropriado. O que quer que se aplique, o casamento da for??a e da sensibilidade ?? vital para produzir bons e frut??feros resultados, ao inv??s de desperd??cio.'

      poemaImagem.innerHTML =
        'Trov??o l?? no c??u: s??mbolo do Poder do Grande, <br> Assim, o homem nobre n??o vai por caminhos <br> Que n??o se conformem ?? ordem.'

      imagem.innerHTML =
        'O Trov??o est?? se deslocando rumo ao C??u. Ambos t??m a tend??ncia de subir, d modo que seus movimentos est??o em harmonia. Estra tend??ncia feliz deve ser conservada n??o se fazendo nada incomp??tivel com o caminho correto - quer o caminho seja a lei, a efici??ncia, ou a simples voz interior.'

      break
    //Hexagrama 35 -
    case 35:
      titulo.innerHTML = '35 - Tchin - Progresso'

      texto.innerHTML =
        'O Sol (Li) est?? sobre a Terra (Kun) como no come??o do dia, simbolizando a influ??ncia crescente, o progresso e a prosperidade f??ceis. Em termos humanos, h?? duas partes representadas: uma ativa, apaixonada e olhando para o futuro; a outra, passiva, receptiva e l??gica. As advert??ncias aqui se referem ?? possibilidade de separa????o (o Sol "deixa" a Terra), contra a pressa indevida (o progresso do Sol ?? o s??mbolo b??sico do desenvolvimento regular, apropriado) e de relacionamentos incorretos.'

      poemaJulgamento.innerHTML =
        'O Progresso. O poderoso pr??ncipe <br> ?? honrado com presentes de muitos cavalos. <br> Num s?? dia ele ?? recebido tr??s vezes em audi??ncia.'

      julgamento.innerHTML =
        'Isto mostra um relacionamento mundano correspondendo ?? corre????o intr??nseca ao simbolismo natural. Respeitado por seus iguais, o l??der cumpre seus deveres e ?? honesto para com seu rei, que o honra. Assim, a ideia de um servo independente, mas obediente, e um senhor justo e compreensivo ?? apresentado como o alicerce do progresso em assuntos importantes.'

      poemaImagem.innerHTML =
        'O Sol erguendo-se acima da Terra: s??mbolo do Progresso. <br> Assim o homem nobre faz brilhar sua virtude'

      imagem.innerHTML =
        'O Sol da manh?? aumenta sua luz ?? medida que se ergue, deixando a escurid??o das profundezas. Assim o s??bio aperfei??oa sua posi????o e car??ter descartando os indignos e sem princ??pios. Desta maneira, ganha em auto-confian??a e virtude.'

      break

    //Hexagrama 36 -
    case 36:
      titulo.innerHTML = '36 - MING YI - Oscurecimento da Luz'

      texto.innerHTML =
        'Aqui, a posi????o dos trigramas ?? o oposto da Tchin. Aqui, Kun, a Terra, est?? acima de Li, o Sol, ou a Luz. Da?? a imagemda noite se aproximando, ou a atenua????o da luz. As implica????es incluem a acumula????o esmagadora de for??as hostis ou negativas (da fraqueza), e a onipot??ncia de uma autoridade inimiga de suas cren??as. Nos relacionamentos, pode-se achar as coisas tristes e grotescas, ao passo que todos parecem alegremente inconscientes destas condi????es (para voc??) odiosas.'

      poemaJulgamento.innerHTML =
        'Obscurecimento da Luz. <br> ?? vantajoso ser perseverante na adversidade.'

      julgamento.innerHTML =
        'A atividade fere quem a inicia, e pouco sucesso, ou nenhum. ?? preciso "esconder a l??mpada debaixo do alqueire", se sua l??mpada estiver produzindo qualquer brilho ??til. Caso contr??rio, ?? preciso trabalhar constantemente para aperfei??oar sua virtude. Assim aprendem-se li????es inestim??veis nestes tempos. e fica-se preparado quando vier um tempo favor??vel para a a????o.'

      poemaImagem.innerHTML =
        'O Sol mergulhando dentro da Terra simboliza o Obscurecimento da Luz. <br> Desta maneira, o homem nobre vive em meio ao povo; <br> Vela seu brilho e, no entanto, sua virtude ainda brilha.'

      imagem.innerHTML =
        'O s??bio agora deve ser cauteloso, reservado e cheio de pondera????o. Quando as for??as ambientes s??o hostis, como indicado por Ming Yi, n??o se deve provocar uma inimizade abertamente, por um comportamento imodesto.'

      break

    //Hexagrama 37 -
    case 37:
      titulo.innerHTML = '37 - KIA JEN - Fam??lia'

      texto.innerHTML =
        'As linhas indicam a estrutura familiar. Os membros, indicados por linhas yin ou yang correlacionam-se com o parceiro certo no hexagrama, assim a ??nfase ?? dirigida para os relacionamentos corretos, coopera????o, responsabilidades e atitudes harmoniosas e consci??nciosas.'

      poemaJulgamento.innerHTML =
        'A Fam??lia. A perseveran??a da mulher ?? vantajosa.'

      julgamento.innerHTML =
        'Se as atitudes corretas prevalecerem, a estrutura familiar permanecer?? forte e contribuir?? para uma sociedade harmoniosa. A uni??o b??sica ?? a do homem e da mulher. ?? a devo????o dela e sua lealdade perseverante que mant??m esta uni??o. A mulher, portanto, ?? o alicerce do casamento na sociedade.'

      poemaImagem.innerHTML =
        'O Vento sai do Fogo, simbolizando a Fam??lia. <br> Assim, a fala do homem nobre possui subst??ncia, <br> E seu estilo de vida, perman??ncia.'

      imagem.innerHTML =
        'O homem ?? a for??a exterior da fam??lia. Como uma chama que precisa de combust??vel, suas palavras precisam alicer??ar-se em alguma subst??ncia: como o vento soprando uma vela, sua conduta deve sustentar palavras, para lhes dar efic??cia.'

      break

    //Hexagrama 38 -
    case 38:
      titulo.innerHTML = '38 - KUEI - Oposi????o'

      texto.innerHTML =
        'Li (a Chama) e Tui (o Lago, embaixo) n??o t??m intera????o: a tend??ncia da Chama ?? para cima; a da ??gua, para baixo. Assim, a condi????o corrente ?? de desuni??o. Pode significar um conflito atual ou latente.'

      poemaJulgamento.innerHTML = 'Oposi????o. Nas pequenas coisas, a fortuna.'

      julgamento.innerHTML =
        'A situa????o pode parecer pesada e estagnada, sem uni??o criativa, mas uma vista mais ampla mostra que cont??m elementos opostos que podem, juntos, ser criativos. Isto pode ser externo, ou subjetivo. Mas h?? obst??culos de ordem pr??tica e, assim, s?? os feitos menores s??o poss??veis.'

      poemaImagem.innerHTML =
        'O Fogo acima do Lago simboliza a Oposi????o. <br> Assim, em meio ?? multid??o, <br> O homem nobre conserva sua individualidade.'

      imagem.innerHTML =
        'Fogo e ??gua sempre ret??m sua pr??pria natureza, por mais pr??xima que seja sua associa????o. Analogamente, uma pessoa s??bia n??o deve ser afetadapela moda prevalente, mas deve primeiro confiar em suas pr??prias normas. Isto tamb??m indicacomo se pode mudar para melhor. Quando se est?? isoladoo, ou em conflito com coisas ou pessoas, deve-se ficar mais generoso para com os outros, ao passo que se ret??m a pr??pria individualidade.'

      break

    //Hexagrama 39 -
    case 39:
      titulo.innerHTML = '39 - KIEN - Obst??culo'

      texto.innerHTML =
        'O hexagrama significa dificuldade, perigo ou obstru????o. Kan (a ??gua) est?? em cima de Ken (a Montanha), representando um lago tempor??rio que pode transbordar e inundar as aldeias e planta????es l?? embaixo. A imagem do abismo ?? frente (Kan) com a Montanha atr??s, indica o perigo ou a dificuldade do movimento.'

      poemaJulgamento.innerHTML =
        'Obst??culo. O sudoeste ?? vantajoso.<br> O nordeste n??o ?? vantajoso. <br> ?? vantajoso ir ver o grande homem. <br> A perseveran??a traz fortuna.'

      julgamento.innerHTML =
        'O sudoeste ?? associado ao trigrama Kun (a Plan??cie) onde a for??a perigosa da ??gua seria aquietada em benef??cio da comunidade. A lideran??a de uma autoridade mais alta - quer seja pessoa viva, conjunto de regras ou um ideal - pode ser necess??ria para escapar. Concentre-se em conservar uma atitude harmoniosa e n??o se apresse em adotar "solu????es" convencionais, em ??ltima an??lise, in??teis.'

      poemaImagem.innerHTML =
        '??gua sobre a Montanha simboliza o Obst??culo. <br> O homem nobre dirige sua aten????o para dentro <br> E paerfei??oa se car??ter.'

      imagem.innerHTML =
        'O desagrado que experimentamos quando em dificuldades ??, o mais das vezes, causado por nossas pr??prias rea????es. N??o se deve tentar esclarecer as coisas neur??tica e ineficazmente, mas deve-se desenvolver sensibilidade para a pr??pria condi????o e uma atitude que crie harmonia.'

      break

    //Hexagrama 40 -
    case 40:
      titulo.innerHTML = '40 - HIAI - Liberta????o'

      texto.innerHTML =
        'Este hexagrama representa uma liberta????o das preocupa????es de Kien. O tempo indicado ?? a primavera, ou amanh??: ambos significam vida nova e oportunidades de trabalho intenso. Os sinais de salva????o iminente ou sucesso trazaem o perigo de relaxar prematuramente e tamb??m de assumir atividade interrompida pelos problemas passados. Olhe para o futuro.'

      poemaJulgamento.innerHTML =
        'Liberta????o. O sudoeste ?? vantajoso. <br> Se nada resta por fazer, <br> O retorno ?? fonte de fortuna. <br> Se algo resta por fazer, <br> A pressa ?? fonte de fortuna.'

      julgamento.innerHTML =
        'As condi????es tendem a retornar ao normal (o sudoeste simboliza uma plan??cie, onde h?? atividade humana convencional) e as coisas devem ser dispostas adequadamente o mais cedo poss??vel. Tenha cuidado com excesso de entusiasmo ou outros excessos. Deve-se ficar em guarda, de modo que se est?? livre para progredir junto com os novos tempos.'

      poemaImagem.innerHTML =
        'O Trov??o, seguido da chuva: s??mbolo da Liberta????o. <br> Assim o homem nobre perdoa os erros <br> E absolve os pecados.'

      imagem.innerHTML =
        'A liberta????o da tens??o ?? o que segue ??s tempestades: analogamente, o perd??o dos erros e malfeitos aclara a situa????o. Este ?? o hexagrama simbolizando o "koan" zen-budista, ou a experi??ncia kumita nas artes marciais - ambas englobam a ang??stia mental e a confus??o, seguidas por uma sutil e intensa claridade. ?? a lucidez que se deve ter antes de qualquer grande empresa.'

      break

    //Hexagrama 41 -
    case 41:
      titulo.innerHTML = '41 - SUEN - Diminui????o'

      texto.innerHTML =
        'A diminui????o, e mesmo a perda, ?? simbolizada por Ken, a Montanha, em cima de Tui, o Lago - as faldas da Montanha desabando dentro do Lago. Mas, enquanto uma parte ?? reduzida, a outra ?? aumentada. A perda de um ?? o ganho de outro. O tema de Suen concerne a adapta????o ??s circunst??ncias.'

      poemaJulgamento.innerHTML =
        'Diminui????o: aliada ?? sinceridade produz uma grande fortuna, sem desonra. <br> Pode-se perseverar. <br> ?? vantajoso empreender alguma coisa. <br> Como fazer? <br> Pela oferenda de duas tijelas de arroz.'

      julgamento.innerHTML =
        'Entender a inevitabilidade da ??poca ?? de import??ncia vital e fundamental. Austeridade, simplicidade, humildade s??o corretas e apropriadas. Com esta compreens??o simples, pode-se atingir um grande objetivo. O sacrif??cio de duas tijelas de arroz - como a par??bola do ??bolo da vi??va (do Evangelho segundo S??o Lucas) - indica que, mesmo a menor das a????es, se sincera, pode ser boa.'

      poemaImagem.innerHTML =
        'O Lago minando o sop?? da Montanha: s??mbolo da Diminui????o. <br> Assim o homem nobre refreia sua ira <br> E controla seus desejos.'

      imagem.innerHTML =
        'A Montanha, simbolizando a obstina????o, a dureza, mesmo a c??lera, desmorona dentro do Lago, que ?? a alegria e a felicidade. A dissolu????o da adureza traz a alegria. A alegria hist??rica e fr??vola ?? evitada pela evapora????o do LAgo, dando uma umidade ben??fica ??s enconstas da Montanha. N??o h?? benef??cio na tristeza. pode-se perder amigos, os dividendos das a????es podem diminuir, mas reajustando os pr??prios valores, podemos melhorar nosso car??ter.'

      break

    //Hexagrama 42 -
    case 42:
      titulo.innerHTML = '42 - YI - Aumento'

      texto.innerHTML = 'Sugere uma floresta fervilhante, cheiia de flores e plantas produzidas por Suen, em cima e Chen, a for??a que desperta, embaixo. Tamb??m a linha inferior do trigrama superior ?? considerada como tendo cedido a uma linha yin, ou fraca. Isto sugere considera????o e servi??o prestado pelo forte. Tal ren??ncia ?? considerada supremamnente auspiciosa'

      poemaJulgamento.innerHTML = 'Aumento: ?? vantajoso empreender alguma coisa. <br> ?? vantajoso atravessar as grandes ??guas.'

      julgamento.innerHTML = 'O tempo do aumento n??o durar??, portanto agora ?? hora de agir, sem hesita????o. ISto se aplica mesmo a grandes e perigosos empreendimentos.'

      poemaImagem.innerHTML = 'Vento e Trov??o: s??mbolo do Aumento. <br> Assim o homem nobre observa o bem, e o imita; <br> Observa o mal, e se desfaz dele.'

      imagem.innerHTML = 'Aqui, um aspecto dual, mas enquanto Suen fala de diminui????o, aqui ?? de ganho e progresso. N??o se deve ter a boa fortuna como garantida. A imagem pode aplicar-se a amizades, onde um parceiro acredita-se generoso, mas de fato est?? alimentando-se egoisticamente no apoio altru??sta do outro. Indica-se a necessidade de consci??nciacr??tica e auto-an??lise.'

      break

    //Hexagrama 43 -
    case 43:
      titulo.innerHTML = '43 - KU?? - Resolu????o'

      texto.innerHTML = 'Este hexagrama inidca uma decis??o, ou rompimento ap??s um prolongado per??odo de tens??o, simbolizado por uma trovoada iminente (Tui, o Lago, em cima de Kien, o C??u), ou um tempo em que o inferior come??a a perder terreno. Seu tema ?? a for??a que igualmente pode criar um grande bem ou causar desagrado e desarmonia em todo lugar. O conselho de Ku?? ?? sobre como a energia deveria ser canalizada.'

      poemaJulgamento.innerHTML = 'Resolu????o. A quest??o deve ser apresentada no tribunal mais alto, <br> Resoluta e honestamente. <br> Perigo <br> Deve-se informar o pr??prio povo, <br> Mas n??o ?? vantajoso recorrer ?? for??a, agora. <br> ?? vantajoso empreender alguma coisa.'

      julgamento.innerHTML = 'As menores faltas devem ser corrigidas. Isto requer firmeza e determina????o.'

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 44 -
    case 44:
      titulo.innerHTML = 'Vir ao Encontro'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 45 -
    case 45:
      titulo.innerHTML = 'Ajuntamento'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 46 -
    case 46:
      titulo.innerHTML = 'Impulso para Cima'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 47 -
    case 47:
      titulo.innerHTML = 'Abatimento'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 48 -
    case 48:
      titulo.innerHTML = 'O Po??o'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 49 -
    case 49:
      titulo.innerHTML = 'Revolu????o'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 50 -
    case 50:
      titulo.innerHTML = 'O Caldeir??o'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 51 -
    case 51:
      titulo.innerHTML = 'O Abalo, A Trovoada'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 52 -
    case 52:
      titulo.innerHTML = 'Imobiliza????o'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 53 -
    case 53:
      titulo.innerHTML = 'Desenvolvimento Gradual'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 54 -
    case 54:
      hexagrama = 54
      titulo.innerHTML = 'A Noiva'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 55 -
    case 55:
      titulo.innerHTML = 'Plenitude'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 56 -
    case 56:
      titulo.innerHTML = 'O Estrangeiro'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 57 -
    case 57:
      titulo.innerHTML = 'O Suave'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 58 -
    case 58:
      titulo.innerHTML = 'Alegria'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 59 -
    case 59:
      titulo.innerHTML = 'Dispers??o'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 60 -
    case 60:
      titulo.innerHTML = 'Limita????o'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 61 -
    case 61:
      titulo.innerHTML = 'A verdade interior'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 62 -
    case 62:
      titulo.innerHTML = 'Preponder??ncia do Pequeno'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 63 -
    case 63:
      titulo.innerHTML = 'Ap??s o Cumprimento'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
    //Hexagrama 64 -
    case 64:
      titulo.innerHTML = 'Antes do Cumprimento'
      texto.innerHTML = ''
      poemaJulgamento.innerHTML = ''
      julgamento.innerHTML = ''
      poemaImagem.innerHTML = ''
      imagem.innerHTML = ''
      break
  }
}
