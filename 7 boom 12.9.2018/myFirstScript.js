{
    
    var newStage = 0;
    var newGame = 1;
    var currentLevel = 0;
    var currentInterval = 0;
    var currentLevelInterval = 0;
    var last7Clicked = 0;
    var gameSpeedMs =900; // speed in milliseconds , this is the maximum value for delay per number
    var gameDifficultyMS = 90; // the amount of milliseconds deleted between delays per level
    var scoreElement = document.getElementById("scoreButton787");
  
    var isMusicPlaying = false;
    var musicCurrentTime = 0;

    var isSevenNow = false;

    // before release bonus
    // Auto changing Tips

    var currentTip = 1;
    var TIP1 = "Remember to hit all 7s even one is too much for the system to handle.";
    var TIP2 = "After the last upgrade the system takes the digits and adds them! "
    var TIP3 = "16 = 1 + 6 = 7 ! Only the best can reach 70!"

    window.setInterval(changeTip,4000);

    function changeTip(){
        currentTip++;
        if (currentTip>3){
            currentTip = 1;
        }
        var element = document.getElementById("tipTextP787");
        if (currentTip == 1){
            element.innerHTML=TIP1;
        }else if (currentTip == 2){
            element.innerHTML=TIP2;
        }else if (currentTip==3){
            element.innerHTML=TIP3;
        }
    }

    function playPauseMusic(){
        var audio = document.getElementById("backgroundMusic787");
        if (!isMusicPlaying){
            // play music in a loop
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            audio.currentTime = musicCurrentTime;
            audio.volume = 1;
            audio.play();
            isMusicPlaying= true;
        }else{
            // stop or pause music and pause the loop
            audio.pause();
            musicCurrentTime = audio.currentTime;
            isMusicPlaying = false;
        }  

    }

    function startPauseGame(){
    
        //var currentStage = document.getElementById("hiddenBoleanElement").value;
        newStage = 1 - newStage;
        if (newStage==0){
            if (newGame==2){
                window.clearInterval(currentInterval);
                window.clearInterval(currentLevelInterval);
                document.getElementById("playPauseImg787").src="images/playbutton.png";
            }
        }else if (newStage==1){
            // start the game or resume it
            // start the game
            if (newGame==1){
                resetGame();
                last7Clicked=0;
                document.getElementById("playPauseImg787").src="images/pausebutton.png";
                if (currentInterval==0){

                }else{
                window.clearInterval(currentInterval);
                }

                if (currentLevelInterval==0){

                }else{
                    window.clearInterval(currentLevelInterval);
                }
                currentLevelInterval = window.setTimeout(incLevel,300);     
                currentLevelInterval = window.setInterval(incLevel,7000);
                document.getElementById("mainNumberHeaderText787").innerHTML=0;
                newGame=2;
                
            }else if (newGame==2){ // resume it
                document.getElementById("playPauseImg787").src="images/pausebutton.png";
                resumeLevel();
            }
        }
        
    }

    function incLevel(){
        if (currentInterval!=0){
            window.clearInterval(currentInterval);
        }
        currentLevel++;
        currentInterval = window.setInterval(incFunction,gameSpeedMs - (gameDifficultyMS*currentLevel));
    }

    function resumeLevel(){
        
        if (currentInterval!=0){
            window.clearInterval(currentInterval);
        }
        currentInterval = window.setInterval(incFunction,gameSpeedMs - (gameDifficultyMS*currentLevel));
    }

    function incFunction(){
        var currentNumber = document.getElementById("mainNumberHeaderText787").innerHTML;
        var currentRealNumber = parseInt(currentNumber);
        currentRealNumber++;
        document.getElementById("mainNumberHeaderText787").innerHTML=currentRealNumber;
        var audio = document.getElementById("tickSound787");
        audio.play();
        checkForSeven();
        
    }

    function animateScoreButton(){
       
        scoreElement = document.getElementById("scoreButton787");
        scoreTextElement = document.getElementById("scoreText787");
        startScalingPop(scoreElement);
   

        window.setTimeout(cleanClassFromScoreElement,250);

    }

    function cleanClassFromScoreElement(){
        scoreElement = document.getElementById("scoreButton787");
        scoreElement.classList.remove("animateScalePop");
    }

    function startScalingPop(element){
        
        element.classList.add("animateScalePop");
    }

    function checkForSeven(){
    
        elementMainNumber = document.getElementById("mainNumberHeaderText787");
        var thisNumber = elementMainNumber.innerHTML;
        var thisNumberI = parseInt(thisNumber);
   
        if (thisNumberI%7==0){
       
            isSevenNow= true;
            currentSevenListener = window.setTimeout(forceDoubleCheck,600);
           // alert("7");
        }else if (thisNumberI%10==7){
      
            isSevenNow = true;
            currentSevenListener = window.setTimeout(forceDoubleCheck,600);
        }else if (thisNumberI > 10 && thisNumberI/10==7){
            isSevenNow = true;
            currentSevenListener = window.setTimeout(forceDoubleCheck,600);
        }else if (thisNumberI > 10 && ((Math.floor(thisNumberI/10))+(thisNumberI%10))==7){
            isSevenNow = true;
            currentSevenListener = window.setTimeout(forceDoubleCheck,600);
        }else{
            //not a seven
        }

        if (thisNumberI==16){ // induvidual animation script for the number 16, as the user needs to be reminded about 1 + 6 = 7 ohh no.
    
        }
    
    }

    function addChar(thisElement,newChar ){
        thisElement.innerHTML+=newChar;
    }
    function addText(thisElement,newText){
        thisElement.innerHTML=newText;
    }

    function forceDoubleCheck(){
        if (isSevenNow){
            gameOver();
        }
    }

    function gameOver(){
        window.clearInterval(currentInterval);
        window.clearInterval(currentLevelInterval);
        newGame = 1;
        newStage=0;
        var textElement = document.getElementById("mainNumberHeaderText787");
        textElement.innerHTML="";
        textElement.style.display="none";
        textElement = document.getElementById("gameOverTryAgain787");
        textElement.innerHTML="Game Over.<br>Try Again ?";
        document.getElementById("playPauseImg787").src="images/playbutton.png";
    }

    function userClick(){

        // first check if 7 is presented:
        var thisNumber = document.getElementById("mainNumberHeaderText787").innerHTML;
        var thisNumberI = parseInt(thisNumber);
      
        if (thisNumberI>last7Clicked){
            if (isSevenNow){
                incScore();
                window.clearTimeout(currentSevenListener);
                last7Clicked= thisNumberI;
            }else{
               gameOver();
                /*
                
                textElement.classList.add("resizeMainNumberHeader787");
                
                // game restarts as user clicked but not on a 7.
                */
            }
            
            // if still seven NOW then game over cause the user has lost a seven
        }
    }

    function incScore(){
        document.getElementById("applauseSound787").play();
        
        var current = parseInt(document.getElementById("scoreText787").innerHTML);
        current++;
        document.getElementById("scoreText787").innerHTML=current;
        animateScoreButton();
        isSevenNow = false;
    }

    function resetGame(){
        window.clearInterval(currentInterval);
        window.clearInterval(currentLevelInterval);
        currentLevel=0;
        
        last7Clicked=0;
        document.getElementById("scoreText787").innerHTML="0";
        document.getElementById("mainNumberHeaderText787").style.display="block";
        document.getElementById("gameOverTryAgain787").innerHTML="";

        
    }

    function start7Boom(){
        var i = 0;
        var newString = "";
        while (i<100){
            if (i>9){
                if (i%10==7){
                    newString += "Boom\n";
                }else if(i%7==0){
                    newString += "Boom\n";
                }else{
                    newString += i.toString() + "\n";
                }
            }else{
                if (i%7 == 0){
                    newString += "Boom\n";
                }else{
                    newString += i.toString() + "\n";
                }
            }
            i++;
        }
        document.getElementById("boomAnswer").innerHTML=newString;
    }

}