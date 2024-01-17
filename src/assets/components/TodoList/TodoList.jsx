import { v4 as uuidv4 } from 'uuid';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({myTodos}) => {
    return ( 
        <>
            {myTodos.map((TodoItem, index) => {
                return (
                    <div key={index}>
                        <TodoItem
                            Mission1={1}
                            Mission2={2}
                            Mission3={3}
                            Mission4={4}
                            Mission5={5}
                        />
                    </div>
                )
            }
            )}
        </>
     );
}
 
export default TodoList;