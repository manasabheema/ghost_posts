import axios from "axios";

const KEY = "8196190b08906dda0ebf6e6f5d";
export default axios.create({
  baseURL: "https://ghost-blog.ipxp.in/ghost/api/v3/content/",
  params: {
    key: KEY,
  },
});
