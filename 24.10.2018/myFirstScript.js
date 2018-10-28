{
    var teamObj = {
        teamName,teamGoals,teamScore
    }
    
    $("document").ready(function(){

        $.ajax({
            url:"myfirstCSV.csv",
            dataType:"text",
            success:function(data){
                document.getElementById("somethingNew").innerHTML=data;
                var someValue = data.split(/\r?\n|\r/);
                var numOfRows = someValue.length;

                for (var i = 0; i<numOfRows; i ++){
                    
                }
            }
        });
    });

    function splitCSV(data){
        var newData = data.split(",");
        return newData;
    }
}