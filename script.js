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
                //$("#currentDate").html("<h4>"+response.date_iso +"</h4>")

            });

            var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=3744f2a1eddf8133ab4de7cf5021abda";

            $.ajax({
                url: queryURL3,
                method: "GET"
            }).then(function(response) {
                console.log(response.list[3].dt_txt);
                $("#date1").text(response.list[3].dt_txt);
                
                console.log(response.list[3].main.temp);
                $("#temp1").text(response.list[3].main.temp);
                var tempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;
                $("#temp1").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[3].main.humidity);
                $("#humid1").text(response.list[3].main.humidity+"%");

                
                console.log(response.list[11].dt_txt);
                $("#date2").text(response.list[11].dt_txt);
                
                console.log(response.list[11].main.temp);
                $("#temp2").text(response.list[11].main.temp);
                var tempF = (response.list[11].main.temp - 273.15) * 1.80 + 32;
                $("#temp2").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[11].main.humidity);
                $("#humid2").text(response.list[11].main.humidity+"%");


                console.log(response.list[18].dt_txt);
                $("#date3").text(response.list[18].dt_txt);
                
                console.log(response.list[18].main.temp);
                $("#temp3").text(response.list[18].main.temp);
                var tempF = (response.list[18].main.temp - 273.15) * 1.80 + 32;
                $("#temp3").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[18].main.humidity);
                $("#humid3").text(response.list[18].main.humidity+"%");


                console.log(response.list[26].dt_txt);
                $("#date4").text(response.list[26].dt_txt);
                
                console.log(response.list[26].main.temp);
                $("#temp4").text(response.list[26].main.temp);
                var tempF = (response.list[26].main.temp - 273.15) * 1.80 + 32;
                $("#temp4").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[26].main.humidity);
                $("#humid4").text(response.list[26].main.humidity+"%");


                console.log(response.list[34].dt_txt);
                $("#date5").text(response.list[34].dt_txt);
                
                console.log(response.list[34].main.temp);
                $("#temp5").text(response.list[34].main.temp);
                var tempF = (response.list[34].main.temp - 273.15) * 1.80 + 32;
                $("#temp5").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[34].main.humidity);
                $("#humid5").text(response.list[34].main.humidity+"%");

                

            });
      });
      
      


    });   

 