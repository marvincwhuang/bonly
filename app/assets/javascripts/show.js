var COUNT = 0;
var TIMER;

window.onload = function () {
	var ul_images = document.getElementsByClassName("ul_images")[0];
	var li_image = document.getElementsByClassName("li_image");
	var arrow = document.getElementsByClassName("arrow");
	var image_btn = document.getElementsByClassName("image_btn");
	if (image_btn[0]) {
		image_btn[0].style.opacity = 1;
	}
	/* Arrow Click */
	for ( var i = 0; i < arrow.length; i++ ) {
		arrow[i].onclick = function() {
			if (this.title == 0) {
				COUNT++;
				if (COUNT > li_image.length-1) {
					COUNT = 0;
				}
			}
			else {
				COUNT--;
				if (COUNT < 0) {
					COUNT = li_image.length-1;
				}
			}
			buttonactive();
			imagetransform();
		}
	}
	/* Button Click */
	for (var i = 0; i < image_btn.length; i++) {
		image_btn[i].index = i;
		image_btn[i].onclick = function() {
			COUNT = this.index;
			buttonactive();
			imagetransform();
		}
	}

	function imagetransform() {
		ul_images.style.transform = `translate(${ -300 * COUNT }px)`;
	}
	function buttonactive() {
		image_btn[COUNT].style.opacity = 1;
		  for (var i=0; i<image_btn.length; i++) {
		    if (i != COUNT) {
		      image_btn[i].style.opacity = 0.6;
		    }
		  }

	}
}