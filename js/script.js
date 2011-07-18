var MaxZIndex=1;

	var albums = new Array();
	var photos = new Array();
	var photos_small = new Array();
	var str_small="small_";
//====================================================
$(function() {
	$('#gallery a').lightBox();
});
	
$(document).ready(init); 

function init(){ 
	 $("#gallery img").draggable(
		{containment:"#content"}
	 ); 
	
/*	$("#gallery img").hover().mousedown(
		function(){
			$(this).css( "z-index", MaxZIndex);
			if(MaxZIndex==99999){MaxZIndex=1;}
			MaxZIndex++;
		}	
	); */
	 
	function randomPosition(){
		$('#gallery img').each( function(index) {
  			var left = Math.floor( Math.random() * 450 + 20 );
  			var top = Math.floor( Math.random() * 200 + 100 );
  			$(this).css( 'left', left+'px' );
  			$(this).css( 'top', top+'px' );
		}); 									
	}
	
	var i=0;
	var j=0;
	$.ajax({
		type: 	"GET",
		url: 	"settings.xml",
		dataType: "xml",
		success: function(msg){		
			$(msg).find('viewer').each(function () {		
				$(this).find('album').each(function () {
					albums[i] = new Array();
					albums[i][0] = $(this).attr('name');
					albums[i][1] = $(this).attr('path');
						
					photos[i] = new Array();
					photos_small[i] = new Array();
					$(this).find('img').each(function () {
						photos[i][j] = $(this).attr('src');
						photos_small[i][j] = str_small+$(this).attr('src');
						j++;
					})
					i++;
					j = 0;		
				}); 
			});  
/*======================ВЕРХНЕЕ МЕНЮ==================================*/	
			for (j = 0; j < albums.length; j++){
				buffer = $(".menu").html();
				$(".menu").html(buffer + "<a href="+"''" + "id="+j+ " >" + " "+albums[j][0]+" " + "</a>");
			} 			
/*====================================================================*/	

			$(".menu a").hover(function(){ //ПОЧЕМУ ЕСЛИ НАПИСАТЬ .click , ТО ВСЁ ПОЯВЛЯЕТСЯ И ТУТ ЖЕ ПРОПАДАЕТ? 		
				$("a.selected").removeClass();
				$(this).addClass("selected");							
				var Path=albums[$("a.selected").attr('id')][1]; //Доделать... проверять на /. При отсуствии, доставлять самому		 
				$("#gallery").html("");
				for (j = 0; j < photos_small[$("a.selected").attr('id')].length; j++){				
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer+"<a href="+Path+photos[$("a.selected").attr('id')][j]+">"+"<img src="+
														 Path+"small/"+photos_small[$("a.selected").attr('id')][j] +" />" + "</a>");  
				};
		 
				$("#gallery img").css("opacity", "0").hide();	
				$("#gallery img").draggable({containment:"#content"}); 
				$('#gallery a').lightBox();
				randomPosition(); 
				$("#gallery img").show().animate( {	opacity:"1"} , 1500);
				
				$("#gallery img").hover().mousedown (function(){
					$(this).css("z-index", MaxZIndex);
					if(MaxZIndex==99999){MaxZIndex=1;}
					MaxZIndex++;
				})
			}, function(){}); //ДОБАВЛЯЕМ ПУСТУЮ Ф-ЦИЮ т.к. hover(1,2), где 2-когда мышку убираем '
		
			$(".menu a:first").addClass("forFirstMenu");
		}			
	});						
} 

$("#buttonSlideShow").click(SlideShow());
function SlideShow() {
		
}

