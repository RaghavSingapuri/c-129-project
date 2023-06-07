song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
   song = loadSound("music.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video , modelLoaded);
	poseNet.on('pose',gotPoses); 
}

function modelLoaded () {
	console.log('PoseNet is initialized')
}
	
function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		console.log("leftWristx = " + leftWristX + "leftWristY" + leftWristY);
		
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = reesults[0].pose.rightWristY.y;
		console.log("rightWristX =" + rightWristX + " rightWristY" + rightWristY);
		
	}
}

function draw() {
	image(video, 0, 0, 600, 500);

	Fill("#FF0000");
	stroke("#FF0000");
	
	if(scoreLeftWrist > 0) {
    circle(leftWristX , leftWristY , 20);
	inNumberleftWristY = Number(leftWristY);
	new_leftWristY = floor(inNumberleftWristY*2);
	leftWristY_divide_1000 = new_leftWristY/1000;
	document.getElementById("volume").innerHTML = "Volume =" + leftWristY_divide_1000;
	song.setVolume(leftWristY_divide_1000);
	}
}

function play()
{
	song.play();
	rate(1);
    song.setvolume(1);
    
}
