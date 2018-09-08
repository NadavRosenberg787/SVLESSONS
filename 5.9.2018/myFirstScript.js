{

    // Fucntions lesson.
/*
    alertHellowWorld("Hello");
    alertHellowWorld("Kitty");
    alertHellowWorld("How are you!");

    function alertHellowWorld(newString){
        alert(newString);
    }

    func1("Hello");

    function func1(newString){
        var firstLetter = newString.charAt(0);
        alert(firstLetter);
    }

    func2("Hello");

    function func2(newString){
        var length = newString.length;
        var lastLetter = newString.charAt(length-1);
        alert(lastLetter);
    }

    func3("Hello");
    function func3(newString){
        var length = newString.length;
        length = length/2;
        alert(newString.charAt(length));
    }

    func4(10,20,30);

    function func4(num1,num2,num3){
        var sum = num1 + num2 + num3;
        var avg = sum/3;
        alert(avg);
    }

    func5(1,5,"Hellow Mother Fuckers");

    function func5(num1,num2,newString){
        alert(newString.slice(num1,num2));
    }
*/

    function funcWelcome(){
        alert("Welcome to my Website !!!");
    }

    
    function funcLength(){
        var inputText = document.getElementById("text1").value;
        var length1 = inputText.length;
        
        
        document.getElementById("textResult").innerHTML=length1;
    }

    function getAvg(){
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var num3 = parseFloat(document.getElementById("num3").value);

        var avg = (num1+num2+num3)/3;
        document.getElementById("avg1").innerHTML = avg;
    }

    function funcSomething(){

        var thisVar = 1;

        return thisVar;
    }
}