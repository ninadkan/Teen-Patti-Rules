const toRadians = (degrees, precision = 2) => {
    return parseFloat(((parseFloat(degrees) * Math.PI) / 180).toFixed(precision));
};

const mapNumberImageId = new Map([
    ["1", "img_ace_of_spades"],
    ["2", "img_ace_of_hearts"],
    ["3", "img_ace_of_diamonds"],
    ["4", "img_ace_of_clubs"],
    ["5", "img_king_of_spades"],
    ["6", "img_king_of_hearts"],
    ["7", "img_king_of_diamonds"],
    ["8", "img_king_of_clubs"],
    ["9", "img_queen_of_spades"],
    ["10", "img_queen_of_hearts"],
    ["11", "img_queen_of_diamonds"],
    ["12", "img_queen_of_clubs"],
    ["13", "img_jack_of_spades"],
    ["14", "img_jack_of_hearts"],
    ["15", "img_jack_of_diamonds"],
    ["16", "img_jack_of_clubs"],
    ["17", "img_10_of_spades"],
    ["18", "img_10_of_hearts"],
    ["19", "img_10_of_diamonds"],
    ["20", "img_10_of_clubs"],
    ["21", "img_9_of_spades"],
    ["22", "img_9_of_hearts"],
    ["23", "img_9_of_diamonds"],
    ["24", "img_9_of_clubs"],
    ["25", "img_8_of_spades"],
    ["26", "img_8_of_hearts"],
    ["27", "img_8_of_diamonds"],
    ["28", "img_8_of_clubs"],
    ["29", "img_7_of_spades"],
    ["30", "img_7_of_hearts"],
    ["31", "img_7_of_diamonds"],
    ["32", "img_7_of_clubs"],
    ["33", "img_6_of_spades"],
    ["34", "img_6_of_hearts"],
    ["35", "img_6_of_diamonds"],
    ["36", "img_6_of_clubs"],
    ["37", "img_5_of_spades"],
    ["38", "img_5_of_hearts"],
    ["39", "img_5_of_diamonds"],
    ["40", "img_5_of_clubs"],
    ["41", "img_4_of_spades"],
    ["42", "img_4_of_hearts"],
    ["43", "img_4_of_diamonds"],
    ["44", "img_4_of_clubs"],
    ["45", "img_3_of_spades"],
    ["46", "img_3_of_hearts"],
    ["47", "img_3_of_diamonds"],
    ["48", "img_3_of_clubs"],
    ["49", "img_2_of_spades"],
    ["50", "img_2_of_hearts"],
    ["51", "img_2_of_diamonds"],
    ["52", "img_2_of_clubs"],
    ["60", "img_black_joker"],
    ["61", "img_red_joker"],
    ["62", "img_brown"],
    ["63", "img_blue"],
    ["64", "img_grey"],
    ["70", "img_greater_than"],
    ["71", "img_greater_than_than_than"],
    ["72", "img_equal"]
]);

function iterateAndDrawImages() {
    const canvasItems = document.getElementsByTagName("canvas");

    for (var i = 0; i < canvasItems.length; i++) {
        var ctx = canvasItems[i].getContext("2d");
        var canvas = canvasItems[i];
        console.log(canvas.innerHTML);
        imageIndexes = canvas.innerHTML.split(',');
        console.log(imageIndexes.length);
        if (imageIndexes.length == 3) {
            var img1 = document.getElementById(mapNumberImageId.get(imageIndexes[0]));
            var img2 = document.getElementById(mapNumberImageId.get(imageIndexes[1]));
            var img3 = document.getElementById(mapNumberImageId.get(imageIndexes[2]));
            drawImageScaled(img1, img2, img3, ctx);
        }
        else if (imageIndexes.length == 1) {
            var img4 = document.getElementById(mapNumberImageId.get(canvas.innerHTML));
            drawOneImageOnCanvas(img4, ctx);
        }
        else if (imageIndexes.length == 5) {
            var img1 = document.getElementById(mapNumberImageId.get(imageIndexes[0]));
            var img2 = document.getElementById(mapNumberImageId.get(imageIndexes[1]));
            var img3 = document.getElementById(mapNumberImageId.get(imageIndexes[2]));
            var img4 = document.getElementById(mapNumberImageId.get(imageIndexes[3]));
            var img5 = document.getElementById(mapNumberImageId.get(imageIndexes[4]));
            drawFiveImageScaled(img1, img2, img3, img4, img5, ctx);
        }
        else if (imageIndexes.length == 4) {
            var img1 = document.getElementById(mapNumberImageId.get(imageIndexes[0]));
            var img2 = document.getElementById(mapNumberImageId.get(imageIndexes[1]));
            var img3 = document.getElementById(mapNumberImageId.get(imageIndexes[2]));
            var img4 = document.getElementById(mapNumberImageId.get(imageIndexes[3]));
            drawFourImageScaled(img1, img2, img3, img4, ctx);
        }
    }
}

