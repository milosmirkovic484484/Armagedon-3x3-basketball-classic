$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScena = new ScrollMagic.Scena({
        triggerElement: '#project'

    });
    .setClassToggle('#project1', 'fade-in')
    .addTo(controller)
    
})