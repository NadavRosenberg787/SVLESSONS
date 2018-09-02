{

    //this is my first java script!

    /*
    document.write(222);
    window.alert("Watch Out!!!");
    window.alert("Come on man!!!");
    window.alert("Please Please put down the gun!");
    window.alert("Do Not Kill That homeless!!!");
    window.alert("I am Cornholios!!!")
*/
    document.getElementById("one").innerHTML="Ha ha !";
    document.getElementById("two").innerHTML="Ohh Yeah";
    document.getElementById("three").innerHTML="I am not a turkey";
    document.getElementById("four").innerHTML="Remmember Remmember the rain of november";

    /*
    var firstName = "Nadav";
    window.alert(firstName);
    var lastName = "Rosenberg";
    window.alert(lastName);
    var finalName = firstName + " " + lastName;
    window.alert(finalName);

*/

    var a1 = 54;
    var a2 = 105;
    var a3 = 55;
    var a4 = 94;
    var a5 = 101;

    var avg = (a1+a2+a3+a4+a5)/5;
    document.write(avg);

    var a1 = 8;
    var a2 = 12;
    a1 += (a2 -a1)+0.1*a1;
    a2 = (a1 - a2)*10;
    a1 =a1 - a2*0.1;


    document.writeln("aaa/n");
    document.write(a1);
    document.write(a2);


    var str = "hello World";
    var n = str.indexOf("World"); // returns 6.
    alert(n);
    n = str.indexOf("nadav"); // returns -1 cause of not found
    alert(n);

    varStrSlice = str.slice(6,11);
    alert(varStrSlice);

    str = "hello world";
    var newStr = str.replace("world","nadav");
    alert(newStr);

    var letter = str.charAt(0);
    alert(letter);



}