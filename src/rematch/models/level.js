export const level = {
  state: {
    levels: [2, 4, 6, 8],
    current: 6
  },
  reducers: {
    change(state, payload) {
      return { ...state, current: payload }
    }
  }
}
