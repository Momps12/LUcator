const key = 'w8QTstofKOVCXZdlVo4J';
      const map = L.map('map', {
        zoomControl:false,
        minZoom:16.3,
        maxZoom:22
      }).setView([14.2557, 121.4064], 17);
      const mtLayer = L.maptilerLayer({
        apiKey: key,
      }).addTo(map);

      //Marker 1
      var marker = L.marker([14.255105352437454, 121.40515001845127]).addTo(map);
        marker.bindPopup("Oval");
        
      //Marker 2
        var marker = L.marker([14.25662, 121.40532]).addTo(map);
        var popupContent = document.createElement('div');
        popupContent.innerHTML =
`<html>
<style>
    h2 {
      text-align: center;
      font-family: "Stencil Regular";
      font-weight: bolder;
      font-size: 30px;
    }

    p {
      text-align: center;
      font-family: "Verdana", sans-serif;
    }

    .mark {
      justify-content: center;
      align-items: center;
      background-color: beige;
      border: 2px solid black;
    }

    img {
      margin: 0 auto;
      display: block;
    }

    button {
      color: white;
      width: 100px;
      height: 25px;
      background-color: cornflowerblue;
      border: 1px solid white;
      border-radius: 10px;
      font-family: "Comic Sans MS", sans-serif;
      margin: 0 auto;
      display: block;
      cursor: pointer;
    }

    button:hover {
      background-color: blue;
    }

    </style>
<body>
      <div class="mark">
        <img src="src/kap.png" alt="Lalagyan pa" height:100 width=100>
        <h2>LU02</h2>
        <p></p>
        <p></p>
        <button>View 3D</button>
      </div> 
</body>
</html>`;

        marker.bindPopup(popupContent);
              
        // Marker 3
        var customIcon = L.icon({
        iconUrl: 'src/663342.png', 
        iconSize: [50, 50], 
        });
       
       var marker = L.marker([14.256, 121.40512], { icon: customIcon }).addTo(map);  
              //Popup Content         
              var marker = L.marker([14.256, 121.40512], {
              icon: customIcon,
              opacity: 0,
              }).addTo(map); 
          
              var marker = L.marker([14.256, 121.40512],{icon:customIcon}).addTo(map);
              var popupContent = document.createElement('div');
              popupContent.innerHTML = `
                <h1>Marker TO</h1>
                <p>hehe<p>
                `;

                marker.bindPopup(popupContent);

                var marker = L.marker([14.255858, 121.401198]).addTo(map);
                var popupContent = document.createElement('div');
                popupContent.innerHTML = ` 
                <h1>Jacko Haws</h1>
        `;
                marker.bindPopup(popupContent);