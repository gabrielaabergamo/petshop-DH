import {createElement} from './createElement'
import {createMarkupHeader} from '/componentes/header/header.js'
import {createMarkupFooter} from '/componentes/footer/footer.js'
import {createMarkupCard} from '/componentes/card/card.js'
import {createMarkupServicos} from '/componentes/servicos/servicos.js'
import {createMarkupFooterv2} from '/componentes/footerv2/footerv2.js'
import "../css/universal.scss" 
import {validateForm} from "./validarform.js"

    
createElement('.header', createMarkupHeader())
createElement('.footer', createMarkupFooter())
createElement('.servicos-container', createMarkupServicos())
createElement('.servicos-card__container', createMarkupCard())
createElement('.footer-v2', createMarkupFooterv2())
validateForm()