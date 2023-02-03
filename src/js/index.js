var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 60;
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
  criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
  criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
  criaMosquitoTempo = 750
}


function ajustaTamanhoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}
ajustaTamanhoJogo()

var cronometro = setInterval(function(){
  
  
  tempo -= 1;
  if(tempo == 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
    
  }
  document.getElementById('cronometro').innerHTML = tempo
  
}, 1000)

//criar as posições randomicas do mosquito
function posicaoRandomica() {
//remover o elemento mosquito (caso ele exista)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    
    if(vidas > 3){
      window.location.href = 'fim_de_jogo.html'
    }
    document.getElementById('v' + vidas).src = '../src/image/coracao_vazio.png'
    vidas++
    
    
  }

  var posicaoX = Math.floor(Math.random() * largura - 90)
  var posicaoY = Math.floor(Math.random() * altura - 90)

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

//criar elemento HTML
  var mosquito = document.createElement('img')
  mosquito.src = '../src/image/mosca.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function() {
    this.remove()
  }

  document.body.appendChild(mosquito)
  
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)   

  switch(classe) {
    case 0:
      return 'mosquito1'

    case 1:
      return 'mosquito2'
    
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  var lado = Math.floor(Math.random() * 2)   

  switch(lado) {
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'
  }
}

