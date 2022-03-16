import React, { useEffect } from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [startTime, setTime] = React.useState(0);

  useEffect(() => {
    const timing = setTimeout(() => {
      setTime(startTime + 1);
    }, 1000);
    return (): void => clearTimeout(timing);
  }, [startTime]);

  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between" id={timerId}>
      <p className="text-center">{startTime} seconds</p>
      <div className="btn btn-danger" onClick={(): void => removeTimer(timerId)}>
        Delete
      </div>
    </li>
  );
};
