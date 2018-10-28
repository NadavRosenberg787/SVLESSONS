{
    $(document).ready(function(){

        $("#btn33").click(function(){
            //debugger;
            $("#redDiv").animate({
                width:"100px"
            },1500);
            $("#yellowDiv").animate({
                width:"300px"
            },850);
            $("#blueDiv").animate({
                width:"500px"
            },300);
        });

        $("#inputS1").keyup(function(){
            var val = $("#inputS1").val();
            $("#redDiv").animate({
                width:val
            },300);
        });
        
        $("#inputS2").keyup(function(){
            var val = $("#inputS2").val();
            $("#yellowDiv").animate({
                width:val
            },300);
        });
        
        $("#inputS3").keyup(function(){
            var val = $("#inputS3").val();
            $("#blueDiv").animate({
                width:val
            },300);
        });

        $("#input2").keyup(function(){
            //debugger;
            var lastString = $("#input2").val();
            var result = "Results are :";
            var lowerCaseLetters = 0;
            var upperCaseLetters = 0;
            var numbers = 0;
            var signs = 0;
            for (var i =0; i < lastString.length; i++){
                var currentChar= lastString.charAt(i);       
                if (currentChar >='a' && currentChar <='z'){
                    lowerCaseLetters++;
                }
                else if (currentChar >='A' && currentChar <='Z'){
                    upperCaseLetters++;
                }
                else if (currentChar >='0' && currentChar <='9'){
                    numbers++;
                }
                else {
                    signs++;
                }
            }
            if (lowerCaseLetters>0)
                result += " "+ lowerCaseLetters.toString() + " Lower Case Letters";
            if (upperCaseLetters>0)
                result += " "+ upperCaseLetters.toString() + " Upper Case Letters";
            if (numbers>0)
                result += " "+ numbers.toString() + " Numbers";
            if (signs>0)
                result += " "+ signs.toString() + " Signs";
            
            document.getElementById("resultText").innerHTML=result;
            $("resultText").fadeIn(350);
        
        });

        $("#input1").mouseenter(function(){
            $("#input1").css("background-color","red");
        });
        $("#input1").mouseleave(function(){
            $("#input1").css("background-color","yellow");
        });

        $("#btn1").click(function(){
            $("#img1").fadeOut(1500);
        });
        $("#btn2").click(function(){
            $("#img2").slideDown();
        });
        $("#btn3").click(function(){
            $("#img3").hide();
        });

        $("#btn1").dblclick(function(){
            $("#img1").fadeIn(1500);
        });
        $("#btn2").dblclick(function(){
            $("#img2").slideUp();
        });
        $("#btn3").dblclick(function(){
            $("#img3").show();
        });
    });
}