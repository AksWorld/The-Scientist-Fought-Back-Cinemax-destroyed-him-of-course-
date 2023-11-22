song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
leftWristY=0;
function preload(){
    song1=loadSound("Bang.mp3");
    song2=loadSound("That's An Idiom.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("McModel Ready For Customer")
}

function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}