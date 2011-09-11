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
	 //$("#g").draggable(
		//{containment: "#content"}
	 //); 

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
$("#buttonSlideShow").hide();

/*======================¬≈–’Õ≈≈ Ã≈Õﬁ==================================*/	
			for (j = 0; j < albums.length; j++){
				buffer = $(".menu").html();
				$(".menu").html(buffer + "<a href="+"''" + "id="+j+ " >" + " "+albums[j][0]+" " + "</a>");
			} 			
/*====================================================================*/	
$(".menu a:first").addClass("forFirstMenu");
			$(".menu a").hover(function(){
				$("a.selected").removeClass();
				$(this).addClass("selected");							
				var Path=albums[$("a.selected").attr('id')][1];	 
				$("#gallery").html("");
				for (j = 0; j < photos[$("a.selected").attr('id')].length; j++){				
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer+"<a href="+Path+photos[$("a.selected").attr('id')][j]+">"+"<img src="+
														 Path+photos[$("a.selected").attr('id')][j] +" />" + "</a>");  
				};
		 $("#gallery img").css("opacity", "0").hide();
		//		$("#gallery img").draggable({containment:"#content"});	
//============================================INERTIA=====================================================
	$(function() {
    var $d = $("#gallery img");

    var x1, x2, y1, y2, t1, t2, // Posititons/Time
        minDistance = 40,       // Minimum px distance object must be dragged to enable momentum.
        friction = 1;           // Set friction higher to make tossing harder
    
    var onMouseMove = function(e) {
        var mouseEvents = $d.data("mouseEvents");
        if (e.timeStamp - mouseEvents[mouseEvents.length - 1].timeStamp > 40) {
            mouseEvents.push(e);
            if (mouseEvents.length > 2) {
                mouseEvents.shift();
            }
        }
    };

    var onMouseUp = function() {
        $(document).unbind("mousemove mouseup");
    };

    $d.draggable({
		containment: "#content",
        start: function(e, ui) {
            $d.data("mouseEvents", [e]);
            $(document).mousemove(onMouseMove).mouseup(onMouseUp);
        },
        stop: function(e, ui) {
            $d.stop();
            $d.css("text-indent", 100);

            var lastE = $d.data("mouseEvents").shift();

            x1 = lastE.pageX;
            y1 = lastE.pageY;
            t1 = lastE.timeStamp;
            x2 = e.pageX;
            y2 = e.pageY;
            t2 = e.timeStamp;

            // Deltas
            var dX = x2 - x1,
                dY = y2 - y1,
                dMs = Math.max(t2 - t1, 1);

            // Speeds
            var speedX = Math.max(Math.min(dX / dMs, 1), -1),
                speedY = Math.max(Math.min(dY / dMs, 1), -1);

            // Distance moved (Euclidean distance)
            var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

            if (distance > minDistance) {
                // Momentum
                var lastStepTime = new Date();
                
                var maxLeft = $(window).width() - ($d.width() + 10),
                    maxTop = $(window).height() - ($d.height() + 10);

                $d.animate({
                    textIndent: 0
                }, {
                    duration: Math.max(Math.abs(speedX), Math.abs(speedY)) * 6000,
                    step: function(currentStep) {
                        speedX *= (currentStep / 100);
                        speedY *= (currentStep / 100);

                        var now = new Date();
                        var stepDuration = now.getTime() - lastStepTime.getTime();

                        lastStepTime = now;

                        var position = $d.position();

                        var newLeft = (position.left + (speedX * stepDuration / friction)),
                            newTop = (position.top + (speedY * stepDuration / friction));
                        newLeft = newLeft > maxLeft ? maxLeft : newLeft < 10 ? 10 : newLeft;
                        newTop  = newTop  > maxTop  ? maxTop  : newTop  < 10 ? 10 : newTop;

                        $d.css({
                            left: newLeft + "px",
                            top: newTop + "px"
                        });
                    }
                });
            }
        }
    });
});
//==================================================================================================================
				$('#gallery a').lightBox();

				//============SLIDESHOW(on)================================================
				$("#gallery a").lightBox({ slideshow: SlideShowAvailable, nextSlideDelay: 4000});
				//=====================================================================
				$("#buttonSlideShow").show();
randomPosition(); 
HeightImg();
			$("#buttonSlideShow").toggle( 
				function(){
					$("#buttonSlideShow a").text("Slideshow off"); $("#gallery a").lightBox({ slideshow: false, nextSlideDelay: 4000}); SlideShowAvailable=false;
				}, 
				function(){
					$("#buttonSlideShow a").text("Slideshow on"); $("#gallery a").lightBox({ slideshow: true, nextSlideDelay: 4000}); SlideShowAvailable=true;
				}
			);
			
	$("#gallery img").show().animate( {	opacity:"1"} , 1500);
//==================‡ÏÍ‡ ‰Îˇ ÔÓÒÏÓÚÂÌÌ˚ı ÙÓÚÓ==================	
	$("#gallery img").click(function(){
			$(this).css("border-color", " #96F169"); 
	});
//================================================================	
$(".menu a:first").addClass("forFirstMenu");

				$("#gallery img").hover().mousedown (function(){				
					$(this).css("z-index",MaxZIndex);
					if (MaxZIndex==99999) {MaxZIndex=0;}
					MaxZIndex++;							
				})

			}, function(){}); //ƒŒ¡¿¬Àﬂ≈Ã œ”—“”ﬁ ‘-÷»ﬁ Ú.Í. hover(1,2), „‰Â 2-ÍÓ„‰‡ Ï˚¯ÍÛ Û·Ë‡ÂÏ '			
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

