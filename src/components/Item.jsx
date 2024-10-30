import React, { useContext, useEffect, useState } from "react";
import "./Item.css";
import { TodoContext } from "../context";
import cross from "./icons/cross.png"
import pencil from "./icons/edit.png"
import done from "./icons/save.png"

function Item({ item, index }) {
  const { setTodos } = useContext(TodoContext);
  const [changes, setChanges] = useState("");
  const [check, setCheck] = useState(item.completed);
  // const [tick, setTick] = useState();
  const [edit, setEdit] = useState(false);

  console.log(item);

  const handleDelete = () => {
    setTodos((prev) => {
      let itemList = prev.filter((ite, idex) => idex !== index);
      return itemList;
    });
  };

  const handleInputChange = (e) => {
    setChanges(e.target.value);
  };

  const handleEdit = () => {
    if (check === true) {
      return;
    }
    setEdit(true);
    setChanges(item.todo);
  };
  const handleComplete = () => {
    if (edit === true) {
      return;
    }
    setTodos((prev)=>
      prev.map((ite,idx) => { 
        return  (idx === index ? {...ite, completed : !check }: ite);
      })
    )
    setCheck(!check);
  };

  const handleSave = () => {

    if (changes.trim() === "") {
      alert("Please add the content");
      return;
    }

    setTodos((prev) =>
      prev.map((itm, idx) => {
        return idx === index ? {...itm, todo: changes} : itm;
      })
    );
    setEdit(false);
    setChanges("");
  };

  useEffect(() => {}, [check]);

  return (
    <div className={check ? "item itm_chk " : "item"}>
      <div className="entered_itm">
        <input
          type="checkbox"
          checked={check}
          onClick={handleComplete}
          className="checkbox"
        />

        {edit === true ? (
          <input
            value={changes}
            onChange={handleInputChange}
            className="addedItem highlite"
          ></input>
        ) : (
          <p className={check ? "addedItem checked" : "addedItem"}>{item.todo}</p>
        )}

      </div>

      <div className="btn_Item">
        {edit === true ? (
          <img src={done} className="img" onClick={handleSave} alt=""/>
        ) : (
          <img src={pencil} className="img" onClick={handleEdit} alt=""/>
        )}
        <img src={cross} className="img" onClick={handleDelete} alt=""/>
        
      </div>
    </div>
  );
}

export default Item;
