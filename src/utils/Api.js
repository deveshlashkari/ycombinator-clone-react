import axios from "axios";
import { API_BASE_URL } from "../Constants/Contants";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${API_BASE_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${API_BASE_URL}/${type}stories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};
