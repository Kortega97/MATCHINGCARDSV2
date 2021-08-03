let moveCount = document.querySelector('.moveCount')
let count = 0
let deck = document.querySelector('.cardSection')
document.querySelector('button').addEventListener('click',shuffleCards)

 document.querySelector('.cardSection').addEventListener('click', matchingCards);
 let cardOrder = [],
     selected = [],
     matched = 0;
 function shuffleCards() {
     cardOrder = []
     count = 0
     moveCount.innerHTML = count
     let card1 = '\'img/life.png\'',
         card2 = '\'img/Busy.png\'',
         card3 = '\'img/gibby.jfif\'',
         card4 = '\'img/ranpart.jfif\'',
         card5 = '\'img/giphy_s.gif\'',
         
         cards = [card1, card1, card2, card2, card3, card3, card4, card4, card5, card5];
     const deck = document.querySelectorAll('.card');
     deck.forEach(card => {
         let random;
         do {
             random = Math.floor(Math.random() * 10)
         } while (cards[random] === undefined)
         cardOrder.push(cards[random]);
         card.style.backgroundImage = 'url(\'img/island.jpg\')';
         card.style.borderColor = 'black'
         delete cards[random];
     });
     
 }

 shuffleCards();
 function matchingCards(e) {
   
     if (e.target.className === 'card'){
         console.log(e.target.innerHTML)
         if(e.target.style.backgroundImage === 'url(\"img/island.jpg\")'){
         let cardNumber = e.target.dataset.value;
         console.log(cardNumber)
         selected.push(e.target);
         let img = cardOrder[cardNumber]
         e.target.style.backgroundImage = `url(${img})`;
         e.target.style.borderColor = 'white'
        count++
        moveCount.innerHTML = count
        e.target.innerHTML = ''
         } 
     }
     if (selected.length === 2) {
         document.querySelector('.cardSection').removeEventListener('click', matchingCards);

         if (selected[0].style.backgroundImage === selected[1].style.backgroundImage) {
             matched++;
         }
         else {
             setTimeout(() => {
                selected[0].innerHTML =  '<img class= \'cardsBack\' src=\"img/apex.gif\" alt=\"\"></img>'
                selected[1].innerHTML =  '<img class= \'cardsBack\' src=\"img/apex.gif\" alt=\"\"></img>'
                selected[0].style.borderColor = 'black'
                selected[1].style.borderColor = 'black'
                selected[0].style.backgroundImage = 'url(\'img/island.jpg\')';
                selected[1].style.backgroundImage = 'url(\'img/island.jpg\')'; 
             }, 1000);
             
         }
         setTimeout(() => {
             selected = [];
             document.querySelector('.cardSection').addEventListener('click', matchingCards);
         }, 1000);
         console.log(selected);
         
     }
 }