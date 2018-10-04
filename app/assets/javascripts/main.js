var COUNT = 0;
var GO = false;
var TIMER;
var LANG = 'CN';


window.onload = function() {
	langCN();
	var images = document.getElementsByClassName("images")[0];
	var image = document.getElementsByClassName("image");
	var arrow = document.getElementsByClassName("arrow");

	showtime();

	function showtime() {
	    TIMER = setInterval(function(){
	      	if ( GO == false ) {
	        	COUNT++;
	        	imagetransform();
	        	if ( COUNT >= image.length -6 ){
	        		COUNT = 0;
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



/* Language Switch */
var CN = document.getElementById("CN");
var EN = document.getElementById("EN");
CN.addEventListener('click', langCN, false);
EN.addEventListener('click', langEN, false);


function langEN() {	
	var slogan = document.getElementById("slogan");
	var btn_new = document.getElementsByClassName("btn-new")[0];
	var about_title1 = document.getElementById("about_title1");
	var about_title2 = document.getElementById("about_title2");
	var about_title3 = document.getElementById("about_title3");
	var about_content1 = document.getElementById("about_content1");
	var about_content2 = document.getElementById("about_content2");
	var about_content3 = document.getElementById("about_content3");
	var contact1 = document.getElementById("contact1");
	var contact2 = document.getElementById("contact2");
	var contact3 = document.getElementById("contact3");
	var call = document.getElementById("call");
	slogan.innerHTML = "Your best clothing supply partner";
	btn_new.innerHTML = "New In";
	about_title1.innerHTML = "Profession";
	about_title2.innerHTML = "Quality";
	about_title3.innerHTML = "Service";
	about_content1.innerHTML = "With 30 year clothing market experience, we provide the latest fashion trends & clothing for women. We are also welcome any style innovation and development.";
	about_content2.innerHTML = "Quality is our top priority. We cooperate with supply partner to establish the strict quality inspection process for ensuring the best quality.";
	about_content3.innerHTML = "We care about your purchasing experience. All the products are exchangable for the new product or a product of equal value.";
	contact1.innerHTML = "Find high-quality and inexpensive clothes?";
	contact2.innerHTML = "Find a reliable trustworthy business partner?";
	contact3.innerHTML = "Please give us a call";
	call.innerHTML = "+886 7 2357291";
}
	


function langCN() {
	var slogan = document.getElementById("slogan");
	var btn_new = document.getElementsByClassName("btn-new")[0];
	var about_title1 = document.getElementById("about_title1");
	var about_title2 = document.getElementById("about_title2");
	var about_title3 = document.getElementById("about_title3");
	var about_content1 = document.getElementById("about_content1");
	var about_content2 = document.getElementById("about_content2");
	var about_content3 = document.getElementById("about_content3");
	var contact1 = document.getElementById("contact1");
	var contact2 = document.getElementById("contact2");
	var contact3 = document.getElementById("contact3");
	var call = document.getElementById("call");
	slogan.innerHTML = "你最好的服裝供應夥伴";
	btn_new.innerHTML = "最新到貨";
	about_title1.innerHTML = "專業";
	about_title2.innerHTML = "品質";
	about_title3.innerHTML = "服務";
	about_content1.innerHTML = "我們憑藉30年服裝市場經驗，提供最新時尚趨勢和服裝給女士們，我們也歡迎任何風格的創新拓展。";
	about_content2.innerHTML = "品質為最高優先，我們與供應夥伴合作，建立嚴格品質檢驗標準，確保最佳品質。";
	about_content3.innerHTML = "我們在意您的購買體驗，所有的商品皆可更換良品或等值商品。";
	contact1.innerHTML = "尋找物美價廉的服裝？";
	contact2.innerHTML = "尋找值得信賴的商業夥伴？";
	contact3.innerHTML = "歡迎來電";
	call.innerHTML = "+886 7 2357291";
}








