


// GOAL: Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript. Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.
// N.B.: nessuna modifica consentita a HTML o CSS


// A fa-bars e a fa-times aggiungo/tolgo con un click tramite il toggleClass la classe active.

$('.fa-bars, .fa-times').click(function() {

  $('.hamburger-menu').toggleClass('active')

})
