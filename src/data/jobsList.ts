"use server"
import axios from 'axios';

const apiUrl = process.env.API_URL;
const apiKey = process.env.RAPIDAPI_KEY || '';
const apiHost = process.env.RAPIDAPI_HOST || '';

// Index to keep track of the current key being used
let currentKeyIndex = 0;

// Function to get the next RapidAPI key
function getNextRapidApiKey() {
    currentKeyIndex = (currentKeyIndex + 1) % apiKey.split(',').length;
    return apiKey.split(',')[currentKeyIndex];
}

// Define API request configuration
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': getNextRapidApiKey(),
        'X-RapidAPI-Host': apiHost
    }
};

export const jobsList = async (query: string) => {
  try {
    let response = await axios.get(`${apiUrl}?query=${encodeURIComponent(query)}&page=1&num_pages=10`, options);
    // console.log("RESPONSE: ", response.data)
    if(response.data.status == 403){
      console.log("RapidAPI key limit reached. Please wait and try again later.");
      options.headers['X-RapidAPI-Key'] = getNextRapidApiKey();
      response = await axios.get(`${apiUrl}?query=${encodeURIComponent(query)}&page=1&num_pages=10`, options);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
