function onButtonClick(evento) {
    //previne o evento nativo
    evento.preventDefault()
    console.log("clicou no bagulho")

    let form = document.querySelector('form')
    let inputTel = document.querySelector('#telefone')
    let inputNome = document.querySelector('#nome-completo')
    let inputEmail = document.querySelector('#email')

    //if(inputTel.value.length < 10 || inputNome.value.length < 6 || !inputEmail.value.icludes('@')){
        //  alert('Preencha corretamente todos os campos')
    //} else {
        // form.submit
    //}

    let htmlErros = document.querySelector('ul.erros')
    htmlErros.innerHTML = ""
    let listaErros = [];

    if(inputNome.value.length < 6){
        listaErros.push('O campo nome completo deve ter no mínimo 6 caracteres.')
    }

    if(!inputEmail.value.includes('@')){
        listaErros.push('Preencha o campo e-mail corretamente.')
    }

    if(inputTel.value.length < 10 ){
        listaErros.push('O campo telefone precisa ter no mínimo 10 digitos.')
    }

    if(listaErros.length > 0){
        listaErros.forEach((mensagemErro) =>{
            htmlErros.innerHTML +='<li>' + mensagemErro + '</li>'
        })
    } else {
        form.submit()
    }
}

function onPageLoad() {
    let botao = document.querySelector('form button')
    if(!botao) return
    botao.addEventListener('click', onButtonClick)
}

export const validateForm = () => {
    window.addEventListener('load', onPageLoad)
}
