import Schedule from "./Schedule";
import Review from "./Review";
export default class Restaurant {
  constructor(obj) {
    this.raw = obj;
    this.id = obj.id;
    this.name = obj.name;
    this.neighborhood = obj.neighborhood;
    this.latlng = obj.latlng;
    this.picture = obj.photograph;
    this.address = obj.address;
    this.cuisine_type = obj.cuisine_type;
    this.schedule = new Schedule(obj.operating_hours);
    this.reviews = obj.reviews.map((review) => new Review(review));
  }

  get lowerName() {
    return this.name.toLowerCase();
  }

  get reviewsAccount() {
    return this.reviews.length;
  }

  get rating() {
    let rate = 0;
    for (let review of this.reviews) {
      rate += review.rating;
    }
    return rate / this.reviews.length;
  }

  get isOpenAtNow() {
    const now = new Date();
    const day = this.schedule.days[now.getDay()];
    return now > day.openAt && now < day.closeAt;
  }

  addReview(obj) {
    this.raw.reviews.splice(0, 0, obj);
    return new Restaurant(this.raw);
  }

  isOpenAt(weekDayIndex) {
    return this.schedule.days[weekDayIndex].raw !== "Closed";
  }
}
