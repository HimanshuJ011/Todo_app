import styles from "../style.module.css";
import {useState} from 'react';

const Form = () =>{
    const [todo,setTodo] = useState('');
  const [todoList,setTodoList] = useState([]);

  const handleChange = (e) =>{
    setTodo(e.target.value);

  }
   const handleSubmit =(event) =>{
       event.preventDefault();
       const newList = [...todoList,todo];
       setTodoList(newList);
       setTodo("");
  }
  const handleDlt = (item) =>{
    const newTodoList = todoList.filter((task)=>  task!== item);
    setTodoList(newTodoList);
};
  return (

    <div  className={styles.todo}>
        
      <form onSubmit={handleSubmit}>
        <input className={styles.todoInput} onChange={handleChange}/>
        <button className={styles.todoBtn} type='submit'>Add</button>
      </form>

      <div className={styles.todoItem}>
        {todoList.map((items)=>{
            return (
                <div>
                <h3 className={styles.todoName}>{items}</h3>
                <button className={styles.deletebtn} onClick={()=>{handleDlt(items)}}>Done</button>
                </div>
            );

        })}      
        </div>
    </div>
      );
}

 export default Form;