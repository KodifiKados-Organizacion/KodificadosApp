import { TYPES } from "../../actions/cardActions";

export const cardInitialState = {
  card: [],
};
export function ProductReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CARD: {
      return state.card.push(action.payload);

      //  return {...state,
      //   card:[...state.card,action.payload],
      // };
    }
    case TYPES.UPDATE_ONE_COUNT: {
      //Buscar el producto 

      // const productofind = state.card.find((producto) => {
      //   if (producto._id == action.payload._id) {
      //     return producto.Cantidad = action.payload.cantidad
      //   }
      // })

      let listnw = state.card.map((producto) => {

        if (producto._id === action.payload._id) {
          producto.Cantidad = action.payload.cantidad
        }
        return producto
      })
      state.card = listnw
      //alert(JSON.stringify(productofind))
      return state;
      break
    }
    case TYPES.REMOVE_ONE_FROM_CARD: {
      break;
    }

    case TYPES.REMOVE_ALL_FROM_CARD: {
      break;
    }

    default:
      return state;
  }
}
