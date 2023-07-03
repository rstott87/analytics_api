import Image from "next/image";

function Video(props) {
  return (
    <div>
      <div>{props.title}</div>
      <Image 
        src={props.thumbnail.url}
        width={320}
        height={320}
      />
    </div>
  );
}

export default Video;
