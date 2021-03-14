export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                issues: [action.payload, ...state.issues]
            }
        default: return state
    }
}