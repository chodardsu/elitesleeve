function promeniTekst() {
    const noviTekst = document.getElementById('tekst').value;
    document.getElementById('naslov').textContent = noviTekst || 'Your Name Here';
  }