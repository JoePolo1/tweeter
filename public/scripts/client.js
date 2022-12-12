/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fat arrow version of a DOCUMENT READY jquery function
$(() => {

  const escaper = function(string)  {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(string));
    return div.innerHTML;
  };

  // Responsible for the input form data
  const $inputForm = $(".tweet-form");

  // Responsible for the input form data
  $inputForm.on("submit", (event) => {

    // Prevents page refresh
    event.preventDefault();

    // Serializes the input text into URL Encoded data
    const rawInput = $("#tweet-text").val().trim();
    const formTextInput = $inputForm.serialize();
    
    // Runs validator prior to post. False means the condition is a fail and to stop running.
    if (validator(rawInput) !== "Validator Passed.")  {
      return;
    }
    
    // Creates POST request to server
    $.post("/tweets", formTextInput, (response) => {

      // Clear the text area
      $("#tweet-text").val('');

      // Set the counter back to 140 on clearing text for new tweet
      $(".counter").text(140);

      //TEST log to console.
      console.log(response);

      // Loads the new post onto the page immediately
      tweetFetcher();
    });
  });

  // Responsible for loading/getting/fetching tweets from server
  const tweetFetcher = function() {
    $.get('/tweets', (tweets) =>  {
      console.log(tweets);
      renderTweets(tweets);
    });
  };

  // Calls tweetFetcher on page load
  tweetFetcher();


  // Helper Function for validator
  // Limits input to only occur when within limitations of a new tweet (length, content etc)
  const validator = function(tweetInput) {
    if ((tweetInput === null) || (tweetInput === "")) {
      $("#nullMsg").slideDown("slow", ()  =>  {});
      return setTimeout(()  =>  $('.errMessageOff').slideUp(), 3500);
    } else if (tweetInput.length > 140) {
      $("#limitMsg").slideDown("slow", ()  =>  {});
      return setTimeout(()  =>  $('.errMessageOff').slideUp(), 3500);
    } else {
      return "Validator Passed.";
    }
  };

  // This function is responsible for rendering and appending new tweets
  const renderTweets = function(tweets) {
    // Clears pre-existing cached data
    $('.all-tweets').empty();
    // Loops through the array tweets using a For Of loop
    for (const tweet of tweets) {
      // Calls createTweetElement for each tweet and
      // takes return value and appends it to the tweets container
      $('.all-tweets').prepend(createTweetElement(tweet));
    }
  };


  // This function is responsible for configuring the elements of a tweet with the provided format
  const createTweetElement = function(tweet) {
    const timeFormatted = timeago.format(new Date(tweet.created_at));
    const fullName = tweet.user.name;
    const username = tweet.user.handle;
    const inputText = tweet.content.text;
    const avatar = tweet.user.avatars;
    const $tweet = $(`
    <article class="single-tweet">
    <header>
      <!-- Div holds the avatar and name -->
      <div>
        <img class="tweet-avatar" src=${avatar}>
        <h4 class="full-name">${fullName}</h4>
      </div>

      <!-- Username handle is also stored in the header -->
      <h4 class="user-handle">${username}</h4>
    </header>

    <!-- Tweet text below -->
    <div class="tweettext">
      
    <p>${escaper(inputText)}</p>
    </div>
    <footer>
      <p>${timeFormatted}</p>
      <div class="tweet-links">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>
    <br>`);
    console.log(tweet);
    return $tweet;
  };

});



