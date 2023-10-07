import axios from "axios";

const baseURL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

export const getPosts = async () => {
  try {
    const response = await axios.get(baseURL);
    // console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
