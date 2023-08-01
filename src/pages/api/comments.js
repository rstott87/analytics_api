// makes call to youtube api to get comments for a video

export default async function handler(req, res) {
  const videoId = req.query.id;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
