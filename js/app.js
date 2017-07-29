// console.log("Hello World");

var shoppingCartItems = 
[{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];




	var shoppingCartHeader = document.createElement("div");
	shoppingCartHeader.id = "shoppingTitleHeader";
	shoppingCartHeader.innerHTML = "weirdgoods808";
	document.body.appendChild(shoppingCartHeader).style.textAlign = "left";

	var headerIcon = document.createElement("IMG");
	headerIcon.id = "headerI";
	headerIcon.setAttribute("src", "https://cdn2.iconfinder.com/data/icons/mammals-ii/300/03-256.png");
	document.body.appendChild(headerIcon).style.imgAlign = "right";

	var shopCartIcon = document.createElement("IMG");

	shopCartIcon.id = "shopCartI";
	shopCartIcon.setAttribute("src", "http://simpleicon.com/wp-content/uploads/Shopping-Cart-11.png");
	document.body.appendChild(shopCartIcon);




// 	var slideGrassSlips = document.createElement("IMG");
// 	slideGrassSlips.id = "grassSlips";
// 	slideGrassSlips.setAttribute("src", "http://1.bp.blogspot.com/-jQP5xDP-RWE/Vl4HGL_aTFI/AAAAAAAAAEE/cTRDcZuaulo/s1600/slide_08.jpg");
// 	document.body.appendChild(slideGrassSlips);

// var slideBaby = document.createElement("IMG");
// slideBaby.id = "mopBaby";
// slideBaby.setAttribute("src", "https://i.ytimg.com/vi/etxxt-3DNN0/maxresdefault.jpg");
// document.body.appendChild(slideBaby);

// var slideHairPits = document.createElement("IMG");
// slideHairPits.id = "hairyPitsGirl";
// slideHairPits.setAttribute("src", "https://i.ytimg.com/vi/Qs_AqYoOXy8/maxresdefault.jpg");
// document.body.appendChild(slideHairPits);

var heartIcon = document.createElement("IMG");
heartIcon.id = "heartI";
heartIcon.setAttribute("src", "https://images.vexels.com/media/users/3/136169/isolated/lists/e42ae42d51ca9b5b6783e408ba8054da-heart-circle-icon.png");
document.body.appendChild(heartIcon);

var heartIt = document.createElement("div");
heartIt.id = "heartIt";
heartIt.innerHTML = "Love it or it's FREE!";
document.body.appendChild(heartIt);

var catDolphIcon = document.createElement("IMG");
catDolphIcon.id = "catDolphin";
catDolphIcon.setAttribute("src", "https://pbs.twimg.com/profile_images/3071107674/5c77f6921baee7697999c9ee4f54fada.jpeg");
document.body.appendChild(catDolphIcon);

var catDolpT = document.createElement("div");
catDolpT.id = "catDT";
catDolpT.innerHTML = "Billions of weird stuff for errbody!";
document.body.appendChild(catDolpT);

var boxIcon = document.createElement("IMG");
boxIcon.id = "boxI";
boxIcon.setAttribute("src", "https://cdn0.iconfinder.com/data/icons/shipping-delivery-5/24/Shipping_delivery_box_open-128.png");
document.body.appendChild(boxIcon);

var boxIT = document.createElement("div");
boxIT.id = "boxIT";
boxIT.innerHTML = "Guarantee 5 minute shipping or it's FREE!";
document.body.appendChild(boxIT);

var recV = document.createElement("div");
recV.id = "recV";
recV.innerHTML = "Popular Items";
document.body.appendChild(recV);

for (var i = 0; i<shoppingCartItems.length;i++){
	console.log(shoppingCartItems[i]);
	console.log(shoppingCartItems[i].product);
	console.log(shoppingCartItems[i].description);
	console.log(shoppingCartItems[i].price);


	// var shoppingCart = document.createElement("div");
	// shoppingCart.id = "shoppingTitle";
	// shoppingCart.innerHTML = "Shopping Cart";
	// document.body.appendChild(shoppingCart);



	var productBox = document.createElement("div");
	productBox.className = "product";
	productBox.innerHTML = shoppingCartItems[i].product;
	document.body.appendChild(productBox);


	var descrBox = document.createElement("div");
	descrBox.className = "description";
	descrBox.innerHTML = shoppingCartItems[i].description;
	document.body.appendChild(descrBox);

	var priceBox = document.createElement("div");
	priceBox.className = "price";
	priceBox.innerHTML = shoppingCartItems[i].price;
	document.body.appendChild(priceBox);
}

var fingBrush = document.createElement("IMG");
fingBrush.id = "fingerBrush";
fingBrush.setAttribute("src", "https://guideimg.alibaba.com/images/shop/2015/10/31/44/2pcs-baby-kids-soft-safe-silicone-finger-toothbrush-gum-brush-for-clear-massage_12112044.jpeg");
	document.body.appendChild(fingBrush);

var barManCD = document.createElement("IMG");
barManCD.id = "barryManilow";
barManCD.setAttribute("src", "http://audiopreservationfund.org/graphics/acquisitions/COL_00019/Front%20Covers/Big/COL_00019_00279.jpg");
document.body.appendChild(barManCD);

var ramenOs = document.createElement("IMG");
ramenOs.id = "ramenOreos";
ramenOs.setAttribute("src", "https://i.ytimg.com/vi/NKn43NdcPAs/maxresdefault.jpg");
document.body.appendChild(ramenOs);

var woofWash = document.createElement("IMG");
woofWash.id = "woofW";
woofWash.setAttribute("src", "http://petslady.com/sites/default/files/inline-images/woof-washer-360-small.img_assist_custom.jpg");
document.body.appendChild(woofWash);

var saunaPants = document.createElement("IMG");
saunaPants.id = "saunaPants";
saunaPants.setAttribute("src", "http://68.media.tumblr.com/a0f5352c7ebb9cc7417a5bf2badba5bd/tumblr_mwum49Dedf1rlb6iho3_500.jpg");
document.body.appendChild(saunaPants);

var hugMePill = document.createElement("IMG");
hugMePill.id = "hugMePillow";
hugMePill.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/736x/c2/e0/e1/c2e0e12c1b85d6f094a1cf952edb2971--sleeping-beauty-snuggles.jpg");
document.body.appendChild(hugMePill);


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}


