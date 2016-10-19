$(function () {
  $("form#madlib").submit(function(event) {
  var name = $("input#name").val();
  var adjective = $("input#adjective").val();
  var verb = $("input#verb").val();
  var noun = $("input#noun").val();

  $(".adjective").text(adjective);
  $(".noun").text(noun);
  $(".verb").text(verb);
  $(".name").text(name);

  $("#content").show();
  event.preventDefault();
  });
});
