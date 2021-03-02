const TodoList = ({ todos, UpdateTodo, DeleteTodo }) => {
  return (
    <div className="todo--list">
      {todos.map((todo, i) => {
        return (
          <li
            key={i}
            className={todo.done ? "done--todo draggable" : "draggable"}
            onClick={() => UpdateTodo(todo.value)}
            onDoubleClick={() => DeleteTodo(todo.value)}
            draggable="true"
          >
            {todo.value}
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
