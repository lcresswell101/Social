import axios from "axios";

export const index = async (token) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/api/post`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
};