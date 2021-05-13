/*
  Shoutout to Lightpohl for the gb-dl program as well as the example script!
  Thirteen Deadly Sims.js
  Description: The script below will download all the current episodes in the Mass Alex show.
  Required: Node
  How to Run: `npx Thirteen Deadly Sims.js`
*/

/*
  `execSync` lets us run any command in our shell. We're going to wrap
  it in in a simple `for` loop to download all the episodes of Mass Alex.
*/
let execSync = require("child_process").execSync;

// Replace `YOUR_API_KEY` with the key from https://www.giantbomb.com/api
let apiKey = "0fa6a1a2734ccfac3bd8d0b1e1b7e41864512caa";

/*
  Finding the `endingEpisode` is a little tricky if there are multiple seasons
  of a show, but you can add the `--info` command with different `--video-number` numbers
  to find it before running the script.
*/
let showName = "Thirteen Deadly Sims";
let startingEpisodeNumber = 0; // 13 Deadly sims episode 10
let endingEpisode = 9; //Steal My sunshine episode 01

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