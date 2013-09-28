$(document).ready(function(){
	$("#sentmail").click(function(){
		alert("i am sendmail botton");
		
	});
	$("#hide").click(function(){
		$("#aboutme").hide();
	});
	$("#show").click(function(){
		$("#aboutme").show();
	});
	$("#background").click(function(){
		$("#aboutme").css("background-color","red");
		$("#aboutme").css("border","solid 40px #000000");
		$("#aboutme").fadeOut(8000);
	});

	$("#aboutme").click(function(){
		$(".Des").slideUp();
        $("#aboutmeDes").slideDown();
        
	});

	$("#portfolioMe").click(function(){
		
		$(".Des").slideUp();
		$("#protfolioDes").slideDown();

	});
	$("#contactMe").click(function(){
		$(".Des").slideUp();
		$("#contactDes").slideDown();
	});
	$(".des").click(function(){
		$(".des").slideUp();
	});

	
	});
