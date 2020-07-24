
/*var city = "Paris";*/

var city = prompt("Please enter a city", "San Francisco");

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=dc9395065ccb80beb2c407ca184c8826", 
function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main

    $(".icon").attr("src", icon);  
    $(".weather").append(weather);
    $(".temp").append(temp + "\xB0F");
    if (city != null) {
        document.getElementById("demo").innerHTML = "Today in " + city + ". It is: ";
    }

});