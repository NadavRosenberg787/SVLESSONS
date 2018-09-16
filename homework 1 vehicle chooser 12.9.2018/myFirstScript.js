{
    /*
    function funcSaveValues(){
        
        var howManyChecked = 0;

        var a1 = document.getElementById("checkBox1787").checked;
        var a2 = document.getElementById("checkBox2787").checked;
        var a3 = document.getElementById("checkBox3787").checked;
        var a4 = document.getElementById("checkBox4787").checked;
        var a5 = document.getElementById("checkBox5787").checked;
        var a6 = document.getElementById("checkBox6787").checked;

        if (a1==true){
            howManyChecked++;
        }
        if (a2){
            howManyChecked++;
        }
        if (a3){
            howManyChecked++;
        }
        if (a4){
            howManyChecked++;
        }
        if (a5){
            howManyChecked++;
        }
        if (a6){
            howManyChecked++;
        }

    
        var howManyCheckedString = howManyChecked.toString() + " Check boxes checked :) ";
        return howManyCheckedString;
    }

    function funcCallSaveValues(){
        var newAnswer = funcSaveValues();
        document.getElementById("answer1787").innerHTML = newAnswer; 
    }
    */

    function changeColorToRed1(){
        var elementString = "checkBoxColor1-787";
        checkColors(elementString);
    }
    function changeColorToBlue2(){
        var elementString = "checkBoxColor2-787";
        checkColors(elementString);
    }
    function changeColorToGreen3(){
        var elementString = "checkBoxColor3-787";
        checkColors(elementString);
    }
    function changeColorToYellow4(){
        var elementString = "checkBoxColor4-787";
        checkColors(elementString);
    }

    function checkColors(unTouchedElement){
        if (unTouchedElement=="checkBoxColor1-787"){

        }else{
            document.getElementById("checkBoxColor1-787").checked = false;
        }
        if (unTouchedElement=="checkBoxColor2-787"){

        }else{
            document.getElementById("checkBoxColor2-787").checked = false;
        }
        if (unTouchedElement=="checkBoxColor3-787"){

        }else{
            document.getElementById("checkBoxColor3-787").checked = false;
        }
        if (unTouchedElement=="checkBoxColor4-787"){

        }else{
            document.getElementById("checkBoxColor4-787").checked = false;
        }
    }

    function funcCheckFirstStage(){
        var brand = document.getElementById("brandInput787").value;
        var model = document.getElementById("modelInput787").value;
        var engineSize = document.getElementById("sizeOfEngineInput787").value;

        var checkBoxRed = document.getElementById("checkBoxColor1-787").checked;
        var checkBoxBlue = document.getElementById("checkBoxColor2-787").checked;
        var checkBoxGreen = document.getElementById("checkBoxColor3-787").checked;
        var checkBoxYellow = document.getElementById("checkBoxColor4-787").checked;

        var selectElement = document.getElementById("numOfSeats787");
        var selectValue = selectElement.options[selectElement.selectedIndex].value;
        var selectText = selectElement.options[selectElement.selectedIndex].text;

        // lets check the values

        if (brand.length<2){
            alert("Brand must have atleast 2 letters");
            return;
        }

        if (model.length<2){
            alert("Model must have atleast 2 letters");
            return;
        }

        if (parseInt(engineSize)<800 || parseInt(engineSize)>1600){
            alert("Engine size must be between 800 and 1600");
            return;
        }

        if (engineSize==""){
            alert("Engine size must be between 800 and 1600");
            return;
        }

        if (checkBoxRed==false && checkBoxBlue==false && checkBoxGreen==false && checkBoxYellow==false){
            alert("No Color Selected , Please Select One Color.")
            return;
        }

        if (selectValue==0){
            alert("Please select seat number bigger then 0");
            return;
        }

        vehicle.nos=selectValue;
        vehicle.brandName = brand;
        vehicle.modelName = model;
        vehicle.engineSize = engineSize;
        
        var selectedColor = "";
        if (checkBoxRed==true){
            selectedColor = "Red";
        }
        if (checkBoxBlue==true){
            selectedColor = "Blue";
        }
        if (checkBoxGreen==true){
            selectedColor = "Green";
        }
        if (checkBoxYellow==true){
            selectedColor = "Yellow";
        }

        vehicle.color = selectedColor;

        document.getElementById("brandAnswer787").innerHTML=vehicle.brandName;
        document.getElementById("modelAnswer787").innerHTML=vehicle.modelName;
        document.getElementById("engineAnswer787").innerHTML=vehicle.engineSize;
        document.getElementById("colorAnswer787").innerHTML=vehicle.color;
        document.getElementById("seatsAnswer787").innerHTML=vehicle.nos;

        document.getElementById("secondStageHeader787").innerHTML="Your Final Selection , Do You Approve ?";
    }

    var vehicle ={
        brandName:"",
        modelName:"",
        engineSize:"",
        color:"",
        nos:0
    };

}