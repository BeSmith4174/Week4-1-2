//start() function for the start button
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}



//stop() function for the stop button
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

}


//same function but made more efficent with loops, included is change order request.
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {

        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else if (i > 5 && i != 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "warning less than half way to launch,timeleft =" + count;
                count--;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
                count--;
            }, 1000 * i);
        }
    }
}


//same function but made more efficent with loops
function countDownV2() {
    var count = 10;
    //this sets how my count will be between 1 and 10
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            //this identifies 10 as my starting point
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
            //numbercount represented in miliseconds
        }, 1000 * i);
    }
    setTimeout(function () {
        //this identifies Blastoff as my stopping point
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        count--;
        //numbercount represented in miliseconds
    }, 11000 * i);


}






function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create the varience of the sum of 2 variables
    var sum;
    // rounds random generated number for die1 to the nearest whole number
    die1 = Math.ceil(Math.random() * 6);
    // rounds random generated number for die2 to the nearest whole number
    die2 = Math.ceil(Math.random() * 6);
    // shows that die1 and die2 will be used to determine the sum 
    sum = die1 + die2;
    // this line takes the number rolled for dice1 and displays it  
    document.getElementById("die1Res").innerHTML = die1;
    // this line takes the number rolled for dice2 and displays it 
    document.getElementById("die2Res").innerHTML = die2;
    // determines the sum of both die and displays it
    document.getElementById("sumRes").innerHTML = sum;

    // this line sets the parameters for what numbers cause a loss
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You Loose!";
    }
    // this line sets parameters on what numbers win
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles, you win!!";
        // this line tells the user to reroll 
    } else {
        document.getElementById("crapsResults").innerHTML = "Push. Please roll again.";
    }

    //to play a specific sound
    // im missing something that declares the playStation as a global variable atm its just in the local handler function 
    function playStation() {
        mySound = new sound("us-lab-background.mp3");
        mySound.play();
    }
    //to play any sound.. defines its an audio based element, display contols 

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "audio");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        //function to play sound
        this.play = function () {
            this.sound.play();
        }
        // function to pause sound
        this.stop = function () {
            this.sound.pause();
        }





    }

}

















