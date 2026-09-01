/**
 * Felles navbar og footer for Smaragd Motorsport
 */

const erUnderside = window.location.pathname.includes("/html/");

const rot = erUnderside ? "../" : "./";
const htmlMappe = erUnderside ? "./" : "./html/";


/* ================================
   NAVBAR
================================ */

const navbar = `
<header class="topptekst">

    <nav class="navigasjon">

        <a href="${rot}index.html" class="logo">
            SMARAGD <span>MOTORSPORT</span>
        </a>

        <ul class="meny">

            <li>
                <a href="${htmlMappe}om-oss.html">
                    Om oss
                </a>
            </li>

            <li>
                <a href="${htmlMappe}oppgavebeskrivelse.html">
                    Oppgave
                </a>
            </li>

            <li>
                <a href="${htmlMappe}prosjektdagbok.html">
                    Prosjektdagbok
                </a>
            </li>           

            <li class="dropdown">

                <a href="#" class="dropdown-knapp">
                    Statusrapport
                    <span class="pil">⌄</span>
                </a>

                <ul class="dropdown-meny">

                    <li>
                        <a href="${htmlMappe}status-1.html">
                            Statusrapport 1
                        </a>
                    </li>

                    <li>
                        <a href="${htmlMappe}status-2.html">
                            Statusrapport 2
                        </a>
                    </li>

                </ul>

            </li>

            <li>
                <a href="${htmlMappe}avsluttende-refleksjon.html">
                    Avsluttende refleksjon
                </a>
            </li>

        </ul>

    </nav>

</header>
`;


/* ================================
   FOOTER
================================ */

const footer = `
<!-- Bunntekst -->
    <footer class="bunntekst">

        <p>
            © 2026 Smaragd Motorsport – Praksisprosjekt
        </p>

        <p>
            Mohammed · Noa · Dennis · Kaan · Marius
        </p>

    </footer>
`;


/* ================================
   SETT INN KOMPONENTER
================================ */

document.addEventListener("DOMContentLoaded", () => {

    // Navbar øverst
    document.body.insertAdjacentHTML("afterbegin", navbar);

    // Footer nederst
    document.body.insertAdjacentHTML("beforeend", footer);

});