var roll = document.getElementById("roll");
var images= [
    "IMGS/film1.png",
    "IMGS/film2.png",
    "IMGS/film3.png",
    "IMGS/film4.png",
    "IMGS/film5.png",
    "IMGS/film6.png",
    "IMGS/film7.png",
];

var image = [
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img"),
    document.createElement("img")
];

var index = 0;
var indeximages = [0, 1, 2, 3, 4, 5, 6];
var aux;

for (index; index < 5; index ++){
    image[index].src = images[index];
    image[index].classList.add("dynamic-image");

    roll.appendChild(image[index]);
};

index = 0;

function imageturn() {
    for (index; index < 7; index ++){
        if (index < 6){
            aux = indeximages[index];
            indeximages[index] = indeximages[index+1];
            indeximages[index+1] = aux;

            image[index].src = images[indeximages[index]];
        }

        else {
            aux = indeximages[index];
            indeximages[index] = indeximages[6];
            indeximages[6] = aux;

            image[index].src = images[indeximages[index]];
        }
    }

    index = 0;
    
    setTimeout(imageturn, 3000);
}

imageturn();
