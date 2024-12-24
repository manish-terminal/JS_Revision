import "./App.css";
import { IoMdAddCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Fetch existing tasks from the server on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handler to add a new task
  const addHandler = () => {
    if (task.trim()) {
      // Ensure the task is not empty
      axios
        .post("http://127.0.0.1:3001/add", { task: task })
        .then((result) => {
          setTodos([...todos, result.data]); // Add the new task to the list
          setTask(""); // Clear the input field after adding
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleEdit = (id) => {
    console.log("button clicked");
    axios
      .put(`http://127.0.0.1:3001/update/${id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    console.log("clicked");
    axios
      .delete(`http://127.0.0.1:3001/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="main">
        <div className="heading">
          <h2>Basic ToDo App</h2>
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Start typing here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addHandler}>
            <IoMdAddCircle />
          </button>
        </div>
        <div className="displaybox">
          {todos.length === 0 ? (
            <div>
              <h2>No records found</h2>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        textDecoration: item.done ? "line-through" : "none",
                      }}
                    >
                      {item.task}
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item._id)}>
                        <MdDelete />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleEdit(item._id);
                        }}
                      >
                        <MdEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
