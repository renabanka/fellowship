/**
 * Created by renabanka on 9/30/16.
 */


var shire = $('#middle-earth').children('article')[0];
$.each(hobbits, function (index, value) {
    $(shire).append(list);
    $('.hobbit').append('<li>' + value + '</li>');
});