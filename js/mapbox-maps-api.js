"use strict";

//----------------------------------MAP OVERVIEW-------------------------------------------------

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-98.4896, 29.4268], // On map refresh, begin at Codeup
    zoom: 10
});

//----------------------------------RESTAURANT OBJECTS-------------------------------------------------

var restaurants = [
    {
        name: "Sushishima Japanese Restaurant",
        address: "1205 N Loop 1604 W #230, San Antonio, TX 78258",
        location: [-98.508956, 29.609094],
        description: "Signature sushi rolls, bento boxes & more, plus a full bar, in modern quarters."
    },
    {
        name: "Saltgrass Steak House",
        address: "11812 Bandera Rd, Helotes, TX 78023",
        location: [-98.66755, 29.55411],
        description: "Each steak is cooked to perfection with Saltgrass-7 Steak Spice, and topped with garlic butter. All breads, dressings, soups and desserts are made from scratch daily."
    },
    {
        name: "Uwe's Bakery & Deli",
        address: "1024 W San Antonio St, Unit B, New Braunfels, TX 78130",
        location: [-98.132879, 29.694724],
        description: "German and American Style Bakery; American Style Deli."
    }
];

//----------------------------------GEO-CODER W/ FOR EACH LOOP-------------------------------------------------

var markerOptions = {
    color: "purple",
    draggable: true
};

restaurants.forEach(function(restaurant){ // Create a "For Each" loop that iterates through your array of objects (e.g. restaurants)
    geocode(restaurant.address, mapboxToken).then(function(result){ // Use the geocode function to search by string text, BUT DOES NOT NEED TO REFERENCE OBJECT ARRAY NAME (e.g. SINGULAR, or NAMED ANYTHING ELSE ... "x.address")

        var popup = new mapboxgl.Popup()// Create a new popup window for each address iterated through, using the object's description (e.g. "x.description")
            .setHTML(restaurant.name);

        var marker = new mapboxgl.Marker(markerOptions)// Create a market, with custom options (e.g. markerOptions), that appears for each address iterated through
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);

        map.flyTo({
            center: [-98.508956, 29.609094],
            zoom: 10.2,
            speed: 0.2,
            curve: 1
        })
    });
});
