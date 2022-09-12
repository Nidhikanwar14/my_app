import React, {useRef, useState} from "react";
import {addTodos, removeTodos, updateTodos} from "../Redux/reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        todos : state,
    };
};


const mapDispatchToProps = (dispatch) =>{
    return{
        addTodo :(obj) => dispatch(addTodos(obj)),
        removeTodos :(id) =>dispatch(removeTodos(id)),
        updateTodo : (obj) => dispatch(updateTodos(obj)),
    };
};


const Todos = (props) => {

    const [todo , setTodo] = useState("");
    const inputRef = useRef(true);

    const add = () =>{
        if(todo === ""){
            alert("Input is Empty");
        }
        else {
            props.addTodo({
                id :Math.floor(Math.random()*1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    }

    const changeFocus = () =>{
       inputRef.current.disabled = false;
       inputRef.current.focus();
    }

    const update = (id ,value ,e) =>{
        if(e.which === 13){
            props.updateTodo({id, item : value});
            inputRef.current.disabled = true;
        }
    }

    // console.log("props from store :" ,props);

    const handleChange = (e) =>{
        setTodo(e.target.value);
    }

    return(
        <div className="addTodos">

            <input
                type="text"
                className="todo-input"
                onChange={(e) => {handleChange(e)}}
                 value={todo}
            />

            <button
                className="add-btn"
                onClick={() => props.addTodo({
                id :Math.floor(Math.random()*100),
                    item:todo ,completed :false
            })} >
                Add
            </button>
            <br />

            <ul>
                {props.todos.map((item) => {
                     return (
                         <li key= {item.id}>
                             <textarea ref={inputRef}
                                       disabled={inputRef}
                                       defaultValue= {item.item}
                                       onKeyPress={(e)=>update(item.id , inputRef.current.value, e)}/>
                             <button onClick={()=> changeFocus()}>Edit</button>
                         <button onClick={() => props.removeTodos(item.id)}>Delete</button>{" "}</li>
                     );
                    })
                }
            </ul>


        </div>

    )
}

export default connect(mapStateToProps , mapDispatchToProps)(Todos);