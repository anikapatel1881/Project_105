Webcam.attach('#camera');

Webcam.set({ 
    width: 350, 
    height: 350, 
    image_format:'png', 
    png_quality: 90 
}); 

camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+' " />';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wmeoKL8WY/model.json',modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else {
        document.getElementById("result_face_image").innerHTML = results[0].label;
        document.getElementById("result_of_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
} 