function drawOneImageOnCanvas(img, ctx) {
    var canvas = ctx.canvas;
    console.log("Image width = " + img.width + " Image Height  = " + img.height);
    var centerShift_x = (canvas.width - img.width) / 2;
    console.log("Center Shift X = " + centerShift_x);
    var centerShift_y = (canvas.height - img.height) / 2;
    console.log("Center Shift Y = " + centerShift_y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(centerShift_x, centerShift_y);
    ctx.drawImage(img, -0, -0, img.width, img.height);
    ctx.translate(-centerShift_x, -centerShift_y);
}

function drawImageScaled(img1, img2, img3, ctx, text = "") {
    var canvas = ctx.canvas;
    img1.style = "border: 3px solid black";
    console.log("Image width = " + img1.width + " Image Height  = " + img1.height);
    var centerShift_x = (canvas.width - img1.width) / 2;
    console.log("Center Shift X = " + centerShift_x);
    var centerShift_y = (canvas.height - img1.height) / 2;
    console.log("Center Shift Y = " + centerShift_y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas width = " + canvas.width + " ; Height =" + canvas.height);
    var degrees = 30;
    var rotationInRadians = toRadians(degrees);

    console.log("Rotation in radians = " + rotationInRadians);
    yOffset = Math.cos(rotationInRadians) * img1.height;
    console.log("yOffset = " + yOffset);


    ctx.translate(centerShift_x, ((centerShift_y + img1.height)));
    ctx.rotate(-rotationInRadians);
    ctx.drawImage(img1, 0, -yOffset, img1.width, img1.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, -yOffset, img1.width, img1.height);
    ctx.rotate(rotationInRadians);
    ctx.translate(-centerShift_x, -((centerShift_y + img1.height)));

    ctx.translate(centerShift_x, centerShift_y);
    ctx.drawImage(img2, -0, -0, img2.width, img2.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, img2.width, img2.height);
    ctx.translate(-centerShift_x, -centerShift_y);

    ctx.translate(centerShift_x, ((centerShift_y + img3.height)));
    ctx.rotate(rotationInRadians);
    ctx.drawImage(img3, 0, -(img3.height + centerShift_y / 2), img3.width, img3.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, -(img3.height + centerShift_y / 2), img3.width, img3.height);
    ctx.rotate(-rotationInRadians);
    ctx.translate(-centerShift_x, -((centerShift_y + img3.height)));
}

function rotateImageLeft(img, ctx, degrees, centerShift_x, centerShift_y) {
    var rotationInRadians = toRadians(degrees);
    console.log("Rotation in radians = " + rotationInRadians);
    yOffset = Math.cos(rotationInRadians) * img.height;
    console.log("yOffset = " + yOffset);
    ctx.translate(centerShift_x, ((centerShift_y + img.height)));
    ctx.rotate(-rotationInRadians);
    ctx.drawImage(img, 0, -yOffset, img.width, img.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, -yOffset, img.width, img.height);
    // reset
    ctx.rotate(rotationInRadians);
    ctx.translate(-centerShift_x, -((centerShift_y + img.height)));
}

function rotateImageRight(img, ctx, degrees, centerShift_x, centerShift_y) {
    var rotationInRadians = toRadians(degrees);
    console.log("Rotation in radians = " + rotationInRadians);

    ctx.translate(centerShift_x, ((centerShift_y + img.height)));
    ctx.rotate(rotationInRadians);
    ctx.drawImage(img, 0, -(img.height + centerShift_y / 2), img.width, img.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, -(img.height + centerShift_y / 2), img.width, img.height);
    // reset 
    ctx.rotate(-rotationInRadians);
    ctx.translate(-centerShift_x, -((centerShift_y + img.height)));
}

function drawImageCentre(img, ctx, centerShift_x, centerShift_y) {
    ctx.translate(centerShift_x, centerShift_y);
    ctx.drawImage(img, -0, -0, img.width, img.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, img.width, img.height);
    // reset
    ctx.translate(-centerShift_x, -centerShift_y);
}

function drawFourImageScaled(img1, img2, img3, img4, ctx, text = "") {
    var canvas = ctx.canvas;
    img1.style = "border: 3px solid black";
    console.log("Image width = " + img1.width + " Image Height  = " + img1.height);
    var centerShift_x = (canvas.width - img1.width) / 2;
    console.log("Center Shift X = " + centerShift_x);
    var centerShift_y = (canvas.height - img1.height) / 2;
    console.log("Center Shift Y = " + centerShift_y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas width = " + canvas.width + " ; Height =" + canvas.height);

    rotateImageLeft(img1, ctx, 45, centerShift_x, centerShift_y);
    rotateImageLeft(img2, ctx, 22, centerShift_x, centerShift_y);

    drawImageCentre(img3, ctx, centerShift_x, centerShift_y);

    rotateImageLeft(img4, ctx, -22, centerShift_x, centerShift_y);
}

function drawFiveImageScaled(img1, img2, img3, img4, img5, ctx, text = "") {
    var canvas = ctx.canvas;
    img1.style = "border: 3px solid black";
    console.log("Image width = " + img1.width + " Image Height  = " + img1.height);
    var centerShift_x = (canvas.width - img1.width) / 2;
    console.log("Center Shift X = " + centerShift_x);
    var centerShift_y = (canvas.height - img1.height) / 2;
    console.log("Center Shift Y = " + centerShift_y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas width = " + canvas.width + " ; Height =" + canvas.height);

    rotateImageLeft(img1, ctx, 25, centerShift_x, centerShift_y);
    rotateImageLeft(img2, ctx, 11, centerShift_x, centerShift_y);

    drawImageCentre(img3, ctx, centerShift_x, centerShift_y);

    rotateImageLeft(img4, ctx, -12, centerShift_x, centerShift_y);
    rotateImageLeft(img5, ctx, -23, centerShift_x, centerShift_y);
}

// invoke the function

window.addEventListener('load', function () {
    iterateAndDrawImages();
    // Collapsible logic
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
})
