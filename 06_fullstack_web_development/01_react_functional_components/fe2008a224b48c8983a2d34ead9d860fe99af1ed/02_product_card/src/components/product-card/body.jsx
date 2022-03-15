import React from "react";

const CardBody = (props) => {
  const [show, visibleState] = React.useState(false);
  console.log("test==", props.genres);
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.cover} className="card-img" alt="zelda_cover"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text">{props.firstReleaseDate}</p>
            <div>
              {props.genres
                ? props.genres.map((item, index) => {
                    if (item.name !== undefined) {
                      return (
                        <div key={index}>
                          <p className="card-text">{item.name}</p>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index}>
                          <p className="card-text">{item}</p>
                        </div>
                      );
                    }
                  })
                : null}
            </div>
            <p className="card-text">{props.summary}</p>
            <div>
              <button onClick={() => visibleState(!show)}>{show ? "Hide Screenshots" : "Show Screenshots"}</button>
              {show ? (
                <p>
                  {props.screenshots
                    ? props.screenshots.map((screenshot, index) => <img key={index} src={screenshot.url}></img>)
                    : null}
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
