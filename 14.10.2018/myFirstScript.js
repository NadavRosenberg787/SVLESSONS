{
    //var mainArray = [15,50,30,15,50,30]
    //document.getElementById("theseAreTheNumbers787").innerHTML +="<br>" + mainArray;
    /* finding best AVG
    var result = bestAVG(true,mainArray);
    if (result == 0){
        document.getElementById("theseAreTheNumbers787").innerHTML+= "<br>" + "both AVG's are equal";
    }else if (result == 1){
        document.getElementById("theseAreTheNumbers787").innerHTML+= "<br>" + "first AVG is bigger";
    }else if (result ==2){
        document.getElementById("theseAreTheNumbers787").innerHTML+= "<br>" + "second AVG is bigger";
    }
    */

    function isMatched(){
        var isMatched = matchFunc();
        if (isMatched){
            document.getElementById("matchP787").innerHTML="Strings MATCH!"
        }else{
            document.getElementById("matchP787").innerHTML="Strings dose NOT-MATCH!"
        }
    }

    function bestAVG(higher,newArray){
        var result = 0;

        var arrayLength = newArray.length;
        var firstAVG = 0;
        var secondAVG = 0;
        var firstCounter = 0;
        var secondCounter = 0;
        for (var i = 0; i< arrayLength; i++){
            if (i< arrayLength/2){
                firstAVG += newArray[i];
                firstCounter++;
            }else{
                secondAVG += newArray[i];
                secondCounter++;
            }
        }

        firstAVG = firstAVG / firstCounter;
        secondAVG = secondAVG / secondCounter;

        if (firstAVG > secondAVG){
            return 1;
        }else if (secondAVG > firstAVG){
            return 2;
        }else if (firstAVG == secondAVG){
            return 0;
        }
    }

    function matchFunc(){
      //  debugger;
        var string1 = document.getElementById("firstStringInput787").value;
        var string2 = document.getElementById("secondStringInput787").value;

        if (string1.length > string2.length){
            return false;
        }

        var newArray1 = Array.from(string1);
        var newArray2 = Array.from(string2);
        var newArray1C = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var newArray2C = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        for (var i= 0; i < newArray1.length; i ++){
            var thisChar = newArray1[i];
            newArray1C[thisChar-97] ++;
        }

        for (var i=0; i < newArray2.length; i++){
            var thisChar = newArray2[i];
            newArray2C[thisChar-97] ++;
        }

        var match = true;
        for (var i =0; i < newArray1C.length;i++){
            if (newArray1C[i]!=newArray2C[i]){
                match = false;
                return false;
            }
        }

        return match;
        
    }

    var secArray =[[0,0,0][0,0,0]];
    var counterRow = 0;
    var counterCol = 0;
    var finished = false;
    function addANumber(){
        if (counterRow>2 && counterCol==2){
            var biggest = -1000000;
            for (var i = 0; i < 3; i++){
                for (var j = 0; j < 3; j ++){
                    if (secArray[i][j]>biggest){
                        biggest=secArray[i][j];
                    }
                }
            }
            document.getElementById("biggestNumber787").innerHTML=biggest;
            return false;
        }
        var newNumber = parseInt(document.getElementById("inputNumber787").value);
        secArray[i,j] = newNumber;
        counterCol++;
        if (counterCol>2){
            counterRow++;
            counterCol = 0;
        }
    }

    var bestArray=[[15,20,160],[22,55,66],[22,55,32]];
    biggestRow();
    function biggestRow(){

        biggestRowNum=-1;
        biggestSum = 0;
        for (var i =0;i<bestArray.length;i++){
            var sum = 0;
            for (var j=0;j<bestArray[i].length;j++){
                sum += bestArray[i][j];
            }
            if (biggestSum < sum){
                biggestSum = sum;
                biggestRowNum = i;
            }
        }

        

        document.getElementById("biggestRow").innerHTML=biggestRowNum;
    }
}