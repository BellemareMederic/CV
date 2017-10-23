$('document').ready(function () {
    console.log('Main.js loaded');
    $('#btnMoreEtude').click(function () {
        toggleEtude();
    });

    $('#btnMoreExp').click(function () {
        toggleExp();
    });

    $( window ).bind( "onbeforeprint", toggleEtude );

    function toggleEtude() {
        $('#moreEtude').toggle('hide');
        $('#btnMoreEtude').toggleClass('fa-rotate-180');
    }

    function toggleExp() {
        $('#moreExp').toggle('hide');
        $('#btnMoreExp').toggleClass('fa-rotate-180');
    }
});