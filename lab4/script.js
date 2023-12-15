document.addEventListener("DOMContentLoaded", function() {
    var elementEight = document.getElementById("eight");
    var elementNine = document.querySelector("#nine");

    var eightBgColor = "purple";
    var eightTextColor = "orange";
    var eightClicked = false;

    var nineBgColor = "blue";
    var nineTextColor = "yellow";
    var nineClicked = false;

    elementEight.addEventListener("click", function() {
        if (!eightClicked) {
            elementEight.style.backgroundColor = eightBgColor;
            elementEight.style.color = eightTextColor;
            eightClicked = true;
        } else {
            swapColors();
            applyColors();
        }
    });

    elementNine.addEventListener("click", function() {
        if (!nineClicked) {
            elementNine.style.backgroundColor = nineBgColor;
            elementNine.style.color = nineTextColor;
            nineClicked = true;
        } else {
            swapColors();
            applyColors();
        }
    });

    function swapColors() {
        var tempBgColor = eightBgColor;
        var tempTextColor = eightTextColor;
        eightBgColor = nineBgColor;
        eightTextColor = nineTextColor;
        nineBgColor = tempBgColor;
        nineTextColor = tempTextColor;
    }

    function applyColors() {
        elementEight.style.backgroundColor = eightBgColor;
        elementEight.style.color = eightTextColor;
        elementNine.style.backgroundColor = nineBgColor;
        elementNine.style.color = nineTextColor;
    }

    var imageCounter = 0;

    var addImageButton = document.getElementById("addImage");
    var increaseImageButton = document.getElementById("increaseImage");
    var decreaseImageButton = document.getElementById("decreaseImage");
    var deleteImageButton = document.getElementById("deleteImage");

    function addImage() {
        imageCounter++;
        var newImage = document.createElement("img");
        newImage.src = "https://www.poland.travel/images/ru-RU/Miasta/krakow_rynek_2_1170.jpg";
        newImage.alt = "нове_зображення_" + imageCounter;
        newImage.id = "image" + imageCounter;
        document.body.appendChild(newImage);
    }

    function increaseImageSize() {
        var currentImage = document.querySelector("img");
        if (currentImage) {
            var currentWidth = currentImage.width;
            var currentHeight = currentImage.height;
            currentImage.style.width = currentWidth * 1.2 + "px";
            currentImage.style.height = currentHeight * 1.2 + "px";
        }
    }

    function decreaseImageSize() {
        var currentImage = document.querySelector("img");
        if (currentImage) {
            var currentWidth = currentImage.width;
            var currentHeight = currentImage.height;
            currentImage.style.width = currentWidth / 1.2 + "px";
            currentImage.style.height = currentHeight / 1.2 + "px";
        }
    }

    function deleteImage() {
        var currentImage = document.querySelector("img");
        if (currentImage) {
            currentImage.parentNode.removeChild(currentImage);
        }
    }

    addImageButton.addEventListener("click", addImage);
    increaseImageButton.addEventListener("click", increaseImageSize);
    decreaseImageButton.addEventListener("click", decreaseImageSize);
    deleteImageButton.addEventListener("click", deleteImage);
});
