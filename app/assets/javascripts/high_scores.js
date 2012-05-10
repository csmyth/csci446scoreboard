# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(function() {
  populateHighScores();
});

function populateHighScores() {
  <% @high_scores.each do |highscore| %>
    $('div#highScores').append("<p>" + <%= highscore.name %> + " " + <%= highscore.score %> + "</p>");
  <% end %>
}

