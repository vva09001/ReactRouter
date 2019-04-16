const initalState = {
    count: 0
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'ADD10':
            return {
                ...state,
                count: state.count + action.number
            }
        default:
            break;
    }
    return state;
}
export default reducer;