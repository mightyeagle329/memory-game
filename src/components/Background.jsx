function Background() {
  return (
    <div className="area">
      <ul className="circles">
        {[...new Array(10)].map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  )
}

export default Background
