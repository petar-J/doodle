let scale = 5;
let lowerBound = 5;
let upperBound = 250;
let looping = true;
let forward = true;

var slider = document.getElementById('range');

slider.oninput = function(){
    scale = parseInt(slider.value);
    looping = false;
}

function setup(){
    createCanvas(500,500);
    noFill();
    stroke(0);

}

function draw(){
    background(190);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    if (scale>=lowerBound && scale<=upperBound){
        for(let i = 0; i<height/2; i+=scale){
            line(width/2, i, width/2-i, height/2);
            line(width/2, i, width/2+i, height/2);
            line(width/2, height-i, width/2-i, height/2);
            line(width/2, height-i, width/2+i, height/2);
        }
    }
    if (looping) {
        
        if (forward){
            scale++;
            if (scale>upperBound){forward = false;}
        }else{
            scale--;
            if (scale<lowerBound){forward = true;}
        }
    } else{
    scale = limit(scale, lowerBound, upperBound);
    }
}

function limit(x, a, b){
    if ( x < a ){
        x = a;
    } else if ( x > b ){
        x = b;
    }
    return x;
}