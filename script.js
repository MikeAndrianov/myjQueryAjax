var MaxZIndex=1;
//====================================================
 $(function() {
        $('#gallery a').lightBox();
   });
	
$(document).ready(init); 
function init(){
	 $("#gallery img").draggable(
		{containment:"#content"}
	 ); 
	
	 $("#gallery img").hover().mousedown(
	 	function(){
			$(this).css( "z-index", MaxZIndex);
			if(MaxZIndex==99999){MaxZIndex=1}
			MaxZIndex++;
		}	
	 ); 
	 
	function randomPosition(){
		$('#gallery img').each( function(index) {
  			var left = Math.floor( Math.random() * 450 + 20 );
  			var top = Math.floor( Math.random() * 200 + 100 );
  			$(this).css( 'left', left+'px' );
  			$(this).css( 'top', top+'px' );
								}
		); 
	}

$.ajax({
		type: 	"GET",
		url: 	"settings.xml",
		dataType: "xml",
		success: function(msg){		
	/*======================бепумее лемч==================================*/	
			$(msg).find('album').each(function() {
				buffer = $("#menu").html();
				$("#menu").html(buffer + "<a href="+"''"+" >" + " "+$(this).attr('name')+" " + "</a>");
			});
	/*====================================================================*/		
			$("#menu a").hover(function(){ /*онвелс еякх мюохяюрэ .click , рн бя╗ онъбкъеряъ х рср фе опноюдюер? */
				$("#gallery").html(" ");
				var MenuSelected;
				$(msg).find('img').each(function() {                 
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer + "<a href="  + $(this).attr('src1')+ ">" +"<img src=" + $(this).attr('src') +" />" + "</a>");  
				 });
				 					
	   			$("#gallery img").draggable({containment:"#content"}); 
				$('#gallery a').lightBox();
				randomPosition();
			});

    	$("#menu a:first").addClass("forFirstMenu");
	
		}
	});
						
} 
/*$(document).ready(randomPosition); 
function randomPosition(){
	$('#gallery img').each( function(index) {
  		var left = Math.floor( Math.random() * 450 + 20 );
  		var top = Math.floor( Math.random() * 200 + 100 );
  		$(this).css( 'left', left+'px' );
  		$(this).css( 'top', top+'px' );
							}
	); 
}*/



$("#buttonSlideShow").click(SlideShow());
function SlideShow(){
		
}

/*

$("#menu a").click(klik());

	function klik(){
		$.ajax({
			type: 	"GET",
			url: 	"settings.xml",
			dataType: "xml",
			success: function(msg){
				$(msg).find('menu').each(function() {

				});
			}
		})
	}
	
	$.ajax({
		type: 	"GET",
		url: 	"settings.xml",
		dataType: "xml",
		success: function(msg){		
			$(msg).find('album').each(function() {
				buffer = $("#menu").html();
				$("#menu").html(buffer + "<a href="+"''"+" >" + " "+$(this).attr('name')+" " + "</a>");
			});
			
			$("#menu a").hover(function(){
				$("#gallery").html(" ");
				$(msg).find('img').each(function() {                  
		
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer + "<a href=" + " ' " + $(this).attr('src1')+ "'" + ">" +"<img src=" + $(this).attr('src') +" />" + "</a>");  
				 });
				 					
	    $("#gallery img").draggable(
		{containment:"#content"}
	 ); 
			});
<a href="photos/image1.jpg">
                <img src="photos/thumb_image1.jpg" width="72" height="72" alt="" />
            </a>

    $("#menu a:first").addClass("forFirstMenu");
	
		}
	});
						
} 
	*/
//===========================================================================================
/*function addEffect1(){
	$("#kv1:hidden").show();
}
function addEffect2(){
	$("#kv2:hidden").height(110).slideDown("slow").css("border", "1px solid red");
}
function addEffect3(){
	$("#kv3:hidden").show().animate( {
		fontSize:"36px"
		} , 3000 );
}


  $(document).ready(function(){
    $("p").toggle(
      function () {
        $(this).css( "color","yellow");
      },
      function () {
        $(this).css( "color","white");
      },
      function () {
        $(this).css("color","");
      }
    );
  });
  
  function hideShowDiv(){
	$("#myDiv").toggle('slow');	  
  }



$(document).ready(init3); 
function init3(){ $("#qqq1").draggable(); } 
$(document).ready(init1); 
function init1(){ $("#drPict").draggable(); } 

 */
