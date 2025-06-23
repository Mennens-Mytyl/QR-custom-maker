[Read this in English](README.md) | [Lees dit in het Nederlands](README.NL.md)

# Taxi Info QR Systeem - Mytylschool Roosendaal

Dit project is een web-based applicatie, speciaal ontwikkeld voor Mytylschool Roosendaal, om op een efficiënte en privacybewuste manier informatie voor de buskaarten van leerlingen te beheren. De applicatie bestaat uit twee hoofdonderdelen:

1.  **Een Generator (`generator.html`):** Hiermee kunnen personeelsleden een buskaart aanmaken met essentiële gegevens (naam, datum, contactnummers, extra info) en deze exporteren als een PDF-document met een QR-code.
2.  **Een Scanner (`scanner.html`):** Een mobiel-vriendelijke scanner die de QR-code op de buskaart kan lezen en de opgeslagen informatie direct leesbaar maakt voor geautoriseerd personeel in noodgevallen.

De applicatie is ontworpen om volledig **client-side** te werken; er is geen server of database nodig, wat de privacy en veiligheid ten goede komt.

## Belangrijkste Features

-   **100% Client-Side:** De volledige applicatie draait in de browser. Er wordt geen data naar een server gestuurd.
-   **Compacte & Geobfusceerde Data:** Informatie wordt gecomprimeerd met `LZ-String` voordat het in de QR-code wordt geplaatst. Dit maakt de QR-code klein en robuust, en de data is niet direct leesbaar zonder de scanner-applicatie.
-   **PDF Export:** Genereer met één klik een printklare A4-buskaart met een grote, duidelijke QR-code.
-   **Progressive Web App (PWA) voor Offline Gebruik:** De scanner kan na een eerste bezoek aan het startscherm worden toegevoegd. Dankzij de service worker werkt de scanner daarna ook volledig zonder internetverbinding, ideaal voor onderweg.
-   **Direct Bellen Functie:** De gescande contactnummers zijn direct aanklikbaar om een telefoongesprek te starten.
-   **Flexibele Input:** Scan een QR-code via de live camera of upload een bestaande afbeelding (foto of screenshot) van een buskaart.

## Technologie

Deze applicatie is gebouwd met standaard webtechnologieën en een aantal krachtige JavaScript-bibliotheken:

-   **HTML5 & CSS3:** Voor structuur en styling.
-   **JavaScript (ES6):** Voor alle logica.
-   **[QRCode.js](https://github.com/soldair/node-qrcode):** Voor het genereren van de QR-codes.
-   **[jsQR](https://github.com/cozmo/jsQR):** Voor het herkennen en lezen van QR-codes via de camera of een afbeelding.
-   **[LZ-String](https://github.com/pieroxy/lz-string):** Voor het comprimeren van de data om de QR-code klein en efficiënt te houden.
-   **[jsPDF](https://github.com/parallax/jsPDF) & [html2canvas](https://html2canvas.hertzen.com/):** Voor het creëren van de PDF-bestanden vanuit de HTML-structuur.

## Bestandsstructuur

Alle benodigde bestanden bevinden zich in de `/V2/` map:

```
/V2/
├── generator.html   # De pagina om QR-codes en PDF's te maken.
├── scanner.html     # De pagina om QR-codes te scannen.
├── logo.png         # Het logo dat op de pagina's en PDF's wordt getoond.
├── favicon.png      # Het icoon voor in de browser-tab.
├── manifest.json    # Bestand voor de PWA-functionaliteit (voeg toe aan startscherm).
└── service-worker.js # Zorgt voor de offline werking van de app.
```

## Gebruik

De applicatie is direct klaar voor gebruik.

1.  **Generator:**
    -   Navigeer in de repository naar de `V2` map en open het bestand `generator.html` in je browser.
    -   Vul de vereiste velden in.
    -   Klik op "Genereer QR-code" om de code op het scherm te zien.
    -   Klik op "Download PDF (A4)" om de buskaart als PDF-bestand op te slaan.

2.  **Scanner:**
    -   Navigeer naar de `V2` map en open het bestand `scanner.html` in je browser (bij voorkeur op een mobiel apparaat).
    -   **Tip:** Voeg de pagina toe aan je startscherm voor offline toegang.
    -   Klik op "Start scannen" om de camera te activeren, of kies "Bestand kiezen" om een afbeelding te uploaden.
    -   Richt de camera op de QR-code. De informatie verschijnt automatisch op het scherm.

## Data Privacy en Veiligheid

De applicatie is ontworpen met privacy in gedachten.

-   **Geen dataopslag:** Er wordt nergens data opgeslagen, behalve tijdelijk in het geheugen van de browser tijdens gebruik.
-   **Compressie, geen encryptie:** De data in de QR-code is **niet cryptografisch versleuteld**, maar wordt gecomprimeerd en gecodeerd (Base64) via `LZ-String`. Dit heeft twee voordelen:
    1.  **Compactheid:** Meer informatie past in een kleinere, betrouwbaardere QR-code.
    2.  **Obfuscatie:** De data is niet direct leesbaar voor het menselijk oog, wat een basislaag van privacy biedt.

Het is echter belangrijk te begrijpen dat iemand met technische kennis en toegang tot de QR-code de data zou kunnen reconstrueren. Daarom dient de applicatie binnen een **vertrouwde omgeving** gebruikt te worden en de buskaarten als vertrouwelijke documenten behandeld te worden.

## Aanpassingen

Je kunt de applicatie eenvoudig aanpassen:

-   **Logo:** Vervang het `logo.png` bestand in de `/V2/` map met je eigen logo. Zorg voor dezelfde bestandsnaam of pas de `<img>` tags in de HTML-bestanden aan.
-   **Titels:** Bewerk de `<h1>` tags en de `<title>` tag in `generator.html` en `scanner.html` om de titels naar wens aan te passen.

## Attributie & Disclaimer

Deze applicatie is ontwikkeld met de hulp van AI-assistenten, waaronder **Google Gemini**, om de logica te structureren, code te optimaliseren en documentatie te schrijven.

De software wordt geleverd 'as is', zonder enige vorm van garantie. Gebruik van deze applicatie is volledig op eigen risico. Het is de verantwoordelijkheid van de gebruiker om de functionaliteit en de veiligheidsaanpak te valideren voor de beoogde toepassing.
