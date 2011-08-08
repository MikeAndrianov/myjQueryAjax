var MaxZIndex=1;

	var albums = new Array();
	var photos = new Array();
	var photos_small = new Array();
//	var images = new Array();
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
			var id=0;			
			$(msg).find('viewer').each(function () {		
				$(this).find('album').each(function () {
	/*======================ВЕРХНЕЕ МЕНЮ==================================*/	
					buffer = $(".menu").html();
					$(".menu").html(buffer + "<a href="+"''" + "id="+id+ " >" + " "+$(this).attr('name')+" " + "</a>");
					id++;	
	/*====================================================================*/	
					albums[i] = new Array();
					albums[i][0] = $(this).attr('name');
					albums[i][1] = $(this).attr('path');
						
					photos[i] = new Array();
					photos_small[i] = new Array();
					$(this).find('img').each(function () {
						photos[i][j] = $(this).attr('src1');
						photos_small[i][j] = $(this).attr('src');
						j++;
					})
					i++;
					j = 0;		
				}); 
			});  
			
			$(".menu a").hover(function(){ /*ПОЧЕМУ ЕСЛИ НАПИСАТЬ .click , ТО ВСЁ ПОЯВЛЯЕТСЯ И ТУТ ЖЕ ПРОПАДАЕТ? */
				$("a.selected").removeClass();
				$(this).addClass("selected");
				$(msg).find('viewer').each(function () {		
					$(this).find('album').each(function() {
						if ($(this).attr('id')==$("a.selected").attr('id')){
					
							var Path=$(this).attr("path"); /*Доделать... проверять на /. При отсуствии, доставлять самому*/
					 
							$("#gallery").html("");
							$(this).find('img').each(function() {      
							 	buffer = $("#gallery").html();
							 	$("#gallery").html(buffer+"<a href="+Path+$(this).attr('src1')+">"+"<img src="+Path+"small/"+ $(this).attr('src') +" />" + "</a>");  
							});
					 
							$("#gallery img").css("opacity", "0").hide();	
							$("#gallery img").draggable({containment:"#content"}); 
							$('#gallery a').lightBox();
							//randomPosition(); 
							$("#gallery img").show().animate( {	opacity:"1"} , 1500);
						}	
				
						$("#gallery img").hover().mousedown (function(){
							$(this).css("z-index", MaxZIndex);
							if(MaxZIndex==99999){MaxZIndex=1;}
							MaxZIndex++;
						}	
					); 	 
				})
			})
			}, function(){}); /*ДОБАВЛЯЕМ ПУСТУЮ Ф-ЦИЮ т.к. hover(1,2), где 2-когда мышку убираем */
				
    		$(".menu a:first").addClass("forFirstMenu");
		}
	});						
} 

$("#buttonSlideShow").click(SlideShow());
function SlideShow() {
		
}

