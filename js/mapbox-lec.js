"use strict";

/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

mapboxgl.accessToken = mapboxToken; // YOUR MAPBOX TOKEN GOES HERE (e.g. call the established variable from keys.js)

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 9.9,
    center: [-98.4916, 29.4252] // Start in San Antonio on page refresh
});


//-------------MAPBOX COORDINATES ARE (LONGITUDE FIRST, LATITUDE SECOND)---------------------


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)

// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
//     zoom: 4,
//     center: [137.55, 36]
// });

/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map

// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.

// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.48625, 29.42572])
//     .addTo(map);

// TODO TOGETHER: Change the color of the marker

// var markerOptions = {
//     color: "#ff0000", // Hex color red
// };
//
// var marker = new mapboxgl.Marker(markerOptions) // Pass the custom markerOptions (e.g. color change) into your marker variable
//     .setLngLat([-98.48625, 29.42572])
//     .addTo(map);

// TODO: Experiment with the color, and setting the LngLat

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

// var markerOptions = {
//     color: "purple",
//     draggable: true // Draggable option = true (yes)
// };
//
// var marker = new mapboxgl.Marker(markerOptions) // Pass the custom markerOptions (e.g. draggable = true) into your marker variable
//     .setLngLat([-98.48625, 29.42572])
//     .addTo(map);

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup

// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.4896, 29.4268]) // Codeup longitude and latitude
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map);
//
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember the Alamo!</p>")
//     .addTo(map);
//
// marker.setPopup(alamoPopup);

// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.

// TODO: Review the popup docs. What are some additional options we can pass to the popup?

// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
//.setText() does not allow in-line HTML element tags and styling

/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.

// geocode("600 Navarro St, San Antonio, TX, 78205", mapboxToken).then(function(result){ // Assign any name to return value of function (e.g. "result")
//     console.log(result);
// });

// geocode("1600 Pennsylvania Ave, Washington DC", mapboxToken).then(function(result){ // Assign any name to return value of function (e.g. "result")
//     console.log(result); // Console log to see retrieved coordinates in JS developer window for searched string address
//     map.setCenter(result); // Center map on refresh on result coordinates
//     map.setZoom(17) // Default zoom on page refresh
// });

//TODO: Using the geocode method above, add a marker at Codeup to the map

//TODO: Instead of setCenter try using map.jumpTo()

// geocode("1600 Pennsylvania Ave, Washington DC", mapboxToken).then(function(result){ // Assign any name to return value of function (e.g. "result")
//     console.log(result); // Console log to see retrieved coordinates in JS developer window for searched string address
//     map.flyTo({center: result, zoom: 15}) // Will "fly" to searched address on page refresh
// });

//TODO: Instead of setCenter try using map.flyTo()

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo

reverseGeocode({lng:-98.4861, lat:29.4260}, mapboxToken).then(function(result){ // Open JS console to see physical address text result for entered coordinates.
    console.log(result);
});
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method
