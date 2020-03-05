"use strict";

var weatherIcons = [
    {
        condition: "clear-day",
        imgUrl: 'img/clear-day.svg'
    },
    {
        condition: "clear-night",
        imgUrl: 'img/clear-night.svg'
    },
    {
        condition: "rain",
        imgUrl: 'img/rain.svg'
    },
    {
        condition: "snow",
        imgUrl: 'img/snow.svg'
    },
    {
        condition: "sleet",
        imgUrl: 'img/sleet.svg'
    },
    {
        condition: "wind",
        imgUrl: 'img/wind.svg'
    },
    {
        condition: "fog",
        imgUrl: 'img/fog.svg'
    },
    {
        condition: "cloudy",
        imgUrl: 'img/cloudy.svg'
    },
    {
        condition: "partly-cloudy-day",
        imgUrl: 'img/partly-cloudy-day.svg'
    },
    {
        condition: "partly-cloudy-night",
        imgUrl: 'img/partly-cloudy-night.svg'
    }
];

$(document).ready(function() {

    getWeather(60.1282, 18.6435);

    function getWeather(latitude, longitude) {
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude).done(function (data) {
            console.log(data);

            makeDay1(data);
            makeDay2(data);
            makeDay3(data);

            var latitudeName = data.latitude;
            var longitudeName = data.longitude;

            $("#location_name").append(
                "<div>" +
                "<h3>" + latitudeName + " " + longitudeName + "</h3>" +
                "</div>");

            mapboxgl.accessToken = mapboxToken;

            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [longitudeName, latitudeName],
                zoom: 11
            });

            //marker
            //dragger
            //update your stuff




        });


    }

    // var grabObject = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/60.1282,18.6435").done(function (data) {
    //     console.log(data);
    //
    //     var latitude = data.latitude;
    //     var longitude = data.longitude;
    //
    //     var locationName = $.ajax(grabObject).done(function (data) {
    //         $("#location_name").append(
    //             "<div>" +
    //             "<h3>" + latitude + " " + longitude + "</h3>" +
    //             "</div>");
    //     });
    //
    //     mapboxgl.accessToken = mapboxToken;
    //
    //     var map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v9',
    //         center: [longitude, latitude],
    //         zoom: 11
    //     });
    // });

    function makeDay1(data) {

        $("#day1").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[0].temperatureHigh + "&#176" + "/" + data.daily.data[0].temperatureLow + "&#176" + "</h3>" +
            "<p>" + data.daily.data[0].icon + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + data.daily.data[0].summary + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[0].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[0].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[0].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[0].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }


    function makeDay2(data) {

        $("#day2").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[1].temperatureHigh + "&#176" + "/" + data.daily.data[1].temperatureLow + "&#176" + "</h3>" +
            "<p>" + data.daily.data[1].icon + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + data.daily.data[1].summary + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[1].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[1].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[1].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[1].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }

    function makeDay3(data) {

        $("#day3").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[2].temperatureHigh + "&#176" + "/" + data.daily.data[2].temperatureLow + "&#176" + "</h3>" +
            "<p>" + data.daily.data[2].icon + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + data.daily.data[2].summary + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[2].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[2].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[2].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[2].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }

});

                // var forecastDay1 = $.ajax(grabObject).done(function (data) {
                // $("#day1").html(
                //     "<div class='text-center' style='background-color:whitesmoke'>" +
                //     "<h3>" + data.daily.data[0].temperatureHigh + "&#176" + "/" + data.daily.data[0].temperatureLow + "&#176" + "</h3>" +
                //     "<p>" + data.daily.data[0].icon + "</p>" +
                //     "<p>" + "<strong>Summary: </strong>" + data.daily.data[0].summary + "</p>" +
                //     "<p>" + "<strong>Humidity: </strong>" + data.daily.data[0].humidity + "</p>" +
                //     "<p>" + "<strong>Wind: </strong>" + data.daily.data[0].windSpeed + "</p>" +
                //     "<p>" + "<strong>Pressure: </strong>" + data.daily.data[0].pressure + "</p>" +
                //     "<p>" + "<strong>" + new Date(data.daily.data[0].time * 1000).toDateString() + "</strong>" + "</p>" +
                //     "</div>");

                // var forecastDay2 = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/60.1282,18.6435").done(function (data) {
                //     $("#day2").html(
                //         "<div class='text-center' style='background-color:whitesmoke'>" +
                //         "<h3>" + data.daily.data[1].temperatureHigh + "&#176" + "/" + data.daily.data[1].temperatureLow + "&#176" + "</h3>" +
                //         "<p>" + data.daily.data[1].icon + "</p>" +
                //         "<p>" + "<strong>Summary: </strong>" + data.daily.data[1].summary + "</p>" +
                //         "<p>" + "<strong>Humidity: </strong>" + data.daily.data[1].humidity + "</p>" +
                //         "<p>" + "<strong>Wind: </strong>" + data.daily.data[1].windSpeed + "</p>" +
                //         "<p>" + "<strong>Pressure: </strong>" + data.daily.data[1].pressure + "</p>" +
                //         "<p>" + "<strong>" + new Date(data.daily.data[1].time * 1000).toDateString() + "</strong>" + "</p>" +
                //         "</div>");
                //
                // })
                //     var forecastDay3 = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/60.1282,18.6435").done(function (data) {
                //         $("#day3").html(
                //             "<div class='text-center' style='background-color:whitesmoke'>" +
                //             "<h3>" + data.daily.data[2].temperatureHigh + "&#176" + "/" + data.daily.data[2].temperatureLow + "&#176" + "</h3>" +
                //             "<p>" + data.daily.data[2].icon + "</p>" +
                //             "<p>" + "<strong>Summary: </strong>" + data.daily.data[2].summary + "</p>" +
                //             "<p>" + "<strong>Humidity: </strong>" + data.daily.data[2].humidity + "</p>" +
                //             "<p>" + "<strong>Wind: </strong>" + data.daily.data[2].windSpeed + "</p>" +
                //             "<p>" + "<strong>Pressure: </strong>" + data.daily.data[2].pressure + "</p>" +
                //             "<p>" + "<strong>" + new Date(data.daily.data[2].time * 1000).toDateString() + "</strong>" + "</p>" +
                //             "</div>");
                //     });
                // })
    //         });
    //     });
    // });

