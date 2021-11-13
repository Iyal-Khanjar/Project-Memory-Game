const reset = document.querySelector('.reload')
let card = document.getElementsByClassName("card");
const deck = document.getElementById("card-deck");
let cards = [...card];

let openedCards = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

document.body.onload = startGame();

function startGame() {
    openedCards = [];
    cards = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        [].forEach.call(cards, function (item) {
            deck.appendChild(item);
        });
    }
}

function displayCard() {
    this.classList.add("show");
}
function clickCard() {
    openedCards.push(this);
    let len = openedCards.length;
    if (len === 2) {
        if (openedCards[0].type === openedCards[1].type) {
            openedCards[0].classList.add("disabled","correct");
            openedCards[1].classList.add("disabled","correct");
            openedCards = [];

        } else {
            wrong()
        }
    }
};
function wrong() {
    openedCards[0].classList.add("wrong");
    openedCards[1].classList.add("wrong");
    disable();
    setTimeout(function () {
        openedCards[0].classList.remove("show", "wrong");
        openedCards[1].classList.remove("show", "wrong");
        enable();
        openedCards = [];
    }, 1100);
}

function disable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.add('disabled');
    });
}

function enable() {
    Array.prototype.filter.call(cards, function (card) {
        card.classList.remove('disabled');
        // for (var i = 0; i < matchedCard.length; i++) {
        //     matchedCard[i].classList.add("disabled");
        // }
    });
}

for (i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", clickCard);
    card.addEventListener("click", displayCard);
};

reset.addEventListener('click', () => {
    location.reload()
})