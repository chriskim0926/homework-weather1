var cityHistory1 = []
 
function seachHistory(){
   var cityHistory = $(this).attr("data-name");
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityHistory+"&appid=98c56192279fb149992ad45de30b624d";
   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function(history){
       console.log(history)
       var iconh = history.weather[0].icon
       var iconurlh = "http://openweathermap.org/img/w/" + iconh + ".png";
       var lonh = history.coord.lon
       var lath = history.coord.lat
       $("#currentCity").empty();
       $('#currentCity').append("<h2 id = 'city'>"+ history.name + "</h2>")
       $('#currentCity').append("<img id = 'icon' src=" +iconurlh+"></img>")
       $('#currentCity').append("<p id = 'temp'> Temperature: "+ Math.floor((history.main.temp - 273.15) *1.8 +32) + "</p>")
       $('#currentCity').append("<p id = 'hum'> Humidity: " + history.main.humidity + "</p>")
       $('#currentCity').append("<p id = 'wind'> Wind Speed: " + history.wind.speed + "</p>")
       $.ajax({
           url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lath + "&lon=" + lonh + "&appid=98c56192279fb149992ad45de30b624d",
           method: "GET"
       }).then(function (uvIndexh){
           console.log(uvIndexh.value)
           // WHEN I view the UV index - THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
           if(uvIndexh.value<=2){    
           $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:green'>"+uvIndexh.value+"</span></p>")
           }else if(uvIndexh.value > 2 && uvIndexh.value<=5){    
               $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:yellow'>"+uvIndexh.value+"</span></p>")
           }else if(uvIndexh.value > 5 && uvIndexh.value<=7){    
               $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:orange'>"+uvIndexh.value+"</span></p>")
           }else if(uvIndexh.value > 7 && uvIndexh.value<=10){    
               $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:red'>"+uvIndexh.value+"</span></p>")
           }else if(uvIndexh.value > 10){    
               $('#currentCity').append("<p id = 'wind'> UV Index: <span id = 'uvi' style='background:purple'>"+uvIndexh.value+"</span></p>")
           }
           });


           $.ajax({
               url: "https://api.openweathermap.org/data/2.5/forecast?q="+cityHistory+"&appid="+ "98c56192279fb149992ad45de30b624d",
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
   })
}



$("#searchBtn").on("click", function(event) {
   var cityHistory = $("#hBtn").val();
   cityHistory1.push(cityHistory);
})

$(document).on("click", ".cityHistoryBtn", seachHistory);

