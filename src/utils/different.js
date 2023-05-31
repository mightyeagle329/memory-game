export function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function shuffledRandomCards(cards, count = 8) {
  const shuffled = shuffle(cards)
  const shuffled_and_sliced = shuffled.slice(0, count)
  const shuffled_and_sliced_x2 = [...shuffled_and_sliced, ...shuffled_and_sliced]
  const sliced_shuffled_and_sliced_x2 = shuffle(shuffled_and_sliced_x2)

  return sliced_shuffled_and_sliced_x2
}
