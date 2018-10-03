var COUNT = 0;
var GO = false;
var TIMER;

window.onload = function () {
	var images = document.getElementsByClassName("images")[0];
	var image = document.getElementsByClassName("image");
	var arrow = document.getElementsByClassName("arrow");

	showtime();
	 function showtime() {
	   TIMER = setInterval(function(){
	     if ( GO == false ) {
	       COUNT++;
	       imagetransform();
	       if ( COUNT >= image.length-6 ){
	         COUNT = 1;
	         GO = true;
	       }
	     }
	     else {
	       COUNT--;
	       imagetransform();
	       if ( COUNT <= 0 ) {
	         COUNT = 0;
	         GO = false;
	       }
	     }
	   }, 2000);
	 }

	 for ( var i=0; i<arrow.length; i++ ) {
	 	arrow[i].onmouseover = function(){
	 		clearInterval(TIMER);
	 	}
	 	arrow[i].onmouseout = function () {
	 	  showtime();
	 	}
	 	arrow[i].onclick = function() {
	 	  if ( this.title == 0 ) {
	 	    COUNT++;
	 	    if ( COUNT > image.length-6) {
	 	      COUNT = 0;
	 	      GO = false;
	 	    }
	 	  }
	 	  else {
	 	    COUNT--;
	 	    if ( COUNT < 0 ) {
	 	      COUNT = image.length-6;
	 	      GO = true;
	 	    }
	 	  }
	 	  imagetransform();
	 	}
	 } 

	 /* Image Transform */
	 function imagetransform() {
	   images.style.transform = `translate(${ -300 * COUNT }px)`;
	 }
}


function scrollToElement(pageElement) {    
    var positionX = 0,         
        positionY = 0;    

    while(pageElement != null){        
        positionX += pageElement.offsetLeft;        
        positionY += pageElement.offsetTop;        
        pageElement = pageElement.offsetParent;        
        window.scrollTo(positionX, positionY);    
    }
}



