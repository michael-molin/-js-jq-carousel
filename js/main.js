$(document).ready(function () {

    var tempo = setInterval(prossima, 2000);

    $('.carousel').mouseenter(function () {
        clearInterval(tempo);
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
    }
});
