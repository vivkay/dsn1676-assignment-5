var $add = $('.add');
var $form = $('.form');
var $list = $('.list');


$form.on('submit', function (e) {
    e.preventDefault();
    var $li = $('<li>');
    var $button = $('<button>');

    var addValue = $add.val();
    var $addH2 = $('<h2>').html($add.val());

    $li.append($addH2);
    $list.append($li);
    $li.append($button);
    
    $button.addClass('addbutton');
});

