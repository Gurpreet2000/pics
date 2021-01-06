import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ZA3mJsCpUXaujyaablPJ85o_WjVjhCK_mSYFt0SG_54`,
  },
});
