function setup()
{
video= createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose, gotPoses');
}
function draw() {
    background('#00FFFF');
    fill('#5c060c');
    stroke('5c060c');
    square(noseX, noseY, 100);
}
function modelLoaded() {
    console.log('PoseNet is Initialized!');

}
function gotPoses(results) {
}
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);
}
noseX=0
noseY=0;
function preload() {

}


