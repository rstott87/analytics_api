import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md"
      }
    });
    return;
  }
  const videoData = req.body.videoData || "";
  try {
    const completion = await openai.createCompletion({
      model: "davinci",
      prompt: generatePrompt(videoData),
      temperature: 0.6
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request."
        }
      });
    }
  }
}

function generatePrompt(videoData) {
  return `I'm going to give you a an array of data from the latest videos on a single YouTube channel. The data will include number of video likes on the video, date of the video, and number of comments. I want you to analyze and report on any trends that you see.

Channel Data: ${videoData}
Your Summary:`;
}
