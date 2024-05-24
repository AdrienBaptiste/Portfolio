class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="box-logo">
                    <a class="header-logo" href="index.html"><img src="img/logoA.png" alt=""></a>
                </div>
                <ul class="header-navbar">
                    <a href="index.html">
                        <li>Accueil</li>
                    </a>
                    <a href="a-propos.html">
                        <li>À propos</li>
                    </a>
                    <a href="competences.html">
                        <li>Compétences</li>
                    </a>
                    <a href="projets.html">
                        <li>Projets</li>
                    </a>
                    <a href="contact.html">
                        <li>Contact</li>
                    </a>
                </ul>
                <div class="header-burger">
                    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                    <label for="openSidebarMenu" class="sidebarIconToggle">
                        <div class="spinner diagonal part-1"></div>
                        <div class="spinner horizontal"></div>
                        <div class="spinner diagonal part-2"></div>
                    </label>
                    <div id="sidebarMenu">
                        <ul class="sidebarMenuInner">
                            <li><a href="index.html">Accueil</a></li>
                            <li><a href="a-propos.html">À propos</a></li>
                            <li><a href="competences.html">Compétences</a></li>
                            <li><a href="projets.html">Projets</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        `;

        this.highlightCurrentPage();
    }

    highlightCurrentPage() {
        const currentPage = this.getAttribute('current-page');
        const links = this.querySelectorAll('.header-navbar a');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('page-actuelle');
            } else {
                link.classList.remove('page-actuelle');
            }
        });
    }
    
}
customElements.define('my-header', MyHeader);