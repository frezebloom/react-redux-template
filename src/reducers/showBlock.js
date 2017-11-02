export default function showBlock(state = false, action) {
  if (action.type === "SHOW_BLOCK") {
    return [...state, action.payload];
  }
  return state;
}
