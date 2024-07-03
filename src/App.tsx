import { useReducer } from "react"
import { contadorReduce, initialState } from "./reducer/testingReducer"


function App() {

  const [state, dispatch] = useReducer(contadorReduce, initialState)
  return (
    <>
      <div>
        <div>{state.contador}</div>
        <button onClick={() => dispatch({type:'increment'})}>Dame click</button>
      </div>
    </>
  )
}

export default App
