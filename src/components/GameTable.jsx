import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import QuestionCircleSVG from '../assets/svg/question-circle.svg'

function GameTable() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cards, openCards, successCards } = useSelector((state) => state.game)
  const { current } = useSelector((state) => state.level)

  useEffect(() => {
    dispatch.game.reset(current)
  }, [dispatch, current])

  useEffect(() => {
    if (successCards.size === cards.length / 2) {
      navigate('/collect-data')
    }
  }, [navigate, cards.length, successCards.size])

  return (
    <div className={'game-table-' + current}>
      {cards.map((card, i) => {
        return (
          <div
            key={i}
            data-id={card.id}
            className={
              successCards.has(card.id)
                ? 'game-card flip okay'
                : openCards.includes(i)
                ? 'game-card flip'
                : 'game-card'
            }
            onClick={() => {
              if (openCards[1] >= 0) return
              dispatch.game.open({ i, id: card.id })
              openCards[1] >= 0 && setTimeout(dispatch.game.hide, 1000)
            }}>
            <ReactSVG src={card.src} className="hidden-svg" />
            <ReactSVG src={QuestionCircleSVG} className="question-svg" />
          </div>
        )
      })}
    </div>
  )
}

export default GameTable
