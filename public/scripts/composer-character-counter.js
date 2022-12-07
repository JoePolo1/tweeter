$(document).ready(function() {
  $("#tweet-text").on("input", onInput)

});

// Responsible for adding to the counter of characters after being called above on input
const onInput = function()  {
  
  const input = $(this);
  const text = input.val();
  const count = (140 - text.length);

  const output = $(this).siblings(".buttonCounter").children(".counter");

  if (count < 0)  {
    $(".counter").addClass("counterOverLimit");
  }
  if (count > 0)  {
    $(".counter").removeClass("counterOverLimit");
  }
  console.log(count);

  output.text(count);
}



// .buttonCounter
// .counterOverLimit 



