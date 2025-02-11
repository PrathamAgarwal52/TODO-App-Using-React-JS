import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAddItem(itemName, itemDueDate) {
    const newTodoItems = [
      ...todoList,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoList(newTodoItems);
  }
  function handleDeleteItem(itemName, itemDueDate) {
    const filteredTodoItems = todoList.filter((item) => item.name !== itemName);
    setTodoList(filteredTodoItems);
  }

  return (
    <>
      <div className="container text-center">
        <AppName />
        <AddTodo handleAddItem={handleAddItem} />
        {todoList.length === 0 && <WelcomeMessage />}

        <TodoItems
          items={todoList}
          handleDeleteItem={handleDeleteItem}
        ></TodoItems>
      </div>
    </>
  );
}

export default App;
