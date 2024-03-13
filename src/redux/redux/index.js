import {createStore,combineReducers, applyMiddleware} from 'redux'
import { userReducer } from './reducer/user.reducer'
 import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

 
const rootReducer=combineReducers({
    user:userReducer
    
})
const middlewares = [logger,thunk]
const store=createStore(rootReducer,applyMiddleware(logger));
export default store

// import { configureStore } from '@reduxjs/toolkit'
// import { userReducer } from './reducer/user.reducer'
// // ...
 
// export const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// })
 
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch