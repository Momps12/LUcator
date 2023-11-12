    var map = L.map('map', {
        center: [14.25572,121.40698],
        zoom: 16.5,
        maxZoom: 18,
        minZoom: 15.5,
        doubleClickZoom: false,
    });

    // OpenStreetMap-based layer
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);  // Add the OpenStreetMap layer to the map as the default layer

    // Esri.WorldImagery layer
    var esriLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
    });

    // Create a base layers object for the control
    var baseLayers = {
        "OpenStreetMap": osmLayer,
        "Esri World Imagery": esriLayer,
    };

    L.control.locate({
        icon: 'fa fa-location-arrow', // Font Awesome icon for location arrow
    }).addTo(map);
    
    // Add the control.layers to the map and position it under the location button
    L.control.layers(baseLayers, null, { position: 'bottomright' }).addTo(map);

    // Marker 1
    var marker1 = L.marker([14.255105352437454, 121.40515001845127]).addTo(map);
    marker1.bindPopup("Oval");

    // Marker 2
    var marker2 = L.marker([14.25662, 121.40532]).addTo(map);
    marker2.bindPopup("Marker 2");

    // Marker with iframe popup
    var markerWithPopup = L.marker([14.25662, 121.40532]).addTo(map);
    var popupWithIframe = L.popup();
    var iframe = document.createElement('iframe');
    iframe.src = "markerplaceholder.html";
    iframe.style.width = 'auto';
    iframe.style.height = '50vh';
    iframe.frameBorder = 0;
    popupWithIframe.setContent(iframe);
    markerWithPopup.bindPopup(popupWithIframe);

    //!Custom Marker + Iframe!\\

    // Oreta Building with custom icon and iframe popup
    var customIcon = L.icon({
        iconUrl: 'src/663342.png',
        iconSize: [24, 25],
    });
    var markerOreta = L.marker([14.25559, 121.40774], { icon: customIcon }).addTo(map);
    var popupOreta = L.popup();
    var iframeOreta = document.createElement('iframe');
    iframeOreta.src = 'markerplaceholder.html';
    iframeOreta.style.width = 'auto';
    iframeOreta.style.height = '40vh';
    iframeOreta.frameBorder = 0;
    popupOreta.setContent(iframeOreta);
    markerOreta.bindPopup(popupOreta);

    // Marker with popup content
    var marker3 = L.marker([14.255858, 121.401198]).addTo(map);
    var popupContent = document.createElement('div');
    popupContent.innerHTML = `<h1>Jacko Haws</h1>`;
    marker3.bindPopup(popupContent);

    var defaultIcon = new L.Icon({
         iconUrl: '',
        iconSize: [20, 50],
    });

    var defaultMarker = L.marker([14.2562, 121.402], { icon: defaultIcon }).addTo(map)
        .bindPopup("Default Marker Popup");
