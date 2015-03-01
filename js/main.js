var $form = $('.form');
var $action = $('.action');
var $list = $('.list');
var $checkbox = $('.checkbox');

$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>');
    var $actionH2 = $('<h2>').html($action.val());
    var $checkbox = $('<div>').addClass('checkbox');
    
    $li.append($actionH2);
    $list.append($li);
    $list.append($checkbox);

});
  
$list.on('click', 'li', function () {
    $(this).addClass('js-strike');
});

$checkbox.on('click', 'div', function () {
        $(this).remove($li);
        $(this).remove($checkbox);
});


   
//var actionValue = $action.val(); 
// var $form = $('.form');
// var $name = $('.name');
// var $age = $('.age');
// var $dinos = $('.dinos');

// $form.on('submit', function (e) {
//   e.preventDefault();

// var $li = $('<li>');
// var $nameH2 = $('<h2>').html($name.val());
// var $ageP = $('<p>').html('Age: ' + $age.val() + ' million years old');
// var $diet = $('[name="diet"]:checked')

// $li.append($nameH2).append($ageP).addClass($diet.val());
// $dinos.append($li);
// });

// $dinos.on('click', 'li', function () {
//   $(this).toggleClass('js-highlight');
// });