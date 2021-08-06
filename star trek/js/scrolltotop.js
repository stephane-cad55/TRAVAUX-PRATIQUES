$('<div></div>')
    .attr('id', 'scrolltotop')
    .hide()
    .css({ 'z-index': '1000', 'position': 'fixed', 'bottom': '20px', 'right': '20px', 'cursor': 'pointer', 'width': '45px', 'height': '45px', 'background': 'white', 'border-radius': '50px', })
    .appendTo('body')
    .click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
$('<div></div>')
    .css({ 'width': '10px', 'height': '10px', 'transform': 'rotate(-135deg)', 'border': 'solid #000000', 'border-width': '0 3px 3px 0', 'padding': '5px', 'margin-top': '18px', 'margin-left': '16px', })
    .appendTo('#scrolltotop');
$(window).scroll(function () {
    if ($(window).scrollTop() < 10) {
        $('#scrolltotop').fadeOut();
    } else {
        $('#scrolltotop').fadeIn();
    }
});