
{
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navBar787");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
       if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
       } else {
        navbar.classList.remove("sticky");
       }
    }
    // some help functions i got online , this for checking if a string is a number
    function isNumeric(num){
         num = "" + num; //coerce num to be a string
          return !isNaN(num) && !isNaN(parseFloat(num));
     }
     function offsetAnchor() {
        if (location.hash.length !== 0) {
          window.scrollTo(window.scrollX, window.scrollY - 300);
        }
      }
      
      // Captures click events of all <a> elements with href starting with #
      $(document).on('click', 'a[href^="#"]', function(event) {
        // Click events are captured before hashchanges. Timeout
        // causes offsetAnchor to be called after the page jump.
        window.setTimeout(function() {
          offsetAnchor();
        }, 0);
      });

      $('a').on('click',function(e){
        e.preventDefault();
        var target = $($(this).attr('href')),
            p = $(target).offset().top,
            offset = 150;
        
        $(target).hasClass('fifty') && (p = p - offset);
        $('body, html').animate({ 'scrollTop': p }, 250);
      });
      
      // Set the offset when entering page with hash present in the url
      window.setTimeout(offsetAnchor, 0);

    // a function that dose not return a value
    function funcIsPositive(){
        var isPositive = document.getElementById("inputNumberPN787").value;
        if (isPositive >0){
            document.getElementById("positiveNegative787").innerHTML='<i class="em em---1"></i> Positive <i class="em em---1"></i>';
        }else if(isPositive < 0){
            document.getElementById("positiveNegative787").innerHTML='<i class="em em--1"></i> Negative <i class="em em--1"></i>';
        }else if (isPositive==0){
            document.getElementById("positiveNegative787").innerHTML='<i class="em em-interrobang"></i> What is nothing yet something <i class="em em-interrobang"></i>';
        }
        ani();
    }

    // a function that gets a value and returns a value
    function devidedBy2(thisValue){
        
        var newString;

        if (thisValue%2==0){
            newString ="Perfect Devision";
        }else{
            newString ="Imperfect Devision"
        }
    
        return newString;
    }

    function devidedBy2CallingFunction(){
        var newString = devidedBy2(parseInt(document.getElementById("inputNumberBy2787").value));
        document.getElementById("devidedBy2Text787").innerHTML=newString;
    }

    function capitalOrSmall(){
        var thisString =document.getElementById("inputTextCapital787").value;
        if (thisString.length>1){
            document.getElementById("capitalOrSmallText787").innerHTML="Too many characters !!!";

        }else if (thisString.length==1){
            // Actuall Check
            var character = thisString.charAt(0);
            if (isNumeric(character)){
                document.getElementById("capitalOrSmallText787").innerHTML="Letters only!";

            }else{
                if (character ==character.toUpperCase()){
                    document.getElementById("capitalOrSmallText787").innerHTML="Capital Letter !";
                }else{
                    document.getElementById("capitalOrSmallText787").innerHTML="small Letter !";
                }
            }
            

        }else if (thisString.length==0){
            document.getElementById("capitalOrSmallText787").innerHTML = 'Comeon enter a letter you know you want to <i class="em em-laughing"></i>';

        }
    }

    function checkLonger(){
        var string1 = document.getElementById("inputWhichIsLonger1787").value;
        var string2 = document.getElementById("inputWhichIsLonger2787").value;

        if (string1.length > string2.length){

            // first is begger then second
            document.getElementById("inputWhichIsLongerText1787").innerHTML="This string is Longer !!!"
            document.getElementById("inputWhichIsLongerText2787").innerHTML=""
        }else if (string2.length == string1.length){
            
            document.getElementById("inputWhichIsLongerText1787").innerHTML="Same length"
            document.getElementById("inputWhichIsLongerText2787").innerHTML="Same length"

            // second and first are equal
        }else if (string2.length > string1.length){
            
            // second is bigger then first
            
            document.getElementById("inputWhichIsLongerText2787").innerHTML="This string is Longer !!!"
            document.getElementById("inputWhichIsLongerText1787").innerHTML=""
        }
    }

    function isPalindrome(){
        var newString = document.getElementById("inputIsPalindrome787").value;
        var i = 0;
        var length = newString.length;
        var isPoly= false;
        while(i< length/2){
            var startChar = newString.charAt(i);
            var endChar = newString.charAt(length-1-i);
            if (startChar==endChar){
                isPoly = true;
            }else{
                isPoly=false;
                i+=length;
            }
            i++;
            
        }

        if (isPoly){
            document.getElementById("isPalindromeText787").innerHTML="Palindrome Found !!!"
        }else{
            document.getElementById("isPalindromeText787").innerHTML="Palindrome Not Found !!!"
        }
    }

    function ani(){
        //document.getElementById('mainGif787').className ='animPopAlpha787';
      }

}
