var movieArray = [];

var apikey= "9a3cc6d14b4765b19587e229556ae226";

$(document).ready(function(){
	 $("#findPoster").click(function(){
    var listTxt = $("#mveName").val();
    if(listTxt=="" || listTxt=="enter movie name")
    {
      alert("Please enter a movie name");
    }
    else
    {
    	movieposter($("#mveName").val());
      
    }


  });
	 

  $("#mveName").click(function(){
  $("#mveName").val('');
  });


});


    function movieposter(moviename)
  {
  	var movieStr="";
    $("#swap").html("Updating poster details, please standby...");
    var apiUrl = "http://api.themoviedb.org/3/search/movie?api_key="+apikey+"&query="+moviename;
    console.log(apiUrl);
    $.ajax({url:apiUrl,dataType:'jsonp',}).done(function(result){
    
    console.log(result);
    var title = result.results[0].original_title;
    var posters= result.results[0].poster_path;
    movieStr= movieStr+"<div id=#title>"+title+"</div>";
    if(posters!==null)
    {
    movieStr=movieStr+"<div id=#title><img src='http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500"+posters+"'/></div>";
	}
	else
	{
		movieStr=movieStr+"Sorry no poster found";
	}

    console.log(result.results[0].original_title);
    console.log(result.results.poster_path);
    
    $("#swap").html(movieStr);
    }).fail(function(){
		console.log("Error occured");
		$("#swap").html("Internal Error occured. Please try again.");
				
	});	
}
