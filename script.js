
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

localStorage.setItem("Test","YOU")
localStorage.getItem("Test")
console.log(localStorage.getItem("Test"))

// Test Logs
console.log('Hello');
        var test = document.getElementById("searchBtn");
        var cityName = $('#searchInput');
        test.onclick = function(event){
        event.preventDefault();
        console.log(cityName.val());
    }
    


// WHEN I search for a city
// THEN city is added to the search history

$(document).ready(function(){
    // WHEN I search for a city - When seach button is clicked
    var search = document.getElementById("searchBtn");
    
    search.onclick = function run (event) {
        event.preventDefault();
        var cityName = $('#searchInput');
        var cityNameVal = cityName.val();
        $('#searchInput').val('')
        
     
        
        
// WHEN I search for a city
// THEN city is added to the search history

function addHistory() {

      var a = $("<button id ='hBtn'>");
      // Adding a class
      a.addClass("cityHistoryBtn");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", cityNameVal);
      a.text(cityNameVal)
      // Adding the button to the HTML
      $("#cityHistory").append(a);
  }
addHistory()

    // THEN I am presented with current conditions for that city 
    // WHEN I view current weather conditions for that city - THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q="+cityNameVal+"&appid=98c56192279fb149992ad45de30b624d",
            method: "GET"
        }).then(function (response) {
            var icon = response.weather[0].icon
            var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            console.log(icon)
            console.log(response)
            console.log(response.coord.lon)
            var lon = response.coord.lon
            var lat = response.coord.lat
            
            // Deleting the #currentcity prior to adding new city weather data
                $("#currentCity").empty();
            // Appending City the #currentcity prior to adding new city weather data        
                $('#currentCity').append("<h2 id = 'city'>"+ response.name + "</h2>")
                $('#currentCity').append("<img id = 'icon' src=" +iconurl+"></img>")
                $('#currentCity').append("<p id = 'temp'> Temperature: "+ Math.floor((response.main.temp - 273.15) *1.8 +32) + "</p>")
                $('#currentCity').append("<p id = 'hum'> Humidity: " + response.main.humidity + "</p>")
                $('#currentCity').append("<p id = 'wind'> Wind Speed: " + response.wind.speed + "</p>")
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=98c56192279fb149992ad45de30b624d",
                    method: "GET"
                }).then(function (uvIndex){
                    console.log(uvIndex.value)
                    // WHEN I view the UV index - THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
                    if(uvIndex.value<=2){    
                    $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:green'>"+uvIndex.value+"</span></p>")
                    }else if(uvIndex.value > 2 && uvIndex.value<=5){    
                        $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:yellow'>"+uvIndex.value+"</span></p>")
                    }else if(uvIndex.value > 5 && uvIndex.value<=7){    
                        $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:orange'>"+uvIndex.value+"</span></p>")
                    }else if(uvIndex.value > 7 && uvIndex.value<=10){    
                        $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:red'>"+uvIndex.value+"</span></p>")
                    }else if(uvIndex.value > 10){    
                        $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:purple'>"+uvIndex.value+"</span></p>")
                    }
                    });


        });

        // THEN I am presented with future conditions for that city and that 
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q="+cityNameVal+"&appid="+ "98c56192279fb149992ad45de30b624d",
            method: "GET"
        }).then(function (forcast) {
            console.log(forcast)

            // Day 1
            console.log(forcast.list[0].dt_txt)
            var icon1 = forcast.list[0].weather[0].icon
            var iconurl1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
                           
            var date = new Date (forcast.list[0].dt_txt)
            // var forecastEls = document.querySelectorAll("#forecast");
            var day = date.getDate();
            var month = date.getMonth() + 1; //months are zero based
            var year = date.getFullYear();
            var forcastDates = (month+"/"+ day+"/"+ year)
            console.log(forcast.list[0].main.temp)
            $("#fiveDayForcastOne").empty(); 
            $('#fiveDayForcastOne').append("<div id = 'forcast' class = 'blocks'>"+ forcastDates + "</div>")
            $('#fiveDayForcastOne').append("<img id = 'icon' src=" +iconurl1+"></img>")
            $('#fiveDayForcastOne').append("<div id = 'forcast' class = 'blocks'>Temp: "+ Math.floor((forcast.list[0].main.temp - 273.15) *1.8 +32) + "</div>")
            $('#fiveDayForcastOne').append("<div id = 'forcast' class = 'blocks'>Humidity: "+ forcast.list[0].main.humidity+ "</div>")

            // Day 2
            console.log(forcast.list[7].dt_txt) 
            var icon2 = forcast.list[7].weather[0].icon
            var iconurl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";               
            var date = new Date (forcast.list[7].dt_txt)
            // var forecastEls = document.querySelectorAll("#forecast");
            var day = date.getDate();
            var month = date.getMonth() + 1; //months are zero based
            var year = date.getFullYear();
            var forcastDates = (month+"/"+ day+"/"+ year)
            console.log(forcast.list[7].main.temp)
            $("#fiveDayForcastTwo").empty(); 
            $('#fiveDayForcastTwo').append("<div id = 'forcast' class = 'blocks'>"+ forcastDates + "</div>")
            $('#fiveDayForcastTwo').append("<img id = 'icon' src=" +iconurl2+"></img>")
            $('#fiveDayForcastTwo').append("<div id = 'forcast' class = 'blocks'>Temp: "+ Math.floor((forcast.list[7].main.temp - 273.15) *1.8 +32) + "</div>")
            $('#fiveDayForcastTwo').append("<div id = 'forcast' class = 'blocks'>Humidity: "+ forcast.list[7].main.humidity+ "</div>")
    
            // Day 3
            console.log(forcast.list[15].dt_txt)
            var icon3 = forcast.list[15].weather[0].icon
            var iconurl3 = "http://openweathermap.org/img/w/" + icon3 + ".png";                   
            var date = new Date (forcast.list[15].dt_txt)
            // var forecastEls = document.querySelectorAll("#forecast");
            var day = date.getDate();
            var month = date.getMonth() + 1; //months are zero based
            var year = date.getFullYear();
            var forcastDates = (month+"/"+ day+"/"+ year)
            console.log(forcast.list[15].main.temp)
            $("#fiveDayForcastThree").empty(); 
            $('#fiveDayForcastThree').append("<div id = 'forcast' class = 'blocks'>"+ forcastDates + "</div>")
            $('#fiveDayForcastThree').append("<img id = 'icon' src=" +iconurl3+"></img>")
            $('#fiveDayForcastThree').append("<div id = 'forcast' class = 'blocks'>Temp: "+ Math.floor((forcast.list[15].main.temp - 273.15) *1.8 +32) + "</div>")
            $('#fiveDayForcastThree').append("<div id = 'forcast' class = 'blocks'>Humidity: "+ forcast.list[15].main.humidity+ "</div>")

            // Day 4
            console.log(forcast.list[23].dt_txt)
            var icon4 = forcast.list[23].weather[0].icon
            var iconurl4 = "http://openweathermap.org/img/w/" + icon4 + ".png";                   
            var date = new Date (forcast.list[23].dt_txt)
            // var forecastEls = document.querySelectorAll("#forecast");
            var day = date.getDate();
            var month = date.getMonth() + 1; //months are zero based
            var year = date.getFullYear();
            var forcastDates = (month+"/"+ day+"/"+ year)
            console.log(forcast.list[23].main.temp)
            $("#fiveDayForcastFour").empty(); 
            $('#fiveDayForcastFour').append("<div id = 'forcast' class = 'blocks'>"+ forcastDates + "</div>")
            $('#fiveDayForcastFour').append("<img id = 'icon' src=" +iconurl4+"></img>")
            $('#fiveDayForcastFour').append("<div id = 'forcast' class = 'blocks'>Temp: "+ Math.floor((forcast.list[23].main.temp - 273.15) *1.8 +32) + "</div>")
            $('#fiveDayForcastFour').append("<div id = 'forcast' class = 'blocks'>Humidity: "+ forcast.list[23].main.humidity+ "</div>")

            // Day 5
            console.log(forcast.list[31].dt_txt)
            var icon5 = forcast.list[31].weather[0].icon
            var iconurl5 = "http://openweathermap.org/img/w/" + icon5 + ".png";                   
            var date = new Date (forcast.list[31].dt_txt)
            // var forecastEls = document.querySelectorAll("#forecast");
            var day = date.getDate();
            var month = date.getMonth() + 1; //months are zero based
            var year = date.getFullYear();
            var forcastDates = (month+"/"+ day+"/"+ year)
            console.log(forcast.list[31].main.temp)
            $("#fiveDayForcastFive").empty(); 
            $('#fiveDayForcastFive').append("<div id = 'forcast' class = 'blocks'>"+ forcastDates + "</div>")
            $('#fiveDayForcastFive').append("<img id = 'icon' src=" +iconurl5+"></img>")
            $('#fiveDayForcastFive').append("<div id = 'forcast' class = 'blocks'> Temp: "+ Math.floor((forcast.list[31].main.temp - 273.15) *1.8 +32) + "</div>")
            $('#fiveDayForcastFive').append("<div id = 'forcast' class = 'blocks'> Humidity: "+ forcast.list[31].main.humidity+ "</div>")
            
      
        });
}



})
    
       





