/* import React, { useState, useEffect } from 'react';

function BullsAndCowsGame() {
  const [secretNumber, setSecretNumber] = useState('');
  const [playerName, setPlayerName] = useState('Player');
  const [attempts, setAttempts] = useState(10);
  const [trackAttempts, setTrackAttempts] = useState(true);
  const [guess, setGuess] = useState('');
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [messages, setMessages] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [incorrectInputs, setIncorrectInputs] = useState(0);
  const [bullsArray, setBullsArray] = useState([]);
  const [cowsArray, setCowsArray] = useState([]);
  const [timePerCorrectAttemptTaken, setTimePerCorrectAttemptTaken] = useState([]);
  const [timePerIncorrectAttemptTaken, setTimePerIncorrectAttemptTaken] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);

  useEffect(() => {
    // Generate secret number on initial render
    startNewGame();
  }, []);

  function startNewGame() {
    let secNumArr = [];
    while (secNumArr.length < 4) {
      const randomDigit = Math.floor(Math.random() * 9) + 1;
      if (!secNumArr.includes(randomDigit)) {
        secNumArr.push(randomDigit);
      }
    }
    setSecretNumber(secNumArr.join(''));
    setSessionStartTime(new Date());
    setMessages([...messages, "A new game has started!"]);
  }

  function handleGuess() {
    const currentStartTime = new Date();
    setStartTime(currentStartTime);
    
    // Validation
    let guessArray = Array.from(guess);
    let checkRepeated = guessArray.filter((num, index, array) => array.indexOf(num) === index);

    if (
      checkRepeated.length !== 4 || 
      guess.length !== 4 || 
      isNaN(guess) || 
      guess.includes('0')
    ) {
      setMessages([...messages, `Sorry ${playerName}, this was INCORRECT INPUT! Your guess: ${guess}`]);
      setIncorrectInputs(incorrectInputs + 1);
      const timeTakenIncorrectInput = (new Date() - currentStartTime) / 1000;
      setTimePerIncorrectAttemptTaken([...timePerIncorrectAttemptTaken, timeTakenIncorrectInput.toFixed(2)]);
    } else {
      let bullsCount = 0;
      let cowsCount = 0;
      for (let i = 0; i <= 3; i++) {
        if (guess.charAt(i) === secretNumber.charAt(i)) {
          bullsCount++;
        } else if (secretNumber.includes(guess.charAt(i))) {
          cowsCount++;
        }
      }

      setBulls(bullsCount);
      setCows(cowsCount);
      setBullsArray([...bullsArray, bullsCount]);
      setCowsArray([...cowsArray, cowsCount]);

      const timeTaken = (new Date() - currentStartTime) / 1000;
      setTimePerCorrectAttemptTaken([...timePerCorrectAttemptTaken, timeTaken.toFixed(2)]);

      if (guess === secretNumber) {
        const totalTimeTaken = (new Date() - sessionStartTime) / 1000;
        setMessages([...messages, `Congratulations ${playerName}, you guessed the secret number ${secretNumber}! Your guess: ${guess}. It took you ${numberOfAttempts + 1} attempts and ${totalTimeTaken.toFixed(2)} seconds.`]);
        setNumberOfRounds(numberOfRounds + 1);
      } else {
        setAttempts(attempts - 1);
        setMessages([...messages, `Wrong! Your guess: ${guess}. You have ${bullsCount} bulls and ${cowsCount} cows. ${attempts - 1} attempts left.`]);
        setNumberOfAttempts(numberOfAttempts + 1);
      }
    }
  }

  return (
    <div>
      <h1>Bulls and Cows Game</h1>
      <p>Welcome {playerName}! Try to guess the 4-digit secret number.</p>
      
      <div>
        <label>Enter your name: </label>
        <input 
          type="text" 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)} 
        />
      </div>
      
      <div>
        <label>How many attempts: </label>
        <input 
          type="number" 
          value={attempts} 
          onChange={(e) => setAttempts(parseInt(e.target.value))} 
        />
      </div>
      
      <div>
        <label>Track previous attempts: </label>
        <input 
          type="checkbox" 
          checked={trackAttempts} 
          onChange={(e) => setTrackAttempts(e.target.checked)} 
        />
      </div>
      
      <div>
        <label>Your Guess: </label>
        <input 
          type="text" 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
        />
        <button onClick={handleGuess}>Submit Guess</button>
      </div>

      <div>
        <h2>Game Messages:</h2>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}

export default BullsAndCowsGame; */

