import thumbWar from '../thumb-war'
import * as utils from '../utils'

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = (player1, player2) => player2;
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds');

  expect(winner).toBe('Kent C. Dodds');

  utils.getWinner = originalGetWinner;
})

/*

Hints below:






See answers in the solution file



































Hint #1:

import * as utils from '../utils'





Hint #2:

const originalGetWinner = utils.getWinner






Hint #3:

utils.getWinner = functionThatAlwaysReturnsPlayer2






Hint #4:

expect(winner).toBe('Kent C. Dodds')






Hint #5:

utils.getWinner = originalGetWinner

 */
