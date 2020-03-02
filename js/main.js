$(document).ready(function () {
    var tempo = setInterval(prossima, 2000);
    setTimeout(function( ) {
        clearInterval( tempo );
    }, 20000);

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

    // BONUS
    $(".slider i").click(function() {
        $(".slider i").removeClass('active'); // Rimuovo ACTIVE su ogni pallino
        $(this).addClass('active'); //rendo active elemento selezionato (THIS) dal click
        var posizione = parseInt($(".slider i").index(this)); // assegno la posizione (INDEX) del valore selezionato dal click (THIS) ad una variabile
        $(".box-image img.active").removeClass("active"); // rimuovo active da ogni immagine
        $(".box-image img").eq(posizione).addClass('active'); // assegno active alla immagine corrispondente all'index tramite metodo EQ()
    });



    function prossima() {
        var immagineCorrente = $(".box-image img.active");

        if ($(".box-image img.active").hasClass('last')) {
            var immagineProssima = $('.box-image .first');
        } else {
            var immagineProssima = $('.box-image img.active').next();
        }
        immagineCorrente.removeClass("active");
        immagineProssima.addClass('active');

        // Pallini slider

        var pallinoCorrente = $(".slider i.active");

        if ($(".slider i.active").hasClass('last')) {
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
            var pallinoProssimo = $('.slider .last');
        } else {
            var pallinoProssimo = $('.slider i.active').prev();
        }
        pallinoCorrente.removeClass("active");
        pallinoProssimo.addClass('active');
    }
});
