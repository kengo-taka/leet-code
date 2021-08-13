var deckRevealedIncreasing = function (deck) {

  deck.sort(function (a, b) {
    return a - b
  })

  if (deck.length === 1 || deck.length === 2) {
    return deck
  } else {
    let array = []
    array.push(deck[deck.length - 2])
    array.push(deck[deck.length - 1])

    deck.splice(deck.length - 1, 1)
    deck.splice(deck.length - 1, 1)

    while (deck.length !== 0) {
      array.unshift(deck[deck.length - 1])
      deck.splice(deck.length - 1, 1)
      array.splice(1, 0, array[array.length - 1])
      array.splice(array.length - 1, 1)
    }
    return array
  }
};

let deck =ƒ [17, 13, 11, 2, 3, 5, 7]

console.log(deckRevealedIncreasing(deck))