import {servicos} from '../../js/servicos-list'
import { formatter } from '../../js/formatmoney.js'
import {getData} from '../../js/db-request.js'

export const createMarkupCard = (servicesList = servicos) => {
    const data = getData()
    const printData = () => {
        data.then((a) => {
          console.log(a);
        });
      };
      printData()
      
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