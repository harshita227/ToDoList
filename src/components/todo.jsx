import { useState } from "react";
import todo from "../images/todologo.svg";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      /* empty */
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  //Delete Item
  const deleteItem = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };

  //remove All
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" width="200px" height="200px"></img>
            <figcaption>Make Your Own List Here...</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items.. "
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="bi bi-plus-lg add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i className="bi bi-plus-lg add-btn"></i>
                  <i className="bi bi-chevron-right add-btn"></i>
                  <i
                    className="bi bi-trash delete-btn"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
