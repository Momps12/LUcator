const key = 'w8QTstofKOVCXZdlVo4J';
  const map = L.map('map', {
    zoomControl:true,
    minZoom:16.3,
    maxZoom:22
  }).setView([14.2557, 121.4064], 18);
  document.addEventListener("DOMContentLoaded", function () {

  function zoomIn() {
    map.zoomIn();
}


function zoomOut() {
    map.zoomOut();
}


document.getElementById("zoom-in-button").addEventListener("click", zoomIn);
document.getElementById("zoom-out-button").addEventListener("click", zoomOut);
});

  const mtLayer = L.maptilerLayer({
        apiKey: key,
      }).addTo(map);

      //Marker 1
      var marker = L.marker([14.255105352437454, 121.40515001845127]).addTo(map);
        marker.bindPopup("Oval");
        
      //Marker 2
      var marker = L.marker([14.25662, 121.40532]).addTo(map);

      // Create an empty popup
      var popup = L.popup();
      
      //! MARKER
      var marker = L.marker([14.25662, 121.40532]).addTo(map);
      var popup = L.popup();
      
      // Create an iframe element
      var iframe = document.createElement('iframe');
      iframe.src = 'assets/html/pop.html'; // Set the source of the iframe
      
      // Set iframe attributes to ensure correct display
      iframe.style.width = '100rem';
      iframe.style.height = '400px';
      iframe.frameBorder = 0;
      
      // Append the iframe to the popup content
      popup.setContent(iframe);
      
      // Bind the popup to the marker
      marker.bindPopup(popup);
      
      // Bind the popup to the marker
      marker.bindPopup(popup);
              
        //! Oreta Building (Custom Icon)
        var customIcon = L.icon({
          iconUrl: 'src/663342.png', //? Icon PATH
          iconSize: [20, 20], 
        });
        var marker = L.marker([14.25559,121.40774], { icon: customIcon }).addTo(map);
        var popup = L.popup();
        var iframe = document.createElement('iframe');
        iframe.src = 'assets/html/pop.html'; //*HTML PATH
        iframe.style.width = '100rem';
        iframe.style.height = '400px';
        iframe.frameBorder = 0;
        popup.setContent(iframe);
        marker.bindPopup(popup);

          
                var marker = L.marker([14.255858, 121.401198]).addTo(map);
                var popupContent = document.createElement('div');
                popupContent.innerHTML = ` 
                <h1>Jacko Haws</h1>
        `;
                marker.bindPopup(popupContent);