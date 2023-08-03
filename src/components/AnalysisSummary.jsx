import { useState } from "react";
import Loader from "./Loader";

export default function AnalysisSummary(props) {
  const [result, setResult] = useState("");
  const [analysis, setAnalysis] = useState(false);
  const [loading, setLoading] = useState(false);
  const commentsOnVideo = props.commentsOnVideo;
  const channelData = props.channelData;
  const dataVideos = props.dataVideos;

// combine one stringified json object from commentsOnVideo, channelData, and dataVideos
 
const combinedData ={ commentsOnVideo};

console.log(combinedData);

  async function HandleGetAnalysisClick() {
    setAnalysis(true);
    setLoading(true);
    console.log(channelData);
    console.log(dataVideos);
    console.log(commentsOnVideo);
    try {
      const response = await fetch("/api/commentSentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ combinedData })
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setLoading(false);
      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
      setLoading(false);
      setAnalysis(false);
    }
  }

  return (
    <div className="">
      {analysis ? (
        <div>
          <p className="p-2 text-2xl">{"AI-Generated Report"}</p>
          <div className="whitespace-break-spaces font-bold text-neutral-400 text-center">
            {result.content}
          </div>
        </div>
      ) : (
        <button
          onClick={HandleGetAnalysisClick}
          className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-neutral-100 hover:bg-blue-700"
        >
          {"RUN REPORT"}
        </button>
      )}
      {loading && <Loader />}
    </div>
  );
}
