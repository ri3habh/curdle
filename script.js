const targetNumbers = [
    '651', '872', '725', '58', '654', '118', '31', '882', '684', '263', '625', '281', '818', '71', '100', '88', '660', '471', '506', '570', '502', '343', '180', '78', '916', '750', '749', '440', '618', '674', '49', '26', '847', '42', '131', '332', '569', '33', '962', '647', '634', '24', '496', '643', '400', '951', '466', '719', '114', '817', '886', '805', '913', '361', '210', '256', '392', '780', '907', '391', '945', '754', '926', '356', '65', '533', '755', '449', '138', '510', '748', '827', '943', '425', '848', '327', '276', '558', '225', '656', '390', '607', '414', '222', '86', '12', '451', '4', '266', '808', '590', '301', '772', '313', '201', '232', '96', '576', '208', '871', '434', '7', '20', '368', '395', '627', '457', '555', '918', '539', '99', '448', '386', '171', '910', '844', '580', '121', '692', '538', '200', '56', '474', '628', '624', '490', '839', '240', '677', '499', '553', '743', '316', '478', '309', '574', '504', '897', '5', '534', '312', '452', '379', '455', '652', '832', '57', '124', '76', '663', '968', '526', '269', '178', '144', '793', '944', '405', '726', '278', '954', '54', '758', '541', '595', '163', '588', '205', '920', '717', '676', '789', '512', '821', '1000', '355', '213', '632', '970', '384', '911', '739', '947', '797', '341', '237', '325', '503', '785', '955', '578', '333', '302', '273', '713', '488', '861', '967', '514', '995', '747', '908', '875', '371', '770', '591', '139', '767', '67', '123', '617', '571', '706', '868', '63', '589', '833', '734', '565', '763', '685', '467', '830', '846', '286', '516', '336', '605', '953', '170', '773', '932', '633', '883', '646', '382', '234', '697', '362', '922', '869', '407', '326', '279', '563', '979', '291', '15', '825', '162', '495', '715', '303', '623', '537', '351', '11', '543', '994', '500', '320', '318', '856', '345', '497', '293', '406', '626', '359', '38', '146', '36', '990', '787', '142', '803', '768', '350', '3', '149', '344', '352', '865', '987', '885', '322', '702', '147', '264', '476', '707', '409', '250', '864', '209', '691', '678', '154', '62', '113', '929', '884', '247', '305', '479', '721', '156', '464', '958', '370', '615', '357', '196', '732', '94', '952', '901', '544', '984', '671', '583', '766', '791', '422', '831', '942', '566', '145', '491', '568', '487', '253', '265', '445', '176', '851', '703', '804', '795', '349', '935', '458', '860', '329', '433', '597', '997', '441', '446', '921', '182', '639', '708', '399', '439', '284', '126', '989', '242', '917', '191', '653', '120', '781', '915', '809', '511', '880', '878', '346', '556', '459', '601', '197', '521', '195', '549', '788', '321', '93', '230', '438', '906', '430', '938', '398', '79', '547', '606', '421', '551', '741', '104', '853', '453', '727', '37', '89', '611', '47', '762', '244', '87', '903', '599', '637', '283', '687', '295', '306', '948', '482', '40', '470', '72', '337', '298', '141', '581', '435', '103', '930', '757', '695', '824', '522', '841', '959', '60', '128', '728', '27', '108', '287', '73', '764', '22', '246', '826', '614', '981', '331', '257', '881', '372', '985', '849', '68', '756', '801', '679', '709', '988', '342', '454', '431', '733', '270', '645', '759', '760', '602', '616', '428', '834', '976', '304', '80', '548', '25', '838', '211', '613', '711', '494', '489', '294', '366', '184', '635', '397', '485', '836', '408', '965', '573', '949', '61', '481', '956', '718', '837', '564', '680', '317', '561', '546', '524', '648', '82', '669', '202', '688', '347', '387', '396', '798', '584', '991', '133', '137', '887', '169', '966', '609', '262', '753', '779', '694', '716', '941', '148', '659', '101', '483', '790', '771', '649', '542', '292', '774', '364', '254', '418', '411', '29', '74', '75', '896', '157', '245', '164', '820', '751', '738', '557', '243', '412', '125', '696', '55', '600', '228', '311', '463', '44', '816', '650', '155', '223', '582', '419', '447', '579', '97', '765', '116', '972', '934', '777', '174', '843', '258', '845', '83', '23', '730', '712', '190', '575', '14', '665', '314', '974', '199', '285', '475', '354', '282', '745', '631', '46', '621', '982', '410', '252', '877', '931', '873', '465', '323', '271', '214', '973', '527', '807', '220', '319', '689', '552', '957', '41', '206', '166', '13', '35', '720', '936', '52', '122', '704', '353', '657', '644', '829', '375', '420', '442', '675', '310', '48', '636', '90', '698', '112', '289', '610', '672', '946', '889', '664', '175', '6', '992', '517', '978', '183', '509', '367', '693', '219', '529', '218', '892', '17', '477', '619', '393', '189', '119', '226', '158', '530', '604', '560', '360', '216', '50', '735', '498', '365', '181', '69', '598', '280', '699', '786', '587', '585', '432', '473', '961', '348', '185', '668', '272', '493', '710', '975', '900', '902', '840', '714', '179', '426', '723', '484', '858', '132', '890', '835', '260', '427', '413', '415', '374', '129', '722', '963', '782', '227', '638', '217', '594', '784', '18', '403', '740', '658', '662', '297', '106', '802', '59', '53', '811', '167', '231', '261', '888', '535', '783', '852', '752', '813', '85', '980', '520', '140', '377', '927', '334', '388', '172', '369', '507', '159', '111', '562', '971', '127', '554', '136', '436', '746', '130', '519', '744', '224', '92', '608', '268', '690', '977', '776', '203', '630', '950', '629', '855', '288', '912', '43', '248', '986', '993', '536', '919', '249', '2', '340', '895', '1', '586', '229', '842', '84', '187', '161', '642', '891', '335', '667', '456', '324', '686', '925', '815', '186', '531', '899', '862', '66', '914', '51', '307', '508', '389', '363', '177', '39', '737', '45', '402', '731', '923', '102', '221', '135', '924', '376', '525', '9', '655', '705', '115', '523', '969', '328', '800', '194', '308', '823', '117', '95', '236', '596', '238', '153', '501', '423', '682', '462', '383', '267', '165', '661', '933', '640', '939', '559', '742', '854', '338', '64', '168', '866', '193', '274', '666', '867', '339', '468', '810', '373', '998', '814', '806', '528', '299', '160', '259', '683', '876', '444', '492', '898', '417', '769', '134', '32', '729', '879', '778', '251', '736', '983', '98', '416', '469', '424', '404', '893', '241', '212', '812', '550', '461', '91', '894', '822', '577', '909', '330', '641', '701', '378', '255', '567', '603', '385', '996', '315', '152', '296', '670', '21', '796', '204', '681', '960', '70', '545', '928', '761', '505', '34', '188', '150', '532', '673', '775', '450', '151', '792', '380', '828', '612', '964', '592', '874', '207', '233', '515', '19', '819', '16', '513', '275', '198', '518', '8', '724', '622', '700', '215', '472', '572', '107', '10', '235', '486', '443', '401', '358', '870', '937', '143', '593', '540', '239', '794', '290', '300', '437', '381', '999', '105', '173', '905', '480', '30', '857', '863', '620', '109', '940', '110', '81', '799', '850', '28', '859', '904', '192', '394', '277', '460', '77'
]
// START FROM 625 ON THE DAY BEFORE IT ENDS...
const targetEquations = [
    '60*100+51',
    '98+9*86+0',
    '725+0+1-1',
    '8/4*29+00',
    '9*6+600+0',
    '9*9+50-13',
    '3*6*2-2-3',
    '882+0+0+0',
    '2*339+2*3',
    '3*99-37+3'
]

