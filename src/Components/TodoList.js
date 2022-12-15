import Todo from './Todo';

const TodoList =({todoList})=>{
   let list = todoList;
   console.log(list);
  
 
    return(
        <>
            <div>
            <p>{list}</p>
            </div>
         </>
     
        // <div>{todoList.map((item)=>{
        //     <Todo item= {item}/>
        // })}</div>
    );
}

export default TodoList;