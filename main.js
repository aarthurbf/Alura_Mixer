// Cria função de tocar o som
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    // Verifica se o elemento realmente existe
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        console.log('Elemento invalido');
    }
    
}

// Atribui o listaDeTeclas a todos os items com o valor .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// Usa o for para percorrer a lista de items
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Definindo variaveis
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    // Função para reproduzir o audio no click
    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    // Função para quando a tecla for pressiona
    tecla.onkeydown = function (evento){
        if (evento.code == 'Space' || evento.code == 'Enter'){
            // Adiciona a classe do css 'ativa'
            tecla.classList.add('ativa');
        }
    }

    // Função para quando a tecla for solta
    tecla.onkeyup = function(){
        // Remove a classe do css 'ativa'
        tecla.classList.remove('ativa');
    }
}
