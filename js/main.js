var sparkyActions = [
  "Sparky is hungry!",
  "Sparky is really curious about the new person the group met.",
  "Sparky fell asleep. (Don't wake the baby)",
  "Sparky sneezes. (Shoot a firebolt at random person 1d6 if hit)",
  "Sparky doesn't want to wear his hood right now.",
  "Sparky is scared!",
  "Sparky wants to be carried by someone else.",
  "Sparky got a hold of something he shouldn't have.",
  "Sparky takes off his clothes and runs around.",
  "Sparky chases a cat/rat/small child/laser pointer/etc",
  "Sparky wants to be like Ragna when he grows up",
  "Sparky wants to be like Crispin when he grows up",
  "Sparky wants to be like Sapphire when he grows up",
  "Sparky wants to be like Dweezil when he grows up",
  "Sparky wants to be like Pegasus when he grows up",
  "Sparky wants to be like (Rival NPC) when he grows up",
  "Sparky picked something up while you weren't looking",
  "Sparky wants to walk.",
  "Sparky wet himself.",
  "Sparky loves you! (Whoever is holding him right now)"
]
var flipCard = function(e) {
  console.log('flipCard fired');
  $(e.currentTarget).toggleClass('flip', true);
};
var spinCard = function(e, callback) {
  console.log('spinCard fired');
  $('#action-number').text( '?' );
  $('#action-text').text('');
  var $cardDiv = $(e.currentTarget);
  $cardDiv.toggleClass('flip', false);
  $cardDiv.toggleClass('spinning', true);
  $cardDiv.one('animationend', function(e) {
    console.log('animationend fired');
    $cardDiv.toggleClass('spinning', false);
    callback(e);
  });
};
var populateCard = function(e) {
  var $cardDiv = $(e.currentTarget);
  var randomIndex = Math.floor(Math.random() * sparkyActions.length);
  var sparkyAction = sparkyActions[randomIndex];
  $('#action-number').text( (randomIndex + 1).toString() );
  $('#action-text').text(sparkyAction);
};


$(function() {
  var $sparky = $('#sparky');
  var handleClick = function(e) {
    if ($(e.currentTarget).hasClass('spinning')) {return}
    spinCard(e, function(e) {
      populateCard(e);
      flipCard(e);
    });
  };  

  $sparky.on('click', handleClick);
});