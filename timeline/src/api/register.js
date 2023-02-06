import axios from "axios";

export const register = async (name, email, password) => {
  return await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
    name,
    email,
    password
  });
}