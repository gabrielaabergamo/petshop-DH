import "./footerv2.scss"

export function createMarkupFooterv2(){
    let year = new Date().getFullYear()
    return(`
    <p class="footer-copyright">PETSHOP DH -  ${year}</p>
    `)
} 