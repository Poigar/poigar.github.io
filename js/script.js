var lastDateBlog = 1486498660913;
var lastDateProject = 1483980253012;

var blogNotif = "New!";
var projectsNotif = "New!";

var needToNotifyBlog = false;
var needToNotifyProject = false;

var f_html=true;
var f_linux=true;
var f_windows=true;
var f_apple=true;
var f_android=true;
var f_game=true;
var f_app=true;

var f_year="f-year_all";

var f_news=true;
var f_reviews=true;
var f_other=true;

function checkNewsReal(){
	var issetBlog = localStorage.getItem("lastCheckBlog");
	var issetProject = localStorage.getItem("lastCheckProject");
	var temp=false;

	if(issetBlog==null || issetProject==null){
		localStorage.setItem("lastCheckBlog", lastDateBlog);
		localStorage.setItem("lastCheckProject", lastDateProject);
		localStorage.setItem("showWelcome", "true");
		f_welcome=true;
		temp=true;
	}else if(!temp){
		var lastCheckBlog = localStorage.getItem("lastCheckBlog");
		lastCheckBlog = parseInt(lastCheckBlog);

		var lastCheckProject = localStorage.getItem("lastCheckProject");
		lastCheckProject = parseInt(lastCheckProject);


		if(lastDateBlog > lastCheckBlog){
			needToNotifyBlog=true;
			localStorage.setItem("lastCheckBlog", lastDateBlog);
			notify(0);
		}
		if(lastDateProject > lastCheckProject){
			needToNotifyProject=true;
			localStorage.setItem("lastCheckProject", lastDateProject);
			notify(1);
		}
	}
}

function notify(n){
	if(n==0){
		$(".blog_span").addClass("badge-new");
		$(".blog_span").html(blogNotif);
	}
	if(n==1){
		$(".projects_span").addClass("badge-new");
		$(".projects_span").html(projectsNotif);
	}
}

$( document ).ready(function() {

	$(".read-more").hide();

	$("#read-btn-1").click(function(){
		$( "#read-more-1" ).slideToggle( "slow", function() {
		    // Animation complete.
		});
	});
	$("#read-btn-2").click(function(){
		$( "#read-more-2" ).slideToggle( "slow", function() {
		    // Animation complete.
		});
	});

    $( "#f-html" ).click(function() {
	  if(!f_html){
	  	$("#f-html").addClass("filter-active");
	  	$(".f-html").show();
	  	f_html=true;
	  }else{
	  	$("#f-html").removeClass("filter-active");
	  	$(".f-html").hide();
	  	f_html=false;
	  }
	});
	$( "#f-linux" ).click(function() {
	  if(!f_linux){
	  	$("#f-linux").addClass("filter-active");
	  	$(".f-linux").show();
	  	f_linux=true;
	  }else{
	  	$("#f-linux").removeClass("filter-active");
	  	$(".f-linux").hide();
	  	f_linux=false;
	  }
	});
	$( "#f-windows" ).click(function() {
	  if(!f_windows){
	  	$("#f-windows").addClass("filter-active");
	  	$(".f-windows").show();
	  	f_windows=true;
	  }else{
	  	$("#f-windows").removeClass("filter-active");
	  	$(".f-windows").hide();
	  	f_windows=false;
	  }
	});
	$( "#f-apple" ).click(function() {
	  if(!f_apple){
	  	$("#f-apple").addClass("filter-active");
	  	$(".f-apple").show();
	  	f_apple=true;
	  }else{
	  	$("#f-apple").removeClass("filter-active");
	  	$(".f-apple").hide();
	  	f_apple=false;
	  }
	});
	$( "#f-android" ).click(function() {
	  if(!f_android){
	  	$("#f-android").addClass("filter-active");
	  	$(".f-android").show();
	  	f_android=true;
	  }else{
	  	$("#f-android").removeClass("filter-active");
	  	$(".f-android").hide();
	  	f_android=false;
	  }
	});
	$( "#f-game" ).click(function() {
	  if(!f_game){
	  	$("#f-game").addClass("filter-active");
	  	$(".f-game").show();
	  	f_game=true;
	  }else{
	  	$("#f-game").removeClass("filter-active");
	  	$(".f-game").hide();
	  	f_game=false;
	  }
	});
	$( "#f-app" ).click(function() {
	  if(!f_app){
	  	$("#f-app").addClass("filter-active");
	  	$(".f-app").show();
	  	f_app=true;
	  }else{
	  	$("#f-app").removeClass("filter-active");
	  	$(".f-app").hide();
	  	f_app=false;
	  }
	});

	$( "#f-news" ).click(function() {
	  if(!f_news){
	  	$("#f-news").addClass("filter-active");
	  	$(".f-news").show();
	  	f_news=true;
	  }else{
	  	$("#f-news").removeClass("filter-active");
	  	$(".f-news").hide();
	  	f_news=false;
	  }
	});
	$( "#f-reviews" ).click(function() {
	  if(!f_reviews){
	  	$("#f-reviews").addClass("filter-active");
	  	$(".f-reviews").show();
	  	f_reviews=true;
	  }else{
	  	$("#f-reviews").removeClass("filter-active");
	  	$(".f-reviews").hide();
	  	f_reviews=false;
	  }
	});
	$( "#f-other" ).click(function() {
	  if(!f_other){
	  	$("#f-other").addClass("filter-active");
	  	$(".f-other").show();
	  	f_other=true;
	  }else{
	  	$("#f-other").removeClass("filter-active");
	  	$(".f-other").hide();
	  	f_other=false;
	  }
	});


	$( "#f-welcome" ).click(function() {
	  if(localStorage.getItem("showWelcome")=="true"){
	  	localStorage.setItem("showWelcome","false");
	  	$("#f-welcome").removeClass("filter-active");
	  	$(".f-welcome").hide();
	  }else{
	  	localStorage.setItem("showWelcome","true");
	  	$(".f-welcome").show();
	  	$("#f-welcome").addClass("filter-active");
	  }
	});
});