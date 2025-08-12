const destinationSelect = document.getElementById("destination");
const prixDisplay = document.getElementById("prix");

const tarifs = {
  "Tambacounda centre": 700,
  "Koumpentoum": 1500,
};

destinationSelect.addEventListener("change", () => {
  const destination = destinationSelect.value;
  const prix = tarifs[destination] || 0;
  prixDisplay.textContent = `Prix : ${prix} FCFA`;
});

// Carte interactive avec Leaflet
const map = L.map('map').setView([13.77, -13.67], 8); // Coordonnées de Tambacounda

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Ajouter des marqueurs
const destinations = {
  "Tambacounda centre": [13.77, -13.67],
  "Koumpentoum": [13.88, -13.05],
  "Goudiry": [13.47, -12.47]
};

for (let ville in destinations) {
  const marker = L.marker(destinations[ville]).addTo(map);
  marker.bindPopup(ville).on("click", () => {
    destinationSelect.value = ville;
    destinationSelect.dispatchEvent(new Event("change"));
  });
}

