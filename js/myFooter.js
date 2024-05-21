class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>

                <section class="contenu">
                    <div class="footer-infos">
                        <div class="footer-adresse">
                            <div class="box-logo-footer">
                                <img src="img/adresse-blanc.png" alt="" class="logo-footer">
                            </div>
                            <div class="box-footer-txt">
                                <p class="footer-txt-titre">LOCALISATION</p>
                                <p class="footer-txt-textes">Île de France - Seine et Marne</p>
                            </div>
                        </div>
                        <div class="footer-tel">
                            <div class="box-logo-footer">
                                <img src="img/telephone-blanc.png" alt="" class="logo-footer">
                            </div>
                            <div class="box-txt-footer-txt">
                                <p class="footer-txt-titre">TÉLÉPHONE</p>
                                <p class="footer-txt-textes">07 78 52 30 83</p>
                            </div>
                        </div>
                        <div class="footer-mail">
                            <div class="box-logo-footer">
                                <img src="img/mail-blanc.png" alt="" class="logo-footer">
                            </div>
                            <div class="box-txt-footer">
                                <p class="footer-txt-titre">E-MAIL</p>
                                <p class="footer-txt-textes">adrienbaptiste@live.fr</p>
                            </div>
                        </div>
                    </div>

                    <div class="footer-content">
                        <a href="index.html" class="footer-box-logoA"><img class="logoA" src="img/logoA.png" alt=""></a>
                        <div class="footer-box-nav">
                            <p class="footer-titre-nav">NAVIGATION</p>
                            <br>
                            <ul>
                                <a style="color: rgb(81,0,74);" href="index.html">Accueil</a>
                                <a href="a-propos.html">A propos</a>
                                <a href="competences.html">Compétences</a>
                                <a href="projets.html">Projets</a>
                                <a href="contact.html">Contact</a>
                            </ul>
                        </div>
                        <div class="footer-box-ecole">
                            <p class="footer-titre-ecole">INSCRIT À</p>
                            <a class="footer-box-logo-iut" href="https://www.iutsf.u-pec.fr" target="_blank"><img class="footer-logo-iut"
                                    src="img/upec-iut-blanc.png" alt="logo IUT Sénart Fontainebleau"></a>
                        </div>
                    </div>
                </section>

            </footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);