

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time);
}

/*function myFunction(x) {
           if (x.matches) { // If media query matches
              document.body.style.backgroundColor = "yellow";
              
           } else {
             document.body.style.backgroundColor = "pink";
         }
        }
          
         var x = window.matchMedia("(max-width: 768px)")
        myFunction(x) // Call listener function at run time
         x.addListener(myFunction) // Attach listener function on state changes
*/

function createCounter() {
    let count = 0;
    return function(inc) {
        if (inc == 1) {
            count++;      
        }else if (inc==0){
            count=0;
        }
        return count;
    }
}
const counter = createCounter();
const modal_counter = createCounter();


function splitStatue() {
    counter(inc=1)
    {
            $("#box1").animate({
                bottom: "18%",
                right: "-50%"
            }, 1200);
            $("#box2").animate({
                bottom: "25%",
                right: "-55%"
            }, 1200);
            $("#box3").animate({
                bottom: "30%",
                right: "-65%"
            }, 1200);
            $("#box4").animate({
                bottom: "45%",
                right: "-50%"
            }, 1200);
            $("#box5").animate({
                bottom: "55%",
                right: "-60%"
            }, 1200);
        }
}

function resetStatue() {
    counter(inc=0)
    {
        $("#box1").animate({
            bottom: "0%",
            right: "-55%"
        }, 400);
        $("#box2").animate({
            bottom: "150px",
            right: "-55%"
        }, 1200);
        $("#box3").animate({
            bottom: "266px",
            right: "-55%"
        }, 400);
        $("#box4").animate({
            bottom: "422px",
            right: "-55%"
        }, 400);
        $("#box5").animate({
            bottom: "593px",
            right: "-56%"
        }, 400);
    }
}


function addClickHandlerForModal(elem, arg1, mobile_phone) {
    elem.addEventListener('click', function(e) {
        condition = true
        if (mobile_phone == true){
            condition = counter() > 0
        }
        if (condition) {
            e.stopPropagation();
            mymodal = '#myModal'+arg1

            $(mymodal).modal('show')

            counter(inc=1)
            modal_counter(inc=1)
        }
    }, false);
}


$(document).ready(function() {

    $("#box6").hide();
    $("#box7").hide();
    $("#box8").hide();
    $("#box9").hide();
    $("#box10").hide();


    //  $( '#gif1').attr('src','https://i1.sndcdn.com/artworks-000254919542-6kdx39-t500x500.jpg');


    const splitEvent = e => { // Pass event (e) argument into function
        e.stopPropagation(); // Stop the document click event from running
        if (counter() == 0) {
            splitStatue()
        }
        //document.getElementById('inc').value = counter()
    }

    const resetEvent = () => {
      if (modal_counter() == 0) {
        resetStatue()
      }
    }
    

    // Listen for click event
    const button = document.getElementById("dragZone");
    const is_mobile_phone = document.body.style.backgroundColor == "yellow"
    if (is_mobile_phone){ // if mobile phone
        button.addEventListener('click', splitEvent);
        document.addEventListener('click', resetEvent) // Add second event listener on the document

        button.addEventListener('touchstart', splitEvent);
        document.addEventListener('touchstart', resetEvent);
    
    }else{
        $('#dragZone').hover(function() {
            $("#box1").animate({
                bottom: "18%",
                right: "-50%"
            }, 1200);
            $("#box2").animate({
                bottom: "25%",
                right: "-55%"
            }, 1200);
            $("#box3").animate({
                bottom: "30%",
                right: "-65%"
            }, 1200);
            $("#box4").animate({
                bottom: "45%",
                right: "-50%"
            }, 1200);
            $("#box5").animate({
                bottom: "55%",
                right: "-60%"
            }, 1200);
        },
        function() {
            $("#box1").animate({
                bottom: "0%",
                right: "-55%"
            }, 400);
            $("#box2").animate({
                bottom: "150px",
                right: "-55%"
            }, 1200);
            $("#box3").animate({
                bottom: "266px",
                right: "-55%"
            }, 400);
            $("#box4").animate({
                bottom: "422px",
                right: "-55%"
            }, 400);
            $("#box5").animate({
                bottom: "593px",
                right: "-56%"
            }, 400);
        });
    }

    for (let i = 1; i < 6; i++) {
        addClickHandlerForModal(document.getElementById(`box${i}`), i.toString(), is_mobile_phone)
      }



        

    //click event separately
    ///*

    //*/


});
