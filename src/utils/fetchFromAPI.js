import axios from "axios";
const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.React_App_Rapid_Api_Key,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${url}`, options);
    return data;
  } catch (error) {
    alert(error);
  }
};