/* import React, { useState, useEffect } from 'react';
import bcg from "./assets/bcg8.jpg"

function BullsAndCowsGame() {
  const [secretNumber, setSecretNumber] = useState('');
  const [playerName, setPlayerName] = useState('Player');
  const [attempts, setAttempts] = useState(10);
  const [trackAttempts, setTrackAttempts] = useState(true);
  const [guess, setGuess] = useState('');
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [messages, setMessages] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [incorrectInputs, setIncorrectInputs] = useState(0);
  const [bullsArray, setBullsArray] = useState([]);
  const [cowsArray, setCowsArray] = useState([]);
  const [timePerCorrectAttemptTaken, setTimePerCorrectAttemptTaken] = useState([]);
  const [timePerIncorrectAttemptTaken, setTimePerIncorrectAttemptTaken] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // Generate secret number on initial render
    startNewGame();
  }, []);

  function startNewGame() {
    let secNumArr = [];
    while (secNumArr.length < 4) {
      const randomDigit = Math.floor(Math.random() * 9) + 1;
      if (!secNumArr.includes(randomDigit)) {
        secNumArr.push(randomDigit);
      }
    }
    setSecretNumber(secNumArr.join(''));
    setSessionStartTime(new Date());
    setMessages([...messages, "A new game has started!"]);
    setAttempts(10);
    setNumberOfAttempts(0);
    setIncorrectInputs(0);
    setBullsArray([]);
    setCowsArray([]);
    setTimePerCorrectAttemptTaken([]);
    setTimePerIncorrectAttemptTaken([]);
    setIsGameOver(false);
  }

  function displayTimeData(array) {
    return array.map((item, index) => `${index + 1}. ${Number(item)}`).join(", ");
  }

  function displayBullsData(array) {
    return array.map((item, index) => `${index + 1}. ${Number(item)}`).join(", ");
  }

  function displayCowsData(array) {
    return array.map((item, index) => `${index + 1}. ${Number(item)}`).join(", ");
  }

  function displayIncInputData(array) {
    return array.map((item, index) => `${index + 1}. ${Number(item)}`).join(", ");
  }
  
  function handleGuess() {
    const currentStartTime = new Date();
    setStartTime(currentStartTime);
    
    let guessArray = Array.from(guess);
    let checkRepeated = guessArray.filter((num, index, array) => array.indexOf(num) === index);

    if (
      checkRepeated.length !== 4 || 
      guess.length !== 4 || 
      isNaN(guess) || 
      guess.includes('0')
    ) {
      setMessages([...messages, `Sorry ${playerName}, this was INCORRECT INPUT! Your guess: ${guess}`]);
      setIncorrectInputs(incorrectInputs + 1);
      const timeTakenIncorrectInput = (new Date() - currentStartTime) / 1000;
      setTimePerIncorrectAttemptTaken([...timePerIncorrectAttemptTaken, timeTakenIncorrectInput.toFixed(2)]);
    } else {
      let bullsCount = 0;
      let cowsCount = 0;
      for (let i = 0; i <= 3; i++) {
        if (guess.charAt(i) === secretNumber.charAt(i)) {
          bullsCount++;
        } else if (secretNumber.includes(guess.charAt(i))) {
          cowsCount++;
        }
      }

      setBulls(bullsCount);
      setCows(cowsCount);
      setBullsArray([...bullsArray, bullsCount]);
      setCowsArray([...cowsArray, cowsCount]);

      const timeTaken = (new Date() - currentStartTime) / 1000;
      setTimePerCorrectAttemptTaken([...timePerCorrectAttemptTaken, timeTaken.toFixed(2)]);

      if (guess === secretNumber) {
        const totalTimeTaken = (new Date() - sessionStartTime) / 1000;
        const congratulatoryMessage = `Congratulations ${playerName}, you guessed the secret number ${secretNumber}! Your guess: ${guess}. It took you ${numberOfAttempts + 1} attempts and ${totalTimeTaken.toFixed(2)} seconds.`
        setMessages([...messages, congratulatoryMessage]);
        setIsGameOver(true);
        showSummary();
      } else {
        setAttempts(attempts - 1);
        setMessages([...messages, `Wrong! Your guess: ${guess}. You have ${bullsCount} bulls and ${cowsCount} cows. ${attempts - 1} attempts left.`]);
        setNumberOfAttempts(numberOfAttempts + 1);

        if (attempts - 1 === 0) {
          setIsGameOver(true);
          showSummary();
        }
      }
    }
  }

  function showSummary() {
    const sessionEndTime = new Date();
    const sessionTimeTaken = (sessionEndTime - sessionStartTime) / 1000;
    setNumberOfRounds(numberOfRounds + 1);

    const summaryMessage = `
      \n\n\n\n\nSummary for the current round:\n
      You have played a total of ${numberOfRounds + 1} round(s) in this session.\n\n
    `;
    const summarySecretNumber = `\nThe secret number for the current round: ${secretNumber}\n`;
    const summarySessionTimeTaken = `\nThe current round of the game lasted: ${sessionTimeTaken.toFixed(2)} second(s)\n`;
    const summaryNumberOfAttempts = `\nNumber of attempts taken in the current round: ${numberOfAttempts}\n`;
    const summaryTimePerCorrectAttemptTaken = `\nTime-Spent per each valid attempt in seconds: ${displayTimeData(timePerCorrectAttemptTaken)}\n`;
    const summaryBullsArray = `\nNumber-of-Bulls-Guessed per each valid attempt: ${displayBullsData(bullsArray)}\n`;
    const summaryCowsArray = `\nNumber-of-Cows-Guessed per each valid attempt: ${displayCowsData(cowsArray)}\n`;
    const summaryIncorrectInputs = `\nNumber of incorrect inputs in the current round: ${incorrectInputs}\n`;
    const summaryTimePerIncorrectAttemptTaken = `\nTime spent per each incorrect input in seconds: ${displayIncInputData(timePerIncorrectAttemptTaken)}\n`;

    setMessages([...messages, summaryMessage, summarySecretNumber, summarySessionTimeTaken, summaryNumberOfAttempts, summaryTimePerCorrectAttemptTaken, summaryBullsArray, summaryCowsArray, summaryIncorrectInputs, summaryTimePerIncorrectAttemptTaken]);
    
  }

  function handleNewRound() {
    startNewGame();
  }

  function handleEndGame() {
    
    const endGameMessage = `\nDear ${playerName}, THE BULLS AND COWS GAME is over for this session.`;
    setMessages([...messages, endGameMessage]);
  }

  return (
    <div className="container">
      <div className='instructions'>
      <h1>Bulls and Cows Game</h1>
      <p><span><b>Welcome {playerName}!</b></span></p>
      <p>In this game you will try to <span><b>guess a four digit number</b></span>, with <span><b>unique</b></span> (not repeating) digits.
      The number you are trying to guess is generated by computer. After each guess, <span><b>you will get a hint</b></span> to help you make a better guess in the next round. The hint will tell you how many <span><b>BULLS (matching digits in the exact positions as in the secret number)</b></span> and <span><b>COWS (matching digits in positions different than in the secret number)</b></span> are there in your guess attempt.
      </p>
      <p></p>
      <p></p>
      <p></p>
      <p>For example, with a secret number `4271`, your attempt `1234` would result with a hint `1 bull and 2 cows`. The `bull` is the digit `2` as it is in the exact position as in the secret number. Two `cows` are digits `4` and `1`, as they exist in the secret number, but in your guess attempt they are not in the exact position as in the secret number.</p>
      <p></p>
      <p></p>
      <p><span><b>Your attempt to guess</b></span> the secret number <span><b>must consist</b></span> of exactly <span><b>four</b></span> (4) <span><b>unique</b></span> (without repeating) digits. Choose your digits <span><b>exclusively among numbers 1, 2, 3, 4, 5, 6, 7, 8 or 9</b></span>. No letters, any kind of special characters or zero (0) should be included in the digits you choose. ANY CHOSEN GUESS NUMBER shorter or longer than exactly four (4) digits, containing any OTHER characters than NUMBERS FROM and including 1 TO 9, or containing empty spaces instead of digits would be considered as invalid input.</p>
      <p></p>
      <p></p>
      <p></p>
      <p><span><b>Choose how many attempts</b></span> you would like to have to guess the number. <span><b>Choose if you'd like to keep track of your previous attempts</b></span> during the current session.</p>
      <p></p>
      <p><span><b>WE HOPE YOU'LL HAVE FUN PLAYING `THE BULLS AND COWS GAME`!"</b></span></p>
      </div>
      
      <div className='game-stats'>
      <div>
        <label>Enter your name: </label>
        <input 
          type="text" 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)} 
          disabled={isGameOver}
        />
      </div>
      
      <div>
        <label>How many attempts: </label>
        <input 
          type="number" 
          value={attempts} 
          onChange={(e) => setAttempts(parseInt(e.target.value))} 
          disabled={isGameOver}
        />
      </div>
      
      <div>
        <label>Track previous attempts: </label>
        <input 
          type="checkbox" 
          checked={trackAttempts} 
          onChange={(e) => setTrackAttempts(e.target.checked)} 
          disabled={isGameOver}
        />
      </div>
      
      <div className='submitGuess'>
        <label>Your Guess: </label>
        <input 
          type="text" 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
          disabled={isGameOver}
        />
        <button style={{backgroundColor: "lightgreen"}} onClick={handleGuess} disabled={isGameOver}>Submit Guess</button>
      </div>

      {isGameOver && (
        <div className='gameOver'>
          <h2>Game Over</h2>
          <button style={{backgroundColor: "lightgreen"}} onClick={handleNewRound}>Play Another Round</button>
          <button style={{backgroundColor: "red"}} onClick={handleEndGame}>End Game</button>
        </div>
      )}

      <div className='game-messages'>
        <h2>Game Messages:</h2>
        
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
        
        
      </div>

      </div>
      
    </div>
  );
}

export default BullsAndCowsGame; */

