import { createMarkupFooterv2 } from '../footerv2/footerv2.js';

export const createMarkupFooter = () => (`
    <div class="container footer-container">
        <div class="footer-image">
            <img src="img/logo-black 1.png" alt="">
        </div>
        <div class="footer-text">
            <p>
                CONTATO@PETSHOP.COM.BR <br>
                (11) 98484-8484 (WHATSAPP) <br>
                <br>
                AVENIDA PAULISTA, 4242 <br>
                BAIRRO CONSOLAÇÃO <br>
                SÃO PAULO- SP <br>
            </p>
        </div>

        <div class="footer-map">
            <iframe class="footer-map__content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119190874!2d-0.3817828574308245!3d51.52873519860473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbr!4v1631888347353!5m2!1sen!2sbr" width="466" height="257" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
        ${createMarkupFooterv2()}
    `);
