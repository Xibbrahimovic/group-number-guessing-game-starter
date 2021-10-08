const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const guessesArray = require("./modules/guesses");
const getRandom = require("./modules/random");
let resultsArray = [];
let roundCounter = 0;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

// ****** GET & POST Routes go here *********

//GET for when the submit button is clicked
app.get("/results", (req, res) => {
  console.log("this is the submit button GET");
  res.send(resultsArray);
});

//GET for reset button
app.get("/reset", (req, res) => {
  console.log("this is the reset button GET");
  resultsArray = [];
  roundCounter = 0;
});

app.post("/guesses" , (req,res) => {
  console.log("This is req.body", req.body);
  // grabs the guesses from input boxes
  let allGuesses = req.body;

  // guessesArray.push(allGuesses);

  console.log("This is the guesses array!", allGuesses);

  receiveGuesses(allGuesses);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

  
  
let magicNum = getRandom(1, 25);




function receiveGuesses(object) {
  
  checkPlayer(object.playerOneGuess, object.playerTwoGuess, object.playerThreeGuess, object.playerFourGuess)
  // checkPlayer(2, object.playerTwoGuess)
  // checkPlayer(3, object.playerThreeGuess)
  // checkPlayer(4, object.playerFourGuess)
}

function checkPlayer(guess1, guess2, guess3, guess4) {
  // switch(player) {
  //   case 1:
      let p1Guess = guess1;
      if(p1Guess > magicNum) {
        playerOneResult = "too high"
      } else if(p1Guess < magicNum) {
        playerOneResult = " too low";
      } else {
        playerOneResult = "winner";
      }
      console.log("This is the playerOneResult: ", playerOneResult);
      // break;
  //   case 2:
      let p2Guess = guess2;
      if(p2Guess > magicNum) {
        playerTwoResult = "too high"
      } else if(p2Guess < magicNum) {
        playerTwoResult = "too low";
      } else {
        playerTwoResult = "winner";
      }
      console.log("This is the playerOneResult: ", playerTwoResult);
      console.log('magicNum is: ', magicNum);
  //    // break;
  // // case 3:
      let p3Guess = guess3;
      if(p3Guess > magicNum) {
        playerThreeResult = "too high"
      } else if(p3Guess < magicNum) {
        playerThreeResult = "too low";
      } else {
        playerThreeResult = winner;
      }
  //   // break;
  // // case 4:
      let p4Guess = guess4;
      if(p4Guess > magicNum) {
        playerFourResult = "too high"
      } else if(p4Guess < magicNum) {
        playerFourResult = "too low";
      } else {
        playerFourResult = "winner";
      }
  //   // break; 
  // }

  roundCounter++;
  let results = {
      round: roundCounter,
      playerOneGuess: p1Guess,
      playerOneResult: playerOneResult,
      playerTwoGuess: p2Guess,
      playerTwoResult: playerTwoResult,
      playerThreeGuess: p3Guess,
      playerThreeResult: playerThreeResult,
      playerFourGuess: p4Guess,
      playerFourResult: playerFourResult
  }
  resultsArray.push(results);
}