// ══════════════════════════════════════════════
//  PORTHOS — script.js
// ══════════════════════════════════════════════

// ── DARK MODE TOGGLE ─────────────────────────
// Nájdeme všetky dark-toggle tlačidlá na všetkých stránkach
const darkBtns = document.querySelectorAll('#dark-toggle');

darkBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Pridáme alebo odoberieme triedu 'dark' na body
        document.body.classList.toggle('dark');

        // Zmeníme text všetkých tlačidiel
        const jeDark = document.body.classList.contains('dark');
        darkBtns.forEach(function(b) {
            b.textContent = jeDark ? '☀️ Svetlý režim' : '🌙 Tmavý režim';
        });
    });
});

// ── POČÍTADLO ZNAKOV ─────────────────────────
// Funguje len na kontakt.html kde je textarea#sprava
const textarea   = document.getElementById('sprava');
const pocitadlo  = document.getElementById('pocitadlo');

if (textarea && pocitadlo) {
    const maxZnakov = parseInt(textarea.getAttribute('maxlength')) || 500;

    textarea.addEventListener('input', function() {
        const zostatok = maxZnakov - textarea.value.length;
        pocitadlo.textContent = 'Zostáva: ' + zostatok + ' znakov';

        // Červená farba keď zostáva menej ako 50 znakov
        pocitadlo.style.color = zostatok < 50 ? '#dc3545' : '';
    });
}

// ── PODMIENENÝ FORMULÁR ───────────────────────
// Rozbalí sekciu "info o psovi" keď používateľ vyberie "Áno"
const radioButtons  = document.querySelectorAll('input[name="ma-psa"]');
const infoOPsovi    = document.getElementById('info-o-psovi');

if (radioButtons.length && infoOPsovi) {
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            infoOPsovi.style.display = this.value === 'ano' ? 'block' : 'none';
        });
    });
}

// ── TOAST PO ODOSLANÍ FORMULÁRA ──────────────
// Zobrazí toast notifikáciu po kliknutí na odoslať
const odoslatBtn    = document.getElementById('odoslat-btn');
const toastEl       = document.getElementById('odoslatToast');

if (odoslatBtn && toastEl) {
    const toast = new bootstrap.Toast(toastEl);

    odoslatBtn.addEventListener('click', function() {
        toast.show();
    });
}

// ── UVÍTACÍ TOAST ─────────────────────────────
// Zobrazí uvítací toast na hlavnej stránke po načítaní
const uvitaciToastEl = document.getElementById('uvitaciToast');

if (uvitaciToastEl) {
    const uvitaciToast = new bootstrap.Toast(uvitaciToastEl, {
        delay: 1500   // zobrazí sa s oneskorením 1.5 sekundy
    });
    uvitaciToast.show();
}
