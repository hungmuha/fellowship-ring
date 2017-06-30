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

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var rivendell;
var budUl;
var hobbitss;
var ulHB;


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("Section");
  //middleEarth.setAttribute("id","middle-earth");
  // inside, add each land as an article tag
  //var land = function (){
     // inside each article tag include an h1 with the name of the land
    for(var i=0; i<lands.length; i++){
      var landContent = document.createElement("article");
      var articleLand=document.createTextNode(lands[i]);
      var h1 = document.createElement("h1");
      h1.appendChild(articleLand);
      landContent.appendChild(h1);
      middleEarth.appendChild(landContent);

    }
  // append middle-earth to your document body
    body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
    hobbitss = document.createElement('ul');
  for(var i=0; i<hobbits.length; i++){
    var hobList=document.createElement("li");
    var hobNote=document.createTextNode(hobbits[i]);
    hobList.appendChild(hobNote);
    hobbitss.appendChild(hobList);
    hobList.setAttribute('class','hobbits[i]');
  }
 var theShire=document.querySelector("article");
 theShire.appendChild(hobbitss);
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
}
 makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring=document.createElement('div');
    ring.setAttribute('id','the-ring');
    ring.setAttribute('class','magic-imbued-jewelry');
    ring.addEventListener('click',nazgulScreech);
    var frodo=document.querySelector('li');
    frodo.appendChild(ring);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside=document.createElement('aside');
    budUl=document.createElement('ul');
  for(var i=0;i<buddies.length;i++){
    var budLi=document.createElement('li');
    var budContent=document.createTextNode(buddies[i]);
    budLi.appendChild(budContent);
    budUl.appendChild(budLi);
  }
  aside.appendChild(budUl);
  var rivendell=document.querySelector('article').nextSibling;
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragon= document.querySelector('aside').firstChild.childNodes[3];
  aragon.textContent='Aragorn';

}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var leave=document.querySelector("ul");
  rivendell=document.querySelector('article').nextSibling;
  rivendell.appendChild(leave);
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  ulHB=document.createElement('ul');
  ulHB.appendChild(budUl);
  ulHB.appendChild(hobbitss);

  var fellowShip=document.createElement('div');
  fellowShip.setAttribute('id','the-fellowship');
  fellowShip.appendChild(ulHB);
  
  //var stupidBitch=document.querySelector('article');
  //for(i=0;i<rivendell.length;i++){fellowship.appendChild(rivendell[i]);}
  //var stupidHobbit=document.
  //fellowShip.appendChild(stupidElves);
  rivendell.appendChild(fellowShip);
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
