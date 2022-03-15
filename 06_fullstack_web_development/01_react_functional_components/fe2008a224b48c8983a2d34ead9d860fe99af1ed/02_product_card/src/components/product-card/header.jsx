import React from "react";

const CardHeader = (props) => {
  return (
    <div className="card-header">
      {props.name}
      {props.platformLogos
        ? props.platformLogos.map((item, index) => {
            if (item.name !== undefined) {
              return (
                <div key={index}>
                  <img src={item?.platform_logo.url}></img>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <img src={item?.platform_logo}></img>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default CardHeader;
