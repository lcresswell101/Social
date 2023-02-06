import axios from "axios";

export const store = async (title, content, token) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/api/post`,
    {
      title,
      content
    },
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
    }
  });
}