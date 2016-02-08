import actionTypes from "js/actionTypes"

export default function(state="default", action) {
  switch (action) {
    case actionTypes.PLACEHOLDER:
      return action.message
    default:
      return state
  }
}