import { useDispatch, useSelector } from 'react-redux'

function ChangeLevel() {
  const dispatch = useDispatch()
  const { levels, current } = useSelector((state) => state.level)

  return (
    <div className="change-level">
      {levels.map((level) => {
        return (
          <div
            key={level}
            data-id={level}
            className={
              level === current
                ? 'change-level__item change-level__active-item'
                : 'change-level__item'
            }
            onClick={() => dispatch.level.change(level)}>
            {level}x{level}
          </div>
        )
      })}
    </div>
  )
}

export default ChangeLevel
