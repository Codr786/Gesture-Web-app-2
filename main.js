Webcam.set({
    height:300,
    width:350,
    Image_format:'png',
    png_quality:95,
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captured_gesture" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassisifer('https://teachablemachine.withgoogle.com/models/hqudlsUVc/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The GESTURE IS "+ update_gesture;
    var utterThis = SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}