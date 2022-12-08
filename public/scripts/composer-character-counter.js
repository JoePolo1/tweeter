$(document).ready(function() {
  $("#tweet-text").on("input", onInput)
});

// Responsible for adding to the counter of characters after being called above on input
const onInput = function() {

  const input = $(this);
  const text = input.val();
  const count = (140 - text.length);

  const output = $(this).siblings(".buttonCounter").children(".counter");

  // Changes counter text color if above or below char limit
  if (count < 0) {
    $(".counter").addClass("counterOverLimit");
  }
  if (count > 0) {
    $(".counter").removeClass("counterOverLimit");
  }
  output.text(count);
}