import React, { useState, useEffect } from 'react';
import bcg from "./assets/bcg8.jpg"

function BullsAndCowsGame() {
  const [secretNumber, setSecretNumber] = useState('');
  const [playerName, setPlayerName] = useState('Player');
  const [attempts, setAttempts] = useState(10);
  const [trackAttempts, setTrackAttempts] = useState(true);
  const [guess, setGuess] = useState('');
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [messages, setMessages] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [incorrectInputs, setIncorrectInputs] = useState(0);
  const [bullsArray, setBullsArray] = useState([]);
  const [cowsArray, setCowsArray] = useState([]);
  const [timePerCorrectAttemptTaken, setTimePerCorrectAttemptTaken] = useState([]);
  const [timePerIncorrectAttemptTaken, setTimePerIncorrectAttemptTaken] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    // Generate secret number on initial render
    startNewGame();
  }, []);

  function startNewGame() {
    let secNumArr = [];
    while (secNumArr.length < 4) {
      const randomDigit = Math.floor(Math.random() * 9) + 1;
      if (!secNumArr.includes(randomDigit)) {
        secNumArr.push(randomDigit);
      }
    }
    const newGameStart = `\n\n\n\n\nA new game has started!\n\n\n\n\n`
    setSecretNumber(secNumArr.join(''));
    setSessionStartTime(new Date());
    setMessages((prevMessages) => [newGameStart, ...prevMessages]);
    setAttempts(10);
    setNumberOfAttempts(0);
    setIncorrectInputs(0);
    setBullsArray([]);
    setCowsArray([]);
    setTimePerCorrectAttemptTaken([]);
    setTimePerIncorrectAttemptTaken([]);
    setIsGameOver(false);
  }

  function handleGuess() {
    const currentStartTime = new Date();
    setStartTime(currentStartTime);

    let guessArray = Array.from(guess);
    let checkRepeated = guessArray.filter((num, index, array) => array.indexOf(num) === index);

    if (
      checkRepeated.length !== 4 || 
      guess.length !== 4 || 
      isNaN(guess) || 
      guess.includes('0')
    ) {
      const incorrectInputAlert = alert(`Sorry ${playerName}, this was INCORRECT INPUT! Your guess attempt must consist of EXACTLY FOUR UNIQUE digits. Choose your digits among and including 1, 2, 3, 4, 5, 6, 7, 8, or 9. Your guess: ${guess}`);
      setMessages((prevMessages) => [...prevMessages, incorrectInputAlert]);
      setIncorrectInputs(incorrectInputs + 1);
      const timeTakenIncorrectInput = (new Date() - currentStartTime) / 1000;
      setTimePerIncorrectAttemptTaken((prevTimes) => [...prevTimes, timeTakenIncorrectInput.toFixed(2)]);
    } else {
      let bullsCount = 0;
      let cowsCount = 0;
      for (let i = 0; i <= 3; i++) {
        if (guess.charAt(i) === secretNumber.charAt(i)) {
          bullsCount++;
        } else if (secretNumber.includes(guess.charAt(i))) {
          cowsCount++;
        }
      }

      setBulls(bullsCount);
      setCows(cowsCount);
      setBullsArray((prevBulls) => [...prevBulls, bullsCount]);
      setCowsArray((prevCows) => [...prevCows, cowsCount]);

      const timeTaken = (new Date() - currentStartTime) / 1000;
      setTimePerCorrectAttemptTaken((prevTimes) => [...prevTimes, timeTaken.toFixed(2)]);

      if (guess === secretNumber) {
        const totalTimeTaken = (new Date() - sessionStartTime) / 1000;
        const congratulatoryMessage = `Congratulations ${playerName}, you guessed the secret number ${secretNumber}! Your guess: ${guess}. It took you ${numberOfAttempts + 1} attempts and ${totalTimeTaken.toFixed(2)} seconds.`;
        setMessages((prevMessages) => [...prevMessages, congratulatoryMessage]);
        setIsGameOver(true);
        showSummary();
      } else {
        const wrongValidAttempt = `Wrong! Your guess: ${guess}. You have ${bullsCount} bulls and ${cowsCount} cows. ${attempts - 1} attempts left.`
        setAttempts(attempts - 1);
        setMessages((prevMessages) => [wrongValidAttempt, ...prevMessages]);
        setNumberOfAttempts(numberOfAttempts + 1);

        if (attempts - 1 === 0) {
          setIsGameOver(true);
          showSummary();
        }
      }
    }
    // Clear the input field after each guess
    setGuess('');
  }

  function showSummary() {
    const sessionEndTime = new Date();
    const sessionTimeTaken = (sessionEndTime - sessionStartTime) / 1000;
    setNumberOfRounds((prevRounds) => prevRounds + 1);

    const summaryMessage = `
      \n\n\n\n\nSummary for the current round:\n`;
    const summaryNumberOfRounds = `You have played a total of ${numberOfRounds + 1} round(s) in this session.\n`;
    const summarySecretNumber = `The secret number for the current round: ${secretNumber}\n`;
    const summarySessionTimeTaken = `The current round of the game lasted: ${sessionTimeTaken.toFixed(2)} second(s)\n`;
    const summaryNumberOfAttempts = `Number of attempts taken in the current round: ${numberOfAttempts + 1}\n`;

    setMessages((prevMessages) => [summaryMessage, summaryNumberOfRounds, summarySecretNumber, summarySessionTimeTaken, summaryNumberOfAttempts, ...prevMessages]);
  }

  function handleNewRound() {
    startNewGame();
  }

  function handleEndGame() {
    const endGameMessage = `\nDear ${playerName}, THE BULLS AND COWS GAME is over for this session.`;
    setMessages((prevMessages) => [...prevMessages, endGameMessage]);
  }

  

  return (
    <div className="container">
      <div className='instructions'>
        <h1>Bulls and Cows Game</h1>
        <p><span><b>Welcome {playerName}!</b></span></p>
        <p>In this game you will try to <span><b>guess a four digit number</b></span>, with <span><b>unique</b></span> (not repeating) digits.
        The number you are trying to guess is generated by the computer. After each guess, <span><b>you will get a hint</b></span> to help you make a better guess in the next round. The hint will tell you how many <span><b>BULLS (matching digits in the exact positions as in the secret number)</b></span> and <span><b>COWS (matching digits in positions different than in the secret number)</b></span> are there in your guess attempt.
        </p>
        <p>For example, with a secret number `4271`, your attempt `1234` would result in a hint `1 bull and 2 cows`. The `bull` is the digit `2` as it is in the exact position as in the secret number. Two `cows` are digits `4` and `1`, as they exist in the secret number, but in your guess attempt, they are not in the exact position as in the secret number.</p>
        <p><span><b>Your attempt to guess</b></span> the secret number <span><b>must consist</b></span> of exactly <span><b>four</b></span> (4) <span><b>unique</b></span> (without repeating) digits. Choose your digits <span><b>exclusively among numbers 1, 2, 3, 4, 5, 6, 7, 8, or 9</b></span>. No letters, any kind of special characters, or zero (0) should be included in the digits you choose. ANY CHOSEN GUESS NUMBER shorter or longer than exactly four (4) digits, containing any OTHER characters than NUMBERS FROM and including 1 TO 9, or containing empty spaces instead of digits would be considered an invalid input.</p>
        <p><span><b>Choose how many attempts</b></span> you would like to have to guess the number. <span><b>Choose if you'd like to keep track of your previous attempts</b></span> during the current session.</p>
        <p><span><b>WE HOPE YOU'LL HAVE FUN PLAYING `THE BULLS AND COWS GAME`!</b></span></p>
      </div>
      
      <div className='game-stats'>
        <div>
          <label>Enter your name: </label>
          <input 
            type="text" 
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)} 
            disabled={isGameOver}
          />
        </div>
        
        <div>
          <label>How many attempts: </label>
          <input 
            type="number" 
            value={attempts} 
            onChange={(e) => setAttempts(parseInt(e.target.value))} 
            disabled={isGameOver}
          />
        </div>
        
        <div>
          <label>Track previous attempts: </label>
          <input 
            type="checkbox" 
            checked={trackAttempts} 
            onChange={(e) => setTrackAttempts(e.target.checked)} 
            disabled={isGameOver}
           
            
          />
        </div>
        
        <div className='submitGuess'>
          <label>Your Guess: </label>
          <input 
            type="text" 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)} 
            disabled={isGameOver}
            
            
          />
          <button style={{backgroundColor: "lightgreen"}} onClick={handleGuess} disabled={isGameOver}>Submit Guess</button>
        </div>

        {isGameOver && (
          <div className='gameOver'>
            <h2>Game Over</h2>
            <button style={{backgroundColor: "lightgreen"}} onClick={handleNewRound}>Play Another Round</button>
            <button style={{backgroundColor: "red"}} onClick={handleEndGame}>End Game</button>
          </div>
        )}

        <div className='game-messages'>
          <h2>Game Messages:</h2>
          
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
              
           
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default BullsAndCowsGame;