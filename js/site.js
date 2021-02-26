var btnContact = document.querySelector('.rt-btn-contact');

//Page Preloader
//window.addEventListener('load', function() {
//  var pagePreloder = document.querySelector('.qd-preloader');
//pagePreloder.classList.add('qd-fade-out');

//setTimeout(function() {
//    pagePreloder.style.display = 'none';
//}, 2000);
//});



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



btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.rt-contact-info');
    boxContact.classList.toggle('rt-is-open');
    this.classList.toggle('rt-change-icon');
});

$(document).ready(function() {

    $("#box6").hide();
    $("#box7").hide();
    $("#box8").hide();
    $("#box9").hide();
    $("#box10").hide();
    //  $( '#gif1').attr('src','https://i1.sndcdn.com/artworks-000254919542-6kdx39-t500x500.jpg');


    //Selecting each one separately
    $("#box1").hover(function() {
        $("#box1").animate({
            opacity: 0.4
        }, 300);

        $("#box6").show();
        $("#box6").animate({
            bottom: "1260px",
            right: "300px"
        }, 800);

    }, function() {
        $("#box1").animate({
            opacity: 1
        }, 300);

        $("#box6").animate({
            bottom: "1100px",
            right: "10px"
        }, 800);
        $("#box6").hide();
        $('#gif1').attr('src', 'img/box1.gif');


    });
    $("#box2").hover(function() {
        $("#box2").animate({
            opacity: 0.4
        }, 300);

        $("#box7").show();
        $("#box7").animate({
            bottom: "1100px",
            right: "200px"
        }, 800);

    }, function() {
        $("#box2").animate({
            opacity: 1
        }, 300);

        $("#box7").animate({
            bottom: "1000px",
            right: "-100px"
        }, 800);
        $("#box7").hide();
        $('#gif2').attr('src', 'img/box2.gif');


    });
    $("#box3").hover(function() {
        $("#box3").animate({
            opacity: 0.4
        }, 300);


        $("#box8").show();
        $("#box8").animate({
            bottom: "980px",
            right: "200px"
        }, 800);


    }, function() {
        $("#box3").animate({
            opacity: 1
        }, 300);

        $("#box8").animate({
            bottom: "860px",
            right: "-100px"
        }, 800);
        $("#box8").hide();
        $('#gif3').attr('src', 'img/box3.gif');



    });
    $("#box4").hover(function() {
        $("#box4").animate({
            opacity: 0.4
        }, 300);

        $("#box9").show();
        $("#box9").animate({
            bottom: "770px",
            right: "200px"
        }, 800);


    }, function() {
        $("#box4").animate({
            opacity: 1
        }, 300);

        $("#box9").animate({
            bottom: "710px",
            right: "-100px"
        }, 800);
        $("#box9").hide();
        $('#gif4').attr('src', 'img/box4.gif');


    });
    $("#box5").hover(function() {
        $("#box5").animate({
            opacity: 0.4
        }, 300);

        $("#box10").show();
        $("#box10").animate({
            bottom: "600px",
            right: "260px"
        }, 800);


    }, function() {
        $("#box5").animate({
            opacity: 1
        }, 300);

        $("#box10").animate({
            bottom: "550px",
            right: "-110px"
        }, 800);
        $("#box10").hide();
        $('#gif5').attr('src', 'img/box5.gif');

    });


    //splitting all
    $('#dragZone').hover(function() {
            $("#box1").animate({
                bottom: "0px",
                right: "60px"
            }, 600);
            $("#box2").animate({
                bottom: "70px",
                right: "-60px"
            }, 600);
            $("#box3").animate({
                bottom: "150px",
                right: "60px"
            }, 600);
            $("#box4").animate({
                bottom: "230px",
                right: "-60px"
            }, 600);
            $("#box5").animate({
                bottom: "300px",
                right: "60px"
            }, 600);
        },
        function() {
            $("#box1").animate({
                bottom: "0px",
                right: "0px"
            }, 400);
            $("#box2").animate({
                bottom: "130px",
                right: "0px"
            }, 400);
            $("#box3").animate({
                bottom: "270px",
                right: "0px"
            }, 400);
            $("#box4").animate({
                bottom: "426px",
                right: "0px"
            }, 400);
            $("#box5").animate({
                bottom: "565px",
                right: "0px"
            }, 400);
        });





    //click event separately
    $('#box1').click(function() {
        $('#myModal1').modal('show');
    });
    $('#box2').click(function() {
        $('#myModal2').modal('show');
    });
    $('#box3').click(function() {
        $('#myModal3').modal('show');
    });
    $('#box4').click(function() {
        $('#myModal4').modal('show');
    });
    $('#box5').click(function() {
        $('#myModal5').modal('show');
    });


});