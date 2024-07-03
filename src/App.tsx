import { useReducer } from "react"
import { contadorReduce, initialState } from "./reducer/testingReducer"


function App() {

  const [state, dispatch] = useReducer(contadorReduce, initialState)
  return (
    <>
      <div>
        <div>{state.contador}</div>
        <button onClick={() => dispatch({type:'increment'})}>Dame click para + 1</button>
        <button onClick={() => dispatch({type:'decrement'})}>Dame click para - 1</button>
        <button onClick={() => dispatch({type: 'reset', payload: 0})}>Dame click para resetear</button>
        <button onClick={() => dispatch({type: 'custom', payload: Math.random() * 100})}>Dame click para numero random custom</button>
      </div>
    </>
  )
}

export default App
