function setup()
{
    canvas=createCanvas(230, 230);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classfier= ml5.imageClassifier("",modelLoaded);
}

function draw()
{
    image(video, 0, 0, 230, 230);
    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log('modelLoaded')
}


function gotresult()
{
    if (error)
    {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.tofixed(3)
    }
}