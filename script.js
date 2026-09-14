let darkmodeToggle = document.getElementById('darkmode-toggle');
let descricaoQualidades = document.querySelector('.descricao-qualidades');
let titulosQualidade = document.querySelectorAll('.descricao-qualidades h2');
let paragrafosQualidade = document.querySelectorAll('.descricao-qualidades p');
let secaoAvaliacoes = document.querySelector('.avaliacoes');
let tituloAvaliacoes = document.querySelectorAll('.avaliacoes h1');
let cardsAvaliacao = document.querySelectorAll('.avaliacao');
let footerItem = document.querySelector('footer.item');
let footerTitulo = document.querySelectorAll('.direita h1');
let footerLinks = document.querySelectorAll('.direita a');
let direitosAut = document.querySelector('#direitos-aut');

let aplicarTemaDark = () => {
    darkmodeToggle.classList.add('active');
    descricaoQualidades.classList.add('dark-theme');
    secaoAvaliacoes.classList.add('dark-theme');
    footerItem.classList.add('dark-theme');

    titulosQualidade.forEach((titulo) => {
        titulo.classList.add('dark-theme-title');
    });

    paragrafosQualidade.forEach((paragrafo) => {
        paragrafo.classList.add('dark-theme-text');
    });

    tituloAvaliacoes.forEach((titulo) => {
        titulo.classList.add('dark-theme-title');
    });

    cardsAvaliacao.forEach((card) => {
        card.classList.add('dark-theme-card');
    });

    footerTitulo.forEach((titulo) => {
        titulo.classList.add('dark-theme-title');
    });

    footerLinks.forEach((link) => {
        link.classList.add('dark-theme-link');
    });

    if (direitosAut) {
        direitosAut.classList.add('dark-theme-text');
    }
};

let removerTemaDark = () => {
    darkmodeToggle.classList.remove('active');
    descricaoQualidades.classList.remove('dark-theme');
    secaoAvaliacoes.classList.remove('dark-theme');
    footerItem.classList.remove('dark-theme');

    titulosQualidade.forEach((titulo) => {
        titulo.classList.remove('dark-theme-title');
    });

    paragrafosQualidade.forEach((paragrafo) => {
        paragrafo.classList.remove('dark-theme-text');
    });

    tituloAvaliacoes.forEach((titulo) => {
        titulo.classList.remove('dark-theme-title');
    });

    cardsAvaliacao.forEach((card) => {
        card.classList.remove('dark-theme-card');
    });

    footerTitulo.forEach((titulo) => {
        titulo.classList.remove('dark-theme-title');
    });

    footerLinks.forEach((link) => {
        link.classList.remove('dark-theme-link');
    });

    if (direitosAut) {
        direitosAut.classList.remove('dark-theme-text');
    }
};

darkmodeToggle.addEventListener('click', () => {
    let estaAtivo = darkmodeToggle.classList.contains('active');

    if (estaAtivo) {
        removerTemaDark();
    } else {
        aplicarTemaDark();
    }
});