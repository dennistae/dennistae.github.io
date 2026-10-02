# IS-302 Praksisprosjekt – Smaragd Motorsport

Dette repositoriet inneholder GitHub Pages-nettsiden for dokumentasjon av vår gjennomføring av IS-302 Praksisprosjekt ved Universitetet i Agder (UiA), innen studieretningen IT og Informasjonssystemer. Nettsiden dokumenterer samarbeidet vårt med Smaragd Motorsport og gir et innblikk i gruppen, prosjektet, oppdraget vårt, samt fremgangen vår gjennom prosjektperioden.

🔗 **Nettside:** https://dennistae.github.io

## Gruppen

Vi er fem studenter i **gruppe 27**:

| Navn | Ansvarsområde | GitHub |
| --- | --- | --- |
| Mohamed Liban Osman | Pris, valuta og automatisering | [@Mohamedlosman](https://github.com/Mohamedlosman) |
| Noa Vincent Nordén | Adminsystem, drift og compliance | [@noanor](https://github.com/noanor) |
| Dennis Tea | Frontend og kundeopplevelse | [@dennistae](https://github.com/dennistae) |
| Efe Kaan Eksi | Produktdata og integrasjoner | [@efekaaneksi](https://github.com/efekaaneksi) |
| Marius Khiem Nguyen | Backend, ordre og transaksjoner | [@MariusKhiem](https://github.com/MariusKhiem) |

## Om nettsiden

Nettsiden fungerer som en plattform for dokumentasjon av arbeidet vårt gjennom praksisprosjektet. Den består av følgende sider:

| Side | Fil | Innhold |
| --- | --- | --- |
| Hjem | [`index.html`](index.html) | Forside og oversikt over prosjektet |
| Om oss | [`html/om-oss.html`](html/om-oss.html) | Gruppen og de enkelte gruppemedlemmene |
| Oppgavebeskrivelse | [`html/oppgavebeskrivelse.html`](html/oppgavebeskrivelse.html) | Oppdraget fra Smaragd Motorsport og problemstillingen vi skal løse |
| Statusrapport 1 | [`html/status-1.html`](html/status-1.html) | Status, fremgang og utfordringer ved første statusrapport |
| Statusrapport 2 | [`html/status-2.html`](html/status-2.html) | Status, fremgang og utfordringer ved andre statusrapport |
| Prosjektdagbok | [`html/prosjektdagbok.html`](html/prosjektdagbok.html) | Ukentlig, kronologisk oversikt over arbeidet og erfaringene våre |
| Avsluttende refleksjon | [`html/avsluttende-refleksjon.html`](html/avsluttende-refleksjon.html) | Refleksjon over prosjektet og egen læring |

## Formål

Formålet med nettsiden er å dokumentere prosjektprosessen på en oversiktlig måte og gi et innblikk i hvordan vi som studentgruppe arbeider med å løse oppdraget i samarbeid med Smaragd Motorsport.

## Mappestruktur

```
.
├── index.html     # Hjemmeside
├── html/          # Øvrige sider
├── style/         # CSS (felles stil i stil.css, øvrige filer per side)
├── JS/            # JavaScript (felles komponenter som header og footer)
├── images/        # Bilder, ikoner og gruppebilder
├── media/         # Øvrige mediafiler
└── LICENSE
```

## Teknologi

Nettsiden er bygget med ren **HTML**, **CSS** og **JavaScript**, uten rammeverk, og publiseres med **GitHub Pages**. Header og footer lastes inn som felles komponenter fra [`JS/komponenter.js`](JS/komponenter.js), slik at de er like på alle sider. Siden er laget med mobilvisning og universell utforming i tankene.

## Kjøre lokalt

Klon repositoriet og åpne `index.html` i nettleseren, eller start en enkel lokal server:

```bash
python3 -m http.server 8000
```

Nettsiden er da tilgjengelig på `http://localhost:8000`.

## Lisens

Se [LICENSE](LICENSE).
