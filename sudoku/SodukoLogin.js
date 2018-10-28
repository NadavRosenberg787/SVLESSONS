{
    
   window.setTimeout(showMainLoginButtons(),25);

  // known user example
  var kName1 = "Nadav Rosenberg"
  var kDiff1 = 2;
  var kUser1 = "nadav.rosenberg787@gmail.com";
  var kPass1 = "12345678QwE"
  var mLoginDiff1 = 0;

  /* Login - index.html */

  function login(){
    hideMainLoginButtons();
    document.getElementById("loginDiv").style.display="block";

  }

  function loginKnownUser(){
    var currentUser = document.getElementById("inputLoginUserName").value;
    var currentPass = document.getElementById("inputLoginPassword").value;
    if (currentUser==kUser1){
      if (currentPass==kPass1){
        document.getElementById("loginKnownWelcome").innerHTML="Welcome Back " + kName1;
        mLoginDiff1 = kDiff1;
        window.setTimeout(goSuduko,1000);
      }else{
        document.getElementById("loginKnownWelcome").innerHTML="Wrong User Name Or Password!";
      }
    }else{
      document.getElementById("loginKnownWelcome").innerHTML="Wrong User Name Or Password!";
    }
  }

  function goSuduko(){
    window.location.href = "soduko.html"+"#"+mLoginDiff1.toString();
  }

  function createNewUser(){
    hideMainLoginButtons();
    document.getElementById("createNewUserDiv").style.display="block";

  }

  function submitNewPlayer(){
    
    var fullName = document.getElementById("cnuFullName").value;
    var userName = document.getElementById("cnuUserName").value;
    var password = document.getElementById("cnuPassword").value;
    var password2 = document.getElementById("cnuPassword2").value;


    // checking Full Name
     
    // starting to check whats rgiht whats wrong , Shem i dont know what are the rules so im making them up as i go.
    if (fullName.length< 8){ // full name must be above 8 letters with a space inbetween and contains only letters no numbers or signs
      // checking to see if the first and last letter are actuall letters and not space or signs this is for the user wont trick the system , the space must be in between the 2 words not at start and not at end
      if (fullName.charAt(0)>='a' && fullName.charAt(0)<='z' || fullName.charAt(0)>='A' && fullName.charAt(0)<='Z'){
        if (fullName.charAt(fullName.length-1)>='a' && fullName.charAt(fullName.length-1)>='z' || fullName.charAt(fullName.length-1)>='A' && fullName.charAt(fullName.length-1)>='Z'){
          // success.
        }else{
          return 0;
        }
      }else{
        return 0;
      }
      var counter = 0; // needs to be atleast 8 to stay true;
      var success = true;
      var spaceFound = false;
      for (var i = 1; i < fullName.length-1; i++){
        // checking to see there are no signs or numbers and atleast one space
        if (fullName.charAt(i)>='a' && fullName.charAt(i)<='z' || fullName.charAt(i)>='A' && fullName.charAt(i)<='Z'){
          counter++;
        }else{
          if (fullName.charAt(i)==' '){
            spaceFound = true;
          }
        }
        
      }

      if (counter>=8 && spaceFound){
        // full Name is OK!
      }else{
        document.getElementById("cnuResult").innerHTML="Full Name Error , please make sure there are atleast 8 letters and a space in between"
        return 0 ;
      }
    }
      var digitCounter = 0;
      counter = 0;
      // checking userName - User Name must contain atleast 6 letters and 1 number(MUST be one number) and no spaces
     
        for (var i = 0; i < userName.length; i++){
          if (userName.charAt(i)==" "){
            document.getElementById("cnuResult").innerHTML="User name error cannot hold a space";
            return 0;
          }else if (userName.charAt(i)>='a' && userName.charAt(i)<='z' || userName.charAt(i)>='A' && userName.charAt(i)<='Z'){
            counter++;
          }else if (userName.charAt(i)>-'0' && userName.charAt(i)<=9){
            digitCounter++;
          }
        }

    if (userName.length>=6){

    }else{
      document.getElementById("cnuResult").innerHTML="User name must contain at least 6 letters";
      return 0;
    }

    if (digitCounter==1){

    }else{
      document.getElementById("cnuResult").innerHTML="User name must contain one digit and one digit only!";
      return 0;
    }

    // password must contains at least one upper case and one lower case , one sign and one number and must be 8 chars
    counter = 0;
    var lowercaseFound = false;
    var uppercaseFound = false;
    var digitFound = false;
    var signFound = false;
    if (password.length>=8){
      for (var i=0;i<password.length;i++){
        if (password.charAt(i)== password.charAt(i).toUpperCase()){
          uppercaseFound = true;
        }
         if (password.charAt(i)== password.charAt(i).toLowerCase()){
          lowercaseFound = true;
        }
         if (password.charAt(i)>='0' && password.charAt(i)<='9'){
          digitFound = true;
        }
         if (password.charAt(i)>='!' && password.charAt(i)<'0' || password.charAt(i)>='9' && password.charAt(i)<'A'){
          signFound = true;
        }
      }
    }else{
      document.getElementById("cnuResult").innerHTML="Found a password error, please be sure to have atleast 8 chars , one upercase , one lowercase, one digit and one sign atleast.";
    }
    if (!uppercaseFound || !lowercaseFound || !digitFound || !signFound){
      document.getElementById("cnuResult").innerHTML="Found a password error, please be sure to have atleast 8 chars , one upercase , one lowercase, one digit and one sign atleast.";
    }else{
      // success

    }

    if (password!=password2){
      document.getElementById("cnuResult").innerHTML="Found a password error, both passwords must match!";
      return 0;
    }

    hideNewUserDivAndShowLevels();
  }

  function hideNewUserDivAndShowLevels(){
    document.getElementById("createNewUserDiv").style.display="none";
    document.getElementById("selectDiffDiv").style.display="block";
  }

  function playAsGuest(){

  }

  
  function showMainLoginButtons(){
    document.getElementById("loginLabel").classList.add("animationGoIn1500");
    document.getElementById("loginCreateNewUserLabel").classList.add("animationGoIn2000");
    document.getElementById("guestLabel").classList.add("animationGoIn2500");
  }

  function hideMainLoginButtons(){
    clearLoginInClass();
    document.getElementById("loginLabel").style.display="none";
    document.getElementById("loginCreateNewUserLabel").style.display="none";
    document.getElementById("guestLabel").style.display = "none";
  }

  function clearMainLoginOutClass(){
    document.getElementById("loginLabel").classList.remove("animationGoOut");
    document.getElementById("loginCreateNewUserLabel").classList.remove("animationGoOut");
    document.getElementById("guestLabel").classList.remove("animationGoOut");
  }

  function clearLoginInClass(){
    document.getElementById("loginLabel").classList.remove("animationGoIn1500");
    document.getElementById("loginCreateNewUserLabel").classList.remove("animationGoIn2000");
    document.getElementById("guestLabel").classList.remove("animationGoIn2500");
  }

}