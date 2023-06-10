const navbar = document.getElementById("navbar");
const blockbar = document.getElementById("blockbar");
var blur = document.getElementById("blur");
var blurpop = document.getElementById("blurpop");
var faqbutton = document.getElementById("faqbutton");
var faqbuttonbar = document.getElementById("faqbuttonbar");
var popup = document.getElementById("faq");
var exit = document.getElementById("exit");

navbar.addEventListener("click", function(){
    if (navbar.style.marginRight === ""){
        navbar.style.marginRight = "172px";
        blockbar.style.marginRight = "0px";
        blur.style.backdropFilter = "blur(8px)";
        blur.style.display = "flex";
    }

    else {
        navbar.style.marginRight = "";
        blockbar.style.marginRight = "-200px";
        blur.style.backdropFilter = "blur(0px)";
        blur.style.display = "none";
    }
});

window.addEventListener("resize", function() {
    if (window.innerWidth >= 1116) {
        navbar.style.marginRight = "";
        blockbar.style.marginRight = "";
        blur.style.backdropFilter = "blur(0px)";
        blur.style.display = "none";
    }
});

document.getElementById("infranet").addEventListener("click", function(){
    window.location.href = "index.html";
});

addEventListener("click", function(event) {
    if (blockbar.style.marginRight === "0px"){
        var botaoX = event.clientX;
    }
    
    if (botaoX < window.innerWidth - 200) {
        navbar.style.marginRight = "";
        blockbar.style.marginRight = "-200px";
        blur.style.backdropFilter = "blur(0px)";
        blur.style.display = "none";
    }
});

faqbutton.addEventListener("click", function(){
    if (popup.style.display === "flex"){
        popup.style.display = "none";
    }
    
    else {
        popup.style.display = "flex";
        blurpop.style.backdropFilter = "blur(8px)";
        blurpop.style.display = "flex";
        document.body.style.overflowY = 'hidden';
    }
});

faqbuttonbar.addEventListener("click", function(){
    if (popup.style.display === "flex"){
        popup.style.display = "none";
    }
    
    else {
        popup.style.display = "flex";
        blurpop.style.backdropFilter = "blur(8px)";
        blurpop.style.display = "flex";
        document.body.style.overflowY = 'hidden';
        navbar.style.marginRight = "";
        blockbar.style.marginRight = "-200px";
        blur.style.backdropFilter = "blur(0px)";
        blur.style.display = "none";
        window.scrollTo(0, 0);
    }

    navbar.style.marginRight = "-300px";
});

exit.addEventListener("click", function(){
    if (popup.style.display === "flex"){
        navbar.style.marginRight = "";
        popup.style.display = "none";
        blurpop.style.backdropFilter = "blur(0px)";
        blurpop.style.display = "none";
        document.body.style.overflowY = 'visible';
    }
});