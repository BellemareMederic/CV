$('document').ready(function () {
    console.log('Main.js loaded');
    toggleEtude();
    toggleStudy();

    $('#btnMoreEtude').click(function () {
        toggleEtude();
    });

    $('#btnMoreStudy').click(function () {
        toggleStudy();
    });

    $( window ).bind( "onbeforeprint", toggleEtude );

    function toggleEtude() {
        $('#moreEtude').toggle('hide');
        $('#btnMoreEtude').toggleClass('fa-rotate-180');
    }

    function toggleStudy() {
        $('#moreStudy').toggle('hide');
        $('#btnMoreStudy').toggleClass('fa-rotate-180');
    }
});