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
            <img src="${rot}images/logo.png" alt="Smaragd Motorsport logo">
            <span class="logo-tekst">SMARAGD <span>MOTORSPORT</span></span>
        </a>

        <button type="button" class="meny-knapp" id="meny-knapp" aria-label="Åpne meny" aria-expanded="false" aria-controls="hovedmeny">
            <span class="meny-linje"></span>
            <span class="meny-linje"></span>
            <span class="meny-linje"></span>
        </button>

        <ul class="meny" id="hovedmeny">

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

                <a href="${htmlMappe}status-1.html"
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

        <div class="bunntekst-innhold">

            <div class="bunntekst-om">

                <div class="bunntekst-logo">
                    <img src="${rot}images/logo.png" alt="Smaragd Motorsport logo">
                    SMARAGD <span>MOTORSPORT</span>
                </div>

                <p class="bunntekst-prosjekt">
                    IS-302 Praksisprosjekt · Gruppe 27
                </p>

                <p class="bunntekst-beskrivelse">
                    Utvikling av en digital løsning for Smaragd Motorsport, i samarbeid med Universitetet i Agder.
                </p>

                <div class="bunntekst-sosiale">
                    <a href="https://www.instagram.com/smaragd.motorsport/" target="_blank" rel="noopener">Instagram</a>
                    <a href="https://www.tiktok.com/@smaragd.motorsport1" target="_blank" rel="noopener">TikTok</a>
                </div>

            </div>

            <nav class="bunntekst-lenker" aria-label="Sider">

                <p class="bunntekst-overskrift">
                    SIDER
                </p>

                <ul>
                    <li><a href="${rot}index.html">Hjem</a></li>
                    <li><a href="${htmlMappe}om-oss.html">Om oss</a></li>
                    <li><a href="${htmlMappe}oppgavebeskrivelse.html">Oppgave</a></li>
                    <li><a href="${htmlMappe}prosjektdagbok.html">Prosjektdagbok</a></li>
                </ul>

            </nav>

            <nav class="bunntekst-lenker" aria-label="Rapporter">

                <p class="bunntekst-overskrift">
                    RAPPORTER
                </p>

                <ul>
                    <li><a href="${htmlMappe}status-1.html">Statusrapport 1</a></li>
                    <li><a href="${htmlMappe}status-2.html">Statusrapport 2</a></li>
                    <li><a href="${htmlMappe}avsluttende-refleksjon.html">Avsluttende refleksjon</a></li>
                </ul>

            </nav>

        </div>

        <div class="bunntekst-bunnlinje">
            <p>
                © 2026 IS-302 Praksisprosjekt · Gruppe 27 · Universitetet i Agder
            </p>
        </div>

    </footer>
