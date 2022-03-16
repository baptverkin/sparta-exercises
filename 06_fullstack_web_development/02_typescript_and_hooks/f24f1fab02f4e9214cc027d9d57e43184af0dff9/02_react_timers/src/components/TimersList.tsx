import React from "react";
import { Timer } from "./Timer";
import { v4 as uuidv4 } from "uuid";

const TimersList: React.FC = () => {
  const [timer, setTimer] = React.useState<string[]>([]);

  function addTime(): void {
    console.log(timer);
    const idTimer = uuidv4();
    return setTimer([...timer, idTimer]);
  }

  function removeTime(param: string): void {
    return setTimer(timer.filter((e) => e !== param));
  }

  return (
    <ul className="list-group timers-list">
      <li className="list-group-item text-center">
        <button className="btn btn-primary" onClick={addTime}>
          Add a timer
        </button>
      </li>
      {timer.map((item) => {
        return <Timer key={item} timerId={item} removeTimer={removeTime} />;
      })}
    </ul>
  );
};

export default TimersList;
