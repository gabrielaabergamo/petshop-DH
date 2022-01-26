const year = new Date().getFullYear();
export const createMarkupFooterv2 = (currentYear = year) => (`
    <p class="footer-copyright">PETSHOP DH -  ${currentYear}</p>
    `);
