
# Jogo da Velha Estilizado

Este projeto é uma implementação personalizada e estilizada do clássico **Jogo da Velha (Tic-Tac-Toe)**, desenvolvido com o objetivo de praticar os conhecimentos em **HTML**, **CSS** e **JavaScript**.

## Objetivo

O foco principal do projeto é o aprimoramento das habilidades de front-end, com ênfase na organização do código, interatividade e uso de recursos multimídia, como sons e animações.

---

## Tecnologias Utilizadas

- **HTML5** – Estrutura do site
- **CSS3** – Estilização e animações
- **JavaScript (ES6+)** – Lógica do jogo e manipulação da interface

---

## Estrutura de Pastas

```plaintext
assets/
├── css/
│   ├── game.css                  # Estilos específicos da tela do jogo
│   └── index.css                 # Estilos da tela inicial
├── fonts/                        # Fontes personalizadas
├── images/                       # Imagens usadas na interface do jogo
├── js/
│   └── game/
│       ├── animations/           # Scripts relacionados a animações
│       │   ├── board.js          # Manipula o tabuleiro visual
│       │   ├── images.js         # Manipulação de imagens do jogo
│       │   ├── index.js          # Junção de todas as classes de animação
│       │   └── notifications.js  # Exibição das notificações
│       ├── boardGame.js          # Gerenciamento geral do tabuleiro interno
│       ├── game.js               # controle de inicio/fim do jogo
│       ├── main.js               # Ponto de entrada do jogo
│       ├── player.js             # Estados do jogador
│       ├── sound.js              # Controle de efeitos sonoros/músicas
│       └── ui.js                 # Listeners das jogadas do usuário
├── songs/                        # Arquivos de áudio
│
│    pages/
│    └── game.html                # Página do jogo
└──index.html                     # Página inicial
```

---

## Funcionalidades

- Interface estilizada com elementos visuais
- Transições e animações suaves
- Controle de jogadores (X e O)
- Notificações ao fim de cada partida
- Organização modular do código JavaScript

---

## Aprendizados

Durante o desenvolvimento deste projeto, foram praticados e reforçados diversos conceitos importantes, como:

- Manipulação do DOM com JavaScript puro
- Separação de responsabilidades nos arquivos JS
- Uso de eventos e interações
- Organização de projetos front-end em pastas
- Criação de uma interface amigável e responsiva

---

## Melhorias Futuras

- Implementar modo contra IA (inteligência artificial)
- Adicionar modo multiplayer online
- Suporte a dispositivos móveis com design responsivo
- Salvar histórico de partidas no localStorage

