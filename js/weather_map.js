"use strict";

$(document).ready(function (coordinates, token) {

    getWeather(59.9139, 10.7522); // Using DarkSky API

    function getWeather(latitude, longitude) {
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude).done(function (data) {
            console.log(data); // Will retrieve DarkSky API object with weather information for coordinates hard-coded into "getWeather" function

            makeDay1(data); // Generates selected weather info for three days
            makeDay2(data);
            makeDay3(data);

            var latitudeName = data.latitude; // Setting DarkSky API latitude as a variable
            var longitudeName = data.longitude; // Setting DarkSky API longitude as a variable

            $("#location_name").append( // Dynamically display location name text as an h2 from coordinates via reversegeocode function
                "<div>" +
                "<p>" + longitudeName + latitudeName + "</p>" +
                "</div>");

            mapboxgl.accessToken = mapboxToken; // Variable linking Mapbox API token

            var map = new mapboxgl.Map({ // Mapbox API map styling and location origin
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [longitudeName, latitudeName], // Mapbox API will generate a map based on the latitude and longitude retrieved from the DarkSky API ajax call
                zoom: 11
            });

            map.addControl( // Mapbox API geocoder to retrieve coordinates from text input in search box
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    marker: {
                        draggable: true,
                        color: 'green'
                    },
                    mapboxgl: mapboxgl
                })
            );

            var marker = new mapboxgl.Marker({ // Mapbox API marker customization
                draggable: true,
                color: "green"
            })
                .setLngLat([longitudeName, latitudeName])
                .addTo(map);

            var coordinates = document.getElementById('coordinates'); // Mapbox API variable for reversegeocode function

            function onDragEnd() { // Mapbox API displays marker coordinates on bottom left of map after drag
                var lngLat = marker.getLngLat();
                coordinates.style.display = 'block';
                coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br>Latitude: ' + lngLat.lat;
            }
            marker.on('dragend', onDragEnd); // At end of marker drag interaction ('dragend'), run the onDragEnd function

            reverseGeocode(onDragEnd(), mapboxToken).then(function (result) { // Open JS console to see physical address text result for entered coordinates.
                console.log(result);
            });

            //update your stuff

        });

    }

    function makeDay1(data) {

        $("#day1").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[0].apparentTemperatureHigh + "&#176" + "/" + data.daily.data[0].apparentTemperatureLow + "&#176" + "</h3>" +
            "<p><img src='img/" + data.daily.data[0].icon + ".svg'" + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + "<em>" + data.daily.data[0].summary + "</em>" + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[0].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[0].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[0].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[0].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }

    function makeDay2(data) {

        $("#day2").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[1].apparentTemperatureHigh + "&#176" + "/" + data.daily.data[1].apparentTemperatureLow + "&#176" + "</h3>" +
            "<p><img src='img/" + data.daily.data[1].icon + ".svg'" + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + "<em>" + data.daily.data[1].summary + "</em>" + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[1].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[1].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[1].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[1].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }

    function makeDay3(data) {

        $("#day3").html(
            "<div class='text-center' style='background-color:whitesmoke'>" +
            "<h3>" + data.daily.data[2].apparentTemperatureHigh + "&#176" + "/" + data.daily.data[2].apparentTemperatureLow + "&#176" + "</h3>" +
            "<p><img src='img/" + data.daily.data[2].icon + ".svg'" + "</p>" +
            "<p>" + "<strong>Summary: </strong>" + "<em>" + data.daily.data[2].summary + "</em>" + "</p>" +
            "<p>" + "<strong>Humidity: </strong>" + data.daily.data[2].humidity + "</p>" +
            "<p>" + "<strong>Wind: </strong>" + data.daily.data[2].windSpeed + "</p>" +
            "<p>" + "<strong>Pressure: </strong>" + data.daily.data[2].pressure + "</p>" +
            "<p>" + "<strong>" + new Date(data.daily.data[2].time * 1000).toDateString() + "</strong>" + "</p>" +
            "</div>");
    }

});
