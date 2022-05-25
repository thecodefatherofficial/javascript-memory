
function level1(){
    const cards = document.querySelectorAll(".wrapper .card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".wrapper .back-view img").src,
        cardTwoImg = cardTwo.querySelector(".wrapper .back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}


function matchCards(img1, img2) {
    let info = document.querySelectorAll('.info');
        if(img1 === img2) {
            matched++;
            if(matched == 8) {
                setTimeout(() => {
                    let finishWind = document.querySelector('.finish-back');
                    finishWind.style.display = 'block';
                    return shuffleCard();
                }, 1000);
            }
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            return disableDeck = false;
        }
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);
    
        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 2000);   
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".wrapper .back-view");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
}

function level2(){
    const cards = document.querySelectorAll(".wrapper2 .card"),
    timeTag = document.querySelector(".wrapper2 .time b"),
    flipsTag = document.querySelector(".wrapper2 .flips b"),
    refreshBtn = document.querySelector(".wrapper2 .details button");

    let maxTime = 60;
    let timeLeft = maxTime;
    let flips = 0;
    let matchedCard = 0;
    let disableDeck = false;
    let isPlaying = false;
    let cardOne, cardTwo, timer;

    function initTimer() {
        if(timeLeft <= 0) {
            return clearInterval(timer);
        }
        timeLeft--;
        timeTag.innerText = timeLeft;
    }

    function flipCard({target: clickedCard}) {
        if(!isPlaying) {
            isPlaying = true;
            timer = setInterval(initTimer, 1000);
        }
        if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
            flips++;
            flipsTag.innerText = flips;
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".wrapper2 .back-view img").src,
            cardTwoImg = cardTwo.querySelector(".wrapper2 .back-view img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }

    function matchCards(img1, img2) {
        if(img1 === img2) {
            matchedCard++;
            if(matchedCard == 6 && timeLeft > 0) {
                let finishWind = document.querySelector('.finish-back');
                finishWind.style.display = 'block';
                return clearInterval(timer);
            }
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            return disableDeck = false;
        }

        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }

    function shuffleCard() {
        timeLeft = maxTime;
        flips = matchedCard = 0;
        cardOne = cardTwo = "";
        clearInterval(timer);
        timeTag.innerText = timeLeft;
        flipsTag.innerText = flips;
        disableDeck = isPlaying = false;

        let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);

        cards.forEach((card, index) => {
            card.classList.remove("flip");
            let imgTag = card.querySelector(".wrapper2 .back-view");
            setTimeout(() => {
                imgTag.src = `images/img-${arr[index]}.png`;
            }, 500);
            card.addEventListener("click", flipCard);
        });
    }

    shuffleCard();

    refreshBtn.addEventListener("click", shuffleCard);

    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
}
function level3(){
    const cards = document.querySelectorAll(".wrapper3 .card"),
    timeTag = document.querySelector(".wrapper3 .time b"),
    flipsTag = document.querySelector(".wrapper3 .flips b"),
    refreshBtn = document.querySelector(".wrapper3 .details button");

    let maxTime = 90;
    let timeLeft = maxTime;
    let flips = 0;
    let matchedCard = 0;
    let disableDeck = false;
    let isPlaying = false;
    let cardOne, cardTwo, timer;

    function initTimer() {
        if(timeLeft <= 0) {
            return clearInterval(timer);
        }
        timeLeft--;
        timeTag.innerText = timeLeft;
    }

    function flipCard({target: clickedCard}) {
        if(!isPlaying) {
            isPlaying = true;
            timer = setInterval(initTimer, 1000);
        }
        if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
            flips++;
            flipsTag.innerText = flips;
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".wrapper3 .back-view img").src,
            cardTwoImg = cardTwo.querySelector(".wrapper3 .back-view img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }

    function matchCards(img1, img2) {
        if(img1 === img2) {
            matchedCard++;
            if(matchedCard == 16 && timeLeft > 0) {
                let finishWind = document.querySelector('.finish-back');
                finishWind.style.display = 'block';
                return clearInterval(timer);
            }
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            return disableDeck = false;
        }

        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }

    function shuffleCard() {
        timeLeft = maxTime;
        flips = matchedCard = 0;
        cardOne = cardTwo = "";
        clearInterval(timer);
        timeTag.innerText = timeLeft;
        flipsTag.innerText = flips;
        disableDeck = isPlaying = false;

        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);

        cards.forEach((card, index) => {
            card.classList.remove("flip");
            let imgTag = card.querySelector(".wrapper3 .back-view");
            setTimeout(() => {
                imgTag.src = `images/img-${arr[index]}.png`;
            }, 500);
            card.addEventListener("click", flipCard);
        });
    }

    shuffleCard();

    refreshBtn.addEventListener("click", shuffleCard);

    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
}
document.querySelector('.start-game').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'block'
    document.querySelector('.start-game').style.display = 'none'
});

document.querySelector('.game-info-level .fa-xmark').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'none'
    document.querySelector('.start-game').style.display = 'block'
});

document.querySelector('#level-one').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'none'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-one-game').style.display = 'block'
});

document.querySelector('#level-two').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'none'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-two-game').style.display = 'block'
});

document.querySelector('#level-tree').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'none'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-tree-game').style.display = 'block'
});

document.querySelector('#level-one-game .fa-arrow-left').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'block'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-one-game').style.display = 'none'
});

document.querySelector('#level-two-game .fa-arrow-left').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'block'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-two-game').style.display = 'none'
});

document.querySelector('#level-tree-game .fa-arrow-left').addEventListener("click", function(){
    document.querySelector('.game-info-level').style.display = 'block'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('#level-tree-game').style.display = 'none'
});



document.querySelector('#finish-back-but').addEventListener("click", function(){
    for(elem of document.querySelectorAll('.levell')){
    document.querySelector('.game-info-level').style.display = 'block'
    document.querySelector('.start-game').style.display = 'none'
    document.querySelector('.finish-back').style.display = 'none'
    elem.style.display = 'none'
    }
});


