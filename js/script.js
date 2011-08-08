var MaxZIndex=1;

	var albums = new Array();
	var photos = new Array();
	var photos_small = new Array();
	var photosPath = new Array();
	var photos_smallPath = new Array();
	var str_small="small_";
	var currentAlbum=0; 
	var SlideShowAvailable=true;
var MaxHeight;
//====================================================
/*$(function() {
	$("#gallery a").lightBox({ slideshow: true, nextSlideDelay: 1000});
});	*/
$(document).ready(init); 
 
	$("#gallery img").hover().mousedown(
		function(){
			$(this).css( "z-index", MaxZIndex);
			if(MaxZIndex==99999){MaxZIndex=1;}
			MaxZIndex++;
		}	
	); 
	
	
function init(){ 

/*var w1 = $("#gallery").width()/100*75;
$("#gallery").css('width', w1+'px');
*/
	 $("#gallery img").draggable(
		{containment: "#content"}
	 ); 

	function randomPosition(){
		$('#gallery img').each( function(index) {
			var left = Math.floor( Math.random() * 450 + 20 );
  			var top = Math.floor( Math.random() * 200 + 100 );
  			$(this).css( 'left', left+'px' );
  			$(this).css( 'top', top+'px' );
		}); 									
	}
					
	function MaxHeightImg(){
//		var MaxHeight1=0;
		MaxHeight1=0;
		$('#gallery img').each( function(index) {
			if ($(this).height()> MaxHeight1) {
				MaxHeight1=$(this).height();
			}
		}); 									
	}
	
	function HeightImg(){
		MaxHeightImg();
		$('#gallery img').each(function(index) {
			var pH=MaxHeight1-$(this).height()+5;
			$(this).css('border-top-width',pH+'px');
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
currentAlbum=$(".menu.selected").attr('id');
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
				for (j = 0; j < photos[$("a.selected").attr('id')].length; j++){				
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer+"<a href="+Path+photos[$("a.selected").attr('id')][j]+">"+"<img src="+
														 Path+photos[$("a.selected").attr('id')][j] +" />" + "</a>");  
				};
		 $("#gallery img").css("opacity", "0").hide();
				$("#gallery img").draggable({containment:"#content"});				
				$('#gallery a').lightBox();

				//============SLIDESHOW(on)================================================
				$("#gallery a").lightBox({ slideshow: SlideShowAvailable, nextSlideDelay: 3000});
				//=====================================================================
randomPosition(); 
HeightImg();

	$("#gallery img").show().animate( {	opacity:"1"} , 1500);


				$("#gallery img").hover().mousedown (function(){				
					$(this).css("z-index",MaxZIndex);
					if (MaxZIndex==99999) {MaxZIndex=0;}
					MaxZIndex++;							
				})
//$("#gallery").animate( {opacity: 1}, 1500);
//			})
			}, function(){}); //ДОБАВЛЯЕМ ПУСТУЮ Ф-ЦИЮ т.к. hover(1,2), где 2-когда мышку убираем '
		
//			$(".menu a:first").addClass("forFirstMenu");			

//$("#buttonSlideShow").click(SlideShow($(".menu.selected").attr('id')));
			
		}			
	});						
}

/*function SlideShow(){
	SlideShowAvailable=true;
				//============SLIDESHOW(on)================================================
				//$("#gallery a").lightBox({ slideshow: SlideshowAvailable, nextSlideDelay: 3000});
				//=====================================================================
	_doSlideShow();
} */
$(document).click(function(){
/*	var div = document.getElementById ("#gallery");
if (div.hasAttribute(".................src................")) alert ("__click__");
			
            if (div.getBoundingClientRect) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
                var rect = div.getBoundingClientRect ();
                x = rect.left;
                y = rect.top;
                w = rect.right - rect.left;
                h = rect.bottom - rect.top;
                alert (" Left: " + x + "\n Top: " + y + "\n Width: " + w + "\n Height: " + h);
            }
            else {
                alert ("Your browser does not support this example!");
            }
*/			
});
