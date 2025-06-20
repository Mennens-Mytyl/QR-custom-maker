# Taxi Info QR Code System

This project was developed for Mytylschool Roosendaal to manage and distribute emergency information for students who travel by taxi. The system generates secure, encrypted QR codes containing essential data (name, date, emergency contacts, and additional information) for each student. These QR codes are printed as bus cards and can be scanned by authorized personnel during emergencies.

## Development Background

This application was created with the assistance of Perplexity Labs, which helped design, structure, and implement the solution. The project was tailored specifically to address the needs of special education transport, focusing on security, ease of use, and offline functionality.

## Key Features

- **Offline Operation:** The application works entirely offline. All necessary assets and data are cached, allowing use without an internet connection. This is critical for use in vehicles and during emergencies.
- **Encrypted Data:** All student information is compressed and encrypted before being embedded in the QR code. Only authorized users with the correct encryption key can decrypt and access the sensitive data.
- **GDPR Compliance:** Personal data is handled securely. The encryption key is managed by the school, and data is not stored on any server. The QR codes are only readable by authorized staff with the correct key, ensuring privacy and compliance with data protection regulations.
- **PDF Export:** The system allows for easy printing of bus cards in PDF format, ready for use in taxis.
- **Cross-platform:** Works on desktop and mobile devices, with special handling for mobile browsers to ensure PDFs can be downloaded or opened in a new tab.

## Project Structure

- **index.html:** Overview and navigation to the main application pages.
- **generator.html:** Tool to create and export student bus cards.
- **scanner.html:** Tool to scan and decrypt QR codes (offline, for authorized staff).
- **admin.html:** Admin interface to customize logo, titles, and encryption key.
- **logo.png:** The school logo used in the application.

## Getting Started

1. **Clone the repository.**
2. **Open `index.html` in your browser for an overview.**
3. **Use `generator.html` to create and print bus cards.**
4. **Use `scanner.html` to scan and view student information.**
5. **Use `admin.html` to customize the application (logo, titles, encryption key).**

## Note

This application is not intended for public use and should only be deployed within a trusted environment. The encryption key should be kept secure and only shared with authorized personnel.

