import React, { Fragment } from "react";
import useStyles from "./styles";
export default function Schedule({ schedule }) {
  const classes = useStyles();
  const { days, weekDays } = schedule;
  return (
    <Fragment>
      <h3>Schedule</h3>
      <table className={classes.schedule}>
        <thead>
          <tr>
            <td>Day</td>
            <td>Horary</td>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => {
            return (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    new Date().getDay() === index ? "rgba(0,180,110,.2)" : "",
                }}
              >
                <td>{weekDays[index]}</td>
                <td>{day.raw}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
