console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire','Rivendell', 'Mordor'];
var body = document.body;
var section = $('<section></section>');

var sectionme = $(section).prop('id','middle-earth');
var list = $('<ul></ul>');
var list2 = $('<ul></ul>');
var unorderedlisthobbit = $(list).prop('class','hobbit');
var aside = $('<aside></aside>');
var unorderedlistbuddies = $(list2).prop('class','buddies');
var aside = $(aside).append(list2);
var divfellow = $('<div class="the-fellowship"></div>');
var divmordor = $('<div id="mount-doom"></div>');
var divgollum = $('<div id="gollum"></div>');


//Part 1:

function makeMiddleEarth() {
  $.each(lands, function(index, value) {
    $(body).append(sectionme);
    $('#middle-earth').append('<article>' + '<h1>' + value + '</h1>' +'</article>');
  });
}
  makeMiddleEarth();


//Part 2:

function makeHobbits() {
  var shire = $('#middle-earth').children('article')[0];
  $.each(hobbits, function (index, value) {
    $(shire).append(list);
    $('.hobbit').append('<li>' + value + '</li>');
  });

}
  makeHobbits();


//Part 3:

function keepItSecretKeepItSafe(){
  var div = $('<div></div>');
  var divthering = $(div).prop('id','the-ring');
  var div = $(div).prop('class','magic-imbued-jewelry');
  var frodo = $('.hobbit').children('li')[0];
  $(frodo).append(div);
}

  keepItSecretKeepItSafe();

//Part 4:

function makeBuddies(){
  var buddiesinrivendell = $('#middle-earth').children('article')[1];
  $.each(buddies, function (index, value) {
    $(buddiesinrivendell).append(list2);
    $('.buddies').append('<li>' + value + '</li>');
  });

}

  makeBuddies();

//Part 5:

function beautifulStranger(){
  var j = $('ul li').eq(7);
  $(j).html('Aragorn');
}

  beautifulStranger();

//Part 6:

function leaveTheShire(){
  var hobs = $(".hobbit").detach();
  var placeToGo = $('.buddies').parent('article');
  $(placeToGo).append(hobs);
}

  leaveTheShire();

//Part 7:

function forgetTheFellowship() {
  var fellow = $('#middle-earth').children('article')[1]
  var limiddle = $('#middle-earth').children('article').children('ul').children('li');
  $.each(limiddle, function (index, value) {
    $(fellow).append(value);
    alert(index +  ' has been added to your party');


  });
}

  forgetTheFellowship();

//Part 8:

function theBalrog(){
  var g = $('li').eq(0);
  $(g).html('Gandalf the White');
  $(g).css("backgroundColor","white");
  $(g).css("border", "3px solid gray");
  $(g).css("color", "black");

}

  theBalrog();

//Part 9:

function hornOfGondor() {
  alert("The horn of gondor has been blown");
  var b = $('li').eq(4);
  $(b).detach();

}

  hornOfGondor();

//Part 10:

function itsDangerousToGoAlone() {
  var newDiv1 = $('#middle-earth').children('article')[2];
  $(newDiv1).append(divmordor);
  var f = $('li').eq(4);
  var s = $('li').eq(5);
  $(newDiv1).append(f);
  $(newDiv1).append(s);

}

  itsDangerousToGoAlone();

//Part 11:

function weWantsIt() {
  var newDiv1 = $('#middle-earth').children('article')[2];
  $(newDiv1).append(divgollum);
  var removering = $('#the-ring').detach();
  var removemagic = $('.magic-imbued-jewelry').detach();
  $(divgollum).append(removering);
  $(divgollum).append(removemagic);
  $('#mount-doom').append(divgollum);

}

  weWantsIt();

//Part 12:

function thereAndBackAgain(){
  $(divgollum).detach();
  var six = $('li').eq(6);
  var seven = $('li').eq(7);
  var fourth = $('li').eq(4);
  var fifth = $('li').eq(5);
  $(six).detach();
  $(seven).detach();
  $(fourth).detach();
  $(fifth).detach();
  var shire = $('#middle-earth').children('article')[0];
  $(shire).append(six);
  $(shire).append(seven);
  $(shire).append(fourth);
  $(shire).append(fifth);

}

  thereAndBackAgain();