# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Important Disclaimer for New Users

***Until the next major patch, this project utilizes JavaScript objects as a database for user items as opposed to an external database. Tweets are only saved as long as the server is active. Restarting or disabling the host server will result in a loss of user data including previously created tweets.***

***Additionally, at this stage in development we currently do not have functional "Report", "Retweet", or "Like" functionality, and our tweet mechanism generates random users each time you submit a new tweet. We hope to resolve this in a future update.***

***Despite these challenges, we're convinced this app is still better than Twitter.***

## Main Features

### The Tweeter Page

So you've taken the leap and joined our burgeoning community of tweetiebirds! Welcome! 

Tweeter is a single page app, so once you've loaded up the web server and visited the URL, you've arrived! Everything that can be done on Tweeter is accessible via this landing page, which utilizes **jQuery** and **AJAX** in order to operate without the need to refresh.

As indicated in the above screenshots, the view on the landing page may vary depending on the screen size of your device.

#### Mobile View

If you're visiting tweeter on-the-go, the user experience will load up on a mobile phone or tablet with a view that hides the navigation bar to better accommodate the column style view of content. At the top of your screen, you'll see the Tweeter logo and "Write a new tweet" followed by your user avatar and username. Below that is a placeholder for users to input their tweets and post it to the site. Scrolling down from there, users may view their tweets and the tweets of others.

#### Desktop View

The expanded view of a desktop screen (Above 1024 resolution) changes the view of the landing page to include a navigation bar, and offsets the user profile to the left hand side while bringing the new tweet form and active tweet view to the right hand side. This transition makes for a more optimal user experience, removing the need to scroll to see new content on larger screens.

#### Existing Tweets

Users may view existing tweets on the landing page. The composition of a tweet is as follows from top to bottom:

1) Avatar and full name (top left) : The full name and photo avatar of the user who authored the tweet.

2) Username/User Handle (top right) : The user handle of the user who psoted the tweet, preceded by the @ symbol. 

3) The Tweet (center) : The message the user has written in their tweet post, underlined by a straight line divider. 

4) Time since tweet (bottom left) : This is the time that has passed since the user posted their tweet.

5) Non-functional Icons (bottom right) : The Flag, Re-tweet and Like icon are currently non functional, however do change color when hovered over. (See above disclaimer).

### Composing a Tweet

Users may compose a tweet post below the "Compose Tweet" label, in the provided text area input which contains the placeholder message *"What are you humming about?"* 

#### The following two criteria exist for a tweet to post:

- A user may not tweet an empty post, they will encounter an error message.
- A user may not tweet a post above the character limit of 140 characters. The character counter at the bottom right of the form will turn red to indicate your tweet length is over the limit. Attempting to submit a long tweet will produce an error message. 

Given those conditions pass, the tweet will automatically appear above the second most recent tweet, using the **Magic of the internet.**

