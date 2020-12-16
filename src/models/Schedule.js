export default class Schedule {
  constructor(obj) {
    const regex = new RegExp(/(\d{1,2}):(\d{1,2}) ([ampm]{2,2})/, "g");
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today + 24 * 60 * 60 * 1000).getTime();
    this.days = [];
    for (let day of Object.values(obj)) {
      const matches = Array.from(day.matchAll(regex));
      const open = matches[0];
      const closes = matches[1];
      this.days.push({
        raw: day,
        openAt: new Date(
          today +
            (open[3] === "am" || open[1] === "12"
              ? parseInt(open[1])
              : 12 + parseInt(open[1])) *
              3600 *
              1000 +
            parseInt(open[2]) * 60 * 1000
        ),
        closeAt: new Date(
          (closes[3] === "am" ? tomorrow : today) +
            (closes[3] === "am" || closes[1] === "12"
              ? closes[1] !== "12"
                ? parseInt(closes[1])
                : 0
              : 12 + parseInt(closes[1])) *
              3600 *
              1000 +
            closes[2] * 60 * 1000
        ),
      });
    }
  }

  get weekDays() {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurstday",
      "Friday",
      "Saturday",
    ];
  }
}
