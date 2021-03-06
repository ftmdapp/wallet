import {
  SET_PRICES
} from '../../constants'

const initialState = {
  prices: null
};

const prices = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICES:
      return Object.assign({}, state, {
        prices: action.prices
      });
    default:
      return state
  }
}

export default prices
