import styles from "./AddTodo.module.css";
import {useRef } from "react";
function AddTodo({ handleAddItem }) {
  
  const todoName = useRef();
  const todoDueDate = useRef();

  function handleAddButtonClicked(event) {
    event.preventDefault()

    handleAddItem(todoName.current.value, todoDueDate.current.value);
  }
  return (
    <form className="row pa-row" onSubmit={(event) => handleAddButtonClicked(event)}>
      <div className="col-6">
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Todo here"
          ref = {todoName}
        ></input>
      </div>
      <div className="col-4">
        <input
          type="date"
          placeholder="dd/mm/yyyy"
          ref = {todoDueDate}
        ></input>
      </div>
      <div className="col-2">
        <button
          className="btn btn-success pa-button"
          
        >
          Add
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
