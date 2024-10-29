// Cria função de tocar o som
function tocaSom(seletorAudio) {
    // Seleciona o elemento de áudio pelo seletor fornecido
    const elemento = document.querySelector(seletorAudio);
    
    // Verifica se o elemento realmente existe e se é um elemento de áudio
    if (elemento && elemento.localName === 'audio') {
        elemento.play(); // Toca o áudio
    } else {
        console.log('Elemento inválido'); // Mensagem de erro
    }
}

// Atribui a listaDeTeclas a todos os elementos com a classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// Usa um loop para percorrer a lista de teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Define variáveis para a tecla atual
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // Captura o nome do instrumento
    const idAudio = `#som_${instrumento}`; // Monta o seletor de áudio correspondente

    // Função para reproduzir o áudio ao clicar na tecla
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    // Função para quando a tecla é pressionada
    tecla.onkeydown = function(evento) {
        // Verifica se a tecla pressionada é 'Space' ou 'Enter'
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa'); // Adiciona a classe 'ativa' para estilo
        }
    }

    // Função para quando a tecla é solta
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa'); // Remove a classe 'ativa'
    }
}
