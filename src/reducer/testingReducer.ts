export const initialState : InitialState = {
    contador: 1
}

type InitialState = {
    contador: number
}

type Actions = {type: 'increment'} | {type: 'decrement'} | {type: 'reset', payload: number}

export const contadorReduce = (state : InitialState, action: Actions ) : InitialState => {
    switch(action.type){
        case 'increment':
            return {...state, contador: state.contador + 1}

        case 'decrement':
            return {...state, contador: state.contador - 1};

        case 'reset':
            return {...state, contador: action.payload}
        default:
            return state
    }
}