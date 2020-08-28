function renderLastCity() {
    var city = localStorage.getItem("city");
    
    var cityElement = `<li class="list-group-item">${city}</li>`;
  
    $(".cities").prepend(cityElement); 
   
  }


$("#button").on("click", function(event){
    event.preventDefault();
    var citySearch= $("#citySearch").val();
      localStorage.setItem("city", citySearch);
      renderLastCity()

      

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
            //$("#icon1").JSON.parse(response.weather[0].icon);
            var iconCode = response.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            $("#currentDate").prepend("Today: "+"<img src='" + iconUrl  + "'>");
            
        
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
                
                if(response.value >= 8.0){
                    $("#uvIndex").addClass("uvColorHigh");
                }else if(response.value <= 4.0){
                    $("#uvIndex").addClass("uvColorlow")
                }else{
                    $("#uvIndex").addClass("uvColorMed")
                }
                
                //$("#currentDate").html("<h4>Today: "+response.weqther.main +"</h4>")

            });

            var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=3744f2a1eddf8133ab4de7cf5021abda";

            $.ajax({
                url: queryURL3,
                method: "GET"
            }).then(function(response) {
                console.log(response);
                console.log(response.list[3].dt_txt);
                $("#date1").text(response.list[3].dt_txt);
                
                console.log(response.list[3].main.temp);
                $("#temp1").text(response.list[3].main.temp);
                var tempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;
                $("#temp1").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[3].main.humidity);
                $("#humid1").text(response.list[3].main.humidity+"%");

                console.log(response.list[3].weather[0].icon);
                $("#symbol1").html("<img src='https://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png' alt='Icon depicting current weather.'>");


                
                console.log(response.list[11].dt_txt);
                $("#date2").text(response.list[11].dt_txt);
                
                console.log(response.list[11].main.temp);
                $("#temp2").text(response.list[11].main.temp);
                var tempF = (response.list[11].main.temp - 273.15) * 1.80 + 32;
                $("#temp2").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[11].main.humidity);
                $("#humid2").text("Humidity: "+response.list[11].main.humidity+"%");

                console.log(response.list[11].weather[0].icon);
                $("#symbol2").html("<img src='https://openweathermap.org/img/w/" + response.list[11].weather[0].icon + ".png' alt='Icon depicting current weather.'>");


                console.log(response.list[18].dt_txt);
                $("#date3").text(response.list[18].dt_txt);
                
                console.log(response.list[18].main.temp);
                $("#temp3").text(response.list[18].main.temp);
                var tempF = (response.list[18].main.temp - 273.15) * 1.80 + 32;
                $("#temp3").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[18].main.humidity);
                $("#humid3").text("Humidity: "+response.list[18].main.humidity+"%");

                console.log(response.list[18].weather[0].icon);
                $("#symbol3").html("<img src='https://openweathermap.org/img/w/" + response.list[18].weather[0].icon + ".png' alt='Icon depicting current weather.'>");


                console.log(response.list[26].dt_txt);
                $("#date4").text(response.list[26].dt_txt);
                
                console.log(response.list[26].main.temp);
                $("#temp4").text(response.list[26].main.temp);
                var tempF = (response.list[26].main.temp - 273.15) * 1.80 + 32;
                $("#temp4").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[26].main.humidity);
                $("#humid4").text("Humidity: "+response.list[26].main.humidity+"%");

                console.log(response.list[26].weather[0].icon);
                $("#symbol4").html("<img src='https://openweathermap.org/img/w/" + response.list[26].weather[0].icon + ".png' alt='Icon depicting current weather.'>");


                console.log(response.list[34].dt_txt);
                $("#date5").text(response.list[34].dt_txt);
                
                console.log(response.list[34].main.temp);
                $("#temp5").text(response.list[34].main.temp);
                var tempF = (response.list[34].main.temp - 273.15) * 1.80 + 32;
                $("#temp5").text("Temp: (F) " + tempF.toFixed(2));
                
                console.log(response.list[34].main.humidity);
                $("#humid5").text("Humidity: "+response.list[34].main.humidity+"%");

                console.log(response.list[34].weather[0].icon);
                $("#symbol5").html("<img src='https://openweathermap.org/img/w/" + response.list[34].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

                

            });
      });
      

    });   

 