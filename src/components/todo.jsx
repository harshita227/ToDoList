import { useState } from "react";
import todo from "../images/todologo.svg";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [subItemData, setSubItemData] = useState({}); // to handle sub-item input

  // Add main item
  const addItem = () => {
    if (!inputData) return;
    setItems([
      ...items,
      { text: inputData, subItems: [], showSubItems: false },
    ]);
    setInputData("");
  };

  // Add sub-item
  const addSubItem = (index) => {
    if (!subItemData[index]) return;
    const newItems = [...items];
    newItems[index].subItems.push(subItemData[index]);
    setItems(newItems);
    setSubItemData({ ...subItemData, [index]: "" });
  };

  // Delete main item
  const deleteItem = (id) => {
    const updatedItems = items.filter((_, ind) => ind !== id);
    setItems(updatedItems);
  };

  // Toggle sub-items visibility
  const toggleSubItems = (index) => {
    const newItems = [...items];
    newItems[index].showSubItems = !newItems[index].showSubItems;
    setItems(newItems);
  };

  // Remove all items
  const removeAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" width="200px" height="200px" />
            <figcaption>Make Your Own List Here...</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="bi bi-plus-lg add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((item, index) => (
              <div className="eachItem" key={index}>
                <h3>{item.text}</h3>

                <i
                  className="bi bi-chevron-right add-btn"
                  onClick={() => toggleSubItems(index)}
                ></i>
                <i
                  className="bi bi-trash delete-btn"
                  onClick={() => deleteItem(index)}
                ></i>

                {/* Sub-items display */}
                {item.showSubItems && (
                  <div className="subItems">
                    <div className="subItem-input">
                      {" "}
                      <input
                        type="text"
                        placeholder="Add Sub-item..."
                        value={subItemData[index] || ""}
                        onChange={(e) =>
                          setSubItemData({
                            ...subItemData,
                            [index]: e.target.value,
                          })
                        }
                      />
                      <i
                        className="bi bi-plus-lg add-btn"
                        onClick={() => addSubItem(index)}
                      ></i>
                    </div>

                    <ul>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
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
