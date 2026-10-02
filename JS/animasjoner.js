/**
 * Animasjoner for Smaragd Motorsport
 * - Elementer glir mykt inn når siden åpnes/lastes og når de scrolles til
 */

(function () {
    const reduserBevegelse =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduserBevegelse) {
        return;
    }

    /* Elementer som skal "dukke opp" */

    const velgere = [
        ".hero-innhold > *",
        ".dagbok-introduksjon-innhold > *",
        ".om-oss-innhold > h1",
        ".om-oss-overtekst",
        ".om-oss-introtekst",
        ".status-intro > div > *",
        ".refleksjon-intro > div > *",
        ".innhold > *",
        ".kort",
        ".personkort",
        ".uke",
        ".status-innhold > *",
        ".status-skjermbilder figure",
        ".refleksjon-del",
        ".refleksjon-slutt"
    ].join(", ");

    function startReveal() {
        if (!("IntersectionObserver" in window)) {
            return;
        }

        const elementer = Array.from(document.querySelectorAll(velgere));

        if (!elementer.length) {
            return;
        }

        // Forskyv elementer med samme forelder litt, slik at de kommer inn etter hverandre
        const søsken = new Map();

        elementer.forEach(function (el) {
            const forelder = el.parentElement;
            const indeks = søsken.get(forelder) || 0;
            søsken.set(forelder, indeks + 1);

            el.classList.add("reveal");
            el.style.animationDelay = Math.min(indeks * 70, 280) + "ms";
        });

        // Fjern reveal-klassene når animasjonen er ferdig, slik at hover-effektene
        // (som også bruker transform) fungerer som normalt etterpå
        function ryddOpp(el) {
            el.classList.remove("reveal", "reveal-visible");
            el.style.animationDelay = "";
        }

        const observer = new IntersectionObserver(function (oppforinger, obs) {
            oppforinger.forEach(function (oppforing) {
                if (!oppforing.isIntersecting) {
                    return;
                }

                const el = oppforing.target;
                el.classList.add("reveal-visible");

                el.addEventListener("animationend", function ferdig(hendelse) {
                    if (hendelse.target !== el) {
                        return;
                    }
                    el.removeEventListener("animationend", ferdig);
                    ryddOpp(el);
                });

                obs.unobserve(el);
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        elementer.forEach(function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startReveal);
    } else {
        startReveal();
    }

})();
