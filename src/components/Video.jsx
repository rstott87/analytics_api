import Image from "next/image";

function Video(props) {
  return (
    <div className=" flex flex-col items-center gap-2 border border-red-600">
      <Image
        className="rounded-lg"
        src={props.thumbnail.url}
        width={320}
        height={320}
        alt="thumbnail from youtube video"
      />
      <h3 className="text-xl">{props.title}</h3>
      <div>{props.likes}</div>
      <div>{props.comments}</div>
      <div>{props.views}</div>
    </div>
  );
}

export default Video;
