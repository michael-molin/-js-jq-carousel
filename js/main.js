$(document).ready(function () {
    var tempo = setInterval(prossima, 2000);

    $('.carousel').mouseenter(function () {
        clearInterval(tempo);
    });

    $('.carousel').mouseenter(function () {
        clearInterval(tempo);
    });

    $('.carousel').mouseleave(function () {
        tempo = setInterval(prossima, 2000);
    });



    $(".freccia-dx").click(function() {
        prossima();
    });

    $(".freccia-sx").click(function(){
        precedente();
    });





    function prossima() {
        var immagineCorrente = $(".box-image img.active");

        if ($(".box-image img.active").hasClass('last')) {
            console.log('last controllato');
            var immagineProssima = $('.box-image .first');
        } else {
            var immagineProssima = $('.box-image img.active').next();
        }
        immagineCorrente.removeClass("active");
        immagineProssima.addClass('active');

        // Pallini slider

        var pallinoCorrente = $(".slider i.active");

        if ($(".slider i.active").hasClass('last')) {
            console.log('last pallino controllato');
            var pallinoProssimo = $('.slider .first');
        } else {
            var pallinoProssimo = $('.slider i.active').next();
        }
        pallinoCorrente.removeClass("active");
        pallinoProssimo.addClass('active');
    }

    function precedente() {
        var immagineCorrente = $(".box-image img.active");

        if (immagineCorrente.hasClass('first')) {
            var immaginePrecedente = $('.box-image .last');
        } else {
            var immaginePrecedente = $('.box-image img.active').prev();
        }
        immagineCorrente.removeClass("active");
        immaginePrecedente.addClass('active');

        // Pallini slider
        var pallinoCorrente = $(".slider i.active");

        if ($(".slider i.active").hasClass('first')) {
            console.log('last pallino controllato');
            var pallinoProssimo = $('.slider .last');
        } else {
            var pallinoProssimo = $('.slider i.active').prev();
        }
        pallinoCorrente.removeClass("active");
        pallinoProssimo.addClass('active');
    }
});
