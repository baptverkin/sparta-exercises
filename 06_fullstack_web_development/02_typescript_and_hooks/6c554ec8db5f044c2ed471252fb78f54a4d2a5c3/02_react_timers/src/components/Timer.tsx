import React, { useEffect } from "react";

type TimerProps = {
  timerId: string;
  removeTimer: string;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [startTime, setTime] = React.useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(startTime + 1);
    }, 1000);
  }, [startTime]);

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between" id={timerId}>
      <p className="text-center">{startTime} seconds</p>
      <div className="btn btn-danger" onClick={removeTimer}>
        Delete
      </div>
    </li>
  );
};
