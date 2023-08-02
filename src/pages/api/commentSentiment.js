const { Configuration, OpenAIApi } = require("openai");

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
  const commentData = req.body.commentsOnVideo || "";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful YouTube analytics website that helps people understand the data on youtube videos better. "
      },
      {
        role: "user",
        content:
          `Here is a data on the comments of a youtube video. Choose three comments to analyze and report. The data is as follows: ${JSON.stringify(commentData)}`
      }
    ],
    temperature: .8,
    max_tokens: 2581,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(completion.data.choices[0].message);
  res.status(200).json({ result: completion.data.choices[0].message });
}
