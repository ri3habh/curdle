const targetNumbers = [
    "789",
    "1,000,000",
    "69",
    "809",
    "1000",
    "9,000",
    "19,584",
    "9,919",
    "-240",
    "10",
    "230",
    "20",
    "-1",
    "8,900",
    "-7,359",
    "4,560",
    "310",
    "82,159",
    "9,688",
    "8,619",
    "8,000",
    "-66,513",
    "18,095",
    "-34,631",
    "-51,497",
    "21,676",
    "-84,820",
    "-46,786",    
    "-18,450",
    "42,284",
    "-24,254",
    "-980",
    "405",
    "12,349",
    "456",
    "-60,586",
    "-11,342",
    "11,123",
    "22,729",
    "77,250",
    "-5,687",
    "-43,006",
    "-93,317",
    "31,331",
    "53,649",
    "97,936",
    "550",
    "-92",
    "100",
    "5,547",
    "937",
    "-4,809",
    "30,809",
    "4,444",
    "222",
    "1",
    "0",
    "99",
    "798",
    "405",
    "77,800",
    "100,000",
    "586",
    "7,808",
    "999",
    "10,923",
    "-304",
    "-9,034",
    "54,749",
    "2,039",
    "3,142",
    "10,123",
    "88",
    "89,873",
    "10,208",
    "12,111",
    "502",
    "5,806",
    "8,888"
]
const targetEquations = [
    "700+55+34",
    "10000*100",
    "9*6+1+5+9",
    "8*100+8+1",
    "1000/1+00",
    "90*101-90",
    "19584+1-1",
    "10000-9*9",
    ""

]

const EQUATION_LENGTH = 9
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container")
const bigAlertContainer = document.querySelector("[bigAlert-container")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 6, 18)
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
console.log(dayOffset)
const targetEquation = targetEquations[Math.floor(dayOffset)]
const targetNumber = targetNumbers[Math.floor(dayOffset)]

const modal_containerFinal = document.getElementById('modal_container-final')
const closeFinal = document.getElementById('close-final')

const oldTarget = window.localStorage.getItem('oldTarget') || 0
if (targetNumber != oldTarget){
    startInteraction()
} 
else {
    const finalStringToCopy = window.localStorage.getItem('finalStringToCopy') || "error occured!"
    console.log(finalStringToCopy)
    modal_containerFinal.classList.add('show')
    modal_containerFinal.addEventListener('click', () => {
        navigator.clipboard.writeText(finalStringToCopy)
    })
    showAlert("You Already Played Today, Please Be Patient!", 10000)
    stopInteration()
}

const highestWinningStreak = document.getElementById("highest-win-streak")
const currentWinStreak = document.getElementById("current-win-streak")
const totalGamesPlayedDisplay = document.getElementById("games-played")

const totalWins = window.localStorage.getItem('totalWins') || 0
const currentStreak = window.localStorage.getItem('currentStreak') || 0
const totalGamesPlayed = window.localStorage.getItem('totalGamesPlayed') || 0
currentWinStreak.innerHTML = totalWins
highestWinningStreak.innerHTML = currentStreak
totalGamesPlayedDisplay.innerHTML = totalGamesPlayed

var MutableString = function(value) {
    this.text = value;
  };
  
  MutableString.prototype = {
    toString: function() {
      return this.text;
    }
  };

var returnString = new MutableString('');

let finalString = ""
var tilesLength = 0
let highestWinningStreakCount = 0;
let currentWinStreakCount = 0;

const numToGuess = document.getElementById("numberToGuess")
numToGuess.innerHTML = targetNumber;

// const finalGrid = document.getElementById("sharingGrid")

function startInteraction() {
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handleKeyPress);
}

function stopInteration() {
    closeFinal.addEventListener('click', () => {
        navigator.clipboard.writeText(finalString)
    })
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key)
        return
    }

    if (e.target.matches("[data-enter]")) {
        submitGuess()
        return
    }

    if (e.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}

function handleKeyPress(e){
    console.log(e)
    if (e.key === "Enter") {
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }

    if (e.key.match(/^[0-9+*/-]*$/)) {
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= EQUATION_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess() {
    const operatorCounter = 0
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== EQUATION_LENGTH){
        showAlert("Not Enough Characters!")
        shakeTiles(activeTiles)
        return
    }
    else if (activeTiles[0].innerText === '+' ||
             activeTiles[0].innerText === '-' ||
             activeTiles[0].innerText === '/' || 
             activeTiles[0].innerText === '*' ) {
                showAlert("Not Valid Expression!")
                shakeTiles(activeTiles)
                return
             }
    for (let i = 0; i < activeTiles.length; i++){
        if (i < 12){
        if (activeTiles[i].innerText === '+' ||
            activeTiles[i].innerText === '-' ||
            activeTiles[i].innerText === '/' || 
            activeTiles[i].innerText === '*' ) {
                if (activeTiles[i + 1].innerText === '+' ||
                    activeTiles[i + 1].innerText === '-' ||
                    activeTiles[i + 1].innerText === '/' || 
                    activeTiles[i + 1].innerText === '*' ){
                        showAlert("Not Valid Expression!")
                        shakeTiles(activeTiles)
                        return     
                }
            //    operatorCounter = operatorCounter + 1 
        }
    } else {
        if (activeTiles[i].innerText === '+' ||
            activeTiles[i].innerText === '-' ||
            activeTiles[i].innerText === '/' || 
            activeTiles[i].innerText === '*' ) {
                showAlert("Not Valid Expression!")
                shakeTiles(activeTiles)
                return
            }
    }
    }
  //  if (operatorCounter === 0) {
  //      showAlert("Not Valid Expression!")
  //      shakeTiles(activeTiles)
  //      return
  //  }
  

  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter
  }, "")

  console.log(guess)

  stopInteration()
  activeTiles.forEach((...params) => flipTile(...params, guess))
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    setTimeout(() => {
        tile.classList.add("flip")
    }, index * FLIP_ANIMATION_DURATION / 2)

    tile.addEventListener("transitionend", () => {
        tile.classList.remove("flip")
        if (targetEquation[index] === letter) {
            tile.dataset.state = "correct"
            key.classList.add("correct")
        } else if (targetEquation.includes(letter)) {
            tile.dataset.state = "wrong-location"
            key.classList.add("wrong-location")
        } else {
            tile.dataset.state = "wrong"
            key.classList.add("wrong")
        }

        if (index === array.length - 1) {
            tile.addEventListener("transitionend", () => {
                startInteraction()
                checkWinLose(guess, array)
            }, {once: true})
        }
    }, {once: true})

}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return

    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () => {
            alert.remove()
        })
    }, duration)
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("shake")
        }, {once: true})
    })
}

