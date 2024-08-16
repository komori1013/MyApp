import {TIME_LIST, HOUR_LIST } from "../type/Time_hour";


type TimelineProps = {
  dayList: {
    day: number;
    date: string;
  }[];
};

export function Timeline({dayList}: TimelineProps) {
  const EmptyCell = (date: { date: string }) => {
    return (
      <>
        {HOUR_LIST.map((hourList, index) => {
          return (
            <div key={hourList.hour}
              onClick={() => {
                console.log(date, `${hourList.hour}時`);
              }}
              className="empty"
            />
          );
        })}
      </>
    );
  };

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
          <div className="eventContainer">
          {dayList.map((dayItem, index) => {
              return (
                <div
                  key={dayItem.date}
                  style={{ gridColumn: index + 1 }}
                  className="calendarColumn"
                >
                  <div className="date">
                    {dayItem.date.split("-").at(1)}-
                    {dayItem.date.split("-").at(2)}
                  </div>
                  <EmptyCell date={dayItem.date} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};