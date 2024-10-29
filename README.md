# Mixer de Sons

Este projeto é um mixer de sons simples desenvolvido em HTML, CSS e JavaScript. O objetivo é permitir que o usuário toque diferentes sons ao interagir com as teclas no layout.

## Funcionalidades em JavaScript

### 1. Tocar Sons

A função `tocaSom(seletorAudio)` é responsável por tocar o som correspondente ao seletor de áudio fornecido. 
- **Verificação de Elemento**: Antes de tocar, a função verifica se o elemento existe e se é um elemento de áudio (`<audio>`). Se não for, uma mensagem de erro é exibida no console.

### 2. Interação com Teclas

O código utiliza um loop para percorrer todas as teclas disponíveis e atribuir funcionalidades a cada uma delas:

- **Eventos de Clique**: Cada tecla pode ser clicada para tocar o som associado a ela. Quando uma tecla é clicada, a função `tocaSom(idAudio)` é chamada, onde `idAudio` é o seletor do áudio específico daquela tecla.

- **Teclas do Teclado**: O projeto permite que o usuário pressione as teclas `Space` ou `Enter` no teclado para ativar o som da tecla correspondente:
  - **Pressionar Tecla**: Quando a tecla é pressionada, a classe `ativa` é adicionada, permitindo um feedback visual (por exemplo, uma animação ou mudança de estilo).
  - **Soltar Tecla**: Ao soltar a tecla, a classe `ativa` é removida, retornando ao estado original.

### 3. Estrutura de Teclas

Cada tecla é vinculada a um instrumento musical através de classes CSS. O código captura a classe correspondente a cada tecla para identificar o som a ser tocado.

## Tecnologias Utilizadas

- **HTML**: Estrutura do projeto.
- **CSS**: Estilização e animações das teclas.
- **JavaScript**: Manipulação do DOM e interatividade.
