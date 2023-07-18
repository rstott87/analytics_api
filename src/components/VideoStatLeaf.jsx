function VideoStatLeaf(props) {
  return (
    <div className="flex flex-col items-start rounded-md text-sm font-extralight text-neutral-300 ">
      <h2 className="text-sm border-b border-violet-700 text-center">{props.title}</h2>
      <h3 className="text-center text-sm  ">
        {props.count}
      </h3>
    </div>
  );
}

export default VideoStatLeaf;
