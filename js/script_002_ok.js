var MaxZIndex=1;
	var albums = new Array();
	var photos = new Array();
	var images = new Array();
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
			if(MaxZIndex==99999){MaxZIndex=1;}
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
/*=========œ–≈ƒ€ƒ”Ÿ»… ¬¿–»¿Õ“ 001=================*/
$.ajax({
		type: 	"GET",
		url: 	"settings.xml",
		dataType: "xml",
		success: function(msg){		
		var i=0;
		var id=0;			
	/*======================¬≈–’Õ≈≈ Ã≈Õﬁ==================================*/	
		$(msg).find('album').each(function() {
			buffer = $(".menu").html();
			$(".menu").html(buffer + "<a href="+"''" + "id="+id+ " >" + " "+$(this).attr('name')+" " + "</a>");
			 id++;	
		});
	/*====================================================================*/	
			
		$(".menu a").hover(function(){ /*œŒ◊≈Ã” ≈—À» Õ¿œ»—¿“‹ .click , “Œ ¬—® œŒﬂ¬Àﬂ≈“—ﬂ » “”“ ∆≈ œ–Œœ¿ƒ¿≈“? */
			var id1 = $(this).attr('id'); 
			$('#footer').text("__"+id1+"__");	
			$(msg).find("album").each(function() {/*Õ¿…“» ¿À‹¡ŒÃ — ID –¿¬Õ€Ã id*/
				id2=$(this).attr('id');
				if (id1==id2) {
/* i1=$(".menu").index(); $('#footer').append("++"+i1+"++"); */
				$("#gallery").html(" ");
				$(this).find('img').each(function() {                 
				 	buffer = $("#gallery").html();
				 	$("#gallery").html(buffer + "<a href="  + $(this).attr('src1')+ ">" +"<img src=" + $(this).attr('src') +" />" + "</a>");  
					/*$("#gallery").html(buffer + "<a href="  + $(this).attr('src1')+ ">" +"<img src=" + $(this).attr('src') +" />" + "</a>");*/  
				 });
				 
				$("#gallery img").css("opacity", "0").hide();	
		   		$("#gallery img").draggable({containment:"#content"}); 
				$('#gallery a').lightBox();
				randomPosition(); 
				$("#gallery img").show().animate( {	opacity:"1"} , 1500);
				
				}
			})
//if ($(".menu option: selected"))  ajaxStop;
		}, function(){}); /*ƒŒ¡¿¬Àﬂ≈Ã œ”—“”ﬁ ‘-÷»ﬁ Ú.Í. hover(1,2), „‰Â 2-ÍÓ„‰‡ Ï˚¯ÍÛ Û·Ë‡ÂÏ */

    	$(".menu a:first").addClass("forFirstMenu");
	
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
