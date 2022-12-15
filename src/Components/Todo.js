import styles from "../style.module.css";

const Todo = (todoList)=>{
  
    return(
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{todoList}</h3>
                <button className={styles.deletebtn}>Done</button>
            </div>
        </div>
    );
}

export default Todo;