const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelectorAll('.ativo');
        const proximoPasso = 'passo-' + this.getattribute('data-proximo');

        atual.classList.remove('ativo');
        ducument.getElementByid(proximoPasso).clssList.add('ativo')
    })
})