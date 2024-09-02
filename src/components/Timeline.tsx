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
            const time = timeItem.time;
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