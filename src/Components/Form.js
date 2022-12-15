import styles from "../style.module.css";
const Form = ({todo, setTodo, todoList , setTodoList}) =>{

    const handleChange = (e) =>{
        setTodo(e.target.value);
        //console.log(todo);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setTodoList([...todoList,todo]);
        setTodo(" ");
    }
    
    return(
        <div className={styles.todo}>
            <form onSubmit={handleSubmit}>
                <input 
                 value ={todo}
                 onChange={handleChange}
                 className={styles.todoInput}
                 placeholder="Add Todo">
                 </input>

                <button type="submit" className={styles.todoBtn}>Add</button>
            </form>
        </div>
    );
}
export default Form;