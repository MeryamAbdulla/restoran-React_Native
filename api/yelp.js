import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer uZx_1XxJ4wMsS5T1fLFrBY2ZDZ2r9Lucl90yiIlLKq5irOok8jfXFT9Lta61yB0lpxdjvC2Fe0HtdgdrBQlbdMRHbnWsS4RDjwhrqSHhB_dgXPhrI9WgQK0HaNcVZXYx",
  },
});
