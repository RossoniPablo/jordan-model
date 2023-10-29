// Recebendo os elementos que contem a classe 'jordan' do html pelo id
const jordans = document.querySelectorAll('.jordan')

jordans.forEach((jordan) => {
    jordan.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        removeSelecaoJordao();

        jordan.classList.add('selecionado');

        alterarImagemJordanSelecionado(jordan);

        alteraNomeJordanSelecionado(jordan);

        alteraDescricaoJordan(jordan);
    } )
});

function alteraDescricaoJordan(jordan) {
    const descricaoJordam = document.getElementById('descricao-jordan');
    descricaoJordam.innerText = jordan.getAttribute('data-description');
}

function alteraNomeJordanSelecionado(jordan) {
    const nomeJordan = document.getElementById('nome-jordan');
    nomeJordan.innerText = jordan.getAttribute('data-name');
}

function alterarImagemJordanSelecionado(jordan) {
    const imagemJordanGrande = document.querySelector('.jordan-grande');
    const idJordan = jordan.attributes.id.value;
    imagemJordanGrande.src = `./src/img/jordan-${idJordan}.png`;
}

function removeSelecaoJordao() {
    const jordanSelecionado = document.querySelector('.selecionado');
    jordanSelecionado.classList.remove('selecionado');
}
