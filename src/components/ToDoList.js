import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.toDo];
    }

    default: {
    }
  }
};

function ToDoList() {
  const [toDos, dispatch] = useReducer(reducer, []);

  const handleAddToDo = () => {
    dispatch({
      type: "ADD_TODO",
      toDo: {
        id: Math.random(),
        content: "home word",
        status: "Not Started",
      },
    });
  };
  const renderToDoList = toDos.map((toDo) => {
    return (
      <div key={toDo.id}>
        <div>{toDo.content}</div>
      </div>
    );
  });
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-around items-center">
        <h1 className="text-xl">List To do</h1>
        <button
          onClick={handleAddToDo}
          className="px-4 py-2 rounded text-white bg-cyan-500 hover:bg-cyan-600"
        >
          + AddUser
        </button>
      </div>
      <div>{renderToDoList}</div>
    </div>
  );
}

export default ToDoList;
