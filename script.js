$("button").on("click", function(){
// API call for returning Current Weather
var city = $("#citySearch").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city+"&appid=3744f2a1eddf8133ab4de7cf5021abda";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
            console.log(response);
            $("#cityName").text(response.name);
            $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#humid").text("Humidity: " + response.main.humidity + "%");
        
            // Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            $("#tempK").text("Temperature (K) " + response.main.temp);
            $("#temp").text("Temperature (F) " + tempF.toFixed(2));
        
            // API call for returning UV Index
            var lat = (response.coord.lat);
            var lon =(response.coord.lon);
       
            var queryURL2 ="https://api.openweathermap.org/data/2.5/uvi?"+"lat="+lat+"&lon="+lon+"&appid=3744f2a1eddf8133ab4de7cf5021abda";

            $.ajax({
                url: queryURL2,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                $("#uvIndex").text("UV Index: "+response.value);
                $("#currentDate").html("<h4>"+response.date_iso +"</h4>")

            });
      });
      
      


    });   

 