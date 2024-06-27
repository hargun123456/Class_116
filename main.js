noseX = 0;
noseY = 0;

function preload() {
    clownImg = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
   canvas = createCanvas(300,300);
   canvas.center();

  vedio = createCapture(VIDEO);
  vedio.size(300, 300);
  vedio.hide();

  posenet = ml5.poseNet(vedio, modelLoaded);
  posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Hi poseNet is Enabled');
}



function gotPoses(results) {
 if (results.length>0){
  console.log(results);
  noseX = results[0].pose.nose.x-15;
  noseY = results[0].pose.nose.y-5;
 }
}

function draw() {
    image(vedio, 0, 0, 300, 300);
    image(clownImg, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('MyFilterImage.jpg');
}