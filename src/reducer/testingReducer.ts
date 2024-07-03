export const initialState : InitialState = {
    contador: 1
}

type InitialState = {
    contador: number
}

type Actions = {type: 'increment'}

export const contadorReduce = (state : InitialState, action: Actions ) : InitialState => {
    switch(action.type){
        case 'increment':
            return {...state, contador: state.contador + 1}

        default:
            return state
    }
}