
function btnEventClick(botao){
    botao.onclick = (evento) =>{
     //previne o evento nativo
        evento.preventDefault()
        console.log("clicou no bagulho")

        let form = document.querySelector('form')
        let inputTel = document.querySelector('#telefone')
        let inputNome = document.querySelector('#nome-completo')
        let inputEmail = document.querySelector('#email')

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
                htmlErros.innerHTML +='<li data-cy="mensagemErro">' + mensagemErro + '</li>'
            })
        } else {
            form.innerHTML += '<p class="trab-form__mensagem" data-cy="mensagemFormEnviado">form enviado!</p>'
        }
        }
    }

function btnEvent(){
    let botao = document.querySelector('form button')
    if (!botao) return
    btnEventClick(botao)
}

export const validateForm = () =>{
    window.addEventListener('load', btnEvent)
}