# Text-Eingabe Web-Anwendung

Eine moderne Web-Anwendung für die schrittweise Texteingabe mit Session-Management.

## Funktionen

- **Zwei Eingabefelder**: Ein langes Textfeld (max. 1000 Zeichen) und ein kurzes Textfeld (max. 100 Zeichen)
- **Live-Zeichenzähler**: Zeigt verbleibende Zeichen mit Farbkodierung an
- **Session-Management**: Speichert Eingaben zwischen Seitenaufrufen
- **Fortschrittsanzeige**: Zeigt den aktuellen Eingabefortschritt (1-5)
- **Zusammenfassung**: Nach 5 Eingaben werden alle langen Texte als ein zusammenhängender Text angezeigt
- **Responsive Design**: Funktioniert auf Desktop und mobilen Geräten

## Installation

1. **Abhängigkeiten installieren:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Anwendung starten:**
   ```bash
   python app.py
   ```

3. **Browser öffnen:**
   ```
   http://localhost:5000
   ```

## Verwendung

1. Geben Sie einen langen Text (max. 1000 Zeichen) und einen kurzen Text (max. 100 Zeichen) ein
2. Klicken Sie auf "Absenden"
3. Der kurze Text wird bei der nächsten Eingabe angezeigt
4. Wiederholen Sie den Vorgang 5 Mal
5. Nach der 5. Eingabe werden alle langen Texte zusammengefasst angezeigt

## Technische Details

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Session-Management**: Flask Sessions
- **Responsive Design**: CSS Media Queries
- **Charakterzählung**: Live JavaScript-Updates

## Projektstruktur

```
/workspace/
├── app.py                 # Haupt-Flask-Anwendung
├── requirements.txt       # Python-Abhängigkeiten
├── templates/
│   ├── index.html        # Eingabeformular
│   └── result.html       # Ergebnisseite
└── static/
    ├── css/
    │   └── style.css     # Styling
    └── js/
        └── script.js     # JavaScript-Funktionalität
```

## Server-Deployment

Für den Produktionseinsatz auf einem Linux-Server:

1. **Mit Gunicorn (empfohlen):**
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

2. **Mit systemd Service:**
   Erstellen Sie eine Service-Datei für automatischen Start

3. **Reverse Proxy:**
   Verwenden Sie Nginx als Reverse Proxy für bessere Performance
