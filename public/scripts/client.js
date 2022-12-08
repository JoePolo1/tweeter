/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Arrow version of a DOCUMENT READY jquery function
$(() => {

  // const data = [
  //   {
  //     "user": {
  //       "name": "Bilbo Baggins",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@TheRoadGoesEverOn"
  //     },
  //     "content": {
  //       "text": "It's my 111th birthday! 🎂🎂🎂"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Frodo Baggins",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@mrUnderhill"
  //     },
  //     "content": {
  //       "text": "Anyone down for a long hike this weekend? I was thinking of heading east, my uncle said they have some great views."
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  // renderTweets(data);

  // Responsible for the input form data 
  const $inputForm = $(".tweet-form")
  // Responsible for the input form data 
  $inputForm.on("submit", (event) => {
    // Prevents page refresh
    event.preventDefault();
    // Serializes the input text into URL Encoded data
    const formTextInput = $inputForm.serialize();
    // Creates POST request to server
    $.post("/tweets", formTextInput, (response) => {
      //TEST log to console. 
      console.log(response);
      // Loads the new post onto the page immediately
      tweetFetcher();
    })
  });

  // Responsible for laoding/getting/fetching tweets from server
  const tweetFetcher = function() {
    $.get('/tweets', (tweets) =>  {
      console.log(tweets);
      renderTweets(tweets);
    })
  };

  // Calls tweetFetcher on page load
  tweetFetcher();


  // This function is responsible for rendering and appending new tweets
  const renderTweets = function (tweets) {
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
  const createTweetElement = function (tweet) {
    const $tweet = $(`
  <article class="single-tweet">
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

});



