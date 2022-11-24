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
    case TYPES.UPDATE_ONE_COUNT :{

      const {_id,cantidad}=action.payload;

      const nuevo=state.card.find((producto)=>producto._id===_id?producto.cantidad=cantidad:null)
alert(nuevo)

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
