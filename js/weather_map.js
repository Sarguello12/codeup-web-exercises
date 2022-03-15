"use strict";




let submittedLat = 29.423017;
let submittedLong = -98.48527;





// creates weather cards and displays them to the dom
    function createWeatherTables(data) {
        let html = '';

        for (let i = 0; i < 5; i++) {
            let date = new Date(data.daily[i].dt * 1000).toDateString();

            html += `<div class="weather-cards">
                            <h5>${date}</h5>
                            <i>${data.daily[i].weather.icon}</i>
                            <p>Feels like: ${data.daily[i].feels_like.day}</p>
                            <p>High: ${data.daily[i].temp.max}</p>
                            <p>Low: ${data.daily[i].temp.min}</p>
                    </div>`
        }
        return html;
    }


// gets api data and feeds it to display function
    $.get("https://api.openweathermap.org/data/2.5/onecall?", {
        APPID: OPEN_WEATHER_API_TOKEN,
        lat:    submittedLat,
        lon:   submittedLong,
        units: "imperial"

    }).done(function(data) {
        $("#forecast").html(createWeatherTables(data));
    });



// ========== map functionality ==========

mapboxgl.accessToken = MAPBOX_API_TOKEN;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.491142, 29.424349], // starting position [lng, lat]
    zoom: 10 // starting zoom
});


$("button").click(function(){
    geocode("Zion national park", MAPBOX_API_TOKEN).then(function(result) {
        map.setCenter(result);
        map.setZoom(10);
    });
})