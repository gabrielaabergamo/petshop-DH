let inputnome = document.querySelector('input')

let dadosform = document.querySelectorAll('input')
console.log(dadosform)

let tituloprincipal = document.querySelector('h1')
tituloprincipal.innerText = "Faça parte do nosso time"

let inputemail = document.querySelector('#email')
inputemail.setAttribute('placeholder', 'jane@mail.com')

let inputcargahoraria = document.querySelector('#carga-horaria')
console.log(inputcargahoraria.innerHTML)

inputcargahoraria.innerHTML += '<option value="Trainee">Trainee</option>'

tituloprincipal.style.color = 'orange'

let elementoDiv = document.querySelector('div')

//elementoDiv.classList.add("novaClasse")
//elementoDiv.classList.remove("container")