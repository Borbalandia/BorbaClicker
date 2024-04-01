let apc = 1;
let aps = 0;
let aboboras = 0;
const image = document.querySelector('#imagem');
const textoAbobora = document.querySelector('#moedas1-count');
const textoAps = document.querySelector('#moedas2-count');
const formatLetters = ["", "k", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "d", "U", "D", "Tr", "Qu", "QU", "Se", "SE", "Oc", "No", "V"];

function formatNumber(number) {
    const index = Math.floor(Math.log10(aboboras)/3)
    if (number >= 1000) {
        return (number/Math.pow(10, (Math.floor(Math.log10(aboboras)/3))*3)).toFixed(2) + formatLetters[index];
    } else return number.toFixed(0);
}

//#region script clicker

// adiciona um evento para os cliques na imagem
image.addEventListener('click', () => {
    let timeoutHandle;
    let podeclicar = true;

    if (!podeclicar) {
        return;
    }
    if (timeoutHandle) {
        clearTimeout(timeoutHandle);
    }

    // pega o valor de moedas1
    aboboras = parseInt(textoAbobora.textContent);
    // aumenta o valor em 1
    aboboras += apc;

    // atualiza o valor
    textoAbobora.textContent = formatNumber(aboboras);

    // ativa um delay de 0,05 segundos
    podeclicar = false;
    timeoutHandle = setTimeout(() => {
        podeclicar = true;
        timeoutHandle = null;
    }, 50);
});

//#endregion script clicker

//#region loja

const botaoCompraFilho = document.querySelector('#botao-compra-filho');

botaoCompraFilho.addEventListener('click', () => {
    aboboras -= 1;
    aps += 0.7;
    textoAps.textContent = formatNumber(aps);
});

//#endregion loja

//#region script menu

function toggleMenu(targetId) {
// seleciona a section da tela principal
let mainScreen = document.querySelectorAll('.conteudo-tela');

// muda o display dos elementos
mainScreen.forEach((item) => {
    if (item.id === targetId) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});
}
//#endregion script menu

function autoIncrement() {
    aboboras += aps/100;
    textoAbobora.textContent = formatNumber(aboboras);
    textoAps.textContent = formatNumber(aps);
}
setInterval(autoIncrement, 10);