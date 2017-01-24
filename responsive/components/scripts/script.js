$(function() {
    var topoffset = 43; // offset the height minus navigation bar height
    var isTouch = 'ontouchstart' in document.documentElement;
    var wheight = $(window).height(); //get height of window

    $('.fullheight').css('height', wheight);

$(window).resize(function() {
    var wheight = $(window).height(); //get height of window
    $('.fullheight').css('height', wheight);
    }) //on resize

// Animated Scroll effect when clicking the navigation. copy/paste from CSS-Tricks
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } //target.length
    } //location hostname
  }); //on click

// Highlighting each element in the navigation with addClass/removeClass
$(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

     if (windowpos > $('#hotelinfo').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#hotelinfo"]').addClass('active');
    } //hotelinfo

    if (windowpos > $('#rooms').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#rooms"]').addClass('active');
    } //rooms

    if (windowpos > $('#dining').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#dining"]').addClass('active');
    } //dining

    if (windowpos > $('#events').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#events"]').addClass('active');
    } //events

    if (windowpos > $('#attractions').offset().top) {
        $('nav li a').removeClass('active');
        $('a[href$="#attractions"]').addClass('active');
    } //attractions
});  //window scroll



//  Setup ScrollMagic
var controller = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
})

//  Pin the navigation
var pin = new ScrollScene({
    triggerElement:  "#nav",}).setPin('#nav').addTo(controller)

// if touch device, do not display yoyo room effect
if(!isTouch) {
    // Room animations
    var roomOrigin = {
        bottom: -700,
        opacity: 0,
        scale: 0,
    }

    var roomDest = {
        repeat: 1,
        yoyo: true,
        bottom: 0,
        opacity: 1,
        scale: 1,
        ease: Back.easeOut
    }

    // Room scroll yoyo effect
    var roomtween = TweenMax.staggerFromTo(
        "#westminster .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#westminster',
            offset: -topoffset,
            duration: 800
        }).setPin('#westminster').setTween(roomtween).addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
        "#oxford .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#oxford',
            offset: -topoffset,
            duration: 800
        }).setPin('#oxford').setTween(roomtween).addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
        "#cambridge .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#cambridge',
            offset: -topoffset,
            duration: 800
        }).setPin('#cambridge').setTween(roomtween).addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
        "#piccadilly .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#piccadilly',
            offset: -topoffset,
            duration: 800
        }).setPin('#piccadilly').setTween(roomtween).addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
        "#manchester .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#manchester',
            offset: -topoffset,
            duration: 800
        }).setPin('#manchester').setTween(roomtween).addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
        "#victoria .content", 1, roomOrigin, roomDest)

        var pin = new ScrollScene({
            triggerElement: '#victoria',
            offset: -topoffset,
            duration: 800
        }).setPin('#victoria').setTween(roomtween).addTo(controller)
} // if not touch device



//  TweenMax effects on attractions
var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 }, { delay: 0.5, opacity: 1, scale: 1, ease: Back.easeOut });
var scene = new ScrollScene({triggerElement: '#attractions', offset: -topoffset}).setTween(attractionstween).addTo(controller)

}); //on load

