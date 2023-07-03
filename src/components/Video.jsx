import Image from "next/image";
import VideoStatLeaf from "./VideoStatLeaf";

function Video(props) {
  return (
    <li className=" flex flex-col items-center gap-2 border border-gray-600 rounded-xl p-3">
      {/* <Image
        className="rounded-lg"
        src={props.thumbnail}
        width={300}
        height={300}
        alt="thumbnail from youtube video"
      /> */}
      <h3 className="text-center text-sm ">{props.title}</h3>
      <div className="grid w-full gap-4">
        <VideoStatLeaf title="Date" count={props.date} />
        <VideoStatLeaf title="Likes" count={props.likes} />
        <VideoStatLeaf title="Comments" count={props.comments} />
        <VideoStatLeaf title="Views" count={props.views} />
      </div>

      {/* <div>
        <div>Likes</div>
        <p>{props.likes}</p>
      </div>
      <div>
        <div>Views</div>
        <p>{props.views}</p>
      </div>
      <div>
        <div>Comments</div>
        <p>{props.comments}</p>
      </div> */}
    </li>
  );
}

export default Video;
