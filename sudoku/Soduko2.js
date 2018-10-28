{
    const GAME_SIZE=9;
    const EASY=41;
    const MID=33;
    const HARD=25;
    const TIME_INTERVAL=20;
    
   
    ///1 potential matrix for checking
    //check 1 if true 
    var checkMatrixRow=[];
    var checkMatrixColumn=[];
    var checkMatrixBox=[];
    // soduko matrix 
    var sodukoMatrix=[];//save the answer f the created soduko matrix
    var puzzleMatrix=[];//save the player answer of the soduko game

   //init the check matrix for the creating algorethem
    function initCheckMatrix(){
        var mat=[];
        for(var i=0;i<GAME_SIZE;i++){
            mat.push([]);
            for(var j=0;j<GAME_SIZE;j++){
                mat[i].push(1);
            }

        }
        return mat;
    }   

    //get the game diff from sent url
    //0 easy 1 mid and 2 hard
    //the number should be after #
    //if there was >2 it will give hard mode 
    //if it was <0 or nan it will give easy mode
    function getGameDiff(){
        var myUrl=window.location.href;
        var n=myUrl.search(".html");
        var x=parseInt(myUrl.charAt(n+6));
        //alert(x);
        if (isNaN(x) ||x<0 ){
            x=0;
        }
        if(x>2) {
            x=2;
        }
        return x;
    }
    //change checkMatrix at locationto 0
    function removePotNumber(checkMatrix,location,number){
        checkMatrix[location][number]=0;
        return checkMatrix;
    }
    //change checkMatrix at locationto 1
    function addPotNumber(checkMatrix,location,number){
        checkMatrix[location][number]=1;
        return checkMatrix;
    }
    //init matrix for soduko game
    function initSodukoMatrix(){
        arr=[];
        for(var i=0;i<GAME_SIZE;i++){
            arr.push([]);
            for(var j=0;j<GAME_SIZE;j++){
                arr[i].push(0);
            }
        }
        return arr;
    }
    //set style of the cell depend on witch box it is in
    //you can change the box color from here
    function setStyleofCell(cell,style){
        switch(style){
            case 0:
            cell.style.background="#3058cf";
            break;
            case 1:
            cell.style.background="#30cfa7";
            break;
            case 2:
            cell.style.background="#a7cf30";
            break;
            case 3:
            cell.style.background="#cf30cf";
            break;
            case 4:
            cell.style.background="#8030cf";
            break;
            case 5:
            cell.style.background="#3058cf";
            break;
            case 6:
            cell.style.background="#30cfcf";
            break;
            case 7:
            cell.style.background="#30cf58";
            break;
            case 8:
            cell.style.background="#a7cf30";
            break;
           
        }
        return cell;

    }
    //set the style of the empty cell for player answer
    function emptyCell(cell,i,j){
        var input=document.createElement("input");
        
        input.type="number";
        input.max="9";
        input.min="1";
        input.id="cell"+i+j;

        input.addEventListener("keyup", function checkNumber(){
            if(parseInt(this.value)>9){
                this.value="9";
            }
            if(parseInt(this.value)<1){
                this.value="1";
            }
            puzzleMatrix[i][j]=parseInt(this.value);
            }); 
        input.style.webkitAppearance="none";
        cell.style.padding="0px";
        input.style.width="100%";
        input.style.height="100%";
        input.style.textAlign="center";
        input.style.backgroundColor=cell.style.background;
 
        input.style.color=cell.style.color;

        
        cell.appendChild(input);
        return cell;
    }
    //print the soduko game with interval timer for animation 
    
    function printMatrix(mat,matrixTable){
        var box=0;
        var getTable=document.getElementById(matrixTable);
        while (getTable.hasChildNodes()) {   
            getTable.removeChild(getTable.firstChild);
        }
        var tr=document.createElement("tr");var td;
        var i=0;j=0;
       
        var animation = setInterval(printMatrixRow, TIME_INTERVAL);
        
        function printMatrixRow(){
            getTable.appendChild(tr);
            if(j>8){
               
                tr=document.createElement("tr");
                
                j=0;
                i++;
                if(i>8){
                    clearInterval(animation);
                    return;
                }
            }
            td=document.createElement("td");
            td.id="puzzleMAtrixTD"+i+j;
            box=getBoxNumber(i,j);
            td=setStyleofCell(td,box);
            if (mat[i][j]!=0) {
                td.innerHTML=mat[i][j];
                tr.appendChild(td);
            }
            else{
                td=emptyCell(td,i,j);
                tr.appendChild(td);

            }
           
            j++;
        }
       
          
    }
        
    //calculate box number
    function getBoxNumber(i,j){
        var boxRow=parseInt(Math.floor(i/3));
        var BoxColumn=parseInt(Math.floor(j/3));
        return (boxRow*3+BoxColumn);
    } 
    //create SodukoGame puzzle
    //it will return true if the puzzle created succesfully
    //false otherwise
    //the new puzzle will be saved on global var sodukoMatrix
    function createPuzzleSoduko(i,j){
        var notVisitedNum=[1,2,3,4,5,6,7,8,9];
        var pickANumber=0;
        var pickedNum=0;
        var flag=false;    
        if(j>8){
            if(i>7) {   
                return true;
            }
            else{
                return createPuzzleSoduko(i+1,0);
       
            }              
        }
        else{
            while (!flag){
                if(notVisitedNum.length==0)return false;            
                pickANumber=parseInt(Math.floor((Math.random() * notVisitedNum.length*10) + 0)/10);
                pickedNum=notVisitedNum[pickANumber];
                notVisitedNum.splice(pickANumber,1);
                if(checkMatrixRow[i][pickedNum-1]==1 && checkMatrixColumn[j][pickedNum-1]==1 && checkMatrixBox[getBoxNumber(i,j)][pickedNum-1]==1){
                    sodukoMatrix[i][j]=pickedNum;                   
                    checkMatrixRow=removePotNumber(checkMatrixRow,i,pickedNum-1);
                    checkMatrixColumn=removePotNumber(checkMatrixColumn,j,pickedNum-1);
                    checkMatrixBox=removePotNumber(checkMatrixBox,getBoxNumber(i,j),pickedNum-1);
                    flag=createPuzzleSoduko(i,j+1);
                    if(!flag) {
                        checkMatrixRow=addPotNumber(checkMatrixRow,i,pickedNum-1);
                        checkMatrixColumn=addPotNumber(checkMatrixColumn,j,pickedNum-1);
                        checkMatrixBox=addPotNumber(checkMatrixBox,getBoxNumber(i,j),pickedNum-1);
                        sodukoMatrix[i][j]=0;
                    }   
                } 
             }    
        }
        return true;


    }
    //create the puzzlematrix for the game diff
    //if 0 the puzzle will be filled with 41->Easy constant in top cell from the 81
    //if 1 -> 33 ->mid constant in top 
    //if 2 -> 25->hard constant in top 
    //
    function DrawPuzzleDiffCase(difficult){
        var arr=initSodukoMatrix();
        var i=0;
        var randomRow;
        var randomColumns;
      
        switch (difficult){
            case 0:
                i=0;
                while(i<=EASY){
                    randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                    if(arr[randomRow][randomColumns]==0){
                        i++;
                        arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                    }
                }
            break;
            case 1:
            i=0;
            while(i<=MID){
                randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                if(arr[randomRow][randomColumns]==0){
                    i++;
                    arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                }
            }
            break;
            case 2:
            i=0;
            while(i<=HARD){
                randomRow=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                randomColumns=parseInt(Math.floor((Math.random() * 90) + 10)/10)-1;
                if(arr[randomRow][randomColumns]==0){
                    i++;
                    arr[randomRow][randomColumns]=sodukoMatrix[randomRow][randomColumns];
                }
            }
            break;
        }
        return arr;
    }
    //init  matrix  and checkers
    var sodukoResult;
    function refreshGame(){
        //if the soduko puzzle created succsefully then 
    // 1) chose diff and fill the player matrix(puzzleMatrix) 
    // 2)print the puzzle matrix and hidden answer matrix
    var resultWindow=document.getElementById("resultWindow");
    resultWindow.style.display="none";
    checkMatrixRow=initCheckMatrix();
    checkMatrixColumn=initCheckMatrix();
    checkMatrixBox=initCheckMatrix();
    sodukoMatrix=initSodukoMatrix();
    if(createPuzzleSoduko(0,0)){
        var diff=getGameDiff();
        puzzleMatrix= DrawPuzzleDiffCase(diff);
        printMatrix(puzzleMatrix,"matrix");
        printMatrix2(sodukoMatrix,"answerMatrix");
    

    }
    sodukoResult=false;
    }
    refreshGame();
    //function for printing the answer matrix on the page (for cheating the game :P)
    function printMatrix2(mat,matrixTable){
        
        var getTable=document.getElementById(matrixTable);
        while (getTable.hasChildNodes()) {   
            getTable.removeChild(getTable.firstChild);
        }
        var tr;var td;
        for(var i=0;i<mat.length;i++){
            tr=document.createElement("tr");
            for(var j=0;j<mat[i].length;j++){
                td=document.createElement("td");
                td.id="answerMatTD"+i+j;
                td.innerHTML=mat[i][j];
                tr.appendChild(td);
            }
            getTable.appendChild(tr);
        }
        

    }

    //if the soduko puzzle created succsefully then 
    // 1) chose diff and fill the player matrix(puzzleMatrix) 
    // 2)print the puzzle matrix and hidden answer matrix
    /*
    checkMatrixRow=initCheckMatrix();
    checkMatrixColumn=initCheckMatrix();
    checkMatrixBox=initCheckMatrix();
    sodukoMatrix=initSodukoMatrix();
    if(createPuzzleSoduko(0,0)){
        var diff=getGameDiff();
        puzzleMatrix= DrawPuzzleDiffCase(diff);
        printMatrix(puzzleMatrix,"matrix");
        printMatrix2(sodukoMatrix,"answerMatrix");
   
    }
    var sodukoResult=false;
    */
    //check the game answer and show the result window
    //compare the answer matrix with the puzzle matrix
    //showResultWindow function show the result
    //the wrong answer background will turn to red(boarders)
    function checkGameAnswer(){
       var counter=0;
       var tdToChange;
       var tdToChange2;
       var cell;
       var checkTimer=true;
       var i=0;j=0;  
       for(i=0;i<GAME_SIZE;i++){
            for(j=0;j<GAME_SIZE;j++){
                if(puzzleMatrix[i][j]==sodukoMatrix[i][j]){
                counter++;
                }

            }

       }    
       i=0;j=0;  
       var colorinterval = setInterval(answerColor, TIME_INTERVAL);     
       function answerColor(){
           if(j>8){   
               j=0;
               i++;
               if(i>8){
                   clearInterval(colorinterval);
                   checkTimer=false;
                   return;
                }
            }
            tdToChange=document.getElementById("answerMatTD"+i+j);
            tdToChange2=document.getElementById("puzzleMAtrixTD"+i+j);
            cell=document.getElementById("cell"+i+j);
            if(puzzleMatrix[i][j]==sodukoMatrix[i][j]){
                tdToChange.style.backgroundColor="green";
                tdToChange2.style.backgroundColor="green";
                
            }
            else{
                tdToChange.style.backgroundColor="red";
                tdToChange2.style.backgroundColor="red";
            }
            if(cell!=null)cell.style.backgroundColor=tdToChange2.style.backgroundColor;
            j++;
        }
       
       
       
        if(counter==81){
            sodukoResult=true;
            setTimeout(showResultWindow, TIME_INTERVAL*(GAME_SIZE*GAME_SIZE+1));
            

        }
        else{
            sodukoResult=false;
            setTimeout(showResultWindow, TIME_INTERVAL*(GAME_SIZE*GAME_SIZE+1));
        }


    }
    //show the result window after checking the answer
    function showResultWindow(){
        var resultWindow=document.getElementById("resultWindow");
        var resultIs=document.getElementById("resultIs");

        if(sodukoResult){
            resultWindow.style.display = "block";
            resultIs.innerHTML="Win";

           
        }

 
        else{
            resultWindow.style.display = "block";
            resultIs.innerHTML="Lose";

        }

    }
    
}