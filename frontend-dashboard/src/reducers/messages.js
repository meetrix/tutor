import {REDUX_ACTIONS} from "../constants/constant";

const messages = (state = [], action) => {
    switch (action.type) {
        case REDUX_ACTIONS.ADD_MESSAGE:
        case REDUX_ACTIONS.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    // author: action.author,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default messages