`;


/* Sett inn komponenter */

document.addEventListener("DOMContentLoaded", () => {

    // Navbar øverst
    document.body.insertAdjacentHTML("afterbegin", navbar);

    // Footer nederst
    document.body.insertAdjacentHTML("beforeend", footer);

    settOppMobilmeny();
    settOppLysboks();

});


/* Lysboks (forstørret bildevisning) */

function settOppLysboks() {

    const bilder = [...document.querySelectorAll(".status-skjermbilder img")];

    if (!bilder.length) return;

    const flereBilder = bilder.length > 1;
    let indeks = 0;

    const lysboks = document.createElement("div");
    lysboks.className = "lysboks";
    lysboks.innerHTML = `
        <button type="button" class="lysboks-lukk" aria-label="Lukk bildevisning">&times;</button>
        ${flereBilder ? `
            <button type="button" class="lysboks-pil lysboks-forrige" aria-label="Forrige bilde">&#8249;</button>
            <button type="button" class="lysboks-pil lysboks-neste" aria-label="Neste bilde">&#8250;</button>
        ` : ""}
        <img src="" alt="">
    `;
    document.body.appendChild(lysboks);

    const lysboksBilde = lysboks.querySelector("img");
    const lukkKnapp = lysboks.querySelector(".lysboks-lukk");
    const forrigeKnapp = lysboks.querySelector(".lysboks-forrige");
    const nesteKnapp = lysboks.querySelector(".lysboks-neste");

    function visBilde(nyIndeks) {
        indeks = (nyIndeks + bilder.length) % bilder.length;
        lysboksBilde.src = bilder[indeks].src;
        lysboksBilde.alt = bilder[indeks].alt;
    }

    function apneLysboks(startIndeks) {
        visBilde(startIndeks);
        lysboks.classList.add("apen");
        document.body.classList.add("lysboks-apen");
    }

    function lukkLysboks() {
        lysboks.classList.remove("apen");
        document.body.classList.remove("lysboks-apen");
    }

    function nesteBilde() {
        visBilde(indeks + 1);
    }

    function forrigeBilde() {
        visBilde(indeks - 1);
    }

    bilder.forEach((bilde, i) => {
        bilde.addEventListener("click", () => apneLysboks(i));
    });

    // Lukk ved klikk utenfor bildet, men ikke på selve bildet
    lysboks.addEventListener("click", (event) => {
        if (event.target === lysboks) lukkLysboks();
    });

    lukkKnapp.addEventListener("click", lukkLysboks);

    if (forrigeKnapp) forrigeKnapp.addEventListener("click", forrigeBilde);
    if (nesteKnapp) nesteKnapp.addEventListener("click", nesteBilde);

    // Tastatur: Esc lukker, piltaster bytter bilde
    document.addEventListener("keydown", (event) => {
        if (!lysboks.classList.contains("apen")) return;

        if (event.key === "Escape") lukkLysboks();
        if (flereBilder && event.key === "ArrowRight") nesteBilde();
        if (flereBilder && event.key === "ArrowLeft") forrigeBilde();
    });

    // Swipe på mobil
    if (flereBilder) {

        let startX = 0;
        let startY = 0;

        lysboks.addEventListener("touchstart", (event) => {
            startX = event.changedTouches[0].clientX;
            startY = event.changedTouches[0].clientY;
        }, { passive: true });

        lysboks.addEventListener("touchend", (event) => {
            const sluttX = event.changedTouches[0].clientX;
            const sluttY = event.changedTouches[0].clientY;
            const deltaX = sluttX - startX;
            const deltaY = sluttY - startY;

            if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
                deltaX < 0 ? nesteBilde() : forrigeBilde();
            }
        }, { passive: true });
    }
}


/* Mobilmeny (hamburger-knapp + dropdown) */

function settOppMobilmeny() {

    const menyKnapp = document.getElementById("meny-knapp");
    const meny = document.getElementById("hovedmeny");

    if (!menyKnapp || !meny) return;

    function lukkMeny() {
        menyKnapp.setAttribute("aria-expanded", "false");
        meny.classList.remove("apen");
        document.body.classList.remove("meny-apen");
    }

    function apneMeny() {
        menyKnapp.setAttribute("aria-expanded", "true");
        meny.classList.add("apen");
        document.body.classList.add("meny-apen");
    }

    menyKnapp.addEventListener("click", () => {
        const erApen = menyKnapp.getAttribute("aria-expanded") === "true";
        erApen ? lukkMeny() : apneMeny();
    });

    // Lukk meny når en lenke i menyen trykkes (utenom dropdown-knappen)
    meny.querySelectorAll("a:not(.dropdown-knapp)").forEach((lenke) => {
        lenke.addEventListener("click", lukkMeny);
    });

    // Lukk meny med Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") lukkMeny();
    });

    // Lukk meny igjen dersom vinduet blir bredt nok til desktop-meny
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1200) lukkMeny();
    });

    // Dropdown (statusrapport) - klikk for å utvide/lukke på mobil
    const dropdown = meny.querySelector(".dropdown");
    const dropdownKnapp = meny.querySelector(".dropdown-knapp");

    if (dropdown && dropdownKnapp) {
        dropdownKnapp.addEventListener("click", (event) => {
            if (window.innerWidth <= 1200) {
                event.preventDefault();
                dropdown.classList.toggle("apen");
            }
        });
    }
}