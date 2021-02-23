import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import concatReducer from './reducers'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(concatReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}


// import createSagaMiddleware from 'redux-saga'
// import { combineReducers, createStore, applyMiddleware } from 'redux'

// const initialState = {
//   list: [],
//   pagination: {
//     current: 1,
//     pageSize: 10,
//     total: 0
//   }
// }

// const messageReducer = (state=initialState, action) => {
//   switch(action.type) {
//     case 'MESSAGE_FETCH_SUCCEEDED':
//       const {list, ...pagination} = action.result || {}
//       const {page, ...args} = pagination
//       return {...state, list, pagination:{
//         current: page,
//         ...args
//       }}
//     case 'MESSAGE_FETCH_FAILED':
//       return state
//       default:
//         return state
//   }
// }

// const concatReducers = combineReducers({
//   messageReducer
// })

// export default function configureStore(initialState) {
//   const sagaMiddleware = createSagaMiddleware()
//   return {
//     ...createStore(concatReducers, initialState, applyMiddleware(sagaMiddleware)),
//     runSaga: sagaMiddleware.run
//   }

// }