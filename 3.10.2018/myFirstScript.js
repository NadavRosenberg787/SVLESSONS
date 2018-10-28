{
    var times = 0;
    var arr =[1,1,2,2,2,9,2,1];

    function pow2(originNum,timesPow){
        var num = 0;
        for (var i = 1; i <= timesPow; i++){
            num += num*originNum;
        }
        return num;
    }

    function sqrt2(originNum){
        
    }
    function checkWhatToDo(){
        
        /*
        var arr1=[0,0,0,0,0,0,0,0,0,0];
        var newIndex = 0;
        for (var i = 0; i < arr.length; i++){
            arr1[arr[i]]++;
        }

        var newString = "";
        for (i = 0; i < arr1.length; i++){
            newString+= i.toString() + ":" + arr1[i] + ",";
        }
        document.getElementById("textOutput").innerHTML=newString;
        */
        /*
        var thisNum=document.getElementById("inputNumber").value;
        var counter = 0;
        for (var i = 0; i < arr.length; i++){
            if (thisNum==arr[i]){
                counter++;
            }
        }
        var string1 = "The number found " + counter.toString() + " times";
        document.getElementById("textOutput").innerHTML=string1;
        /*
        arr[times]=document.getElementById("inputNumber").value;
        document.getElementById("inputNumber").value="";
        times++;
        if (times>4){
            var newString = "";
            var i = 0;
            for (i=0; i<times; i ++){
                newString+= arr[i];
            }
            newString = flipNumber(newString);
            document.getElementById("textOutput").innerHTML=newString;
        }
        */
    }

    function flipNumber(string){
        var i = 0;
        var length = string.length;
        var newString = "";
        for (i=0; i < length ; i ++){
            newString+= string.charAt(length-1-i);
        }
        return newString;
    }
}