/**
 * "Følg prosjektet" på forsiden.
 * Leser prosjektdagboken og bygger siste uke og en tidslinje,
 * slik at forsiden oppdateres av seg selv når en ny uke skrives i dagboken.
 */

(function () {

    const AKTUELL_BEHOLDER = document.getElementById("dagbok-oversikt");
    if (!AKTUELL_BEHOLDER) return;

    const DAGBOK_URL = "./html/prosjektdagbok.html";

    function el(tag, klasse, tekst) {
        const e = document.createElement(tag);
        if (klasse) e.className = klasse;
        if (tekst !== undefined) e.textContent = tekst;
        return e;
    }

    function kortDato(tekst) {
        // "12. oktober – 18. oktober 2026" -> "12. okt – 18. okt"
        return tekst
            .replace(/\s*\d{4}$/, "")
            .replace(/(\d+\.)\s+([a-zæøå]+)/gi, (_, dag, mnd) => dag + " " + mnd.slice(0, 3));
    }

    function utdrag(tekst, maks) {
        const ren = tekst.replace(/\s+/g, " ").trim();
        if (ren.length <= maks) return ren;

        const kort = ren.slice(0, maks);
        const punktum = kort.lastIndexOf(". ");
        return punktum > maks * 0.5 ? kort.slice(0, punktum + 1) : kort.replace(/\s+\S*$/, "") + "…";
    }

    function lesUke(node) {
        const nummer = node.querySelector(".uke-nummer").textContent.replace(/\D/g, "");
        const dato = node.querySelector(".uke-info span").textContent.trim();
        const tittel = node.querySelector(".uke-info h2").textContent.trim();
        const skrevet = node.tagName === "DETAILS";

        // Utdrag: felles avsnitt hvis det finnes, ellers første avsnitt i uken
        let tekst = "";
        if (skrevet) {
            const personer = [...node.querySelectorAll(".uke-innhold .person")];
            const felles = personer.find((p) => /felles/i.test(p.querySelector("h3").textContent));
            const avsnitt = (felles || personer[0] || node.querySelector(".uke-innhold"))
                .querySelector("p");
            tekst = avsnitt ? avsnitt.textContent : "";
        }

        return { nummer, dato, tittel, skrevet, tekst };
    }

    function bygg(uker) {

        const skrevne = uker.filter((u) => u.skrevet);
        const siste = skrevne[skrevne.length - 1];
        if (!siste) return null;

        const rot = document.createDocumentFragment();


        /* Siste fra dagboken */

        const kort = el("div", "folg-siste");

        const tekstkolonne = el("div", "folg-siste-tekst");
        tekstkolonne.append(
            el("p", "folg-siste-etikett", "Siste fra dagboken"),
            el("p", "folg-siste-uke", "Uke " + siste.nummer + " · " + kortDato(siste.dato)),
            el("h3", "", siste.tittel)
        );
        if (siste.tekst) tekstkolonne.append(el("p", "folg-siste-utdrag", utdrag(siste.tekst, 280)));

        const knapp = el("a", "hovedknapp", "Les hele uken →");
        knapp.href = DAGBOK_URL + "#uke-" + siste.nummer;
        tekstkolonne.append(knapp);

        kort.append(tekstkolonne, el("span", "folg-siste-nummer", siste.nummer));
        kort.querySelector(".folg-siste-nummer").setAttribute("aria-hidden", "true");
        rot.append(kort);


        /* Tidslinje */

        const tidslinjeTopp = el("div", "folg-tidslinje-topp");
        tidslinjeTopp.append(
            el("h3", "", "Hele forløpet"),
            el("a", "folg-tidslinje-lenke", "Åpne prosjektdagboken →")
        );
        tidslinjeTopp.querySelector("a").href = DAGBOK_URL;
        rot.append(tidslinjeTopp);

        const bane = el("ol", "folg-tidslinje");
        uker.forEach((u) => {
            const li = el("li");
            const lenke = el(u.skrevet ? "a" : "div", "folg-uke");

            if (u.skrevet) lenke.href = DAGBOK_URL + "#uke-" + u.nummer;
            else lenke.classList.add("folg-uke-kommer");
            if (u === siste) lenke.classList.add("folg-uke-siste");

            lenke.append(
                el("span", "folg-uke-nr", "UKE " + u.nummer),
                el("span", "folg-uke-dato", kortDato(u.dato)),
                el("span", "folg-uke-tittel", u.skrevet ? u.tittel : "Kommer")
            );
            if (u === siste) lenke.append(el("span", "folg-uke-merke", "Siste"));

            li.append(lenke);
            bane.append(li);
        });
        rot.append(bane);

        return { rot, bane };
    }

    fetch(DAGBOK_URL)
        .then((svar) => {
            if (!svar.ok) throw new Error(svar.status);
            return svar.text();
        })
        .then((html) => {
            const dok = new DOMParser().parseFromString(html, "text/html");
            const uker = [...dok.querySelectorAll(".uke")].map(lesUke);
            const resultat = bygg(uker);
            if (!resultat) return;

            AKTUELL_BEHOLDER.replaceChildren(resultat.rot);

            // Vis siste uke i tidslinjen
            const sisteKort = resultat.bane.querySelector(".folg-uke-siste");
            if (sisteKort) {
                const midt = sisteKort.offsetLeft - (resultat.bane.clientWidth - sisteKort.offsetWidth) / 2;
                resultat.bane.scrollLeft = Math.max(0, midt);
            }
        })
        .catch(() => {
            // Beholder lenken til dagboken som reserve (f.eks. ved åpning som lokal fil)
        });

})();
