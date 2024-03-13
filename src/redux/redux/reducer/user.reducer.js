import { SIGNUP_USER } from "../action/signup.action"
import { SEARCH_USER } from "../action/search.action"
import { SHOW_MODAL } from "../action/showmodal.action"
import { USER_ID } from "../action/updateid.action"
// Initial State
const initialUserState={
    monsters:[],
    user:[],
    searchfield:"",
    products:[],
    cart:"hello world",
    showmodal:false,
    userid:null
}
export const userReducer=(state=initialUserState,action)=>{
      switch(action.type){
        case SIGNUP_USER:
            return{
                ...state,
                monsters:action.payload  //Updating State
            }

            case SEARCH_USER:
                return{
                    ...state,
                    searchfield:action.payload
                }
                case SHOW_MODAL:
                    return{
                        ...state,
                        showmodal:action.payload
                    }
                    case USER_ID:
                        return{
                            ...state,
                            userid:action.payload
                        }
            default:
                return state
      }
}

// const rememberCheck=(state=initialUserState)=>{
//     return {
//         ...state,
//         monsters:[1,2,3,4]
//     }
// }
// console.log(rememberCheck())