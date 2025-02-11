import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";
function TodoItems({ items, handleDeleteItem }) {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <Todoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          handleDeleteItem={handleDeleteItem}
        ></Todoitem>
      ))}
    </div>
  );
}
export default TodoItems;
