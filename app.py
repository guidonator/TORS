from flask import Flask, render_template, request, session, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Für Session-Management

@app.route('/')
def index():
    # Initialisiere Session-Variablen falls nicht vorhanden
    if 'texts' not in session:
        session['texts'] = []
    if 'count' not in session:
        session['count'] = 0
    if 'last_short_text' not in session:
        session['last_short_text'] = ''
    
    # Zeige alle Texte wenn 5 Eingaben erreicht wurden
    if session['count'] >= 5:
        all_texts = ' '.join([text['long'] for text in session['texts']])
        return render_template('result.html', all_texts=all_texts)
    
    return render_template('index.html', 
                         last_short_text=session['last_short_text'],
                         count=session['count'])

@app.route('/submit', methods=['POST'])
def submit():
    long_text = request.form.get('long_text', '').strip()
    short_text = request.form.get('short_text', '').strip()
    
    # Validierung
    if len(long_text) > 1000:
        long_text = long_text[:1000]
    if len(short_text) > 100:
        short_text = short_text[:100]
    
    if long_text and short_text:
        # Speichere die Texte
        if 'texts' not in session:
            session['texts'] = []
        if 'count' not in session:
            session['count'] = 0
            
        session['texts'].append({
            'long': long_text,
            'short': short_text
        })
        session['count'] += 1
        session['last_short_text'] = short_text
        session.permanent = True
    
    return redirect(url_for('index'))

@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)