//----------------------------------RESTAURANT OBJECTS-------------------------------------------------

// var restaurants = [
//     {
//         name: "Sushishima Japanese Restaurant",
//         address: "1205 N Loop 1604 W #230, San Antonio, TX 78258",
//         location: [-98.508956, 29.609094],
//         description: "Signature sushi rolls, bento boxes & more, plus a full bar, in modern quarters."
//     },
//     {
//         name: "Saltgrass Steak House",
//         address: "11812 Bandera Rd, Helotes, TX 78023",
//         location: [-98.66755, 29.55411],
//         description: "Each steak is cooked to perfection with Saltgrass-7 Steak Spice, and topped with garlic butter. All breads, dressings, soups and desserts are made from scratch daily."
//     },
//     {
//         name: "Uwe's Bakery & Deli",
//         address: "1024 W San Antonio St, Unit B, New Braunfels, TX 78130",
//         location: [-98.132879, 29.694724],
//         description: "German and American Style Bakery; American Style Deli."
//     }
// ];

//----------------------------------GEO-CODER W/ FOR EACH LOOP-------------------------------------------------

// var markerOptions = {
//     color: "purple",
//     draggable: true
// };
//
// restaurants.forEach(function(restaurant){ // Create a "For Each" loop that iterates through your array of objects (e.g. restaurants)
//     geocode(restaurant.address, mapboxToken).then(function(result){ // Use the geocode function to search by string text, BUT DOES NOT NEED TO REFERENCE OBJECT ARRAY NAME (e.g. SINGULAR, or NAMED ANYTHING ELSE ... "x.address")
//
//         var popup = new mapboxgl.Popup()// Create a new popup window for each address iterated through, using the object's description (e.g. "x.description")
//             .setHTML(restaurant.name);
//
//         var marker = new mapboxgl.Marker(markerOptions)// Create a market, with custom options (e.g. markerOptions), that appears for each address iterated through
//             .setLngLat(result)
//             .setPopup(popup)
//             .addTo(map);
//
//         map.flyTo({
//             center: [-98.508956, 29.609094],
//             zoom: 10.2,
//             speed: 0.2,
//             curve: 1
//         })
//     });
// });

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]

// mapboxgl.accessToken = mapboxToken; // YOUR MAPBOX TOKEN GOES HERE (e.g. call the established variable from keys.js)
//
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 9.9,
//     center: [-98.4916, 29.4252] // Start in San Antonio on page refresh
// });


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

// reverseGeocode({lng:-98.4861, lat:29.4260}, mapboxToken).then(function(result){ // Open JS console to see physical address text result for entered coordinates.
//     console.log(result);
// });
