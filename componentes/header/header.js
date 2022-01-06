import "./header.scss"

export function createMarkupHeader() {
    return (`
    <div class="container header-container">
        <div class="header-logo">
            <img src="img/Petshop DH-logo-white 1.png" alt="Logo do Petshop">
        </div>

        <div class="header-nav">
            <ul class="header-list">
                <li class="header-list__item"><a class="header-list__link" href="index.html">Home</a></li>
                <li class="header-list__item"><a class="header-list__link" href="servicos.html">Serviços</a></li>
                <li class="header-list__item"><a class="header-list__link" href="contato.html">Contato</a></li>
                <li class="header-list__item"><a class="header-list__link" href="trabalhe-conosco.html">Trabalhe conosco</a></li>
            </ul>
        </div>
    </div>
    `); 
  }
