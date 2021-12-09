
import Card from "./Card";
 import Popup from "./Popup"; 
import React, { useState } from "react";

 function List(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState({});

  const handleClickOpen = (name) => {
    setOpen(true);
    setSelected(name);
    setDetails(props.list.filter((item) => item.show.name === name)[0]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span className="List">
      {props.list.map((item) => (
        <>
          <Card
            key={item.id}
            imgSrc={item.show.image?.medium}
            name={item.show.name}
            summary={item.show.summary}
            handleOpen={handleClickOpen}
          />
          <br />
        </>
      ))}
      <Popup
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        details={details}
      />
      
    </span>
  );
}
export default List;
