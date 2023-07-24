import { useState } from "react";

export default function AnalysisSummary(props) {
  const [result, setResult] = useState("");
  const [analysis, setAnalysis] = useState(false);

  async function HandleGetAnalysisClick() {
    const videoData = props.dataVideos.items.map((item) => ({
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      dislikeCount: item.statistics.dislikeCount,
      commentCount: item.statistics.commentCount,
      favoriteCount: item.statistics.favoriteCount,
      publishedAt: item.snippet.publishedAt
    }));
    console.log(videoData);
    setAnalysis(true);


    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ videoData })
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }


  
  console.log(result)

  return (
    <div className="">
      {analysis ? (
        <p>{"Example Report"}</p>
      ) : (
        <button
          onClick={HandleGetAnalysisClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Run Report
        </button>
      )}
      <div>{result}</div>
    </div>
  );
}
