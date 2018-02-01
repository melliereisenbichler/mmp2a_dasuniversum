function solution(){ 
    //calculate correct score
    var correctAnswers = 0;          
    for(var i = 1; i <= 5; i++) {
        var question =  document.getElementById('q'+i);
        var radios = document.getElementsByName('group'+i);
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                correctAnswers++;
                radio.style.border = "2px solid #039403";
                question.style.border = "2px solid #039403";
            }
            if(radio.value != "correct" && radio.checked) {
                radio.style.border = "2px solid red";
                question.style.border = "2px solid red";
            }
             //disable all not-checked answers
            if(radio.checked == false){
                radio.disabled = true;
            }
        }
    }                   
    console.log("Correct Responses: " + correctAnswers);
    //add correct store to that paragraph
    var p = document.getElementById("addstuff");
    var score = correctAnswers + "/5";
    p.innerHTML += score;
    //make score-section visible
    document.getElementById("score").style.visibility = "visible";

    document.getElementById("head").innerHTML = "Auflösung";

}

function hide_button(){
    document.getElementById("sub").style.visibility = "hidden";
    document.getElementById("sub2").style.visibility = "visible";

}