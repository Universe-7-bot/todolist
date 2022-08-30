import React, { useState } from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Lists from "./Lists";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const App = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]); //itemList -> array
  const itemEvent = (event) => {
    setItem(event.target.value);
  }

  const onSubmit = () => {
    if (item === "") alert("oops! you haven't added any item😞")
    else {
      setItemList((oldItems) => { //oldItems -> array of previously stored items
        return [...oldItems, item]; //returning an array
      });
      setItem("");
    }
  }

  const deleteItems = (id) => {
    // console.log("deleted");
    setItemList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="contain pt-5 mx-auto">
        <div className="pt-3 border border-light bg-light shadow-lg rounded">

          <h2 className="heading text-center border border-light bg-info p-2 rounded">ToDo List</h2>

          <div className="input p-4 text-center mx-auto">
            <input onChange={itemEvent} className="form-control text-center" type="text" value={item} placeholder="Add an item" />
            <Tooltip title="Add">
              <Button onClick={onSubmit} variant="outlined" className="m-3 btn_green shadow rounded">
                <AddIcon />
              </Button>
            </Tooltip>
          </div>

          <ul>
            {/* <li>{item}</li> */}
            {itemList.map((itemVal, index) => { //have to write inside {}
              {/* return <li>{itemVal}</li>; */ }
              return <Lists text={itemVal} key={index} id={index} onSelect={deleteItems} />;
            })
            }
          </ul>

        </div>
      </div>
    </>
  );
};

export default App;