const redux = require('redux');
const createStore = redux.createStore;

const initalSate = {
    count : 0 ,
}
//Reducer
const reducer = (state = initalSate, action) => {
    switch (action.type) {
        case 'INC_COUNT':
            return {
                ...state,
                count : state.count + 1
            }
        case 'ADD_COUNT' :
            return {
                ...state,
                count : state.count + action.number
            }
        default:
            break;
    }
    return state;
}
// Store
const store = createStore(reducer)
//Dispatching Action
store.dispatch({type: 'INC_COUNT'});
store.dispatch({type : 'ADD_COUNT', number : 10});
//Subscription
store.subscribe(() => {
    console.log(store.getState());
});
