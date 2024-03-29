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
  const combinedData = req.body.combinedData || "";
  // const commentData = req.body.commentsOnVideo || "";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful YouTube analytics website that helps people, mainly competing YouTube channel creators and advertisers, understand the data on YouTube videos better. You will receive data in JSON format and you will need to run an analysis on it."
      },
      {
        role: "user",
        content:
          `Hello please run an analysis on this data. Try to be brief: ${JSON.stringify(combinedData)}`
      }
    ],
    temperature: .8,
    max_tokens: 2500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(completion.data.choices[0].message);
  console.log(completion.data.usage)
  res.status(200).json({ result: completion.data.choices[0].message, usage: completion.data.usage});
}
