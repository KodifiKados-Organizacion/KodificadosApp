
import { TYPES } from "../../actions/cardActions";

export const cardInitialState = {
  card: [],
};
export function ProductReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CARD: {
      state.card.push(action.payload);
      return state
    }
    case TYPES.UPDATE_ONE_COUNT: {

      let listnw = state.card.map((producto) => {

        if (producto._id === action.payload._id) {
          producto.Cantidad = action.payload.cantidad
        }
        return producto
      })
      state.card = listnw

      return state;
      break;
    }
    case TYPES.REMOVE_ONE_FROM_CARD: {


      let nwproduct = state.card.filter((producto) => producto._id !== action.payload._id)
      
      state.card = nwproduct;
      return state;
      break;

    }

    case TYPES.REMOVE_ALL_FROM_CARD: {
      break;
    }

    default:
      return state;
  }
}
