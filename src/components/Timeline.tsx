import {TIME_LIST, HOUR_LIST } from "../type/Time_hour";


type TimelineProps = {
  dayList: {
    day: number;
    date: string;
  }[];
};

export function Timeline({dayList}: TimelineProps) {
  return (
    <div className="timeslotsContainer">
      <div className="timeslotBox">
        <ul className="timeslotList">
          {TIME_LIST.map((timeItem) => {
            const splitedHour = Number(timeItem.time.split(":")[0]);
            const time = `${splitedHour}:${timeItem.time.split(":")[1]}`;
            return (
              <li key={timeItem.id} className="timeslotItem">
                {time}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="calendarContainer">
        <div className="calendarWrapper">
          <div>
            {TIME_LIST.map((timeItem) => (
              <div key={timeItem.id}>
                <div className="horizontalHeight" />
              </div>
            ))}
                </div>
          </div>
        </div>
      </div>
  );
};