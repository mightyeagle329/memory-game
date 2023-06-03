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
      navigate('/win')
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
                ? 'w-full h-full game-card flip okay'
                : openCards.includes(i)
                  ? 'w-full h-full game-card flip'
                  : 'w-full h-full game-card'
            }
            onClick={() => {
              if (openCards[1] >= 0) return
              dispatch.game.open({ i, id: card.id })
              openCards[1] >= 0 && setTimeout(dispatch.game.hide, 1000)
            }}>
            <div className="w-full h-full hidden-svg">
              <img src={card.src} className="w-full h-full rounded-[15px]" />
            </div>
            <div className="question-svg">
              <svg width="60" height="60" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.13538 7.38375C9.13538 7.38375 9.15619 7.39132 9.16376 7.397C11.6857 9.31539 16.0049 14.0603 14.6881 15.4017C13.2049 16.6995 11.2638 17.4865 9.13727 17.4865C7.01077 17.4865 5.06967 16.6995 3.58641 15.4017C2.26964 14.0622 6.58698 9.31539 9.10889 7.397C9.11646 7.39132 9.12781 7.38375 9.13727 7.38375H9.13538ZM13.5284 1.8537C12.2362 1.08559 10.8362 0.620178 9.13538 0.620178C7.43455 0.620178 6.03454 1.08748 4.74237 1.8537C4.72723 1.86316 4.72156 1.88019 4.72912 1.89533C4.73669 1.91046 4.75372 1.91425 4.77075 1.91046C6.40346 1.55857 8.88376 2.96804 9.12024 3.10993C9.12592 3.11372 9.1316 3.11561 9.13727 3.11561C9.14295 3.11561 9.15051 3.11182 9.1543 3.10993C9.3889 2.96804 11.8692 1.55857 13.5038 1.91046C13.5208 1.91425 13.5379 1.91046 13.5454 1.89533C13.553 1.88019 13.5454 1.86127 13.5322 1.8537H13.5284ZM3.23262 3.03993C3.21938 3.0475 3.20614 3.05696 3.19478 3.06831C1.65666 4.59508 0.701248 6.71213 0.701248 9.05242C0.701248 10.9727 1.3445 12.7435 2.42478 14.1625C2.43613 14.1757 2.45505 14.1852 2.47018 14.1757C2.48532 14.1681 2.48532 14.1492 2.47964 14.1322C1.83639 12.1438 5.12453 7.327 6.82157 5.30644C6.82725 5.29887 6.83293 5.2913 6.83293 5.28184C6.83293 5.27049 6.82725 5.26103 6.81779 5.25346C4.24479 2.69371 3.37262 2.96615 3.23073 3.03993H3.23262ZM11.4511 5.25346C11.4511 5.25346 11.4359 5.2686 11.4359 5.28184C11.4359 5.2913 11.4416 5.29887 11.4473 5.30644C13.1443 7.327 16.4325 12.1457 15.7892 14.1322C15.7835 14.1492 15.7835 14.1662 15.7987 14.1757C15.8138 14.1852 15.8327 14.1757 15.8441 14.1625C16.9263 12.7435 17.5676 10.9746 17.5676 9.05242C17.5676 6.71213 16.6141 4.59508 15.0741 3.06831C15.0627 3.05696 15.0514 3.0475 15.0362 3.03993C14.8944 2.96615 14.0203 2.6956 11.4492 5.25346H11.4511Z" fill="white" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GameTable
