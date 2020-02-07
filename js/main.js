'use strict'

// Connecting Javascript with HTML
// (Let the fun begin)
// What's In the Picture (proj name: in-picture)
// In this game, the player sees an image and some options that describe the image,
// the user picks the right option and moves to the next question if correct.
// 1. gQuests = [{id: 1, opts:[], correctOptIndex:1 }] gCurrQuestIdx = 0
// 2. Note: It is convenient to have the images named by the quest id (e.g. : 1.jpg)
// 3. If the player is correct, move on to next quest
// 4. After last question – show a 'Victorious' msg to the user and a restart button
// 5. Some more functions:
//     a. initGame()
//     b. createQuests() – return an hard-coded (ready made) array for now with at least 3 questions
//     c. renderQuest()
//     d. checkAnswer(optIdx)

var gQuests = [];
var gQuest = null;
var gElGameOver = document.querySelector('.over');

function initGame() {
    createQuests();
    renderQuest();
    gElGameOver.style.display = 'none';
}

function createQuests() {
    var questId = 1;
    gQuests = [ {id: questId++, opts: ['A Bat', 'A Cat'], correctOptIndex: 2},
        {id: questId++, opts: ['Guinea Pigs', 'Lizards'], correctOptIndex: 1},
        {id: questId++, opts: ['A Seal', 'A Dog'], correctOptIndex: 2} ]
}

function renderQuest() {
    gQuest = getQuest();
    var elPicture = document.querySelector('.picture img');
    var elFirstOpt = document.querySelector('.option1 h3');
    var elSecondOpt = document.querySelector('.option2 h3');
    elPicture.src = `img/${gQuest.id}.jpeg`;
    elFirstOpt.innerText = gQuest.opts[0];
    elSecondOpt.innerText = gQuest.opts[1];
}

function checkAnswer(optIdx) {
    if (optIdx === gQuest.correctOptIndex) {
        if (gQuests.length > 0) {
            renderQuest();
        } else {
            gElGameOver.style.display = 'block';
        }
    }
}

function getQuest() {
    var randomIdx = getRandomInt(0, gQuests.length - 1);
    var quest = gQuests.splice(randomIdx, 1);
    return quest[0];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and the minimum are inclusive 
}