function showBigAlert(message, duration = 1000) {
    const bigAlert = document.createElement("div")
    bigAlert.textContent = message
    bigAlert.classList.add("bigAlert")
    bigAlertContainer.prepend(bigAlert)
    if (duration == null) return

    setTimeout(() => {
        bigAlert.classList.add("hide")
        bigAlert.addEventListener("transitionend", () => {
            bigAlert.remove()
        })
    }, duration)
}

function createString(tiles) {
    oldTilesLength = tilesLength
    tilesLength += tiles.length
    var tempArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
   // var tempString = new MutableString('');
    console.log(oldTilesLength)
    console.log(tilesLength)
      
   // console.log(tiles[oldTilesLength].dataset.state)
    for (let i = 0; i < tiles.length; i++){
        if (i % 9 === 0 && i !== 0){
            if (tiles[i].dataset.state === "correct"){
                tempArray[i] = "🟩\n"
            } else if (tiles[i].dataset.state === "wrong") {
                tempArray[i] = "⬛\n"
            } else {
                tempArray[i] = "🟨\n"
            }
        } else {
            if (tiles[i].dataset.state === "correct"){
                tempArray[i] = "🟩"
            } else if (tiles[i].dataset.state === "wrong") {
                tempArray[i] = "⬛"
            } else {
                tempArray[i] = "🟨"
            }
        }
    }
    let tempString = tempArray.join("");
    console.log(tempString)
    finalString = finalString.concat("\n", tempString)
    console.log(finalString)
    window.localStorage.setItem('finalStringToCopy', finalString)
}

function checkWinLose(guess, tiles) {
    createString(tiles)

    if (guess === targetEquation) {
        showAlert("You Win!", 9000)   
        modal_containerFinal.classList.add('show')
        // updating localStorage
        const totalWins = window.localStorage.getItem('totalWins') || 0
        window.localStorage.setItem('totalWins', Number(totalWins) + 1)
        currentWinStreak.innerHTML = totalWins

        // updating localStorage
        const currentStreak = window.localStorage.getItem('currentStreak') || 0
        window.localStorage.setItem('currentStreak', Number(currentStreak) + 1)
        highestWinningStreak.innerHTML = currentStreak

        const totalGamesPlayed = window.localStorage.getItem('totalGamesPlayed') || 0
        window.localStorage.setItem('totalGamesPlayed', Number(totalGamesPlayed) + 1)
        totalGamesPlayedDisplay.innerHTML = totalGamesPlayed

        danceTiles(tiles)
        window.localStorage.setItem('oldTarget', targetNumber)
        stopInteration()
        return
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")

    if (remainingTiles.length === 0) {
        showAlert(targetEquation, null)
        // updating localStorage
        const currentStreak = window.localStorage.getItem('currentStreak') || 0
        window.localStorage.setItem('currentStreak', 0)
        highestWinningStreak.innerHTML = currentStreak
        modal_containerFinal.classList.add('show')

        const totalGamesPlayed = window.localStorage.getItem('totalGamesPlayed') || 0
        window.localStorage.setItem('totalGamesPlayed', Number(totalGamesPlayed) + 1)
        totalGamesPlayedDisplay.innerHTML = totalGamesPlayed
        window.localStorage.setItem('oldTarget', targetNumber)
        stopInteration()
    }
}

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {

        tile.classList.add("dance")
        tile.addEventListener("animationend", () => {
            tile.classList.remove("dance")
        }, {once: true})
    }, index * DANCE_ANIMATION_DURATION / 5)
})
}

//If you want to copyText from Element
 //function copyTextFromElement(elementName) {
   // let element = document.getElementById(elementName); //select the element
   // element.innerHTML = finalString
  //  let elementText = element.innerHTML; //get the text content from the element
//    copyText(elementText); //use the copyText function below
// }
  
  //If you only want to put some Text in the Clipboard just use this function
  // and pass the string to copied as the argument.
//  function copyText(text) {
  //  navigator.clipboard.writeText(text);
  //}

const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    modal_container.classList.add('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})

const open2 = document.getElementById('open-2')
const modal_container2 = document.getElementById('modal_container-2')
const close2 = document.getElementById('close-2')

open2.addEventListener('click', () => {
    modal_container2.classList.add('show')
})

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show')
})

const open3 = document.getElementById('open-3')
const modal_container3 = document.getElementById('modal_container-3')
const close3 = document.getElementById('close-3')

open3.addEventListener('click', () => {
    modal_container3.classList.add('show')
})

close3.addEventListener('click', () => {
    modal_container3.classList.remove('show')
})