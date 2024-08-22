import {TIME_LIST} from "../type/Time_hour";


type TimelineProps = {
  dayList: {
    day: number;
    date: string;
  }[];
};

export function Timeline() {
  return (
      <div>
        <ul>
          {TIME_LIST.map((timeItem) => {
            const splitedHour = Number(timeItem.time.split(":")[0]);
            const time = `${splitedHour}:${timeItem.time.split(":")[1]}`;
            return (
              <li className="horizontalHeight" key={timeItem.id}>
                {time}
              </li>
            );
          })}
        </ul>
      </div>
  );
};