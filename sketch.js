stars = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < 32; i++) {
        stars.push(new Star(randint(max_size)));
    }
}

function draw() {
    background("#001536");
    for (var i = 0; i < stars.length; i++) {
        stars[i].show();
    }
}
