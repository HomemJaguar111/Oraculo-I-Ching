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

function textOraculo() {
  switch (hexagrama) {
    //Hexagrama 1 -
    case 1:
      titulo.innerHTML = ' 1 - CHIEN - O Criador'

      texto.innerHTML =
        'Tanto o trigrama superior quanto o inferior são Chien; todas as linhas são cheias e representam o yang - forte, ativo, doador, orientado espiritual e mentalmente, consistente. <br>  Chien tem todosx os atributos do Céu, do Rei, do líder e do chefe de família. Representa alguém que usa seu poder e vitalidade construtivamente. A energia primordial transforma-se em seu oposto, depois de atingir seu clímax. Assim, o hexagama adverte quanto ao sucesso se tornando fracasso se a força for excessiva, ou arrogante.'

      poemaJulgamento.innerHTML =
        'O criador traz sublime sucesso,<br> Beneficiando a todos com peerseverância.'

      julgamento.innerHTML =
        'O significado primitivo de Chien era o de uma "força" do sucesso, fluindo das profundezas. Mas tudo depende de o indivíduo perseverar no caminho certo - isto é, fazendo o que é direito.'

      poemaImagem.innerHTML =
        'O movimento do céu é cheio de poder <br> Assim o homem nombre fortalece a si mesmo.'

      imagem.innerHTML =
        'O céu move-se sem cessar. Isto dever servir de exemplo. Torne-se a personalidade forte, eficaz e duradoura.'

      break
    //Hexagrama 2 -
    case 2:
      titulo.innerHTML = '2 - KUN - O Receptivo'

      texto.innerHTML =
        'Cada linha representa o escuro, a terra, a mãe, o yin, a devoção. Não é uma fraqueza, mas força primordial, como Chien. Estes dois primeiros não são opostos. São o rei e a rainha, o pai e a mãe. Só quando o passivo é liderado pelo criador, pode resultar uma construção perfeita'

      poemaJulgamento.innerHTML =
        'O receptivo opera um sublime sucesso e beneficia pela perseverança de um jumento. <br> O homem nobre deve empreender algo, mas se perde. <br> Mas acaba recebendo a orientação. <br> Encontre amigos no Sul e no Oeste; evite-os no Norte e no Leste. <br> Uma perseverança pacífica traz a fortuna.'

      julgamento.innerHTML =
        'A qualidade de julgamento do Receptivo(perseverança) é bem diferente da persistência ativa de Chien, e indica circunstâncias mais materiais. Aceite orientação e apoio. <br> O Sul e o Oeste simbolizam esforço e trabalho. Assim, o Norte e o Leste ou comando, e planejamento em grupo, devem ser rejeitados em favor da solidão.'

      poemaImagem.innerHTML =
        'A condição da terra é a devoção. <br> Assim o homem nobre, de grande caráter, sustenta o mundo.'

      imagem.innerHTML =
        'A Terra sustenta tudo: de bom e de mau. O homem nobre é puro, vasto e de caráter profundo, assim, pode aceitar e suportar sua situação.'

      break
    //Hexagrama 3 -
    case 3:
      titulo.innerHTML = '3 - CHUN - A Dificuldade Inicial'

      texto.innerHTML =
        'Kan em cima e Chen embaixo trazem nuvens, água, movimento e trovão. Tempo de tensão. <br> Chun é o tempo em que os brotos empurram a terra dura com grande dificuldade. <br> É preciso ser muito paciente'

      poemaJulgamento.innerHTML =
        'A Dificuldade Inicial opera um sublime sucesso e favorece pela persevrança. <br> Nada deve ser empreendido, é preciso engajar auxiliares.'

      julgamento.innerHTML =
        'Tudo está disforme, convulsionado. Se se perseverar, um grande sucesso poderá se seguir. Entretanto, a ação precipitada ou prematura acarretará o desastre.'

      poemaImagem.innerHTML =
        'Nuvens e trovão: a dificuldade inicial. <br> O homem nobre faz a ordem a partir do caos '

      imagem.innerHTML =
        'As nuvens de tempestadde têm forma definida: deve-se procurar discernir o que é o quê, e ficar pronto para tirar vantagem de melhores condições após a chuva.'

      break
    //Hexagrama 4 -
    case 4:
      titulo.innerHTML = 'A Estultície Juvenil'

      texto.innerHTML =
        'O hexagrama implica imaturidade e pureza. O trigrama superior, Ken, significa o filho mais moço, ou a montanha; Kan, embaixo, o perigo, ou a água. Daí as imagens de uma fonte ao pé da montanha, e uma criança tola. A juventude requer instrução e no todo, este hexagrama significa o ensinamento, e em particular, ser paciente e tolerante.'

      poemaJulgamento.innerHTML =
        'A estultície juvenil tem o sucesso. <br> Não sou eu quem procura o jovem tolo, <br> O jovem tolo é quem me procura. <br> À primeira pergunta, respondo; <br> Se ele insistir, é falta de respeito. <br> Se ele me desrespeita, não lhe respondo mais. <br> A perseverança é vantajosa.'

      julgamento.innerHTML =
        'Apresenta-se uma ideia dupla: o oráculo e sua atitude perante quem faz a pergunta, e a ideia de pessoas que precisam aprender algo. O perguntador imaturo deve aprender a aceitar a relação entre mestre e discípulo, estabelecida no uso do I Ching. <br> Analogamente, o conselho sobre conduta é que um bom estudante é respeitoso, trabalhador e domina cada passo antes de dar o próximo.'

      poemaImagem.innerHTML =
        'Ao pé da montanha, jorra uma fonte, <br> Símbolo da juventude.<br> O homem nobre cultiva o seu caráter. <br Sendo profundo em todos os seus atos.>'

      imagem.innerHTML =
        'Como um bom estudante, é preciso cultivar o róprio caráter com clareza e perseverança, e uma correção vigorosa.'

      break
    //Hexagrama 5 -
    case 5:
      titulo.innerHTML = '5 - HSU - A Expectativa (A nutrição)'

      texto.innerHTML =
        'O trigrama Han (a água; o perigo) acima de Chien (o Céu; a força) indica nuvens de chuva no Céu. Choverá, mas entrementes deve-se esperar. Use o tempo para se preparar. A ideia é reforçada pela expectativa, originada no antigo ideograma Hsu, reprensentando um meditabundo sentado. A contemplação também contém a ideia de nutrição do núcleo da energia vital (o prana ou chi) no centro de gravidade do corpo. É preciso proceder cuidadosamente, mas com ambição. Tenha consciência da competição, mas não destrate os competidores.'

      poemaJulgamento.innerHTML =
        'Expectativa. Se sincera, conquistará a glória. <br> A perseverança traz a fortuna. <br> É vantajoso cruzaar as grandes águas.'
      julgamento.innerHTML =
        'A certeza interior e o reconhecimento das coisas tais como são em si é a real "sinceridade". Esta deve ser seguida por uma ação resoluta e coerente, e aplicação. É vantajoso viajar, ou tomar uma grande decisão, ou fazer grandes mudanças.'

      poemaImagem.innerHTML =
        'Nuvens sobem ao Céu: imagem da expectativa. <br> O homem nobre, comendo e bebendo, está contente.'

      imagem.innerHTML =
        'A chuva vem depois das nuvens, mas só podemos esperar, se formos sábios, alimentamos nosso corpo com a comida adequada, e nossa mente pelo cultivo da tranquilidade. Então, quando nossa hora chegar, estaremos prontos, e enquanto isso, estaremos contentes.'

      break
    //Hexagrama 6 -
    case 6:
      titulo.innerHTML = '6 - SUNG - O Conflito'

      texto.innerHTML =
        'O movimento ascendente de Chien (o Céu) conflita com o fluxo descendente da água (Kan, o trigrama de baixo). Uma diferença fundamental é exressa e ampliada pelos atributos dos trigramas - a força em cima da astúcia, sugerindo uma natureza belicosa.'

      poemaJulgamento.innerHTML =
        'Conflito: você é sincero, <br> a despeito de encontrar obstrução. <br> Uma parada a meio caminho traz a boa fortuna; <br> Levar a questão ao fim traz o infortúnio. <br> É vantajoso ver o grande homem. <br> Mas não é vantajoso cruzar as grandes águas.'

      julgamento.innerHTML =
        'O conflito se desenvolve pela convicção - em outras palavras, pelo egoísmo. Tenha a mente lúcida e justa para chegar a um compromisso, ou desistir. Isto aplica-se especialmente se se teima num ponto de vista. Procure arbítrio ou conselho com uma autoridade superior, ou com uma pessoa mais sensata. Quando as energias estão divididas, não tente empreendimentos que exigem energias concentradas.'

      poemaImagem.innerHTML =
        'O Céu e a Água se movem em sentidos opostos. <br> Símbolo do Conflito. <br> Assim o homem nobre: <br> Cuidadosamente  considera o princípio de todo empreendimento.'

      imagem.innerHTML =
        'O conflito é latente. Só pela profunda e meticulosa ordenação de objetivos, antecipadamente, pode-se prevenir sua aparição.'

      break
    //Hexagrama 7 -
    case 7:
      titulo.innerHTML = '7 - GHIH - O Exército'

      texto.innerHTML =
        'O exército representa forças acumuladas, com um objetivo em vista. A Água (o trigrama inferior, Khan) apanhada pela Terra (Kun, em cima) representa forças poderosas controladas por uma disciplina comum ou pela direção de alguém com autoridade. <br> A linha cheia representa o chefe. Porém, como ocupa o trigrama inferior, não um chefe de estado. Portanto, deve agir honestamente e confiavelmente. Também deve ganhar o respeito de seus homens para que o exército continue eficaz.'

      poemaJulgamento.innerHTML =
        'O Exército. O exército deve ter esperança <br> E um líder forte. <br> Boa fortuna, desonra nenhuma.'

      julgamento.innerHTML =
        'A situação requer mão forte. Porém, o líder atualmente não está suficientemente envolvido com os que o rodeiam. Deve atrair outros demonstrando necessidades comuns, e sua capacidade de liderar.'

      poemaImagem.innerHTML =
        'Em meio à Terra, a Água, <br> Símbolo do Exército. <br> O homem nobre aumenta seu séquito <br> Por sua benevolência para com o povo.'

      imagem.innerHTML =
        'Só com uma política justa em tempo de paz um líder terá apoio na guerra. Analogamente, uma sensação de  confiança e valores comuns são necessários entre os que procuram desfazer suas diferenças, ou engajar-se num empreendimento comum.'
      break
    //Hexagrama 8 -
    case 8:
      titulo.innerHTML = '8 - PI - A União'

      texto.innerHTML =
        'Em cima, Kan, a Água; embaixo Kun, a Terra. Esta mistura natural indica uma pessoa ou uma época de cooperação e boa vontade. Indica a boa fortuna em assuntos pessoais e negócios, desde que haja fé, comprometimento e honestidade.'

      poemaJulgamento.innerHTML =
        'A União: boa fortuna. <br> Questione mais uma vez o oráculo. <br> Seu espírito estará grande, firme e perseverante? <br> Caso for, não haverá erro. <br> O que hesitar, poderá chegar tarde demais. <br> Infortúnio.'

      julgamento.innerHTML =
        'Toda união requer um centro forte. Um grupo estabelece suas relações de maneira clara e definida, e os retardatários não poderão compartilhar a mesma profundidade de união que os primeiros a chegar. Aceite as restrições desta união se quiser receber seus benefícios - de outro modo, abandone-o.'

      poemaImagem.innerHTML =
        'Terra sobre Água, <br> Símbolo da União. <br> Os antigos reis estabeleceram os estados feudais <br> Cultivando relações amigáveis com seus barões.'

      imagem.innerHTML =
        'A Água é absorvida pela Terra e forma assim uma união natural. Assim os reis conferiam terras a seus nobres, trabalhando assiduamente para garantir que todos entendessem as vantagens desta união.'

      break
    //Hexagrama 9 -
    case 9:
      titulo.innerHTML = '9 - HSIAO TCHU - O  Poder de Cativar do Pequeno'

      texto.innerHTML =
        'A imagem do Vento, o Suave (Sun, em cima), soprando pelo Céu(Chien, embaixo), sugere a pequena força cativando a grande. Uma pessoa forte é impedida por entraves pequenos, forçando-a a um compromisso. Um novo empreendimento pode assim ser restringido. Só pela suavidade uma tal situação poderá ter sucesso.'

      poemaJulgamento.innerHTML =
        'O Poder de Cativar do Pequeno: sucesso. <br> Do Oeste, nuvens espessas, mas não há chuva.'

      julgamento.innerHTML =
        'A perspectiva da chuva sugere um resultado frutífero, mas as nuvens não a liberam. Só pelo "poder do pequeno" - amizade e métodos sutis - podemos influenciar aos outros, ou aos acontecimentos.'

      poemaImagem.innerHTML =
        'O Vento soprando pelo Céu simboliza o Poder de Cativar do Pequeno. <br> Assim o homem superior refina seu caráter e capacidades.'

      imagem.innerHTML =
        'Soprada pelas forças das circunstâncias, uma pessoa pode fazer pouco dde significado duradouro, mas as condições permitem que nos expressemos abertamente em coisas pequenas, para os que nos cercam. É preciso usar o tempo para um auto aperfeiçoamento.'

      break
    //Hexagrama 10 -
    case 10:
      titulo.innerHTML = '10 - LIU - A Marcha'

      texto.innerHTML =
        'O trigrama Chien (o pai, em cima), seguido por Tui (a filha mais jovem, embaixo), sugere a relação correta entre os dois, de acordo com o costume chinês. Assim, o hexagrama aconsela a agir civilmente, de acordo com as convenções estabelecidas. <br> Alternativamente, o simbolismo do trigrama inferior, de um tigre, sugere um homem andando sobre a cauda do tigre. Implica a necessidade de cuidado em circunstâncias perigosas e inusitadamente, o fraco sendo capaz de prevalecer sobre o forte.'

      poemaJulgamento.innerHTML =
        'Marchar. O homem caminha sobre a caudad do tigre. <br> E este não o morde. Sucesso.'

      julgamento.innerHTML =
        'Uma inusitada proximidade de elementos fortes e suaves - pode representar um solitário, forçado ao contato com pessoas que considera como inferiores a si. Alternativamente, pode-se estar tratando com o imprevisível, com forças perigosas. Aja com uma dignidade cativante, e não perca a sensibilidade.'

      poemaImagem.innerHTML =
        'O Céu em cima, o LAgo embaixo, símbolo da Marcha. <br> O homem nobre discrimina entre o elevado e o baixo. <br> Assim concorda com a vontade do povo.'

      imagem.innerHTML =
        'O ideal confuciano era uma sociedade em que o "status" exterior fosse reflexo do valor interior. Este ideal deve nos incentivar a nos comportarmos em relação os outros de acordo com uma profunda aprecisação de sua natureza. De outro modo, pode-se tornar irrealista e preconcebido.'

      break
    //Hexagrama 11 -
    case 11:
      titulo.innerHTML = '11 - TAI - A Paz'

      texto.innerHTML =
        'O Líder, ou pai (Chien), suporta o povo, ou a mãe (Kun). Isto indica uma sólida força criando a harmonia com o mais fraco, sendo flexível e conciliador. Em geral, o hexagrama indica condições harmoniosas.'

      poemaJulgamento.innerHTML =
        'A Paz. O pequeno vai, <br> O grande vem. <br> Fortuna: sucesso.'

      julgamento.innerHTML =
        'Os elementos fortes e criadores ocupam posição central: as trÊs linhas inferiores, e, assim, estão nos controle. Há um sentimento de profunda harmonia, tanto nos relacionamentos quanto nas circunstâncias.'

      poemaImagem.innerHTML =
        'Céu e Terra estão unidos, simbolizando a Paz. <br> O rei divide e perfaz os caminhos de Céu e Terra. <br> Favorece e ordena os dons de Céu e Terra. <br> Em benfício do povo.'

      imagem.innerHTML =
        'A unidade produz a paz e a prosperidade. Os governantes organizam a atividade de acordo com uma divisão apropriada do tempo e do espaço, de modo que possam se beneficiar e estar em harmonia com a natureza. Por mais preocupado que você esteja em seguir o costume ou "ter em mente apenas os melhores interesses dos outros", os motivos facilmente podem tornar-se egoístas, se não se prestar atenção às verdades interiores que nos recordam sempre o universal.'

      break
    //Hexagrama 12 -
    case 12:
      titulo.innerHTML = '12 - P.I - A Estagnação; A Desarmonia'

      texto.innerHTML =
        'O decaimento, a pobreza e a desunião são indicados por este hexagrama. Aqui, Chien (o chefe, a força) em cima é sustentado por Kun (o fraco, a força receptiva). Nenhum resultado criativo é possível. Assim, pode indicar alguém forte, ruidoso e arrogante xteriormente, mas com pouco valor interior para apoiar tal comportamento.'

      poemaJulgamento.innerHTML =
        'Desarmonia. Nada é benéfico, <br> Mesmo com a perseverança do homem nobre. <br> O grande vai; o pqueno vem.'

      julgamento.innerHTML =
        'As forças criadoras e ordenadoras intrínsecas às situações parecem escoar; a confusão e a acrimônia começam. Em geral, não há vantagem na ação. Concentre-se em manter os negócios estáveis, humilde e corretamente.'

      poemaImagem.innerHTML =
        'Céu e Terra em desunião; símbolo da Desarmonia. <br> Portanto, o homem nobre se retira em seu valor íntimo, <br> Evitando o perigo. <br> E recusa favor e fortuna.'

      imagem.innerHTML =
        'Numa situação que segue princípios pequenos, mesquinhos, e administrada por pessoas inescrupulosas ou inferiores, não se deve ser atraído ao envolvimento pelo lucro fácil, seja financeiro ou social. <br> Este hexagrama é como o "princípio saturnino", da astrologia, ou como a ideia taoísta de que "a semente da prosperidade oculta-se no infortúnio". Aceitando as dificuldades enquanto se luta por conservar a pureza, nossa natureza é refinada, e imperceptivelmente acumula-se a boa fortuna.'

      break
    //Hexagrama 13 -
    case 13:
      titulo.innerHTML = '13 - TONG JEN - Companheirismo'

      texto.innerHTML =
        'O trigrama Chien acima de Li significa o Céu, com o Fogo embaixo: duas forças complementares em relação harmoniosa. A ideia do Sol brilhando no Céu (beneficiando assim especialmente os lavradores, e as comunidades em geral) também é indicada. A linha passiva em posição central significa uma influência suave em meio às pessoas - a sabedoria e a preocupação por tudo o que mantém as pessoas unidas.'

      poemaJulgamento.innerHTML =
        'Companheirismo em campo aberto: sucesso. <br> É vantajoso atravessaras grandes águas. <br> É vantajosa a perseverança do homem nobre.'

      julgamento.innerHTML =
        'O julgamento sublinha a consciÊncia da pessoa sobre os princípios construtivos subjacentes À sociedade, e a unidade do companheirismo em sociedade. Isto não é uma crença ingÊnua, mas uma compreensão de que toda cooperação social e toda amizade (a despeito de uma diversidade infinita) requer objetivos compartilhados e atividades comuns. Esta compreensão, quando compartilhada, pode promover grandes obras sob a liderança de pessoa cheia de princípios e organização.'

      poemaImagem.innerHTML =
        'O Fogo atinge o Céu: imagem do Companheirismo. <br> Assim o homem nobre organiza comunidades, <br> E estabelece distinções.'

      imagem.innerHTML =
        'Céu e Fogo têm naturezas distintas, mas ambos movem-se na mesma direção. PAra ordenar a sociedade, os líderes devem ceder à diversidade das miríades de seus componentes, mas organizá-los de acordo com princípios universais. A ideia de uma enorme energia encerrada em duas forças está aqui sublinhada, com a implicação de que pode facilmente tornar-se incontrolável.'

      break

    //Hexagrama 14 -
    case 14:
      titulo.innerHTML = '14 - TA IU - A Grande propriedade'

      texto.innerHTML =
        'O FOgo (Liu) no Céu (Chien) simboliza a glória e as riquezas. A linha passiva de Li na posição de cima sugere que um grande sucesso foi obtido por meio da humildade.'

      poemaJulgamento.innerHTML = 'A Grande PRopriedade: sublime sucesso.'

      julgamento.innerHTML =
        'A quinta linha é "dona" das outras - a fraca possui as fortes por sua virtude não egoísta. É tempo de força regulada e harmoniosa, e do seu desfrute.'

      poemaImagem.innerHTML =
        'O Fogo no Céu: símbolo da Grande Propriedade. <br> O homem nobre, reprimindo o mal e encorajando o bem, <br> é abençoado por seguir as leis do Céu.'

      imagem.innerHTML =
        'Quando se é rico, quer na felicidade, quer nas riquezas, é preciso conduzir-se com o mesmo cuidado que quando em perigo. De outro modo, a felicidade se transforma em permissividade e o mau   caráter gerará o mal. O Sol está alto no Céu e começa logo a decair. Se se sentir que está faltando algo, é uma falha espiritual.'

      break
    //Hexagrama 15 -
    case 15:
      titulo.innerHTML = '15 - KIEN - Humildade'

      texto.innerHTML =
        'Uma montanha (Ken) atrás da Terra (Kun) implica uma grande acidente geográfico em meio a uma planície. Isto significa a verdadeira modéstia, destacando-se bem para que todos a vejam. O atributo de Ken, enquanto filho mais jovem do Criador, implica as qualidades e propriedades espirituais trazidas à Terra. A real modéstia funciona examinando-se a própria situação e o próprio psiquismo, e ordenando a estes de acordo com os princípios mais elevados. A Terra acima da Montanha também sugere uma qualidade simples e sem sofisticação de um espírito elevado.'

      poemaJulgamento.innerHTML =
        'A Humildade cria o sucesso. <br> O homem nobre persevera até o fim.'

      julgamento.innerHTML =
        'A polidez e a modéstia geram o sucesso e mantém um homem, uma vez tendo atingido riqueza ou posição. O sábio sempre se lembra disto nos altos e baixos da vida.'

      poemaImagem.innerHTML =
        'Uma Montanha no centro da Terra: símbolo da Humildade. <br> O homem nobre reduz o excessivo, e aumenta o que é deficiente; <br> Assim, pesa e equilibra.'

      imagem.innerHTML =
        'As montanhas gradualmente se desgastam: os vales são enchidos por geleiras e inundações. Assim, a humildade trabalha imperceptivelmente, constantemente. Por esta razão, os chineses viam a humildade acima de qualquer outra virtude. <br> O sábio, entendendo que o fado é inelutável, ajusta as condições, e a si mesmo para evitar extremos, e assim mantém uma vida harmoniosa. Se isto for feito por motivos mesquinhos, o resultado é uma preocupação e restrições constantes.'

      break

    //Hexagrama 16 -
    case 16:
      titulo.innerHTML = '16 - YU - Entusiasmo'

      texto.innerHTML =
        'Chen (o Trovão; o estimulante) sobre Kun (a Terra) indica enorme criatividade, ou entusiasmo; como uma música poderosa que a todos inspira. O conselho de Yu e aplicar energia sem cuidados ou preparação. O "lado negro" aqui é uma tendência a usar excesso de força.'

      poemaJulgamento.innerHTML =
        'EEntusiasmo. É vantajoso arranjar auxiliares e pôr os exércitos para marchar.'

      julgamento.innerHTML =
        'O tempo está favorávelpara preparar e começar aventuras. Os atributos do movimento (Chen) e da devoção (Kun) sugerem que isto deve ser feito com o auxílio dos outros adaptando-se às suas ideias e necessidades. Pode-se assim evitar a oposição, mesmo que invisível.'

      poemaImagem.innerHTML =
        'O Trovão sai da Terra, símbolo do Entusiasmo. <br> Assim os antigos reis compunham músicas para louvar os homens de mérito. <br> E as ofereciam em honra a Deus, <br> Na presença de seus espíritos ancestrais.'

      imagem.innerHTML =
        'A mpusica pode suavizar as emoções e dissipar tensões, assim como o raio purifica o ar. Inspira e move as pessoas pela harmonia de sua composição. Isto deve estar de acordo com ideais elevados, ou metafísicos. A ênfase dada aqui ao ritual religioso implica que somente por uma interação correta entre o espiritual e o material (ou o idealista e o prático) nas suas considerações, as forças poderosas deste tempo poderão ser estabilizadas.'

      break

    //Hexagrama 17 -
    case 17:
      titulo.innerHTML = '17 - SUEI - Séquito'

      texto.innerHTML =
        'Em cima, está Tui (a filha mais jovem, a Alegria) e, embaixo, Chen (o filho mais velho, o Despertar). Sugere um velho que se inclina perante a moça. Os atributos dos trigramas também sugerem alguém cheio de poder criador e aparece feliz e agradável.'

      poemaJulgamento.innerHTML =
        'O Séquito traz um sublime sucesso. <br> A perseverança é vantajosa, sem desonra.'

      julgamento.innerHTML =
        'Para se tornar líder poderoso, é preciso adaptar-se às demandas dos outros, por mais tolas ou desnecessárias que sejam. Tratando-se os outros cinicamente, tornando-nos frustrados, e causamos conflitos. É preciso perseverar para reter a harmonia e confiança entre os outros que nos apóiam.'

      poemaImagem.innerHTML =
        'No meio do Lago, o Trovão, símbolo do Séquito. <br> O homem nobre se retira, ao cair da noite. <br> E repousa em casa.'

      imagem.innerHTML =
        'O outono (Suei) indica o empalidecer do brilhante e do forte. è um tempo de ganhos fáceis e perdas fáceis, tendendo para a perda. Adapte-se, conservando as forças.'

      break

    //Hexagrama 18 -
    case 18:
      titulo.innerHTML = '18 - GUIU - Recuperação do Deteriorado'

      texto.innerHTML =
        'Sun (o Vento, embaixo) sopra ao pé da Montanha (Ken). Isto implica em destruição; plantas desenraizadas, pomares arruinados. Mas o tempo indicado pela primavera (Sun) seguindo-se ao inverno (Ken) indica a mudança. Indica também trabalho duro. Em negócios, comunidades, relações, etc., estabelecidos, Sun indica arranjos fundamentalmente maus ou incompatíveis'

      poemaJulgamento.innerHTML =
        'A Recuperação do Deteriorado possui um supremo sucesso. <br> É vantajoso cruzar as grandes águas. <br> Antes de começar, três dias; <br> Depois de começar, três dias.'

      julgamento.innerHTML =
        'Guiu indica perdas e problemas presentes ou iminentes. A causa está predominantemente nas próprias atitudes e comportamento. A pessoa se confundiu ou ignorou responsabilidades, ou foi desonesta e dúplice. A ruína é inevitável. E precisamente por isto, este hexagrama é considerado fasto. Tempo de ação enérgica e decisiva, para reparar o mal feito. É imperativo considerar e contemplar antes e depois de começar.'

      poemaImagem.innerHTML =
        'O Vento soprando ao pé da Montanha simboliza a Deterioração. <br> Assim, o homem nobre movimenta o povo <br> E fortifica seu espírito.'

      imagem.innerHTML =
        'Quando tudo está destruído, ou corre perigo, o sábio trabalha muito visando uma reorganização ordenada. O povo e os amigos precisam ser mobilizados, e então condições sólidas e virtuosas devem ser estabelecidas.'

      break

    //Hexagrama 19 -
    case 19:
      titulo.innerHTML = '19 - LIN - Aproximação'

      texto.innerHTML =
        'Tui, a filha mais jovem, embaixo, ou atrás de Kun, a mãe, indica a imagem da autoridade bondosa, e da correta relação de proximidade entre duas pessoas destas naturezas, uma "acima" da outra.'

      poemaJulgamento.innerHTML =
        'Aproximação: sublime sucesso, <br> A perseverança é vantajosa. <br> O infortúnio, quando vier o oitavo mês.'

      julgamento.innerHTML =
        'Um tempo de boa fortuna: as linhas cheias ascendentes indicam crescimento e energia. Mas o aviso quanto ao oitavo mês é que se deve estar preparado, em guarda contra a própria conduta e constantemente atento aos sinais dos tempos.'

      poemaImagem.innerHTML =
        'Acima do Lago, a Terra: símbolo da Aproximação. <br> Assim o homem nobre é inexaurível na alimentação <br> No sustento e na proteção do povo'

      imagem.innerHTML =
        'A Terra em cima do LAgo indica a posição elevada de uma pessoa, e a sua atitude superior para com outrem. O curso correto é educar (nutrir) pelo exemplo e pela preocupação com quem está mais abaixo.'

      break

    //Hexagrama 20 -
    case 20:
      titulo.innerHTML = '20 - KUAN - A visão'

      texto.innerHTML =
        'O Vento (Sun) acima da Terra (Kun) sugere o vento soprando a areia, ou os inúteis esforços do ar (ou atividade mental) para ordenar a Terra (as coisas materiais). Não é tempo de empreender nada de novo, mas ordenar os negócios, como os antigos lavradores no tempo de Kuan (fim d setembro, até o meio de outubro), que armazenavam suas colheitas e começavam o longo trabalho de reparar e preparar as ferramentas e tudo o mais para o próximo ano.'

      poemaJulgamento.innerHTML =
        'A Visão. A ablução foi feita, <br> Mas não ainda o sacrifício. <br> O povo ergue os olhos, cheio de confiança.'

      julgamento.innerHTML =
        'O momento entre a ablução ritual e o savrifício é o indicado. Os que estão encarregados de projetos, ou os que influenciam aos outros, devem ter grande sensibilidade em relação às suas responsabilidades. <br> O formato do hexagrama, análogo a uma antiga torre chinesa de muralha, também simboliza o Tao - Caminho ao longo do qual ou pelo qual toda vida deve elborar sua existência. Intensifica as ideias de contemplação, pois o Tao serve de símbolo de todos, como os que estão presentes ao sacrifício, respeitosamente olhando par cima. Assim o sujeito é não somente alguém que medita (ou mais mundanamente, alguém de amplas visões ou profundo a respeito das coisas), mas também quem é contemplado.'

      poemaImagem.innerHTML =
        'O Vento sobre a Terra: símbolo da Visão. <br> Assim os antigos reis visitavam as regiões do mundo, <br> Contemplavam os povos, e os ensinavam.'

      imagem.innerHTML =
        'Isto refere-se às viagens feitas pelos governantes chineses par "ficr perto ds raízes da grma" (contemplar) e exercitar sua influência (ser contemplado pelo povo). Um homem forte, influente e sábio é capaz, por uma investigação profunda e sem preconceitos, de causar grandes benefícios. Isto, de novo, é um símbolo geral do Tao, o caminho e a porta do "eterno presente" e símbolo de claridade e equilíbrio.'

      break

    //Hexagrama 21 -
    case 21:
      titulo.innerHTML = '21 - CHIH HOH - Morder de Través'

      texto.innerHTML =
        'As características de Li (o relÂmpago, em cima) e Chen (o trovão, embaixo) são combinadas aqui. A forma do hexagrama sugere uma mordedura vigorosa (que morde através dos obstáculos). Como este simbolismo sugere, Chih Hoh indica problemas ou dificuldades, no começo.'

      poemaJulgamento.innerHTML =
        'Morder de Través: sucesso. <br> É vantajoso administrar justiça.'

      julgamento.innerHTML =
        'A forma do hegrama sugere uma boca aberta com um obstáculo entre os dentes. Assim o Julgamento aponta um obstáculo à união ou harmoni, saí a necessidade de "morder de través" para sua remoção. Os atributos dos trigramas indicam o equilíbrio que deve ser atingido em "administrar a justiça". Li, o Aderente, é brando, ao passo que Chen, o Estimulante, é duro. As ações, vigorosas, não devem ser apressadas, severas, ou arbitrárias, mas cuidadosamente ponderadas, de modo a adequar-se a todas as circunstâncias. '

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''

      break

    //Hexagrama 22 -
    case 22:
      titulo.innerHTML = '22 - PI - A Graça'

      texto.innerHTML =
        'Ken, o trigrama superior, significa "Montanha"; Li, embaixo, é o Fogo, o brilho, ou o Sol. Daí a imagem do Sol brilhando e iluminando toda a montanha. A mesma ideia de iluminaçãi no símbolo de fogo na montanha. Os atributos pessoais de Ken e Li - respectivamente, o filho mais jovem e a filha do meio - indicam um casal jovem. Estas imagens implicam beleza e energia, que devem ser reguladas por sensibilidade estética, para durar. A união de um jovem com uma mulher que atingirá meia idade enquanto ele ainda for jovem e irresponsável adverte contra tornar a beleza e a estabilidade como bens permanentes.'

      poemaJulgamento.innerHTML =
        'A Graça: o sucesso em pequenos empreendimentos.'

      julgamento.innerHTML =
        'A estrutura do hexagrama enfatiza a forma, mais que o conteúdo. Assim, só as pequenas coisas são favorecidas. Os comentadores chineses apontaram a ideia subsidiária de contemplação ou lucidez (associadas a um objeto bonito, ou agradável), ao passo que sublinharam que a arte é apenas a cobertura do bolo da realidade. Nada tem a ver com as condições básicas e essenciais da vida.'

      poemaImagem.innerHTML =
        'Fogo queimando ao pé da Montanha: símbolo da Graça. <br> Assim o homem nobre clarifica as questões cotidianas, <br> Mas não julga assim as grandes questões.'

      imagem.innerHTML =
        'As questões de importência efêmera podem ser vantajosamente ordenadas, mas não se deve enfrentar grandes negócios ou transformações. A estética e a graça ajudarão nos assuntos do dia a dia.'

      break

    //Hexagrama 23 -
    case 23:
      titulo.innerHTML = '23 - POH - Desintegração'

      texto.innerHTML =
        'Poh representa o apodrecimento, a dissolução e o infortúnio. A estação é o outono, quando tudo começa a decair e apodrecer. As cinco linhas yin sugerem as forças fracas e escuras subindo para vencer a linha forte. A forma do hexagrama sugere uma casa da qual restaram apenas paredes e telhado. A estrutura está lá , mas pronta para desabar. '

      poemaJulgamento.innerHTML =
        'Desintegração. <br> Não é vantajoso fazer seja o que for.'
      julgamento.innerHTML =
        'A força criadora (a linha yang) está para ser suplantada pelos elementos desordenados de baixo. É tempo de dificuldade e infortúnio, não necessariamente acarretados por más ações, mas não menos reais. Só se pode dirigir esforços para o bem dos outros - os negócios pessoais estão condenados.'

      poemaImagem.innerHTML =
        'A montanha sobre a Terra: símbolo de Desintegração. <br> Os superiores só podem garantir sua posição por meio de ricos dons aos inferiores.'

      imagem.innerHTML =
        'Ken, a Montanha, fica exposta aos golpes desgastantes da natureza sobre Ken, a Terra. Não se deve ceder à dsordem que ameaça, mas suportar os problemas com dignidade, e conservar a virtude (que houver) por um comportamento não egoísta. A situação não pode progredir, mas, com absoluta retidão, pode-se salvá-la  do desastre'

      break

    //Hexagrama 24 -
    case 24:
      titulo.innerHTML = '24 - FU - Retorno'

      texto.innerHTML =
        'Fu, associado ao solstício de inverno, o ponto de vitalidade mais baixa, indica um decréscimo de má fortuna. A única linha cheia embaixo representa a força yang, quente e criadora, ascendendo. O trigrama inferior Chen (Madeira) com Kun (Terra) simboliza as raízes de uma planta. Daí termos a ideia de crescimento iminente, novas oportunidades e sucesso em potencial.'

      poemaJulgamento.innerHTML =
        'Retorno: sucesso. <br> Não há nada de errado em sair e entrar de novo. <br> Os amigos vêm sem mal agum. <br> O curso do Tao é ir e vir. <br> No sétimo dia, o Retorno. <br> É vantajoso ter para onde ir.'

      julgamento.innerHTML =
        'Depois da retirada das forças criadoras, elas retornam. Nos negócios humanos, os de caráter e mente de mesma natureza unem-se harmoniosamente em novos empreendimentos. Isto espelha o movimento do Tao. A sétima etapa é a do retorno; um novo ciclo, após o velho.'

      poemaImagem.innerHTML =
        'O Trovão dentro da Terra simbolizao Retorno. <br> Assim, nos tempos antigos, os reis fechavam os passos, no solstício de inverno. <br> Os mercadores e viajantes não circulavam mais. <br> E os governantes não visitavam suas províncias.'

      imagem.innerHTML =
        ' O princípio do repouso, enquanto a energia da vida é retirada dentro da Terra, significa que tudo deve ser tratado cuidadosamente e não deve ser apressado. Não se pode forçar um botão de flor a abrir; pode-se e deve-se , entretanto, preparar o solo para seu futuro crescimento. Boas perspectivas para negócios estabelecidos, muito embora o tempo seja menos adequado para projetos inteiramente novos.'

      break

    //Hexagrama 25 -
    case 25:
      titulo.innerHTML = '25 - WU GANG - Inocência'

      texto.innerHTML =
        'De Chien (em cima) vem o atributo da lei celestial, criadora; embaixo está Chen - o movimento e a força. Assim temos a ideia de energia seguindo as leis do Céu; um estado natural e feliz nos negócios. É um tempo de epreendimentos.'

      poemaJulgamento.innerHTML =
        'A inocência: sublime sucesso. <br> A perseverança é vantajosa. <br> Se não se é o que se devia ser, então o infortúnio. <br> Não é vantajoso empreender o que quer que seja.'

      julgamento.innerHTML =
        'A pureza e a bondade da genuína inocência traz o sucesso, quando se persevera, porque nosso caminho está de acordo com o movimento de forças superiores. Se meramente se ostenta uma aparência natural e de boa índole, ou se se tempera o próprio instinto com compromissos "políticos" ou práticos, há pouca vantagem a derivar, e progressivamente perde-se contato com o Caminho'

      poemaImagem.innerHTML =
        'O Trovão circulando sob o Céu: símbolo da Inocência. <br> Esta é a qualidade de todas as coisas. <br> Assim, outrora, os reis virtuosos e de acordo com o tempo <br> Cuidavam e alimentavam todas as criaturas.'

      imagem.innerHTML =
        'As energias da vida começam a emergir de novo no princípio da primavera, e então alimentam harmoniosamente suas atividades. A ideia do trovão na primavera indica uma possibilidade extra - súbitas dificuldades, ou mudanças inesperadas nas condições. A força fundamental agora é a criadora, e a do crescimento. Assim, os problemas não devem ser artificialmente removidos, mas deve-se adaptar tão naturalmente e sem artifício quanto possível.'
      break

    //Hexagrama 26 -
    case 26:
      titulo.innerHTML = '26 - TA KHU - O Poder de Cativar do Grande'

      texto.innerHTML =
        'Ta Khu representa o poder ativo do Céu (Chien, embaixo) que é capturadopela imobilidade (Ken). Assim, temos uma situação de grande energia potencial - assim como um rio, restrito pelas paredes de uma barragem, podendo produzir energia. As principais conotações deste hexagrama são as ideias de grandes reservatórios de energia; grande domínio de uma grande energia; e fonte de alimento (que pode ser espiritual ou material).'

      poemaJulgamento.innerHTML =
        'O Poder de Cativar do Grande: a perseverança é vantajosa. <br> Não comer em casa traz a fortuna. <br> É vantajoso cruzar as grandes águas.'

      julgamento.innerHTML =
        'As imagens apontam muito trabalho à frente. A qualidade desta época (a energia sob controle) aponta para armazenar as próprias energias e conservar a virtude pelo esforço constante, junto com alguma disciplina útil, assim como a meditação. Quando as energias física e psíquica estão em harmonia, pode-se permanecer em ressonância com o fluxo das energias exteriores; assim, grandes empreendimentos têm chance de sucesso.'

      poemaImagem.innerHTML =
        'O Céu no meio da Montanha: símbolo do Poder de Cativar do Grande <br> Assim, o homem nobre aprende as palavras de sabedoria e os grandes feitos do passado, <br> Para assimm edificar o seu caráter.'

      imagem.innerHTML =
        'Dois amplos significados estão indicados aqui: um refere-se ao que está acumulado, seja riqueza material, ou verdades duradouras; o outro indica uma pessoa que absorveu a aquiessência dos que a cercam, e agora deve estar em guarda contra a sua própria complacência, ou que precisa ganhara confiança dos outros para ter sucesso.'

      break

    //Hexagrama 27 -
    case 27:
      titulo.innerHTML = ' 27 - YI - Alimentação'

      texto.innerHTML =
        'Debaixo do trigrama Ken (Imobilização), temos Chen (Movimento). O fixo em cima e móvel embaixo (junto com a forma do hexagrama, que sugere uma boca aberta) dá a Yi o atributo de uma boca, através da qual a alimentação passa. Como as plantas e as ervas que crescem ao pé da montanha (Ken é a montanha; Chen é a madeira, ou substÂncia vegetal) estão entre as mais nutritivas, a ideia fica reforçada. A imagem do trovão (Chen) rolando pela base da montanha indica que a chuva que alimenta logo virá. As advertÊncias contidas em Yi referem-se a atingir a harmonia e manter a moderação (pois a alimentação imoderada certamente levará, pelo menos, ao desconforto).'

      poemaJulgamento.innerHTML =
        'Alimentação: a perseverança traz a fortuna. <br> DÊ atenção a prover o alimento, <br> E o alimento <br> É algo que se procura sozinho.'

      julgamento.innerHTML =
        'A ideia é expandida para incluir a pessoa alimentando outras - seja isto literal ou metafórico; material ou espiritual. Quando nos alimentamos, ou aos outros, é preciso ser cuidadoso para discriminar entre o que é puro e revitalizante e o que é indigno.'

      poemaImagem.innerHTML =
        'Tovão ao pé da Montanha; símbolo da Alimentação. <br> O homem nobre é cuidadoso com suas palavras, <br> E comedido no comer e no beber.'

      imagem.innerHTML =
        'A boca é um meio modificador: mastiga a comida, conforma as palavras e está em movimento constante. Indica-se muito trabalho, com a sugestão de que condições ou pessoas difíceis deveriam ser cultivadas e controladas. Mais tarde, serão úteis.'

      break

    //Hexagrama 28 -
    case 28:
      titulo.innerHTML = '28 - TA KUO - Preponderância do Grande'

      texto.innerHTML =
        'A forma do hexagrama representa uma viga espessa e pesada, que está fraca nas extremidades. Assim, não tem suporte firme. OS dois trigramas Tui (a Água, ou o Lago, em cima) e Sun (a Madeira, a Árvore, embaixo) sugerem árvores debaixo dágua - uma inundação. Isto indica especificamente o excesso, e com a ideia derivada do formato do hexagrama, apresenta a imagem de uma situação perigosa, que não deve continuar.'

      poemaJulgamento.innerHTML =
        'Preponderância do Grande: a viga está envergada e vai romper-se. <br> É vantajoso avançar rumo a objetivos. Sucesso.'

      julgamento.innerHTML =
        'A imagem sugere um tempo de graves acontecimentos. Várias situações são sugeridas - os negócios ou os sentimentos podem estar complicados demais. Muito embora os problemas sejam quase inevitáveis, as linhas fortes no centro de Ta Kuo mostram a capacidade do sujeito suportar as dificuldades que se aproximam. A solidez deste hexagrama insiste em que a maneira de resolver os problemas (enquanto forem solúveis) é por meio de uma suave aplicação do entendimento.'

      poemaImagem.innerHTML =
        'O lago elevando-se acima das Árvores: símbolo da Preponderância do Grande. <br> Portanto, o homem superior fica só, inabalável. <br> Se precisar renunciar ao mundo, não terá ressentimento.'

      imagem.innerHTML =
        'A atitude do sábio. Muito embora só, é preciso ser firme como a Árvore (Sun, embaixo), sem perder uma atitude aberta e feliz para com a vida (Tui, o Feliz, em cima). A imagem da inundação reforça um aspecto da situação - as águas da inundação, mais cedo ou mais tarde, retiram-se: os problemas são temporários. <br> Lembre-se de que, por mais agradáveis ou lucrativas que as coisas possam estar agora, não vão durar assim pra sempre.'

      break

    //Hexagrama 29 -
    case 29:
      titulo.innerHTML = '29 - Kan - Abismo'

      texto.innerHTML =
        'Kan, dois trigramas primários de mesmo nome, significa perigo, a crise e o envolvimento num conflito. Literalmente, o "duplo perigo". Pode indicar uma atitude perante a vida, assim como a mostrada pela pessoa que constantemente se defronta ou cria crises para que sua vida tenha significado. Mais comumente, indica uma situação perigosa à qual urge adaptar-se. O perigo significa aquilo através do qual podemos nos ferir, mas também pode significar progresso e aperfeiçoamento interior, pela superação das provações.'

      poemaJulgamento.innerHTML =
        'O Abismo repetido: a sinceridade significa harmonia no coração, <br> E aqui virá o sucesso em tudo o que fizer.'

      julgamento.innerHTML =
        'Como a água, escoando avante sempre que possível, a sinceridade permite-nos entender as profundezas de uma situação, e tomar uma ação eficaz. O perigo dá força ao espírito, e reforça a consciência de que a paz interior é o ingrediente mais importante do sucesso. Com a calma interior, pode-se mover rápido à frente, e evitar o desastre.'

      poemaImagem.innerHTML =
        'A Água brota do Abismo, sem cessar: símbolo do Abismo repetido. <br> Portanto o homem nobre mantém sempre a sua virtude, <br> E persevera em sua prática de instruir'

      imagem.innerHTML =
        'A Água, num fluir incessante, simboliza a aproximação sábia à virtude. É preciso garantir que a virtude permeie nossa vida, e que seja de calibre a ponto de enfrentar as mais perturbadoras e inusitadas condições. É preciso dedicar-se constantemente ao auto aperfeiçoamento, e evitar o egoísmo influenciando os outros com a própria virtude'

      break

    //Hexagrama 30 -
    case 30:
      titulo.innerHTML = '30 - LI - Fogo'

      texto.innerHTML =
        'O trigrama Li (o que se apega, o brilho, o Fogo) repetido, compõe este hexagrama. A duplicação destas qualidades só pode significar uma pessoa fogosa, de pavio curto, ou uma situação explosiva e instável. Pode também referir-se a apego. O apegar-se (ou atear-se) é tributo do Fogo. Apega-se àquilo que o alimenta, enquanto irradia seu brilho em todas as direções. Em termos particulares, Li poderia referir-se a uma pessoa energética e querelenta (um homem de negócios que se fez sozinho, talvez), ou um amante autoritário, cujo afeto exigente pode ser um disfarce (consciente ou não) de sua dependência de alguém mais. A moral é que a energia da motivação, como o Fogo, deve ser controlada, para ser construtiva, e evitar que só destrua.'

      poemaJulgamento.innerHTML =
        'A perseveranã é vantajosa: sucesso. <br> Cuidar da vaca traz a fortuna.'

      julgamento.innerHTML =
        'A anergia radiante, simbolizada pelo fogo, está sendo constantemente consumida. Portanto, deve ter alguma fonte interior que perdure, ou senão morrerá. A perseverança é indicada pela imagem da dócil vaca. É importante, para uma pessoa fogosa, reconhecer alguma dependência (assim como a vaca depende do fazendeiro) e é também importante para ela tornar-se mais tratável em seu comportamento, para desenvolver lucidez e compreensão. É um antídoto vital para o comportamento excessivo e suas atitudes.'

      poemaImagem.innerHTML =
        'A claridade repetida, símbolo do Fogo. <br> Assim o grande homem refina o brilho <br> PAra iluminar mesmo os lugares mais escuros do mundo.'

      imagem.innerHTML =
        'Os atributos solares de Li, dobrados, enfatizam o ciclo e a regularidade do tempo. Assim, é preciso regular e deliberadamente refinar a qualidade lúcida e energética que é indicada, para que sua influência possa se estender sem limite.'

      break

    //Hexagrama 31 -
    case 31:
      titulo.innerHTML = '31 - HIEN - Influência'

      texto.innerHTML =
        'Embaixo, Ken, o filho mais jovem, ou um rapaz (a força), cedeu ao trigrama superior, Tui, a filha mais jovem, ou a moça (o Feliz). De uma maneira fundamental para relacionamentos estáveis, o homem (o forte) cede à mulher, e a mulher, analogamente, cede ao homem. Este é o contrato social primário, com cada companheiro subjugando suas necessidades às do outro. A imagem é a força calma e persistente influenciando uma parte mais fraca, que responde com alegria. Implicam-se afeição e sensibilidade aos outros, ou a fatores externos - mas não a sensibilidade da introversão doentia.'

      poemaJulgamento.innerHTML =
        'Influência: sucesso. <br> A perseverança é vantajosa. <br> Casas com uma moça traz a fortuna.'

      julgamento.innerHTML =
        'Indica-se um relacionamento harmonioso e bem sucedido. Como é uma união adequada e mutuamente afetuosa, certamente seguir-se-á o sucesso. Isto vale para qualquer relacionamento - pessoal ou formal.'

      poemaImagem.innerHTML =
        'O Lago sobre a Montanha: símbolo da Influência. <br> Assim o sábio encoraja a aproximação <br> Por sua capacidade de acolher.'

      imagem.innerHTML =
        'A metáfora de um lago de montanha sugere um caráter calmo e receptivo, ao invés de um que, sabendo-se forte ou superior, expressa estas qualidades. A ideia de princípios não egoístas é acrescida à noção do forte voluntariamente subordinando-se às necessidades dos pobres.'

      break

    //Hexagrama 32 -
    case 32:
      titulo.innerHTML = '32 - HENG - Continuidade'

      texto.innerHTML =
        'Este hexagrama é o inverso do precedente: Aqui Chen (o filho mais velho, o Trovão) está acima de Sun (a filha mais velha, o Suave, o Vento). Assim o ativo lidera o passivo e o Trovão une-se ao Vento (seu companheiro natural). isto sugere um relacionamento durável, consistente.'

      poemaJulgamento.innerHTML =
        'Continuidade: sucesso, sem desonra. <br> A perseverança é vantajosa. <br> É vantajoso ter um objetivo.'

      julgamento.innerHTML =
        'A continuidade é conseguida por meio da persistÊncia, no seu sentido mais profundo. É uma qualidade de perseverar a todo instante, no mesmo sentido divinamente criador de Vishnu, por seu constante avanço, fechando os abismos entre cada instante, à medida que são abertos por Shiva. Isto sublinha as qualidades pessoais de força e sabedoria, que acompanham a busca vital do significado subjacente a tudo.'

      poemaImagem.innerHTML =
        'Trovão e Vento: símbolo da Continuidade. <br> Portanto, o homem nobre permanece sempre firme, <br> Sem se desviar de seu caminho.'

      imagem.innerHTML =
        'Muito embora as duas forças celestiais continuem se movendo e transformando-se com pouca continuidade aparente, de fato estão sujeitas às leis da vida, como tudo o mais. Deve-se ter consciÊncia  disto e ser absolutamente constante, muito embora se possa mudar de tática ou comportamento para se acomodar às mudanças circunstanciais. Em geral, a harmonia da real continuidade é sublinhada e distingue-se da aparente.'

      break

    //Hexagrama 33 -
    case 33:
      titulo.innerHTML = '33 - TUN - Retirada'

      texto.innerHTML =
        'Chien (o pai) em cima de Ken (Montanha, quietude) sugere um eremita isolado na Montanha. Sua ênfase é no retiro em relação a condições potencialmente perigosas, inspirado por uma profunda compreensão dos resultados, se se perseverar. O retiro, o isolamento, ou a resignação, aceitando-se as condições tais como são.'

      poemaJulgamento.innerHTML =
        'Retirada:sucesso. <br> Nas pequenas coisas, a perseverança é vantajosa.'

      julgamento.innerHTML =
        'As duas linhas fracas são as forças hostis, em ascensão. A pessoa prudente retrai-se - não fugindo, mas cedendo. Persevere, de modo que a retirada seja a melhor possível.'

      poemaImagem.innerHTML =
        'Sob o Céu, a Montanha: símbolo da Retirada <br> O homem nobre mantém o vulgar a distância, <br> Sem cólera, mas com dignidade'

      imagem.innerHTML =
        'A imagem sugerida é a da Montanha, subindo para o Céu. O Céu parece recuar, para cima, e da mesma maneira, o sábio mantém uma distância digna entre ele e as influÊncias perturbardoras. A advertência contra sentimentos negativos é particularmente importante.'

      break

    //Hexagrama 34 -
    case 34:
      titulo.innerHTML = '34 - TA CHUANG - O Poder do que É Grande'

      texto.innerHTML =
        'O trigrama Chen, em cima de Chien (Céu) mostra o Trovão no Céu. Os atributos de um jovem (força; movimento) acrescentam-se à imagem naturalista de força vital e jovem. De certa maneira, Ta Chuang é o oposto de Tun, onde as forças escuras e hostis estavam em ascensão. Aqui, as forças intensas e criadoras movem-se para cima. Quando as condições forem favoráveis, os resultados serão excelentes, mas há sempre grande perigo de excesso e abuso de poder.'

      poemaJulgamento.innerHTML =
        'O Poder do que É Grande: a perseverança é vantajosa.'

      julgamento.innerHTML =
        'A imagem do Poder do que é Grande é auto-explicativa, mas os autores acrescentaram uma importante qualificação. É que o Poder do Grande deve ser temperado quer pela perseverança em restringir e restringir-se de acordo com o que for justo, ou perseverar e aguardar um momento mais apropriado. O que quer que se aplique, o casamento da força e da sensibilidade é vital para produzir bons e frutíferos resultados, ao invés de desperdício.'

      poemaImagem.innerHTML =
        'Trovão lá no céu: símbolo do Poder do Grande, <br> Assim, o homem nobre não vai por caminhos <br> Que não se conformem à ordem.'

      imagem.innerHTML =
        'O Trovão está se deslocando rumo ao Céu. Ambos têm a tendência de subir, d modo que seus movimentos estão em harmonia. Estra tendência feliz deve ser conservada não se fazendo nada incompátivel com o caminho correto - quer o caminho seja a lei, a eficiência, ou a simples voz interior.'

      break
    //Hexagrama 35 -
    case 35:
      titulo.innerHTML = '35 - Tchin - Progresso'

      texto.innerHTML =
        'O Sol (Li) está sobre a Terra (Kun) como no começo do dia, simbolizando a influência crescente, o progresso e a prosperidade fáceis. Em termos humanos, há duas partes representadas: uma ativa, apaixonada e olhando para o futuro; a outra, passiva, receptiva e lógica. As advertências aqui se referem à possibilidade de separação (o Sol "deixa" a Terra), contra a pressa indevida (o progresso do Sol é o símbolo básico do desenvolvimento regular, apropriado) e de relacionamentos incorretos.'

      poemaJulgamento.innerHTML =
        'O Progresso. O poderoso príncipe <br> É honrado com presentes de muitos cavalos. <br> Num só dia ele é recebido três vezes em audiência.'

      julgamento.innerHTML =
        'Isto mostra um relacionamento mundano correspondendo à correção intrínseca ao simbolismo natural. Respeitado por seus iguais, o líder cumpre seus deveres e é honesto para com seu rei, que o honra. Assim, a ideia de um servo independente, mas obediente, e um senhor justo e compreensivo é apresentado como o alicerce do progresso em assuntos importantes.'

      poemaImagem.innerHTML =
        'O Sol erguendo-se acima da Terra: símbolo do Progresso. <br> Assim o homem nobre faz brilhar sua virtude'

      imagem.innerHTML =
        'O Sol da manhã aumenta sua luz à medida que se ergue, deixando a escuridão das profundezas. Assim o sábio aperfeiçoa sua posição e caráter descartando os indignos e sem princípios. Desta maneira, ganha em auto-confiança e virtude.'

      break

    //Hexagrama 36 -
    case 36:
      titulo.innerHTML = '36 - MING YI - Oscurecimento da Luz'

      texto.innerHTML =
        'Aqui, a posição dos trigramas é o oposto da Tchin. Aqui, Kun, a Terra, está acima de Li, o Sol, ou a Luz. Daí a imagemda noite se aproximando, ou a atenuação da luz. As implicações incluem a acumulação esmagadora de forças hostis ou negativas (da fraqueza), e a onipotência de uma autoridade inimiga de suas crenças. Nos relacionamentos, pode-se achar as coisas tristes e grotescas, ao passo que todos parecem alegremente inconscientes destas condições (para você) odiosas.'

      poemaJulgamento.innerHTML =
        'Obscurecimento da Luz. <br> É vantajoso ser perseverante na adversidade.'

      julgamento.innerHTML =
        'A atividade fere quem a inicia, e pouco sucesso, ou nenhum. É preciso "esconder a lâmpada debaixo do alqueire", se sua lâmpada estiver produzindo qualquer brilho útil. Caso contrário, é preciso trabalhar constantemente para aperfeiçoar sua virtude. Assim aprendem-se lições inestimáveis nestes tempos. e fica-se preparado quando vier um tempo favorável para a ação.'

      poemaImagem.innerHTML =
        'O Sol mergulhando dentro da Terra simboliza o Obscurecimento da Luz. <br> Desta maneira, o homem nobre vive em meio ao povo; <br> Vela seu brilho e, no entanto, sua virtude ainda brilha.'

      imagem.innerHTML =
        'O sábio agora deve ser cauteloso, reservado e cheio de ponderação. Quando as forças ambientes são hostis, como indicado por Ming Yi, não se deve provocar uma inimizade abertamente, por um comportamento imodesto.'

      break

    //Hexagrama 37 -
    case 37:
      titulo.innerHTML = '37 - KIA JEN - Família'

      texto.innerHTML =
        'As linhas indicam a estrutura familiar. Os membros, indicados por linhas yin ou yang correlacionam-se com o parceiro certo no hexagrama, assim a ênfase é dirigida para os relacionamentos corretos, cooperação, responsabilidades e atitudes harmoniosas e consciênciosas.'

      poemaJulgamento.innerHTML =
        'A Família. A perseverança da mulher é vantajosa.'

      julgamento.innerHTML =
        'Se as atitudes corretas prevalecerem, a estrutura familiar permanecerá forte e contribuirá para uma sociedade harmoniosa. A união básica é a do homem e da mulher. É a devoção dela e sua lealdade perseverante que mantém esta união. A mulher, portanto, é o alicerce do casamento na sociedade.'

      poemaImagem.innerHTML =
        'O Vento sai do Fogo, simbolizando a Família. <br> Assim, a fala do homem nobre possui substância, <br> E seu estilo de vida, permanência.'

      imagem.innerHTML =
        'O homem é a força exterior da família. Como uma chama que precisa de combustível, suas palavras precisam alicerçar-se em alguma substância: como o vento soprando uma vela, sua conduta deve sustentar palavras, para lhes dar eficácia.'

      break

    //Hexagrama 38 -
    case 38:
      titulo.innerHTML = '38 - KUEI - Oposição'

      texto.innerHTML =
        'Li (a Chama) e Tui (o Lago, embaixo) não têm interação: a tendência da Chama é para cima; a da Água, para baixo. Assim, a condição corrente é de desunião. Pode significar um conflito atual ou latente.'

      poemaJulgamento.innerHTML = 'Oposição. Nas pequenas coisas, a fortuna.'

      julgamento.innerHTML =
        'A situação pode parecer pesada e estagnada, sem união criativa, mas uma vista mais ampla mostra que contém elementos opostos que podem, juntos, ser criativos. Isto pode ser externo, ou subjetivo. Mas há obstáculos de ordem prática e, assim, só os feitos menores são possíveis.'

      poemaImagem.innerHTML =
        'O Fogo acima do Lago simboliza a Oposição. <br> Assim, em meio à multidão, <br> O homem nobre conserva sua individualidade.'

      imagem.innerHTML =
        'Fogo e Água sempre retém sua própria natureza, por mais próxima que seja sua associação. Analogamente, uma pessoa sábia não deve ser afetadapela moda prevalente, mas deve primeiro confiar em suas próprias normas. Isto também indicacomo se pode mudar para melhor. Quando se está isoladoo, ou em conflito com coisas ou pessoas, deve-se ficar mais generoso para com os outros, ao passo que se retém a própria individualidade.'

      break

    //Hexagrama 39 -
    case 39:
      titulo.innerHTML = '39 - KIEN - Obstáculo'

      texto.innerHTML =
        'O hexagrama significa dificuldade, perigo ou obstrução. Kan (a Água) está em cima de Ken (a Montanha), representando um lago temporário que pode transbordar e inundar as aldeias e plantações lá embaixo. A imagem do abismo à frente (Kan) com a Montanha atrás, indica o perigo ou a dificuldade do movimento.'

      poemaJulgamento.innerHTML =
        'Obstáculo. O sudoeste é vantajoso.<br> O nordeste não é vantajoso. <br> É vantajoso ir ver o grande homem. <br> A perseverança traz fortuna.'

      julgamento.innerHTML =
        'O sudoeste é associado ao trigrama Kun (a Planície) onde a força perigosa da Água seria aquietada em benefício da comunidade. A liderança de uma autoridade mais alta - quer seja pessoa viva, conjunto de regras ou um ideal - pode ser necessária para escapar. Concentre-se em conservar uma atitude harmoniosa e não se apresse em adotar "soluções" convencionais, em última análise, inúteis.'

      poemaImagem.innerHTML =
        'Água sobre a Montanha simboliza o Obstáculo. <br> O homem nobre dirige sua atenção para dentro <br> E paerfeiçoa se caráter.'

      imagem.innerHTML =
        'O desagrado que experimentamos quando em dificuldades ´, o mais das vezes, causado por nossas próprias reações. Não se deve tentar esclarecer as coisas neurótica e ineficazmente, mas deve-se desenvolver sensibilidade para a própria condição e uma atitude que crie harmonia.'

      break

    //Hexagrama 40 -
    case 40:
      titulo.innerHTML = '40 - HIAI - Libertação'

      texto.innerHTML =
        'Este hexagrama representa uma libertação das preocupações de Kien. O tempo indicado é a primavera, ou amanhã: ambos significam vida nova e oportunidades de trabalho intenso. Os sinais de salvação iminente ou sucesso trazaem o perigo de relaxar prematuramente e também de assumir atividade interrompida pelos problemas passados. Olhe para o futuro.'

      poemaJulgamento.innerHTML =
        'Libertação. O sudoeste é vantajoso. <br> Se nada resta por fazer, <br> O retorno é fonte de fortuna. <br> Se algo resta por fazer, <br> A pressa é fonte de fortuna.'

      julgamento.innerHTML =
        'As condições tendem a retornar ao normal (o sudoeste simboliza uma planície, onde há atividade humana convencional) e as coisas devem ser dispostas adequadamente o mais cedo possível. Tenha cuidado com excesso de entusiasmo ou outros excessos. Deve-se ficar em guarda, de modo que se está livre para progredir junto com os novos tempos.'

      poemaImagem.innerHTML =
        'O Trovão, seguido da chuva: símbolo da Libertação. <br> Assim o homem nobre perdoa os erros <br> E absolve os pecados.'

      imagem.innerHTML =
        'A libertação da tensão é o que segue às tempestades: analogamente, o perdão dos erros e malfeitos aclara a situação. Este é o hexagrama simbolizando o "koan" zen-budista, ou a experiência kumita nas artes marciais - ambas englobam a angústia mental e a confusão, seguidas por uma sutil e intensa claridade. É a lucidez que se deve ter antes de qualquer grande empresa.'

      break

    //Hexagrama 41 -
    case 41:
      titulo.innerHTML = '41 - SUEN - Diminuição'

      texto.innerHTML =
        'A diminuição, e mesmo a perda, é simbolizada por Ken, a Montanha, em cima de Tui, o Lago - as faldas da Montanha desabando dentro do Lago. Mas, enquanto uma parte é reduzida, a outra é aumentada. A perda de um é o ganho de outro. O tema de Suen concerne a adaptação às circunstâncias.'

      poemaJulgamento.innerHTML =
        'Diminuição: aliada à sinceridade produz uma grande fortuna, sem desonra. <br> Pode-se perseverar. <br> É vantajoso empreender alguma coisa. <br> Como fazer? <br> Pela oferenda de duas tijelas de arroz.'

      julgamento.innerHTML =
        'Entender a inevitabilidade da época é de importância vital e fundamental. Austeridade, simplicidade, humildade são corretas e apropriadas. Com esta compreensão simples, pode-se atingir um grande objetivo. O sacrifício de duas tijelas de arroz - como a parábola do óbolo da viúva (do Evangelho segundo São Lucas) - indica que, mesmo a menor das ações, se sincera, pode ser boa.'

      poemaImagem.innerHTML =
        'O Lago minando o sopé da Montanha: símbolo da Diminuição. <br> Assim o homem nobre refreia sua ira <br> E controla seus desejos.'

      imagem.innerHTML =
        'A Montanha, simbolizando a obstinação, a dureza, mesmo a cólera, desmorona dentro do Lago, que é a alegria e a felicidade. A dissolução da adureza traz a alegria. A alegria histérica e frívola é evitada pela evaporação do LAgo, dando uma umidade benéfica às enconstas da Montanha. Não há benefício na tristeza. pode-se perder amigos, os dividendos das ações podem diminuir, mas reajustando os próprios valores, podemos melhorar nosso caráter.'

      break

    //Hexagrama 42 -
    case 42:
      titulo.innerHTML = '42 - YI - Aumento'

      texto.innerHTML =
        'Sugere uma floresta fervilhante, cheiia de flores e plantas produzidas por Suen, em cima e Chen, a força que desperta, embaixo. Também a linha inferior do trigrama superior é considerada como tendo cedido a uma linha yin, ou fraca. Isto sugere consideração e serviço prestado pelo forte. Tal renúncia é considerada supremamnente auspiciosa'

      poemaJulgamento.innerHTML =
        'Aumento: é vantajoso empreender alguma coisa. <br> É vantajoso atravessar as grandes águas.'

      julgamento.innerHTML =
        'O tempo do aumento não durará, portanto agora é hora de agir, sem hesitação. ISto se aplica mesmo a grandes e perigosos empreendimentos.'

      poemaImagem.innerHTML =
        'Vento e Trovão: símbolo do Aumento. <br> Assim o homem nobre observa o bem, e o imita; <br> Observa o mal, e se desfaz dele.'

      imagem.innerHTML =
        'Aqui, um aspecto dual, mas enquanto Suen fala de diminuição, aqui é de ganho e progresso. Não se deve ter a boa fortuna como garantida. A imagem pode aplicar-se a amizades, onde um parceiro acredita-se generoso, mas de fato está alimentando-se egoisticamente no apoio altruísta do outro. Indica-se a necessidade de consciênciacrítica e auto-análise.'

      break

    //Hexagrama 43 -
    case 43:
      titulo.innerHTML = '43 - KUÊ - Resolução'

      texto.innerHTML =
        'Este hexagrama inidca uma decisão, ou rompimento após um prolongado período de tensão, simbolizado por uma trovoada iminente (Tui, o Lago, em cima de Kien, o Céu), ou um tempo em que o inferior começa a perder terreno. Seu tema é a força que igualmente pode criar um grande bem ou causar desagrado e desarmonia em todo lugar. O conselho de Kuê é sobre como a energia deveria ser canalizada.'

      poemaJulgamento.innerHTML =
        'Resolução. A questão deve ser apresentada no tribunal mais alto, <br> Resoluta e honestamente. <br> Perigo <br> Deve-se informar o próprio povo, <br> Mas não é vantajoso recorrer à força, agora. <br> É vantajoso empreender alguma coisa.'

      julgamento.innerHTML =
        'As menores faltas devem ser corrigidas. Isto requer firmeza e determinação.'

      poemaImagem.innerHTML =
        'O lago transbordou, rumo ao Céu: símbolo da Resolução. <br> Assim o homem nobre distribui a riqueza abaixo de si e receia desecansar sobre sua virtude.'

      imagem.innerHTML =
        'Mostra-se uma situação em que as condições, ou uma pessoa, são fortes e influentes. As coisas vão mudar. Bons ou maus resultados dependem da atitude da figura central, e dos sentimentos alheios em relação a ela. Todo ganho é seguido por perda, assim i sábio compartilha de seu bem-estar, e não se permite ficar isolado ignorando a vida à sua volta.'

      break

    //Hexagrama 44 -
    case 44:
      titulo.innerHTML = '44 - KIU - Vir ao Encontro'

      texto.innerHTML =
        'O princípio fraco se intromete, indicando a aparição do perigo, se bem que por um elemento aparentemente inofensivo. Em cima, Kien, a força, encontra Sun, o feminino e penetrante. Isto sugere um princípio masculino - um líder, uma pessoa de autoridade, ou uma situação estável e forte - influenciado por um elemento fraco, mas eficaz. Kiu é favorável para projetos a curto prazo. '

      poemaJulgamento.innerHTML =
        'Vir ao Encontro. <br> A moça é forte. <br> Não se deve esposá-la.'

      julgamento.innerHTML =
        'O elemento fraco atrai a atenção. Destarte, pessoas inferiores elevam-se a posições de poder. Se não houver dissimulação, nem segundas intenções, a situação pode ser feliz - mas isto requer uma profunda intuição e virtude.'

      poemaImagem.innerHTML =
        'Sob o Céu, sopra o vento: símbolo de Vir ao Encontro. <br> O príncipe assim publica suas ordens, <br> Proclamando-as aos quatro pontos cardeais.'

      imagem.innerHTML =
        'Aqui, o Vento dissemina a influência criadora. Há organização, e intensa atividade. A advertência implícita é contra a falta de humildade e sensibilidade quantoàs forças mutáveis que o rodeiam.'

      break

    //Hexagrama 45 -
    case 45:
      titulo.innerHTML = '45 - TSUEI - Ajuntamento'

      texto.innerHTML =
        'A imagem de Tui (o Lago) sobre Kun (a Terra) é a água juntando-se numa só massa (em contraste com Pi, o oitvo hexagrama, qu representa uma condição mais estável). Isto sugere gente se reunindo de comum acordo. A advertência implícita é contra desordem. É tempo de estabelecer condições estáveis, ordenadas e duráveis.'

      poemaJulgamento.innerHTML =
        'Ajuntamento. Sucesso. <br> O rei vai ao templo. <br> É vantajoso ver o grande homem. <br> A perseverança é vantajosa. <br> Apresentar belas oferendas cria a fortuna. <br> É vantajoso empreender alguma coisa'

      julgamento.innerHTML =
        'As comunidades atingem a prosperidade agindo de acordo. Aqui enfatiza-se o líder - o rei. As vantagens desta reunião são aumentadas pelas oferendas que cada líder faz. As necessidades do grupo são, ou deveriam ser, subjacentes às nossas próprias atitudes. Entretanto o significado profundo de Tsuei trata com o "centro" - isto é, não necessariamente a pessoa que parece ser o líder, mas com a força-guia e coerente que subjaz a qualquer associação frutuosa.'

      poemaImagem.innerHTML =
        'O Lago acumula-se sobre a Terra: símbolo do Ajuntamento. <br> Assim o homem nobre tem sempre prontas suas armas <br> Para enfrentar o imprevisto '

      imagem.innerHTML =
        'Nestes tempos, simbolizados por um Lago abraçado pela Terra, há sempre a possibilidade de um transbordamento da água - acarretando um súbito perigo. Isto pode derivar do grupo (mesmo prevalecendo uma aparente harmonia), ou do exterior.'

      break

    //Hexagrama 46 -
    case 46:
      titulo.innerHTML = '46 - CHENG - Impulso para Cima'

      texto.innerHTML =
        'Simboliza-se aqui o tempo da primavera: embaixo, as plantas (simbolizadas por Suen, a Madeira) empurram para cima, através da Terra (Kun) sugerindo expansão e crescimento. A ênfase é no movimento para cima (da obscuridade para evidência, por exemplo) ao invés da simples expansão. A força de vontade e o autocontrole são necessários para ordenar harmoniosamente este movimento.'

      poemaJulgamento.innerHTML =
        'O Impulso para China possui um sublime sucesso. <br> É preciso ir ver o grande homem, não tema. <br> A partida para o sul traz a fortuna.'

      julgamento.innerHTML =
        'É preciso ser prudente e correto em suas atitudes, ou o egoísmo poderá prevalecer e levar ao infortúnio. LEvado pela boa fortuna, voeê deve procurar o conselho de uma autoridade. O sul simboliza a atividade. A aplicação altruísta agora criará uma harmonia duradoura. Um tempo favorável para estabelecer condições duráveis.'

      poemaImagem.innerHTML =
        'A Madeira crescendo em meio à Terra simboliza o Impulso para Cima. <br> O homem nobre se devota a construir, pouco a pouco, <br> A partir de humildes começos, grandes realizações.'

      imagem.innerHTML =
        'Um crescimento constante e flexível é o atributo de uma planta que vai crescendo para cima. Uma pessoa sábia, em harmonia com o destino, deve ser sensata e determinada.'

      break

    //Hexagrama 47 -
    case 47:
      titulo.innerHTML = '47 - KUEN - Abatimento'

      texto.innerHTML =
        'Este é um dos maiores "sinais de perigo" do I Ching, significando extrema dificuldade, pobreza e opressão. O esgotamentos é simbolizado por Kan (a Água) sob Tui (o Lago). O Lago está vazio e sua Água é drenada. As linhas - uma fraca segurando duas fortes, e duas fracas cercando uma forte - sugere restrição, obstáculos e opressão. Todas as seis linhas são desfavoráveis, mas a maior desgraça tem as sementes da maior regeneração, se se pode entender e observar as durezas deste tempo.'

      poemaJulgamento.innerHTML =
        'Abatimento. Sucesso. Perseverança. <br> A boa fortuna aguarda o grande homem. Sem desonra. <br> Se se tem alguma coisa a dizer, não se é acreditado.'

      julgamento.innerHTML =
        'Apanhado numa armadilha e desiludido, você se encontra numa crise, onde os sonhos fáceis e os princípios corruptos são desmascarados como vazios. Suas atitudes e ações vão determinar os anos a seguir. Não há nada mais vital agora do que ceder à natureza de sua condição e compreender o espírito de tal situação.'

      //poemaImagem.innerHTML = ''

      //imagem.innerHTML = ''

      break

    //Hexagrama 48 -
    case 48:
      titulo.innerHTML = '48 - TSING - O Poço'

      texto.innerHTML =
        'Um poço é simbolizado pela Água (Kan, em cima), em que um balde (Suen, a Madeira) é mergulhado. A ideia de alimentação é acrescida pela imagem de uma planta (Suen) que absorve a umidade para cima. Tsing implica as facetas mais fundamentais de qualquer sociedade - profundidade e consistência. A profundidade sugere que a estabilidade é constituída sobre a sensibilidade às necessidades mais fprofundas do homem. A constância implica fiabilidade - um poço útil deve ser uma fonte constante e confiável de água, assim como a estrutura social deve ser confiável para que haja justiça e oportunidades iguais para todos.'

      poemaJulgamento.innerHTML =
        'O Poço. Pode-se mudar a cidade, mas não o poço. <br> Não transborda, nem seca. <br> As pessoas vão e vêm ao poço. <br> Se a corda não consegue atingir a água, <br> Ou se o aso se quebra, então o infotúnio.'

      julgamento.innerHTML =
        'As cidades na China eram realocadas com a mudança das dinastias, mas os poços ficavam onde sempre estiveram. Assim, as necessidades humanas permanecem constantes, a despeito das circunstâncias exteriores. A natureza humana não aumenta nem diminui. A imagem do poço pode simbolizar uma fundação, ou alguma fonte de benefício. Esteja atento contra a profundidade insuficiente (cmopreensão ou planejamento superficiais) e contra o descuido, excesso ou negligência.'

      poemaImagem.innerHTML =
        'Água sobre Madeira: símbolo do Poço. <br> O homem nobre inspira as boas obras ao povo, e o exorta à ajuda mútua.'

      imagem.innerHTML =
        'O sábio tira a água (ou aplica seus esforços) pelo bem de todos. A flexibilidade e a apreciação não-egoísta da natureza humana são necessárias para beneficiar os outros. A imagem das boas obras, simbolizadas por um poço, lembra-nos que um poço lamacento é inútil e necessita de trabalho para revestir suas paredes. OS relacionamentos e negócios pobres precisam de reparações.'

      break

    //Hexagrama 49 -
    case 49:
      titulo.innerHTML = '49 - KO - Revolução'

      texto.innerHTML =
        'Mudanças oriundas do conflito, e conflitos oriundos da mudança, são o tema central deste hexagrama. <br> O Lago (Tui) em cima do Fogo (Li) mostra dois elementos cujas forças estão em constante conflito, as linhas aconselhando como acabar com esta inimizade. Também Tui e Li representam as filhas, mas, aqui, a mais jovem usurpou sua posição. Daí a ideia de revolução. Ko trata da adaptação à mudança. '

      poemaJulgamento.innerHTML =
        'Revolução. Quando chegar a sua hora, acreditarão em você. <br> Sublime sucesso, pela perseverança. <br> O remorso se dissipa.'

      julgamento.innerHTML =
        'Por mais insatisfatórias que sejam as condições presentes, é preciso esperar pelo momento azado para fazer mudanças. Você terá sucesso, desde que as mudanças não sejam egoístas.'

      poemaImagem.innerHTML =
        'No Lago, o Fogo: símbolo da Revolução. <br> O homem nobre determina o calendário <br> E assinala a ordem das estações.'

      imagem.innerHTML =
        'As estações, como o fogo e a Água, destroem umas às outras à medida que avançam. Quem entende as mudanças nota seus sinais e é capaz de prever as necessidades vindouras dos tempos sob os sintomas aparentes. Assim plantam os lavradores prósperos. Assim foram vencidas as grandes batalhas.'

      break

    //Hexagrama 50 -
    case 50:
      titulo.innerHTML = '50 - TING - O Caldeirão'

      texto.innerHTML =
        'Este hexagrama representa a alimentação e a transformação, enfatizando os assuntos materiais ordenados ou  subordinados a considerações abstratas. Embaixo, Suen (a Madeira, o Vento) alimenta Li (a Chama, o Fogo), sugerindo o cozer. Também se considerou que a forma do hexagrama representasse um caldeirão. Isto pode calar bem para condições estáveis, pois o pote de cozer chinês tinha três pernas (três sendo considerado um ideal de pureza e estabilidade). Nos negócios humanos, simbolizam o judiciário, o legislativo e o executivo. Há também muitos outros paralelos - pai, mãe, filho - marido, mulher, concubina, etc. '

      poemaJulgamento.innerHTML = 'O Caldeirão. Suprema fortuna. <br> Sucesso.'

      julgamento.innerHTML =
        'A ideia de alimentação é ampliada pelo atributo do hexagrama que sugere valores espirituais ou abstratos. Assim a ênfase de Ting é nos valores práticos dedicados a princípios mais altos.'

      poemaImagem.innerHTML =
        'Fogo sobre Madeira: símbolo do Caldeirão. <br> Assim o homem nobre consolida seu destino, <br> Adaptando-se à situação mais apropriada.'

      imagem.innerHTML =
        'A Madeira (mundana; terrosa) nutre o Fogo. Em sociedade, o Fogo simboliza a superestrutura moral e cultural e, no ser humano, a consciência espiritual. O terreno deve ser ordenado de acordo com o espiritual. Assim o sábio, convida realisticamente, de acordo com o grau de compreensão que tiver do destino. Pela composição harmoniosa destas forças, desfruta de boa fortuna e prgride espiritualmente.'

      break

    //Hexagrama 51 -
    case 51:
      titulo.innerHTML = '51 - TCHEN - O Abalo, A Trovoada'

      texto.innerHTML =
        'Ambos os trigramassão Tchen. o Que Desperta, indicando um tempo favorável a uma segunda chance. As qualidades representadas por Tchen, podem ser uma força estimulante ou uma que terrifica e desorienta. A ênfase do conselho de Tchen é na moderação e na ação (ou reação) habilidosa e comedida.'

      poemaJulgamento.innerHTML =
        'O Abalo traz o sucesso. <br> Abalo: Ho! <br> Alegria: Ha, ha! <br> Mesmo se todos estejam aterrorizados numa distância de cem milhas, <br> O celebrante não deixa cair a colher e a copa rituais.'

      julgamento.innerHTML =
        'Uma vez que se compreenda o profundo choque sugerido por Tchen, fica-se imune a seus terrores. Num período de eventos desastrosos, imprevistos, esta compreensão garante que podemos executar as tarefas mais importantes e delicadas, e aceitar mesmo a catástrofe com um espírito harmonioso e eficaz.'

      poemaImagem.innerHTML =
        'Trovão sobre Trovão: símbolo do Abalo. <br> Assim, o homem nobre, com temerosa apreensão <br> Põe sua casa em ordem <br> E examina a si mesmo.'

      imagem.innerHTML =
        'Pode-se ser acometido pelo desastre e pelo colapso, mas para o sábio, isto é fonte de inspiração, para analisar seu coração e descobrir suas forças e fraquezas, e dispor corretamente seus negócios.'

      break

    //Hexagrama 52 -
    case 52:
      titulo.innerHTML = '52 - KEN - Imobilização'

      texto.innerHTML =
        'O trigrama Ken (a Montanha, ou a Imobilização) é duplicado, ou seja, uma cessão completa do movimento. Também em ambos os trigramas, as linhas yang moveram-se o máximo que podiam. A imobilidade perpetua-se. Este hexagrama tem fortes implicações para a consecução da paz interior, e trata das maneiras pelas quais ela pode ser obtida. Especialmente a meditação é indicada, porque em seus primeiros estágios as dificuldades em atingir a quietude mental necessária para o aperfeiçoamento são óbvias a todos. Este hexagrama é a bússola da escolachinesa de arte marcial Hsing-I, de inspiração budista.'

      poemaJulgamento.innerHTML =
        'Imobilização do dorso, <br> Até que não se possa mais sentir o corpo. <br> Entra em seu pátio. <br> E não consegue ver seus homens. Sem desonra. '

      julgamento.innerHTML =
        'Quem não conseguir impor uma calma interior, será apanhado pelas ansiedades e pontos de vista dos outros. O dorso imóvel é símbolo de uma calma profunda, da alma. Quando nenhuma atividade perturba a coluna, a mente inquieta e aos poucos vai se acalmando. Pode-se então começar a entender o valor e a ilusão por detrás do costume social e da sua própria natureza. Esta é a base da real sabedoria.'

      poemaImagem.innerHTML =
        'Montanha sobre Montanha: símbolo da Imobilização. <br> Assim os pensamentos do homem nobre <br> Não vagam além de sua posição atual.'

      imagem.innerHTML =
        'O aspecto mais difícil da meditação é a concentração. Não a camisa de força mental que uma criança aplica para conter sua mente dentro dos limites de uma matéria não apreciada, nem a atenção arrebatada de uma pessoa por seu passatempo, mas uma qualidade superior, flexível, que permite ao coração inquieto produzir pensamentos, sem se envolver passinalmente com eles. A quietude flexível é central para a realização nas artes marciais, reverenciada no oriente. Manifesta-se enquanto compostura e imobilidade frente ao perigo iminente, quebrada por uma resposta rápida e apropriada à ação do adversário, precisamente no momento azado. Assim, na vida, a quietude não é negação, mas a preparação mais eficaz para qualquer atividade intensa. É um tempo de planejar, à sua própria maneira, e de se preparar gradativamente para ações posteriores.'

      break

    //Hexagrama 53 -
    case 53:
      titulo.innerHTML = '53 - TSIEN - Desenvolvimento Gradual'

      texto.innerHTML =
        'Este hexagrama implica progresso, de maneira comedida e ordenada. Acima de Suen, a filha mais velha; embaixo, Ken, o filho mais jovem. Ambos crescem e progridem passo a passo, da mesma maneira que uma árvore (Suen) sobre a Montanha (Ken). Ali ela deve tecer suas raízes em meio ao fino solo para garantir estabilidade, em sua posição exposta.'

      poemaJulgamento.innerHTML =
        'Desenvolvimento. Esposa-se uma moça. <br> Fortuna. <br> A perseverança é vantajosa.'

      julgamento.innerHTML =
        'O Julgamento indica a importância da moral social, costumes, tradição e integração do indivíduo com a comunidade, pela subjugação das inclinações egoístas. As formalidades que levam ao casamento evitavam a pressa e não podiam ser aceleradas por forças externas. Um desenvolvimento correto e gradual do relacionamento era considerado o primeiro requisito para uma união bem-sucedida.'

      poemaImagem.innerHTML =
        'Uma árvore sobre a Montanha: símbolo do Desenvolvimento. <br> Assim o homem nobre, tornando permanente sua virtude, <br> Aperfeiçoa a moral social.'

      imagem.innerHTML =
        'A ÁRvore sobre a Montanha cresce devagar, só gradualmente tornando-se um marco visível para as pessoas. A personalidade deve desenvolver-se pela perseverança paciente. O costume deve ser observado e a influência deve aumentar em etapas suaves. Tsien é favorável para os negócios que se desenvolvem passo a passo.'

      break

    //Hexagrama 54 -
    case 54:
      titulo.innerHTML = '54 - KUEI MEI - A Noiva'

      texto.innerHTML =
        'Em cima, Tchen (o Trovão, o Que Desperta, o filho mais velho); embaixo, Tui (a filha mais jovem, o Lago, o Feliz). Assim, uma moça é o que é representado, seguindo um homem mais velho, com a alegria do lado dela e o estímulo do lado dele. A metáfora central da noiva prometida é altamente especializada. O costume permitia uma "vice-esposa" que era bem recebida na família, para atender às necessidades mais íntimas do marido. As admoestações morais resultanes desta metáfora concernem às condições sutis e delicadas que devem ser preenchidas nos relacionamentos. Numa interpretação puramente divinatória, a situação retratada enfatiza a impermanência, porque o status da esposa substituta ea santificado pela sanção social.'

      poemaJulgamento.innerHTML =
        'A Noiva. Qualquer iniciativa acarerta o infortúnio. <br> Nada que seja vantajoso.'

      julgamento.innerHTML =
        'Um enorme tato e reserva eram necessários para que a jovem "concubina" não usurpasse a influência da mulher, em geral mais madura, que cumpria o papel formal de esposa. Nos relacionamentos modernos, o sucesso depende da reserva e compromisso como expressão essencial de afeto. O significado mundano é que vocÊ está envolvidocom outros por causa da utilidade - o resultado de uma necessidade tácita, talvez, hipócrita, dos outros.'

      poemaImagem.innerHTML =
        'Trovão sobre o Lago.: símbolo da Noiva. <br> Assim o homem nobre compreende o efêmero <br> E vê tudo à luz da eternidade.'

      imagem.innerHTML =
        'A trovoada e a tempestada agitam o Lago, criando ondas iluminadas. Daqui resulta a atração: é luminosa e bela, mas não tem permanência. Uma vez que você entenda que sua posição é um tanto artificial, só tentará ser o que realmente pode. Obviamente, este hexagrama não é bom agouro para casamento ou empreendimentos permanentes. Deve-se ser austero em comportamento e expectativas.'

      break

    //Hexagrama 55 -
    case 55:
      titulo.innerHTML = '55 - FENG - Plenitude'

      texto.innerHTML =
        'Tchen (o Trovão, o Que Desperta) está em cima, e Li (a Chama, o Que se Apega) está embaixo. Juntos, sugerem um espírito lúcido, brilhante, dentro do movimento, e assim a ideia de brilhante sucesso. Outros atributos do trigrama enfatizam a abundância e o brilho, que só podem ter vida curta (por exemplo, o atributo da Chama apegando-se à Madeira simboliza um violento incêndio florestal). Tempo de desfrutar o que se tem, sem mais expectativas.'

      poemaJulgamento.innerHTML =
        'Plenitude: sucesso. <br> O rei atinge a Planitude. Nenhuma tristeza, agora. <br> É como o Sol ao meio-dia.'

      julgamento.innerHTML =
        'O Sol do meio-dia logo começará a declinar. Adicionalmente, seu efeito aquecedor e benevolente sobre o mundo sugere não egoísmo e bondade para com todos, e esta atitude previne a arrogância e a cóleraquando a boa sorte tiver passado.'

      poemaImagem.innerHTML =
        'Raio e Trovão juntos: símbolo da Plenitude. <br> Assim o homem nore julga as disputas <br> E executa os castigos.'

      imagem.innerHTML =
        'A claridade cheia de energia sugerida por Tchen e Li, respectivamente, mostra tanto como a abundância pode ser criada aplicando-se energia e discernimento, quanto como se pode garantir a própria prosperidade e evitar excessos uma vez isto atingido. O sábio evita a complacência e é moderado e judicioso ao lidar com seus negócios.'

      break

    //Hexagrama 56 -
    case 56:
      titulo.innerHTML = '56 - Li - O Estrangeiro'

      texto.innerHTML = 'Li (o Fogo) sobre Ken (a Montanha) simbolizavam um incêndio sobrea montanha. Sem folhagem, abundante para alimentá-lo, terá vida curta. Os dois princípios - um imóvel, o outro móvel e cheio de energia - são estranhos um para o outro, e a natureza inquieta, incansável, do Fogo aumenta as implicações do movimento. A pessoa indicada por Liu é a do viajor, do vagabundo. As viagens podem ser subjetivas, ou reais, mas são sempre enraizadas numa motivação bem real, subjetiva.'

      poemaJulgamento.innerHTML = 'O Estrangeiro. Sucesso pelas pequenas coisas. <br> Para quem persevera no caminho, vantagens. '

      julgamento.innerHTML = 'Um viajor nunca conseguirá uma influência permanente.<br> Portanto, é preciso ser flexível, sincero e não fazer exigências, de modo a não tirar mais do que se dá. O Viajor deve ser reservado em seu comportamento, pois ele é vulnerável a pessoas agressivas ou impositivas. Outros, analogamente, são vulneráveis a ele, pois são condicionados pelas ilusões das circunstâncias seguras.'

      poemaImagem.innerHTML = 'O Fogo queima sobre a Montanha: símbolo do Viajor <br> Assim o homem nobre age com lucidez e prudência <br> Ao impor punições <br> E não posterga nenhum litígio.'

      imagem.innerHTML = 'O incêndio na montanha é um fenômeno temporário, simbolizando um homem que não se envolve com atitudes e eventos que complicariam sua vida ou atrasariam sua jornada. No todo, Liu é desfavorável a acordos ou empeendimentos permanentes ou cheios de vínculos.'

      break

    //Hexagrama 57 -
    case 57:
      titulo.innerHTML = '57 - SUEN - O Suave'

      texto.innerHTML = 'Ambos os trigramas são Suen - o Vento, o Suave, ou a qualidade do que é Penetrante. A estes atributos, acresce-se a ideia da harmonia. Suen também simboliza a Madeira, ou vegetais. As plantas vergam-e ao vento, aqui dando a ideia de uma atividade flexível e harmoniosa. A condição implicada por Suen acarreta atitudes quietas, relaxadas, sutis. Ajuda a desenvolver uma atitude harmoniosa e em ressonância com as condições, coisas e pessoas. Suen favorece novos empreendimentos, particularmente aqueles que envolvem movimento.'

      poemaJulgamento.innerHTML = 'O Suave. Sucesso pelas pequenas coisas. <br> É vantajoso tomar iniciativa. <br> É vantajoso ver o grande homem.'

      julgamento.innerHTML = 'A influência do Suave estabelece condições duráveis através de um esforço modesto e gradual. Frequentemente requer a ajuda de pessoa mais forte ou influente. tempo de influenciar mais pela força do caráter que pela ação direta. Acarreta o perigo de excesso de envolvimento.'

      poemaImagem.innerHTML = 'Vento sucedendo ao Vento: símbolo do Suave. <br> Assim o homem nobre difunde suas ordens <br> E executa seus negócios.'

      imagem.innerHTML = 'Aqui, um objetivo bem definido, junto com o cuidado em sua execução. O sábio prepara o caminho para o que está para vir, ampliando sua influência por sugestão e liderança.'

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
      titulo.innerHTML = 'Dispersão'
      
      texto.innerHTML = ''
      
      poemaJulgamento.innerHTML = ''
      
      julgamento.innerHTML = ''
      
      poemaImagem.innerHTML = ''
      
      imagem.innerHTML = ''
      
      break
    
      //Hexagrama 60 -
    case 60:
      titulo.innerHTML = 'Limitação'

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
      titulo.innerHTML = 'Preponderância do Pequeno'

      texto.innerHTML = ''

      poemaJulgamento.innerHTML = ''

      julgamento.innerHTML = ''

      poemaImagem.innerHTML = ''

      imagem.innerHTML = ''
      
      break

    //Hexagrama 63 -
    case 63:
      titulo.innerHTML = 'Após o Cumprimento'

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
