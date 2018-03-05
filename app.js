// ==============================
//       Characters and places
// ==============================

var hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

var lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  var $middleEarthSection = $('<section></section>');
  console.log($middleEarthSection)
  $middleEarthSection.attr('id', 'middle-earth');
  // add the section to the body
  $('body').append($middleEarthSection);

  // add each land to the section as article tags-- try using a loop
  // inside each article tag include an h1 with the name of the land

  for (let i = 0; i < lands.length; i++) {
    // create the article tag
    var $landArticle = $('<article></article>');
    console.log($landArticle);
    // assign the id of the corresponding article tag as the name of the land
    $landArticle.attr('id',lands[i]);
    // add each land to the middle earth
    $middleEarthSection.append($landArticle);

    // create an h1 for each article
    var $landH1 = $('<h1></h1>');
    console.log($landH1)
    // assign the name of the land inside the h1
    $landH1.html(lands[i])
    // add the name of the land to the corresponding land
    $landArticle.append($landH1);
  }
}

function makeHobbits() {
  console.log('Make hobbits');
  var $listShire = $('<ul></ul>');
    // list the hobbits alphabetically.  Maybe use the .sort() method.
  for (let i = 0; i < hobbits.sort().length; i++) {
  var $hobbitsList = $('<li/>');
  // give each hobbit a class of "hobbit"
  $hobbitsList.attr('class', 'hobbits');
  $hobbitsList.html(hobbits[i]);
  $listShire.append($hobbitsList);
    }
  // display an unordered list of hobbits in the shire
  $('#the-shire').append($listShire);
}
  // list the hobbits alphabetically.  Maybe use the .sort() method.

function keepItSecretKeepItSafe() {
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  var $divring = $('<div/>');
  $divring.attr('id', 'the-ring').html('The Ring')
  // add the ring as a child of Frodo
  $('ul li:first-child').append($divring);
}

function makeBaddies() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  var $mordorList = $('<ul/>');
    for (let i = 0; i < baddies.length; i++) {
      var $baddiesList = $('<li/>');
      $baddiesList.attr('class','baddies');
      $baddiesList.html(baddies[i]);
      $mordorList.append($baddiesList);
    }
    $('#mordor').append($mordorList);

}

function makeBuddies() {
  // create an aside tag and append it below mordor
  var $mordorAside = $('<aside/>')
  $('#middle-earth').append($mordorAside);
  // display an unordered list of buddies in the aside
  var $buddies = $('<ul/>');
  for (let i = 0; i <buddies.length; i++) {
    var $buddiesList = $('<li/>');
     // give each of the buddies a class of "buddy"
    $buddiesList.attr('class', 'buddies');
    $buddiesList.html(buddies[i]);
    $buddies.append($buddiesList);
  }
  $mordorAside.append($buddies);
}

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
  $('#the-shire ul').appendTo('#rivendell');
}

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  $('aside ul li:nth-child(4)').html('Aragorn');
}

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  $('aside ul li').appendTo('#rivendell ul');
  // create a new div called 'the-fellowship'
  var $fellowship = $('<div/>');
  $fellowship.attr('id', 'the-fellowship');
  $('body').append($fellowship);
    // add an h1 with the text 'The Fellowship' to this new div
  var $fellowshipH1 = $('<h1/>');
  $fellowshipH1.html('The Fellowship');
  $fellowship.append($fellowshipH1);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  var $fellowshipList = $('<ul/>');
  $('#the-fellowship').append($fellowshipList);
    // $('#rivendell ul li:first-child').appendTo($fellowshipList);
    // alert('Frodo has Joined your party');
    // $('#rivendell ul li:nth-child(1)').appendTo($fellowshipList);
    // alert('Merry has Joined your party');
    // $('#rivendell ul li:nth-child(2)').appendTo($fellowshipList);
    // alert('Pippin has Joined your party');
    // $('#rivendell ul li:nth-child(3)').appendTo($fellowshipList);
    // alert('Sam has Joined your party');
    // $('#rivendell ul li:nth-child(4)').appendTo($fellowshipList);
    // alert('Gandalf has Joined your party');
    // $('#rivendell ul li:nth-child(5)').appendTo($fellowshipList);
    // alert('Legolas has Joined your party');
    // $('#rivendell ul li:nth-child(6)').appendTo($fellowshipList);
    // alert('Gimli has Joined your party');
    // $('#rivendell ul li:nth-child(7)').appendTo($fellowshipList);
    // alert('Aragorn has Joined your party');
    // $('#rivendell ul li:nth-child(8)').appendTo($fellowshipList);
    // alert('Boromir has Joined your party');
//tried to create a loop wasnt sure how to create the delay. Then worked on sepersting it with no luck
    $('#rivendell ul li').appendTo("#the-fellowship ul");


  // after each character is added make an alert that they have joined your party
}

function theBalrog() {
  var $gandalf= $('#the-fellowship ul li:nth-child(5)')
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  $gandalf.html('Gandalf the White');
   // add a class "the-white" to this element
  $gandalf.attr('class', 'the-white');
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('Horn of Gondor has been blown');

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  $('#the-fellowship ul li:last-child').css("text-decoration", "line-through");
  // Remove the Uruk-Hai from the Baddies on the page
  $('#mordor ul li:nth-last-child(2)').remove();
}

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  $('#the-fellowship ul li:first-child').appendTo('#mordor ul');
  $('#the-fellowship ul li:nth-child(3)').appendTo('#mordor ul');
  // add a div with an id of 'mount-doom' to Mordor
  var $mountDoom = $('<div/>');
  $mountDoom.html('Mount Doom');
  $mountDoom.attr('id','mount-doom');
  $('#mordor').append($mountDoom);
}

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var $gollum = $('<div/>');
  $gollum.html('Gollum');
  $gollum.attr('id','gollum');
  $('#mordor').append($gollum);
  // Remove the ring from Frodo and give it to Gollum
  $('#the-ring').appendTo('#gollum');
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  if ($gollum.children('id') === 'the-ring'){
    $('#the-ring').css('color', 'red');
  }

  // Move Gollum into Mount Doom
  $gollum.appendTo('mount-doom');
}

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  $('#gollum').remove();
  // remove all the baddies from the DOM
  $('.baddies').remove();
  // Move all the hobbits back to the shire
  $('.hobbits').appendTo('#the-shire');
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};