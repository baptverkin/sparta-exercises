import React from "react";

export const HideOrNotHide = () => {
  const [visibleState, changeVisibleState] = React.useState(true);

  return (
    <div>
      <button onClick={() => changeVisibleState(!visibleState)}>{visibleState ? "Hide" : "Show"}</button>
      {visibleState ? <p>Hello World</p> : <></>}
    </div>
  );
};
