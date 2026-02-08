### Componentes Principais (Frontend)
Para que a página fique interativa e dinâmica, foque nestes blocos:

Hero Section (O Lobby): Uma tela de boas-vindas com um "Play" que inicia uma música de fundo (Rock) e um título tipo "Level 21 Unlocked" (ou a idade dele).

The Match History (Retrospectiva de Jogos): * Cards interativos para cada jogo (Valorant, LoL, Hytale).

Ao passar o mouse (hover), o card revela uma print de uma jogada engraçada ou um "rank" inventado por você (ex: "Rank: Mestre em morrer pra faca").

Spotify Wrapped "Private Edition": * Um componente que imita o design do Spotify exibindo as bandas de Rock que vocês mais ouviram.

Galeria de Fotos "Open World": * Um grid irregular (Masonry) com as fotos de vocês, usando efeitos de glitch nas imagens para manter a pegada tech.

Quest Log (Área de Texto): * Uma lista de "missões cumpridas" no ano (ex: Ganhar aquele interclasses de futebol, sobreviver à semana de provas).

### Interações e "Brincadeiras" (JS)
Para tornar a página divertida, você pode implementar:

Konami Code: Se ele digitar a sequência de teclas ↑ ↑ ↓ ↓ ← → ← → B A, a página muda o tema para o estilo Minecraft (blocos de grama no fundo).

Easter Egg de Som: Ao clicar em uma foto de futebol, toca um áudio de "GOLAÇO" ou um hino de rock clássico.

Terminal Interativo: Como você estuda no Inteli e manja de desenvolvimento, pode colocar um pequeno terminal onde ele precisa digitar npm run celebrate para liberar a mensagem final dos amigos.

Com certeza, Vinicius. Vamos ajustar o plano para algo mais "clean", focado no CRB (Alvirrubro) e com uma arquitetura de código pura (Vanilla HTML/CSS/JS) para facilitar a integração no site principal.

Aqui está o roteiro detalhado para você passar para a próxima IA, seguido pelos prompts de geração de ativos.

1. Especificações Técnicas e Estéticas (Manual da IA)
Contexto: Você deve gerar o código para uma página única (Single Page) de aniversário.

Estilo Visual:

Identidade: "Sóbria e Tática". Cores do CRB (Vermelho #E30613 e Branco #FFFFFF).

UI: Botões e containers com bordas secas (sem border-radius). Nada de sombras pesadas ou brilhos. Design minimalista e industrial.

Tipografia: Sans-serif moderna e de peso forte (ex: Inter ou Roboto).

Animações: Transições suaves de opacidade (fade-in) e deslocamentos laterais discretos ao dar scroll.

Estrutura de Código:

Arquivo único de HTML, CSS e JS (ou separados, mas sem frameworks).

Uso de CSS Variables para cores (para facilitar o modo Minecraft).

2. Passo a Passo da Implementação
Passo 1: O Terminal de Acesso (Footer ou Modal)
Crie um componente fixo na base da página que simula um terminal Linux/MacOS.

Comportamento: O terminal deve aceitar o comando python3 celebrate.py.

Ação: Ao executar, o terminal deve imprimir linhas de texto simulando o carregamento de "memórias" e, ao final, abrir um modal central com a mensagem principal de aniversário ("Missão Cumprida: [Nome do Amigo] Level UP").

Passo 2: Seções de Conteúdo
Header "Tactical Profile": Foto do amigo em um lado, e do outro "Stats" (Nome, Idade, Time: CRB, Posição: Futebol/Rock/Gamer).

Seção "Match History": Grid de cards 1x1 sem bordas arredondadas. Cada card representa um jogo (Valorant, LoL, etc). Ao clicar, o card expande lateralmente revelando uma foto de vocês jogando e um texto curto.

Seção "Audio Log": Uma lista vertical minimalista (estilo setlist de show) com os nomes das bandas de Rock favoritas dele.

Galeria "Field Operations": Fotos de vocês no futebol. Layout em colunas limpas.

Passo 3: O Easter Egg (Konami Code)
Implemente um "Event Listener" para a sequência de teclas: cima, cima, baixo, baixo, esquerda, direita, esquerda, direita, b, a.

Ação: O CSS deve ser sobrescrito por uma classe .minecraft-theme.

Mudança Visual: O fundo branco vira textura de "Dirt/Grass", o vermelho vira "Cobblestone" e a fonte muda para uma tipografia pixelada.

4. Lógica do Terminal (Snippet para a IA de Código)
Para garantir que o comando que você quer funcione exatamente, peça para a IA incluir este trecho:

JavaScript

const terminalInput = document.querySelector('#terminal-input');
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim();
        if (command === 'python3 celebrate.py') {
            runCelebrationScript(); // Função que dispara as mensagens e o modal
        }
        terminalInput.value = '';
    }
});