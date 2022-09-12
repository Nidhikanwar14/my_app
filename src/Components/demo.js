import React , {useState} from "react";

export default function Counter(){
    const [counter , setCounter] = useState(0)

    const increment = () =>{
        setCounter(prevCounter => prevCounter+1 )
    }
    const initialState = {value: 0}

    function counterReducer(state  = initialState , action){
        if(action.type === 'counter/increment'){
            return{
                ...state,
                value: state.value +1
            }
        }

        return state
    }

      return(
        <div>
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    )

}

