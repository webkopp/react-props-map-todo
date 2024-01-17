import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({myTodos}) => {
    console.log(myTodos)
    return ( 
        <>
            <h1>My ToDos</h1>
            {myTodos.map((todoo, index) => {
                return (
                    <div key={index}>
                        <TodoItem
                            do={todoo.do}
                        />
                    </div>
                )
            }
            )}
        </>
     );
}
 
export default TodoList;