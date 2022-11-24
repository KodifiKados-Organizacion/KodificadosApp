import { TYPES } from "../../actions/cardActions";

 export const cardInitialState={
    productSale:[]
 }
export function  ProductReducer(state,action){


    switch (action.type) {
        case TYPES.ADD_TO_CARD:{
           return {
            ...state,
            productSale:[...state.productSale,action.payload]
           }
            console.log("Aqui"+state)

        }
          case TYPES.REMOVE_ONE_FROM_CARD:{

          }  
         case TYPES.REMOVE_ONE_FROM_CARD:{

         }
    
        default:
          return state
    }
return state;
}