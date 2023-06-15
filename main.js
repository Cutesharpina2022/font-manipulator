noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(550,400);
    canvas.position(650,250);
    video = createCapture(VIDEO);
    video.size(550,550);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('purple');
    fill('#800000');
    stroke('#800000');
    textSize(difference);
    text("Lia",200 , 200);
    document.getElementById("result").innerHTML = "width and height of square will be = " + difference + " px";
}

function gotPoses(results){
    if(results.length  > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +noseX+ "noseY =" + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX =" +leftwristX+ " rightwrist = " +rightwristX+ "difference = " +difference);
    }
}

function modelLoaded(){
console.log("poseNet is initialized");
}

