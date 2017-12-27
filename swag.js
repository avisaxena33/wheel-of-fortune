var score = 0;
var scoreTwo = 0;
var scoreThree = 0;
var testWords = ["hello", "goodbye", "legend"];
var lettersFound = 0;
var chosenWord = "";
var wheelValues = [500, 750, -score, 350, 250, 600, 400, 150, 200, 450, 100, 300];
var imageNames = ["images/wheel01.jpg", "images/wheel02.jpg", "images/wheel03.jpg", "images/wheel04.jpg", "images/wheel05.jpg", "images/wheel06.jpg", "images/wheel07.jpg", "images/wheel08.jpg", "images/wheel11.jpg", "images/wheel13.jpg", "images/wheel16.jpg", "images/wheel19.jpg"];
var letters = [];
var guess = "";
var spunValue = 0;
var indexGuess = 0;
var wordList = [];
var indexGuessTwo = 0;
var correctGuess = [];
var letterCounter = 0;
var indexPictures = 0;
var guessedLetters = [];
var largeGuess = [];
var spunNum = 0;
var index = 0;
var swaggyP = 0;
var plsHelp = 0;
var index=0;

function getName() 
{
	var name = prompt("What is your name?");
	var nameTwo = prompt("What is your name?");
	var nameThree = prompt("What is your name?");
	document.getElementById("nameField").innerHTML = name;
	document.getElementById("why").innerHTML = " " + nameTwo;
	document.getElementById("tho").innerHTML = " " + nameThree;

}

function startGame()    
{
   document.getElementById('score').innerHTML = score;
   chosenWord = testWords[Math.floor(Math.random()*3)];
   console.log(chosenWord);
   letterCounter = chosenWord.length;
   
   for (var r = 0; r < chosenWord.length; r++)
   {
       wordList.push("_");
   }
   document.getElementById('blanks').innerHTML = wordList.join(" ");
   letters = chosenWord.split('');
   console.log(letters);
}



function spinWheel()
{
    spunValue = wheelValues[Math.floor(Math.random() * 11)];
    console.log(spunValue);
    spinImage();
}

function spinImage()
{
    console.log("This is" + swaggyP);
     for (var e = 0; e < wheelValues.length; e++)
    {
        if (spunValue === wheelValues[e])
        {
            if (swaggyP < 1)
            {
                var elem = document.createElement("img");
                elem.setAttribute("src", imageNames[e]);
                console.log(imageNames[e]);
                console.log(e);
                document.getElementById("pictures").appendChild(elem);
                swaggyP++;
            }
            
            else if (swaggyP === 1)
            {
                document.getElementById("pictures").style.visibility = "hidden";
                document.getElementById("swaglag").src = imageNames[e];
            }
        }
    }
}



function checkGuess()
{
    guess = prompt("Enter your guess");
    
    if (guess.length > 0)
    {
                
    }
    for (var jesus = 0; jesus < guessedLetters.length; jesus++)
    {
        if (guess === guessedLetters[jesus])
        {
            document.getElementById('guessedboas').innerHTML = "You already guessed it";
            return;
        }
    }
    guessedLetters.push(guess);
    
    console.log(guessedLetters);
    for (var z = 0; z < chosenWord.length; z++)
    {
        if (guess === letters[z])
        {
            lettersFound++;
            correctGuess.push(guess);
            score += spunValue;
            indexGuess = letters.indexOf(guess);
            wordList[indexGuess] = guess;
            document.getElementById('blanks').innerHTML = wordList.join(" ");
            document.getElementById('score').innerHTML = score;

        for(var x = indexGuess + 1; x < chosenWord.length; x++) 
            {
                if (guess === letters[x])
                {
                    lettersFound++;
                    correctGuess.push(guess);
                    score += spunValue;
                    indexGuessTwo = x;
                    wordList[indexGuessTwo] = guess;
                    document.getElementById('blanks').innerHTML = wordList.join(" ");
                    x = 500;
                    z= 500;
                    document.getElementById('score').innerHTML = score;
                }
            } 
        }
    }
    if (lettersFound === chosenWord.length)
    {
        document.write("YOU HAVE WON!");
        return;
    }

    }
    
function startGameTwo()
{
    lettersFound = 0;
    letters = [];
    guess = "";    
    spunValue = 0;
    indexGuess = 0;
    wordList = [];
    indexGuessTwo = 0;
    correctGuess = [];
    letterCounter = 0;
    guessedLetters = [];
    chosenWord = testWords[Math.floor(Math.random()*3)];
}

function changeBanner()
{ 
  [].forEach.call(document.images,function (v,i) { document.images[i].hidden = i!==index});
  index = (index+1) % document.images.length;

}

