var sliderInt = 1;
var sliderNext = 2;

$(document).ready(function(){
	$("#slider > img#1").fadeIn(300);
	startSlider();
});

function startSlider(){
	var count = $("#slider > img").size();
	var loop = setInterval(function(){
		
		if(sliderNext > count){ sliderNext = 1; sliderInt = 1;}
			
		$("#slider > img").fadeOut(300);
		$("#slider > img#" + sliderNext).fadeIn(300);
		sliderInt = sliderNext;
		sliderNext = sliderNext +1;
	}, 3000);
}

function prev(){
	var newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next(){
	var newSlide = sliderInt + 1;
	showSlide(newSlide);	
}

function stopLoop(){
	window.clearInterval();
}

function showSlide(id){
	stopLoop();
	if(id > count){id = 1;}
	else if(id < 1){ id = count;}
	
	$("#slider > img").fadeOut(300);
	$("#slider > img#" + id).fadeIn(300);
	
	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}

$("#slider > img").hover(function(){
	stopLoop();
}, function(){
	startSlider();
});