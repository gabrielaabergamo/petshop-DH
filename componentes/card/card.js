import {servicos} from '../servicos-list.js'
import { formatter } from '../../js/formatmoney.js'

export const createMarkupCard = (servicesList = servicos) => {
    return servicesList.map(servico => `
    <div class="card">
        <div class="card-retangulo"></div>
        <div class="card-info">
            <span class="card-titulo">${servico.titulo}</span> <br>
            <small class="card-preco">${formatter.format(servico.preco)}</small>
        </div>
    </div>
    `).join(''); 
}