const EQUATION_LENGTH = 9
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container")
const bigAlertContainer = document.querySelector("[bigAlert-container")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 7, 1) //change date during final draft
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
console.log(dayOffset)
const targetEquation = targetEquations[Math.floor(dayOffset)]
const targetNumber = targetNumbers[Math.floor(dayOffset)]

const modal_containerFinal = document.getElementById('modal_container-final')
const closeFinal = document.getElementById('close-final')

const oldTarget = window.localStorage.getItem('oldTarget') || 0
if (targetNumber != oldTarget) {
    startInteraction()
}
else {
    const finalStringToCopy = window.localStorage.getItem('finalStringToCopy') || "error occured!"
    console.log(finalStringToCopy)
    modal_containerFinal.classList.add('show')
    modal_containerFinal.addEventListener('click', () => {
        navigator.clipboard.writeText(finalStringToCopy + "\n" + 'Try it yourself @ www.curdlegame.app')
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

var MutableString = function (value) {
    this.text = value;
};

MutableString.prototype = {
    toString: function () {
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
        navigator.clipboard.writeText(finalString + "\n" + 'Try it yourself @ www.curdlegame.app')
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

function handleKeyPress(e) {
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
    if (activeTiles.length !== EQUATION_LENGTH) {
        showAlert("Not Enough Characters!")
        shakeTiles(activeTiles)
        return
    }
    else if (activeTiles[0].innerText === '+' ||
        activeTiles[0].innerText === '-' ||
        activeTiles[0].innerText === '/' ||
        activeTiles[0].innerText === '*') {
        showAlert("Not Valid Expression!")
        shakeTiles(activeTiles)
        return
    }
    for (let i = 0; i < activeTiles.length; i++) {
        if (i < 12) {
            if (activeTiles[i].innerText === '+' ||
                activeTiles[i].innerText === '-' ||
                activeTiles[i].innerText === '/' ||
                activeTiles[i].innerText === '*') {
                if (activeTiles[i + 1].innerText === '+' ||
                    activeTiles[i + 1].innerText === '-' ||
                    activeTiles[i + 1].innerText === '/' ||
                    activeTiles[i + 1].innerText === '*') {
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
                activeTiles[i].innerText === '*') {
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
            }, { once: true })
        }
    }, { once: true })

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
        }, { once: true })
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
    for (let i = 0; i < tiles.length; i++) {
        if (i % 9 === 0 && i !== 0) {
            if (tiles[i].dataset.state === "correct") {
                tempArray[i] = "🟩\n"
            } else if (tiles[i].dataset.state === "wrong") {
                tempArray[i] = "⬛\n"
            } else {
                tempArray[i] = "🟨\n"
            }
        } else {
            if (tiles[i].dataset.state === "correct") {
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
            }, { once: true })
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