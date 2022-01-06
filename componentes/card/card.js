import {servicos} from '../servicos-list.js'
import "./card.scss"

export function createMarkupCard() {
    return servicos.map(servicos => `
    <div class="card">
        <div class="card-retangulo"></div>
        <div class="card-info">
            <span class="card-titulo">${servicos.titulo}</span> <br>
            <small class="card-preco">${servicos.preco}</small>
        </div>
    </div>
    `).join(''); 
}
