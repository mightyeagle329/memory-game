import { init } from '@rematch/core'
import { game } from './models/game.js'
import { level } from './models/level.js'

export const store = init({
  models: { game, level }
})
