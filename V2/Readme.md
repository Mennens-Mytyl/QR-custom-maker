[Read this in English](README.md) | [Lees dit in het Nederlands](README.NL.md)

# Taxi Info QR System - Mytylschool Roosendaal

This project is a web-based application specially developed for Mytylschool Roosendaal to efficiently and securely manage information for student bus cards. The application consists of two main components:

1.  **A Generator (`generator.html`):** Allows staff to create a bus card with essential data (name, date, emergency contacts, additional info) and export it as a PDF document containing a QR code.
2.  **A Scanner (`scanner.html`):** A mobile-friendly scanner that can read the QR code on the bus card and instantly display the stored information for authorized personnel in case of an emergency.

The application is designed to run entirely **client-side**; no server or database is required, which enhances privacy and security.

## Key Features

-   **100% Client-Side:** The entire application runs in the browser. No data is sent to any server.
-   **Compact & Obfuscated Data:** Information is compressed using `LZ-String` before being embedded in the QR code. This keeps the QR code small and robust, and the data is not directly human-readable without the scanner application.
-   **PDF Export:** Generate a print-ready A4 bus card with a large, clear QR code with a single click.
-   **Progressive Web App (PWA) for Offline Use:** The scanner can be added to the home screen after the first visit. Thanks to the service worker, the scanner will then function completely without an internet connection, making it ideal for use on the go.
-   **Direct Call Feature:** Scanned phone numbers can be clicked to initiate a phone call immediately.
-   **Flexible Input:** Scan a QR code using the live camera or upload an existing image (photo or screenshot) of a bus card.

## Technology Stack

This application is built with standard web technologies and several powerful JavaScript libraries:

-   **HTML5 & CSS3:** For structure and styling.
-   **JavaScript (ES6):** For all application logic.
-   **[QRCode.js](https://github.com/soldair/node-qrcode):** For generating the QR codes.
-   **[jsQR](https://github.com/cozmo/jsQR):** For recognizing and reading QR codes from the camera or an image.
-   **[LZ-String](https://github.com/pieroxy/lz-string):** For compressing data to keep the QR code small and efficient.
-   **[jsPDF](https://github.com/parallax/jsPDF) & [html2canvas](https://html2canvas.hertzen.com/):** For creating PDF files from the HTML structure.

## File Structure

All required files are located in the `/V2/` directory:

```
/V2/
├── generator.html   # The page for creating QR codes and PDFs.
├── scanner.html     # The page for scanning QR codes.
├── logo.png         # The logo displayed on the pages and PDFs.
├── favicon.png      # The icon for the browser tab.
├── manifest.json    # File for PWA functionality (add to home screen).
└── service-worker.js # Enables the offline functionality of the app.
```

## Usage

The application is ready to use out of the box.

1.  **Generator:**
    -   Navigate to the `/V2/` directory in the repository and open the `generator.html` file in your browser.
    -   Fill in the required fields.
    -   Click "Genereer QR-code" (Generate QR code) to see the code on the screen.
    -   Click "Download PDF (A4)" to save the bus card as a PDF file.

2.  **Scanner:**
    -   Navigate to the `/V2/` directory and open the `scanner.html` file in your browser (preferably on a mobile device).
    -   **Tip:** Add the page to your home screen for offline access.
    -   Click "Start scannen" (Start scanning) to activate the camera, or select "Bestand kiezen" (Choose file) to upload an image.
    -   Point the camera at the QR code. The information will automatically appear on the screen.

## Data Privacy and Security

This application was designed with privacy in mind.

-   **No Data Storage:** No data is stored anywhere, except temporarily in the browser's memory during use.
-   **Compression, Not Encryption:** The data within the QR code is **not cryptographically encrypted**. Instead, it is compressed and encoded (Base64) using `LZ-String`. This has two main benefits:
    1.  **Compactness:** More information can fit into a smaller, more reliable QR code.
    2.  **Obfuscation:** The data is not directly human-readable, providing a basic layer of privacy.

However, it is important to understand that someone with technical knowledge and access to the QR code could potentially reconstruct the data. Therefore, the application should be used within a **trusted environment**, and the bus cards should be treated as confidential documents.

## Customization

You can easily customize the application:

-   **Logo:** Replace the `logo.png` file in the `/V2/` directory with your own logo. Use the same filename or update the `<img>` tags in the HTML files.
-   **Titles:** Edit the `<h1>` and `<title>` tags in `generator.html` and `scanner.html` to set your preferred titles.

## Attribution & Disclaimer

This application was developed with the assistance of AI assistants, including **Google Gemini**, to structure logic, optimize code, and write documentation.

The software is provided 'as is', without warranty of any kind, express or implied. Use of this application is entirely at your own risk. It is the user's responsibility to validate the functionality and security approach for their intended application.
