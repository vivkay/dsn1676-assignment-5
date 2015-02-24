var $add = $('.add');
var $adding = $('#add-item');
var $form = $('.form');
var $list = $('.list');

$form.on('submit', function (e) {
    e.preventDefault();
    var $li = $('<li>');
    //$list.append($li);

    var addValue = $add.val();
    var $addH2 = $('<h2>').html($add.val());

    $li.append($addH2);
    $list.append($li);
});

