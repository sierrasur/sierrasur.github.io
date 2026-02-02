document.addEventListener("DOMContentLoaded", () => {

    const mapContainer = document.getElementById('network-map');
    if (!mapContainer) return; // Evita errores si la sección no está

    // Crear mapa con zoom de rueda desactivado
    const map = L.map('network-map', {
        scrollWheelZoom: false
    }).setView([37.77, -3.79], 10);

    // Capa base oscura
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap & Carto',
        maxZoom: 19
    }).addTo(map);

    // Iconos personalizados
    const nodeIcon = L.divIcon({
        className: '',
        html: '<div style="width:14px;height:14px;background:#00aaff;border-radius:50%;border:2px solid white;"></div>'
    });

    const repeaterIcon = L.divIcon({
        className: '',
        html: '<div style="width:16px;height:16px;background:#00ff88;border-radius:50%;border:2px solid white;"></div>'
    });

    // Nodos de la red
    const nodes = [
        { name: "Red Sierra Sur 01", coords: [37.780162, -3.789874], type: "repeater"}
    ];

    nodes.forEach(n => {
        const icon = n.type === "repeater" ? repeaterIcon : nodeIcon;

        L.marker(n.coords, { icon }).addTo(map)
            .bindPopup(`<b>${n.name}</b><br>${n.type === "repeater" ? "Repetidor" : "Nodo"}`);

        L.circle(n.coords, {
            color: '#00aaff',
            fillColor: '#00aaff',
            fillOpacity: 0.1,
            radius: n.range
        }).addTo(map);
    });

    // Zoom solo con CTRL + rueda
    map.getContainer().addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            map.scrollWheelZoom.enable();
        } else {
            map.scrollWheelZoom.disable();
        }
    });

    // Crear nodo provisional al hacer clic
    map.on('click', e => {
        L.marker(e.latlng, { icon: nodeIcon })
            .addTo(map)
            .bindPopup(`Nodo / Repetidor Provisional<br>${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}<br>Contacta por discord con esos datos para añadirlo definitivamente`)
            .openPopup();
    });

});