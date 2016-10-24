$(function () {
  $("#madlib").submit(function(event) {
  var blanks = ["name", "adjective", "verb", "noun"];


  blanks.forEach(function(blank){
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
  });


  $("#content").show();
  event.preventDefault();
  });
});
