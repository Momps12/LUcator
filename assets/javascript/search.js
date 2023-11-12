// Define an array to store markers with their names and coordinates
const markers = [];

// Add markers to the array
markers.push({
  name: "Oval",
  coordinates: [14.255105352437454, 121.40515001845127],
});
markers.push({
  name: "Jacko Haws",
  coordinates: [14.255858, 121.401198],
});
markers.push({
  name: "Oreta",
  coordinates: [14.25559, 121.40774],
});

// Variable to track whether the maximum zoom has been reached during a search
let maxZoomReached = false;

// Function to search for markers based on a query
function searchMarkers(query) {
  // Initialize the selected marker as null
  let selectedMarker = null;

  // Find the marker that matches the query and store it in selectedMarker
  markers.forEach((marker) => {
    if (marker.name.toLowerCase().includes(query.toLowerCase())) {
      // Check if the user is searching for a different marker
      const isDifferentMarker = selectedMarker === null || selectedMarker.name !== marker.name;

      // Zoom to the selected marker only if the map hasn't reached the maximum zoom or if a different marker is being searched
      if (!maxZoomReached || isDifferentMarker) {
        selectedMarker = marker;
        const markerCoordinates = marker.coordinates;

        // Zoom to the selected marker
        map.setView(selectedMarker.coordinates, 18.2);
        maxZoomReached = true; // Set the flag to indicate that the maximum zoom has been reached during this search

        // Simulate a click on the marker to open its popup
        simulateMarkerClick(selectedMarker);
      }
    }
  });

  // If no matching marker is found, display an alert
  if (!selectedMarker) {
    alert("No matching marker found for the search query.");
  }
}

// Function to simulate a click on a marker and open its popup
function simulateMarkerClick(marker) {
  // Iterate through map layers to find the corresponding marker
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker && layer.getLatLng().equals(marker.coordinates)) {
      // Open the popup for the found marker
      layer.openPopup();
    }
  });
}

// Event listener for the search button
document.getElementById('srchbtn').addEventListener('click', function () {
  // Get the search query from the input field
  const searchQuery = document.getElementById('output').value;

  // Check if the search query is not empty
  if (searchQuery.trim() !== "") {
    // Call the searchMarkers function with the entered query
    searchMarkers(searchQuery);
  } else {
    // If the search input is empty, display an alert
    alert("Please enter a search query.");
  }
});
