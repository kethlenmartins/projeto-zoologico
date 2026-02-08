# 🎮 Site de Aniversário - Level 21 Unlocked

Site de aniversário interativo com tema gaming/tático, cores do CRB, e easter eggs especiais.

## 🎯 Características

- **Design Tático/Minimalista** - Inspirado em interfaces de jogos com as cores do CRB (Vermelho #E30613 e Branco)
- **Easter Eggs Interativos**:
  - Código Konami (↑ ↑ ↓ ↓ ← → ← → B A) ativa modo Minecraft
  - Terminal com comando `python3 celebrate.py`
  - Fotos de futebol tocam som de "GOLAÇO"
- **100% Vanilla** - HTML, CSS e JavaScript puro (sem frameworks)
- **Responsivo** - Funciona em desktop e mobile

## 📁 Estrutura do Projeto

```
site_leozin/
├── index.html              # Página principal
├── css/
│   ├── main.css           # Estilos base
│   ├── themes.css         # Tema Minecraft
│   └── animations.css     # Animações
├── js/
│   ├── main.js           # Lógica principal
│   ├── terminal.js       # Terminal interativo
│   ├── konami.js         # Detector Konami Code
│   └── audio.js          # Controle de áudio
├── assets/
│   ├── images/
│   │   ├── profile/      # Foto do perfil
│   │   ├── games/        # Screenshots dos jogos
│   │   └── football/     # Fotos de futebol
│   ├── audio/
│   │   ├── background-music.mp3  # Música de fundo (Rock)
│   │   └── golaco.mp3            # Som de "GOLAÇO"
│   ├── textures/
│   │   ├── grass-dirt.png        # Textura Minecraft
│   │   └── cobblestone.png       # Textura Minecraft
│   └── fonts/
│       └── minecraft.ttf         # Fonte pixelada (opcional)
├── context.md            # Documentação original
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### 1. Adicionar Assets

Você precisa adicionar os seguintes arquivos:

**Imagens:**
- `assets/images/profile/photo.jpg` - Foto do aniversariante
- `assets/images/games/valorant.jpg` - Screenshot Valorant
- `assets/images/games/lol.jpg` - Screenshot League of Legends
- `assets/images/games/hytale.jpg` - Screenshot Hytale
- `assets/images/football/photo1.jpg` - Foto de futebol
- `assets/images/football/photo2.jpg` - Foto de futebol
- `assets/images/football/photo3.jpg` - Foto de futebol
- `assets/images/football/photo4.jpg` - Foto de futebol

**Áudio:**
- `assets/audio/background-music.mp3` - Música de rock (opcional)
- `assets/audio/golaco.mp3` - Som de gol (opcional)

**Texturas Minecraft (opcional):**
- `assets/textures/grass-dirt.png`
- `assets/textures/cobblestone.png`
- `assets/fonts/minecraft.ttf`

### 2. Personalizar Conteúdo

Abra o `index.html` e personalize:

- **Nome e Idade** (linha 39-49):
  ```html
  <span class="stat-value" id="player-name">[Nome do Amigo]</span>
  <span class="stat-value" id="player-age">21</span>
  ```

- **Bandas de Rock** (linhas 104-130)
- **Quests Completadas** (linhas 171-191)

### 3. Abrir o Site

Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

Ou use um servidor local:

```bash
# Com Python 3
python3 -m http.server 8000

# Com Node.js (npx)
npx serve

# Com PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 🎮 Funcionalidades Interativas

### Terminal
Digite no terminal na parte inferior da página:
- `python3 celebrate.py` - Inicia a celebração
- `help` - Mostra comandos disponíveis
- `clear` - Limpa o terminal
- `ls` - Lista arquivos
- `echo [texto]` - Imprime texto

### Atalhos de Teclado
- **ESPAÇO** - Play/Pause música de fundo
- **M** - Mute/Unmute
- **↑ ↑ ↓ ↓ ← → ← → B A** - Ativa modo Minecraft

### Cards de Jogos
Clique nos cards de jogos para expandir e ver mais informações.

### Fotos de Futebol
Clique nas fotos marcadas com "GOLAÇO" para tocar som especial.

## 🎨 Personalização de Cores

As cores são definidas via CSS Variables em `css/main.css`:

```css
:root {
    --crb-red: #E30613;      /* Vermelho do CRB */
    --crb-white: #FFFFFF;    /* Branco */
    --dark-bg: #0A0A0A;      /* Fundo escuro */
    --dark-gray: #1A1A1A;    /* Cinza escuro */
}
```

## 🔧 Personalização Dinâmica

Você pode atualizar nome e idade via JavaScript:

```javascript
// No console ou em seu código
window.birthdayApp.updateName('Nome Completo');
window.birthdayApp.updateAge(21);
```

Ou via URL:
```
index.html?name=Leonardo&age=21
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (versão 90+)
- ✅ Firefox (versão 88+)
- ✅ Safari (versão 14+)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Música não toca
- Verifique se o arquivo `background-music.mp3` existe
- Alguns browsers bloqueiam autoplay - clique no botão PLAY
- Formatos suportados: MP3, OGG, WAV

### Imagens não aparecem
- Verifique os caminhos dos arquivos
- Use imagens nos formatos: JPG, PNG, WEBP
- Verifique o console do browser (F12) para erros

### Modo Minecraft não funciona
- Verifique se as texturas estão na pasta `assets/textures/`
- As texturas são opcionais - o modo funciona mesmo sem elas

## 🎯 Próximos Passos

1. ✅ Adicionar as imagens do aniversariante e jogos
2. ✅ Adicionar arquivos de áudio
3. ✅ Personalizar textos (nome, idade, bandas, quests)
4. 📦 (Opcional) Adicionar texturas Minecraft
5. 🚀 Deploy em um servidor ou GitHub Pages

## 📝 Licença

Este projeto é de uso pessoal. Criado com ❤️ para celebrar um aniversário especial!

---

**Versão:** 1.0.0  
**Criado em:** Fevereiro 2026  
**Stack:** HTML5, CSS3, JavaScript ES6+
