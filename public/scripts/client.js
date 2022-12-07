/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Arrow version of a DOCUMENT READY jquery function
$(() => {

  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Bilbo Baggins",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@TheRoadGoesEverOn"
    },
    "content": {
      "text": "It's my 111th birthday! 🎂🎂🎂"
    },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // This appends our new tweet data to tbe bottom of the main tweet container section
  $('.all-tweets').append($tweet);

});

const createTweetElement = function (tweet) {
  const $tweet = $(`<article class="single-tweet">
  <header>
    <!-- Div holds the avatar and name -->
    <div>
      <img class="tweet-avatar" src=${tweet.user.avatars}>
      <h4 class="full-name">${tweet.user.name}</h4>
    </div>

    <!-- Username handle is also stored in the header -->
    <h4 class="user-handle">${tweet.user.handle}</h4>
  </header>

  <!-- Tweet text below -->
  <div class="tweettext">
    <p>${tweet.content.text}</p>
  </div>
  <footer>
    <p>${tweet.created_at}</p>
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

