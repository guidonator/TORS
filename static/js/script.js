document.addEventListener('DOMContentLoaded', function() {
    const longTextArea = document.getElementById('long_text');
    const shortTextInput = document.getElementById('short_text');
    const longCounter = document.getElementById('long_counter');
    const shortCounter = document.getElementById('short_counter');

    // Funktion zum Aktualisieren der Zeichenzähler
    function updateCounter(element, counter, maxLength) {
        const currentLength = element.value.length;
        counter.textContent = currentLength;
        
        // Farbwechsel bei Annäherung an das Limit
        if (currentLength > maxLength * 0.9) {
            counter.style.color = '#e74c3c';
            counter.style.fontWeight = 'bold';
        } else if (currentLength > maxLength * 0.7) {
            counter.style.color = '#f39c12';
            counter.style.fontWeight = 'normal';
        } else {
            counter.style.color = '#27ae60';
            counter.style.fontWeight = 'normal';
        }
    }

    // Event Listener für das lange Textfeld
    if (longTextArea && longCounter) {
        longTextArea.addEventListener('input', function() {
            updateCounter(longTextArea, longCounter, 1000);
        });
        
        // Initiale Zählung
        updateCounter(longTextArea, longCounter, 1000);
    }

    // Event Listener für das kurze Textfeld
    if (shortTextInput && shortCounter) {
        shortTextInput.addEventListener('input', function() {
            updateCounter(shortTextInput, shortCounter, 100);
        });
        
        // Initiale Zählung
        updateCounter(shortTextInput, shortCounter, 100);
    }

    // Formularvalidierung
    const form = document.querySelector('.text-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const longText = longTextArea.value.trim();
            const shortText = shortTextInput.value.trim();
            
            if (!longText) {
                e.preventDefault();
                alert('Bitte geben Sie einen langen Text ein.');
                longTextArea.focus();
                return;
            }
            
            if (!shortText) {
                e.preventDefault();
                alert('Bitte geben Sie einen kurzen Text ein.');
                shortTextInput.focus();
                return;
            }
            
            if (longText.length > 1000) {
                e.preventDefault();
                alert('Der lange Text darf maximal 1000 Zeichen haben.');
                longTextArea.focus();
                return;
            }
            
            if (shortText.length > 100) {
                e.preventDefault();
                alert('Der kurze Text darf maximal 100 Zeichen haben.');
                shortTextInput.focus();
                return;
            }
        });
    }

    // Auto-resize für Textarea
    if (longTextArea) {
        longTextArea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
});