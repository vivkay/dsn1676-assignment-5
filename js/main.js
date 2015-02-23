// $('.circle').css('border', '3px solid black'); 

var $circle = $('.circle');
var $moveDownBtn = $('.move-down');
var $form = $('form');
var $theColor = $('#the-color');
var $newSquare = $('.new-square');

$moveDownBtn.on('click', function () {
    var offset = $circle.offset();
    $circle.css('top', offset.top + 10);
});

var $moveUpBtn = $('.move-up');

$moveUpBtn.on('click', function () {
    var offset = $circle.offset();
    $circle.css('top', offset.top - 10);
});

var $moveLeftBtn = $('.move-left');

$moveLeftBtn.on('click', function () {
    var offset = $circle.offset();
    $circle.css('left', offset.left - 10);
});

var $moveRightBtn = $('.move-right');

$moveRightBtn.on('click', function () {
    var offset = $circle.offset();
    $circle.css('left', offset.left + 10);
});

// e is the event object. it tells us what element was clicked on, where it was clicked etc. you can also use an event object to stop default actions on items such as forms

$form.on('submit', function (e) {
    //stop the form from doing what it normally does
    e.preventDefault();
    $circle.css('background-color', $theColor.val());
});

// $('body') tells it to look at the body. The .append tells it to add whatever following element to the body.

$newSquare.on('click', function() {
    var $div = $('<div>');
    $div.addClass('square');
    $('body').append($div);
});




