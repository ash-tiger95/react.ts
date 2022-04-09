import React, { useState } from "react";

const _SocialNetworks = [
  { title: "Twitter", color: "white", backgroundColor: "Red" },
  { title: "Facebook", color: "black", backgroundColor: "Orange" },
  { title: "Line", color: "black", backgroundColor: "Yellow" },
  { title: "Instagram", color: "white", backgroundColor: "Green" },
  { title: "Telegram", color: "white", backgroundColor: "Blue" },
  { title: "KaKao", color: "white", backgroundColor: "DarkBlue" },
  { title: "LinkedIn", color: "white", backgroundColor: "Purple" },
];

const FlowChart = () => {
  const [lists, setLists] = useState(_SocialNetworks);
  const [grab, setGrab] = React.useState(null);

  const _onDragOver = (e: any) => {
    e.preventDefault();
  };

  const _onDragStart = (e: React.DragEvent<HTMLElement>) => {
    console.log(e);
    // setGrab(e.target);
    // e.target.classList.add("grabbing");
    // e.dataTransfer.effectAllowed = "move";
    // e.dataTransfer.setData("text/html", e.target);
  };

  const _onDragEnd = (e: any) => {
    e.target.classList.remove("grabbing");

    e.dataTransfer.dropEffect = "move";
  };

  /*
  const _onDrop = (e: any) => {
    let grabPosition = Number(grab.dataset.position);
    let targetPosition = Number(e.target.dataset.position);

    let _list = [...lists];
    _list[grabPosition] = _list.splice(
      targetPosition,
      1,
      _list[grabPosition]
    )[0];

    setLists(_list);
  };*/

  return (
    <div className="App">
      <ul className="List">
        {lists.map((sns, index) => (
          <li
            key={index}
            data-position={index}
            onDragOver={_onDragOver}
            onDragStart={_onDragStart}
            onDragEnd={_onDragEnd}
            // onDrop={_onDrop}
            draggable
            style={{
              backgroundColor: sns.backgroundColor,
              color: sns.color,
              fontSize: "bold",
            }}
          >
            {sns.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlowChart;
