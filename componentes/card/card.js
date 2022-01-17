import { formatter } from '../../js/formatmoney.js'
import {getData} from '../../js/db-request.js'

export const createMarkupCard = async () => {
    const data = await getData()
      
    return data.map(servico => `
    <div class="card">
        <div class="card-retangulo"></div>
        <div class="card-info">
            <span class="card-titulo">${servico.title}</span> <br>
            <small class="card-preco">${formatter.format(servico.price)}</small>
        </div>
    </div>
    `).join(''); 
}