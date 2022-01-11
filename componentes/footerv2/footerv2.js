let year = new Date().getFullYear()
export const createMarkupFooterv2 = (currentYear = year) => {
    return(`
    <p class="footer-copyright">PETSHOP DH -  ${currentYear}</p>
    `)
}