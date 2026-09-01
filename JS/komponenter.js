/**
 * Felles navbar og footer for Smaragd Motorsport
 */

const erUnderside = window.location.pathname.includes("/html/");

const rot = erUnderside ? "../" : "./";
const htmlMappe = erUnderside ? "./" : "./html/";

/* Finn aktiv side */

const aktuellSide = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

function erAktivSide(...sider) {
    return sider.includes(aktuellSide);
}


/* Navbar */

const navbar = `
<header class="topptekst">

    <nav class="navigasjon">

        <a href="${rot}index.html" class="logo">
            <img src="${rot}images/team/Firmabakgrunn.png" alt="Smaragd Motorsport logo">
            SMARAGD <span>MOTORSPORT</span>
        </a>

        <ul class="meny">

            <li>
                <a href="${htmlMappe}om-oss.html"
                    class="${erAktivSide("om-oss.html") ? "aktiv" : ""}">
                    OM OSS
                </a>
            </li>

            <li>
                <a href="${htmlMappe}oppgavebeskrivelse.html"
                    class="${erAktivSide("oppgavebeskrivelse.html") ? "aktiv" : ""}">
                    OPPGAVE
                </a>
            </li>

            <li>
                <a href="${htmlMappe}prosjektdagbok.html"
                    class="${erAktivSide("prosjektdagbok.html") ? "aktiv" : ""}">
                    PROSJEKTDAGBOK
                </a>
            </li>           

            <li class="dropdown">

                <a href="#"
                    class="dropdown-knapp ${erAktivSide("status-1.html", "status-2.html") ? "aktiv" : ""}">
                    STATUSRAPPORT
                    <span class="pil">⌄</span>
                </a>

                <ul class="dropdown-meny">

                    <li>
                        <a href="${htmlMappe}status-1.html"
                            class="${erAktivSide("status-1.html") ? "aktiv" : ""}">
                            STATUSRAPPORT 1
                        </a>
                    </li>

                    <li>
                       <a href="${htmlMappe}status-2.html"
                            class="${erAktivSide("status-2.html") ? "aktiv" : ""}">
                            STATUSRAPPORT 2
                        </a>
                    </li>

                </ul>

            </li>

            <li>
                <a href="${htmlMappe}avsluttende-refleksjon.html"
                    class="${erAktivSide("avsluttende-refleksjon.html") ? "aktiv" : ""}">
                    AVSLUTTENDE REFLEKSJON
                </a>
            </li>

        </ul>

    </nav>

</header>
`;


/* Footer */

const footer = `
<!-- Bunntekst -->
    <footer class="bunntekst">

        <p>
            © 2026 Praksisprosjekt – Smaragd Motorsport
        </p>

        <p>
            Mohammed Liban Osman · Noa Vincent Nordén · Dennis Tea · Efe Kaan Eksi · Marius Khiem Nguyen
        </p>

    </footer>
`;


/* Sett inn komponenter */

document.addEventListener("DOMContentLoaded", () => {

    // Navbar øverst
    document.body.insertAdjacentHTML("afterbegin", navbar);

    // Footer nederst
    document.body.insertAdjacentHTML("beforeend", footer);

});