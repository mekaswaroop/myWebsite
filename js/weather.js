$(document).ready(function(){
	

});
        function loadWeatherWebService(location)
  {
    var htmlString="";
    $("#load").html("Updating weather details, please standby...");
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=metric";  
    console.log(apiUrl);
    $.ajax({url:apiUrl,dataType:'jsonp',}).done(function(result){
    
    console.log(result);
    if(result.cod==200)
    {
    $('#statusMsg').text('Success!');
    $('#statusMsg').fadeIn('slow');
	
          var city = result.name;
          var country = result.sys.country;
          var humidity  = result.main.humidity;
          var temp = result.main.temp;
          var windspeed = result.wind.speed;
          
          
          htmlString = htmlString + "<div id='location'>"+city +", "+ country+"</div>";
          var weather = result.weather[0].description;
          htmlString = htmlString + "<div class='weatherData'> <b> weather: "+ weather + " </div>";
          htmlString = htmlString + "<div class='weatherData'> <b> country: "+ country + "</div>";
          htmlString = htmlString + "<div class='weatherData'> <b> Humidity: "+ humidity + " </div>";
          htmlString = htmlString + "<div class='weatherData'> <b> Temperature: "+  temp + " </div>";
          htmlString += "<div class='weatherData'> <b> max Temperature: "+result.main.temp_max+"</div>";
          htmlString += "<div class='weatherData'> <b> min Temperature: "+result.main.temp_min+"</div>";
          htmlString += "<div class='weatherData'> <b> windspeed: "+windspeed+"</div>";
          
          
          








          $("#load").html(htmlString);
             }
    else
      {
      $("#container").html("No data found.. Please check the city name and try again..");
      $('#statusMsg').css("background-color","rgba(176, 40, 26, 1)");
      $('#statusMsg').text('Sorry, no information found about that city, please try again!');
      $('#statusMsg').fadeIn('slow');
      }
       setTimeout(function() {			
		    $('#statusMsg').fadeOut('fast');
		}, 3000); 
	}).fail(function(){
		console.log("Error occured");
		$("#load").html("Internal Error occured. Please try again.");
				
	});	

}
 
  