import { shuffledRandomCards } from '../../utils/different.js'
import images from '../../utils/loadSvg.js'

const init = {
  score: 0,
  bestScore: 0,
  success: 0,
  cards: images.slice(0, 8),
  openCards: [-1, -1],
  successCards: new Set(),
  currentId: null
}

export const game = {
  state: init,
  reducers: {
    reset(_, payload) {
      const cards = shuffledRandomCards(images, (payload * payload) / 2)

      return { ...init, cards, successCards: new Set() }
    },
    open(state, payload) {
      let { score, success, openCards, successCards, currentId } = state

      // repeat click first card
      if (payload.i === openCards[0]) {
        return state
      }

      // test click second card
      if (payload.i === openCards[1]) {
        return state
      }

      // repeat click success card
      if (successCards.has(payload.id)) {
        return state
      }

      // closed first card
      if (openCards[0] < 0) {
        openCards = [payload.i, -1]
        currentId = payload.id

        return { ...state, openCards, currentId }
      }

      // opened first card and closed second
      if (openCards[0] >= 0 && openCards[1] < 0) {
        openCards[1] = payload.i
        score--

        // first card id === second card id
        if (currentId === payload.id) {
          successCards.add(payload.id)
          success++
          score += state.cards.length - state.successCards.size
        }

        return { ...state, score, success, openCards, successCards }
      }

      return state
    },
    hide(state) {
      return { ...state, openCards: [-1, -1] }
    }
  }
}
