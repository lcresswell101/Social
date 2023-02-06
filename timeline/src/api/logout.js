import axios from "axios";

export const logout = async(token) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/logout`, {}, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  });
}