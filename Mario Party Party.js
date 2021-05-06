/*
  Shoutout to Lightpohl for the gb-dl program as well as the example script!
  Mario Party Party.js
  Description: The script below will download all the current episodes in the Mass Alex show.
  Required: Node
  How to Run: `npx "Mario Party Party.js`
*/

/*
  `execSync` lets us run any command in our shell. We're going to wrap
  it in in a simple `for` loop to download all the episodes of Mass Alex.
*/
let execSync = require("child_process").execSync;

// Replace `YOUR_API_KEY` with the key from https://www.giantbomb.com/api
let apiKey = "YOUR API KEY HERE";

/*
  Finding the `endingEpisode` is a little tricky if there are multiple seasons
  of a show, but you can add the `--info` command with different `--video-number` numbers
  to find it before running the script.
*/
let showName = "Mario Party Party";
let startingEpisodeNumber = 0; // Mario Party Party Fusion Frenzy
let endingEpisode = 11; //Mario Party Party 1

/*
  For simplicity, we're going to download in reverse order, but you could
  switch it by adjusting the `for` loop below.
*/
for (let i = startingEpisodeNumber; i <= endingEpisode; i++) {
  try {
    execSync(
      `npx gb-dl --api-key ${apiKey} --show-name ${showName} --video-number ${i}`,
      { stdio: "inherit" } // this will allow us to see the console output as it downloads
    );
  } catch (error) {
    console.error(error);
    console.log("Something happened! Moving onto the next video.");
  }
}