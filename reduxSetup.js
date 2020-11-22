const INITIAL_STATE = {mood: "(•‿•)"}
const moodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "MOOD":
            return {...state, mood: action.payload}
        case "HAPPY":
            return {...state, mood: action.payload}

        case "ANGRY":
            return {...state, mood: action.payload}
        
        case "NERVOUS":
            return {...state, mood: action.payload}

        case "TIRED":
            return {...state, mood: action.payload}
        default:
            return state
    }
}

const store = Redux.createStore(moodReducer)