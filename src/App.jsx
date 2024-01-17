import myTodos from './assets/data/myTodos'
import './App.css'
import TodoList from './assets/components/TodoList/TodoList';

function App() {
  console.log(myTodos);
  return (
    <>
      <TodoList  myTodos={myTodos}/>
    </>
  )
}

export default App