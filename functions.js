
//array to allow looping of keypress animations
var circles = [];

//
function onKeyDown(event) {
    
    //prevent keypress not defined in data.js from crashing page
    if (keyData[event.key]) {

        //create random point based on window size on each keypress
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;

        //create new circle object based on key pressed in event
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();

        //need to push to circle array for animation to work properly
        circles.push(newCircle)
    }
}

//animate circle object function
function onFrame() {
    for (var i = 0; i < circles.length; i++) {

        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);

        //remove circle from array after animation to preserve memory.
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
        }
    }
}