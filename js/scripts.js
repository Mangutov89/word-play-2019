$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentences = $("#ans1").val().split(" ");
    var newSentences = [];
    sentences.forEach(function(sentence) {
      if (sentence.length >= 3) {
        newSentences.push(sentence);
        newSentences.push(" ");
      }
    });
    newSentences.reverse();
    newSentences.join();
    $("ul").append(newSentences);

    event.preventDefault();
  });
});
