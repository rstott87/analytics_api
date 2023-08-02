import { useState } from "react";

export default function AnalysisSummary(props) {
  const [result, setResult] = useState("");
  const [analysis, setAnalysis] = useState(false);
  const commentsOnVideo = props.commentsOnVideo;

  async function HandleGetAnalysisClick() {
    const videoData = props.dataVideos.items.map((item) => ({
      likeCount: item.statistics.likeCount,
      commentCount: item.statistics.commentCount,
      publishedAt: item.snippet.publishedAt,
      title: item.snippet.title
    }));

    setAnalysis(true);

    //   try {
    //     const response = await fetch("/api/generate", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({ videoData, commentsOnVideo })
    //     });

    //     const data = await response.json();
    //     if (response.status !== 200) {
    //       throw (
    //         data.error ||
    //         new Error(`Request failed with status ${response.status}`)
    //       );
    //     }

    //     setResult(data.result);
    //   } catch (error) {
    //     // Consider implementing your own error handling logic here
    //     console.error(error);
    //     alert(error.message);
    //   }
    // }
console.log(commentsOnVideo)
    try {
      const response = await fetch("/api/commentSentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ commentsOnVideo })
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


  return (
    <div className="">
      {analysis ? (
        <div>
          <p className="p-2 text-2xl">{"AI-Generated Report"}</p>
          <div className="whitespace-break-spaces text-neutral-400 font-bold">
            {result.content}
          </div>
        </div>
      ) : (
        <button
          onClick={HandleGetAnalysisClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Run Report
        </button>
      )}
    </div>
  );
}
